# Side projects

Credit Codex-assisted commits with the trailer
`Co-authored-by: Codex <codex@openai.com>`.

This repository and its GitHub Pages site are public. Keep every committed file
suitable for public viewing. Publish only approved project summaries and
synthetic demonstrations; never copy private source history, internal documents,
credentials, device identifiers, or real workout data into this repository.

Each project hosted here owns one shallow directory. `index.html` is the project index;
`pitwall/`, `marquee/`, and `blackbox/` own their standalone pages. The root
`styles.css` belongs to the project index; each project owns its own styling.
Chio's index entry links to its existing public site at `https://echoz.github.io/Chio/`;
its source and site are maintained in its own repository. Perch’s full project
page is hosted at `https://echoz.github.io/Perch/` in its public repository.
`perch/index.html` preserves the former address with an accessible static redirect;
`perch/dock.webp` remains the project-index render. Keep hosted-page links
relative to support GitHub Pages' project path. Avoid external assets, analytics,
and live telemetry.

The following source map owns the repository's flat page and tooling boundaries.
Review it when adding a page or changing state, effects or verification ownership.

| Boundary | Responsibility and owning guide |
| --- | --- |
| [Index](index.html), [index styles](styles.css) | Collection navigation, project cards and release ribbons; [source guide](README.md) |
| [Marquee](marquee/) | Independent overview and transient synthetic pixel-display state; [source guide](marquee/README.md) |
| [Blackbox](blackbox/) | Independent overview and transient synthetic archive/query state; [source guide](blackbox/README.md) |
| [Pitwall](pitwall/) | Overview and recorded synthetic captures; [source guide](pitwall/README.md); [capture guide](pitwall/CAPTURES.md) owns provenance and refresh |
| [Perch](perch/) | Former-address redirect and index render; [source guide](perch/README.md); the full page and CAD live in Perch's separate repository |
| [Build](scripts/build_site.py), [asset manifest](public-assets.json) | Approved inputs, static reference validation and generated `_site` output |
| [Documentation invocation](scripts/check_documentation.py) | Verify and invoke a separately installed, immutable checker; no installation or repair |
| [Python fixtures](tests/), [browser checks](tests/browser/) | CLI acceptance/rejection and staged-page behavior; [verification guide](VERIFYING.md) owns commands and limits |

[Package commands](package.json) compose the local gates. The [Pages workflow](.github/workflows/pages.yml)
owns public CI and deployment. Browser tests own their loopback preview process;
application code and live device/service state remain in the owning projects.

[The documentation inventory](.documentation-rules.json) declares these five
consumer-facing site roots: the index at `.` and four nested page directories.
Each owns its source-root `README.md`. The Python scripts and test fixtures support
this repository's contributor workflow; they are not separately offered tools.
The page-bound demos expose no public framework component API. Private applications
and the external Chio, Perch and Toa Payoh Dragon implementations are outside this repository's inventory.

Present the collection as AI-assisted, deliberately curated personal projects,
mostly built to scratch an itch. Keep the README a brief introduction, project
list and publishing guide; put detailed capabilities and limits on the project
pages. Group the index into Metaphysical (software, "It worked on my machine.") for Pitwall,
Marquee, Blackbox and Chio, and Physical things ("Some assembly required.") for
Perch and Toa Payoh Dragon. Use section headings above project headings, and
preserve each project’s
card identity and status ribbon. Pitwall capture provenance and refresh
instructions live in `pitwall/CAPTURES.md`; read it before updating those captures or their claims.

