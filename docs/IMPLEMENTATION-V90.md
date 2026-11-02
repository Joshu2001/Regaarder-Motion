# V90 — second native editor release

User authorized refinement of the hat, body proportions, shadows and the first-release gaps. Source coverage remains 14:55–15:00 (895–900 seconds), template 905–910. The original reference is unchanged.

Implemented: an oval swept brim, tapered lathed crown and separate band replace the two-cylinder hat. Hat width, depth, crown height, lift, tilt and band color are editable. Head size, neck length, shoulder width and arm/leg length controls alter the native rig; these are bounded ratios, not anatomical reconstruction. New factory figures use 1.06 head size and 0.95 neck length. Existing JSON lacking these fields retains unit proportions.

Garment clearance increased from 9 to 16 mm. The full underlying body remains to cover segmentation-edge gaps. Garment self-shadow receiving is disabled to reduce shell/body artifacts. Head/body retain shadow receiving. This is a pragmatic layered garment model, not tailored cloth. Material defaults are less metallic; faceless head and original CC0 foundation are retained.

Shadow filtering changed to variance shadow maps with 8 blur samples and radius 4. Shadow normal bias reduced from 25 to 4 mm, depth bias from -0.0005 to -0.00008. Exposure defaults to 0.92; hemisphere intensity to 0.65. Exposure, ambient intensity, per-light shadow enable and softness are editable and range validated. Thin hat parts do not cast/receive shadows in this release to avoid a severe brim stripe; accurate hat contact shading remains a limitation. Variance maps can leak light through thin occluders.

The smoke density now uses a broad smooth noise threshold instead of narrow noise contours, reducing the previous filament pattern. It remains an authored animated 2.5D density plane.

Native JSON remains authoritative. Geometry, rig and transform animation export via GLB; procedural smoke, editor constraints and renderer-specific lighting/filtering do not fully transfer into generic GLTF viewers. No external authoring application is required.

## Verification and limits

Scene/rig checks, new ratio/range validation, native control application and scene JSON round trip are checked. Reusable first-release editor and composition integration regressions are run separately. The source cut remains local frame 116 at 898.866667 seconds. Earlier 13 scene hashes are preserved by packaging. Actual WebGL frames are rendered for a synchronized five-second comparison. Ordered frames and diagnostic samples are inspected; continuous audiovisual or continuous 0.05x viewing is not claimed. No physical mobile benchmark or remote deployment is performed.

Still missing: full vertex sculpting/topology tools, arbitrary model import, tailored garment topology and cloth simulation, collision-aware joint/hand/seat contacts, pose corrective blendshapes, exact body silhouette calibration and volumetric atmosphere. Existing bone transforms/IK are not replacements for these features. This is a focused second release, not completion of all first-release backlog items or Blender parity. Body proportions and contact poses still require source-specific art direction.
