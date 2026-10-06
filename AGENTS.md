# Side projects

Credit Codex-assisted commits with the trailer
`Co-authored-by: Codex <codex@openai.com>`.

This repository and its GitHub Pages site are public. Keep every committed file
suitable for public viewing. Publish only approved project summaries and
synthetic demonstrations; never copy private source history, internal documents,
credentials, device identifiers, or real workout data into this repository.

Each project owns one shallow directory. `index.html` is the project index;
`pitwall/` owns Pitwall's standalone landing page. Keep links relative to support
GitHub Pages' project path. Avoid external assets, analytics, and live telemetry.

`.github/workflows/pages.yml` explicitly lists the files allowed into the public
website artifact. Update that list deliberately when adding a public asset.
Verify links, JavaScript syntax, responsive layout, and any changed demo behavior.
Keep synthetic values visibly labeled and distinguish verified behavior from
planned features. Project application code belongs in its own repository.

Pitwall's page must state its purpose plainly: near-live heart rate and speed
during Garmin workouts/races, through a paired phone to a self-hosted server and
CLI/TUI. Put the phone requirement, possible delivery delay, and current
simulator-only verification near the top. Preserve the difference between the
intended physical setup and what has actually been validated.
