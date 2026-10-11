# Verify the public site

Use Python 3.9+, Node.js 24 and the pinned pnpm version in `package.json`.

```sh
npm install --global pnpm@11.25.0 --ignore-scripts
pnpm install --frozen-lockfile --ignore-scripts
pnpm exec playwright install chromium
pnpm test
```

On Linux, install browser system dependencies with
`pnpm exec playwright install --with-deps chromium`. CI uses the same pinned
dependencies and Chromium checks. These dependencies are development tools;
the public pages remain static and do not load them.

## Automated contracts

`pnpm test` runs these gates in sequence, stopping on failure:

1. **Artifact regression fixtures:** exercise the real Python build command in
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
   and focus transfer. All five local pages are checked at 320, 768 and 1280px;
   lazy images must decode and the document must fit. Wide Pitwall captures must
   remain keyboard-scrollable. Skip links and accessible status labels are checked.

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
