# V62 merged reference review · Joshua's annotations and independent evidence

Status: ANALYSIS ONLY. Visual assets, renderer parameters and video edits are unchanged. Further implementation awaits Joshua's approval. This report merges the user's review with independently checked frames and source evidence; it does not assume every annotation is literally correct.

## Evidence and method

All 17 new annotations were inspected: 132311, 133008, 133727, 133750, 135218, 135515, 140150, 140543, 140810, 140948, 141043, 141207, 141348, 141507, 141717, 141826, 142016. Filenames identify attachments, not clip timestamps. Reference is left and V62 right in the paired screenshots.

Additional unannotated comparison frames were decoded at 5.5, 11.5, 13.3, 13.5, 13.7, 14.0, 14.3, 14.7, 18, 24, 28.5 and 30 seconds. A 2.2-second reference entry was slowed to 0.10× (22 seconds output). Times refer to the saved comparison clock. The reference column is a recovered 640×360 earlier export at 30 fps; it is not the native-resolution original master. Slow playback duplicates/interpolates presentation time, not missing source detail. Original soundtrack was not reviewed. Frame inspection and sequence sampling are confirmed; native original-video playback, exact wire origins and physical production method remain limited by available evidence.

Because annotations were already visible, the additional pass is an independent evidence check rather than a blinded review. Source inspection used reference-staging.js, sequence-expansion.js, living-cables.js and cutout-walk.js. A separate skill evaluation used only two raw screenshots and the reusable review instructions, without my diagnoses; it reproduced framing/light/contact findings and qualified still-image motion claims.

## Overall conclusion

V62 improves asset presence and street material, but scene relationships still diverge. The strongest remaining issues are weak portrait approach; muddy overlap; late/suppressed explosion entry; incorrect electrical topology, depth and failure timing; insufficient character/camera framing; and a salvage environment whose ground, storm grade and cables do not support the action. These require coordinated composition and motion changes. Increasing a few effect strengths or rebuilding everything in uniform 3D would not resolve them by itself.

## Merged findings

### R01 · paper frame: confirmed visual difference; style preference retained

**Your observation:** original frame is larger and more stylish (132311).

**Independent finding:** reference gray surround is broader, more irregular and painterly, with a larger image/mat relationship. V62 now has a surround, but it reads as a thin, regular rectangular border. Mother/window/basin crop also differs; border width alone does not account for the full composition. “More stylish” is the user's preference; thickness and contour differences are observable facts.

**Cause:** default mat is 36 stage pixels inside a rough rectangular photograph mapped onto the unfolding sheet. A nearly regular inner aperture keeps the rendered border more even than the reference.

**Proposed:** fit outer paper, mat and inner image boundaries separately against a reference still; vary local contour and corner shape; calibrate image crop and mother placement together. Keep width, color, roughness and crop editable. Acceptance: paired paper hold matches mat-to-image ratio, silhouette and relative window/mother scale before motion is tuned.

### R02 · color/monochrome contrast: confirmed

**Your observation:** reference colored boy/environment contrasts more clearly with the monochrome mother; V62 overlap is weak (133008).

**Independent finding:** V62's boy and mother both become translucent, producing ghosted clothing and reduced subject separation. Reference keeps the incoming colored subject more legible while the mother remains clearly monochrome. Window/wall color is now present in V62; missing color and insufficient color/luminance separation are different issues.

**Cause:** independent opacity clocks still overlap at partially transparent values. Color onset and whole-room shading are not fitted to the reference's exposure hierarchy.

**Proposed:** establish incoming-boy exposure and visibility independently from outgoing-mother fade; use spatial/occlusion masks when needed so both bodies are not simply equally translucent. Retain one registered room and separate environment-color clock. Acceptance: at overlap, boy remains readable, mother is recognizably grayscale, window does not double, and the destination room does not wash out.

### R03 · zoom after appearance: perceptual complaint confirmed; literal absence corrected

**Your observation:** reference zooms toward the boy after appearance; V62 does not (133727, 133750).

**Independent finding:** 5.5 versus 11.5-second samples show a much stronger face approach and shoulder crop in the reference. V62 remains comparatively wide. However, V62 does implement a 12% room push plus small relative-depth responses. Therefore “no visible equivalent approach” is supported; “no zoom exists in code” is false.

**Additional finding:** reference has stronger left-window illumination and a deeper shadow on the opposite half of the face. Current face/eye direction and hair silhouette also differ; replacement of approved artwork is a separate decision, not an automatic consequence of the zoom issue.

