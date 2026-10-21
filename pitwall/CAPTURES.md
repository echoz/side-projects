# Pitwall capture provenance

Detailed evidence and refresh guidance for the public Pitwall page.
Paths below are relative to the repository root.

## Unified Bono dashboard — current candidate recordings

Captured October 20–21, 2026 local time with the actual native macOS daemon and
Chio TUI, using disposable synthetic telemetry. One `pitwall tui` command selects
Live or Original Replay. Live receives committed Bono status from the private
daemon socket. Replay reads retained interpretations on a recorded-input clock;
both modes feed the same map, instruments, stage and schedule views.

The refreshed stage, map, Running, cycling-bars/dials and terrain recordings
come from source packet
`5a72ea1dd96e8fbdb9c315bb0d7b33c5dae532ac9c86530963e177d3b8585e53`.
The unchanged gears, navigation and attached-schedule recordings retain source
packet `6247a85904cac78cfb333d848f5ea18e0ae40251acbcdbae2c662766961dd015`.
The later display change identifies Live on the instrument heading; it does not
change those retained context or schedule views. These packets identify compiled
candidate snapshots, not releases or merged commits. All capture-producing
process checks passed, including terminal cells, mode changes and restoration.
Capture checks alone do not establish a full-suite pass or deployment.

These fourteen SVG/text pairs replace every terminal recording displayed on the
page. Map, Running and stage-following pairs use 110 × 48 terminal cells; bars,
dials, terrain, gears, navigation and schedules use 110 × 36. The compact dial
fallback uses 80 × 24. SVGs preserve true colour with `COLORTERM=truecolor`,
`TERM=xterm-256color` and `NO_COLOR` absent. Narrow cards retain numeric readings
instead of shrinking dial faces. Historical playback bars measure recorded input
position, not workout completion.

The stage-following pair shows inferred Recovery, stage 5 of 14, repeat 2 of 6,
with 145 bpm above the absolute 100–130 bpm target. The stage boundary remains
unknown, so no countdown is invented. Replay is paused at recorded input 3 of 4.
Schedules retain source order, duplicate names, cancellations and unresolved
prescription revisions. Attachment selects no plan and confirms no match. Old
synthetic source timestamps and their clock uncertainty remain visible.

Map recordings use synthetic Singapore coordinates and actual OpenFreeMap tiles,
with provider attribution retained inside the terminal. The website contains
static recordings and makes no map-provider or telemetry requests. Only the
approved SVG/text files were copied; checks reject scripts, foreign objects,
embedded images and external references. Font glyph links remain internal.

The Garmin PNGs are unchanged from their separately recorded simulator checks.
This update adds no physical watch, phone, real-provider, VPS or Docker release-image
qualification. The application and public-site changes remain candidates;
site deployment requires a later authorized merge.

| Current asset | SHA-256 |
| --- | --- |
| `workout-context-live.svg` | `d1cedf9ff0d153c183dd4c278f3b563c6a30c370c3d073c0c446f68297bfea1c` |
| `workout-context-live.txt` | `d536e1eef15def1780ade998e60261ec5a1ca1d1eedcba2f8edf26afb153bfc4` |
| `workout-context-replay.svg` | `0951f16498028f68dfddbdca0c4f70467b1e25d92d2f33c7d0671f217a270425` |
| `workout-context-replay.txt` | `358e34349fd85044717d8c3979b42b51b6ee900055982fad7596ad07a890757e` |
| `tui-map-live.svg` | `0a5caecf025028e7d9e6a57846b44d11e47dc5ce653d6565de601886ba20b955` |
| `tui-map-live.txt` | `8e13e67c0d92d2907eff62662b089e5e697c28ce12b4ca68ee5d5ac8f4ab188b` |
| `tui-map-replay.svg` | `f79612e2bb02650e041759743e98153515106bbc6653d20a3d2147f82270e770` |
| `tui-map-replay.txt` | `48fc6532542e5707a7bb810c906cd58cf2ebf69c2959ef9448ceab2337676c7c` |
| `tui-cycling-capture.svg` | `9ab54992aaca8bfe65390f9e57f07befd0091c12a6db72c21d19155ef58a8440` |
| `tui-cycling-capture.txt` | `04251603a483a9bbcf0fd6687ecfa2809ecbdf2151103f09d563dedfe6f6b499` |
| `tui-dials-capture.svg` | `9baf129be6fc037b27febe2f88f641e3951dd2e95146a543cdf044514d8482b0` |
| `tui-dials-capture.txt` | `9eebfc7a023ceaf100e7bbda30f9ddd392d395e8e32a8a818585e9262736dbf0` |
| `tui-dials-compact-capture.svg` | `7710dc99ed31bfec9170fbc02d8aade6d6cda28e0f17c1a9caaa3a2709ca8737` |
| `tui-dials-compact-capture.txt` | `4d283022030d82f19433f2dc0aed00b81aee89cd93f001f63d155d675114556d` |
| `tui-terrain.svg` | `9ab54992aaca8bfe65390f9e57f07befd0091c12a6db72c21d19155ef58a8440` |
| `tui-terrain.txt` | `04251603a483a9bbcf0fd6687ecfa2809ecbdf2151103f09d563dedfe6f6b499` |
| `tui-gears-live.svg` | `82bdfc21a9b9022542a9155bddcc04177abc6dc4ac99576ec66cf01e3e4460b8` |
| `tui-gears-live.txt` | `d7bac3415bfe7261840c033b9113f406412682514575915e2982cd63928d0e61` |
| `tui-navigation-live.svg` | `c6e18ade5550583b076583364663f1913d032603361df8a7afb29d5f77d1081d` |
| `tui-navigation-live.txt` | `d980f7bd0240e110326097a1caf79f5988232292a3bbbb9474cdc2670be15fd4` |
| `tui-running-replay.svg` | `13ca941292a9b68ff617f2d71056afb42b1a6e7ff5586c23813bf1e24589c739` |
| `tui-running-replay.txt` | `549b8626f7f45d149cf3e84a70e2f0bd037454608b2e359871801d9559008f00` |
| `tui-running-instruments.svg` | `b3475f863e6ac5ded69b78374afb1ffecd7c51deed5c9a04dd283ec1448019ad` |
| `tui-running-instruments.txt` | `e582f0ef779d867e1b67c95bdaa07b792b4feb72ebab1349377b8893558f8b5d` |
| `workout-schedule-live.svg` | `fbaedd60c9276857467d303ada7d2ab6fb5b3519dc723eb00b2967b33fba28fb` |
| `workout-schedule-live.txt` | `564c48f1f380373bd5fee65f86bcaa107e57d32e7b3b42b660df6eb4421f1fc9` |
| `workout-schedule-replay.svg` | `334ed1ceb96448a46ef4170fb3a36f5aa3cde6640a743fbcb6665ff76ce4072f` |
| `workout-schedule-replay.txt` | `b4ed799b6acc3fd9238c5f5348d683ae6252b2d18f644e07a91587507ee99e9d` |

## Historical capture records

The sections below preserve prior checkpoints. Their asset hashes and references
to “current” recordings describe those checkpoints, not the files now displayed.
The table above owns the fourteen replacement pairs. Unchanged watch recordings
retain their separate provenance below.

## Attached schedules — candidate

Captured October 20, 2026 with the actual native macOS daemon, synthetic PWS2
source executable, and Chio client through the CLI/PTY pipeline. The capture
source packet SHA-256 is
`1ea49e3f2165d11fc99198a2263a83c2ec38f20c0d8e915daecdd6d47382b08d`.
This identifies the tested candidate snapshot, not a released or merged commit.

`workout-schedule-live.svg` / `.txt` and `workout-schedule-replay.svg` / `.txt`
show the attached schedule inspector at 110 × 36 terminal cells. Both SVGs are
951.158 × 672 and preserve true colour (`TERM=xterm-256color`,
`COLORTERM=truecolor`, with `NO_COLOR` absent). Live shows source attribution and
two running entries with the same name but distinct morning/evening identities.
Replay shows the next page: a cancelled ride and an unresolved prescription
revision, paused at recorded input 2 of 2. This position is not workout progress.

The source timestamps are fixed synthetic facts. The old September 23 measurement
and its large, clock-unverified age remain visible; the capture does not pretend
that the measurement is fresh. The attached schedule window is October 19–26.
Attachment selects no prescription, infers no match, and changes no active stage.
Later provider refreshes do not replace the recorded schedule.

The actual process check exercised Live/Replay, schedule paging, 80 × 24 and
36 × 18 resizing, and exit with terminal restoration within five seconds.
Only the four approved synthetic recordings were copied. SVG checks found no
scripts, foreign objects, embedded images or external references; glyph links
remain internal. These checks add no real provider, physical watch/phone or
Docker release-image qualification. Site deployment remains pending merge.

| Candidate asset | SHA-256 |
| --- | --- |
| `workout-schedule-live.svg` | `38165ead4d11f92ea3b84d8aea30c26d08c9fbc36e53ddac5c543a835cd10524` |
| `workout-schedule-live.txt` | `86fc3063335988110cb22af6f69eef72dd8e4c09e33525ffdb9d65a5f3e52b54` |
| `workout-schedule-replay.svg` | `b16ce5e3e4c3006c4038a95fac9f8199c0c6b193c9343bba4bc7c8a53e697c2d` |
| `workout-schedule-replay.txt` | `7747a817a43b49d2d79b783ff559d70deae5c936eef09e7c01b485bb0a432749` |

## Inferred stage following — on main

Stage following adds opt-in `--follow-stages` after explicit selection of a starting
stage. It records the operator's assumption that each later completion count
means one forward leaf transition through the exact retained prescription,
including repeats. The position is labeled **Inferred**; the next stage comes
from the prescription. Absolute targets use the selected observation; no time
or distance countdown is inferred.
This is not native watch position. Missing, duplicate or reverse transitions may
require correction, and detectable continuity failures make position uncertain.
Neither silence nor counts beyond the final stage confirm workout completion.

