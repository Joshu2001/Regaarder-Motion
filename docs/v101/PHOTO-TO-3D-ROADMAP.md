# Later: editable photo-to-3D

1. Import a photo as an editable reference plane with crop, scale and camera settings.
2. Confirm landmarks and fit a reusable anatomical mesh using deterministic optimization. Store landmark edits, fitting parameters, camera assumptions and residuals.
3. Mark unobserved/back-side geometry as estimated. Offer additional side/back photos and user correction.
4. Preserve base mesh, rig, shape parameters, masks, textures and fitted result as separate editable layers.
5. Add optional AI proposals as reversible layers with comparison and acceptance controls. Do not overwrite user edits.

A deterministic implementation can reproduce the same estimate from the same inputs; it cannot make hidden geometry uniquely recoverable from one picture. This is a planned feature, not implemented by this extension.
