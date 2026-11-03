# V102 character foundation refinement

## Actual model/rig changes
- Rebuilt the head/neck surface using a clean cervical ring at y=1.60m, below the original facial topology. The new 92-vertex boundary avoids wrapping the original mouth/jaw interior onto the neck. Legacy V99/V100 head surfaces remain available.
- Shaped the skull, lower face and nape with a smooth asymmetric profile. Distributed the new neck vertices across neck01/02/03 and head rather than blending the whole region into one head pivot. Shortened and broadened the default neck; reused the foundation for red players.
- Added bounded scapular support and pose-space joint-volume correction derived from rigid dual-quaternion blending. Smooth regional falloff protects neutral poses; controls remain optional.
- Corrected the paired right-hand contact side. Added closer palmar spacing, a bounded proximal-thumb opposition guide, approach/turn motion, and a lower elbow guide. The shared target is now reachable by both arms. This is not a collision-free grasp solver.
- Fitted the hat opening in its tilted seating plane. Adjusted close-up camera framing and soft variance shadows.
- Cached subdivision stencils/topology. Changed positions update the existing refined mesh; skin-weight/topology edits rebuild it. Neck normals are shared at original and refined boundary vertices.

## Use
Open the 3D editor and choose Load updated handshake, or unpack the Handshake preset. Existing saved scenes are retained, so merely reopening an old saved scene will not select the new model. Choose Neck and shoulder test · V102 to inspect the animated ±47-degree neck sweep and arm raise. Head foundation and Joint deformation controls allow comparison with legacy geometry and linear skinning. All surfaces, bones, weights, materials, hat fitting, targets and keyframes remain editable.

## Verification and limits
The source comparison uses original 15:00–15:05.63, local 0–5.63s, 169 frames at 30fps, native 960x540. The study is an authored articulation test, not reference documentary motion. Numerical palm-target errors do not establish that every finger avoids intersection. Exact source silhouettes, underarm/neck shading, finger contact and some camera/acting differences remain. No cloth simulation or full-body physics was added. Native scene JSON is authoritative; exported GLB samples bones and does not bake animated pose-volume corrections as morph targets. No push or deployment performed.

## Final measured checks
- 92 coupled cervical boundary vertices: zero measured gap after a seam sculpt and weight edit; normalized weight propagation and female-rig finite-transform checks passed.
- In the sampled shoulder region (5,286 triangles), the tested arm raise had 3 triangles below 10% of rest area with linear skinning and 0 with the combined shoulder support/volume correction. Neutral and tested neck-turn poses introduced no such compressed triangles. This is a local diagnostic, not proof of anatomical accuracy at every pose.
- Paired palm target residuals at the sampled hold times were under 1.9mm for both actors; finger collision freedom is not established.
- Cached subdivision matched freshly computed positions exactly in its regression test, kept 4 triangles per cage triangle, and invalidated correctly on a topology change. Corrective animation retained skin buffers; painting still invalidated them.
- Main timeline, material editing, invalid-import preservation, save/reload, frame stepping, 0.05x playback and GLB header/export checks passed without browser errors. Both full native review sequences rendered at 30fps without browser errors.

Extreme proportions and arbitrary poses still require visual review. Joint-volume correction conservatively skips non-rigid bone transforms. The videos show the current implementation, including remaining shading and finger-contact differences.