The first forward alignment creates version-3 interpretation while preserving
version-1/version-2 recordings and the original assertion. Later corrections do
not rewrite history. Bono needs no source plugin. Stage following is now merged
on main. The existing premerge recordings retain their original source and bytes;
the merge adds no fresh capture, release-image or physical watch/phone qualification.

### Historical premerge stage-following recordings

Captured October 19, 2026 local time with the actual native macOS daemon and
Chio client through the CLI/PTY pipeline, using synthetic measurements only.
The capture source packet SHA-256 is
`e30469848cca3570b724aca56d1cc40fc69487af8add5dc1d7d4dbab428f1c8b`,
based on main `d73318d2bee57170b39a1c077419b294c35ef7c2`. This identifies the
source packet, not a Git commit. The actual TUI process check passed and both
expanded-instrument captures received visual review. These capture checks alone
do not establish a whole-suite pass, release, watch or phone qualification.

`workout-context-live.svg` / `.txt` and `workout-context-replay.svg` / `.txt`
replace the alignment pair below at the same paths. Both show expanded Cycling
instruments at 110 × 48 terminal cells; the SVGs are 951.158 × 888 and retain
true colour. The inferred current stage is Recovery, 5 of 14, repeat 2 of 6;
the next prescribed stage is Work, repeat 3 of 6. Heart rate is 145 bpm above
the absolute 100–130 bpm target. Progress is unavailable because the stage
boundary is unknown. Original Replay preserves that interpretation, paused at
recorded input 3 of 4. Its bar measures recorded input position, not workout
completion.

Only these four approved synthetic assets were copied. SVG checks found no
scripts, foreign objects, embedded images or external references; glyph links
remain internal. Transcripts contain synthetic identities and measurements.
These are actual application recordings, with no physical watch or phone.

| Current asset | SHA-256 |
| --- | --- |
| `workout-context-live.svg` | `4e2b70ecb02ea2741854714d0e2011a338b9a785a6a90b0f8c19fd8c622e40a3` |
| `workout-context-live.txt` | `622808012e88b4f7882db89a9f2b60d140d04f3816d843f60f546d0d727fc8e1` |
| `workout-context-replay.svg` | `89781d4676b2c682138314f11eb7c902ff8ea898fa7aa8091e60244e5f30083f` |
| `workout-context-replay.txt` | `9ead983d77f3d6c47e7599387e5095bb716a081466a86aab147e7b5ff091dbec` |

## Stage alignment — on main

Bono works without a source plugin. Stage alignment builds on the
recorded workout context already on main. It adds explicit one-based stage
occurrence selection, including repeat identity, and an optional
`startAtObservation` anchor at the current committed reading. Historical readings
cannot be selected as anchors. Source time and distance measure progress from
that anchor. Absolute heart-rate, power, cadence, speed and pace targets can be
compared with the selected observation.

Missing or changed counters, counter resets and source-clock discontinuities
invalidate position. Without the opt-in stage-following mode above, Bono does not advance stages automatically.
Its first alignment creates a version-2 run while retaining the version-1 run;
later corrections append to the aligned run. History and `workout tui --run-id`
can reopen an older run's original recording. The latter starts Original Replay;
the menu can return to Live.

Athlete-relative settings, provider lookup and the Blackbox adapter remain
future work. This is implemented on main, not released, and
adds no physical watch/phone or release-image qualification.

Pitwall PR #45 merged at `d73318d2bee57170b39a1c077419b294c35ef7c2`.
Its merge tree `4c6c3102ea684e4869de7302ab4435a938492a76` matches the reviewed
head `2bc924a`. This follows PR #44 at
`50001d9ba697d5c9a1e740dea0086ecaf1985580`, whose tree
`220437189f66396fd2dc93a4266936a51b000c66` matches its reviewed candidate.
The merge does not regenerate recordings or establish fresh release-image or
physical-device qualification.

### Superseded premerge alignment recordings

Captured October 18, 2026 local time from source
`b8fca06d90aa97793bce0798f82e33ec0efd2820`, tree
`8c7aeec83f1c08a8223ff2053ee622da3a51ef21`, with the actual native macOS
Swift 6.4 daemon and Chio client in a PTY. The synthetic-only capture check
passed and its process was reaped before export handoff. Native macOS and Linux
full suites passed for this source; the published recordings themselves are
native macOS captures, not Linux or Garmin screen captures.

`workout-context-live.svg` / `.txt` and `workout-context-replay.svg` / `.txt`
replaced the earlier context pair at public-site base `3bcb89f`. These bytes are
now superseded by the stage-following pair above. Both show expanded Cycling instruments at
110 × 48 terminal cells; the SVGs are 951.158 × 888 and retain true colour.
Stage 2 of 14 is Work, repeat 1 of 6, with 15 seconds elapsed and 105 seconds
remaining. Heart rate is 145 bpm inside the absolute 140–160 bpm target.
Original Replay retains the same interpretation, paused at recorded input
4 of 4. Its playback bar measures recorded input position, not workout completion.

Only these four approved synthetic assets were copied. Transcripts contain
synthetic identities and measurements. SVGs contain internal glyph references,
with no scripts, foreign objects, embedded images or external references.
The recording uses the running application, not a browser reconstruction;
no physical watch or phone participates. These historical premerge captures retain
source `b8fca06d`; their original bytes remain in Git history.

| Historical asset at public-site base `3bcb89f` | SHA-256 |
| --- | --- |
| `workout-context-live.svg` | `b84643f96311b464fd489070068504f722b95acc21c703692c25cf8c245f3230` |
| `workout-context-live.txt` | `901e7b5c2560322670b59772a2df5592cb6ef7af09fe2b4455da0daeb686179c` |
| `workout-context-replay.svg` | `741ecec25a19c23f8b36632a51a429458eb2373e431c3599efe02dc1ee04e648` |
| `workout-context-replay.txt` | `3659bbcd720b0680955ddb878331b7f9cf1fc5a1dbde89f29d14bf57f0ec05f4` |

## Recorded workout context — merged behavior, superseded recordings

Pitwall PR #43 merged on October 18, 2026 local time at
`8fa99d6170510cef9b3be9abb9a5aa698ce0bbdc`. Its complete merge tree
`1542824ea70bcc8435de011252ef56430e5ac2ed` matches reviewed head `f6c78216`.
Bono combines readings with an explicitly selected imported plan revision and
retains original interpretations across restart and Replay. This is implemented
on main, with release qualification still open.

Captured October 17, 2026 local time from the actual native macOS daemon and
Chio client in a PTY, using synthetic readings and an explicitly selected imported
cycling prescription revision. These premerge working-candidate recordings have
since been replaced by the premerge alignment pair above. No
recording in this historical section came from a main binary. The separate
existing main-dashboard assets retain their original provenance below.

At public-site commit `4212d08`, `workout-context-live.svg` / `.txt` and
`workout-context-replay.svg` / `.txt` recorded expanded Cycling instruments at 110 × 36 terminal cells; each SVG is
951.158 × 672. Capture waits for the instrument-specific marker before exporting
actual terminal cells. Live shows 245 W, 145 bpm, imported revision
`cycling-intervals-v1` and unresolved stage position. Replay shows those original
facts paused at input 2 of 18, with retained-input position rather than workout
completion. The visible source age and interpretation age describe different
facts. Source average/max values remain independent supplied measurements.

The premerge candidate’s local synthetic acceptance covers Garmin simulator uploads,
lost-ACK retry, accepted/consumed interpretation lag, restart/catch-up, unchanged
original outputs, exclusion of a later plan from frozen replay, and normal quit
with terminal restoration. Native macOS and Linux suites passed at their own
candidate checkpoints; exact integrated evidence is owned by the private project.
The published recordings themselves use a local synthetic daemon fixture, not a
watch, phone or Garmin-screen recording. No private source, raw logs, credentials
or real workout data are included. Plan alignment, targets, corrections, provider
acquisition, newer-logic reinterpretation, physical delivery and release-image
qualification remain separate work. The merge adds no fresh capture or release
qualification evidence.

### Superseded premerge capture integrity

| Historical asset at public-site commit `4212d08` | SHA-256 |
| --- | --- |
| `workout-context-live.svg` | `bea8e0f29025a1614faac21992a645bd2f98d4496469e2fc8835ff2670ddaa31` |
| `workout-context-live.txt` | `45918daba190d2a8c24c3bbc5d74ad73d44a3240b4562f9066680f9dce6c4cc6` |
| `workout-context-replay.svg` | `129595ff66f1199ad07444ef09191c4853eb52c419801b82068f6af8869b2be4` |
| `workout-context-replay.txt` | `43df9b8eb49ddb066996a2be13db1c568d6dec76f588154a67773738a57d5a14` |

## Console qualification — on main

Pitwall PR #40 merged on October 17, 2026 local time at
`1bfd583a764373698193874328cbb2955dc09282`. The complete merge tree matches
reviewed source head `8ab7410`; issue #23 is closed. The verified runtime and
test inputs below are included in that merge.

The console on main passes 96 shutdown cases per platform on
macOS and Linux, plus continuous-update polling and pushed scenarios and Replay.
The pressure checks keep independent synthetic uploads active through immediate
resize and quit. The five-second exit deadline, expected exit codes, cursor and
alternate-screen checks remain unchanged. Watch, subscription, map-source,
instrument and activity-layout process checks also pass on both platforms.
These are local synthetic checks, not physical-device or release qualification.

The approved restoration comparison checks configured terminal flags, speeds
and control characters. On Darwin, it permits only added `PENDIN` after an
originally canonical, `PENDIN`-clear mode; every other attribute must match.
Originally noncanonical or `PENDIN`-set modes retain exact comparison, as does
Linux. Native PTY regressions separately verify unread-input preservation,
including a queued interrupt. Comparison does not read or flush queued input.

