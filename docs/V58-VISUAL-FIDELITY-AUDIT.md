# V58 visual fidelity audit · 29 October 2026

**Assessment: not satisfactory against the requested reference fidelity.** The current implementation has working reusable tools, but several shots use materially different assets, compositions, depth relationships and motion. The45 passing checks establish specific technical behavior, not fidelity. The prior delivery should have separated those conclusions more clearly.

No scene, asset or animation is changed by this audit. Changes below are proposals awaiting Joshua's green light. This audit and feedback record are the only new project documentation.

## What Joshua is asking for

Use the original footage as the visual authority. After the shoe/paper crumple, reuse the already-created layered boy room: the correct boy cutout, separate vase and window/sill objects, and a room with perspective depth. Do not substitute a different flat portrait. Resolve the vase's apparent placement through explicit layer ordering and reference-matched overlap. Compare the entire new continuation and its appearance in the full review, from overall sequence to subtle motion, edges, lighting and timing. Explain what failed and the concrete correction before editing.

This also retains previous requirements: two boys only; keep their established identities/artwork; continuous cloud/spatial movement without bumps or accidental stops; the mother for the mother beat; preserved eye whites and progressive focus reveal; realistic contextual fire; separate replaceable title fill; cutout/person/object depth; preserved shoe appearance; simultaneous paper departure/unfurling; editable/reversible movement, timing and speed; searchable reusable effects; recoverable assets; exact human/AI-readable parameters and script context. Those earlier requirements are acceptance criteria, not proof that every earlier scene has passed a fresh audit here.

## Evidence and method

Inputs were the actual local V58 MP4 exports and supplied original video bytes, not merely cached development stills:

- Focused export: `Motionclone-v58-next-sequence-review.mp4`,71.267s,2138 frames at30fps,960×540.
- Full export: `Motionclone-v58-review-01m45-to-current.mp4`,137.333s,4120 frames at30fps,960×540.
- Original continuation: supplied `02-45.0_to_03-45.0.webm`,1920×1080;1139 decoded video frames with irregular presentation timing, spanning71.242s. The nominal60s filename range is inconsistent with decoded timestamps.

I decoded27 matched milestone triplets directly from the three videos: entrance, unfolding, overlap, room push, black, explosion, street approach, occlusion, search, helmet/cables, vertical passage, bicycle, shoe handoff, walking feet, lens, diagram and exit. Five comparison sheets show original / focused / full. Existing52 focused reference samples supplied additional temporal context. Source-code inspection establishes why the visible differences occur. This is a frame-sequence and implementation audit; no native-speed browser viewing, listening, optical-flow reconstruction or recovered original3D scene is claimed.

For this continuation only, **full-review seconds = clip-relative seconds +66.082**. Output frame sampling has up to one30fps frame of selection uncertainty. Comparison images normalize framing to640×360 before display. A lower clock band exists only in the full export.

`comparison-metrics.json` contains a reproducible focused-vs-full RGB difference measure excluding the clock band. It is an export-consistency diagnostic, not a reference-fidelity score; different artwork, compression and neighboring frame selections make global pixel error unsuitable as a quality percentage. No invented similarity percentage is used.

## Findings, from structure to detail

