# Blackbox public overview and archive illustration

This directory owns the public `/blackbox/` page and an invented browser example.
It does not contain the private application, importer or remote API. Follow the
repository's [preview commands](../README.md), then open `/blackbox/` locally.

[index.html](index.html) composes the overview and query controls;
[styles.css](styles.css) owns the industrial-orange flight-recorder theme.
[demo.js](demo.js) owns three fixed source observations and an in-memory daily
projection. Select a day and query shape, clear the projection, then rebuild it.
Clearing retains the source receipts; rebuilding reproduces the same daily records
and transfers focus to the next available action.

The newer observation replaces the whole daily record: an absent value remains
absent instead of inheriting an older value, and zero remains a measured value.
These are synthetic examples, not Garmin payloads or live recovery evidence.
The page makes no service request and stores no persistent state; reloading resets
the example. Preserve the owning project's stated remote-sync limitations.
The October 18 overview records merged recent refresh and tracked catch-up,
distinct from full-history completion, release and supported deployment. Keep those
boundaries explicit; this page is not application deployment evidence.
Current-build checks in an owner-local Apple VM observed successful MFA
authentication and a fresh archive binding. Ordinary scheduling acquired seven
recent daily summaries without manual sync; independent importing produced seven
canonical days without failures. Compiled CLI metadata queries checked accepted
and imported coverage, canonical days and source references. A compatible restart
retained credential presence without new MFA; run results, imported coverage and
canonical source references remained identical. These checks do not establish
token renewal, rotation or supported native Docker deployment. Full-history traversal,
activities and FIT acquisition remain pending. Keep the browser demonstration
synthetic.

Run `pnpm verify` from the repository root. [Blackbox browser checks](../tests/browser/blackbox.spec.js)
cover query shape, missing versus zero, whole-record replacement, retained receipts
and clear/rebuild focus. Follow the [verification guide](../VERIFYING.md) for shared
and manual checks, and the [maintenance rules](../AGENTS.md) for public claims.
