# Regaarder V126 handoff

Completed scope: source18:50–20:14,84seconds, continuing saved V125 source. Prior minute16 and17 scene files/assets retained. No deployment or repository change.

## Open

Run python3 -m http.server 8000 --directory dist, then open http://localhost:8000/ . New editor: pele-editor.html. Continuous review: review-17-20.html, which plays17:00–18:00 then18:50–20:14, skipping the remaining sponsor interval.

## New implementation

- pele-sequence.js:84-second deterministic scene clock;38image bindings; separate person layers; paper, bill and brand instances; camera transforms and transitions.
- pele-motion.js: reusable camera roll/travel, connected handshake, cash fan, drawn X, flame flipbook and occluded ring.
- pele-editor.js/html: source replacement with embedded-image preset saving, position/size/rotation/mirror/opacity/blur/depth, speed/reverse, cue timing, flame/fog/light controls, editable headlines, optional slow-then-fast timing window, contact lock, ring controls.
- assets/pele126: reused pack, new photographic cutouts, original retrieved photographs, documented derived images and exact0.6-second source-video boundary excerpt with decoded native-render frames.

## Provenance

Authentic sources retrieved: Pelé bicycle photograph, smiling Pelé-with-ball photograph, Horst portrait and currency images. Originals retained. AI-assisted extraction/restoration of portraits and football cutouts is tagged as archival-derived reconstruction, not untouched original photography. Six restaurant figures and clean room/furniture are illustrative. Editorial newspaper text and the Mexico poster graphic are reconstructed artwork. Their headlines are editable; they must not be represented as authentic historical documents.

New fire is an inferred burning-cash motif from reference plus script. It uses an interpolated6-frame photographic-style atlas with separate emission anchor and glow. The white boot emphasis is an editable inferred stripe overlay; the source image is unchanged.

## Key review areas

Match source identity/framing independently of material polish. Compare the actual export at14/24/32/40/46/56/70/73/78/82.8seconds. Camera moves are authored approximations, not recovered exact source keyframes. Original period props and paper layouts differ. Distinguish functional validation from final visual approval.

Native production rendering checks are in review-pele/verification.json. Browser check status is in review-pele/browser-checks.json when available. Do not claim browser success from native rendering alone. Original media hashes/provenance are in pele-manifest.json and docs/SOURCING-V126.json. Next archival footage remains outside this implementation except its preserved0.6s onset.

Render: install @napi-rs/canvas and ffmpeg, then node --expose-gc scripts/render-pele-v126.mjs --video. Runtime fallback uses CODEX_PRIMARY_RUNTIME_NODE_MODULES. Browser testing uses scripts/check-pele-browser.mjs with MOTION_CHROME pointing to an available Chrome/Chromium executable. Camera/output960×540/24fps, silent; source640×360/30fps.
