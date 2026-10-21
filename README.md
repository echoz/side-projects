# Side projects

Personal projects, mostly built to scratch an itch. AI-assisted and deliberately
curated, with care put into design, implementation, and verification.

## It worked on my machine.

Metaphysical: software projects.

| Project | What it does |
| --- | --- |
| [Pitwall](https://echoz.github.io/side-projects/pitwall/) | Self-hosted telemetry for Garmin workouts and races. |
| [Marquee](https://echoz.github.io/side-projects/marquee/) | Personal pixel displays for what matters now. |
| [Blackbox](https://echoz.github.io/side-projects/blackbox/) | Recent daily synchronization, a local archive and queries for Garmin data. |
| [Chio](https://echoz.github.io/Chio/) | A Swift toolkit for expressive terminal interfaces. |

## Some assembly required.

Physical things.

| Project | What it does |
| --- | --- |
| [Perch](https://echoz.github.io/Perch/) | A sculpted, 3D-printable home for a Yoto Mini, cards and kids’ headphones. |
| [Toa Payoh Dragon](https://echoz.github.io/ToaPayohDragon/) | A six-colour PLA model of Singapore’s dragon playground; v03 is a fit-test candidate. |

Browse the [project index](https://echoz.github.io/side-projects/).
Chio is open source; Perch shares its print candidates and editable CAD in its
[public repository](https://github.com/echoz/Perch). Pitwall, Marquee, and Blackbox
have private source code and public overviews. Toa Payoh Dragon shares its candidate CAD and print files in its
[public repository](https://github.com/echoz/ToaPayohDragon); physical fit and print success remain untested. Each project's site describes its current capabilities and
limits. Demonstrations use synthetic data.

## Preview and publish

```sh
python3 scripts/build_site.py
python3 -m http.server 8765 --bind 127.0.0.1 --directory _site
```

Open `http://127.0.0.1:8765/`. Chio, Perch and Toa Payoh Dragon link to their separately maintained
GitHub Pages sites. Perch’s warm, organic project page, print downloads and
editable CAD live in its public repository; the previous `/perch/` address
redirects to its own site.
GitHub Actions checks the staged artifact, JavaScript syntax and browser behavior
before deploying changes on `main`; pull requests validate without deploying.

Keep project summaries and links current. For a page hosted here, update the
approved asset list in `public-assets.json` when adding files. Run `pnpm verify`
and the applicable [manual checks](VERIFYING.md), then verify the deployment.
See [AGENTS.md](AGENTS.md) for
maintenance guidance and [Pitwall capture notes](pitwall/CAPTURES.md) for provenance.

The static index lives in [index.html](index.html) and [styles.css](styles.css),
which own card composition, project themes and status ribbons. Each local page
has its own source guide: [Pitwall](pitwall/README.md), [Marquee](marquee/README.md),
[Blackbox](blackbox/README.md) and the [Perch redirect](perch/README.md).
The [source map](AGENTS.md) also identifies internal build and verification tooling.
