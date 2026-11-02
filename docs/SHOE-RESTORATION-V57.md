# V57 — restore the original shoe, preserve the approved effect

Joshua rejected V56’s redesigned low shoe and asked to retain the earlier shoe’s visual identity. The reference for appearance is `image(20261029-041744).png`: dark upper, pale laces and stitching, earlier profile and sole. The paper background, turn/zoom and crumple were approved and are preserved.

## Bounded correction

`dist/shoe-solid.js` now uses the original `shoeMesh('spikes',...)` from `chapter-shoes.js`. Every original face remains the unchanged prefix of the repaired mesh: vertices, colors, materials and per-face grain. The shader restores the original material colors and light/glint formula. The V56 override that darkened the laces and simplified rubber colors is removed. Original row artwork uses the earlier `paintShoe` renderer, including its pale lace and stitch styling.

Only60 narrow upper/sole seam quads are appended. No original vertices are moved. These connect the small upper/sole separation without replacing the shoe last, collar, toe, laces or sole. Per-pixel depth testing and the larger rendering surface remain to avoid the old sorting/clipping problems. Those renderer differences and the approved pose mean this is not a promise of pixel-identical screenshots at different camera angles.

The spike-length default returns from0.45 to the earlier0.28 model units. A one-time migration changes only the known0.45 factory value; other values are preserved. All other shoe/paper defaults, the pose track, paper texture, fold geometry, timing and exit match V56. The existing pullback correction is preserved.

## Editing and recovery

Use **Next chapter → Shoe turn and paper crumple** as before. Turn, zoom, fold, exit, replacements and advanced settings remain editable. Choose **Use editable 3D shoe** for the restored model. A custom image stays a flat replacement; no unseen3D views are inferred.

The rejected V56 renderer is retained at `dist/assets/archive/shoe-solid-v56.js`, and its original preview PNG remains catalogued as rejected/inactive with no renderer slots. The replacement-slot preview is now `shoe-restored-preview-v57.png`. `assets/shoe-restoration-v57.json` records the original module hash, archived renderer hash and scope of repair. Earlier complete project versions remain separate exports.

## Validation and limitations

`check-shoe-restoration.mjs` verifies the exact original module hash, original mesh/material prefix,60 appended seals, no mutation of the shared original mesh, original pale laces and spike proportions. Its bundled V56 fixture verifies unchanged pose values and complete fold-mesh hashes at representative times. Existing checks cover opaque joins, large zoom, print/fold handoff, replacement isolation and timing edits. Offline renders cover row, initial tilt, mid-turn, front zoom, fold onset, compact form and exit.

This restores the earlier procedural shoe rather than introducing another design. The original model’s own stylization remains; it is not a scanned product. Native-browser playback remains unverified. No deployment is claimed.
