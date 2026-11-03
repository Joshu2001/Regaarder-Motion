# V113 — bounded follow-up to V112

Reviewed against branch baseline 70c0a69986135b83c6d7a2466996ab720be35717.
The V112 preview was an offline render; this pass uses the actual native WebGL renderer.

Changes: raise shared palm target from 0.905 to 0.960 m; increase palm spacing from
0.032 to 0.062 m; relax finger curls; register the actual shaped palm after wrist
orientation using two bounded, smoothly blended IK corrections. Narrow the blue
cranial profile slightly without changing its height, root, timing or topology.
Inactive contact reports now expose finite zero metrics with active:false.

Eight times tested: 0.4, 0.7, 1.0, 1.75, 2.417, 2.55, 2.8, 3.2 s.
During full contact the worst palm-target residual drops from approximately 41 mm
to numerical precision. Sampled signed nearest-surface depth is lower at every
tested active frame, about 74% lower at local 2.417 s. The raw comparison is in
contact-comparison.json. This sum across sampled vertices is a heuristic, not
a watertight intersection volume or proof of collision-free meshes.

Remaining: visible/possible finger intersections, thumb/finger anatomy, free-arm
posture, neck contours and full source-camera/lighting matching. This remains a
review candidate, not production-accepted. Main is not promoted by this change.

Run with a Chromium WebGL environment:
node scripts/qa/hand-contact-v113.mjs
node scripts/qa/reference-polish-v110.mjs
node scripts/qa/handshake-render-v109.mjs
The comparator temporarily reconstructs the immutable V112 engine/preset from
git history; temporary comparison modules are removed afterward.
