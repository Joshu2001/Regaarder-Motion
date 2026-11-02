# 1898 · mother and cradle continuation · version 37

Joshua approved the ten-frame reference interpretation with “go ahead” before this implementation. Scope: date → mother room → foreground passage → cradle/window hold. The later window-to-boys transition is the next beat and is not integrated in v37.

## Source and creative interpretation

Reference: user-provided `Nazi_Brothers_cut_01-14_to_01-45.mp4`, 1920×1080 at 30 fps. Original time assumes the stated 74-second trim offset. Source 1:17 is the existing chapter entrance; the approved new segment begins around 1:26. References around 1:27.70 show 1898, 1:28.50 the room entering at right, 1:30.50 the mother holding her baby, 1:33.50 an occluding foreground torso and 1:36 the cradle/window.

Observed composition and lateral movement were used to infer a camera passage with layered image planes and a foreground wipe. This is an authored 2.5D reconstruction, not a claim about the reference’s original editing software or layer structure. Images are fictional generated illustrations, not archival documentation.

## Timeline

Earlier phase starts and the intentionally slower v35/v36 chapter are preserved. Nursery starts after the computed chapter end plus a 0.45-second black gap. A start override can delay the new segment but cannot overlap the chapter.

With existing defaults: chapter ends at depot 86.20; nursery begins at 86.65; date writes for 1.6 seconds, holds 0.45 seconds; room enters over 2.3 seconds; mother moving hold lasts 2 seconds; foreground passage lasts 2.6 seconds; cradle holds for 3.6 seconds. End of the authored beat is 99.20 seconds; depot duration grows to at least 99.45 seconds. The default ends on the cradle picture. Optional final fade is editable and defaults to zero.

Stage ordering is derived from durations so extending one stage shifts later stages. The date moves left as the room enters from the right. A slow camera push continues during the mother hold. During passage, the room shifts left, the foreground figure crosses faster and a spatial wipe remains under its opaque cloth. The cradle view emerges behind it. Small optical push, cool window scatter, faint dust and peripheral softness maintain movement during the final hold.

## Controls and settings

- Depot → Watch 1898 scene plays the new beat. Jump points cover date writing, partial room reveal, mother, foreground passage and cradle.
- Nursery · date, room & window gives simple date/timing controls, Reference passage and Soft passage presets, and an enable toggle.
- Look & motion offers four new surfaces: Nursery date & timing, mother room, foreground passage, cradle & window light. These use the existing numeric surface keyframes and interpolation controls.
- Date content, size, position, stroke weight, glow, blur, colour, write duration, hold and entrance preset remain editable. Numeric dates have progressive curved strokes; custom words use a progressive italic text fallback. Typewriter and fade modes are available.
- Mother and cradle plates have independent offset, scale, push, blur and opacity controls. Foreground figure has independent scale/width, Y, travel, blur, brightness and opacity. Camera easing, lateral room travel, focus, brightness, saturation, window light, vignette and dust are adjustable.
- New images use the existing browser-local replacement/persistence system. Reload nursery assets restores bundled sources. Asset failures show a scene message instead of silently omitting the image. In soft-dissolve mode the foreground image is not a required render dependency.
- Tapping a rendered nursery plate/figure exposes its corresponding basic image/surface controls. Full surface keyframes remain under Look & motion.

Missing nursery defaults are filled without overwriting prior chapter, shoe or custom scene settings. The one-time `nursery-v37` migration stores prior depot duration in `nursery-before-v37` and extends duration to fit the new beat. Nursery controls grow duration after edits. Disabling nursery does not destructively shorten a custom timeline. Cache queries advance to motion-v37 to prevent mixed old/new imported renderers.

## Assets and provenance

Three generated PNG files are copied byte-for-byte from the built-in image-generation outputs: `nursery-mother-v37.png`, `nursery-cradle-v37.png`, `nursery-passer-v37.png`. The first two are full scene plates. The third has genuine alpha outside a solid apron/linen torso. Source video reference IDs, exact prompts, creation date, known model-version limitation and modifications are retained in `assets/nursery-generation-briefs-v37.json` and the central register. Source-owner and wider reuse permissions remain unverified. No source video frames are bundled as production images.

The generator now consumes explicit provenance fields from asset-manifest.json, preserving exact records for new assets while retaining unknown legacy statuses. Two new original procedural surfaces, nursery-motion.js and nursery-scene.js, are also centrally registered. Total register: 79 items.

## Verification and known limits

All 20 check scripts passed in the initial full regression run. The nursery-specific check exercises initialization, custom setting/keyframe preservation, timing after changed chapter lengths, nonoverlap, held and faded endings, smooth passage, missing assets and finite canvas drawing across boundaries. PNG alpha inspection verifies that the spatial wipe line sits behind opaque cloth at the default placement. Final changed nursery code and asset hashes receive targeted rechecks after review edits.

Browser inspection: depot 88.30 (complete curved date), 89.70 (partial lateral room reveal), 92.30 (mother hold), 94.30 (foreground coverage), 95.20 (foreground clearance / cradle emergence), 97.50 (cradle hold), and new-scene playback at 1x. Date stroke weight was adjusted from an early thin/angular draft to smooth 4.2-width strokes. Date/timing controls and surface keyframe controls were inspected.

Remaining approximations: date lettering is an original handwritten-style numeric trace, not the exact source font. Mother and baby are integrated in the photographic plate; they do not have independent skeletal motion or editable anatomy. Room geometry and individual props are not reconstructed in 3D. The two plates match mood and staging rather than exact identities. No native-speed pixel-perfect reference match or performance benchmark is asserted. User visual acceptance of the implemented v37 passage is pending.

Publication: push/commit verification is reported separately at delivery. Existing Sites project identity remains preserved; its prior project-not-found response still blocks publication through that route. Vercel production status must be checked before claiming deployment success.


## v38 follow-on

The window-to-boys beat and subsequent town → workshop → blouse continuation are now integrated after this nursery's computed end. The original v37 scope above remains a historical record. See `docs/VILLAGE-CONTINUATION.md` for the approved v38 work, controls and review limitations.
