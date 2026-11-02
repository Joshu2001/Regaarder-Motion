# V89 structural analysis

Observed reference: smooth faceless human-shaped figures with shirt/cuff/waist contours, separate hat, anatomical hands, a seated-to-upright action and folded-arm coach, then a blue/cream shot with arms down and a moving camera. Complete equal viewports are required; the original screenshots cropped part of the reconstruction and did not establish a missing coach.

Authored implementation: CC0 body/rig/weights and male target, one subdivided reusable anatomical asset, project-authored faceless head and fitted garment parts, actual skeletal animation, analytic arm/leg IK, physically shaded GPU meshes, shadow maps, independently editable camera/lights/props and an editable2.5D smoke plane. Reference pixels are diagnostic only.

Scene format: native3d/scene.js validates and samples serialized nodes/tracks. native3d/engine.js assembles and deforms actual meshes. native3d/editor.js edits those same objects/data. native3d/checkpoint.js supplies the bounded source-clock template. native3d-director.js connects the native world to the existing main renderer, capability registry and Blank Composition. Native JSON carries editor intent; GLB carries sampled geometry/animation with source metadata.

Unresolved inference: original topology, material settings, camera intrinsics, rig and hidden surfaces are unknown. Authored root trajectories are camera-space fits, not a recovered physical scene. Rig reach constraints do not prove correct collisions, every seat/hand contact or realistic deformation in all poses. No silhouette-IoU or photorealism certification.
