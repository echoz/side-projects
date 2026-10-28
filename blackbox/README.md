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
The October 20 overview records merged recent refresh, tracked catch-up and
explicitly granted bounded history. Recent data keeps priority; exhaustion pauses
history, and compatible restart retains the allowance and traversal position.
Source beginning, full-history completion, release and supported deployment remain
separate. This page is not application deployment evidence.
Earlier recent-build checks in an owner-local Apple VM observed successful MFA
authentication and a fresh archive binding. Ordinary scheduling acquired seven
recent daily summaries without manual sync; independent importing produced seven
canonical days without failures. Compiled CLI metadata queries checked accepted
and imported coverage, canonical days and source references. A compatible restart
retained credential presence without new MFA; run results, imported coverage and
canonical source references remained identical. These checks do not establish
token renewal, rotation or supported native Docker deployment.
The current bounded-history build passed local macOS/Linux and synthetic image
checks. Its separately authorized Apple-VM check reconstructed the archive without
a new login, acquired recent summaries, then automatically continued into one
explicitly granted history window. Fourteen uncovered days imported and matched
local provenance queries. Compatible restart retained paused history with zero
allowance and restored hourly recent sync. This is one bounded live check, not
source-beginning discovery or full-history completion. Activities and FIT
acquisition remain pending. Keep the browser demonstration synthetic.

The October 27 verification update records successful standard Dockerfile builds
and synthetic Linux checks for runtime dependencies, archive reconstruction,
protected downloads, restart recovery and credential-free localhost Compose
publication. These are test results, not a supported live deployment or proof of
host reboot and power-loss behavior. Private logs and source stay in the owning
project; this public overview contains only the verification summary.

Run `pnpm verify` from the repository root. [Blackbox browser checks](../tests/browser/blackbox.spec.js)
cover query shape, missing versus zero, whole-record replacement, retained receipts
and clear/rebuild focus. Follow the [verification guide](../VERIFYING.md) for shared
and manual checks, and the [maintenance rules](../AGENTS.md) for public claims.
