# V92 — silhouette, pose, garment and lighting refinement

Joshua approved the detailed V91 review, including the standing figure's facing direction. Coverage remains source895–900 seconds (14:55–15:00), template905–910. Original diagnostic footage is unchanged.

## Implemented corrections

**Orientation and head:** outgoing coach yaw105° points away from the seated actor; a forward-biased jaw and smoothly flattened faceless front plane make that direction readable. Incoming yaw-38°, upper-body twist/shoulder tilt, asymmetric hand offsets and a bent/spread right leg replace the symmetric frontal stance. Coach head size0.99; red head size1.0. The red sit-up takes2.2seconds, with a separate head-bend track relaxing from18° through8° to0°.

**Garments and proportions:** shoulder/upper-arm/forearm/cuff radii reduced; torso width/depth and pelvis projection reduced; PCHIP radius curves replace linear contour transitions. Waist coverage extends to0.98m with overlap onto a continuous trouser waistband.7mm implicit surface extraction, five Taubin smoothing cycles and12 skin-weight diffusion iterations regularize surface/skin transitions. Cuff boundary vertices project onto a defined terminal plane and bind to the wrist/ankle, replacing jagged cut edges. Shirt26950vertices, trousers25970vertices; four normalized influences per vertex. Exact prior garment candidates remain byte-for-byte in the retained-assets companion. This is authored skinned clothing, not cloth simulation.

**Light/shade:** independent red side key and warm rim, cream key/fill and tabletop light are editable scene nodes. Native multi-pass rendering is necessary: Three.js light layers alone do not isolate lighting per object. One all-object shadow preparation pass is followed by background/props and object-channel passes sharing depth. Background is drawn once. This prevents the cream fill from brightening the red actor, while retaining occlusion between figures/props. A pixel regression tripling the coach key gives red ROI mean absolute difference0 and coach ROI difference10.38 in the tested configuration. Up to30 combined actor/scoped-object channels are supported when scoped lights are present; unscoped scenes retain the previous rendering path.

The red figure has a darker independently editable faceless-head tint, a selective red side highlight and warm edge light. Cream fill avoids the previous conspicuous blue-gray head/body split. Red garment roughness0.40/0.44; body/head and other materials remain editable. Shadow bias/filtering and contact geometry are retained; this is not a path-traced or area-light renderer.

**Hat:** closed curved brim, tapered/depressed lathed crown, revised tilt direction and independent time-keyed fit. Outgoing width/depth1.22, crown height1.15; incoming width/depth1.02, height1.05, side tilt-22°. Hat fit/material keys can be created/removed in the native part inspector and are stored under node.partTracks. Native JSON is authoritative. GLB now also samples the actual hat-group transform; material-color animation and scoped light behavior are not portable core-GLTF equivalents.

**Props and atmosphere:** rounded seat/back geometry, darker/more matte armrests and independently lit tabletop. Existing lip/support remain editable. Smoke uses multiple envelopes and finer density variation, with wider placement and reduced opacity. It remains a deterministic animated2.5D depth plane, not volumetric smoke. Blue-shot floor strip stays hidden at the exact cut.

## Checks and remaining limits

Node tests: normalized weights; outgoing forward direction; finite pose transforms across cuts; invalid fit/scope/duration/offset rejection. Representative pelvis/desk proximity is2.09mm, a vertex proximity measurement with slight overlap, not a collision solver. Browser checks: lighting isolation, both incoming figures retained through shared-depth passes, cut-exact fit sampling and creation of part keys. Existing editor/undo/IK/scene-round-trip and main-app integration regressions are run separately. Earlier13scene hashes and archive CRC are package checks.

150matching native frames are rendered at960×540/30fps. Comparison1920×576,5seconds;0.05x is150frames over100seconds, silent. Ordered frames and encoded parity samples are checked. Continuous audiovisual or continuous0.05x watching is not claimed.

Remaining: exact source silhouette/camera/pose registration, garment microfolds and joint-volume correctives, final finger/seat intersections, physically accurate soft contact shadows, historical chair/hat tailoring and final smoke motion fidelity. Multi-pass scoping adds render cost; physical mobile-device performance is not benchmarked. Source roots/camera remain authored fits including cropped below-floor offsets. No full sculpt/topology workspace, arbitrary model import, cloth/volumetric simulation or recovered original production model is claimed. No deployment or GitHub commit.
