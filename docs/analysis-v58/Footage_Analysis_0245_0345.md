# Reference footage analysis — paper reveal through shoe diagram

Analysis only ·29 October2026 · No template edits or production assets created.

## Read this first

The supplied file is named `The Nazi Brothers Who Started Rival Shoe Companies - MagnatesMedia (1080p, h264)_02-45.0_to_03-45.0.webm`, but its decoded video timestamps extend from0.000 to71.242seconds. Use **clip-relative times below**, not an assumed60-second duration. The filename’s02:45 offset is provisional: adding165seconds does not establish alignment to the master video or transcript.

Source:1920×1080,1139 decoded video frames, irregular timestamp spacing and one duplicate video timestamp. The file also contains audio, but this report does not claim listening, sound interpretation or word-level synchronization. Native-speed playback was not reviewed. Timing brackets below describe inspected visual states; source frame intervals reach0.269seconds, so subframe precision is not claimed.

Method: inspect72 near-whole-second samples across the entire file, then52 targeted samples around transitions; compute grayscale frame differences across the decoded sequence to locate abrupt changes. Large frame differences can mean cuts, fast motion or occlusion—not automatically a cut. Contact sheets preserve actual timestamps. Source hash and all decoded timestamps are attached in `source.json`.

**Observed** means directly visible across inspected frames. **Inferred** means a plausible technique that would reproduce the visible result. The original software, asset topology and exact production process are not established.

## Sequence map

| Clip time, approximate | Visible event | Main motion/transition |
|---|---|---|
|0–0.8s|Crumpled printed object leaves while gray sheet enters|Overlapping tumble/bob and rightward exit; incoming sheet from upper left|
|0.8–2.2s|Woman’s room is uncovered|Large gray flap opens toward the right, revealing a rough-edged printed picture|
|2.2–3.5s|Woman’s picture settles and enlarges|Gentle push; irregular paper border and shadow remain|
|3.5–5.1s|Window brightens and boy replaces woman|Aligned room-image overlap; monochrome outgoing image and colored incoming image coexist|
|5.1–12.0s|Boy’s face becomes larger|Continued push; room/window/cloth retain context; vase clears toward lower left|
|12.054–about13.3s|Black transition|Abrupt loss of portrait, followed by a dark scene emerging|
|about13.3–17s|Ruined street, back-facing figure, explosion|Explosion/fire contracts or dissipates into a dark smoke plume over a saturated red sky|
|17–25.4s|Approach toward figure and ruins|Strong forward perspective movement; near façades expand faster than distant rubble|
|25.4–27.5s|Street becomes side-on rubble scene|Near façade passes across the view as an opaque occluder|
|27.5–36.2s|Walking searcher and helmet|Articulated walking, moving triangular beam; low camera/closer framing; yellow helmet highlight|
|36.282–39.5s|Cables and ruined masonry detail|Rapid reframe from helmet/boots to wall-and-cable area; selected cables glow|
|39.5–45.2s|Wider search scene returns|Walker, beam and several highlighted salvage objects become visible together|
|45.243–46.8s|Rubble gives way to bicycle setup|Rubble moves up; dark lower stage and bicycle enter from below|
|46.8–55.3s|Wheel, label and brown shoe|Rotating wheel/spokes, a leader label, lateral camera/composition travel and shoe enlargement|
|55.3–61.2s|Shoe-on-foot scene and additional feet|Aligned shoe transition, foreground leg/boot occlusion and layered walking feet|
|61.2–65.9s|Magnifying glass scans shoe|Moving circular lens with a synchronized enlarged scene; lens/frame/handle overlap subjects|
|65.963–70.7s|Paper shoe-development diagram|Shoes appear along a white dashed curved route; slight composition movement|
|70.7–71.242s|Next transition begins|Large blurred frame-like/foreground forms cross the diagram; destination is outside this clip|

## 1. Crumpled object and opening sheet:0–3.5seconds

**Observed:** the small printed object changes its visible folds/orientation and moves to the **right**, disappearing there. Its silhouette changes, so this is more than sliding a rigid circle. At the same time a much larger gray shape enters from the upper left. A corner of the room image appears around0.8s; by1.4s much of the window, vessel and woman are visible; the right edge finishes opening over the next second or so. The sheet has an irregular outer border, a shaded reverse face and a contact/drop shadow.

**Interpretation:** two independent animated surfaces overlap in time. The incoming picture is being uncovered by a folding/curling sheet, rather than arriving as a rectangular wipe or a whole-card180° flip. A gray reverse face swings toward the right and flattens as the printed front becomes visible.

