# V112: visual mesh review after V110 correction

## Status: inspected, **not production-accepted**

The reference is the user-supplied original-versus-V106 screenshot, source 902.417s / local 2.417s.

A local V108 asset archive was assembled with the **actual modified native 3D engine** from the isolated branch. Node/Three.js evaluated the skinned meshes, IK and fingerprint contact at local 2.417 seconds. The deformed geometry was exported with Three's vertex transforms and rendered using an independent VTK offscreen renderer. **This is geometry/pose evidence only, not an exact screenshot from the application's WebGL renderer**, so lighting and PBR appearance should not be scored by these images.

### Findings

- V110 excessively tilted the blue head and created an implausibly stretched-looking neck/shoulder transition.
- V112 mitigates the over-lean by reducing blue lean from 17 to 10 degrees, removing a head-only positional offset, and shifting the actor root toward the reference framing. The blue upper-body offset is reduced from -0.100 to -0.090 meters.
- The localized upper-body translation now follows the existing anatomical deformation rather than shifting coordinates *before* the anatomical shape profiles are evaluated.
- The shared handshake target, cream hat parameters and scene lighting settings remain fully editable.
- **Not resolved:** hand/finger geometry remains exaggerated, the free arm is more visible than in the reference, and the head/neck silhouette still differs from the reference.
- Camera and material fidelity **cannot** be certified by VTK output or a single reference frame; full WebGL screenshots and additional reference times remain necessary.

### Validation still required

1. Run `node scripts/qa/reference-polish-v110.mjs`, `node scripts/qa/handshake-v109.mjs`, `node scripts/qa/handshake-render-v109.mjs`, and existing V106 test suite in an environment that supports Chromium WebGL.
2. Capture full-resolution native WebGL renders at local 0.4, 0.7, 1, 1.75, 2.417, 2.55, 2.8 and 3.2 seconds.
3. Quantify face/head and shoulder silhouette, palm-to-palm residual, finger intersection, hat contour, and back rim vs real reference frames; modify the actual scene until held-out frames improve.
4. Preserve original reconstruction history and keep these edits off main until the visual and temporal checks pass.

Source changes on `worktree/handshake-reference-polish-v109`; user-facing preview generated separately, not stored inside repository.
