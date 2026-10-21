# Pitwall public overview

This directory owns the public `/pitwall/` page, not the private telemetry
application. From the repository root, follow the [preview commands](../README.md)
and open `/pitwall/` on the local preview server.

[index.html](index.html) composes the overview, status, feature and roadmap sections
with static recordings. [styles.css](styles.css) owns the motorsport telemetry
theme and responsive layout. Recorded workout context, explicit stage alignment,
source-anchored progress and absolute target comparisons are implemented on main.
Stage following is also implemented on main. The workout-context preview retains
its actual October 19 native macOS synthetic premerge captures. Opt-in
`--follow-stages` infers position from completion counts after an explicit
forward-progress assertion. It compares absolute targets without inventing
countdowns or claiming native watch position. Missing, duplicate or reverse
transitions may require correction. Earlier recordings and the original assertion
remain available. Capture bytes and source provenance are unchanged; this is not
a release.

The roadmap marks synthetic PWS2 workout-source process hosting as in progress.
The candidate adds manual source schedule refresh/status
for an explicit 1–31-day `[start,end)` window and query time zone, separate durable
source storage and structured CLI output. A failed refresh preserves the prior
snapshot; an empty schedule remains valid. No new TUI behavior is claimed.
Explicit attachment of retained schedules to Bono, then candidates in Live/Replay,
exact-prescription acquisition through the application, real Blackbox/provider
qualification and athlete-relative targets remain upcoming. Bono needs no plugin.
Wide terminal recordings scroll within labeled,
keyboard-accessible regions; they are not an interactive web terminal.

[CAPTURES.md](CAPTURES.md) owns recording provenance and refresh instructions.
Use synthetic inputs and retain each capture's revision and verification limits.
The intended watch-to-phone-to-server path and physical-device validation are
separate from browser rendering and simulator evidence. Keep private source,
credentials and real workout data out of this repository.

Run `pnpm verify` from the repository root. The [verification guide](../VERIFYING.md)
covers artifact references, image loading, responsive layout and keyboard scrolling,
plus manual checks for changed pages. Those checks cannot prove capture provenance
or watch/phone behavior. Follow the shared [maintenance rules](../AGENTS.md).
