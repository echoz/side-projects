#!/usr/bin/env python3
"""Stage only approved public files and validate their static references.

Run from the repository root. This deliberately checks static HTML/CSS/SVG;
JavaScript-created URLs and full browser accessibility require browser checks.
"""
import argparse
from html.parser import HTMLParser
import json
from pathlib import Path, PurePosixPath
import re
import shutil
import tempfile
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET


class SiteError(ValueError):
    """An artifact does not satisfy the public-site contract."""


def load_assets(root):
    assets = json.loads((root / 'public-assets.json').read_text())
    if not isinstance(assets, list) or not assets:
        raise SiteError('public-assets.json must be a nonempty array of file paths')
    seen = set()
    for name in assets:
        if not isinstance(name, str) or not name:
            raise SiteError('Manifest paths must be nonempty strings')
        path = PurePosixPath(name)
        has_unsafe_parts = any(part in ('', '.', '..') for part in name.split('/'))
        has_url_syntax = any(character in name for character in '\\?#%:')
        has_control_characters = any(ord(character) < 32 for character in name)
        if path.is_absolute() or has_unsafe_parts or has_url_syntax or has_control_characters:
            raise SiteError(f'Unsafe manifest path: {name}')
        if name in seen:
            raise SiteError(f'Duplicate manifest path: {name}')
        seen.add(name)
        source = root / name
        if any(parent.is_symlink() for parent in (source, *source.parents)):
            raise SiteError(f'Public asset or parent is a symlink: {name}')
        if not source.is_file():
            raise SiteError(f'Public asset must be a regular file: {name}')
    return assets


def css_references(css):
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    # Escaped CSS references need a CSS parser; reject rather than misresolve them.
    urls = re.findall(r'url\(\s*(?:"([^"]*)"|\'([^\']*)\'|([^)]*))\s*\)', css, re.I)
    references = [next(value for value in match if value).strip() if any(match) else ''
                  for match in urls]
    references.extend(match[1] for match in re.findall(r'@import\s+(["\'])(.*?)\1', css, re.I))
    if any('\\' in reference for reference in references):
        raise SiteError('Escaped CSS asset references are unsupported')
    return references