| Priority / clip seconds | Reference evidence | V58 problem | Proposed correction / acceptance condition |
| --- | --- | --- | --- |
| Critical ·3.5–12.054|Boy/window composition grows toward a face close-up while the woman-room overlap clears|A different boy, different hair/pose/room, and a baked image replace the existing layered scene; the final face crop remains too loose|Reuse the established boy cutout and room assembly. Keep window/sill object and vase separate. Match head position/scale at5.990 and11.824s and the room disappearance at12.054s. Do not regenerate the boy|
| Critical · same shot|Foreground/background overlap communicates depth|A vase visible in a source photograph cannot receive independent placement, occlusion or camera response|Render separate vase and person through one camera with explicit order/depth. Verify the vase intersection/overlap at entrance, overlap, mid-push and close-up. Apparent depth changes during the room overlap do not prove that a vase physically crosses through the boy|
| High ·0–3.5|Gray folded sheet arrives from upper-left while crumple departs; triangular folded section and rough border remain visible|At1.402s the current card is already almost a complete clean rectangle. The sheet reverse is an upright rectangular slab at.812s. Texture, roughness, hinge/fold silhouette and cast shadow differ|Match sheet path, silhouette, fold angle and reveal coverage over time; textured irregular edge, reverse face and localized fold shadow. Match concurrent crumple flight, rather than treating card arrival as an independent slide|
| High ·3.5–5.1|Woman and colored boy-room overlap with different spatial features; window brightening belongs to the changing picture|Current images dissolve as whole flat layers, creating displaced faces and room features|Composite the two layered rooms into the same unfolding surface; align window/room anchors and tune the overlap. Preserve the reference's visible overlap; do not replace every transition with a fade or invent a separate flash|
| High ·13.3–25.4|Dark, narrow ruined corridor; irregular deep rubble, large nearby buildings, rear figure approached by camera|Bright repeated façade cards and a uniformly textured ground plane form an open plateau. Figure stays much smaller than reference late in the approach|Match street vanishing point, near-wall scale, debris silhouette and foreground/middle/distant depth. Use volumetric side reveals where camera exposes them; reduce repeated-card appearance. Match rear-figure crop at24.603s|
| High ·13.3–17|A dim reveal, distant explosion/fire, structured smoke column and environmental darkening|Street appears brightly at13.393s; fire is a flat flame patch with an obvious lower edge; smoke is a soft dark blob, with insufficient explosion structure or light interaction|Reference-timed dim emergence, depth-masked fire/explosion and layered moving smoke with breakup, scale and integration. Assess light spill on nearby surfaces without washing out the room/street|
| Critical · both exports|The same project state should depict the same fire at equivalent time|Focused export uses`fire.png`; full export loads decoded`real-fire.mp4`. At14.226s they visibly differ; cropped mean RGB difference13.374/255 corroborates the discrepancy but is not a fidelity rating|One shared source loader, settings snapshot, media-time convention and render function for player/full/focused exports. Same-time samples should agree within encoding and sampling tolerances|
| High ·25.4–27.5|Near façade becomes a large recognizable opaque foreground occluder|Generic dark wall strip provides coverage but does not reproduce the close façade/window profile or timing|Move a textured/structured near wall through the same camera transition. Inspect25.821s,26.384s and27.526s for full coverage, direction and uninterrupted travel|
| High ·27.5–45.243|Searcher initially enters an established rubble space; pronounced flashlight cone, large foreground stones, close helmet, cables attached to ruin|Actor is already fully present near27.526s; background looks like a slanted board. Beam is faint. Helmet looks oversized and floats/intersects near the boot. Cables are thin straight lines with small staged buildings|Match scene entry before actor entry; ground contours and contact/occlusion; actor size and world path; beam anchor/spread/intensity; helmet placement/contour/material; curved cable anchors and close camera framing|
| High · motion within search|Camera changes and object attention remain coherent across helmet, cables and wider view|Abrupt phase switches use fixed times; actor scale/position change separately from camera. Screen-space actor loop can reset its position|Use continuous camera/event tracks, a stable actor path and separate limb articulation. Compare displacement/scale on successive samples to catch discontinuities; retain intentional reference reframes while avoiding invented bumps|
| High ·45.243–49|Rubble occupies foreground while view travels down; large close bicycle wheel rises through the dark bridge|The continuation reveals a small whole bicycle with a large empty gradient around it; label appears before wheel-detail framing establishes it|Match vertical travel, dark coverage, wheel crop and reveal order. Reuse editable model but reframe/detail the wheel/fork/trim mechanism, leader and label. Do not invent an unverified cutting linkage|
| High ·49–56.4|Brown shoe occupies a close foreground relation to wheel, then a dark worn shoe/leg takes over at similar scale|Brown shoe remains isolated and smaller; crossfade overlays several walking legs simultaneously before establishing the single shoe match|Match shoe position, scale, angle and silhouette at handoff; retain established source appearance. Transition through the matched shoe and foreground occlusion, with geometry/leg attachment aligned|
| High ·56–65.963|Layered feet pass at different depths, large near silhouettes obscure rear feet, colored trousers and defocused surroundings create space|Four similar shoe copies and narrow trouser crops repeat against an empty gradient. Cropped leg tops/awkward ankles are exposed. Depth mostly comes from order/brightness, with little environmental/contact grounding|Create separate leg/shoe assemblies with proper ankle overlap, trouser volume and framing. Separate near/middle/far paths, scale, speed, blur and contact. Match large foreground occlusion and retain source-specific appearance|
| Medium/high ·61.2–65.963|A large angled handheld magnifier with dimensional rim/handle samples moving feet|Live sampling works, but the lens is too graphic/thin and its handle appears as a flat bar; framing/source motion remain unlike reference|Keep synchronized source sampling. Match lens path/scale, angled handle, metallic highlights, rim thickness, slight glass tint/reflection and occlusion. Provide independent look/motion controls|
| Medium/high ·65.963–70.7|Four small outlined shoe types appear rapidly along a gently curved dashed progression|At67.466s reference already shows four, current export only two. Current nodes are larger, delays longer and route more sharply zigzagged; A/B/D reuse tinted versions of one silhouette; border is a blurry shadow|Match node reveal schedule, route curvature/dash rhythm, shoe size and distinct silhouette/texture. Use crisp editable outline and four independent source slots. Preserve original candidates as alternates|
| Medium ·70.7–71.242|Large blurred photographic foreground objects begin covering the diagram|Generic blurred bars start slightly later; no convincing object silhouette|Match observed blurred silhouettes, path and coverage with separate assets. Reconstruct only the provided partial exit; leave unknown destination unresolved|