**Proposed:** define start/end head size, eye position and shoulder crop, then fit one continuous camera-distance curve. Calibrate face shadow and window light after crop. Keep onset, duration, focal point, amount and optional slow/fast timing separate. Acceptance: matched mid/end face framing and unbroken continuous motion; avoid improving zoom by changing the boy's identity.

### R04 · explosion visible at scene entry: confirmed

**Your observation:** reference opens dark with a large already-visible explosion and failing structures; V62 initially lacks a readable explosion (135218, 135515, 140150).

**Independent finding:** at 13.3–13.7 seconds the reference fireball is visible before ours is established. At 14.0 seconds ours is still a smaller later-developing event. A dark scene does not mean that its focal explosion should be suppressed equally with the room/road.

**Cause:** street begins at 13.3, explosion starts at 13.5, and the scene reveal darkens the composite for 1.6 seconds. Reference is entered during an ongoing destruction event.

**Proposed:** pre-roll explosion/failure clocks before scene visibility; grade environment and emissive fire independently. Fit fireball base, size, occlusion, peak and smoke takeover at corresponding frames. Acceptance: recognizable fireball already present at entrance, surrounding street still dark/readable, and no miniature-fire interval absent from reference.

### R05 · missing/incorrect building masses and foreign foreground object: confirmed

**Your observation:** a foreground building is missing; the street layout and extra low object differ (140150, 140543).

**Independent finding:** V62's new plate has stronger ruin detail than V61, but differs in the large left occluder, street opening and right-side mass. The added near debris slab is visually prominent and not equivalent to the referenced composition. Surface detail is not a substitute for matching major silhouettes.

**Proposed:** map left foreground mass, left middle row, right broken mass, distant opening and road as separate layout anchors. Remove or reposition the extra slab in this composition while preserving its asset. Acceptance: main silhouettes and negative space match at entrance/middle, with a suitable left foreground surface available for the later camera passage.

### R06 · poles intact and failure too late: confirmed

**Your observation:** cables/poles look too intact for the destruction, with no initial fall (140150).

**Independent finding:** reference is already in a failure sequence at entry, while V62's five supports initially read as a regular intact network. Current failure starts at 15.4, over two seconds after street entry. “War implies every wire must be broken” is not a universal rule; this specific reference shows selected early failures and other conductors remaining in place.

**Proposed:** use mixed initial damage states and pre-rolled failure events. Distinguish stable overhead lines from falling spans and failed supports. Acceptance: correct identified spans move at onset while verified stable conductors remain anchored.

### R07 · cable origins and direction: motion difference confirmed; exact origins unresolved

**Your observation:** colored arrows identify likely upper origins and downward/diagonal travel; later images appear to confirm two origins (135218, 135515, 140543, 140810, 141043).

**Independent finding:** sequential onset frames support downward/diagonal falling features in the reference, distinct from high conductors that remain. The broad directional interpretation is supported. Some origins are occluded by smoke, darkness and architecture; the compressed comparison does not establish every mechanical attachment. Arrow placement alone cannot promote a likely origin to confirmed.

**Current implementation cause:** right endpoints of street spans use fixed screen points [825,155+j*27]; these are not attached to a named building surface. Uniformly repeated spans do not reproduce the identified trajectories.

**Proposed investigation:** assign stable IDs to each visible conductor and support; track head/tail points at frame steps and 0.10×, recording visible/occluded states. State which endpoints can be traced to a support and which remain inferred. Proposed edit: bind confirmed ends to named world-space anchors, animate release/pivot and grounded settling. Acceptance: correct direction, credible origin, continuity through occlusion, and no visible endpoint in unsupported sky.

### R08 · dark layered conductors versus bright 'glitch' bundle: confirmed appearance; glitch mechanism qualified

**Your observation:** reference wires are darker; several layers become visually glitch-like during approach in V62 (140810, 140948).

**Independent finding:** V62 has many fine, pale curves forming a regular web. Reference has more distinct, darker wire groups at different apparent depths. 'Glitch' accurately describes the impression, but an encoding or GPU corruption fault is not established.

**Cause:** five pole iterations each draw three spans to the same right-side region, plus neighbor curves: approximately 27 curves rather than a few individually identified reference conductors. Repeated similar lines, small separations and same-plane placement create the web-like appearance.

**Proposed:** explicit wire count/IDs, calibrated darkness and screen thickness, separate depths and physical attachment topology. Test antialiasing after geometry is right; do not treat the whole issue as a particle or decoder bug. Acceptance: identifiable stable wire groups with no unexplained fan-out or flickering bundle as the camera approaches.