**Proposed reconstruction after approval:** retain the accepted crumple appearance, replace the straight left exit with a rightward tumbling/bobbing path, and add a separately timed deformable sheet reveal. Use a common paper material for visual continuity. Expose position path, rotation, bob amplitude, exit timing, fold hinge/edge, curl, flatten time, paper thickness/edge shading and shadow. The horizontal paper crease stays aligned with the surrounding paper during much of this stage; keep paper grain/crease as a controllable overlay/material rather than treating it as a room-wall feature. The route is not established as a mathematically exact circle; a controlled curved path with independent rotation is safer than assuming a perfect orbit.

Evidence: `focus-page-1.jpg`, first six frames. Proposed reusable names: `paper-tumble-exit` and `paper-unfurl-reveal`; these are analysis proposals, not implemented registrations.

## 2. Woman/window/boy overlap:3.5–5.1seconds

**Observed:** at3.494s the woman’s grayscale image is still clear. By3.962s the brighter window and a faint boy are already present while the woman remains visible. At4.462s the colored boy and incoming room are strong, yet the woman is still ghosted to the right. By5.004s the woman is nearly gone. The picture grows until the paper border approaches/leaves the view; the picture starts to read as a room rather than a small paper object.

This supports Joshua’s brightness hypothesis: **the brighter incoming room/window becomes visible during the overlap**. A separate flash/sunlight animation is not necessary to explain the visible change and is not confirmed by these frames. Start with matched room-image blending, then add a separate light curve only if comparison requires it.

**Vase/depth caution:** there are at least two room compositions being mixed. Their window, cloth, vessel and furniture differ in framing. A visible vessel edge can belong to the outgoing room while the boy belongs to the incoming room. That can make the boy appear to move in front of a formerly foreground vessel without the same physical vessel changing depth. Do not assign one vase a sudden front/back switch solely from the blended image.

**Proposed reconstruction:** two internally layered room groups, aligned on window landmarks, sharing the picture-frame push. Crossfade the groups with separate editable onset/finish; preserve each group’s own object order. Track the woman, boy and both vessel silhouettes before deciding whether independent opacity delays are required. Keep the incoming scene clipped to the expanding paper picture until the border clears. A plain full-screen fade misses that picture-to-room continuity.

Evidence: `focus-page-1.jpg` at3.494,3.962,4.462,5.004s and the supplied annotated window/boy screenshots.

## 3. Boy push and dark exit:5.1–13.3seconds

**Observed:** the boy remains the focus as framing advances from upper-body portrait to a close face. Window, cloth and shelf remain recognizable while their framing changes. The left vessel is increasingly cropped/clears low-left; it need not be animated to appear late or switch behind the boy. Face shape stays stable across these samples—no visible need for face/body deformation. A strong change occurs at12.054s, which is black;12.487s and12.985s are also black samples. By13.393s a dim ruined street is visible.

**Proposed reconstruction:** continuous focus push with source-preserving depth layers; camera framing and clipping should explain vessel clearance first. Retain sclera/face detail and avoid stretching the portrait. Add an explicit black interval between portrait and street rather than overlapping both through the whole transition. The exact exit ramp before12.054s needs adjacent-frame matching; the inspected change into black is abrupt.

Evidence: overview page1 and focus page1. This revisits the existing later-color portrait; it should not redesign the boy asset.

## 4. Ruined street and explosion:about13.3–25.4seconds

**Observed:** a rear-facing figure stands centered in a devastated street. Buildings/rubble are monochrome against a red moving sky. A bright orange/yellow fire/explosion mass is visible above/beyond the figure at13.393–16.402s, then a tall dark smoke plume dominates by about17s. The camera approaches: the figure grows and nears the bottom edge; nearby façades expand strongly relative to the background. Wires and the street’s converging lines reinforce depth.

**Interpretation:** this scene has stronger depth/perspective cues than the earlier static lookout. A single globally zoomed background would not reproduce the foreground façade traversal and near/far relationship. Nevertheless, frames alone do not prove whether the original used full3D, projected/scanned geometry, depth layers or a prerendered clip. Nor do they prove the man is performing a walk cycle in this rear view; camera motion accounts for much of his size change.

**Proposed reconstruction:** a shared camera moving through staged street/ruin geometry or depth planes, an independent rear-view figure, separate red-sky media, separate fire/explosion and smoke. Put fire relative to the street depth, not attached to the person’s head. Keep explosion, smoke and sky brightness independently editable. The current template’s late fire/figure scene is only a rough placeholder for this choreography.

