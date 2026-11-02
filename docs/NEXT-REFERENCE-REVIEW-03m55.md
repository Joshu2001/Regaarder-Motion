# Reference analysis — nominal 03:55–04:47

The sequence can be recreated mainly with photographic cutouts, shallow planes, independent layer clocks and a few reusable transitions. The important work is the relationship between layers: room portraits passing in front of each other; a large factory pullback; opposing faces and local eye fire; individually assembling title letters; an athletics depth reveal; and a tree hiding a scene boundary. A single fade or whole-image zoom would miss these relationships.

This is the analysis report requested before editing. Subsequent implementation is authorized by Joshua's latest instruction; this report does not request the same permission again. Production visuals, defaults and V64 assets have not been changed in this analysis pass. The opening join needs a missing bridge reference; covered scenes can be prepared independently.

## Evidence, clocks and limits

- Source: `The Nazi Brothers Who Started Rival Shoe Companies - MagnatesMedia (1080p, h264)_03-55.0_to_04-47.0.webm`, uploaded by Joshua; 1920×1080, stereo 48 kHz audio present.
- First video PTS is 0.000; last is 52.902 seconds. The nominal filename spans 52 seconds, so master times below are approximate: 03:55 + clip PTS, not a verified master-frame sync.
- 992 decoded video frames. Median interval 0.043 s; maximum interval 0.304 s. The stream's reported `1000/1` rate is not the real captured cadence. Slow playback repeats captured frames and cannot reconstruct missing movement.
- Full-range overview, targeted ordered sequences, 197 selected timestamped source frames, and an eight-frame native burst at 16.147–16.637 s were prepared. `samples.json` records selected native frame indices and PTS. This was frame-sequence inspection, not a claim of direct native video-player perception.
- Three critical excerpts were rendered at 0.25×, with pitch-preserving slowed audio. Narration context was checked against the existing supplied timestamp transcript; no new claim of full audio transcription or exact beat synchronization is made.
- Deterministic measurements use multiscale normalized cross-correlation (NCC), at 480×270 working resolution, with scale increments of .01. NCC scores indicate patch agreement, not probabilities or recovered 3D coordinates. Reported pixel movements are converted to 960×540 analysis coordinates; native 1080p distances are twice those values.

## Important continuity correction

The earlier reference ends at the shoe-evolution diagram and an incoming window/room edge. This upload begins in the seated room just before SALES starts revealing. They do not provide a verified visual overlap. My previous estimate that the old material reached about 03:58 was based on a provisional timeline and should not have been treated as an exact source endpoint.

The existing transcript places shoe experimentation around 03:36–03:42, Rudi joining and the brothers' contrasting skills around 03:44–03:54, and SALES around 03:54. The first native frame contains the seated portrait but no completed SALES word; the earlier one-second overview sampled later into that first second. This suggests a missing bridge around 03:40–03:55, but its exact duration is unresolved. A short 03:40–04:00 reference would settle the diagram-to-room entrance without guessing. Do not invent that transition or silently stretch this upload to cover it.

## Whole-to-detail state map

Times are clip-relative. Boundaries are visual estimates, generally within about .2 seconds; the native room/factory cut is bounded more narrowly below.

