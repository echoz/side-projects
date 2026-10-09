# Pitwall capture provenance

Detailed evidence and refresh guidance for the public Pitwall page.
Paths below are relative to the repository root.

## Pitwall terminal capture

Significant preview checkpoint, October 9, 2026: the Running wide and compact
SVG/text pairs (`tui-capture` and `tui-compact-capture`) are refreshed from
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
Only those two Running pairs are replaced. The other five menu, Replay and
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
the two Running pairs now use the Significant checkpoint above.
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
Those original Running pairs have now been replaced by the Significant pairs
described at the top; the Cycling pairs retain the Fixed fixture.

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
