# V62 · photographic staging and simple editing

Status: approved correction pass implemented; user visual acceptance pending. Joshua authorized the V61 reference-review framework, detailed animation and very low-effort granular controls. Work resumed after interruption using the already generated assets and completed render checkpoints. No replacement images were generated during resume.

## What changed and why

The V61 review identified P01–P04 and S01–S06. This pass changes the underlying artwork and layer hierarchy rather than treating effect presence as reference fidelity.

- **Paper:** independently visible gray surround inside the rough photo boundary. Width and color are editable. The existing paper unfolding geometry and crumpled-paper continuation are preserved.
- **Room:** a genuinely colored window/wall support plate replaces the grayscale destination source for this continuation. Muted green daylight, brown window frame and warm mottled wall now remain visible alongside the colored boy.
- **Shelf:** a separate alpha cutout supplies the missing right-side wooden structure and contents. Its source, X/Y, width, brightness and depth response are independently editable.
- **Mother/boy:** one registered room stays aligned through the overlap. Color progression, incoming boy opacity and outgoing monochrome mother opacity have independent clocks. The boy remains the V61 photographic cutout; no new boy identity was generated. The old mother cutout, basin and sill cloth are reused separately. Camera focus/push and foreground depth response are independent. The basin has stronger foreground response than the shelf.
- **Street:** a new asymmetric photographic street plate has a dark dirt road, distinct damaged left/right buildings, dark interiors and rubble primarily at the sides. The old procedural repeating street remains available as the previous layout. The production image no longer binds the road to the same rubble-ground texture.
- **Window/sky occlusion:** runtime alpha treatment identifies transparent regions connected to the image exterior and preserves genuine sky transparency. Enclosed transparent holes are filled dark; remaining solid surfaces become opaque. This prevents red sky leaking through enclosed window cavities. Original PNG remains unchanged. This material operation cannot infer arbitrary unseen interiors in every possible replacement image.
- **Street person:** separate back-view photographic cutout with short dark jacket, breeches, boots and pale hair. Opaque bounds determine placement and height, avoiding misleading transparent padding. Size, position, feet line, growth and brightness are editable. This is an illustrated reconstruction, not the original reference identity.
- **Electrical failure:** distinct poles, crosspieces and wire spans replace the rectangular fence-like rows in the photographic street. Supports pivot through editable lean angles in staggered order; wires sag and settle. Sparks are small, short-lived localized bursts at failure/contact points, with a final stop time. Motion is deterministic choreography, not a structural physics solver.
- **Fire/smoke/light:** the retained generated fireball has broader coverage; procedural blurred discs contribute less over its texture. Fire grades toward denser, darker smoke. Lightning and localized flash remain separate cues. The opening street reveal is slower/darker. The photographic explosion remains one source with authored growth/grading and procedural smoke; it is not filmed temporal footage or a full fluid simulation.
- **Editing:** native and catalog instances use the same Quick edit panel. Choose one scene, replace named items, adjust simple sliders and preview a known stage. Advanced calibration stays collapsed. Catalog instance source bindings are resolved independently before rendering. Original static-arm walker, enhanced classic walker and expanded mesh alternative remain preserved.

## Quick editing workflow

Open **Next chapter → Quick edit · paper, room and war street**.

1. Choose **Paper, mother and boy** or **War street and electrical collapse**.
2. Use **Replace room and window**, **Replace wooden shelf**, **Replace boy**, **Replace mother**, **Replace basin**, **Replace sill cloth**, **Replace street and road**, **Replace back-view person**, or **Replace explosion**.
3. Adjust labelled controls such as boy size/position, shelf size, gray frame width, camera zoom, person ground height and fall duration. Use **See paper**, **See overlap**, **See boy**, **See entrance**, **See explosion**, **See collapse** and **See camera push** to inspect the relevant state.
4. Expand placement/color/timing only when needed. Additional controls include appearance onsets/finishes, room/subject brightness, face shadow, foreground depth response, pole angle, spark count/size/lifetime/stop and smoke opacity. Native sequence playback speed remains available; reusable animation instances retain shared reversal, delay, pause and slow/fast controls.
5. Reset restores scene parameters without replacing the chosen uploaded media. Previous room/modeled street remain toggleable. Explicit street model overrides take priority over the photographic factory path.

This is a simple labelled control workflow, not a usability study certifying that a five-year-old can operate every advanced calibration. Replacing media is simple; radically different framing may still require placement adjustment.

## Principal factory values

