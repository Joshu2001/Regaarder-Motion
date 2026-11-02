# V49 — reusable focus reveal, earlier reflection and simple timing

29 October 2026 (Taipei). Continues v48. The mother/woman is the current destination picture, not a requirement of the effect.

## Result

The default reflection begins faintly earlier, at approximately 1.73 seconds of the default 3.267-second transition. The destination is framed toward the seated woman rather than the middle of the room. It becomes progressively clearer and larger while the source eye white and eyelids remain outside the fitted iris mask. The existing separate-depth approach is retained. No new image has been generated and original source artwork remains unchanged.

The effect is now exposed as a generic focus reveal. Replace the starting picture and destination independently, tap another eye, hand, body area or object, and choose an area preset or round/oval/box mask. The standalone paintFocusReveal/focusRevealState adapters accept their own duration and painting callbacks; they do not require a mother, face or workshop. The template's layered boys scene remains an optional starting source. This is a focus/portal transition, not automatic body-part rigging, segmentation or gesture generation.

## Simple controls

Open Focus reveal · replace, point, play.

- Replace starting picture automatically uses the generic picture source. Replace destination keeps the movement and timing. Starting source options can restore the template depth layers or replace only its foreground cutout.
- Transition duration is shown in actual playback seconds, including the global sequence speed. Start showing and Fill the screen at independently set local reveal onset and completion. Their fractions stay consistent when duration changes.
- Reflection clarity controls the early appearance. At completion the destination is fully opaque, rather than leaving the old source visible beneath it.
- The optional Slow motion → speed up section provides an enable switch, slow-section start, acceleration start, slow speed and fast speed. A positive, continuously joined time curve retimes the camera, reveal progression and template exterior clock. It never inserts an interior stop or reverse. Total transition duration remains the selected duration. Slow motion is off by default.
- Tap the focus area to place it. Eye/small-detail, hand/object and larger-area presets supply sensible starting mask sizes; advanced controls retain radius, shape ratio, zoom, blur and layer depths. No anatomical recognition is assumed.
- Tap the subject in What appears inside to frame any new destination picture. Subject size is independently adjustable and returns smoothly to the complete destination composition.
- Save reveal preset / Load reveal preset transfers motion, framing and timing settings without changing the selected source pictures or source mode. A new source may still need one focus tap.

Generic starting pictures are clamped within their image bounds to avoid exposing blank edges during the early pan. The focus marker follows that adjustment. Large/edge-area masks get enough final coverage to complete the reveal.

## Search and metadata

The focus-reveal recipe is searchable with eye, hand, face, body part, object, portal, slow motion and speed ramp. Legacy eye-portal settings and names remain recorded for compatibility. The earlier v48 raw onset field is retained in saved data, while v49 uses the normalized simple timing controls. Asset descriptions, retained alternates and shot relationships remain available; selected content is separate from animation settings.

## Validation and image quality

35 check scripts pass. Coverage includes earlier default onset; configurable completion; standalone duration; mask confinement; source eye-white preservation; full destination coverage for ellipse/circle/box; monotonic continuous slow/fast timing; generic picture rendering without the template characters; picture-bound clamping; editor timing in playback seconds; focus tapping; generic source selection; and preset loading that preserves content bindings. Existing cloud, sideways passage, sequence, asset-retention, editor, mesh and provenance checks also pass.

A decoded frame from the previous v48 focus export was compared with its exact pre-encode PNG (frame 89, 2.967 seconds). Mean absolute RGB error was 1.68 on a 0–255 scale and PSNR was 41.37 dB. This sample shows that the enlarged PNG itself already limits close-eye detail; it does not establish the origin of every artifact in a user screenshot. The exact measurement is in V49-COMPRESSION-CHECK.json. V49 uses high-quality source interpolation and CRF16 exports for changed footage. These reduce avoidable resampling/encoding loss but do not reconstruct missing eye pixels.

The focused preview covers the first eight seconds. The full review replaces that opening interval in the v48 rendered video; the later scenes retain v48 rendered content. Earlier v47 sideways-motion and v48 woman corrections are preserved. No reference-video pixels are inserted as production footage.

## Limits

The camera, mask and timing remain an authored reconstruction. The default iris mask is manually calibrated, not automatically tracked anatomy. An arbitrary picture does not automatically become separate depth layers. The generic editor applies the effect to this focus-transition slot; a complete drag-and-drop editor-wide effect placement system is not claimed. Very close enlargement remains limited by source resolution. Native-browser playback and interaction remain unverified; DOM harness checks are not a real browser review.
