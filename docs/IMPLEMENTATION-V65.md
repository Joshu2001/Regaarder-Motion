# V65 — layered chapter continuation

Implemented from the supplied nominal 03:55–04:47 reference. Clip PTS is authoritative inside this continuation; the filename-to-master mapping remains approximate. Reference first PTS 0, last PTS 52.902. Template duration 52.95 seconds. No sound effects or narration invented.

## Sequence and editable structure

| Clip seconds | Implementation | Main controls |
|---|---|---|
| 0–3.0 | Seated portrait in layered room; textured SALES reveal | Sources, word, fill, size, reveal start/duration |
| 3.0–4.4 | Lateral overlapping frontal-portrait handoff | Room direction, handoff start/end, independent layer offsets/depth |
| 4.4–10.7 | Shared retreat; MANUFACTURING writes left-to-right | Retreat amount, word/fill, reveal times |
| 10.7–16.45 | Two portraits and white barbed line | Per-person media/placement; line onset; optional blue marker off by default |
| 16.45–20.6 | Cut-like ground detail to factory pullback | Initial zoom 4.8, exponential decay 1.4/s; textured earth uses perspective bands with editable horizon, roughness, texture scale, contact shading, grayscale and brightness. Factory, fence and bicycle have independent soft contact shadows, placement and scale controls. |
| 20.6–30.3 | Opposing panels/metallic heads/logos; local eye fire; lower fire; fade | Panel yaw 84°, head width 520px, eye UV anchors, fire size/strength, fade times |
| 30.3–32.8 | Black interval | Chapter title start |
| 32.8–41.2 | Scattered blurred glyph assembly; 30% title retreat; props; fade | Both lines, image/color fill, scatter/blur/delay, prop sources/count/speed |
| 41.2–42.2 | Black interval | Sports start |
| 42.2–47.8 | Team reveal/retreat; standing back-facing salesman rises | Twelve independent athlete bindings, team count/retreat, horizon blur, salesman timing/size |
| 47.8–49.4 | Foreground tree covers moving old/new scene boundary | Four travel directions, start/end, tree width/blur and source |
| 49.4–52.1 | Two leaning older portraits behind front-on workshop | Independent portraits/factory placement/size/depth |
| 52.1–52.95 | Lateral/depth pose handoff, ending mid-motion | Four directions, 1400px/s, separate arms-open sources |

The diagram-to-room join uses a wooden moving occluder, duration 1.042s. It is **authored and provisional**: the missing bridge reference was not supplied. It is not evidence of the original transition. The last pose handoff deliberately remains unfinished because the reference ends during movement.

The ground revision replaces the flat gray fill with 24 depth-scaled texture bands, seeded earth variation and a receding ground plane. The factory, fence and bicycle have individual soft ground shadows; the bicycle and fence scale/position are now separately adjustable. In the 18-second comparison, the reconstruction has a continuous dark earth plane, while the reference has brighter uneven soil, grass and rubble. Exact ground artwork remains a known fidelity gap; the texture and perspective treatment are editable to tune it.

## Representation and assets

Uncertain depth defaults to separate image planes. The factory's strong pullback does not prove true 3D in the reference; this implementation retains a layered photographic treatment. No arbitrary image-to-3D reconstruction claim is made. The bicycle is exported from the project's editable local geometry recipe; its model JSON is retained. Portraits, heads, team, salesman, foliage, horizon, factories and props were generated as project-specific bitmap assets. Exact prompts, input references and original generated paths are recorded in `dist/assets/chapter-generation-v65.json`. All original bytes remain distributed. Atlas sections have distinct source slots, so replacing one athlete/person/prop leaves the others intact. Runtime alpha threshold 110 removes translucent backdrop halos; retained alpha is made opaque, then tightly bounded. This can produce harder hair/foliage edges than the original.

## Editing

Open the new chapter controls. Search/select a layer, replace its image, move it, resize it or change visibility. More controls expose depth, rotation, light and blur. Words and their image/color fills are separate controls. Event times are in clip seconds. Independent Animation Library actions inherit shared speed, reversal, pause and slow/fast clocks. Exact defaults and implementation hashes are generated in the animation Markdown/JSON registry. The pose artwork is not a retargetable skeletal rig; the salesman is a standing cutout, not a fabricated walking animation.

## Review findings and limits

Confirmed implemented: overlapping room handoff, fitted foreground manufacturing word, factory pullback, paired rivalry reveal, glyph assembly, title retreat, layered team/salesman, tree-covered scene switch and pose handoff. Structural tests verify independent sources, migration without overwriting custom durations, eye-anchor parenting and preservation of shared canvas transforms. They do not prove visual fidelity.

Composite review caught and corrected room-edge exposure, text overflow, a chapter image-fill branch error and direction-dependent incoming pose placement. Generated likenesses, room architecture, factory artwork, metallic sculpture style and exact flame silhouettes remain approximations. The room/window separation is authored from the existing room source; it is not recovered reference masking. Browser interaction and user-tested ease of editing remain unverified. Offline render QA is separate from those limits.

## Final export validation

New continuation:1589 frames,52.966667s. Full review:5709 frames,190.3s. Comparison:1589 frames,52.966667s. All30fps and silent. Strict ffmpeg decoding passed for all three. Sampled decoded final exports were visually inspected; structural/editor checks remain separate from visual matching. All pre-V65 asset bytes match V64.

Final side-by-side inspection identified early tree coverage. Corrected the tree width to600px and gave the scene boundary a squared smooth progression with0.7×width offscreen travel margins. At48.5s the team remains exposed while foliage enters at the far right. This is an authored timing approximation tied to visible evidence.