### R09 · lightning and sky brightening: visible mismatch confirmed; absolute absence corrected

**Your observation:** reference lightning/red-sky brightening is missing in V62 (141207).

**Independent finding:** reference's late street reveals more bright red sky around moving dark smoke. V62 stays obscured by a dense dark smoke field and its illumination cue does not provide an equivalent visual progression. Code and decoded prior export evidence contain a short lightning cue at 21.3 seconds; total absence is not correct. A cue's presence is not proof of matched location, timing or brightness.

**Proposed:** fit a per-shot storm exposure/cloud progression and multiple flash states where evidenced. Separate sky illumination, bolt visibility and local scene response. Acceptance: corresponding frames recover the reference's red/cloud contrast and light progression; do not brighten the whole sequence uniformly.

### R10 · street person: cutout confirmed; framing complaint confirmed

**Your observation:** is this really a cutout, and why does the lower body remain visible rather than the closer upper-body crop? (141348)

**Independent finding:** it is a separate alpha cutout. Reference camera/subject relationship produces a stronger foreground approach and more aggressive lower-body cropping. V62's scale/path do not deliver the same result. The back-view costume/source silhouette still differs even after the V62 costume revision.

**Cause:** current initial height 230 grows by 230; feet start at 485 and drift by 60; X drifts by 65. These authored screen-space curves were not fitted to the reference's head/feet/crop anchors.

**Proposed:** fit start/mid/end head size, eye/head center and lower-body crop jointly with the camera, rather than merely increasing a height slider. Preserve character and camera as distinct controls. Acceptance: desired upper-body framing arrives at the correct phase without making feet float before leaving the frame.

### R11 · lateral camera passage: missing equivalent motion confirmed; direction wording qualified

**Your observation:** reference moves left, V62 does not (141507).

**Independent finding:** reference's late approach shifts the person toward screen right and reveals the foreground building during the lateral passage. V62 remains predominantly centered/forward until a separately timed wipe. “Left” should refer to inferred camera travel, not necessarily the direction the cutout moves on screen. Apparent displacement also contains zoom.

**Proposed:** fit a shared camera path through push, lateral drift and foreground occlusion, beginning the lateral action at the evidenced state. Use multiple background landmarks to distinguish translation from scale. Acceptance: foreground building crosses with the right direction/depth and the person shifts consistently, without a bump or compensating fade.

### R12 · salvage ground, ruin and open walking space: confirmed

**Your observation:** ground/building layout differs, there is no suitable walking area, and sky is too bright (141717).

**Independent finding:** V62 salvage still uses the older bright repetitive gravel/heightfield and differently placed ruin cluster. The new dark street plate did not change this subsequent shot. Reference has a clearer uneven traversable strip, a tall broken wall on the right and more open foreground. V62's material/geometry transition undermines continuity.

**Proposed:** treat salvage as its own matched composition with the same storm world, distinct terrain elevations, open actor path and correctly placed wall. Retain individual debris assets. Acceptance: readable unobstructed contact path, matching skyline/ruin anchor, and coherent exposure before the walker enters.

### R13 · floating salvage cable: confirmed, including a numerical cause

**Your observation:** salvage conductors float above the buildings instead of attaching to the wall (141826).

**Independent finding:** visible sky separates the spans from the ruin. Source defaults place anchors at Y=5.2 and Y=5.9, while the ruin plane's default top is Y=4.5. Anchors are at least 0.7 and 1.4 world units above that plane's top, respectively. They are anchored in code, but not to the visible building. Some exact reference endpoints remain occluded.

**Proposed:** derive endpoint positions from actual named support surfaces/vertices and validate their projection through every relevant camera. Preserve roof/wall front-back occlusion and hanging-wire thickness. Acceptance: no sky gap at the intended attachment; endpoints remain attached during both near and cable-focus camera changes.

### R14 · walker speed, age and ground contact: visible difference confirmed; physical speed and age uncertain

**Your observation:** reference walker moves faster and reads younger; reconsider the 3D option (142016).

**Independent finding:** 28.5/30-second samples show the reference walker further through the composition and at a different scale/pose than V62. This supports a screen-space timing/path mismatch. Physical walking speed cannot be isolated without calibrating camera and scene scale. Reference appears younger, but exact age is not established by these images. Source identity/proportions differ visibly.

