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
distinct from full-history completion, release and live qualification. Keep those
boundaries explicit; this page is not application deployment evidence.

Run `pnpm verify` from the repository root. [Blackbox browser checks](../tests/browser/blackbox.spec.js)
cover query shape, missing versus zero, whole-record replacement, retained receipts
and clear/rebuild focus. Follow the [verification guide](../VERIFYING.md) for shared
and manual checks, and the [maintenance rules](../AGENTS.md) for public claims.
