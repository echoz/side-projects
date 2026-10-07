# Side projects

Personal projects, mostly built to scratch an itch. AI-assisted and deliberately
curated, with care put into design, implementation, and verification.

| Project | What it does |
| --- | --- |
| [Pitwall](https://echoz.github.io/side-projects/pitwall/) | Self-hosted telemetry for Garmin workouts and races. |
| [Marquee](https://echoz.github.io/side-projects/marquee/) | Personal pixel displays for what matters now. |
| [Blackbox](https://echoz.github.io/side-projects/blackbox/) | A local archive and query layer for Garmin data. |
| [Chio](https://echoz.github.io/Chio/) | A Swift toolkit for expressive terminal interfaces. |

Browse the [project index](https://echoz.github.io/side-projects/).
Chio is open source; Pitwall, Marquee, and Blackbox have private source code and
public overviews. Each project's site describes its current capabilities and
limits. Demonstrations use synthetic data.

## Preview and publish

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. Chio links to its separately maintained site.
GitHub Actions validates an explicit asset list and deploys changes on `main`;
pull requests validate without deploying.

Keep project summaries and links current. For a page hosted here, update the
approved asset list in `.github/workflows/pages.yml` when adding files, check
links and layout, and verify the deployment. See [AGENTS.md](AGENTS.md) for
maintenance guidance and [Pitwall capture notes](pitwall/CAPTURES.md) for provenance.