Preserve each project's distinct visual identity. Pitwall uses motorsport telemetry;
Marquee uses a playful pixel-display theme with luminous LED type, small-screen
compositions and lively color; Blackbox uses a flight-recorder theme with industrial
orange, precise labels, records and provenance. The user chose these directions.
Chio's index card reflects its existing dark-plum terminal theme, with pink type
and a mint cursor.
Perch uses warm cream, sage and coral, soft organic curves, and actual CAD renders
to reflect its sculpted tabletop dock. Its CAD and candidate print packages are
public in `echoz/Perch`; link to its own site, CAD and releases rather than
duplicating the page or archives here. Maintain the warm, organic theme of the
index entry and relocation page.
Keep the W0.1 candidate status and physical-fit limits explicit. Accepted card fit
does not establish revised player fit, headphone retention or loaded stability.

Toa Payoh Dragon links to `https://echoz.github.io/ToaPayohDragon/` and its
public `echoz/ToaPayohDragon` repository. The index card uses cream, orange and
blue, rounded playful type and the approved v03 CAD render in `dragon/hero.webp`.
That assets-only directory belongs to the index; it is not a separate page or
deliverable. Keep v03 fit-test candidate status explicit: 94 parts, 29 fit samples,
six-colour PLA, X1 Carbon with a 0.4 mm nozzle and no AMS. Physical fit and print
success remain untested; do not claim every part prints without supports.

Keep the diagonal index-card ribbons current with each project's release status;
show only the version for a release, and repeating yellow-and-black construction
stripes for ongoing work. Give construction ribbons an accessible status label
without visible text. Refresh the index stylesheet's version query when its CSS
changes so returning visitors receive the matching styles.
Let the subject shape composition, typography and interaction; do not reuse one
landing-page template with different accent colors. Keep readability and factual
status more important than decorative instrument labels or effects.

`public-assets.json` explicitly lists the files allowed into the public website
artifact. Update that list deliberately when adding a public asset; keep the
workflow path triggers current for any new project directory. Build through
`scripts/build_site.py` and run `pnpm verify` before PR readiness or publishing. The workflow uploads
only the validated `_site` directory. Follow [VERIFYING.md](VERIFYING.md) for setup,
the fixed documentation-tool setup, test contracts and manual browser checks.
The 0.1.8 documentation gate uses schema 2 to check the five declared source roots,
their READMEs and local links across eight current Markdown guides. New page
discovery, actual source ownership and useful content remain review responsibilities.
Keep the source map and `.documentation-rules.json` current without fake roots,
modules or exclusions. Public CI runs `pnpm test`; the private
shared documentation checker remains a required local gate. Follow the manual
naming-review scope in [VERIFYING.md](VERIFYING.md) and retain its evidence for
independent engineering review; SwiftRules does not collect this repository's
non-Swift names. Never edit tests while a relevant
test runner is active; coordinate writers and wait for completion before changes.
Keep synthetic values visibly labeled and distinguish verified behavior from
planned features. Project application code belongs in its own repository.

Pitwall's page must state its purpose plainly: near-live activity measurements and workout context
during Garmin workouts/races, through a paired phone to a self-hosted server and
CLI/TUI. Put the phone requirement, possible delivery delay, and current
simulator-only verification near the top. Preserve the difference between the
intended physical setup and what has actually been validated.
Keep implemented capabilities in the feature listing. The roadmap contains only
in-progress or upcoming work, with concise descriptions; move completed items
into features instead of accumulating milestone history on the page.

Marquee and Blackbox are private projects. Their public pages are overviews, not
source releases or hosted versions of the applications. Keep browser illustrations
explicitly labeled, deterministic and synthetic, independent of live devices,
services, clocks and browser storage; never describe them as actual
simulator, hardware or terminal captures. Actual captures, if added later, must
come from the running application with synthetic inputs and recorded provenance.

Review the owning project's current README and verification records when updating
its page. Marquee must distinguish exercised TC001 output from synthetic automatic
sources and unfinished platform/device support. Blackbox must prominently state
that production remote synchronization is unavailable while that restriction is
current; local recovery/query evidence and historical live evidence are distinct.
Update the index and this repository's README when their summaries change, then
verify the Pages deployment. Do not publish private documents or data as evidence.
