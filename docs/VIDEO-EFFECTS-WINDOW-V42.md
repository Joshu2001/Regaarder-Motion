# v42 · supplied gesture video, shared effects and window refinement

Joshua approved replacing the cutout animation with his supplied clip, preparing a general future AI-animation option, making effects reusable across assets, and refining the window. This release continues v41; it does not rebuild the site or publish it.

## Supplied video assessment and integration

The original `woman-blouse-hem-gesture.mp4` is copied byte-for-byte to `dist/assets/woman-blouse-hem-gesture-v42.mp4`. It is 1280×720, 24 fps and 10 seconds, with an audio track. Its upstream AI generator/model and exact generation settings were not supplied. The central register records the user upload and task-specific authorization rather than inventing a provider or wider license.

The hand lifts the blouse hem, fabric changes accompany the gesture, the background is stable, and the face has no application-generated cutout gap. This is substantially better than v41 for the intended gesture, and suitable for use now. It is not completely motionless outside the hand: small head/upper-body changes remain in the supplied footage. The app does not add a body warp, cutout, camera push or region transformation to it.

A forward/backward Lucas–Kanade check at 640×360 compares the first and three-second frames. The background's median tracked displacement is 0.024 px (144 surviving features); the head's is 3.858 px (110 features). Only two hand/hem features survive the strict return-error gate, so that region's 21.134 px median is weak evidence and is not a reliable anatomical measurement. Full method and counts are in `analysis-v42/video-review.json`. Timestamped contact frames were also inspected. These measurements do not establish native-speed visual equivalence to the documentary.

Default use is source 0–3 seconds at speed 1, followed by a held end frame if the scene is extended. Audio is muted. The full ten-second original remains available. Depot → Hand gesture video exposes source in/out, rate, loop, framing scale and X/Y. These are non-destructive source controls. Replacing the source also retains prior uploads and their names. The older editable layer renderer remains available behind an explicit mode switch; it is no longer the default. Before the video is ready, the untouched still is the fallback, avoiding a transient broken cutout.

The existing nursery, village, workshop and laundry clocks remain unchanged. The gesture starts when the blouse room has fully entered; its first frame is held beneath the entrance wipe. A paused seek requests the matching source time, playback drift is corrected, and leaving the scene pauses the source. The review export decodes source frames at 24 fps and samples them on its 30 fps timeline; no frame interpolation or new motion is generated.

## Window: observations, inference and changes

The retained documentary frame sequence at clip 23.50–25.60 seconds (original 1:37.50–1:39.60) shows boys visible through glass, increasing clarity, moving window bars, cool scatter, near masonry passing the view and names becoming readable. Visible occlusion and relative scale are observations. Layered compositing, a camera projection and a glass dissolve remain inferred reconstruction techniques, not verified production methods.

The v41 mask incorrectly treated the window as uniform rectangles. In the project cradle image, measured at 960×540 with plate scale 1.05, the outer edges slope and the first and last pane widths differ. The former left edge at x=283 could overpaint roughly 20 px of the inner frame; the old right edge also extended past the lower opening. The new calibration uses:

- Horizontal edges: y = −68, 22, 109, 193, 279.
- Vertical edges at the upper frame: x = 303, 363, 443, 522, 600.
- Corresponding lower positions: x = 301, 360, 440, 519, 580.
- Horizontal bars 10 px, vertical bars 4 px, scaled by the existing bar-width setting.

These values describe the generated cradle artwork, not the original documentary's window. Sixteen pane polygons are fitted between those edges. The jug overlapping the lower right stays in front. The mask follows cradle scale and position, and existing custom pane offsets/dimensions remain applicable. Advanced JSON calibration exposes all edge positions and bar widths.

The early view and outdoor reveal still use the same exterior compositor. Clouds now advance during the nursery lead-in, rather than freezing until the approach. Transmission rises over the existing curve; the cool glare, blur, light swell and pale-to-opaque name timing remain editable.

