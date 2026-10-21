# Pitwall public overview

This directory owns the public `/pitwall/` page, not the private telemetry
application. From the repository root, follow the [preview commands](../README.md)
and open `/pitwall/` on the local preview server.

[index.html](index.html) composes the overview, status, feature and roadmap sections
with static recordings. [styles.css](styles.css) owns the motorsport telemetry
theme and responsive layout. Recorded workout context, explicit stage alignment,
source-anchored progress and absolute target comparisons are implemented on main.
Stage following is also implemented on main. Opt-in
`--follow-stages` infers position from completion counts after an explicit
forward-progress assertion. It compares absolute targets without inventing
countdowns or claiming native watch position. Missing, duplicate or reverse
transitions may require correction. Earlier recordings and the original assertion
remain available. The visible terminal recordings retain their premerge candidate provenance;
they do not establish release qualification.

The unified console consolidates presentation into `pitwall tui`.
Bono's committed interpretation feeds both modes: Live receives private daemon
pushes and Original Replay reads retained outputs using its own playback clock.
The chooser runs neither provider. Changing mode stops the previous provider.
Raw CLI queries remain separate automation operations; the dashboard does not
poll or substitute today's raw aggregates into recorded output. The refreshed
synthetic recordings and their qualification limits are recorded in
[CAPTURES.md](CAPTURES.md). These records do not establish site deployment.

Synthetic PWS2 workout-source process hosting provides manual source schedule refresh/status
for an explicit 1–31-day `[start,end)` window and query time zone, separate durable
source storage and structured CLI output. A failed refresh preserves the prior
snapshot; an empty schedule remains valid. Explicit attachment to a workout
retains the same schedule in Live/Original Replay.
The `s` page keeps source order, cancellations and uncertain revisions visible.
Attachment selects no prescription and changes no active stage. Exact-prescription
acquisition, real Blackbox/provider qualification and athlete-relative targets
remain upcoming. Bono needs no plugin.
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