| Phase | Clip seconds | Nominal original | Entry → change → hold → exit |
| --- | --- | --- | --- |
| Role portrait / SALES | 0–3.0 | 03:55–03:58 | Warm room and seated side-facing young man; large blue-white textured letters finish revealing across the foreground. Opening is already underway. |
| Portrait handoff | 3.0–4.4 | 03:58–03:59.4 | Frontal young man comes in from screen-left, overlaps the previous portrait; room and earlier figure shift relative to him; SALES dims/leaves. |
| Adi portrait / MANUFACTURING | 4.4–10.7 | 03:59.4–04:05.7 | Portrait and window recede while moving screen-right; word writes on from left to right around 7.1–8.7; textured fill remains inside the letters. |
| Pair and wire graphic | 10.7–16.45 | 04:05.7–04:11.45 | Wider composition includes both brothers. Word fades. Thin white barbed line grows across the lower torso region; small blue outlined marker travels right. |
| Factory detail → wide | 16.45–20.6 | 04:11.45–04:15.6 | Cut from room to a ground/bicycle detail, then very strong pullback reveals a monochrome factory, fence and foreground ground against a separate sky. |
| Rivalry tableau | 20.6–28.7 | 04:15.6–04:23.7 | Narrow red/blue panels turn/reveal facing metallic portraits. Brand panels sit behind; flames attach to eyes; foreground fire rises over the lower factory. |
| Fade and pause | 28.7–32.8 | 04:23.7–04:27.8 | Actual fade to black, then a substantial black interval. This pause is intentional structure, not an occlusion passage. |
| Chapter assembly / retreat | 32.8–39.5 | 04:27.8–04:34.5 | Individual blurred, displaced letters assemble into CHAPTER 2 / THE NAZI OLYMPICS, settle, then recede centrally. Footwear-like props drift at different sizes/depths over red/blue atmosphere and translucent geometric panels. |
| Chapter exit / athletics entry | 39.5–43.4 | 04:34.5–04:38.4 | Title fades through black; outdoor scene exposes, with monochrome team against blurred buildings and a blue-gray sky. Team layer changes size/placement as it settles. |
| Salesman and team | 43.4–47.8 | 04:38.4–04:42.8 | Back-facing salesman with a bag rises into the nearer center. Team/background recede. No clear walking gait is demonstrated here; do not add one by default. |
| Tree occlusion | 47.8–49.4 | 04:42.8–04:44.4 | Green foreground tree travels screen-right to screen-left. Old team scene remains left while a new factory tableau appears on the right beneath the foliage. |
| Older brothers / factory | 49.4–52.1 | 04:44.4–04:47.1 | Two older photographic figures lean behind a small factory façade; one has a selectively red tie. Gray foreground surface and blue sky remain separate layers; slow approach. |
| Pose/depth handoff | 52.1–52.902 | 04:47.1–04:47.9 | Near factory/figures slide and enlarge toward screen-left; an outdoor factory and arms-open pose appear to the right. Upload ends during this movement; destination hold is not supplied. |

## Merged evidence table

No new annotated screenshots accompanied this upload. The user observations below are review requirements from the conversation, not invented claims about annotations.

| ID | User requirement | Independent finding / verdict | Cause or inference | Proposed implementation and controls | Observable acceptance |
| --- | --- | --- | --- | --- | --- |
| N01 | Separate camera motion from cutout movement | Confirmed relative room-layer movement. Eye patch shrinks to .84; window patch to .88 between 4.501 and 6.505 s. | 2.5D camera/layer staging is sufficient; original scene graph unknown. | Separate two people, room, shelf/window objects; approach, lateral direction, focus, layer depth, start/end. | Both silhouettes and window stay registered at entry/middle/exit without duplicate-room dissolves. |
| N02 | Editable titles and image fills | Confirmed SALES and MANUFACTURING are foreground words; latter builds left to right. | Glyph reveal plus textured silhouette fill; exact font/texture is unresolved. | Reuse `shared-texture-fill`; editable text, font, color/image, reveal direction, per-letter delay, hold and fade. | Reveal reaches complete spelling; fill never spills beyond glyphs. |
| N03 | Notice small details | Confirmed thin white barbed-line graphic and moving blue outlined marker. Exact marker identity unresolved; isolated native-resolution crop is in blue-marker-detail.png. | A drawn line and independent marker are visible. Whether the blue symbol is intentional motion graphics or a captured overlay remains unresolved; verify before making it a production asset. | Path points, draw duration, barb spacing, marker source/color/speed; parent to scene or screen explicitly. | Marker stays on its path; no unrelated electricity effects. |
| N04 | Test zoom explanation | Confirmed strong factory pullback. Façade and brace scale similarly (.43 and .44). | Dominant uniform photographic zoom explains this better than assuming a full 3D building. Room is still visible at 16.414; factory ground at 16.480. | Cut at this boundary, then anchored scale/position move; factory photograph/cutout, separate sky, optional shallow fence. | Ground/bicycle close-up precedes whole-building view; do not dissolve the room into the factory. |
| N05 | Track order, attachments, local light | Confirmed inward-facing portraits over brand panels, local eye fire and separate bottom fire. True volumetric head rotation unresolved. | Narrow-to-wide reveal suggests yaw/card rotation; shaded source art can supply most volume. | Illustrated head cutouts/planes first; separate red/blue backing, correct logos, local eye masks parented to heads, lower temporal fire layer. | Eye fire follows each face; panel order and profiles survive the reveal; factory remains visible between heads. |
| N06 | Distinguish transition types | Confirmed genuine fade/black intervals before and after chapter. | Temporal punctuation, not missing image or a cloud wipe. | Separate fade-to-black, black-hold and fade-in controls. | Black intervals remain; no accidental next-scene bleed. |
| N07 | Analyze the complete title animation | Confirmed displaced/blurred individual glyphs assemble and the finished title shrinks centrally. | Depth-staged text and props; flat opacity-only title would fail. | Glyph offsets/depth/blur/delay; assembled scale, retreat duration, gradient/color/image; prop sources, seeded paths, rotation and depth blur. | Scattered letters resolve cleanly; finished title stays readable while receding; near props are softer/larger than distant ones. |
| N08 | Granular depth and contact | Confirmed layered team/background/near salesman. Team scale .82 vs background-tree patch .85 in matched samples. | Common pullback plus differential layer motion; not proof of physical walking. | Background, team cutout, foreground salesman/bag and ground contact separated; entry rise, scale/path, focus, foot anchor. | Salesman overlaps team correctly; feet/bag do not float; no invented gait. |
| N09 | Occlusion instead of an inappropriate fade | Confirmed moving foreground tree bridges simultaneous old-left/new-right scenes. | Scene clip boundary travels beneath foliage; porous leaves alone are not enough to hide the join. | Direction, crossing time, tree source/scale/blur; moving scene-boundary mask beneath tree; common sky clock. | Tree hides the join without whole-frame crossfade, halo or sky jump. |
| N10 | Correct identities and color details | Confirmed two older men, red tie, small factory; later arms-open pose. Historical identity of every pictured source is not independently verified here. | Pose variants should share an intended character ID; do not reuse the earlier young boy automatically. | Character/pose bindings, age/context metadata, independent factory and surface, selected red mask. | Same intended person across pose change; red stays on tie; figure hands do not become rigid building texture. |
| N11 | Analyze entry, hold and exit | Confirmed clip ends during the lateral/depth handoff. Destination hold unresolved. | Partial evidence at the file boundary. | Render only the evidenced motion; reserve next-shot continuation and exact easing until overlapping reference is available. | No invented stop at the last supplied frame. |
| N12 | Prevent past timing errors | Confirmed no verified overlap with previous shoe-diagram ending. | Earlier source-clock mapping was provisional. | Record separate source/clip/review clocks and a missing-bridge flag. | A verified diagram/window/portrait join before final continuous export. |

