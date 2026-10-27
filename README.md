# Regaarder Motion

Source and assets for published Motion Atelier version 19.

Published site: https://regaarder-motion-atelier.grandleaf1025.chatgpt.site

Sites source commit: `d34046dba7ffdbe8daad3f208f58a192ba8fb023`.

## Run locally

This is a buildless static application. Run `python3 -m http.server 8000` from the repository and open http://localhost:8000/dist/ in a modern browser. Use HTTP rather than opening index.html through file:// so modules and assets load correctly.

- `dist/`: application source, vendor modules and included image/video assets.
- `docs/`: authoring guidance, animation intent, generation prompts and roadmap.
- `scripts/`: Node.js regression checks, including `node scripts/check-noir-anchor.mjs`.
- `.openai/hosting.json`: existing Sites publication identity and static hosting configuration.

Edits, uploaded media and composition recipes are saved in the current browser's localStorage/IndexedDB. Export recipes and uploaded media separately when moving user-authored projects between computers. Included assets are in this repository; existing credit files document provenance where applicable.
