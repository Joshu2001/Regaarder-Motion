# Regaarder Motion · Final Chapter replacement

Apply the contents of this patch over the existing V130 project root. Serve the project as usual and open `dist/chapter-editor.html` or the existing continuous review. The replacement starts at 23:29 and ends at the source file's 26:54.632 endpoint. Existing chapter assets are retained. The continuous review keeps its earlier routing and extends only the chapter range. The hosted editor was inaccessible, so this is a source patch.

## Media and motion

The new media directory uses individual files from the supplied Cutouts and Backgrounds ZIP. The first scene reuses the existing chapter shoe mesh and renderer. The supplied reference provides the Bolt insert (25:32.00–25:35.65) and the original end card. The two inserts use source picture timing and are silent in the editor, like the existing continuous review.

Scene cues, layer transforms, replacement images, titles, playback speed, direction, reversal, and preset import/export are editable. Scene overlaps are 0.64 seconds wide by default. The outgoing shot continues drawing during the overlap. Vertical and horizontal occlusion use animated clipping, and the first Nike reveal uses an irregular expanding aperture. The Bolt insert and its neighboring edits use hard cuts.

The supplied Adidas/Puma newspaper cards are bent in strips. Some supplied PNGs already combine a subject and its support, such as a shoe and box. Those remain one replacement image. The burning-shoe shot uses the supplied shoe and fire layers, with no separate jacket-and-gloves layer bound. The McQueen beat uses the supplied salt-and-pepper portrait and the likeness has not been verified. Headquarters marker positions and other shot timings are approximate. The original end card is preserved as source footage after the rivalry swirl.

## Checks

Verified that all 82 media paths resolve and exercised 27 scene entrances, overlaps and interiors in both directions with a Canvas API test double. Browser playback and rendered reference alignment remain to be verified.

## Fidelity refinement

The ornate frames are separately replaceable overlays registered to the portrait canvases. The shot starts with the frames dominant and the sofa clipped at the bottom. Foreground viewers enter later. Other adjustments cover crowd layering, shoe and card scale, Nike exposure, the Predator push-in, racing display, and late archival cues. The full comparison uses the original audio for review. Remaining differences include unmatched artwork and lighting, transitions still using approximate cues, and the McQueen placeholder.