**Cause:** classic path uses about 78 stage pixels/second separately from a 0.85 cycles/second gait. Arms/legs come from manually cut photographic regions; this does not guarantee planted contact over arbitrary terrain. Mesh alternative previously had silhouette/part problems.

**Proposed:** fit entry/path screen positions, step timing and contact first; tune root travel and gait together. Decide artwork/age appearance separately. Compare photographic and improved hybrid options under identical camera, lighting, path and duration. Acceptance: comparable entry/progression, natural arm/torch coupling, planted stance feet and preserved photographic silhouette without seams.

## Additional findings from this pass

1. Several problems are phase offsets: entry occurs after the reference event is underway, and the lateral move starts after the reference has already shifted. Changing event shapes without fitting their relative timing will repeat the mismatch.
2. Street and salvage are separate render paths. A correction to one did not propagate to the other. Shared world lighting/attachment data are needed for continuity, while shot-specific framing must remain independent.
3. Photographic room/street assets and screen-space effects are being combined with modeled salvage without one calibrated camera/scale convention. This is a stronger explanation for inconsistent depth/contact than “needs more 3D.”
4. Excessive sharpness and fine texture are competing with the subject. Reference foreground softness and dark silhouette hierarchy contribute to depth. Match geometry and exposure before adding blur.
5. 'Feature exists' checks repeatedly passed while key visible effects were too small, too late or outside meaningful contact. Acceptance fixtures must encode framing, attachment and event state, not only nonzero parameter values.

## Recommended middle ground for 3D

Use a **shared 3D camera and shallow scene geometry with photographic artwork**:

- Keep the approved face/head/coat appearance on rigid or gently articulated textured planes; use limited deformation only where joints require it.
- Give walls true side returns/interiors and terrain a contact surface; place the person and props in that same calibrated world.
- Model supports and wires with explicit topology and shared world-space anchors, so gravity-like arcs, release and contact are plausible.
- Use a matched root/gait/contact solve for the walker; preserve the current classic and mesh alternatives as recoverable assets.
- Avoid replacing the whole scene with an approximate untextured full-3D reconstruction. A full anatomical model needs suitable art/rig fidelity and should be adopted only if it wins a like-for-like test.

Before switching defaults, render a short A/B of the same walk and camera with identical artwork treatment, duration, light and framing. Judge silhouette/likeness, seams, foot planting, arm/torch attachment, temporal smoothness, editability and rendering cost. More joints or vertices are implementation detail, not a quality score. This hybrid is a recommendation, not yet approved visual implementation.

## Correction order and editable acceptance gates

1. **Lock composition:** frame/mat; room crop; portrait start/end head framing; street building masses; salvage path/ruin skyline. Approve paired stills at representative states.
2. **Lock camera and topology:** all cable endpoints/supports; person contact/path; pre-wipe lateral movement; world coordinates and camera relationship. Review marked landmarks and depth crossings.
3. **Fit event timing:** pre-rolled explosion/failure, stable versus released spans, overlap onsets, camera approach and walking entry/progression. Check onset/intermediate/peak/settle/exit.
4. **Fit light/material/focus:** color-mother separation, directional face light, dark wires, bright red breaks in storm, salvage continuity and foreground softness.
5. **Verify the short sequence:** synchronized comparison and slow motion for rapid failures; then full export. Preserve prior versions/assets and add approved-frame/contact/source-binding fixtures. Functional tests remain separate from visual acceptance.

Simple controls should expose replace, position, size, onset/finish, speed/direction, camera focus, ground contact and attachment pickers first. Hide detailed XYZ, mesh, curves and emitter settings under advanced sections. Provide previews for each event state, stable effect IDs, exact defaults/units and independent media bindings. A visible attachment picker is preferable to requiring users to type guessed XYZ positions.

## Reusable method

Joshua's demonstrated method has been distilled into a personal skill: start with the whole scene, inspect temporal clues, reason about origin/destination/contact, separate camera from object motion, challenge hypotheses, merge independent and user findings, and connect each correction to evidence and simple controls. It includes transferable project examples and a report contract. It captures observable practice from available material; it does not claim access to private reasoning or every historical chat, and it is not model fine-tuning.

## Timeline / feedback ledger

No timings, sources or visuals changed in this task. Pending corrections affect paper/portrait 0–12.054, street 13.3–25.4, passage 25.4–27.5, and salvage/walking 27.5–45.243, all in comparison clip time. The user's reconsideration authorizes analysis of a better hybrid, not replacement of approved artwork or a new production default. Further visual implementation awaits approval of the merged interpretation.
