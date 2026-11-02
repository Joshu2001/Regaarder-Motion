# V63 · approved merged visual corrections

Status: implemented for visual review. Joshua authorized “make the appropriate visual edits” following the merged R01–R14 report. Joshua's Visual Review skill was applied to composition, timing, attachment and representation choices. Originals, older layouts, photographic walker and mesh alternative remain recoverable. No remote project publication or commit was performed.

## Results by review issue

| Issue | Change | Remaining qualification |
| --- | --- | --- |
| R01 paper surround | Gray mat increases from 36 to 68 native pixels, has an irregular inner edge, and the sheet approach grows enough to move the border offscreen during portrait close-up. | Texture/contour are authored approximations of the reference. |
| R02 overlap | Boy is fully legible earlier; mother holds monochrome longer before fading. One room remains registered. | Source identities and exact silhouette overlap differ. |
| R03 portrait zoom | Room push grows from 0.12 to 0.72; focus moves to 0.5 / 0.45; deeper face shadow retained on opposite side of window light. | Reference likeness and lighting are not identical. |
| R04 destruction entrance | Explosion begins at canonical 12.35 seconds, before street entry at 13.3; fire is not suppressed by the old whole-frame entrance fade. | One generated photographic fire element plus procedural smoke, not original temporal footage. |
| R05 building masses | A separate-depth left foreground photograph strip and textured side return provide the mass for camera passage. The extra street foreground debris overlay defaults off, with its source retained. | Photographic street silhouette is still an alternative composition. |
| R06 initial failure | Released conductors begin at 12.95 seconds; supports begin in a damaged lean. Three overhead spans remain attached while two distinct spans fall. | Initial damage and event timing are authored interpretations. |
| R07 direction and origins | Falling spans move down/right in world coordinates and settle on the ground; named roof anchors are shared with the photographic plane's projection. | Original hidden mechanical origins were not newly proven. |
| R08 cable web | Twenty-seven repeated curves are replaced by five identified spans: three attached, two released. Darker strokes and near-wall occlusion reduce fan-out/alias appearance. | Not a full elastic cable simulation. |
| R09 sky/light | Smoke drifts left to open red sky; lightning/flash cues occur at the configured event and +2.2 seconds, with salvage cues at 28.7 and 30.4. Salvage sky is independently darker. | Cue timing and shapes remain approximate. |
| R10 character framing | Head, feet and height derive from the same perspective camera as ground/wires. Late approach grows/crops the lower body. | Current photographic back-view identity/costume retained. |
| R11 lateral passage | Camera starts moving left at 23.2, with continuous forward velocity through the nominal pan interval; foreground wall advances screen-right before the opaque passage. | Wipe still bridges two authored shots, not a reconstructed continuous original scene. |
| R12 salvage layout | Ruin moves toward the right and becomes taller; old dense rubble primitives are thinned; the floor uses a new dark-earth material. Window interiors are closed dark and sky grade is shared in intent. | Terrain relief and ruin outline still differ from reference. |
| R13 salvage attachment | Cable A derives from the actual ruin plane position, size and Y rotation at an editable normalized surface location. Cable B extends toward a declared offscreen support. | Offscreen support is an authored continuation, not recovered original geometry. |
| R14 walking | Original photographic character retained; root travel is 1.35× the old nominal path and cadence is 1.1×. New vertical ground constraint derives foot hulls from actual source alpha. | No new young-person artwork, full 3D anatomical rig, horizontal stance lock or arbitrary terrain contact solve. |

## Shared depth method

`hybrid-scene.js` implements a perspective projection used by street photographic planes, a textured floor, actor bounds and conductor geometry. The left foreground strip is closer than the main photo plane; a project-authored shaded wall-return material closes their gap. The near road is opened with a feathered runtime matte over projected ground tiles. The photographic source file remains unchanged. This is a shallow photographic/3D reconstruction, not full geometry recovered from one image.

Stable roof points are stored as normalized photograph coordinates and unprojected onto the same world plane used by the image. This makes their screen position match during the camera move. Wires behind the left foreground wall are clipped by its projected silhouette. Two released spans use deterministic drop/settle curves with a ground-height guard. This preserves separately visible overhead and failed groups instead of redrawing a fence.

The actor's world height/depth, shared lens, camera height and vertical framing determine growth and cropping. The forward move uses a smooth camera-distance curve. The late pan uses q²(2−q) up to its nominal interval, then continues with matching first derivative while the occluder crosses. The old flat photographic and modeled paths remain toggleable; explicit custom street-model overrides retain priority.

`grounded-walk.js` keeps the existing photo parts and arm/torch rig. It extracts convex foot hulls from the chosen image's alpha inside the calibrated shin masks, transforms them through the same thigh/knee rotations and shifts the rendered character vertically so the lowest actual modeled silhouette meets the chosen ground line. Source-readiness checks preserve loading/missing-image behavior. This corrects vertical floating/penetration; it is not a horizontal foot-plant or full-body physical solve. Existing mesh walk remains optional.

## Simple editable controls

Open **Next chapter → Quick edit**. Choose the room or street and use existing replace, size, placement and timing controls. Advanced fields remain collapsed.

