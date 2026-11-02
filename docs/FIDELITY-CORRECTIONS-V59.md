# V59 corrections after visual audit

Status: implemented for user review,29 October2026. Joshua approved the corrections and will provide feedback after seeing them. V58 was rejected for visual fidelity; passing unit checks was not visual acceptance. No deployment or Git operation is part of this revision.

## What changed

The continuation now uses the established `portrait-room-person-v53.png` boy cutout with separate room surfaces, vase and sill object. No replacement boy was generated. A direct flat-photo draw was removed. Boy, vase and room use the existing perspective-room renderer during the mother-to-boy overlap and face push. The vase has a direct front/behind toggle and individual placement/size fields. Existing room camera, depth, source bindings and window-object controls remain available. Grayscale source artwork is preserved; this does not recreate the reference's color grading exactly.

The unfolding sheet now keeps a folded reverse section at the1.4s milestone, with an irregular alpha edge and fold shadow. Mother and boy rooms are composited into the same unfolding surface; crumple departure overlaps this reveal. The fold is an authored mesh approximation, not a physically simulated cloth/paper solver.

The ruined street has a narrower corridor, taller close façades, side reveals, volumetric rubble pieces, layered photographic foreground rubble, a larger approached rear figure and a dim emergence. Fire uses the same packaged video source in both reviews, softened edges, a smaller distant footprint, moving smoke puffs and localized glow. It remains an illustrative fire/smoke construction rather than a recovered explosion simulation.

A close façade supplies the lateral occlusion. Searcher entry, helmet/cable attention and wider framing use continuous interpolation rather than the former instantaneous camera changes. The helmet is smaller; cables use segmented sagging curves. The actor has no modulo path reset inside the shot. Feet/ground contact is an authored approximation, with a separate foreground rubble layer capable of occluding the actor. The scene is hybrid2.5D/3D; textured façade cards are still identifiable in some views.

The bicycle shot emphasizes a large near wheel with32 spokes and tire geometry. The label follows its framing; the brown shoe grows into a close handoff. The brown-to-black shoe handoff is a direct match transition, avoiding a ghosted crossfade. The former repeated cropped trouser strips are replaced by two generated complete lower-leg/shoe cutouts at separate near/far scales. Shoe and ankle remain attached within each image. The large pink foreground legs and darker rear legs create spatial occlusion. These are photographed-pose cutouts with animated paths/rotation, not motion capture or planted-foot IK.

The magnifier still samples the live current feet frame. It now has a shaded rim and handle, an adjusted path and independent rim width. Diagram shoes use four independent sources: cropped gray-leg shoe, brown shoe, cream shoe and cropped pink-leg shoe. Portrait-shaped leg sources receive runtime foot cropping; landscape shoe replacements use the whole source. The nodes appear over1.6s instead of3.6s; outlines are crisp displaced alpha silhouettes. The final foreground exit remains partial because its destination was not supplied.

## Shared rendering and retiming

`scripts/review-render-core.mjs` owns review source loading, exact default settings and frame dispatch. Both MP4 renderers call it. The focused frame function calls the full frame function at the continuation's absolute depot time. Ten pre-encoding exact pixel comparisons test agreement at0,1.4,6,14.226,34,48,55.8,58,63 and67.5 clip seconds. Separate output timestamps can differ by one encoded frame because the continuation offset66.082s is not an integer multiple of1/30s; this is distinct from the former source mismatch.

Fire sampling wraps the packaged5-second fire clip; it no longer clamps every late sample to its final frame. The player still uses its existing media binding/synchronization path; native browser playback is not independently verified by this offline render test.

`expansionClock` maps editable phase boundaries to authored event time. `expansionInverse` maps back, and `retimeExpansionStages` updates the containing history stage durations/source ranges. This keeps internal helmet, cable and wheel events tied to their phase. Existing custom stage duration ratios multiply the retimed spans rather than being discarded. Phase UI inputs clamp between adjacent boundaries to prevent invalid ordering. Invalid imported phase ordering raises an explicit validation error. The old duplicated `expansionStreetStart` control is superseded by the shared end-of-black/street-entry boundary.

## Simple controls

Next sequence provides labelled replacement buttons for boy, room, vase, sill item, ruined façade, ground, searcher, shoes, rubble and complete leg/shoe cutouts. Boy/vase position and size, vase overlap, camera push, fire strength, searcher size, feet size/speed, walking stride/rate, beam strength, wheel speed and lens settings are directly editable. Phase times remain under the advanced timing section. The Animation library supplies shared playback reversal, delay, speed and slow/fast controls. Camera/model hierarchy, masks, route points and optional per-node source crops retain advanced access.

Exact defaults, parameter units, module paths, search aliases and source slots are regenerated in `docs/ANIMATION-CATALOG.md` and the distributed Markdown/JSON. New asset prompts, references and hashes are in `dist/assets/salvage-generation-v59.json`. Raw generated bytes are preserved. Runtime alpha cleanup/crops are not destructive changes to those assets. Original V58 assets and V57 restored shoe remain recoverable.

## Feedback ledger and remaining review

- User correction: reuse the established boy and editable vase/room, compare all new shots against the original; addressed by renderer reuse and a short-frame integration guard that rejects direct access to the flat boy source.
- User approval: proceed with audited corrections and await feedback after viewing; no further approval was requested during implementation.
- Technical tests do not certify reference fidelity. Review the rough fold silhouette, grayscale boy treatment, vase ordering, architecture repetition, smoke style, helmet contact, cutout gait and wheel/shoe handoff in the videos. Fine material appearance and contact remain approximate.
- Earlier cloud/eye/title scenes are preserved and are not newly certified as reference-accurate by this continuation pass.
- Original transcript remains unchanged. Source clip span71.242s conflicts with the nominal60s filename; audio/master alignment is unverified. Reviews are silent and retain exact local clocks. Unknown final transition destination remains unset.

Final encoded review caught a doubled shoe during the handoff. The55.3–56s region was corrected to a direct match, rerendered through the shared painter and assembled into both exports at exact30fps frame boundaries. Whole-video regeneration scripts produce the same revised scene without requiring this patch step.