Evidence: focus page2 at13.393,14.226,16.402,24.603,25.364s; overview pages1–2.

## 5. Foreground architecture passage:25.4–27.5seconds

**Observed:** the figure moves out toward the right edge as a close building façade dominates the right/center. That façade travels across the view; the next rubble layout is uncovered on its left and then fills the screen. The red sky provides continuity across the passage.

**Interpretation:** an opaque foreground architectural occlusion, not a dissolve. A lateral camera move and depth-separated wall are plausible. The shared world/sky makes it feel like entering another part of the ruined environment.

**Proposed reconstruction:** reuse the existing spatial-passage family, with a replaceable textured building façade and a camera path matched to these frames. Preserve foreground depth, source/destination camera framing and sky continuity. Do not replace the façade with an arbitrary black rectangle if its windows/arches are visible.

Evidence: focus page2 at25.364,25.821,26.384,27.526s.

## 6. Walking searcher, beam and salvage highlights:27.5–45.2seconds

**Observed:** a side-view man crosses uneven rubble. Leg poses change, demonstrating articulation; a rigid sliding cutout is insufficient for this part. A pale triangular beam points down/right from near his hand and moves with him. At33–35.8s the view is close to his boots and a helmet in the foreground. The helmet gains a yellow highlight. A rapid reframe occurs near36.282s to ruined masonry and cables. Around37–39s the cables glow yellow; a glowing strip is also visible along the right structure. Around39.5–40.1s the wider walking/search scene returns. Several small objects/strips on the ground become yellow-highlighted in the wider composition.

**Interpretation:** foreground prop callouts are being emphasized selectively; this is not simply tinting the entire scene yellow. The triangle reads as a stylized searchlight beam. The exact physical light simulation is unconfirmed. The large image change at36.282s may be a cut or a very rapid camera reframe; the timestamp spacing does not resolve a smooth camera route, so I would not invent one.

The supplied transcript thematically describes gathering leather, helmet material and string, but filename-based clocks do not align well enough here to assign exact spoken-word cues. Those links must remain provisional.

**Proposed reconstruction:** an animated walking source/rig or controlled motion clip, a ground/contact path, an attached editable beam and independent prop masks for timed glows. Preserve the grayscale/red palette. A single generated still cannot supply a convincing gait; that asset choice needs approval before production. Use a reusable focus/callout action for helmet, cables and other materials with per-item start/end, tint, glow, intensity and camera framing.

Evidence: focus pages2–3 and overview pages2–3. Proposed names: `salvage-walk-searchlight`, `material-focus-highlight`. Full3D versus video/rig source remains a production choice, not a confirmed fact about the reference.

## 7. Rubble-to-bicycle vertical passage:45.243–46.8seconds

**Observed:** the ground/rubble sweeps upward, with the walker remaining briefly at the top. A dark lower area enters below. At46.203s bicycle handlebars are visible entering from below; by46.766s the wheel and bicycle front dominate. This is spatial movement through a foreground ground edge/dark bridge, rather than an ordinary opacity fade.

**Proposed reconstruction:** reuse the vertical version of the existing spatial-passage action. Stage the bicycle scene below the rubble scene, carry a near ground edge upward and keep both cameras continuous. The dark bridge should arise from the composition/occlusion, with its duration editable; avoid an unintended stationary black pause.

Evidence: focus page3 at45.243,45.598,46.203,46.766s.

## 8. Bicycle wheel, callout and brown shoe:46.8–55.3seconds

**Observed:** the wheel/spokes change orientation, consistent with wheel rotation. A bold white two-line label, “LEATHER TRIMMER”, appears to the right with a thin leader pointing toward the wheel/rim area. The framing moves laterally and the wheel leaves toward the left. A brown shoe enters from the right and enlarges in a largely side-on presentation, while the bicycle remains partly behind it. The label becomes less prominent/disappears as the shoe takes over.

**Interpretation:** separate wheel rotation, camera/composition movement, label/leader and product presentation. The clip does not show enough of the actual cutting linkage to infer a mechanically complete leather trimmer. Do not invent gears or a demonstrated contact mechanism from the label alone.

**Proposed reconstruction:** a rotating wheel/bicycle layer or model, hub-centered spin, separate label/leader and a photo-like brown shoe source. Preserve the shoe’s source appearance. A cutout can handle the visible side-profile movement; any newly visible3D view would require additional source views or suitable geometry. Keep rotation speed, camera movement, label timing, leader anchor and shoe scale/position independently editable.

