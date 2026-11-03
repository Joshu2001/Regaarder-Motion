# V104 — reference-constrained blue head

## Scope and result

The original source interval is 900.000–905.630 seconds. Local time is source
time minus 900. The source is the user-provided 640×360, 30 fps documentary.

This release implements and tests an offline deterministic fitting workflow,
then installs the accepted result as ordinary editable scene data. It is not
a one-click image-to-3D editor feature or a complete documentary reconstruction.

Five fitting frames: local 0.4, 0.6, 2.4, 2.8, 3.2 seconds.
Four frames excluded from the optimization: 0.5, 0.7, 2.6, 3.0 seconds.
The neutral frame at zero is excluded because the head is cropped.

Native-renderer verification on those four held-out frames:

- Mean contour-support error: 4.59 → 1.35 source pixels (70.5% reduction).
- Mean convex silhouette overlap: 0.718 → 0.911.
- CPU predictor versus native renderer: maximum 0.0043 pixel discrepancy.

**These are center-aligned head-shape scores at a fixed torso-calibrated scale.**
They do not score full-scene placement, lighting, facial detail, hidden views or
unique 3D recovery. Placement residuals are recorded separately in native-validation.json.

## Method

1. Match source timestamps and preserve V103 as the baseline.
2. Mark neck-junction cut endpoints and waist seam y in original source pixels.
3. Extract blue-head masks with a fixed intensity/color threshold and the marked
   neck cut. Record the measured contours in reference-contours.json.
4. Estimate per-frame image scale from the native neck03-to-waist span. Align
   contour centers separately so placement errors cannot force anatomical changes.
5. Fit shared cranial height/depth and chin projection, plus a smooth head-pitch
   correction track. Add three bounded, smooth local sculpt modes only for residuals.
6. Use finite-difference geometric optimization with parameter/temporal penalties.
   Limit local mode amplitudes to 8 mm and head-pitch correction to 15 degrees.
7. Verify the actual native skinned cage, not merely the optimization predictor.
8. Review rendered geometry: a less-constrained candidate was rejected because
   its improved score came with an excessive chin protrusion.

Reference annotations are human-guided, not automatic ground truth. Thresholding,
the neck cut, torso calibration and convexification introduce uncertainty.

## Editable implementation

`native3d-v97/head-fit-v104.js` stores the fitted shape values, head sculpt and pitch
offset anchors. `applyHeadFit()` combines them with the original head animation.
The scene retains ordinary shape controls, the editable `sculpt.head` layer,
existing skin weights and native bone tracks. The exported pose keys are sampled
at 30 fps for faithful combination with the existing animation.

The head-to-neck boundary is untouched by the local sculpt; rest-skeleton shape
changes still use the existing shared deformation function. No reference pixels
are used as character textures or replacement scene plates.

## Lighting test

A separate brightness study tested blue-fill gains 1, 2, 4 and 6. Gain 4 was
selected using local 0.6 s only, changing blue-fill intensity from 1.15 to 4.6.
At the held-out 3.0 s frame, mean absolute error in head luminance quantiles
(median and 90th percentile) fell from 52 to 8 on the 8-bit scale.

This is a brightness calibration, not a full lighting/material solution. Rim
continuity, highlight locations and blue hue still differ from the reference.
Cream lighting and the hat are unchanged by this head-fit release.

## Reproduction

Python dependencies: NumPy, SciPy, opencv-python-headless. Browser QA uses the
existing Playwright launcher. Run from the repository root:

1. Extract 169 source frames at 30 fps starting at 900 s to ../reference/frames/0001.png onward.
2. `node scripts/qa/export-head-fit-v104.mjs`
3. `python3 scripts/qa/fit-head-v104.py`
4. `python3 scripts/qa/build-head-profile-v104.py`
5. `node scripts/qa/validate-head-v104.mjs`
6. `python3 scripts/qa/verify-head-v104.py`

The saved fit input and results are included here. Browser export explicitly
loads the preserved V103 baseline, avoiding repeated application of the new fit.

## Remaining work and limits

The scene's camera/actor spacing remains visibly different. Calibrating the
head comparison does not recover a physically unique camera; a full-scene solve
needs homologous landmarks on both actors, torso pose and contact constraints.
No global camera change was applied from head-only measurements.

Neck-junction shading, the cream head/hat, exact back curvature, underarm shading
and exact finger mesh contact still need further refinement. Stress poses remain
finite, but the shoulder test still detects a small number of highly compressed
triangles; this is not a claim of perfect deformation in all poses.

The delivered comparison is a silent 12 fps native review render. No claim of
continuous 0.05× playback inspection is made. Native JSON preserves the complete
scene; dynamic native volume/finger corrections are not baked into GLB morphs.

No commit, push or deployment was performed.
