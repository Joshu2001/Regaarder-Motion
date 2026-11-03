# V98 — integrated character and motion refinement

Status: reviewable improvement, not an exact source match. This release does not claim every visible defect has been eliminated.

## Source and timing

Reference: The Nazi Brothers Who Started Rival Shoe Companies - MagnatesMedia (360p, h264)(1).mp4, 640×360, 30 fps, 26:54.63288. Source is diagnostic reference, not shipped template media. `sourceTime = localAge + 900`. The authored documentary timeline starts this interval at project time 910 seconds; source and project time are different clocks.

The handshake ends at local 169/30 seconds (source15:05.6333). The source includes a black interval before the hall; it is now explicit. Trophy entrance and two-line typography use independent delays. Verified cut boundaries also refine the tunnel, television and goalkeeper/goal handoffs; selected internal archival cuts remain within their replacement slots. Camera rise now pans and changes its aim so actors leave the frame, rather than keeping them centered.

## Implemented

- Main index loads the updated renderer and final minute; all readiness flags pass. Existing separate pages and custom scenes remain available.
- Scene-camera playback is the editor default; orbit is explicit. Added 0.05×/0.10× preview, frame stepping, camera aiming mode and editable camera tracks.
- Paired grip defines shared world-space palms, reach/hold/release timing, shake, spacing and individual finger curl. User can disable it to pose individual bones/IK.
- Character placement, reach and lean corrected. Palm positional residual is measured independently of visual collision quality.
- Body, head and fitted garments share stitched boundaries and normals. Boundary weight edits propagate across adjoining surfaces. Independent head visibility, color, roughness and physical finish work in continuous mode.
- Hat fit measures the visible edited head. Collar/cuffs refined; protruding decorative waist rings disabled. Shirt abdomen and trouser crotch surfaces receive restrained tailoring adjustments.
- Lighting, roughness and shadow bias/frustum revised to reduce surface striping. This is still a stylized mannequin reconstruction.
- Updated native templates are available through MotionCore and Blank Composition. Scene JSON retains surfaces, bones, weights, correctives, parts, materials and interactions.
- Invalid materials, character styles and paired contacts are rejected before import; rejected imports preserve the previous scene.
- GLB export compacts unused vertices while retaining skin attributes and sampled transforms. Tested export reduced from about41 MB to8.4 MB. Native JSON remains authoritative for procedural controls and driven surface corrections.
- Asset hash/register documentation repaired. Fourteen pre-existing inactive archive references have no repository bytes; their metadata is retained and marked unavailable. No active asset is missing.

## Evidence

- Main page reached all continuation, native-editor and final-minute readiness flags, with no captured browser errors.
- Selected boundary/frame seeks through the final minute passed the smoke check. This does not establish visual fidelity of every archival scene.
- Save/reload preserved body shape, head material and finger settings. Malformed contact import rejected without changing current state.
- 1/30s stepping and slow playback exercised; GLB header/version validated.
- 181 time samples and five malformed-import cases passed semantic checks. Final-minute timing imports reject negative/non-finite delays and stage coverage has no gaps.
- 130 shared head/body boundary vertices retained zero measured gap after a sculpt and weight edit; boundary weights propagated, body visibility worked and the tested female rig matrices stayed finite.
- 180 native browser-rendered frames generated at30 fps; comparison uses the169-frame handshake interval. A separate0.05× comparison is provided. Continuous0.05× human-style playback was not watched.
- Measured palm-target residual across82 actor samples during full contact: maximum below0.6 mm. This is a positioning metric, not proof of collision-free finger meshes.

## Remaining gaps — do not call finished

- Exact source finger shape, thumb wrapping and collision-free grip are not proven; no general mesh collision solver is implemented.
- Source-exact head, hat, back, clothing and leg silhouettes, and camera trajectory still differ. Current anatomy/lighting changes are authored approximations.
- General subdivision/topology tools and cloth simulation are absent. Arbitrary extreme edits require visual review.
- Later historical live-action segments still use illustrative placeholders or replacement slots. They are not reconstructed archival footage.
- Fourteen legacy inactive archive files were not present in the starting repository; this release preserves their records, not missing bytes.

## Use

Serve `dist` and open `/index.html` for the integrated application, or `/character-editor-v97.html` for the character editor. The versioned runtime directory remains named `native3d-v97` to avoid multiplying copies; its implementation is V98. The standalone editor offers an explicit previous-session restore button and retains invalid saved bytes for recovery. Existing local custom scenes remain available; use the updated preset explicitly when replacing a custom scene. Nothing in this release has been pushed or deployed.