| Parameter | Value | Unit |
| --- | ---: | --- |
| Gray surround | 36 | stage pixels before sheet projection |
| Gray surround color | #696765 | hex color |
| Environment color starts / finishes | 3.8 / 5.2 | canonical clip seconds |
| Mother fade starts / ends | 4 / 5.15 | canonical clip seconds |
| Boy appears / fully visible | 3.75 / 5.1 | canonical clip seconds |
| Room push | 0.12 | added scale amount |
| Boy X / Y / width | 205 / 60 / 555 | stage pixels |
| Boy brightness / right shadow | 0.84 / 0.22 | scalar |
| Mother X / Y / width | 480 / 72 / 405 | stage pixels |
| Shelf X / Y / width | 745 / 205 / 190 | stage pixels |
| Basin X / Y / width | -160 / 355 / 475 | stage pixels |
| Boy / basin / shelf depth response | 1.4 / 2.2 / 0.8 | relative camera response |
| Street push / brightness | 0.34 / 0.72 | scale amount / scalar |
| Dark entrance duration | 1.6 | seconds |
| Street person initial height / growth | 230 / 230 | stage pixels |
| Street person X / initial feet line | 480 / 485 | stage pixels |
| Pole fall starts / duration | 15.4 / 3.4 | canonical seconds / seconds |
| Maximum pole lean | 75 | degrees, with per-pole stagger |
| Sparks per burst / base radius | 16 / 1.3 | count / stage pixels |
| Spark lifetime / final stop | 0.13 / 19.7 | seconds / canonical clip seconds |
| Smoke opacity | 0.98 | scalar |

Complete exact values and source functions are generated in the animation registry, catalog and per-effect Markdown. Stable IDs include `layered-room-color-reveal`, `room-picture-overlap`, `ruined-street-approach`, `war-destruction-collapse`, `classic-walk-with-hands`, `rigged-cutout-walk` and `natural-mesh-walk`. Appearance clocks use canonical source-clip time and inherit the sequence's phase remapping. Factory definitions and exported live instances remain distinct.

## Assets, context and preservation

Four original generated PNGs are retained unchanged: `room-color-v62.png`, `wooden-shelf-v62.png`, `war-street-v62.png`, `street-figure-v62.png`. Exact built-in image-generation prompts, reference roles, parent/output hashes and dates are recorded in `dist/assets/reference-generation-v62.json`. No external image-generation service is required for playback or editing the bundled project. Existing assets and alternatives remain registered and searchable.

The original transcript DOCX is unchanged. Scene/asset context now records V62 changes and pending visual acceptance. Context migration supports future numbered review revisions while preserving custom narration and the previous source context. Prior migration's hardcoded version list excluded V61 and was corrected; tests cover preservation and idempotence.

## Review exports and validation

The focused continuation is 71.267 seconds, 2138 frames; full review is 137.333 seconds, 4120 frames. Both are silent, 960×540 at 30 fps. Walking comparison is 8 seconds. The original-reference column is recovered from the saved V61 comparison at 640×360, not freshly decoded from a native-resolution original. Current footage is rendered from the shared current painter.

The final ground-position and lightning/flash continuity correction is assembled on exact frame grids from the shared final painter: focused frames 399–761 and full frames 2381–2744. This does not change frame count or phase timing. Long encoders write unique temporary files, decode strictly and rename atomically. The package repeats strict full decoding and records file hashes. No unfinished encoder output is a deliverable.

Validation covers timeline/clock continuity, retained artwork, distinct source slots, color/character cue separation, opaque interior closure with open sky preserved, finite spark events, actual quick-edit source/slider/scene/preview interactions in a DOM/canvas harness, registry parity, context migration and shared focused/full rendering. Native browser/hardware performance and audio alignment have not been independently verified. Test success is not visual acceptance.

## Remaining limits

The room and street use photographic plates and cutout layers with shallow depth response; this is not recovered full 3D architecture. Building placement, face/pose likeness, basin/shelf perspective, exact camera path, smoke evolution and wire topology still differ from the reference. Very different replacement artwork may need recalibration. Spark and pole motion remain authored approximations. The original walking artwork and optional mesh are retained; this pass does not claim new anatomical rig fidelity. No reference-perfect or superior-to-reference claim is made. No remote commit or deployment was performed.


## Subsequent V62 annotated review · analysis only

All 17 new annotations merged with unannotated frame checks and implementation evidence. Pending issues R01–R14 cover mat, contrast/portrait zoom, destruction entry, building masses, cable origins/topology, light, framing/lateral passage, salvage layout/attachments and walker progression. Literal no-zoom/no-cutout/no-lightning claims are qualified; perceptual mismatches remain confirmed. Shared-camera photographic/3D hybrid proposed. No visual changes applied. Further implementation awaits interpretation approval; see V62-MERGED-REVIEW.md.
