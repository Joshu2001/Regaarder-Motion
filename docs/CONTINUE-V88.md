# Current handoff · V88

Current bounded refinement is source895–900(default template905–910). Do not extend past15:00 before Joshua reviews it. Original source remains immutable and is not used as a reconstruction texture.

Read IMPLEMENTATION-V88.md, FEEDBACK-V88.md, STRUCTURAL-ANALYSIS-V88.md, TIMELINE-V88.md, docs/v88/validation.json and interactive V88-refinement-review.html. Source entrypoint remains dist/checkpoint-sequence.js. `checkpointRefinementEnabled:false` selects the preserved V87 renderer. The prior V86/opportunity and earlier scene files remain hash-preserved.

Refined geometry source: scripts/v88/build_mesh.py, refine_weights.py; native dist/v88/skin.js and mesh-data.js. Do not overwrite candidates without retaining them. Dense inactive candidate and earlier weight/scene candidates are under dist/assets/archive. Camera nodes are authored/manual fits in v88/camera-keys.js; no exact source rig/camera recovery claim. The blue shot initially shows the near blue actor at image right from behind, then the camera moves until the blue actor reaches the left/profile by the end. Source cut is frame116.

Rerender through scripts/v88/render.mjs (150frames, slow CPU path). scripts/v88/encode.py produces normal and0.05x comparisons. scripts/v88/export_gltf.mjs exports true skins/animations/props in two shots. Core glTF camera position/orientation animate; changing focal keys are in extras and need importer support. Smoke/shader are editable native code, not a glTF volumetric asset.

Validation: scripts/v88/check.mjs, check_gltf.mjs, check_render.mjs, verify_video.py. Legacy check-checkpoint-v87.mjs explicitly selects V87 to test preservation. Regenerate registry, asset register and search index after modifying scene code/assets. Library source ZIP stable identity is unchanged by packaging; publication is not authorized or performed.

Priority next: remove model change at895 by refining the earlier shot; improve seat/hand/body motion and silhouettes; then improve smoke/shadows. Functional tests do not certify visual fidelity. No continuous audiovisual/0.05x viewing or actual Godot/browserGPU test was completed. No silhouetteIoU>=.90 or frame-perfect claim.
