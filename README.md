# Regaarder Motion

Source and assets for published Motion Atelier version 20.

Published site: https://regaarder-motion-atelier.grandleaf1025.chatgpt.site

Sites source commit: `8e0cc71236724e9603dc15034ab6aad87d0ca486`.

## Run locally

This is a buildless static application. Run `python3 -m http.server 8000` from the repository and open http://localhost:8000/dist/ in a modern browser. Serve over HTTP rather than opening index.html with file:// so modules and assets load correctly.

- `dist/`: application source, vendor modules and included image/video assets.
- `docs/`: authoring guidance, generation prompts, source provenance and roadmap. `DEPOT-CONTINUATION.md` describes the latest smoke/descent/pullback sequence and cutout limitations.
- `scripts/`: Node.js regression checks, including `node scripts/check-depot-motion.mjs` and `node scripts/check-noir-anchor.mjs`.
- `.openai/hosting.json`: existing Sites publication identity and static hosting configuration.

Edits, uploaded media and composition recipes are stored in the current browser's localStorage/IndexedDB. Export recipes and uploaded media separately when moving user-authored projects between computers. Included project assets are in this repository; source credits and provenance records are retained where applicable. The depot is a staged historical collage, not archival evidence or a reconstructed 3D room.