Linux verification uses candidate `7906d9b`; the final native Swift suite uses
`693e684`, including a Darwin-specific test-fixture correction. The native
process scenarios above initially use isolated source checkpoint `7801ad7`.
That run passed 21 of 22 checks; its RGB instrument check failed a four-label
assertion after waiting for only one label. The failed run did not capture its
screen and does not establish whether that observation was transient.

A focused correction at `3c3bc04` waits for complete annotation counts within
the same deadline and preserves the assertions. Eight deterministic decoder
regressions plus RGB/monochrome instrument and activity-layout process checks
pass on macOS and Linux. Production code and dependency pins are unchanged
across these checkpoints. This is a merged development build, not a release.

This status update changes no SVG, transcript or other capture asset. Existing
recordings retain their original source, executable and verification provenance;
the dated failures and passes below remain historical evidence. No application
source, raw process logs, internal documents, credentials or workout data are
published. Physical watch and phone delivery, phone-reachable HTTPS and a fresh
Docker release-image qualification remain open.

## Audit recovery with merged Chio instruments — on main

Pitwall PR #31 merged to main on October 11, 2026 at
`c6302697bc1142b7e2a44a7a8ff60ace9ea42790`. The captured source
`faf65458bf707c1428a07a2cdd6f7192ef90a66f` is included in that merge and
adopts merged Chio source `3064a883be2b2c9ff30c8011a9465786db0c1f24`.
The SwiftTUI pin and other dependencies are unchanged. The source average/max
gauge reference experiment remains shelved and excluded.

Dials retain a fixed 20 × 5 face. Below 20 available columns, a numeric reading,
scale and indication replace the face. Display ranges remain explicit; this
adds no targets, workout completion or history-derived measurements. Numerical
source average/max companions already on main remain independent source facts.

Captured October 11, 2026 local time from the source above before its merge.
No captures were refreshed for the merge status update. The macOS
executable SHA-256 is
`087de5db2664519fbad629bc400fe08196394781b8d56364aca36540122b6a37`.
The three actual synthetic true-color SVG/transcript pairs record Cycling bars
and fixed-size dials at 110 × 36, plus the dial-mode numeric fallback at
80 × 24. Both wide SVGs are 951.158 × 672; the compact SVG is 698.297 × 456.
Visual inspection covered the actual bars, dials, compact fallback and private
monochrome capture before publication. Only the three true-color pairs are
public. No watch or phone participates; these recordings come from the actual
local daemon and running Chio client, not a browser illustration.

The full Swift suite passed 492 functions in 83 suites and all 16 XCTest checks
on each of macOS and Linux. Full-suite times were 111.885 seconds and
130.794 seconds, respectively. The original 20-second hosted layout interaction
check passed in 16.590 seconds on macOS and 15.592 seconds on Linux. Both
explicit builds and bounded actual-process checks passed: true-color and
monochrome instruments and gears, Live/Replay map, polling/pushed clients, and
configured loopback MVT lazy loading, error/retry, credential separation and
ordinary quit/restoration. SwiftRules 0.1.3 reported no violations across
295 files with an empty baseline; independent review found no actionable issues.
These results apply to the tested candidate now included in the merge. Prior
Python and offline SDK evidence was reused with unchanged inputs, not newly rerun.

This refresh replaces the bars/dials pairs at their existing paths and adds
`pitwall/tui-dials-compact-capture.svg` / `.txt`. The shelved reference-mark
capture bytes remain in Git at public-site checkpoint `72fd1f9`; their hashes,
source and executable provenance are preserved in the historical section below.
Navigation, Running and all other captures retain their existing provenance.
Existing Fixed upload-matrix evidence is unchanged and was not rerun for this
candidate. Sustained-update resize/quit, physical Garmin/phone delivery,
phone-reachable HTTPS and fresh Docker release-image qualification remain
separate open gates. This is not a release.

### Capture integrity

| Asset | SHA-256 |
| --- | --- |
| `tui-cycling-capture.svg` | `6e1d26b270cf436c470ba45bfbd7b3ef270ba71258f9e45c06220411194f668d` |
| `tui-cycling-capture.txt` | `7296701595f1300b2e23f6f1309032f9830d4017fcddc68b2b49813200ceb964` |
| `tui-dials-capture.svg` | `4d8e22769e318a86c5c5a1fa0d712b30517f4efdd1408149aacf69ca6f41cdae` |
| `tui-dials-capture.txt` | `57569d4f1b0591c5684d0c6d743801677a92433e6de065e2f4d1ec56563c62fe` |
| `tui-dials-compact-capture.svg` | `d11d1726036493c42ec0196ee555d4ed73340d563b5262e0dfe4919d916271e3` |
| `tui-dials-compact-capture.txt` | `16d58fbef52c8325eee6cb667c4759d5be1dc9688dff694ba4997504d627575f` |

## Independent audit recovery — historical checkpoint

This preceding audit-only recovery checkpoint was based on main checkpoint
`49f73f2`, recovering the audit fixes from `53d813f` with the existing main
Chio and SwiftTUI dependencies. It excludes the shelved source average/max
reference-mark experiment. This recovery is unmerged to main.

The recovered candidate’s full Swift suite passed 489 functions in 83 suites
and all 16 XCTest checks on each of macOS and Linux. The original 20-second
hosted layout interaction check passed in 17.036 seconds on macOS and
13.450 seconds on Linux. SwiftRules 0.1.3 reported no violations across
295 files with an empty baseline; independent review found no actionable issues.
These results apply to the separate recovery candidate, not the current main
branch or the historical source-reference captures below.

No captures were refreshed at this checkpoint: the then-current assets retained
their original source, executable and integrity provenance. The sustained-update resize/quit workload remains
unqualified. Physical Garmin/phone delivery, phone-reachable HTTPS and fresh
Docker release-image qualification remain separate gates; this is not a release.

## Audit follow-up — preserved on the shelved proposal branch

The October 10 audit follow-up preserves these capture bytes and visible layout.
It removes repeated control-theme setup from passive instruments and the
persistent terminal shell. The audit candidate’s full Swift suite passed
504 functions and 16 XCTest checks on each of macOS and Linux ARM64, including the unchanged
20-second hosted layout interaction check. Existing bar/dial and map process
checks passed on both platforms, including true-color and monochrome instruments
and ordinary quit/restoration. This supersedes the hosted interaction failure
for the audit candidate only; earlier sections retain their original results.

