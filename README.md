# Side projects

Public project overviews and synthetic demonstrations.

| Project | Overview |
| --- | --- |
| [Pitwall](https://echoz.github.io/side-projects/pitwall/) | Self-hosted workout telemetry, a Garmin data field, and a terminal interface. Includes captures of the actual Garmin data field and Chio TUI using synthetic telemetry. |
| [Marquee](https://echoz.github.io/side-projects/marquee/) | Personal pixel billboards, host-rendered content and live progress. Includes an interactive synthetic browser illustration; TC001 output and synthetic automatic sources have separate verification. |
| [Blackbox](https://echoz.github.io/side-projects/blackbox/) | Locally owned Garmin data, an immutable source archive and rebuildable query views. Includes a synthetic archive/query illustration; production remote synchronization is currently unavailable. |

The [project index](https://echoz.github.io/side-projects/) links to each page.
This repository contains public presentation assets and publishing configuration;
application code, credentials, and personal data are not part of this site.

## Preview and publish

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/` for the index, `/pitwall/`, `/marquee/`, or `/blackbox/`.
GitHub Actions stages an explicit file list and deploys the resulting artifact
after changes reach `main`. Pull requests validate without deploying. The workflow
can also be run manually. Keep Pages configured to use GitHub Actions.

When adding a project, add its directory, index link, README entry, and reviewed
assets to `.github/workflows/pages.yml`. Existing synthetic demos must stay
independent of live devices, services, clocks, and browser storage.

## Marquee and Blackbox illustrations

The pages have separate visual identities: Marquee is a playful pixel display with
luminous type and colorful controls; Blackbox takes cues from a flight recorder,
with industrial orange and an archival logbook. These user-selected themes guide
future layout and typography as well as color. The index carries a small expression
of each theme; Pitwall retains its existing motorsport presentation.

Both application repositories remain private. These pages summarize their purpose,
current capabilities and limitations, with original browser illustrations made for
this public site. They contain no application source or internal documents, make
no requests to the applications or Garmin, and are not simulator or terminal
captures. All displayed values are synthetic. Demo controls operate only on fixed
in-memory examples and do not persist data.

Marquee's illustration explains small pixel displays and changing content. Keep
physical TC001 output, synthetic source behavior and model-selection evidence
distinct. Blackbox's illustration explains preserved source bytes, local query
views and reconstruction. It must not imply that remote synchronization is enabled,
that all Garmin datasets are supported, or that current releases have inherited
historical live/deployment qualification.

When project work changes capabilities, setup, limitations, verification or visible
behavior, review its public page in the same task. Check local links, JavaScript,
keyboard interaction and mobile/desktop layout, update the explicit Pages artifact
list for any new asset, then verify the deployed revision. Keep real account data,
device identifiers, credentials and private capture logs out of this repository.

## Pitwall terminal capture

`pitwall/tui-capture.svg` is a faithful terminal-cell rendering of the actual
running Chio TUI, captured at 110 columns by 38 rows on October 7, 2026. Its plain
text equivalent is `pitwall/tui-capture.txt`. The real local daemon received a
synthetic sample with heart rate 145 bpm, speed 3.0 m/s and rich activity context,
including cadence, power, distance, timer, last observed callbacks and source
diagnostics. The measurement overview is preserved alongside six additional
context views: activity summary/profile, navigation, pressure, effort, swimming
and cycling. The TUI read it through
the authenticated server-pushed client path using `tui --live`. The visible
device/session/epoch identities and GPS coordinates are synthetic. This capture
demonstrates the server and client; it bypasses the Garmin simulator. In the
interactive TUI, `n`/`p` changes context, `j`/`k` changes field page, and `o`
returns to the overview.

The SVG preserves the captured ANSI colors, cell positions, borders, and visible
text. It embeds glyph outlines and has no external resources. It is a fixed
recording, not an interactive web terminal. Refresh captures from the running
client; do not invent output or substitute real workout data. Never publish raw
capture logs, provisioning state, credentials, or private source files.

Pitwall's intended physical path requires a paired phone as the Internet bridge;
Garmin describes that mechanism in its [Communications API documentation](https://developer.garmin.com/connect-iq/api-docs/Toybox/Communications.html).
The current project targets a Forerunner 970 and iPhone. HR/speed has simulator
evidence; the richer watch code compiles, but its Garmin runtime checks remain
pending. The page must keep the phone requirement, possible delays, and
physical-delivery/HTTPS limitations prominent.

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
captures from October 6, 2026, using Garmin Connect IQ SDK 9.2. They were saved
directly with Garmin’s **File → Save Screen Capture** at 454 × 454 pixels, without
image editing.

The production verification run supplied three fixed synthetic observations
through normal Transponder collection and upload handling. The final observation
was 145 bpm / 3.0 m/s. The same run verified frozen retry after the first durable
acknowledgment was replaced with HTTP 503; these screen captures show the running
renderer and are not separate transport tests. Phone delivery and physical-watch
behavior remain unverified.

The large field uses a red heart for heart rate and blue speedometer for speed,
with units and upload diagnostics. Smaller fields use symbols, numeric counts
and ages; `SIM` is their only word. A blue arrow means sending, amber circular
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