class HTMLDocument(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.references = []
        self.aria_references = []
        self.styles = []
        self.in_style = False

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        identifier = attrs.get('id')
        if identifier is not None:
            if identifier in self.ids:
                raise SiteError(f'Duplicate ID: {identifier}')
            self.ids.add(identifier)
        if tag == 'base':
            raise SiteError('HTML base elements are unsupported; use relative references')
        if tag == 'img' and 'alt' not in attrs:
            raise SiteError('Image is missing alt text')
        for key in ('href', 'src', 'poster', 'data', 'xlink:href'):
            if key in attrs and attrs[key] is not None:
                is_navigation = tag in ('a', 'area') and key == 'href'
                self.references.append((attrs[key], is_navigation))
        if 'srcset' in attrs:
            # Public assets use ordinary file URLs, so commas separate candidates.
            self.references.extend((candidate.strip().split()[0], False)
                                   for candidate in attrs['srcset'].split(',') if candidate.strip())
        for key in ('aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-owns',
                    'aria-activedescendant', 'aria-details', 'aria-errormessage'):
            self.aria_references.extend((attrs.get(key) or '').split())
        if 'style' in attrs:
            self.styles.append(attrs['style'])
        self.in_style = tag == 'style' or self.in_style

    handle_startendtag = handle_starttag

    def handle_endtag(self, tag):
        if tag == 'style':
            self.in_style = False

    def handle_data(self, data):
        if self.in_style:
            self.styles.append(data)


def validate_artifact(root):
    identifiers = {}
    references = []
    for file in sorted(root.rglob('*')):
        if not file.is_file():
            continue
        name = file.relative_to(root).as_posix()
        if file.suffix == '.html':
            document = HTMLDocument()
            try:
                document.feed(file.read_text())
            except SiteError as error:
                raise SiteError(f'{name}: {error}') from error
            for identifier in document.aria_references:
                if identifier not in document.ids:
                    raise SiteError(f'{name}: Broken ARIA reference: {identifier}')
            identifiers[name] = document.ids
            references.extend((name, value, navigation) for value, navigation in document.references)
            for style in document.styles:
                references.extend((name, value, False) for value in css_references(style))
        elif file.suffix == '.css':
            references.extend((name, value, False) for value in css_references(file.read_text()))
        elif file.suffix == '.svg':
            document = ET.parse(file)
            ids = set()
            for element in document.iter():
                identifier = element.get('id')
                if identifier is not None:
                    if identifier in ids:
                        raise SiteError(f'{name}: Duplicate ID: {identifier}')
                    ids.add(identifier)
                for key, value in element.attrib.items():
                    if key.rsplit('}', 1)[-1] in ('href', 'src'):
                        is_navigation = element.tag.rsplit('}', 1)[-1] == 'a'
                        references.append((name, value, is_navigation))
                    references.extend((name, ref, False) for ref in css_references(value))
                if element.tag.rsplit('}', 1)[-1] == 'style' and element.text:
                    references.extend((name, ref, False) for ref in css_references(element.text))
            identifiers[name] = ids
    for source, reference, is_navigation in references:
        parsed = urlsplit(reference.strip())
        is_external = bool(parsed.scheme or parsed.netloc)
        if is_external:
            allowed_navigation = is_navigation and parsed.scheme.lower() in ('http', 'https', 'mailto', 'tel')
            if allowed_navigation:
                continue
            raise SiteError(f'{source}: Remote or unsupported embedded reference: {reference}')
        local_path = unquote(parsed.path)
        if local_path.startswith('/') or '\\' in local_path:
            raise SiteError(f'{source}: Reference must be relative: {reference}')
        target = root / source if not local_path else (root / source).parent / local_path
        target = target.resolve()
        if not target.is_relative_to(root.resolve()):
            raise SiteError(f'{source}: Reference escapes artifact: {reference}')
        if target.is_dir():
            target = target / 'index.html'
        if not target.is_file():
            raise SiteError(f'{source}: Missing staged reference: {reference}')
        target_name = target.relative_to(root.resolve()).as_posix()
        fragment = unquote(parsed.fragment)
        if fragment and target_name in identifiers and fragment not in identifiers[target_name]:
            raise SiteError(f'{source}: Missing fragment in {target_name}: {fragment}')


def check_output(root, output, assets):
    # Never delete source files or traverse symlinks when replacing a previous build.
    if any(parent.is_symlink() for parent in (output, *output.parents)):
        raise SiteError('Output or parent must not be a symlink')
    if output == root or root.is_relative_to(output):
        raise SiteError('Output must not contain the source root')
    for asset in assets:
        source = root / asset
        if source == output or source.is_relative_to(output):
            raise SiteError('Output overlaps an approved source asset')
    if output.exists():
        if not output.is_dir():
            raise SiteError('Output must be a directory')
        allowed_directories = {str(parent) for name in assets for parent in PurePosixPath(name).parents
                               if str(parent) != '.'}
        for item in output.rglob('*'):
            name = item.relative_to(output).as_posix()
            if item.is_symlink() or (item.is_dir() and name not in allowed_directories):
                raise SiteError(f'Refusing to replace unexpected output entry: {name}')
            if not item.is_dir() and (not item.is_file() or name not in assets):
                raise SiteError(f'Refusing to replace unexpected output entry: {name}')


def build_site(root, output):
    assets = load_assets(root)
    check_output(root, output, assets)
    output = output.resolve()
    check_output(root, output, assets)
    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='.site-build-', dir=output.parent) as staging:
        staged_root = Path(staging)
        for name in assets:
            target = staged_root / name
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(root / name, target)
        validate_artifact(staged_root)
        if output.exists():
            shutil.rmtree(output)
        shutil.copytree(staged_root, output)
    return len(assets)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, default=Path('_site'))
    args = parser.parse_args()
    try:
        count = build_site(Path.cwd().resolve(), args.output.absolute())
    except (ValueError, OSError, ET.ParseError) as error:
        parser.exit(1, f'Site build failed: {error}\n')
    print(f'Staged and validated {count} approved public assets in {args.output}')


if __name__ == '__main__':
    main()