The audit repair (PR #30) was merged only into the source-reference proposal
branch at `c80859d`, not main. The source-reference proposal (PR #29) is shelved
and closed without merging to main. Its branch preserves the proposal and audit
repair as historical work. Neither change is implemented on main. Numerical
source average/max companions already on main remain separate from the shelved
gauge reference marks. The sustained-update resize/quit workload remains
unqualified; this is not a release. The captures keep their original
source and executable provenance; no new watch, phone or release-image evidence
is implied. No application source, internal audit report or raw logs are public.

## Source average/max gauge references — shelved historical experiment

The proposal is shelved, not an active upcoming capability. Its historical
synthetic capture bytes are preserved in Git at public-site checkpoint
`72fd1f9`, with their original source, executable and integrity provenance.
The current bars/dials assets now show the merged Chio adoption
documented above; the historical record below describes the replaced bytes. Existing numerical source
average/max companions on main are unaffected by this status.

Captured October 10, 2026 local time (October 11 UTC) from application source
`9bf090a2b5161132eada68f038c91d7fa07ea2f9`, with explicitly pinned, unmerged
Chio source `8fb378eecc8ce9e558a3c29542b91e76984b104a`. The SwiftTUI pin
`2d84ac` is unchanged. The executable SHA-256 is
`f4009701c95e53d9e094f1d658f42b14654ddb14343724515c0caffeb8f2c9f6`.

`pitwall/tui-cycling-capture.svg` / `.txt` and
`pitwall/tui-dials-capture.svg` / `.txt` recorded actual Cycling bars and dials
at 110 × 36, in true color, from the authenticated local daemon and running
Chio client. SVG dimensions are 951.158 × 672. Both pairs were exported from
actual terminal cells after five-second quit and exact terminal-restoration
checks passed. These four files replace the earlier instrument recordings at
the same paths; their previous bytes remain in Git history. Older sections below
describe historical checkpoints for these paths. All other captures, including
navigation and Running previews, retain their existing provenance.

The synthetic current readings are 30.6 km/h, 245 W, 86 rpm and 145 bpm.
Independently supplied source averages are 10.1 km/h, 222 W, 84 rpm and 139 bpm;
source maxima are 16.9 km/h, 398 W, 96 rpm and 172 bpm. The speed maximum is
intentionally below the current speed; the client does not repair independent
source facts. Numbers link marks to their labelled source captions. When both are supplied,
`1` is average and `2` is maximum. If only maximum is supplied, it uses `1`.
When both occupy one cell, `*` marks the overlap and both numeric captions remain.
Off-scale references retain explicit below/above labels. Optional values remain
optional, including in selected historical observations. These are source facts,
not client-computed history, targets or workout completion. Compact views may
omit companions while prioritizing current values; Summary retains full facts.

Actual instrument process checks pass on macOS and Linux in true color and
monochrome: source updates, overlap, partially missing values, clearing,
110 × 36 / 80 × 24 / 36 × 18 layouts, cached outage/recovery and ordinary quit.
The bars, dials and monochrome actual captures were visually inspected; numeric
reference captions and scales fit. A separate review's full-scale-fit finding
was fixed and verified, with no other actionable issues remaining.

Each platform's full suite passes 502 of 503 Swift Testing functions and all
16 XCTest checks. The sole failure is the existing 20-second hosted layout
interaction timeout, now observed on both platforms. The focused macOS run
passes 43 functions. SwiftRules 0.1.3 reports no new violations.

The final offline Map/Replay process checks pass on macOS and Linux. Live at
110 × 48 shows reference marks; Replay at 110 × 48 uses complete numeric
fallbacks, while 110 × 50 shows reference marks. Selected historical facts stay
unchanged as newer Live uploads arrive; stepping changes the references to the
newly selected observation. Both loopback MapSource scenarios also pass source
acquisition, retry and credential-separation checks. These bounded process
results do not qualify the hosted layout deadline or sustained-update shutdown.

This application/dependency experiment is shelved, unmerged to main and not
release-qualified.
Issue 23's sustained-update resize/quit problem remains open; ordinary capture
cleanup does not qualify that workload. Physical Garmin/phone delivery,
phone-reachable HTTPS and fresh Docker release-image qualification remain
separate gates. No watch or phone participates in these synthetic captures.
Retain this provenance and the Git checkpoint as historical evidence. Any future replacement must come
from the actual client using synthetic observations, with matching SVG/text cells
exported only after the quit/restoration checks pass. Never publish raw
capture logs, credentials, provisioning state or private source.

### Capture integrity

| Asset | SHA-256 |
| --- | --- |
| `tui-cycling-capture.svg` | `d117dfaa8a13711c248d6ad73a8bf24bc808b423be5e4683e53b7dbc10468e3d` |
| `tui-cycling-capture.txt` | `fcc5da84911564b33f5c4e005f5bf1cb62f235d8457d6f21e130b3246f11a513` |
| `tui-dials-capture.svg` | `b746da63795e34ae1777238373a2441536b0a57b79a18a9d24cc27c9598e4c60` |
| `tui-dials-capture.txt` | `136526b1291c67d697b313e60729914d9d9ee189ba5b0e879e0132544b35d17d` |

## Navigation and Running refresh — on main

PR #28 merged to main on October 11, 2026 at
`1bbc48a5eec8892d87d6a745be1878b477328a1b`. The merge tree matches approved
head `dd7ca97cd1e6922edfba9e21697badad79ebeed8`. These captures were originally
made October 11, 2026 local time from application source
`a415fb59544c81e9bf99b19e3040599d1b363358` on macOS and show the implementation
now included in that merge. No capture bytes changed for this status update.
The captured candidate includes main checkpoint `282b879` and retains merged
Chio source `3064a883be2b2c9ff30c8011a9465786db0c1f24`.
The executable SHA-256 is
`f1d63bbc443f61d0d5aa0416ee0a8e6b9faa9ba8affcb97ec86110829b4374f3`.

The three actual synthetic true-color SVG/transcript pairs replace the existing
navigation Live 110 × 36, Running Replay 110 × 48 and expanded Running
110 × 48 recordings. Their SVG dimensions remain 951.158 × 672 for navigation
and 951.158 × 888 for Running. The new expanded Running pair is byte-identical
to its historical pair despite its refreshed source provenance. The Running
Replay source timestamp is `2026-10-11T07:42:50Z`. Its online street-map capture
passed the optional actual-process scenario in 48.780 seconds, retaining actual
OpenMapTiles, OpenStreetMap contributors, ODbL and OpenFreeMap attribution.
The web page makes no map requests. No watch or phone participates.

The full Swift suite passed 506 functions in 85 suites and all 16 XCTest checks
on each of macOS and Linux. The unchanged original 20-second hosted layout
interaction check passed in 17.134 seconds on macOS and 15.265 seconds on Linux.
The new focused coverage passed 34 functions in five suites. Navigation and
Running actual-process checks passed in true color and monochrome on both
platforms. All eleven Linux checks passed, including existing instruments,
maps, clients and MapSource scenarios. Ordinary quit and exact terminal restoration passed before
capture export. SwiftRules 0.1.3 reported no violations across 298 files with an
empty baseline. Independent review of the whole PR found no actionable issues.
The selected public images and private monochrome/dial recordings were visually
reviewed; the private dial scenario passed in 6.398 seconds. Only the six approved
true-color capture files are public.

Navigation keeps the existing four-field pages and eleven raw source facts,
with numeric readouts at 100 × 32 or larger. Signed radians, names, complete
units, missing values and zero remain explicit. It adds no compass, normalized
angle, turn instruction or ETA; smaller terminals retain the field inspector.
Its theme is applied only to the context panel.

Expanded Running retains primary pace, heart rate, active time and distance.
At 100 × 44 or larger, cadence and power sit beside terrain. At 100 columns,
secondary dial cards retain numeric readings, scales and indications; from
101 columns, complete 20 × 5 dial faces fit. Source average/max companions stay
independent facts; cadence remains rpm and pace is derived from current speed.
The six-widget Running map is already on main. These views use the selected
Live or Replay observation and add no targets, workout completion or
history-derived measurements.

This refresh supersedes the current recordings from `c3071fe`; their original
source, executable, checks and hashes remain in the historical section below,
with their bytes retained in public-site checkpoint `758bc50`. PR #31's audit
recovery and fixed-size dials are on main; PR #29's reference marks remain
shelved. Issue #23's sustained-update resize/quit workload remains unqualified.
The passing bounded interaction check does not close that separate gate.
Physical Garmin/phone delivery, phone-reachable HTTPS and fresh Docker
release-image qualification remain open. This is not a release.

### Refreshed capture integrity

| Asset | SHA-256 |
| --- | --- |
| `tui-navigation-live.svg` | `452931142f05b859c1aed4af677ed81c62d6ba03f5a49f77ee922b2edcdc93af` |
| `tui-navigation-live.txt` | `71fcf4e171f04be7c071b7896116a91d7082b3d5bd5c18ebaf85ebf19313f2cb` |
| `tui-running-instruments.svg` | `f39973e82c326179d6bd743e9c1be1db29549309363df54d481faa8c02af5f47` |
| `tui-running-instruments.txt` | `5f86182555dff5d80482460ab2361b400010b7baf83bec3e59eda8c55a0a6d8f` |
| `tui-running-replay.svg` | `da21d25ff8903a609ca1d80fa1f3e726cfe01cb6918373d903b666820a6ac337` |
| `tui-running-replay.txt` | `5767b054d7d54959752de9f832302061295721ad7fa92483cab531d871247d9d` |

## Navigation and Running presentation — historical unmerged checkpoint

Captured October 10, 2026 from application source candidate
`c3071fe250c291ba6891f1f108b002103df6f635` on macOS. The `pitwall` executable
SHA-256 is `3606a118b7b6da5c87f746d560a3703f0761171e969b7ae56318b3b309598a2c`.
The Running Replay frame's synthetic source timestamp is `2026-10-10T22:09:23Z`;
it records retained sequence 1 of 4 while newer uploads remain independent.
Both actual process scenarios passed before exporting their frames, including
five-second quit and exact terminal restoration. Navigation checks all eleven
fields, clearing, paging, cache recovery and selected history at 100×32; Running
checks six instruments, Bars/Dials, independent source summaries, clearing,
cache recovery and selected history down to 100×44 Replay. The optional Running
preview also verified actual OpenFreeMap tile loading and provider attribution.

The final focused macOS check passed 21 test functions in four suites. The
preceding full suite passed 499 of 500 Swift Testing functions plus all 16 XCTest
checks, with only the already documented hosted layout timeout. Linux's full
suite passed all 500 Swift Testing functions plus 16 XCTest checks; final padding
regressions passed separately (17 functions), and both final offline process
scenarios passed with the minimum Replay sizes and five-second quit/restoration.
SwiftRules 0.1.3 reported no new violations across
297 files. A separate reviewer found no remaining actionable issues after the
padding correction. This evidence does not qualify sustained-update shutdown or
physical-device behavior.

The approved public asset names are:

- `pitwall/tui-navigation-live.svg` / `.txt`: Live navigation context at 110 × 36.
- `pitwall/tui-running-replay.svg` / `.txt`: Running Replay dashboard at 110 × 48.
- `pitwall/tui-running-instruments.svg` / `.txt`: expanded Running at 110 × 48.

Refresh all three pairs from the real authenticated local daemon and running
Chio client with curated synthetic observations, explicit true color and no watch
or phone. Export each SVG and transcript from the same terminal cells only after
clean exit and exact terminal-restoration checks pass. Preserve actual basemap
credits in the Running capture; if it uses online tiles, retain OpenMapTiles,
OpenStreetMap contributors, ODbL and OpenFreeMap attribution. No web-page map
requests or fabricated terminal output are permitted. All other capture pairs
retain their existing provenance below.

The navigation candidate changes context `2` at 100 × 32 or larger: segmented
numeric readouts and complete ordinary values across the existing four-field
pages, covering eleven source fields. Angles retain signed radians; distances,
elevations and destination/next-point names remain source facts. There is no
compass, angle normalization, turn instruction or ETA. Smaller terminals retain
the existing field inspector. Missing and zero remain distinct, with ordinary
text when complete segmented values cannot fit.

The Running candidate retains primary pace, heart rate, active time and distance.
At 100 × 44 or larger, expanded instruments add cadence and power beside terrain,
with independently supplied source average/max companions. Cadence remains rpm;
pace is derived from current speed. Shorter layouts retain their existing primary
presentation. The six-widget Running main map is already implemented on main;
its new Replay recording makes that existing layout visible. Both pages use only
the selected Live or Replay observation, including historical missing values.

This candidate is unmerged and not release-qualified. Merged cycling gear and
terrain evidence is separate below. The known macOS interaction delay and the
sustained-update resize/quit failure on macOS and Linux remain open; ordinary
capture cleanup does not qualify those workloads. Physical Garmin delivery,
phone-reachable HTTPS and a fresh Docker release-image qualification remain
separate open gates.

### Capture integrity

| Asset | SHA-256 |
| --- | --- |
| `tui-navigation-live.svg` | `f412a44848ee64e92a72164d84893380e1556b5f321dc9db8b0ea64c68d896b5` |
| `tui-navigation-live.txt` | `fab258e16ee86e40baae1a9b8c3ce809ec85f7333af4b212dbef1aaf39a84cc5` |
| `tui-running-replay.svg` | `d88ba797b8ba804280bb27e453e2363e724eb2c93041cb41a8d0633958d1e2f7` |
| `tui-running-replay.txt` | `4ee1bc6ff3ff86755429ee4d3eb79403afb43ed9db2ae8106821820df1d9acd4` |
| `tui-running-instruments.svg` | `f39973e82c326179d6bd743e9c1be1db29549309363df54d481faa8c02af5f47` |
| `tui-running-instruments.txt` | `5f86182555dff5d80482460ab2361b400010b7baf83bec3e59eda8c55a0a6d8f` |

## Cycling gear instruments — merged on main

The October 10 gear change adds `pitwall/tui-gears-live.svg` / `.txt`, an actual
synthetic 110 × 36 true-color capture from the authenticated local daemon and
running Chio client. Application source checkpoint:
`b9b00ed9da6f321be97d5654531560f269b1a141`; macOS executable SHA-256:
`7c93d93f3cf28b62475f94897452ebbe9d42409cf75cfaa63c3bf364a7e02adc`.
The capture uses front index 1 / maximum index 2 / 34 teeth and rear index 6 /
maximum index 12 / 21 teeth. Those are independent raw source facts, without
index offsets, gear ratios, gear-count inference or sensor connectivity claims.
Missing members remain missing. No watch or phone participates.

The cycling context uses shared Chio readouts at 100 × 32 or larger, retaining
all six labelled facts; smaller terminals retain field paging. Separate actual
Live/Replay process checks pass in true color and monochrome on macOS and Linux,
including zero/partial/missing/extreme values, clearing, cached outages, compact
paging, resizing and the original five-second quit/terminal-restoration checks.
Historical gears remain historical while newer Live observations arrive.
The same run exports an unpublished Replay capture as additional local evidence.
The public SVG and transcript come from the same actual terminal cells and are
written only after both sessions exit cleanly; no recoloring is applied.

The full Linux suite passes. All new gear tests pass on macOS; its existing
20-second layout interaction check still fails. The sustained-update resize/quit
issue remains open; these captures do not requalify that separate workload.
This is a merged development build, not a release or physical-device qualification.
PR #27 merged at `46b026b4dcf716df3eb0a773b388bbf8b308057e` from approved
head `fef79a3ca722447e35e963df77a32d1506ad771a`; their complete trees match.
The view-name follow-up changes internal names only and passes 57 selected tests
on each of macOS and Linux. The existing capture retains its original source
and executable provenance; no new capture or release qualification is claimed.

## Terrain instrument — merged on main

The October 10 terrain change adds `pitwall/tui-terrain.svg` / `.txt`, an
actual synthetic 110 × 36 true-color capture of the expanded Cycling page.
PR #26 merged on October 10 at `8dde4fb6781d531597dbacafb42de44c9c2fe41a`.
The merge tree matches approved head `1769558a93fdf3d874c4980805b71b32e3c82d06`;
the capture below retains its original source provenance, separately from the main dashboard.
Application source checkpoint: `5de9f5858ee245b44717f0ead695c854507c8f89`.
The capture uses the macOS executable with SHA-256
`21f578448ca4281336bddfa96edfd4d73b410d3c2d4b4221c59acc46ebd24b5b`.
The independent terrain renderer checks pass on macOS and Linux, including
signed/zero/missing readings, valid extreme values, retained updates and width
fitting. The full Linux suite passes; the macOS full suite retains the known
20-second layout interaction failure. True-color real terminal checks pass on
both platforms, including terrain-only updates, clearing, resizes and clean
quit. A macOS Replay capture retains historical terrain while newer Live
observations arrive. These checks do not replace the sustained-update shutdown
gate or establish physical Garmin behavior.
It promotes existing terrain context to a shared Chio elevation readout with
independent source ascent/descent totals. The panel does not infer a gauge range,
gradient, target, route or elevation history. Negative elevation, zero totals
and missing observations remain distinct. Small layouts still prioritize the
primary measurements; the terrain panel retains its existing wide allocation.

The capture uses the real authenticated local daemon and TUI with synthetic
observations: elevation −12.5 m, ascent 120 m and descent 30 m. No watch or phone
participates. The SVG and transcript are exported from the same terminal cells;
true color is explicit and terminal cleanup must pass before export. This is a
merged development build, not a release or physical-device qualification. Existing
interaction and sustained-update shutdown limitations remain open.

## Historical dashboard captures — merged source aggregates

October 10, 2026: the Live/Replay SVG/text pairs now come from Pitwall source
checkpoint `5bbb52a7f82205f8c0b43b3621e2fe176a54feba`. Pitwall PR #24 merged on
October 10 at `ad2f457b87ceac4fbc9ed84ced7b47521509917a` from approved head
`61ade74bfe3d21427832f722563eb40288891244`. The map dashboard and source
average/max companions are now on main. This is a development build, not a
release. The merge itself did not refresh the captures; the subsequent true-color
refresh below preserves the same compiled application. These are
`pitwall/tui-map-live.svg` / `.txt` and `pitwall/tui-map-replay.svg` / `.txt`,
captured at 110 × 48 on macOS from the actual authenticated local daemon and
Chio client using synthetic data. No watch or phone participates.

A later October 10 refresh explicitly selects 24-bit true color for every color
capture, independently of inherited shell settings. The original map images
used the terminal renderer's 256-color fallback, which approximated the intended
charcoal surface (`#10141B`) as navy (`#00005F`). The new files are fresh captures
from the running client, not recolored images. Their recorded cells and SVGs
preserve charcoal `#10141B`, cyan measurements `#7DDCEB` and the red header
`#FF554D`; capture checks reject missing exact charcoal/cyan values. The earlier
256-color bytes remain in Git history. Both Live and Replay complete their real
process and terminal-restoration checks before export, even when the invoking
shell supplies `NO_COLOR=1`, an empty `COLORTERM` and `CLICOLOR=0`.

The application binary is unchanged from source checkpoint `5bbb52a`; current
Pitwall main `9cf2793e17dea4b8e9a8e9781f0e0de6eb00e64c` contains that application.
Capture tooling revision `94e0686` changes only the capture commands, their
regressions and documentation for this refresh; PR #25 merged it at `46beb1f`. Twelve local
capture regressions pass, including exact RGB preservation and explicit
monochrome selection. Color captures use a shared true-color environment;
monochrome exports require the capture command's explicit `--no-color` option.
Ordinary non-export smoke tests retain their inherited color mode. No renderer
fix, new full-suite run or changed timing qualification is claimed.

The map sits above two rows of three measurements with a compact status footer.
`Src avg` / `max` beside speed, HR, cadence and power come from the same selected
observation as the current readings. They are independent source facts, not
averages of uploaded history; zero and missing remain distinct. The Live
capture selects sequence 7 (252 W, source average 229 W and maximum 405 W).
Replay selects sequence 1 of 6 (246 W, source average 223 W and maximum 399 W).
Both retain 30.6 km/h, 86 rpm, 145 bpm, 32:14 and 6.20 km as current readings.
The synthetic source maximum speed is below current speed intentionally; the
viewer does not repair or clamp independently reported facts.

The complete offline map interaction and optional online Live/Replay capture
scenarios pass on macOS, with clean quit and exact terminal restoration checked
before export. The instrument process check also passes source-only updates,
clearing, bars/dials, compact sizes and cached outage/recovery. Separate Linux
full-suite verification passes. **The macOS full suite still fails its original
20-second hosted interaction deadline: 20.349 seconds in the full suite and
20.300 seconds in isolation.** The user accepted the merge with this failure
handled as follow-up; these captures do not imply complete qualification.

The existing continuous-update resize/quit problem remains separate: the earlier
merged dashboard failed its unchanged five-second gate on macOS and Linux. The
user accepted that earlier merge with the issue handled as follow-up. This
merge does not claim that the runtime repair has happened or that all timing
gates pass. No fresh Docker release-image, Garmin SDK, physical delivery or
battery evidence is added.

The captures explicitly enable OpenFreeMap street tiles for synthetic Singapore
coordinates. The default remains the offline, public-domain Natural Earth land
map. Online requests originate from the TUI host and reveal the viewed region
to the provider; remote tile sources require HTTPS. The actual recorded cells,
transcripts and SVG glyph paths preserve OpenMapTiles, OpenStreetMap contributors,
ODbL and OpenFreeMap credits. The web page serves local static images and makes
no map requests. It shows one selected point, not a trail or accuracy radius.

The two merged dashboard captures remain on the landing page, alongside the
merged terrain and gear captures above. The seven archived instrument pairs
below remain available for older asset links.
Current controls use `i` for expanded instruments, `o`/`a` for the dashboard,
`g` for bars/dials, `v` for layout and `m` for the chooser. Small terminals keep
current readings first; the full source summary remains in context `1`.

## Historical initial main-dashboard captures

Pitwall PR #22 merged on October 10 at
`0fd26b9f279aab53f122c234930c8bd32c4eb5d0` from approved head
`4ee4a4c2375bec4657bad267efa56a94327440a4`. Its 110 × 48 online map SVG/text
pairs were produced from source checkpoint
`66e0087a936e190be483ab00ec070035a706d163`. They were superseded at the same
asset paths by the source-aggregate candidate above; their prior bytes remain
in Git history. The main dashboard merge did not waive the sustained-update
resize/quit failure. Earlier passing shutdown checks do not qualify it.

## Historical selected GPS map candidate preview

Earlier October 10, 2026 checkpoint: the selected-point GPS map was a PR
candidate pending approval. This is historical provenance for the superseded
110 × 36 offline captures, not the files now displayed. Capture source revision:
`6906fff4d5f02d6b565f63a0aaf75478b6eaf786`.

The earlier candidate preview pairs used `pitwall/tui-map-live.svg` / `.txt` and
`pitwall/tui-map-replay.svg` / `.txt`, each at 110 × 36 on macOS. They come from
the actual local daemon and authenticated production Chio client with synthetic
observations. The Live map shows the selected synthetic observation; Replay
shows its selected accepted historical observation. Both use the bundled offline
Natural Earth land map. The SVG and transcript in each pair must come from the
same recorded terminal cells, with clean quit and exact terminal restoration
checked before export. No Garmin simulator, physical watch or phone participates.

The screen supplies one selected location marker, original source time and Garmin
GPS quality code. Missing, cached Live and historical Replay states stay explicit;
polar locations outside the Mercator camera range retain their original location
summary. GPS quality is not an accuracy radius. No connected trail, reconstructed
fix, street detail or workout completion is claimed by the default basemap.

The bundled Natural Earth 1:110m land geometry is public domain, with
“Made with Natural Earth” credit. It provides coarse geographic context without
network acquisition. Explicit online mode uses OpenFreeMap; tile requests from
the TUI host reveal the viewed region to that provider. An explicit remote tile
configuration requires HTTPS. The public page uses only static local SVG/text
assets and never connects to a tile provider, live daemon or watch.

Candidate keyboard controls: `a` opens the map; arrows pan; `+` / `−` zoom;
`c` follows the selected point; `e` retries loading; `o` returns to the overview;
`m` returns to the mode chooser. Compact allocation retains a location summary.
The actual map scenario passes on macOS and Linux ARM64, in color and monochrome terminals,
including repeated map re-entry, pan/zoom/follow, missing/polar/zero locations,
Live outage/recovery, resizing, historical selection while new uploads arrive,
and clean quit. A local synthetic vector-tile fixture exercises the production
loader, lazy requests, failure/retry, credential separation and cancellation.
Independent source review found no actionable issues. These captures do not
establish external-provider availability or physical-device behavior. All earlier instrument pairs and Garmin PNGs
retain their separately recorded provenance below.

## Archived instrument captures

Shared Chio instrument preview checkpoint, October 10, 2026: all seven instrument
SVG/text pairs were refreshed from Pitwall candidate revision
`b0c47654349e3fe643b9a6f21e9ccf227788f1bf`, using shared Chio instruments pinned to
`eb1ffb3cb76933f7bfe403321fe43394445ad533`. Pitwall PR #21 merged on October 10
at `4665935fb3468fe26d27d389f30b48cf45989363`; its tree matches the approved
head `95f0ea3a7e15360d4044206a579f3020fbedbe89`. The capture source is unchanged.
Shared instruments, the Live/Replay console and simulator-qualified reporting
modes are on main. This is not a release. A map-readiness assessment was included.
At that instrument checkpoint, Pitwall had no map screen; those captures show
measurement instruments. The current main-dashboard captures and their separate source checkpoint are
described above. These seven instrument pairs remain unchanged.

The recordings use the actual local daemon and authenticated production Chio
client with synthetic measurements. Running wide and compact retain the Auto
30-second steady-activity fixture; Cycling bars and dials retain Fixed 10-second
reporting. The menu starts no provider. Replay wide and compact show the paused
historical Cycling observation at 190 W, 25.2 km/h, 80 rpm and 138 bpm, at retained
sequence 1 of the captured upper bound 2. Menu, Running wide, Cycling bars/dials
and Replay wide use 110 × 36; Running and Replay compact use 80 × 24.

Shared gauges and numeric readouts preserve the display scales, units, formatting
and missing-value meaning. When large digits cannot fit, ordinary text preserves
the reading. The SVG and transcript in each pair come from the same recorded
terminal cells; no console output was reconstructed. The capture harness checks
clean quit and terminal restoration before exporting. All seven published pairs
were refreshed; additional Cycling dial no-color and 36 × 18 numeric recordings
are not published.
No Garmin simulator, physical watch or phone participates in these recordings.

At this candidate checkpoint, macOS and Linux ARM64 each pass 413 Swift Testing
functions in 75 suites plus 16 XCTest checks, all seven service/client process
checks and 96 terminal shutdown cases. The macOS capture/export checks pass all
eight exporter tests and nine capture scenarios; Linux also passes a no-color
instrument smoke check. The pinned SwiftRules 0.1.3 gate reports no violations in
278 files. Independent review found no issues. These checks establish the stated
local terminal and client behavior, not physical watch/phone delivery, battery
savings or fresh Docker release-image qualification.

All seven archived instrument pairs use this checkpoint. They have not
been refreshed for the main dashboard and are no longer displayed on the landing page. The older records below
preserve their historical capture revisions, verification and limitations;
references there to a pair retaining an earlier revision describe that checkpoint,
not the files currently published. The Garmin PNGs remain the October 8 simulator
captures and have not been refreshed.

Local Auto qualification merge checkpoint, October 9, 2026: PR #19 merged at
`de3787bf56eb06475fe52025928f51836f6e5eec` from approved head
`c9cef32b7fc52ab89460b897b503727a77bf4699`. The complete merge tree equals the
approved head, preserving the qualification evidence recorded below at
`a1f0614220321627c59730a1b408ff3c6f8da1b6`: four Auto cases, four representative
Fixed/Significant regressions, 88 offline SDK tests and 160 harness checks on
each of macOS and Linux ARM64. The qualification is now on main; this is not a
release. The merge adds no new test, physical watch/phone, battery or fresh Docker
release-image evidence. HTTPS enforcement remains restored. All SVG/text pairs
retain their original capture provenance; the following candidate and earlier
checkpoint records preserve their historical status and limitations.

Local Auto simulator qualification checkpoint, October 9, 2026: candidate
`a1f0614220321627c59730a1b408ff3c6f8da1b6` passes all four five-minute synthetic
Auto runs in Garmin SDK 9.2.0: ordinary and maximum payloads, each with polling
and pushed clients, using the native macOS daemon, SQLite and actual CLI/TUI.
Each accepts 11 reports from 13 attempts, observes all five policy decisions,
preserves two exact frozen retries and advances captured completion counts from
zero to five across the first lost acknowledgment. The largest encoded body is
3,724 bytes; the lowest sampled free memory is 19,592 bytes. These samples do not
measure native encoder peak allocation or physical-watch memory. The Garmin
runtime passes 88 offline tests; 160 harness checks pass on each of macOS and
Linux ARM64.

The Auto implementation is already on main; this follow-up qualification candidate
is separate and is not a release. Four representative Fixed/Significant producer
regressions also pass. Three Significant startup attempts failed; full unchanged
reruns passed after manual simulator restarts. This does not establish unattended
multi-case reliability. HTTPS enforcement is restored and verified by explicit SDK
rejection of plain HTTP responses (`-1001`). Physical watch/phone delivery, battery
savings and fresh Docker release-image qualification remain open. These runs do
not change the terminal display or refresh any capture: all SVG/text pairs retain
the exact provenance below. The following preview and merge records describe
their historical checkpoints, including qualification gaps at that time.

Local Auto preview checkpoint, October 9, 2026: the Running wide and compact
SVG/text pairs (`tui-capture` and `tui-compact-capture`) are refreshed from the
candidate revision `3cfad25da709fd5356af0ae9ffb8684449f91d63` on
`codex/local-auto-reporting`. The CLI and capture sources are unchanged from the
captured working tree. This is a candidate checkpoint, not a merged or released
revision. They use the actual local daemon
and authenticated Chio client with synthetic readings: 145 bpm, 3.0 m/s, 6.2 km,
32:14 active time and 72% battery. Both footers show `Last reported`,
`Auto 30 s` and `steady activity`. `Running (auto)` separately describes the
sport-layout selection, not the reporting policy.

The capture harness checks actual terminal cells and clean quit at 110 × 36
and 80 × 24 before writing the reviewed SVG/text pairs. The SVG paths and
plain-text transcript come from the same captured terminal cells. No Garmin
watch or simulator participates in these terminal recordings. The candidate
passes 382 Swift Testing functions, 14 XCTest checks and 157 harness checks on
each of macOS and Linux ARM64. Actual service/client checks for Auto, Fixed,
Significant, recovery and activity contexts pass on both platforms. All 86 offline
Garmin SDK tests pass; the production Auto simulator upload matrix remains
unverified. SDK HTTPS enforcement remains enabled. A current negative HTTPS probe confirms the SDK secure-connection rejection
(`-1001`) for plain HTTP acknowledgments. These
platform and terminal checks do not prove physical phone/watch delivery, battery
savings or release-image qualification. Only these two Running pairs are
refreshed; the other five menu, Replay and Cycling pairs retain the Live-or-Replay
checkpoint below.

Local Auto targets new reports at 10 seconds around qualified changes, 30 seconds
for steady activity or unknown battery and 60 seconds when paused or protecting
low battery. Reserve protection has priority over faster reporting. Each report
freezes its source decision and interval through retries, storage, CLI/TUI and
replay. These are targets rather than guaranteed delivery intervals. The candidate
does not consume Bono hints, estimate battery life or establish physical-watch
behavior. Implementation on main is separate from production upload qualification and
release readiness.

Local Auto merge checkpoint, October 9, 2026: PR #12 merged at
`cc01c5446060188498001178369c7a3fc3166787` from approved head
`3c813c665f3fe9db5e5ac8a3a71e4756345b1288`. The final review change makes
reporting-detail selection exhaustive without changing displayed output.
Focused reporting presentation checks pass on both macOS and Linux ARM64:
nine tests in four suites. The merge does not refresh the SVG/text pairs;
their capture provenance remains `3cfad25da709fd5356af0ae9ffb8684449f91d63`.
Local Auto is implemented on main, not released. The production Auto simulator
upload matrix remains unverified, SDK HTTPS enforcement remains enabled, and
physical watch/phone validation is deferred. The offline SDK and platform
checks above do not establish production uploads, physical delivery, battery
savings or fresh release-image qualification.

The following Significant checkpoints are historical. Their Running recordings
have been superseded by this Auto preview; their verification evidence remains
separate from Auto qualification.

Significant preview checkpoint, October 9, 2026: the Running wide and compact
SVG/text pairs (`tui-capture` and `tui-compact-capture`) were refreshed from
candidate revision `93bb6ab1ba531a8d1de50a686ee03492cea8bc75`. They use the actual
local daemon and authenticated Chio client with synthetic readings: 145 bpm,
3.0 m/s, 6.2 km, 32:14 active time and 72% battery. The footer shows Significant
reporting with five-second minimum spacing and a 30-second heartbeat target.
The retained report has heart-rate/speed reasons and a 12-second observed silence
age. No Garmin watch or simulator participates in these terminal recordings.

The exporter checks actual terminal cells and clean exit at 110 × 36 and 80 × 24.
All 369 Swift Testing functions in 67 suites plus 14 XCTest checks pass locally
on each of macOS and Linux ARM64 at this candidate. Real-process checks preserve
Significant facts through storage, clients and replay. Garmin targets compile;
at this capture checkpoint, the then-current 69-test SDK runtime suite and
production upload matrix were pending with HTTPS enabled. The original Significant
implementation merged on October 9, 2026 at `46758111d37e60c8f7ad4b1ed8296bce7469cc92`
from the approved head `a79f6c1cab95afc56997f46d49268d26b5f12787`.
This is not a release. Physical phone/watch delivery, battery savings and a
fresh release-image check remain open. The readability changes and merge
did not refresh the captures or alter their visible display; their
recorded provenance remains `93bb6ab1ba531a8d1de50a686ee03492cea8bc75`.

Significant runtime repair candidate, October 9, 2026: the merged implementation
subsequently encountered a Garmin runtime stack overflow. Candidate `8c7d30c`
repairs immutable copying without changing reporting policy or wire data,
strengthens qualification checks and corrects the synthetic heart-rate scenario.
All 72 Garmin SDK tests pass; 140 harness checks pass on each of macOS and
Linux ARM64. Independent review found no issues. All four five-minute production
simulator cases pass: polling and pushed clients, each with ordinary and maximum
payloads, using the native macOS daemon, SQLite and real CLI/TUI. Each case
accepts 15 reports from 17 attempts with exactly two frozen retries, observes
completion counts advancing from zero to five and all ten reporting reasons,
and records no drops or rejections. Across the matrix, the largest encoded body
is 3,811 bytes and the lowest sampled free memory is 25,096 bytes. Send attempts
remain at least 5,000 ms apart; the largest stable heartbeat gap is 30,967 ms,
within the 31,500 ms qualification tolerance. These memory samples do not measure
native encoder peak allocation or physical-watch memory.

HTTPS enforcement was restored after the matrix. A fresh negative probe observed
three explicit SDK secure-connection rejections for plain HTTP acknowledgments.
The repair was subsequently merged on main on October 9, 2026 at
`8c557a0398fa8ad27dc84bbd6b8b8348bdb6873b` from the approved head
`88870d170de8597de8e772edc41c2aebd4fa7835`. It is simulator-qualified,
not released. The merge did not refresh the captures; their provenance remains
`93bb6ab1ba531a8d1de50a686ee03492cea8bc75`. These checks do not prove physical
watch/phone delivery, phone-reachable HTTPS, battery savings or fresh release-image
qualification.

The exporter’s accessible description was subsequently corrected to say
“observed reporting policy”; captured cells and values are unchanged.
At that checkpoint, only those two Running pairs were replaced. The other five menu, Replay and
Cycling pairs retain the Live-or-Replay checkpoint below. Every image is a static
synthetic application capture; none is a browser implementation or live feed.

Current status, October 9, 2026: the shutdown fix, Live-or-Replay console and
console-state refactor are merged on main. This is not a release. The final
source/test checkpoint passed 353 Swift Testing functions in 63 suites plus
14 XCTest checks on each of macOS and Linux ARM64, with 96 terminal shutdown
cases per platform. Physical watch/phone delivery, phone-reachable HTTPS and a
fresh Docker release-image qualification remain separate open gates.

Live-or-Replay capture checkpoint, October 9, 2026: Pitwall source/test revision
`f546ea5a9bc4f95975cafe9ad5a93b2139e36a61`. The seven terminal SVG/text pairs
were originally captured from this revision using the real local daemon and
authenticated Chio client. The five menu, Replay and Cycling pairs retain that original provenance;
the two Running pairs now use the Auto preview checkpoint above.
Merging the console refactor itself did not refresh any captures.

`tui-menu-capture.svg` / `.txt` show the branded startup chooser at 110 × 36.
Neither provider runs at the menu. Choose Live or Replay with arrows and Enter,
or `l` / `r`; `m` or Escape returns to the chooser and stops the active provider.
One dashboard renders the selected feed. Returning to Replay opens a fresh view
at its first retained observation. `--live` selects pushed transport for Live,
not the startup mode. Health-only and one-shot output bypass this chooser.

`tui-replay-capture.svg` / `.txt` show paused historical Cycling instruments at
110 × 36. `tui-replay-compact-capture.svg` / `.txt` show the same feed at 80 × 24.
History opens after two accepted observations. A third upload then raises the
current sample to 260 W, while the visible historical observation remains
190 W, 25.2 km/h, 80 rpm and 138 bpm at sequence 1 of the captured upper bound 2.
The Replay screen contains no live strip. Source timestamps and identities are
synthetic. The capture checks actual terminal cells and clean exit before export;
no watch or phone participates.

The playback bar shows retained sequence position, including gaps. It does not
measure elapsed duration, sample-count percentage or workout completion. Space
plays/pauses at 1× source-time spacing; `[` / `]` step, `b` returns to the retained
beginning, and `r` reopens history. The provider owns its clock and pauses on
source-clock reversal. No missing observations are interpolated. Historical
sport defaults to General when absent and never borrows a future classification;
`v` can deliberately override the active layout. Returning to the menu clears
layout selection, while the `g` Bars/Dials preference survives.

The four Running/Cycling bars/dials recordings below were refreshed with the
new menu shortcut. Additional QA recordings inspect Replay dials at 80 × 24,
36 × 18 numeric controls and no-color output; those three are not published.
All seven published pairs are static recordings, not browser versions of the TUI.
At the capture checkpoint, the complete Swift suite passed 341 test functions
in 62 suites plus 14 XCTest checks on each of macOS and Linux ARM64. Real terminal mode-switching/playback
checks pass in polling and pushed modes while independent synthetic uploads
continue. The candidate does not establish physical watch/phone behavior or a
fresh Docker release-image qualification.

The older checkpoints below preserve earlier instrument and shutdown evidence.
Their public recordings have been refreshed at the revision above; earlier
side-by-side Live/Replay presentation has been superseded by this chooser.

The subsequent October 9 console-state refactor keeps this visual design and
these shortcuts. Menu navigation, layout and gauge preferences, context pages
and playback commands now use the same immutable model/message/reducer/effect
flow as the telemetry clients. Chio renders the resulting model. The recordings
above retain their original capture revision; this refactor is now merged and
adds no device-validation or release-readiness claim.

Instrument preview checkpoint, October 8, 2026: Pitwall revision
`f99eec77fbedb838ea4a1ec027623697cf376da4`.
Normal navigation and synthetic console capture checks passed at this checkpoint.
Immediate quit after an 80×28 resize failed the five-second shutdown qualification
limit on both macOS and Linux ARM64. That historical failure is preserved below.

Shutdown-fix candidate, October 9, 2026: Pitwall revision
`99a37770884f8c7e241f32a2596f87b94531089a` selects synchronous terminal rendering.
The unchanged 32-case shutdown matrix passes three iterations (96 cases) on each
of macOS and Linux ARM64, including the original immediate-resize case, exact
exit codes and terminal restoration within the unchanged five-second deadline.
At that checkpoint the fix was in review; it is now merged as noted above.
These local results do not establish release readiness. The visible layout was
unchanged at that checkpoint. The menu, Replay and Cycling captures use the
Live-or-Replay revision above; Running uses the later Significant checkpoint.

`pitwall/tui-capture.svg` and its plain-text equivalent
`pitwall/tui-capture.txt` record the running production Chio workout console
in the Running layout at 110 columns by 36 rows. `pitwall/tui-compact-capture.svg` and
`pitwall/tui-compact-capture.txt` record its compact four-card Running 80-column by 24-row view.
`pitwall/tui-cycling-capture.svg` and `pitwall/tui-cycling-capture.txt` record the
Cycling layout at 110 columns by 36 rows: 30.6 km/h (8.5 m/s), 245 W, 86 rpm and
145 bpm. `pitwall/tui-dials-capture.svg` and `pitwall/tui-dials-capture.txt`
record the same Cycling observations at 110 columns by 36 rows after `g` selects
dials. Other observations match the original Running fixture. The original
Live-or-Replay Running captures used the real daemon and authenticated
`tui --live` client, with synthetic schema-4 observations: 145 bpm, 3.0 m/s, 6.20 km, 32:14 active time, 72% observed
battery, applied Fixed 10-second reporting, elevation −12.5 m, ascent 120.0 m
and descent 30.0 m. The supplied fixture also includes three captured completions
since start generation 1; completion detail is in diagnostics. Source identities and workout values are synthetic. The
capture bypasses Garmin and does not establish physical phone/watch delivery.
Those original Running pairs were later replaced by Significant captures and
now use the Auto preview described at the top; the Cycling pairs retain the Fixed fixture.

The console has Running, Cycling and General layouts. Four large numeric cards
lead the wide overview. Running uses stable primary slots for derived pace,
heart rate, active time and distance. Cycling uses speed in km/h, power, cadence
and heart rate, with active time/distance context below at wide/80×24 sizes and
in diagnostics at compact size. General uses speed in km/h, heart rate, active
time and distance. Missing measurements stay unavailable in their fixed slots;
zero stays a measured value. Wide terrain context shows supplied elevation,
ascent and descent below the primary measurements.

Segmented bars are the default instrument appearance; `g` toggles dials. The
numeric reading remains primary in either style. Speed uses a 0–60 km/h display
range, power 0–600 W and cadence 0–180 rpm. These are display ranges, not targets;
below/above-range labels preserve the actual number. Heart-rate instruments use
supplied zone bounds and preserve below/above/unknown labels. Missing or collapsed
bounds show `Zone range unavailable`. Missing readings do not get a filled gauge.
Four compact numeric cards and gauges fit at 80×24; 36×18 uses numeric fallbacks.
Source identity summary, read status and age stay visible. Reporting facts move
to a compact footer; full source identities, callbacks and delivery details remain
in diagnostics. Battery, applied Fixed interval and policy observation age are
source facts; phone connection does not prove current delivery. Captured completion
counts retain their lifetime and uncertainty. Plan position, current/next steps
and targets are unavailable. No trend chart, map, provider data or workout completion percentage is invented.
The separately labeled replay view displays original accepted observations.

Auto selects Running for observed sport `1`, Cycling for `2`/`21`, and General
for other explicit sports. A missing profile retains the last automatic layout
within the same device/session/producer-epoch stream, initially General. `v`
cycles Auto → Running manual → Cycling manual → General manual → Auto and returns
to the overview. Updates and resizes retain manual selection; a new full source
stream resets manual selection and automatic memory. `g` returns to the overview
and retains the bars/dials appearance through updates, resizing and full source
stream changes. Raw JSON, `--once` and wire
contracts remain unchanged. Hiking, swimming and strength specializations remain
proposed; the layout choice itself adds no plan or map capability. Recorded playback is
a separate view in the merged console.

Six context views remain available: activity summary/profile, navigation,
pressure, effort, swimming and cycling. In the interactive TUI, `1`–`6` selects
a named context, `n`/`p` cycles contexts, `j`/`k` changes field page, `d` opens
paged diagnostics, `o` returns to the overview and `q` quits. Full source
identities, raw callbacks and delivery details remain in diagnostics. Below the
80×24 layout, a 36×18 compact view retains primary measurements, source/read/age,
context navigation and quit. The public compact capture represents 80×24.

The original instrument checkpoint passed 290 Swift Testing functions in
52 suites and 14 XCTest tests on each of macOS and Linux ARM64. Eight SVG export
tests passed on both platforms, including all 256 braille glyphs and style handling.
Real synthetic authenticated instrument, activity-layout and reporting
client checks passed on both platforms at that checkpoint. All four published capture sessions exited
cleanly through the ordinary quit path and passed terminal cleanup checks. Wide bars/dials, 80×24 gauges, 36×18 numeric
fallbacks and no-color cells were inspected. Normal navigation and capture checks
passed, but immediate quit after an 80×28 resize exceeded the five-second limit on
both platforms. This was a failing qualification case for that instrument preview;
it was not treated as an unrelated or solely pre-existing issue.

The shutdown-fix candidate repeats the full 290-function/52-suite and 14-XCTest
checks successfully on both platforms. Its continuous-upload pressure regression
passes on both platforms. All six real-client checks and eight capture-export
regressions pass on both macOS and Linux ARM64.
The pressure regression keeps synthetic uploads independent
of screen waits, observes advancing readings and ordinary keys through repeated
resizes in polling and pushed modes, then quits immediately after resizing while
uploads remain active. It preserves the five-second exit and exact restoration
requirements. Intermediate snapshot displays may still be skipped.

The capture harness waits for a complete frame and verifies clean quit,
exact terminal settings, cursor and alternate-screen restoration before writing
publishable assets. These normal capture paths did not establish the original
immediate-resize/quit case; the candidate's separate shutdown matrix now passes
that case locally. Export checks preserve colors, inverse cells and glyphs.

Reporting qualification checkpoint, October 9, 2026: all 54 Garmin SDK tests
and eight five-minute production Fixed cases pass with the native macOS daemon,
SQLite and real CLI/TUI: 5/10-second cadence, polling/pushed clients and
ordinary/adversarial payloads. Each case checks frozen lost-ACK retry,
same-database outage/recovery and sampled memory. Minimum sampled free memory
is 35,432 bytes; this does not measure native encoder peak or physical memory.
Two initial SDK launches timed out before ACK acceptance; unchanged full cases
passed after normal simulator restarts. Later cases used fresh simulator sessions.
The cause of those startup failures remains unproved. Simulator HTTPS enforcement
was restored after the matrix; a fresh probe returned the explicit secure-connection
requirement rejection. This blocks HTTP ACK consumption even when a request reaches
the test server. Physical watch/phone delivery, phone-reachable HTTPS, battery
behavior and a fresh Docker release-image qualification remain open. These new
transport results do not change the capture revisions or visible console design above.

The recording uses an xterm-compatible true-color terminal. The SVG preserves
the captured ANSI colors, cell positions, borders, and visible text. Terminal
cells use embedded DejaVu Sans Mono outlines. Missing braille glyphs use
style-matched local DejaVu Sans outlines fitted to the recorded cell width. This
is a glyph-export fallback, not a reconstruction of the console. The SVG has no
external resources. Plain-text transcripts omit trailing row padding without changing visible text
or column positions. It is a fixed
recording, not an interactive web terminal. Refresh captures from the running
client; do not invent output or substitute real workout data. Never publish raw
capture logs, provisioning state, credentials, or private source files.

Pitwall's intended physical path requires a paired phone as the Internet bridge;
Garmin describes that mechanism in its [Communications API documentation](https://developer.garmin.com/connect-iq/api-docs/Toybox/Communications.html).
The current project targets a Forerunner 970 and iPhone. The rich synthetic
Garmin path passed a five-minute polling run with 276 accepted samples,
22 exactly reported overwrites and 21,280 sampled free bytes at its minimum.
An adversarial pushed-client run also passed: 278 samples, 22 overwrites, a
6,703-byte largest body and 17,488 sampled free bytes.
The immutable ring retains four waiting observations and two frozen for retry;
full batches upload early without reducing collection cadence. This is sampled
production-simulator memory evidence, not a measurement of native encoder peak
allocation or physical-watch memory/battery. SDK 9.2 simulator encoding rounds
the extreme floating-point fixture and needs a string-escaping adapter; physical
phone encoding is unverified. The page must keep the phone requirement, possible
delays, and physical-delivery/HTTPS limitations prominent.

On October 7, the actual Garmin simulator also passed a five-minute pushed-client
run with the Linux ARM64 server and real CLI/TUI in Apple containers: 278 accepted
samples, 22 reconciled overwrites, a 4,713-byte largest body and 21,280 minimum
sampled free bytes. The run verified frozen ACK-loss retry, same-volume restart,
fresh client sessions and terminal restoration. These historical transport checks
are separate from the refreshed console recordings above.

The added contexts preserve the source observations: summary averages/maxima,
calories, start time/location and a losslessly represented activity profile
identifier; navigation bearings, course deviation and destinations; distinct
ambient/raw/sea-level pressure; oxygen saturation, estimated energy expenditure
and aerobic Training Effect; previous swimming interval/length; and observed
front/rear cycling gears. Readings depend on the activity, navigation, device and
sensors. A gear observation does not prove sensor connectivity, and a previous
swimming length does not describe the current stroke. These are sampled facts,
not a complete event history or native workout-plan alignment.

## Pitwall Garmin data-field captures

`pitwall/transponder-large.png`, `pitwall/transponder-half.png`, and
`pitwall/transponder-compact.png` are actual Forerunner 970 simulator screen
captures from October 8, 2026, using Garmin Connect IQ SDK 9.2. They were saved
directly with Garmin’s **File → Save Screen Capture** at 454 × 454 pixels, without
image editing.

The production verification run supplied three fixed synthetic observations
through normal Transponder collection and upload handling. The final observation
was 145 bpm / 3.0 m/s. The same run verified frozen retry after the first durable
acknowledgment was replaced with HTTP 503; these screen captures show the running
renderer and are not separate transport tests. Phone delivery and physical-watch
behavior remain unverified.

Every size now shows telemetry delivery only; the uploaded telemetry is unchanged.
The large field has one delivery symbol and short label, a separate historical
`LAST ACK` row, and queue/loss symbols with counts. Garmin's native fields supply
workout measurements. Smaller fields use symbols, numeric counts and ages;
`SIM` is their only word. A blue arrow means sending, amber circular
arrow means retry, red octagon means stopped, and green check plus age means an
earlier accepted upload. A neutral circle means idle; a clock plus `--` means no
ACK. The tray counts queued/in-flight samples. Crossed downward arrow and circled
cross mark dropped and rejected samples. A square/minus marks a collection limit,
barred upward arrow a delivery limit, and warning triangle a setup/reload notice.

The simulator repeats Transponder in every native field slot; visible duplicates
and cyan layout dividers belong to that simulator page. ACK age is historical,
not current connectivity. It differs between captures because the screens were
saved sequentially.

Refresh these PNGs from the actual Garmin simulator during a production run using
synthetic telemetry, preserving the native square screens. Do not redraw the
watch UI, invent captures, or publish real workout data or provisioning state.
