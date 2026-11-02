# V61 reference review and proposed correction framework

Date: 2026-10-29 (Asia/Taipei). Status: ANALYSIS ONLY; further visual edits await Joshua's approval. V61 source/assets/animation defaults have not been changed by this review. Original assets and both walking alternatives must remain recoverable.

## Evidence and limits

Reviewed all seven new annotations: 113121, 113541, 113826, 113948, 114003, 114408, 114505. Additionally decoded comparison-video frames at 2.0, 3.8, 5.2, 8.0, 13.6, 15.8, 18.8 and 24.0 seconds. Times below refer to the saved comparison video's clip clock, not the original full-video master clock. This is staged frame analysis plus implementation inspection, not a new native-speed original-video or audio review. It establishes visible states and broad progression; exact object velocities, light-flash durations and original authoring tools remain unmeasured. Original 3D construction is not confirmed by a convincing depth impression alone.

Current source was recovered from the saved Motionclone-v61.zip. Renderer causes were checked in sequence-expansion.js, portrait-room.js, model-recipes.js and model-studio.js. Passing the prior 49 functional checks did not establish visual fidelity. Several previous revisions changed feature presence rather than the actual reference composition; that is the central quality failure.

## Paper / mother / boy sequence: clip 0–12.054 seconds

### P01 · gray image surround and paper hierarchy

Observed: at 2.0 seconds the reference has a broad, irregular dark-gray surround between the mother photograph and beige outer paper. V61 has a much thinner torn photograph edge, with no equivalent visible gray mat. The mother image itself is also different: reference close room/window, mother relatively larger and right; V61 exposes more tiled floor and a long table.

Cause: paintUnfurl clips one room image into a rough shape and maps that entire composition onto the folding sheet. The gray fill under the photograph is covered; it is not an independently dimensioned surround. A rough edge does not provide a broad mat.

Proposed: separate beige backing, gray surround, inner photograph aperture and photograph content. Keep the sheet fold coordinated while permitting the picture's camera to move independently. Calibrate surround thickness, corner irregularity, photograph crop, mother size and window location against the reference. Preserve a simple mat-width/color control and independent photo replacement.

### P02 · missing right-side wooden structure and background

Observed: reference portrait has a wooden shelf/rack-like structure at right with small dark contents, mottled warm wall and a window showing muted green daylight. V61 has an almost blank black wall; that structure is absent. The reference boy shares a room with the window, sill item and structure. V61's near window/sill geometry reads as a different room.

Cause: the existing room source does not contain the required composition. It cannot be restored by increasing brightness or saturation. The continuation changed the boy source but retained the old room.

Proposed: prepare a matched room support plate and a separately replaceable wooden-structure layer; retain window frame/glass/outside view and sill item with appropriate depth. Preserve the boy artwork unless specifically replacing it is approved. Missing objects must become explicit asset slots and checklist items, not descriptions of objects absent from the source.

### P03 · color progression and separate monochrome mother

Observed: at 3.8–5.2 seconds the reference progresses from the mother picture toward a colored boy and colored environment; mother remains monochrome during overlap. At 5.2 and 8.0 seconds reference wall, window and right object are visibly colored. V61's boy is colored but the surrounding room remains mostly grayscale.

Cause: only continuationBoyColor is a new colored source. Saturation has little effect on grayscale artwork; sepia warmth supplies an overall tint, not natural green daylight, wood color and wall variation. paintUnfurl also fades the entire new room over the entire mother room, producing duplicate room/window information during overlap.

Proposed: use a genuinely colored destination room and independently timed mother opacity, destination environment appearance and boy appearance. Preserve registration during overlap so the window/wall do not double or slide accidentally. Expose onset, finish and color amount separately. Do not substitute a single whole-frame tint.

### P04 · framing, basin and light

Observed: V61 boy is more frontally bright with stronger warm skin and less deep shadow on the right side of the face. The reference's window light is directional and more integrated with the room. V61 basin dominates the lower left; reference basin/crop differs. By 8.0 seconds V61's face is pushed closer/cropped sooner. The shelf and wall disappear entirely from the V61 reading because they were never supplied.