## Code-confirmed causes

1. `sequence-expansion.js → paintExpansion` calls `cover(...images.historyPortrait...)`, bypassing `paintPortraitRoom`. It applies a whole-image scale`1 + clamp((t-overlapStart)/8)*.55`, with no per-cutout camera response. It also bypasses the selected source-binding helper on this image path.
2. Existing `portrait-room.js` already contains room surfaces plus `historyRoomPerson`, `historyRoomVase` and `historyRoomCloth`. Its normal painter draws person then vase. The correct starting point is that assembly, not new boy artwork. Its existing ordering is not proof of the later reference overlap: calibrate explicitly, then verify the actual intersection rather than arbitrarily switching depth.
3. New street recipe repeats a single façade plane and textures a broad heightfield. Being geometric does not automatically give the reference's architecture, silhouette, rubble relief or composition.
4. `render-expansion.mjs` assigns a still`fire.png`; `render-motion-review.mjs`, imported by the full renderer, assigns decoded`real-fire.mp4` frames. The two exports were not using identical source fixtures.
5. Search phases retain hard-coded31.5,33,36.282 and39.5s landmarks. Bicycle movement retains46.8,49 and49.5s constants, while exposed phase controls can change other boundaries. Several visual positions, crops and actor-loop parameters are also hard-coded. Thus exposed controls do not yet provide complete independent retiming.
6. `feet()` repeats the brown shoe with grayscale/brightness changes and uses a fixed cropped section of the searcher for trouser legs. That accounts for the cut-leg and repeated-foot appearance. A foot layer is not the same thing as a grounded walking system.
7. The route uses shared shoe assets for multiple nodes; color variation does not establish different footwear designs. A shadow blur is not equivalent to a crisp cutout outline.

## Editable does not yet mean simple