## Deterministic measurements

| Tracked patch | Exact clip PTS | Later / earlier scale | NCC | Interpretation |
| --- | --- | ---: | ---: | --- |
| Frontal portrait eyes | 4.501 → 6.505 | .84 | .993 | Recedes, moves right; about +109 px horizontal and +27 px vertical in its patch center at 960×540. |
| Window | 4.501 → 6.505 | .88 | .983 | About +101 px / +19 px. Similar overall retreat but not an identical rigid transform to the face. |
| Factory façade | 17.190 → 19.416 | .43 | .836 | Large pullback; texture patch is partly affected by filtering. |
| Near factory brace | 17.190 → 19.416 | .44 | .982 | Agrees closely with façade scale; supports a dominant photographic scale move. |
| Chapter title | 33.997 → 38.497 | .70 | .956 | About 30% narrower, remaining close to the image center. |
| Left athletes | 43.508 → 46.772 | .82 | .914 | Team recedes and moves up/right while nearer salesman enters. |
| Athletics background tree | 43.508 → 46.772 | .85 | .958 | Background retreat differs slightly from team, supporting separate layers. |

The original broad face template returned a misleading 1.04 scale, and an occluded central-team template matched a roof. Both were rejected after visual checks and replaced with unobstructed eyes/left-athlete patches. Rejected values are retained in `rejected-measurements.json`. Do not treat a deterministic match as truth without checking the corresponding image region.

## Narrative context for later AI editing

The role labels distinguish sales from manufacturing; the paired room and factory establish cooperation. The opposing brand portraits and fire foreshadow the later family split. The black pause and chapter card reset the story. Team, salesman and bag visualize outreach to sports clubs; the older figures and factory visualize expansion. These are editorial interpretations supported by the supplied transcript, not proof of original production intent. Keep script anchors and asset identity separate from reusable movement.

## Asset and representation plan

Preserve all V64 originals and alternatives. Before generating anything, match existing room, frontal boy, footwear props, official logos, fire and cloud tools against these frames. Source images are references; generated artwork must be labeled illustration, not archival evidence.

