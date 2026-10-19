# Pitwall public overview

This directory owns the public `/pitwall/` page, not the private telemetry
application. From the repository root, follow the [preview commands](../README.md)
and open `/pitwall/` on the local preview server.

[index.html](index.html) composes the overview, status, feature and roadmap sections
with static recordings. [styles.css](styles.css) owns the motorsport telemetry
theme and responsive layout. Recorded workout context, explicit stage alignment,
source-anchored progress and absolute target comparisons are implemented on main.
The workout-context preview retains actual October 18 premerge synthetic captures;
they have not been regenerated from the merge. Earlier captures retain their
historical provenance in the capture guide. Automatic stage advancement remains upcoming.
Bono works without a source plugin; external source acquisition and athlete-relative
targets remain future work.
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