The catalog, exact defaults, asset retention and shared playback wrapper are useful foundations. However, raw mask/rig/model JSON, long numeric fields and source slots are not the low-cognitive-load workflow requested. The rendered action must obey the same parameters the UI and documentation describe.

Proposed simple surface for each effect:

- **Replace:** boy/person, room, vase/object, texture or destination, with labelled thumbnails.
- **Position:** click or drag the focus point/asset; front/back control with visible layer order.
- **Timing:** start, end, duration, direction/reverse, speed and optional slow-then-fast preset; phase-relative keys move together.
- **Look:** depth, shadow, blur, lighting and outline where relevant; advanced geometry/calibration remains available separately.
- **Reuse:** named searchable preset with stable ID, independent instance settings and separate media bindings.

Do not promise automatic reconstruction of arbitrary photographs, automatic character rigging or universal text-to-3D. A replacement with a different pose may need calibration; provide a visual calibration tool rather than presenting JSON as the simple workflow.

## Prior requirements: what this audit can and cannot conclude

| Earlier request | Current audit conclusion |
| --- | --- |
|Exactly two boys; progressive eye reveal into mother; preserve eye whites|Carry forward unchanged as acceptance criteria. Not re-certified by the later27-point continuation comparison|
|Cloud descent in one continuous motion; natural darkening; spatial passage without stops|Needs its own temporally aligned earlier-clip pass. A correct spatial-transition function alone does not certify the cloud art or pacing|
|Mother in the mother scene; separate mother/son vase and sill objects|New continuation reuses mother room but boy path bypasses the existing cutouts. Wrong boy and baked vase are confirmed|
|Room depth rather than scaling a picture|New boy path fails this requirement; earlier model/painter remains available for reuse|
|Preserve established shoe artwork|Earlier restored shoe files are retained. Later brown/cream shoes are separate assets, but the later handoff and walking repetitions still differ visibly|
|Real fire, smoke, light integration|Fails visually in the continuation and fails consistency between exports|
|Image/color fill inside editable title; every asset replaceable|Existing feature not re-certified in this audit. New direct image access illustrates why all source bindings need integration tests|
|Search, exact settings, human/AI context, recovery|Useful metadata exists. Complete UI-to-render parameter coverage and user-friendly independent retiming remain unfinished|
|Script-supported metaphor and narrative context|Keep transcript attached. Do not assign exact spoken cue times or historical identities from artwork without alignment/evidence|

## Proposed correction order after approval

1. **Restore continuity first:** correct layered boy/room/vase/sill assembly, reference-matched overlap/push, and paper unfolding. Render a short comparison through the black interval before touching later shots.
2. **Unify rendering:** identical sources, settings, clip clock and frame function for player/full/focused export. Retain a manifest with source hashes and render settings.
3. **Rebuild shot composition:** street/rubble/lighting and occlusion; then searcher/beam/helmet/cables; then wheel close-up and shoe match; then grounded feet/lens/diagram. Reuse existing assets and tools where suitable; replace only demonstrated unsuitable assets, preserving originals.
4. **Finish editability alongside each shot:** remove timing constants that contradict UI controls; expose simple source, placement, layer, timing and look controls; keep exact machine-readable defaults synchronized.
5. **Verify milestones and motion:** compare entrance, middle, focus/hold and exit; track normalized head/object bounds, horizon/vanishing point, overlap coverage, camera/asset scale and displacement. Inspect consecutive frames at phase boundaries for unexpected jumps. Generate shared-pipeline side-by-side previews and report residual differences.

Frame-perfect replication cannot be established by a single similarity number or passing unit checks. Where original3D geometry or cut-vs-pan technique remains unknown, match visible behavior and label the inference.

## Feedback record

Joshua rejected the later flat boy substitution and questioned the delivered visual quality. Audit status: V58 is **technically functional but visually not accepted**. No scene-edit approval has been assumed from the audit request. Earlier source and exports remain preserved. The next editing step awaits Joshua's feedback/green light.
