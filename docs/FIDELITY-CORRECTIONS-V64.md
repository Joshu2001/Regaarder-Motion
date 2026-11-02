# V64 — feedback audit and visual corrections

Implementation authorized by Joshua: audit earlier unresolved problems, keep falling cables visible in the zoom, approach the character more closely, fix unattached cables, animate both arms and replace the adult walker with a younger boy. Applied Joshua's Visual Review. Original/rejected assets and V63 exports are preserved separately; no publication or push.

## Evidence and time base

Reference is the original column recovered from `review/Motionclone-v63-reference-comparison.mp4`, 640×360, silent. It is not a native master. Canonical continuation times are used below; the full review adds 66.082 seconds. Independent evidence check followed the visible user feedback, so it was not blinded. Matched states: 13.4 entrance, 17 approach, 20 failure, 23.5 close approach, 25.2 lateral passage, 29 salvage, plus walking phase steps. Source code and alpha were checked for attachment and identity causes.

## Merged audit

| Feedback / earlier issue | Evidence and cause | V64 correction / status |
| --- | --- | --- |
| Falling cables disappear during zoom | Confirmed perceptually. V63's 2.1-second fall had already settled; deep spans plus a blanket wall clip reduced visibility. | 8.2-second failure; explicit three leaning supports, two released connected spans and three roof braces. Depth-aware wall hiding replaces the blanket clip. Fixed in authored motion; exact original mechanics remain inferred. |
| Zoom does not approach the cutout enough | Confirmed. Existing zoom was real but too small and incorrectly composed. | Camera forward travel 5.55 world units, actor depth 7.2, height 2.05. Late apparent height exceeds 4× entry, upper body fills the late frame while head remains visible. |
| Character exits too soon in late pan | Confirmed in encoded V63 comparison. | Editable screen tracking retains the actor; default final center is 800/960 pixels, with foreground continuing screen-right. This is explicit 2.5D staging, not a recovered physical camera solve. |
| Unattached salvage wire | Confirmed: U .92 / V .14 landed in transparent sky beside the wall. V63 geometry binding alone did not ensure contact. | Default anchor .855 / .25 lies on masonry, with three visible wall mounts. Reach is 10 world units; a modeled terminal support remains at B if it enters frame. Offscreen architecture is authored, not verified from reference. |
| Adult instead of younger boy | Confirmed source-binding error. | New photographic adolescent source is the production default. Original adult and mesh atlas remain recoverable. Generated age is an artistic approximation. |
| Only one hand visibly moves | Qualified: both had code, but the second movement was insufficient; stronger amplitudes exposed hard segmentation gaps. | Arm swing 15°, elbow 8°, wrist 4°. Separate near/far arm factors 1.15 / 1. Continuous weighted photographic arm deformation replaces hard strip cuts. Largest connected alpha component removes detached source-mask fragments. Torch point uses the same deformation function. |
| Distant ruin too uniform / broad | Confirmed silhouette difference. | Reversible isolated broken-wall matte retains right tower and bottom rubble; full original ruin remains available. Terrain relief rises from .035 to .12 model units. Street architecture remains an alternative photograph. |
| Sky color / clouds | Reference salvage exposes stronger crimson than V63's muted purple-red. Cloud time evolution already exists. | Salvage brightness .82, crimson #ba1022, density .68. Deterministic moving/evolving cloud field retained. Exact original cloud shape and smoke are not recovered. |
| Portrait surround, selective color and overlap | V63 already broadened mat and increased portrait approach. Window/wall identity and exact lighting still differ. | Preserved; not relabeled as newly solved. No new portrait asset substitution. |
| Room vase placement and depth order | Earlier separate layers and controls retained; no new full-resolution reference was recovered this task. | Preserved; exact placement remains qualified, not newly certified. |
| Paper/shoe motion and original shoe appearance | Previously approved corrections retained; user deferred minor shoe detail. | Preserved; no shoe appearance replacement. |
| Fire, lightning, smoke | Early fire, repeated lighting cues and moving smoke remain present; exact shapes/timing still approximate. | Preserved with corrected salvage sky balance. Not claimed to be original temporal footage. |

## State sequence

- 12.95: supports begin moving before street entrance. Roof-mounted overhead spans retain their surface relationship.
- 13.3–21.7: approach overlaps support lean and connected cable sag; events do not disappear before the zoom.
- 21.7–23.2: damaged structure holds while camera continues forward.
- 23.2–25.4: actor grows and moves to the right portion of frame; near wall progresses right.
- 25.4–27.5: opaque facade covers the shot change. Actor remains present beneath the occluder.
- 27.5 onward: younger boy searches among uneven terrain, torch follows far hand; cables begin on solid tower masonry and terminate on a declared support.

## Editing without code

Use Next chapter → Quick edit. Main controls remain replace, size, position and timing. Advanced controls are collapsed.

- Camera approach, person size/depth/X; **Keep person in frame** and **Person final screen position**.
- Wires start falling, fall duration, thickness, sag; tap image to place roof or wall attachment.
- Near arm movement and torch arm movement are independent. Shared swing, elbow and wrist remain editable.
- Isolated broken wall toggles full ruin artwork recovery. Uneven terrain controls relief.
- Original adult is retained in the searchable asset catalog; replace the complete image to recover it. Custom source swaps require calibrated masks; arbitrary anatomy is not automatically recovered.
- Factory-value migration archives replaced V63 values once; custom values and replacements are retained.

Exact factory values and source hashes are generated in the human/AI-readable animation registry. Stable effect IDs remain `classic-walk-with-hands`, `grounded-photographic-walk` and the continuation effects. Media identity remains separate from movement.

## Validation and limits

Final exports must be decoded and checked at entry, middle and exit, including both walking arms and torch, before delivery. Functional checks cover roof/photo projection, support-span contact through the failure, close framing, masonry anchor transform, rendered foot bounds and tap controls. Functional success is not visual acceptance.

The photographic street still differs in building geometry, road shape, rubble distribution and depth detail. The walker remains an articulated photographic puppet, with vertical contact correction rather than horizontal foot locking or recovered 3D anatomy. Terrain is authored shallow geometry. Visible wall mounts and terminal support are authored connective geometry. No reference-perfect, fully physical or child-tested result is claimed. Audio is unavailable in these reviews.

Final functional result: 53/53 checks passed. Later source-mask corrections were rechecked against the animation registry, history painter, shared camera and walking attachment checks. A byte-exact V63 renderer is retained for the adult-versus-young comparison. Final decoded visual review remains distinct from these checks.

Encoded review exposed a red terrain/ruin fringe: fractional cutout alpha replaced ground pixels in the CPU depth buffer. Ruin-only alpha cutoff (160/255) now discards fringe samples and keeps retained samples opaque. GPU shader receives the same per-material rule; its native-browser execution is not independently verified. Clean ruin edge is editable; other materials retain their prior alpha behavior.

Attachment editing guard: tapping empty sky or a transparent window in the salvage picture snaps to the nearest opaque source pixel, preventing the same floating-end placement error during simple edits. The saved U,V remains editable.
