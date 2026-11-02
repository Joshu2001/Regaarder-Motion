# V88 structural analysis

Observed: the original has continuous faceless mannequins, a broad black desk with thin bright top, a curved chair, background smoke, folded-arm cream coach, red sit/straighten motion, then an arms-down blue/cream shot. A complete-view comparison corrects the audit's cropped-viewport claim that the coach was missing.

Authored implementation: smooth implicit mesh,51joint skin, localized anatomical weights, two-bone arm IK, torso/head articulation, independently projected actors/props, CPU depth-buffered triangles, directional/specular/rim shader, procedural2D atmosphere, source frame116 cut. Reference images/videos are diagnostics, not production geometry or textures.

Inference/limits: exact original rig/topology/material/camera are unknown. Camera-space landmark fitting does not establish physical root motion or seat constraints. A closed rest surface does not establish zero self-intersections or good deformation in every pose. Hand contact, silhouette overlap, shadows, smoke structures and previous-scene continuity require further refinement. Exact measured defaults/poses reside in dist/v88 and docs/v88/factory-settings.json.

Final review: the blue figure starts at image right in a rear view, then crosses to the left/profile as the camera travels. A previously static settled camera was rejected and retained in archived comparison videos. Camera nodes are fit to manually estimated blue neck/wrist and cream head anchors; RMS17–31px is retained as uncertainty. The outgoing coach approaches the camera before the cut.
