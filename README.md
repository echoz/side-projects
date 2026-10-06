# Side projects

Public project overviews and synthetic demonstrations.

| Project | Overview |
| --- | --- |
| [Pitwall](https://echoz.github.io/side-projects/pitwall/) | Self-hosted workout telemetry, a Garmin data field, and a terminal interface. Includes a browser-only synthetic demo. |

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
