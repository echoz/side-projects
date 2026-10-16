"""The public wrapper must reject missing or wrong tools before executing them."""
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest


SCRIPT = Path(__file__).resolve().parents[1] / 'scripts' / 'check_documentation.py'


class DocumentationGateTests(unittest.TestCase):
    def invoke(self, tool_root):
        return subprocess.run(
            [sys.executable, str(SCRIPT), '--tool-root', str(tool_root)],
            cwd=tool_root.parent, capture_output=True, text=True,
        )

    def test_missing_installation_fails_without_creating_or_downloading_it(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory) / 'absent-release'
            result = self.invoke(root)
            self.assertEqual(result.returncode, 2, result.stdout)
            self.assertIn('checkout is missing', result.stderr)
            self.assertFalse(root.exists())

    def test_wrong_revision_fails_before_a_substitute_checker_can_run(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory) / 'different-release'
            root.mkdir()
            (root / 'Scripts').mkdir()
            sentinel = root / 'executed'
            (root / 'Scripts/check-docs.py').write_text(
                'from pathlib import Path\nPath(__file__).parents[1].joinpath("executed").touch()\n'
            )
            python = root / '.build/docs-venv/bin/python'
            python.parent.mkdir(parents=True)
            python.symlink_to(sys.executable)
            subprocess.run(['git', 'init', '--quiet', '--template=', str(root)], check=True)
            subprocess.run(['git', '-C', str(root), 'add', 'Scripts/check-docs.py'], check=True)
            subprocess.run([
                'git', '-C', str(root), '-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid',
                '-c', 'commit.gpgSign=false', '-c', 'core.hooksPath=/dev/null',
                'commit', '--quiet', '-m', 'Unapproved fixture revision',
            ], check=True)
            result = self.invoke(root)
            self.assertEqual(result.returncode, 2, result.stdout)
            self.assertIn('revision mismatch', result.stderr)
            self.assertFalse(sentinel.exists())


if __name__ == '__main__':
    unittest.main()
