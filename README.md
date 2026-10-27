# Regaarder Motion

Source and assets for published Motion Atelier version 18.

Published site: https://regaarder-motion-atelier.grandleaf1025.chatgpt.site

Sites source commit: `827c17cb4f58502fd43f09d032d88f5012931e1d`.

## Run locally

This is a buildless static application. Serve the repository over HTTP, then open `/dist/`:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/dist/ in a modern browser. Do not open index.html directly through file:// because JavaScript modules and asset loading require HTTP.

## Contents

- `dist/`: application source, vendor modules, and included image/video assets.
- `docs/`: authoring guidance, animation intent, generation prompts and roadmap.
- `scripts/`: Node.js regression checks. Run individual checks with `node scripts/check-asset-tools.mjs`, for example.
- `.openai/hosting.json`: existing Sites publication identity and static hosting configuration.

Edits, uploaded media, and composition recipes are stored in the current browser's localStorage/IndexedDB. Export recipes and uploaded media separately when moving user-authored projects between computers. Included project assets are in this repository. Existing asset credit files document provenance where applicable.
