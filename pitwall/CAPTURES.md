# Pitwall capture provenance

Detailed evidence and refresh guidance for the public Pitwall page.
Paths below are relative to the repository root.

## Pitwall terminal capture

Recorded October 8, 2026, from Pitwall revision `4f2fd55`.

`pitwall/tui-capture.svg` and its plain-text equivalent
`pitwall/tui-capture.txt` record the running production Chio workout console
at 110 columns by 36 rows. `pitwall/tui-compact-capture.svg` and
`pitwall/tui-compact-capture.txt` record its stacked 80-column by 24-row view.
Both use the real daemon and authenticated `tui --live` client, with synthetic
schema-4 observations: 145 bpm, 3.0 m/s, 6.20 km, 32:14 active time, 72% observed
battery, applied Fixed 10-second reporting and three captured completions since
start generation 1. Source identities and workout values are synthetic. The
capture bypasses Garmin and does not establish physical phone/watch delivery.

The first console slice has a red strip, four wide primary panels for derived
pace, heart rate, active time and distance, and separate session and observed
reporting context. Battery, applied Fixed interval and policy observation age
are source facts; phone connection does not prove current delivery. The wide HR
pointer spans supplied zone bounds and preserves below/above/unknown labels.
Missing/collapsed bounds show `Zone range unavailable`. An eight-cell battery bar
uses the observed percentage in wide and 80×24 views; missing battery has no bar.
Neither gauge invents a target or workout completion percentage without a
denominator. Captured completion counts retain their lifetime and uncertainty. Plan position,
current/next steps and targets are unavailable. No timeline, trend history or
provider data is invented.

Six context views remain available: activity summary/profile, navigation,
pressure, effort, swimming and cycling. In the interactive TUI, `1`–`6` selects
a named context, `n`/`p` cycles contexts, `j`/`k` changes field page, `d` opens
paged diagnostics, `o` returns to the overview and `q` quits. Full source
identities, raw callbacks and delivery details remain in diagnostics. Below the
stacked layout, a 36×18 compact view retains primary measurements, source/read/age,
context navigation and quit. The public compact capture represents 80×24.

The redesigned screen passes local macOS and Linux renderer and real-process
checks, including live updates, cached outage/recovery, context navigation,
count decrease/exhaustion, missing and zero readings, and source-clock uncertainty.
The full suites pass 274 Swift Testing functions and 14 XCTest tests per platform.
Actual 110×36, 80×24 and 36×18 terminal cells were inspected; no-color output also
passes. The capture harness waits for a complete frame and verifies clean quit,
exact terminal settings, cursor and alternate-screen restoration before writing
publishable assets. Export checks preserve colors, inverse cells and glyphs.

Fresh Garmin runtime/memory checks for the opt-in
reporting path and physical watch/phone delivery remain pending. The Linux
quit-after-resize issue remains open independently of console captures.

The recording uses an xterm-compatible true-color terminal. The SVG preserves
the captured ANSI colors, cell positions, borders, and visible text. It embeds
glyph outlines and has no external resources. Plain-text transcripts omit trailing
row padding without changing visible text or column positions. It is a fixed
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