Proposed: match boy head size, screen position and shadow side before adding camera movement. Calibrate basin silhouette, depth, scale and entry crop; align window height/panes and sill cloth. Use restrained separate subject/environment grades and window-side light. Lock approved entrance/overlap/end framing before tuning the push curve. Preserve distinct source slots and exact parameters.

## War street: clip 13.3–25.4 seconds

### S01 · road is still the wrong material and shape

Observed: V61 is a bright, repetitive field of small rubble, visually resembling a uniform gravel slope. Reference has a darker readable road, flatter traveled center, uneven side heaps, isolated larger wreckage and varied patches. The distinction survives at 13.6, 15.8, 18.8 and 24.0 seconds.

Cause: both the ground heightfield and new road heightfield still bind salvageGround. Adding a road-shaped mesh while repeating the same rubble image does not establish a different road surface. Close texture grain, repeating scale and uniform grade dominate the image.

Proposed: distinct dark road/dirt surface, broader material variation, nonuniform verge debris and irregular larger pieces. Match road width, horizon, slope and vanishing point first. Use ground-plane material coordinates rather than repeating a perspective photograph indiscriminately. Ground contact and foreground rubble must be checked together.

### S02 · repeated buildings and red leakage

Observed: reference has distinctly different left/right masses, broken roofs, partial structures, exposed depth and dark cavities. V61 varies height but repeats the same arched-window facade across many buildings. Bright red is visible through lower openings, and red strips appear near some bases. The overall arrangement and silhouette remain unlike the reference.

Cause: createRuinedStreet repeats the same salvageFacade source for ten facade planes and their wall returns. Transparent window openings expose the sky because the corresponding interiors/occluding surfaces are missing. Merely desaturating the scene cannot correct that depth/visibility error.

Proposed: match the reference's major left, right and distant building masses with distinct artwork; provide damaged side walls and recessed dark interiors. Allow sky through genuine roof breaks, but block it through cavities that should face dark interiors. Seat facade bases against terrain to eliminate red seams. Keep red limited to legitimately visible sky; do not remove the later red atmosphere globally. Preserve each building's replacement, transform, depth and occlusion controls.

### S03 · person, costume and camera

Observed: the reference back-view figure has pale hair, a short dark jacket, different leg/boot silhouette and a different relationship to the road. V61's longer jacket/trousers and dark hair read differently. In the sampled street frames V61 figure is smaller and higher in the image; reference figure occupies more of the foreground. Shared projection in V61 did not calibrate that composition.

Cause: grayscale changes color only, not clothing, proportions or pose. V61 projects a hardcoded world position and height through an approximate camera. The cutout's actual opaque-foot/head bounds and the reference's screen-space anchors were not fitted together.

Proposed: correct back-view cutout and costume if approved; calibrate opaque head/feet bounds, grounded scale, screen position, road and camera jointly. Use at least entrance/middle/exit anchors. Keep actor movement distinct from camera movement; do not scale a mismatched source to conceal a bad layout.

### S04 · electrical poles and wires, not a front-facing grid

Observed: reference conductors, leaning supports and failed electrical structures occupy depth and irregularly cross the street. V61 resembles a repeated lattice fence with regular rectangular cells. Its fall reads as rows sliding downward rather than supports pivoting and conductors being pulled down.

Cause: paintCollapse draws four repetitive 2D rows, repeated braces and sag curves, scaled together in screen space. It does not model the topology, pivots or depth placement of the visible reference structures.

Proposed: distinct poles/supports, joints, crosspieces and wire spans. Match layout and leaning silhouettes first. Animate ordered pivot/failure events, tension release, sag, impact and settle. Project the whole assembly consistently with the street. Use deterministic keyed motion; physical simulation is optional, not a prerequisite or a claim.

### S05 · explosion coverage, smoke and opening light

Observed: V61 initial street is brighter than the reference; explosion placement, coverage and fireball silhouette differ. Reference progression reaches dense nearly opaque dark smoke; V61 smoke remains relatively reddish/translucent. Reference destruction fills the distant opening behind the buildings more convincingly. A larger sprite alone would not establish the same sequence.

Cause: V61 scales and grades one generated photographic source, with low-opacity procedural puffs. It is not a temporally varied fireball/smoke sequence. Street reveal reaches full visibility after an authored 0.75-second fade, independent of fitting the reference brightness progression. Flash is a screen wash rather than a calibrated local light response.