Evidence: focus pages3–4 at46.766,48.987,51.049,52.525,54.486,55.218s. Proposed names: `wheel-drive-callout`, `shoe-product-handoff`.

## 9. Shoe handoff, walking feet and magnifying glass:55.3–65.9seconds

**Observed:** the brown shoe is replaced by a dark shoe attached to a trouser leg in approximately the same region. By55.788s the dark shoe/leg is visible while bicycle elements remain behind it. A large dark foreground shoe/trouser crosses the left side, covering much of the view around56.4–59s. Several legs with distinct trouser colors and spiked shoes are then visible at different positions/depths. Their changing leg and foot poses suggest walking rather than rigid whole-image translation.

Around61.2s a magnifying-glass rim/handle enters. Its circular interior shows a larger, spatially offset view of the same moving shoe/leg scene. The glass scans across the foreground foot while other feet remain visible outside it. Lens rim and handle occlude the scene. Near65.5s the lens/view swings or moves out, followed by the diagram at65.963s.

**Interpretation:** a matched-position shoe handoff followed by foreground occlusion. The brown-to-dark replacement could be a blend or tightly timed cut; a physical morph is not established. The magnifier should sample the same current scene time, not display a static pasted shoe. Exact refraction/distortion strength is not measured.

**Proposed reconstruction:** preserve both shoe sources, align toe/sole anchors for the handoff, then use separately depth-ordered articulated feet/legs. Reuse foreground occlusion for near passes. Render the walking scene once to a buffer, then sample a scaled region through an editable circular lens with its own rim/handle, magnification, path, feather and optional subtle distortion. A full-screen zoom cannot reproduce the glass because the unmagified surroundings remain visible.

Evidence: focus page4. Proposed names: `shoe-match-handoff`, `layered-walking-feet`, `moving-magnifier`.

## 10. Connected shoe-development diagram and incomplete exit:65.963–71.242seconds

**Observed:** the paper background returns. Shoe cutouts appear sequentially along a white dashed curved path. The set grows from one dark shoe to several differently colored/design shoes; by about68–70s four main shoe designs are visible. The dashed route arches between them; each shoe has its own pale cutout edge. The route/composition continues moving slightly. At70.707s a large blurred frame-like foreground object enters from the left. By71.242s additional blurred forms cross the diagram. The clip ends during that transition.

**Interpretation:** a drawn/revealed progression route with separate shoe nodes, not one image of the entire diagram fading in. The foreground forms suggest another depth/occlusion passage, but the destination and exact identity are unresolved.

**Proposed reconstruction:** a reusable path with editable Bézier points, dashed stroke/draw progress and nodes timed by route position; each node receives its own image, outline, scale and entrance. Keep camera drift independent from route drawing. Reuse the existing paper material. Do not create the next destination until the continuation is supplied or approved separately.

Evidence: focus page5 and overview page4. Proposed name: `shoe-evolution-route`.

## Implementation order proposed for approval

1. Correct the existing paper exit and add the concurrently unfurling woman picture, matched room overlap and portrait push/black interval.
2. Extend the ruined street with separate red sky, explosion/smoke, camera approach and actual façade occlusion.
3. Add walking/searchlight and material callouts; decide animated-source/rig approach before generating static assets.
4. Add the vertical passage, wheel/label and brown-shoe handoff.
5. Add the layered walking feet, magnifier and shoe route; stop at the incomplete final transition.

Reuse existing motion families where possible. New actions should retain image/source replacement separately from motion, shared speed/reverse/pause/slow-fast controls, explicit times/units, editable paths/masks/anchors, searchable everyday aliases, provenance and archived originals. These are proposed requirements only; no new actions have been registered or implemented in this analysis pass.

## Decisions and unresolved points

- Confirmed correction: the paper object exits right in the supplied sequence, not the previously implemented straight left route.
- Supported interpretation: window brightness largely coincides with the incoming colored room; separate flash remains unconfirmed.
- Vase order: track both room compositions first; do not invent a physical depth swap from a dissolve.
- Walking articulation is visible in the side-view searcher and feet scene. Still cutouts alone will not reproduce that movement.
- Full3D geometry, original camera calibration, exact native playback speed, sound synchronization and the final transition destination remain unverified.
- Further shoe appearance refinement stays deferred as requested. Preserve existing shoe assets rather than redesigning them again.
- V57 template and its production assets remain unchanged. This report is the review checkpoint before editing approval.
