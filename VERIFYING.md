# Verify the public site

Use Python 3.9+, Node.js 24 and the pinned pnpm version in `package.json`.

```sh
npm install --global pnpm@11.25.0 --ignore-scripts
pnpm install --frozen-lockfile --ignore-scripts
pnpm exec playwright install chromium
pnpm verify
```

On Linux, install browser system dependencies with
`pnpm exec playwright install --with-deps chromium`. CI uses the same pinned
dependencies and Chromium checks. These dependencies are development tools;
the public pages remain static and do not load them.

## Required documentation gate

Before PR readiness or publishing, run `pnpm verify`. It runs `pnpm check:docs`
first, then the public site checks below. The documentation check needs a separate,
clean [EngineeringRules 0.1.6 release](https://github.com/echoz/EngineeringRules/releases/tag/v0.1.6)
checkout and its isolated Python environment. That repository is private; use
existing authorized access during explicit setup. Do not put credentials or the
shared checker's source in this public repository or its Pages artifact.

The pin lives in [the repository wrapper](scripts/check_documentation.py), outside
[the closed documentation schema](.documentation-rules.json):

- Tag `v0.1.6`, peeled commit `7088419f33f118bff250202717edf6d5249746b6`.
- Release tree `79998407978d0a4c30ee293073d8c0524ee62ab3`.
- Checker SHA-256 `f9597904c389e3a485e360d4fbbda57d8acb521ee9dab924251cfa2c762d6af7`.
- Requirements SHA-256 `6fd7cf677f2a33fc6d78057d60cf9ea9df01d21e85a1de4ccde742b1d57b584b`.

The default installation is `~/.local/share/engineering-rules/0.1.6`. Reuse that
verified shared installation; never switch or modify it during a project check.
For another host, follow the released README in a dedicated clean checkout:

```sh
# Explicit setup only, inside the verified release checkout:
python3 -m venv .build/docs-venv
.build/docs-venv/bin/python -m pip install --require-hashes \
  -r Configuration/documentation-requirements.txt

# From SideProjects, if the existing installation is elsewhere:
pnpm check:docs --tool-root /path/to/engineering-rules-0.1.6
pnpm test
```

Verify the checkout's `HEAD` against the pinned commit before dependency setup.
The wrapper checks that revision, working-tree cleanliness and both file hashes
before running `.build/docs-venv/bin/python -B Scripts/check-docs.py --root <project>`.
It fails if the tool or environment is missing or mismatched. The shared checker
requires exactly `markdown-it-py` 3.0.0 and `mdurl` 0.1.2. Checking never downloads,
upgrades or repairs dependencies. SideProjects has no Swift sources or SwiftRules pin.

Version 0.1.6 packages the shared engineering-review workflow and organization
guidance. Its documentation checker bytes, dependency pins and schema are unchanged
from 0.1.5. The global readiness workflow uses that separately installed skill;
the required SideProjects checks remain the commands in this guide.

All four current Markdown guides are enrolled: `README.md`, `AGENTS.md`,
`VERIFYING.md` and `pitwall/CAPTURES.md`. Their CommonMark local destinations must
exist. The [source map](AGENTS.md) records page, state, effect and tooling ownership.
The 0.1.6 schema rejects a root of `.` and inventories only immediate child
folders of named roots. It cannot represent these top-level page boundaries.
Therefore `moduleRoots`, `modules` and `excludedModules` are empty: this enrollment
checks documentation links, with **zero automatic module-inventory coverage**.
Review new page directories and their owning documentation manually. Do not
restructure the site or invent nested modules solely to satisfy the checker.

Heading fragments, HTML links, external destinations, prose accuracy and useful
architecture remain manual review. Existing artifact and browser checks cover
HTML and runtime behavior separately. Public CI runs `pnpm test`, including wrapper
rejection fixtures, without access to the private checker. A public CI pass does
not establish that the required local documentation gate ran.

### Initial 0.1.5 adoption / 2026-10-16

[Adoption PR #4](https://github.com/echoz/side-projects/pull/4) introduced the 0.1.5 pin.
The implementation at `7eb4fa3ee5cf703992ebe465d7f4916246a1f241` passed local
`pnpm verify` on macOS: four documentation guides, zero modules, zero findings,
13 Python tests, both syntax checks, 48 staged assets and 24 Chromium tests.
A temporary missing-link fixture failed through the real wrapper with exit 1.
Separate read-only review found no actionable findings. Public CI results belong
to the PR's current commit; they do not substitute for the local documentation gate.

PR #4 merged at `cbffadc8a76e6f4166ab7511c9661eae43a42096`. The local documentation
gate passed again on that merged commit, and public CI and Pages deployment passed.
These results establish the initial 0.1.5 adoption, not verification of later pins.
No new visual, screen-reader, other-browser or physical-device qualification is
claimed here.

## Automated contracts

`pnpm test` runs these gates in sequence, stopping on failure:

1. **Python regression fixtures:** reject missing and unapproved documentation
   tools before execution, and exercise the real Python build command in
   temporary directories. Missing, unsafe, duplicate and symlink assets fail;
   unlisted files stay out. Relative links, queries, fragments and CSS/SVG
   dependencies resolve within the staged artifact. Fixtures also check that
   existing unexpected output is preserved and rejected.
2. **JavaScript syntax:** Node checks both demo scripts without executing them.
3. **Public build:** `public-assets.json` is the single explicit asset allowlist.
   `scripts/build_site.py` validates fresh staging before replacing output
   containing only currently allowlisted paths. HTML IDs, fragment and ARIA
   references, image alt attributes and
   ordinary static HTML/CSS/SVG URLs are checked. External navigation is allowed;
   external embedded assets are rejected. Escaped CSS URLs are unsupported.
4. **Chromium behavior:** Playwright serves `_site` on loopback port 8769 and
   exercises the actual controls with independent expected examples. Marquee
   coverage includes scene state, text normalization, eight-character rendering,
   and zero/half/full progress. Blackbox coverage includes whole-record
   replacement, null versus zero, query shape, clear/rebuild, retained receipts
   and focus transfer. All four local pages are checked at 320, 768 and 1280px;
   lazy images must decode and the document must fit. Wide Pitwall captures must
   remain keyboard-scrollable. Skip links and accessible status labels are checked.
   Perch’s former local address is checked separately: its actual redirect must
   navigate to `https://echoz.github.io/Perch/`. Only that exact destination is
   fulfilled with an inert document in the test; the shared network restrictions
   remain in force. Perch’s full page and public CAD are maintained in its own
   repository and keep the soft, organic dock theme.

The browser fixture rejects unapproved requests, page errors and HTTP failures.
It also trips on common live-data capabilities (fetch, XHR, sockets, event streams,
beacons and browser storage) while exercising the synthetic demos. This is
bounded regression coverage, not a complete security
sandbox or proof about every browser API. Separate checks compare demo defaults
against fixed expectations at two widely separated wall-clock dates. Clocks and
timers are not forbidden because browser automation also uses them. Static parsing
is deliberately limited; it is not a full HTML/CSS validator or an accessibility audit.

For focused work, use `pnpm test:artifact`, `pnpm test:syntax` or
`pnpm build && pnpm test:browser`. Do not edit tests while any relevant runner is
active. Browser failures retain screenshots and traces under `test-results/`;
inspect a trace with `pnpm exec playwright show-trace <trace.zip>`.

The build refuses unexpected entries in an existing output directory rather than
deleting unknown files. Inspect and move those entries before rebuilding, or use
`python3 scripts/build_site.py --output <new-directory>` for a fresh destination.
Never serve the repository root as the deployment preview.

## Manual checks for changed pages

Build, then run `python3 -m http.server 8765 --bind 127.0.0.1 --directory _site`.
Inspect the affected pages at `http://127.0.0.1:8765/`:

- At phone, tablet and desktop widths, inspect text wrapping, overlapping content,
  image legibility and card ribbons. Check 200% zoom and reduced motion. Pitwall's
  wide captures intentionally scroll inside their labeled regions.
- Navigate with Tab, Shift+Tab, Enter, Space and arrow keys. Confirm visible focus,
  logical order, no traps, operable demo controls and focus after clear/rebuild.
- With a screen reader, inspect landmarks, headings, control names, pressed and
  disabled states, status announcements, construction labels and image descriptions.
  Automated accessible-name checks do not establish speech quality or usability.
- Check contrast and focus visibility against each project's actual colors,
  including selected, disabled and hover states. Inspect Safari or Firefox for
  changed layout/controls; the automated browser gate covers Chromium only.
- Verify factual claims against the owning project's current records. Preserve
  private-source boundaries and synthetic labels. For Pitwall capture changes,
  follow `pitwall/CAPTURES.md`; browser tests cannot prove capture provenance or
  physical-device behavior.

After an authorized deployment, check the rendered live pages and their links.
Confirm changed styles are loaded, including the index stylesheet's updated
version query when its CSS changes. A successful deployment alone does not prove
that a returning browser has the current styles. Record what was actually checked
and any remaining limits in the change description.
