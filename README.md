# Side projects

Public project overviews and synthetic demonstrations.

| Project | Overview |
| --- | --- |
| [Pitwall](https://echoz.github.io/side-projects/pitwall/) | Self-hosted workout telemetry, a Garmin data field, and a terminal interface. Includes captures of the actual Garmin data field and Chio TUI using synthetic telemetry. |

The [project index](https://echoz.github.io/side-projects/) links to each page.
This repository contains public presentation assets and publishing configuration;
application code, credentials, and personal data are not part of this site.

## Preview and publish

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/` for the index or `/pitwall/` for Pitwall.
GitHub Actions stages an explicit file list and deploys the resulting artifact
after changes reach `main`. Pull requests validate without deploying. The workflow
can also be run manually. Keep Pages configured to use GitHub Actions.

When adding a project, add its directory, index link, README entry, and reviewed
assets to `.github/workflows/pages.yml`. Existing synthetic demos must stay
independent of live devices, services, clocks, and browser storage.

## Pitwall terminal capture

`pitwall/tui-capture.svg` is a faithful terminal-cell rendering of the actual
running Chio TUI, captured at 90 columns by 28 rows on October 6, 2026. Its plain
text equivalent is `pitwall/tui-capture.txt`. The real local daemon received a
synthetic sample with heart rate 145 bpm and speed 3.0 m/s; the TUI read it through
the normal client path. The visible device/session/epoch identities are synthetic.

The SVG preserves the captured ANSI colors, cell positions, borders, and visible
text. It embeds glyph outlines and has no external resources. It is a fixed
recording, not an interactive web terminal. Refresh captures from the running
client; do not invent output or substitute real workout data. Never publish raw
capture logs, provisioning state, credentials, or private source files.

Pitwall's intended physical path requires a paired phone as the Internet bridge;
Garmin describes that mechanism in its [Communications API documentation](https://developer.garmin.com/connect-iq/api-docs/Toybox/Communications.html).
The current project targets a Forerunner 970 and iPhone, with only the simulator
path verified. The page must keep the phone requirement, possible delays, and
physical-delivery/HTTPS limitations prominent.

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

The large field shows heart rate and speed with units and upload diagnostics.
Half and compact fields show only upload/acknowledgment status and queue/loss
indicators. The simulator repeats Transponder in every native field slot; visible
duplicates and cyan layout dividers belong to that simulator page. Last ACK refers
to an earlier accepted upload, not current connectivity. Its age differs between
captures because the screens were saved sequentially.

Refresh these PNGs from the actual Garmin simulator during a production run using
synthetic telemetry, preserving the native square screens. Do not redraw the
watch UI, invent captures, or publish real workout data or provisioning state.
