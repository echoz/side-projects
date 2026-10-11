"""Contract fixtures exercise the real CLI, independent of implementation helpers."""
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest


SCRIPT = Path(__file__).resolve().parents[1] / 'scripts' / 'build_site.py'


class SiteArtifactTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name).resolve()

    def write(self, name, text):
        path = self.root / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text)

    def build(self, assets, *arguments):
        self.write('public-assets.json', json.dumps(assets))
        return subprocess.run([sys.executable, str(SCRIPT), *arguments], cwd=self.root,
                              capture_output=True, text=True)

    def assert_rejected(self, assets, diagnostic):
        result = self.build(assets)
        self.assertNotEqual(result.returncode, 0, result.stdout)
        self.assertIn(diagnostic, result.stderr)
        self.assertFalse((self.root / '_site').exists())

    def test_allowlist_excludes_private_sentinel_and_build_is_repeatable(self):
        self.write('index.html', '<a href="https://example.com/">External navigation</a>')
        self.write('private-sentinel.txt', 'NEVER PUBLISH THIS')
        for _ in range(2):
            result = self.build(['index.html'])
            self.assertEqual(result.returncode, 0, result.stderr)
            names = [path.relative_to(self.root / '_site').as_posix()
                     for path in (self.root / '_site').rglob('*') if path.is_file()]
            self.assertEqual(names, ['index.html'])

    def test_manifest_rejects_unsafe_and_duplicate_paths(self):
        self.write('index.html', '<p>Public</p>')
        for assets in [['../private.txt'], ['/private.txt'], ['./index.html'],
                       ['nested//index.html'], ['index.html?secret'], ['index.html', 'index.html']]:
            with self.subTest(assets=assets):
                self.assert_rejected(assets, 'manifest path')

    def test_missing_directory_and_symlink_assets_are_rejected(self):
        self.assert_rejected(['missing.html'], 'regular file')
        (self.root / 'directory').mkdir()
        self.assert_rejected(['directory'], 'regular file')
        self.write('actual.html', '<p>Public</p>')
        (self.root / 'alias.html').symlink_to(self.root / 'actual.html')
        self.assert_rejected(['alias.html'], 'symlink')
        (self.root / 'alias-directory').symlink_to(self.root, target_is_directory=True)
        self.assert_rejected(['alias-directory/actual.html'], 'symlink')

    def test_references_use_staged_files_even_when_unlisted_source_exists(self):
        self.write('index.html', '<a href="unlisted.html">Not approved</a>')
        self.write('unlisted.html', '<p>Source exists, artifact does not</p>')
        self.assert_rejected(['index.html'], 'Missing staged reference: unlisted.html')
        self.write('index.html', '<a href="missing.html">Broken</a>')
        self.assert_rejected(['index.html'], 'Missing staged reference: missing.html')

    def test_relative_directory_query_and_fragment_links_are_valid(self):
        self.write('index.html', '<h1 id="home">Home</h1><a href="nested/?v=1#part">Nested</a>')
        self.write('nested/index.html', '<h2 id="part">Part</h2><a href="../?v=2#home">Home</a>')
        result = self.build(['index.html', 'nested/index.html'], '--output', 'published')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue((self.root / 'published/nested/index.html').is_file())

    def test_css_import_url_and_svg_local_references(self):
        assets = ['index.html', 'styles.css', 'more.css', 'symbol.svg', 'picture.png']
        self.write('index.html', '<link href="styles.css" rel="stylesheet"><img src="symbol.svg#mark" alt="Symbol">')
        self.write('styles.css', '@import "more.css"; body { background: url("picture.png?v=1"); }')
        self.write('more.css', '.icon { mask: url(symbol.svg#mark); }')
        self.write('symbol.svg', '<svg xmlns="http://www.w3.org/2000/svg"><g id="mark"/><use href="#mark"/><image href="picture.png"/></svg>')
        self.write('picture.png', 'synthetic image fixture')
        result = self.build(assets)
        self.assertEqual(result.returncode, 0, result.stderr)
        # Removing a staged dependency must fail even though its source still exists.
        result = self.build(assets[:-1], '--output', 'without-picture')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('Missing staged reference: picture.png', result.stderr)

    def test_broken_css_and_svg_dependencies_fail_at_each_owning_boundary(self):
        fixtures = [('styles.css', '@import "missing.css";', 'missing.css'),
                    ('styles.css', 'p { background: url(missing.png); }', 'missing.png'),
                    ('symbol.svg', '<svg><image href="missing.png"/></svg>', 'missing.png'),
                    ('symbol.svg', '<svg><use href="#absent"/></svg>', 'Missing fragment')]
        for name, contents, diagnostic in fixtures:
            with self.subTest(contents=contents):
                self.write(name, contents)
                self.assert_rejected([name], diagnostic)

    def test_fragments_duplicate_ids_aria_and_image_alt_have_failure_signals(self):
        fixtures = [('<a href="#absent">Broken</a>', 'Missing fragment'),
                    ('<p id="same"></p><p id="same"></p>', 'Duplicate ID'),
                    ('<p aria-labelledby="absent"></p>', 'Broken ARIA reference'),
                    ('<img src="picture.png">', 'missing alt')]
        for html, diagnostic in fixtures:
            with self.subTest(diagnostic=diagnostic):
                self.write('index.html', html)
                self.assert_rejected(['index.html'], diagnostic)

    def test_remote_embedded_assets_are_rejected_across_static_formats(self):
        fixtures = [('index.html', '<img alt="Remote" src="https://example.com/p.png">'),
                    ('styles.css', '@import "https://example.com/style.css";'),
                    ('symbol.svg', '<svg><image href="https://example.com/p.png"/></svg>')]
        for name, contents in fixtures:
            with self.subTest(name=name):
                self.write(name, contents)
                self.assert_rejected([name], 'Remote or unsupported embedded reference')

    def test_existing_unapproved_output_is_preserved_and_never_reused(self):
        self.write('index.html', '<p>Public</p>')
        self.write('_site/private.txt', 'Existing material must not be deleted or uploaded')
        result = self.build(['index.html'])
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('unexpected output entry', result.stderr)
        self.assertEqual((self.root / '_site/private.txt').read_text(),
                         'Existing material must not be deleted or uploaded')

    def test_output_cannot_destroy_source_or_follow_symlink(self):
        self.write('index.html', '<p>Public</p>')
        for output in ('.', '..', 'index.html'):
            result = self.build(['index.html'], '--output', output)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual((self.root / 'index.html').read_text(), '<p>Public</p>')
        (self.root / 'linked-output').symlink_to(self.root, target_is_directory=True)
        result = self.build(['index.html'], '--output', 'linked-output')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('symlink', result.stderr)


if __name__ == '__main__':
    unittest.main()
