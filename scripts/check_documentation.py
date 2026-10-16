#!/usr/bin/env python3
"""Run the separately installed, pinned documentation checker without installing it."""
import argparse
import hashlib
import os
from pathlib import Path
import subprocess
import sys


RELEASE = '0.1.5'
REVISION = 'd777c8ccbe990a8e90462c928042574d9dbe9d53'
CHECKER_HASH = 'f9597904c389e3a485e360d4fbbda57d8acb521ee9dab924251cfa2c762d6af7'
REQUIREMENTS_HASH = '6fd7cf677f2a33fc6d78057d60cf9ea9df01d21e85a1de4ccde742b1d57b584b'
PROJECT_ROOT = Path(__file__).resolve().parents[1]


def verify_installation(tool_root):
    if not tool_root.is_dir():
        raise ValueError(f'EngineeringRules {RELEASE} checkout is missing: {tool_root}')
    revision = subprocess.run(
        ['git', '-C', str(tool_root), 'rev-parse', 'HEAD'],
        check=True, capture_output=True, text=True, timeout=30,
    ).stdout.strip()
    if revision != REVISION:
        raise ValueError(f'EngineeringRules revision mismatch: expected {REVISION}, found {revision}')
    changes = subprocess.run(
        ['git', '-C', str(tool_root), 'status', '--porcelain=v1', '--untracked-files=all'],
        check=True, capture_output=True, text=True, timeout=30,
    ).stdout
    if changes:
        raise ValueError('EngineeringRules checkout has local changes; use a clean release checkout')
    checker = tool_root / 'Scripts' / 'check-docs.py'
    requirements = tool_root / 'Configuration' / 'documentation-requirements.txt'
    for path, expected in ((checker, CHECKER_HASH), (requirements, REQUIREMENTS_HASH)):
        if not path.is_file() or path.is_symlink():
            raise ValueError(f'Required release file is missing or a symlink: {path}')
        if hashlib.sha256(path.read_bytes()).hexdigest() != expected:
            raise ValueError(f'Release file hash mismatch: {path.name}')
    python = tool_root / '.build' / 'docs-venv' / 'bin' / 'python'
    if not python.is_file() or not os.access(python, os.X_OK):
        raise ValueError(f'Documentation Python environment is missing: {python}')
    return python, checker


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        '--tool-root', type=Path,
        default=Path.home() / '.local' / 'share' / 'engineering-rules' / RELEASE,
        help='Existing clean release checkout with .build/docs-venv; never installed by this command',
    )
    options = parser.parse_args()
    try:
        python, checker = verify_installation(options.tool_root.expanduser().resolve())
        print(f'EngineeringRules {RELEASE} documentation gate ({REVISION})', flush=True)
        return subprocess.run(
            [str(python), '-B', str(checker), '--root', str(PROJECT_ROOT)],
            check=False,
        ).returncode
    except (ValueError, OSError, subprocess.SubprocessError) as error:
        print(f'Documentation gate unavailable: {error}. See VERIFYING.md for explicit setup.', file=sys.stderr)
        return 2


if __name__ == '__main__':
    sys.exit(main())
