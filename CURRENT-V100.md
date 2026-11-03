# V100 native character workshop

## Implemented
- Connected exterior neck-loop construction excludes the separate internal mouth boundary. V99 geometry ordering is retained for legacy saved heads; new templates use oval-v100.
- Direct pose button: click visible hand/foot/head, then use its move handle. Limb targets use two-bone IK with reach clamping. Head look distributes constrained rotation across head, neck and upper spine; limb IK solves afterward to preserve pins. Paired handshake is disabled when manually taking over its right hand. Undo restores previous state.
- Global height and build controls plus existing regional anatomy controls. Rest skeleton and surfaces use the same shape mapping. Build is an artistic shape control, not a mass or BMI measurement.
- Non-destructive one-level Loop subdivision for skinned surfaces; original sculpt/weight topology retained. Open seams remain fixed. Refined meshes inherit actor light layers. Painting displays the editable cage.
- Weight brush with distance falloff, normalization and seam propagation; sculpt supports inflate, deflate, smooth and X/Y/Z displacement. Existing driven corrective layers remain editable.
- Pin/release both feet; existing object-surface and seated contacts retained.
- Independent hat brim width/depth, smaller reference-oriented hat, violet-to-blue background timing, ultra shadow resolution and editable shadow normal/depth bias.
- V100 saved-scene namespace; previous V98/V97 scene can be restored explicitly.

## Limits
This is a specialized editor, not Blender parity. No full-body dynamics, automatic mesh collision avoidance, cloth simulation or automatic collision-free finger grasp. Head look target is static in scene JSON; animate head bones for keyed turns. One subdivision level is supported. Existing sculpt/weight/corrective operations require authored judgment. Subdivision cannot repair faulty anatomy or skinning by itself.

## Visual review
Original source 15:00–15:05.63, local time +900 seconds. Native output 960x540 at 30fps. Camera and silhouette remain approximations; neck transition, shoulders and finger contact are not yet an exact source match. No push or deployment.

## Checks performed
- Main timeline integration, invalid-import preservation, material edits, save/reload, 30fps stepping, 0.05x playback and GLB export passed without browser errors.
- UI click on the head created a look target; Undo removed it.
- Subdivision generated four triangles per original triangle without changing cage topology. Shape edits, normalized weight painting, subdivision toggle and invalid-setting rejection passed.
- Combined neck tracking and pinned-hand IK reached the requested test target within floating-point tolerance. This does not prove collision-free anatomy.
- Asset register hashes and active assets verified.
- Visual inspection still exposes shoulder/neck surface defects and imperfect handshake fingers. These are explicitly unresolved.
