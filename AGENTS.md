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
its source and site are maintained in its own repository. Keep hosted-page links
relative to support GitHub Pages' project path. Avoid external assets, analytics,
and live telemetry.

Present the collection as AI-assisted, deliberately curated personal projects,
mostly built to scratch an itch. Keep the README a brief introduction, project
list and publishing guide; put detailed capabilities and limits on the project
pages. Pitwall capture provenance and refresh instructions live in
`pitwall/CAPTURES.md`; read it before updating those captures or their claims.

Preserve each project's distinct visual identity. Pitwall uses motorsport telemetry;
Marquee uses a playful pixel-display theme with luminous LED type, small-screen
compositions and lively color; Blackbox uses a flight-recorder theme with industrial
orange, precise labels, records and provenance. The user chose these directions.
Chio's index card reflects its existing dark-plum terminal theme, with pink type
and a mint cursor.
Let the subject shape composition, typography and interaction; do not reuse one
landing-page template with different accent colors. Keep readability and factual
status more important than decorative instrument labels or effects.

`.github/workflows/pages.yml` explicitly lists the files allowed into the public
website artifact. Update that list deliberately when adding a public asset.
Verify links, JavaScript syntax, responsive layout, and any changed demo behavior.
Keep synthetic values visibly labeled and distinguish verified behavior from
planned features. Project application code belongs in its own repository.

Pitwall's page must state its purpose plainly: near-live activity measurements and workout context
during Garmin workouts/races, through a paired phone to a self-hosted server and
CLI/TUI. Put the phone requirement, possible delivery delay, and current
simulator-only verification near the top. Preserve the difference between the
intended physical setup and what has actually been validated.

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
