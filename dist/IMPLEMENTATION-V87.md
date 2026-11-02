# V87: original14:55–15:00 implemented

Joshua approved the six-stage interpretation with “Yes go ahead”. The editable project now reaches original15:00 and stops there. Source895–900/local0–5/default project905–910 because the previous10-second offset remains.

Six stages and seven MotionCore entries implement sit completion, seated/standing coach travel, departure defocus, the measured blue-scene hard cut at898.866667, foreground crossing and settle. The same authored coach/hat identity is retained. The red seated pose moves pelvis, knees, ankles, chest, arms and wrists together; the hand-held boot remains attached and becomes occluded below the desk. No exchange or handshake is invented. Blue is a separate rig instance on the new shot, with camera orbit/lateral framing causing the foreground crossing. Narrative identification as Addie comes from the supplied script, not visual face identification.

No new raster asset was necessary. Shared rig, boot source, desk, chair and smoke are reused; all original asset bytes and thirteen earlier scene/director/rig files are preserved. New files: dist/checkpoint-sequence.js, checkpoint-stages.js and checkpoint-director.js. Source/world pose, camera, focus, rate/stage durations, world-space joint keyframes (linear/smooth) and root/joint offsets, materials, object transforms/visibility/opacity/blur and prop binding remain editable. Factory definitions are in docs/factory-defaults-v87.json. Catalog media bindings are isolated; replacing this boot does not change the V86 instance.

Native duration appends5seconds to905, reaching910; disable returns905. Elapsed playhead and user settings are preserved. Native browser playback/performance/persistence remain unverified; migration and catalog behavior are tested in the actual script harness.

## Visual limitations

These are stylized primitive mannequins with simplified anatomy/materials/acting, not faithful recovered human meshes. Folded arms, silhouette/turning, chair and desk geometry, lighting/rim highlights, smoke and camera motion still differ visibly from the original. A short first-second chair-position calibration carries the V86 arrangement into the aligned seated pose; only the incoming V86 endpoint is pixel-preserved. The outgoing desk remains more diagonal than the source. The new blue-scene camera is authored to match projected crossing and composition; its physical trajectory was not recovered. Source fidelity is partial despite passing timing/structural tests.

Source and final export both use30fps for these five seconds, so the measured cut falls exactly on frame116. Comparison and reconstruction contain the source narration; they are5seconds,150frames. Review is ordered-frame comparison with native-size samples; continuous audiovisual playback was not watched/listened to. No deployment or publication occurred.

Stop at original15:00. Refinement is the next task, not extra footage.

Joint and camera key times use original source seconds895–900. Positions are scene-world XYZ. Joint keys support linear or smooth interpolation, ordered unique times, and one independent list per named joint/rig. See checkpoint-joint-keys-v87-example.json. Stage object paths sample (sourceTime−895)/rate, so custom stage timing also retimes their traversal.