The default overscan maps the exterior's apparent scale monotonically from 0.6 to 1.0 while compensating for the room camera's zoom, reducing a size change at the glass handoff. A larger offscreen scene provides surrounding pixels rather than stretching a roof or portrait edge into visible stripes. A small procedural off-stage floor extension fills uncovered bottom space; it is not a reconstruction of real geometry. It is only visible through the portal overscan. Disable window overscan to use the older manual content-scale mapping. The final mapping resolves to the full outdoor composition.

### Window limits

The architecture, boys' pose/proportions, masonry and window are illustrative assets. The camera and lighting curves remain inferred. The jug exclusion is a simple ellipse and can be imperfect at custom placements. Off-stage floor geometry is approximate. This release improves visible occlusion, continuity and alignment; it is not frame-perfect and still needs Joshua's review.

## Shared effects and future AI animation

Assets & tools → Effects & AI prompt opens an asset-specific panel. Active effects appear first. The complete compatible library is collapsed under All compatible effects. The template's existing relevant controls remain available; the general pool does not replace them or occupy a new global top toolbar.

The shared library currently includes light swell, lightning flash, edge shadows, soft focus, fade entrance and camera push. Each application has separate parameter values; adding or changing an effect on one asset does not activate it on another. Save a shared preset to reuse those values elsewhere. Export/import includes effect presets and saved AI instructions. Definitions carry compatibility metadata for images, videos, rendered 3D scenes and text; unsupported imported effect types are rejected.

Shared drawing adapters cover the continuation's plates, boys, clouds, masonry, foreground images, laundry, uploaded gesture video and editable layer imagery. Generic image/video scenes use the same library, as do the aerial scene and rendered chess scene. Effects on 3D scenes are compositing effects; per-object geometric animation remains in the existing 3D editor. The shared library is a foundation for future effect additions, not an automatic converter of every legacy effect into a universal shader.

AI Animate → Create prompt is implemented for any selected image/video. It embeds a model-independent instruction recipe: inspect the source, identify the moving region and protected regions, respect contact and occlusion, preserve identity/composition/materials, use the requested timing and camera, and avoid distortion. Goal, moving region, protected region, duration and camera are editable. The resulting prompt can be edited, copied, downloaded and saved as shared instructions. It contains no blouse-specific behavior unless requested. There is no AI generation service, API key, provider selection or automatic upload connected. The future integration boundary is `buildAnimationPrompt` plus the selected asset binding.

## Retention, search and review

Every previously generated candidate remains. Video replacements and raw source uploads now enter the reusable asset catalog, with the original indexed separately before replacement and previous custom versions archived. Current filenames are searchable. The supplied video has a first-frame poster and picture-search fingerprint; image similarity is approximate, not semantic recognition. Source media and thumbnail are separately registered with hashes and permission notes.

The 32.5-second silent preview begins 1.5 seconds before the window approach. The gesture appears at approximately 18.5–21.5 seconds of that preview. It continues through the laundry hold for adjacent-scene review. Rendering is an offline Canvas review using production modules and decoded video frames. No live-browser UI verification or native-speed source-playback validation is claimed here. Automated checks cover timing, state isolation, general prompt generation, pane geometry and existing regressions; they do not prove visual fidelity.

Run locally with `python -m http.server 8000 --directory dist`. Optional offline review generation requires Node, `@napi-rs/canvas` and FFmpeg; `scripts/render-motion-review.mjs` extracts its temporary source frames from the included video automatically. No build is needed to run the actual site. Nothing was deployed or pushed.

## Release validation

All 26 `scripts/check-*.mjs` checks pass. The supplied MP4 matches the uploaded bytes exactly. The review MP4 decodes without errors: 975 frames, 960×540, 30 fps, 32.5 seconds. Archive integrity is checked before delivery. These checks do not replace visual approval.