1. Room: side-facing seated Rudi, frontal Adi, clean warm room/window/shelf, separate foreground objects when their overlap requires it. Prefer photographic cutouts and existing room-depth system over an anatomical 3D rebuild.
2. Factory: one faithful period factory façade/building source, local fence/bicycle/ground detail, clean sky matte and optional shallow foreground plane. The measured pullback does not justify a full building model by itself.
3. Rivalry: two correctly oriented stylized metallic heads, red/blue backing panels, proper brand logos, separate local eye fire and a temporal lower fire bed. Test shallow yaw before committing to full 3D sculpting.
4. Chapter: editable glyphs, gold/white treatment, atmospheric red/blue field, translucent geometric cards, reusable footwear-like props at several depth/blur levels. Do not bake title words into an image.
5. Athletics: clean blurred outdoor plate, monochrome team, back-facing salesman with bag, ground contact/shadow, independent sky and foreground tree. Keep the salesman path separate from a walking rig.
6. Factory expansion: two older figure cutouts (red tie separately controllable), small factory frontage/roof, perspective surface, matching arms-open pose variants and outdoor-factory layer for the final handoff.

Use the least complex representation that passes a matched-frame test: identical composition/camera for photographic layers versus shallow geometry; retain true 3D only when it visibly improves changing silhouette, perspective or overlap. The source does not prove every building or head is a full 3D model.

## Proposed reusable actions and simple controls

These IDs are proposals, not already-installed actions. Reuse existing `shared-texture-fill`, `soft-focus`, `living-cloud-sky` and fire actions where suitable.

| Proposed ID / easy search terms | Primary controls | Collapsed calibration |
| --- | --- | --- |
| `role-portrait-parallax` / sales, manufacturing, two people, room swap | Replace person/background, direction, size, timing | Focus, independent layer depth, crossing anchors |
| `textured-word-write-on` / letters, typing, image inside text | Text, image/color, start, reveal speed, hold | Glyph delay, fill offset/scale, per-letter blur |
| `barbed-path-marker` / wire line, blue marker, moving point | Path, marker, start/end, speed | Barb spacing, path sampling, parent layer |
| `factory-photo-pullback` / building, zoom out, factory reveal | Replace building/sky, start/end scale, focus, duration | Ground/fence depths, separate blur |
| `opposed-rivalry-reveal` / two faces, rivalry, red blue | Replace two faces, panel/logo, reveal duration | Yaw, eye masks, fire timing/scale/light |
| `scatter-chapter-title` / chapter, flying letters, floating shoes | Text, color/image, assembly, retreat, props | Per-glyph depth/blur, seeded paths, rotation |
| `team-depth-introduction` / sports club, salesman, foreground person | Replace team/person, entry direction, size, timing | Ground anchor, layer depth, bag parenting |
| `tree-occlusion-pass` / tree wipe, foliage, left/right transition | Replace tree, direction, crossing duration | Scene-boundary mask, blur, shared sky clock |
| `factory-pose-handoff` / factory, people, side move, pose change | Replace people/building, direction, duration | Depth ordering, yaw, focus, pose-source mapping |

Observed reference timings and measured scale ratios remain separate from eventual template defaults. Final defaults will be written numerically only after the selected asset crops and coordinate systems are calibrated. Standard speed, reverse, pause, start/exit and optional slow/fast timing belong to each reusable instance.

## Implementation order and review gates

1. Resolve the missing opening bridge; independently prepare the fully evidenced scenes. Preserve the old source-clock estimates as superseded, not silently rewritten history.
2. Establish source identities, crop bounds, separate layers and contact points. Match scene composition before adding particles.
3. Calibrate room crossings, factory pullback and the final two lateral/depth handoffs. Check beginning/middle/end frames together.
4. Add local eye fire, lower fire, text-image masks, focus hierarchy and selective color. Test full-motion attachment, not just still appearance.
5. Add glyph assembly and drifting props; preserve real black pauses; align narration/audio later with actual listening or verified transcript timing.
6. Review encoded output beside the reference at native speed and 0.25×. Pixel/attachment/source tests support that review but do not establish visual fidelity.

Unresolved: exact missing bridge timing; original project geometry; all chapter prop identities; exact typeface and fill source; hidden head/back surfaces; final destination hold; native-master audio/frame synchronization. No visual implementation is claimed in this report.