Proposed: define ignition, broad expansion, billowing fire, smoke takeover and residual smoke as distinct visual states. Keep the explosion behind the correct structures. Match size, base, growth and coverage at each state; use evolving texture/shape rather than just tint and scale. Fit the opening darkness and localized response on road/walls/person. Preserve independent smoke density, light strength and timing.

### S06 · sparks currently read as falling scraps

Observed: long pale/yellow marks resemble falling paper. Reference sparks are small, intense, short-lived points and brief streaks near failing electrical contacts/wreckage.

Cause: paintCollapse uses repeating modulo-time line particles distributed over a broad region; they continue once collapse has begun. They lack localized failure sources and a finite burst/settling window.

Proposed: concentrated emitters at break/contact points, bright small cores, restrained bloom, mostly very short streaks, rapid decay and short event-bound bursts. Allow sparse residual contact flicker, then stop. Distinguish sparks from dust, smoke and falling debris. Expose emitter placement, density, lifetime, size, color and cue timing.

## Choice of artwork versus expanded 3D/mesh

Recommend photographic cutouts with shallow 2.5D perspective for the production version. Preserve and refine the earlier walker, including both arms/hands, without changing its appearance to accommodate a new rig. Use modest calibrated deformation, overlap-safe joints and hidden-area patches. Keep the expanded mesh as an optional experimental asset; it must outperform the photographic baseline under the same framing before replacing it. More vertices do not supply missing anatomy, correct costume or photographic texture. Correctly modeled 3D is useful for actual side surfaces, poles and camera-dependent occlusion, but the current approximate environment should not dictate the art direction. No approach guarantees identical reference fidelity.

## Approval and regression framework

1. Record each issue above as a blocking visual requirement. Document the exact reference frame/state, source slot and proposed change. Distinguish observation from inferred production technique.
2. Fix composition first: gray surround, room contents, street perspective, building masses, person scale/feet and electrical silhouettes. Show paired stills at the same states before a long render. A moving wrong composition is still wrong.
3. Fit color/light/materials second: colored window/wall/object alongside boy; monochrome mother; dark road/interiors; red sky visibility; opening darkness and opaque smoke. Inspect full frames and close crops.
4. Tune motion third: synchronized content/environment reveal, camera push, pole/wire failure and settling, fire-to-smoke takeover, spark lifetimes. Sample onset, intermediate, peak, settle and exit; use native-speed playback when original clip bytes are available.
5. Lock approved source bindings and visual fixtures. Asset replacement, choreography and camera settings remain independent. Granular simple controls remain, including timing, direction, speed and optional slow/fast playback. Preserve all original and alternate assets.
6. Add regression checks for the approved layer order, interior occlusion, distinct road binding, event windows, source identity and contact anchors. Approved-frame fixtures detect later regressions; they do not replace visual comparison with the reference. A functional test pass is never the visual acceptance gate.
7. Complete a short sequence comparison before exporting the full review. Record unresolved differences explicitly; do not equate the presence of a fire/grid/road with the reference effect being matched.

## Timeline / feedback ledger update

No phase boundaries or playback defaults changed. Pending edits are concentrated in photo-card/portrait-color (0–12.054), ruined-street (13.3–25.4), and adjacent occlusion continuity (25.4–27.5). Walker artwork preference also applies to salvage-search (27.5 onward). Joshua rejects V61 visual fidelity, requests detailed interpretation first, and has not approved this next correction pass. No assets were generated or replaced in this analysis task.

```json
{
  "schema": "motion-reference-review-v1",
  "reviewId": "v61-feedback-20261029-2",
  "baseVersion": 61,
  "status": "awaiting-interpretation-approval",
  "visualEditsApplied": false,
  "comparisonClipSamplesSeconds": [2,3.8,5.2,8,13.6,15.8,18.8,24],
  "issueIds": ["P01","P02","P03","P04","S01","S02","S03","S04","S05","S06"],
  "priorityOrder": ["composition-and-required-assets","materials-color-and-light","motion-and-event-timing","regression-and-playback-review"],
  "preferredCharacterMethod": "preserved-photographic-cutout-with-calibrated-articulation",
  "alternativeMeshPreserved": true,
  "sourceMasterAudioAlignmentVerified": false,
  "originalProduction3DVerified": false
}
```
