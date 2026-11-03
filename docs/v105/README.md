# V105 — guided Reference Fit

## What is implemented

Reference Fit is now an interactive tool in the shared native 3D editor. It fits
an existing character or prop using its editable controls. It does not generate
arbitrary 3D topology from a photograph or automatically identify anatomy.

The interface supports:

- PNG/JPEG/WebP reference frames and exact local-time entry.
- Multiple fitting frames, plus separate held-out validation frames.
- Editable visible-outline polygons and a polygon for ignored/occluded areas.
- Reference zoom, draggable points, point deletion and numerical source-pixel coordinates.
- Paired reference/3D surface landmarks, stored with triangle barycentric coordinates.
- Head/neck, chest, left/right hands, hips/legs, full silhouettes and mesh props.
- True nonconvex mask IoU; symmetric Euclidean boundary mean, 95th percentile and
  maximum errors in original source-pixel units; per-zone errors and a boundary heatmap.
- RGB differences and median-color CIE76 Delta E measurements.
- Baseline/fitted previews, cooperative cancellation, one-step Apply/Undo,
  JSON scene persistence, unfinished-reference saving and measurement export.

## Use it

1. Open the native editor and select the target character or mesh.
2. Click **Reference Fit**, then **Add image frames**.
3. Set each image's local time to match the scene. Do not compare different moments.
4. Trace the selected region's visible outline. Ignore occluded areas rather than
   forcing hidden geometry to match an occluder. Use zoom and numerical coordinates
   to refine the trace. Paired landmarks are optional but useful.
5. Choose one parameter family. Solve camera/placement before detailed geometry
   when the views disagree. Center alignment must be off for camera/placement fits.
6. Reserve at least one different frame for validation; fitting one image alone
   cannot establish that the result generalizes.
7. Click **Preview constrained fit**, inspect the heatmap, regional statistics and
   native preview, then **Apply as one Undo step**. No geometry changes occur before Apply. Use **Save references only** to retain unfinished traces without fitting; the tool restores the selected region, mode and constraints when reopened.

For a media-free demonstration, import reference-fit-demo.json. The synthetic box
scene contains traced fitting and validation references. Select the Test box and
open Reference Fit. This demonstrates the workflow, not documentary fidelity.

## Supported parameter families

| Fit family | Changes |
| --- | --- |
| Head shape | Cranial width/depth/height, chin, jaw, neck thickness/shortening |
| Chest / legs / body | Relevant existing anatomical shape parameters |
| Hand shape | Individual finger curl controls |
| Residual head sculpt | Bounded smooth lower-face and rear-skull modes, saved as editable sculpt offsets |
| Head pose | Bounded additive pitch/yaw anchors over the existing animation |
| Free-hand pose | Existing hand IK offsets |
| Engaged-hand pose | Shared palm center, keeping both participants coupled |
| Object placement | Position keys, positive scale and bounded orientation |
| Scene camera | Camera pan/target and field-of-view keys |
| Material color | Selected head/shirt/trouser material, shared skin/body for hands, or explicit uniform full-body color; lights stay fixed |
| Light intensity | Relevant light intensities, with geometry/material color fixed |

Unscoped lights affect the whole scene. Review other objects when fitting lighting.
Do not fit all families together: camera, shape and illumination are ambiguous
from a single view and can compensate for one another incorrectly.

## Precision and constraints

The distance transform is tested against brute-force Euclidean distances. It
uses the actual mask boundary, not the old convex-hull approximation. Fitting
uses a selectable 256/512/1024-pixel working grid. A final check uses up to 1024
pixels on the longest edge; it does not upscale low-resolution source data to
pretend that more information exists.

Fine head/full-silhouette projection uses the displayed subdivision surface.
Partial anatomical regions use labelled cage triangles so their boundaries remain
associated with the same body parts. Paired pins use stable cage triangles.

The report states original pixels per raster sample. Contour coordinates are
floating point, but a decimal coordinate is not proof of subpixel source accuracy.
Manual tracing, compressed footage, occlusion and camera calibration remain
measurement uncertainties. Top/middle/base bands are image zones, not inferred
forehead/jaw anatomy; use the part selector and named pins for anatomical review.

The solver uses deterministic bounded coordinate search and a baseline-preservation
penalty. It is a local optimization, not a global optimum or unique 3D recovery.
It preserves existing sculpt layers, skin weights and corrective shapes. The optional head-sculpt stage adds smooth bounded offsets on top of the existing layer and leaves the shared neck boundary unchanged.

Guards include:

- Bounded shape, movement, orientation, camera and finger changes; positive scales.
- A 60 degrees/second limit between fitted head-offset anchors.
- Rejection of newly flipped faces, severe new local triangle compression or
  excessive bind-surface edge stretch.
- Preservation of paired palm and existing pinned hand/foot targets within 2 mm
  of their baseline error. This is an error-increase limit, not an absolute accuracy claim.
- Fine-resolution verification and held-out-frame scoring before acceptance.
- Regional 95th-percentile, maximum-error and landmark degradation guards, with
  an explicit source-pixel tolerance in the Constraints panel.
- Scene-concurrency protection: Apply refuses to overwrite edits made after the tool opened.

These are not a full triangle collision solver, cloth simulation or whole-body physics.

## Scene data and portability

Reference frames, normalized polygons, ignored areas, paired pins, settings and the
fit report are retained under the selected node's referenceFit property. Shape,
pose, camera, material and contact changes remain ordinary native scene data.
Exporting measurements omits image bytes; exporting the scene retains them.

Limits: 12 frames, 512 points per contour, 32 pins per frame, image files below
20 MB and dimensions at most 8192. Embedded images are reduced to a longest edge
of 1600 and constrained by per-image and total budgets. Original source dimensions
are retained for coordinate/error units. Crop large photos when necessary.

The browser implementation uses the bundled engine and JavaScript math; no external
authoring app, Python service, AI API or new runtime package is required.

## Verification and the current scene

QA covers exact distance transforms, nonconvex masks, color conversions, constrained
fitting, held-out rejection, cancellation, preservation before Apply, import guards,
Apply/Undo/Redo/reload, regional masks, independent resting-finger edits and coupled
engaged-hand controls. Reports are in this directory and scripts under scripts/qa.

The accepted current-scene material fit changes the blue material from #167caf to
#2f79b3. It was fitted on local 0.6 seconds and tested on 3.0 seconds with lights
fixed. Fine-resolution median-color Delta E76 falls from about 10.87 to 6.29 on
the held-out frame. This reduces the cyan mismatch; it does not establish an exact
color/material match over the entire body or all lighting conditions.

V104's measured head profile is retained. The V105 video is a silent 12 fps native
comparison. Full-scene camera/actor spacing, exact back-rim lighting, contact timing,
underarm shading and the cream head/hat still require scene-specific refinement.
The tool enables that work; its presence is not a claim that the documentary is finished.

Previous V104 scene defaults are retained in previous-scenes-v104.js. Old user
compositions remain intact. No commit, push or deployment was performed.
