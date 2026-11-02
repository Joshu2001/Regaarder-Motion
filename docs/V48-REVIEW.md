# V48 — layered approach, preserved eye and seated-woman correction

28 October 2026 (Taipei). Continues v47; the smooth sideways shoulder-to-room passage remains intact.

## Corrected behavior

The previous opening held the boys and then enlarged a complete flattened frame. It now projects the separate foreground boy, rear boy, landscape and sky through one continuous camera path. The camera moves rightward toward the foreground eye while the scene content shifts left at depth-dependent speeds. The rear boy clears before the close eye reveal. Foreground fire follows a nearer projection and clears as the camera advances.

The destination no longer occupies an oval covering the entire visible eye. A smaller feathered iris mask keeps the original eye white, eyelids and skin outside its boundary. The destination is delayed until the close-up and emerges as a local iris reflection. Source eye detail remains underneath; a restrained light catch remains during the reflection. The surrounding face softens while the iris expands. Destination framing returns to the full room as the mask grows beyond the viewport. The next scene is uncovered by the growing mask, not by a broad final crossfade. A cover calculation keeps small/custom iris masks capable of filling the viewport.

The focus was recalibrated against a magnified baseline eye: default stage point (586, 312), rather than the older (588, 315). When browser settings exactly match that known previous default, the simple eye editor migrates it once. Other custom focus points are preserved. The starting boy PNG is unchanged; no eyes were regenerated or cut out of the source artwork.

The mistaken seated male worker has been replaced by a generated seated woman with tied-back hair, pale blouse, dark bodice and long skirt. The window, tub and workshop composition were retained by reference-guided image editing. The new source is used both in the eye destination and in later workshop/card appearances. The male candidate remains unchanged, inactive and searchable as an alternate. Exact generation instructions and input references are in assets/workshop-woman-generation-v48.json. These are illustrations, not archival photographs or verified historical likenesses.

## Simple editing

Open Eye journey · replace, point, play. Replace the starting foreground picture or destination, tap the center of the iris if the replacement changes its location, adjust one Duration field, then preview. The focus canvas shows the unzoomed starting composition with a marker. It uses normalized stage coordinates so a tap works at different display sizes.

Duration changes scale the two opening stage durations together. Their camera time map is joined, so even separately edited legacy durations do not restart the motion at the old boundary. Advanced controls expose iris radius/shape, final zoom, reflection onset/amount, blur and the relative depths of foreground, rear figure, landscape and sky. Existing camera, asset, later-sequence and source-framing controls remain available. A new picture cannot automatically identify its own eye; one manual focus tap may be needed. An arbitrary opaque image is not automatically separated into depth layers.

## Validation

34 check scripts pass. New rendering tests cover depth separation, rear clearance before the eye entrance, delayed destination, source eye-white preservation outside the iris, full-mask exit without a whole-scene fade, continuous customized opening timing, unchanged boy-file hashes, retained male alternate and active woman binding. The eye-editor DOM harness checks source/destination replacement routing, coupled Duration edits and normalized pointer-to-focus calibration. Existing scene, asset, retention, cloud, spatial-passage, shoe and editor checks pass.

Offline stills were checked at the paired-boy view, rear exit, face close-up, iris entrance, growing-room view and full room. This exposed and corrected the slightly misplaced old focus point and a reflection-mask alpha multiplication. The review video covers the corrected opening and woman hold. The full review replaces the opening and later workshop/card interval in the prior v47 rendered review; other rendered scenes are retained. Original reference-video pixels are not used as production footage.

## Remaining limits

Depth values, camera curves and iris shape are authored reconstructions rather than an exact physical camera solve. The woman and room differ from the reference's person and geometry. Very close eye enlargement is limited by the resolution of the unchanged boy image; controlled blur softens sampling but cannot recreate missing detail. The default circle/ellipse mask is manually fitted to this iris, not automatic anatomical tracking. Strong custom mask/depth settings should be visually checked. Live-browser playback and interaction remain unverified; the editor harness is not a substitute for a real browser.

All earlier generated candidates remain retained. Narration/script interpretation, sound design and an AI generation/editing service remain separate future inputs.
