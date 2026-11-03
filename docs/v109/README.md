# V109 — Handshake timing polish and full-shot review

## Scope

This change is isolated on `worktree/handshake-reference-polish-v109`. It does **not** modify `main`, replace the original character meshes, or claim an exact visual match to the source footage.

### Implemented

- Keeps both characters' approached root positions and lean poses until the authored grip-release boundary at **2.55 seconds**. Previously, the approach hold ended at 2.05 seconds, making the bodies transition toward retreat while the handshake interaction was still in its contact phase.
- Holds both characters' final contact spine orientations until the same release boundary. The original spine easing started at 2.50 seconds.
- Retains the previously authored 3.30-second recovery, head shaping, hat controls, camera keys, and lighting. Corrections are ordinary editable scene keyframes.
- Adds `auditHandshakeTimeline(scene, times)` to sample both actor roots, rotations, lean, separation, camera position/target/FOV, and grip phase across 12 review times.
- Adds `scripts/qa/handshake-v109.mjs` for schema validation and temporal regression checks.

### Verify locally

Run the project through its existing local web server, then:

```sh
node scripts/qa/handshake-v109.mjs
node scripts/qa/check-v106.mjs
node scripts/qa/render-v106.mjs
```

The new shot audit has a data-level scope. These commands must be run before claiming browser-level test success; the GitHub connector cannot execute the repository tests.

### Manual reference comparison still required

Compare the source video and new native render at local timestamps 0.40, 0.70, 1.00, 1.75, 2.05, 2.55, 2.80, 3.20, and 3.30 seconds. Source footage offset is 900 seconds. Review registration separately from shape:

1. Camera: shot framing, focal appearance, angle, and the cut/pullback timing.
2. Silhouettes: head/neck, shoulder/back and chest profiles, pelvis/leg contours.
3. Hat: brim, crown, skull clearance and frame-to-frame tracking.
4. Contact: palm alignment, finger intersections and elbow/shoulder deformation.
5. Lighting: pale rear rim continuity, fill intensity, cast-shadow direction and blue material response.

Use the existing Reference Fit UI for uploaded frame contours/landmarks; do not infer unobserved 3D surface anatomy from a single image. Earlier V106 head/neck comparisons are limited to specific sample times and do not certify whole-body match. Any further anatomical, camera or lighting parameter change should be accepted only after checking held-out frames.

### Known gaps

This pass corrects authored contact/retreat timing and adds an inspectable timeline audit. It does not implement new retopology, comprehensive collision physics, calibrated reconstruction, new vertex weights, or photometric source matching. Visual acceptance remains pending side-by-side rendering and source-frame review.