- Room: mat width/color; boy size/placement, zoom amount/focus, onset/finish, mother fade, face light/shadow and separate foreground depth.
- Street: camera approach, character size/depth/X, wire release/fall duration, lateral travel/start/duration, near-wall depth, wire thickness/sag and spark controls. **Shared depth camera: On/Off** exposes the earlier photographic fallback.
- Attachments: expand **Point to cable attachments**, choose left street/right street/salvage wall, then tap the image. Street points become normalized plane coordinates; the salvage point follows the ruin transform. Existing numeric calibration remains available.
- Salvage/walk: wall-binding toggle, attachment position, offscreen reach, storm brightness, travel/cadence and **Photographic foot ground contact: On/Off**. Manual cable XYZ remains relevant when wall binding is disabled.
- Reset restores the selected scene's active parameter defaults and preserves media choices. Custom stored values are retained unless they exactly match a replaced old factory default. Previous migrated values are archived in `archivedVisualDefaultsV62` once.

Catalog instances retain independent media bindings and shared speed/reverse/pause/slow-fast playback. New reusable action: `grounded-photographic-walk`; earlier `classic-walk-with-hands`, `rigged-cutout-walk` and `natural-mesh-walk` are retained. Native tap controls are exercised in a DOM/canvas harness; no child usability study or native hardware certification is claimed.

## Exact principal defaults

| Parameter | Value | Unit |
| --- | ---: | --- |
| Mat width | 68 | native stage pixels before sheet projection |
| Room push / focus X,Y | 0.72 / 0.5,0.45 | scale amount / normalized coordinates |
| Boy reveal start/end | 3.6 / 4.5 | canonical clip seconds |
| Mother fade start/end | 4.55 / 5.25 | canonical clip seconds |
| Boy light / face shadow | 0.91 / 0.43 | scalar |
| Explosion start/duration | 12.35 / 5.2 | canonical clip seconds / seconds |
| Wire release/fall | 12.95 / 2.1 | canonical clip seconds / seconds |
| Wire count | 5 | three attached, two released |
| Wire color/width/sag | #343a35 / 1.15 / 0.28 | color / stage thickness / world sag |
| Perspective focal/camera height | 820 / 2 | native projection units / world units |
| Camera forward travel | 3.2 | world units |
| Late camera pan/start/interval | 2.6 / 23.2 / 2.2 | world units / seconds / seconds |
| Horizon start/end | 220 / 50 | stage pixels |
| Actor depth/height/X | 6.4 / 1.7 / 0 | world units |
| Backdrop/foreground depth | 18 / 8.5 | world units |
| Roof anchors left/right | [0.19,0.29] / [0.87,0.25] | normalized source image |
| Ruin width/height/X/depth | 8 / 6 / 4.9 / -6 | model units |
| Salvage surface U,V | 0.92,0.14 | normalized source image |
| Offscreen cable reach/rise | 5 / 1 | model units |
| Salvage sky brightness | 0.57 | scalar |
| Walk root/cadence factors | 1.35 / 1.1 | multipliers on old path/rate |
| Foot correction | enabled, strength 1 | vertical constraint |

Complete human/AI-readable defaults, exact functions and file hashes are generated in the registry and per-effect Markdown. Event times are canonical source-clip times before the existing phase remapping. Live instance values and factory definitions remain separate.

## Preservation and provenance

The only new generated bitmap is `dark-earth-v63.png`, created by the built-in image-generation tool. It is copied unchanged; exact prompt, tool/date/output hash and runtime treatment are in `dist/assets/terrain-generation-v63.json`. Photographic characters, earlier source artwork, rejected/alternative atlas and original classic engine remain registered. The original transcript DOCX is unchanged. Editorial/semantic context and the timeline record the V63 approval and limits.

Existing factory values migrate only on exact old-value matches; custom positions/timing/media remain. The old/source project is not overwritten. No external generation service is required to play or edit bundled assets.

## Validation and export

All 51 automated checks passed in the final run (`check-results-v63.json`). These are functional checks, not proof of reference fidelity.

Checks cover shared projection of roof/photo anchors over time; explicit five-span topology and ground settling; stronger late head/lower-body crop; screen-right foreground progression under the leftward camera move; geometry-derived salvage attachment; rendered photographic foot bounds; missing-source readiness; tap-to-place controls; existing sequences, registry, source/context preservation and shared full/focused painter frames.

The focused review is 2138 frames (71.267 seconds), full review 4120 frames (137.333 seconds), silent 960×540 at 30 fps. The final camera-direction refinement is rendered on exact frame grids for clip 23.1–27.5 and assembled into the long exports without changing counts. The source-reference column is recovered from the saved earlier comparison at 640×360; no native-resolution master or audio was newly decoded. Original-versus-corrected photo walking A/B uses the same artwork and scale to show the vertical ground constraint, not a proven full-3D improvement.

Exports use unique temporary files, strict full decode and atomic rename. Package verification checks current sources/assets/docs and four V63 videos. Automated success is distinct from visual acceptance.

## Remaining visual limits

Exact room/character likeness, building silhouettes, surface relief, smoke evolution, depth/focus falloff, original cable origins and full camera solve remain approximate. The textured plane/ground junction is a shallow authored matte and may need refinement under more extreme camera or replacement artwork. The wall return uses a project-authored material, not recovered unseen architecture. Walking remains photographic articulation with vertical contact correction; horizontal sliding and anatomical deformation can still need work. User acceptance remains pending, and no reference-perfect or superior-to-reference result is claimed.

Final encoded comparison finding: the stronger lateral pan moves the actor out of frame earlier than the reference during the late street passage. Camera/actor synchronization remains a visible correction to make; functional direction checks do not establish composition equivalence.
