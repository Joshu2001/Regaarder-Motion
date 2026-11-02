# V60 · expanded walking, moving atmosphere and cables

Implemented after Joshua approved a wider walking range and a further quality pass. This is a reference-informed revision for feedback, not a certification that the result surpasses the reference. The new15-joint mesh is2D, not a recovered3D human. No motion-capture footage or external runtime generation service is claimed.

## Preservation

The original `cutout-walk.js`, its gray-coated source image and its limited-range defaults remain unchanged. Search **Classic cutout walk** in the Animation library. `assets/classic-cutout-walk-v59.json` is a reusable preset. `assets/walk-rig-retention-v60.json` records hashes and both old/new preset paths. New activation is independent from retention: the continuation defaults to the expanded mesh; **Walker: mesh / classic** switches the active method. Earlier boy, room, vase, sill and restored shoe assets remain preserved.

## Expanded movement

The new `mesh-walk.js` rig exposes15 joints with XY posing: hips, neck, head, two hip/knee/ankle chains and two shoulder/elbow/wrist chains. The source atlas has nine separated photographic parts: torso, head, coat skirt, thigh, shin, boot, upper sleeve, torch forearm and plain forearm. Parts are reused for left/right limbs and can be replaced independently.

Default deformation is a6×12 grid:91 vertices and144 triangles per deforming section, across ten rendered sections. Mesh detail controls allow2–18 columns and3–28 rows. More vertices improve deformation sampling; they do not create missing surfaces or turn the photograph into a full3D character. Head and boots additionally have individual size/angle controls. Body parts use source attachment handles and may stretch when the user deliberately creates an extreme pose.

Walking includes stance/swing trajectories, two-bone leg IK, weight-related hip rise/sway, torso lean/twist, head motion, arm swing, elbow fold, wrist motion, heel/toe roll, breathing and a deforming coat skirt. The foot-X curve has matched derivatives at stance/swing and cycle wrap. During stance, its backward travel cancels a matching linear root speed. The modeled sole is kept on the chosen flat ground line as it rolls from heel to toe. Contact shadows follow support feet. Foot planting is exact in that matched flat-ground model, not a universal guarantee during arbitrary camera reframes or uneven3D terrain. The scene's camera and photographic ground remain approximations.

A new photographed-parts atlas was generated from the existing searcher reference. Raw output bytes, exact prompt, source reference, crop rectangles and hashes are in `assets/walker-generation-v60.json`. It is generated artwork, not filmed archival footage. Original whole-person artwork is still available as the classic asset.

## Controls without code

Open **Walk studio** for a blank composition, or **Next sequence → Walking** for the active scene. Choose Natural, Careful over rubble, Brisk or Standing; adjust pace, step length, foot lift, time on ground, lean and arm swing. Drag the blue joints to enter Pose mode. Scene travel is independent: person position, ground height and travel multiplier are separate controls; multiplier1 matches the planted-foot trajectory. Standing mode holds the character in view. A joint selector with numeric XY fields provides an alternative to dragging. Reset positions with one button.

Fine controls expose the hips, chest, head, elbows, wrists, coat, breathing, foot roll, slope, segment lengths, body/limb widths, mesh detail and beam-tip attachment. Select a body part, replace it and drag the blue start/gold end handles to align a replacement limb. Head/boot placement uses the main joints plus size/angle controls. No code or JSON entry is required for these workflows. Presets export/import through buttons and preserve part alignment by default, with an explicit option to load saved alignment; the advanced machine-readable definition remains available separately.

Original few-piece settings remain in a clearly labelled Classic section. Classic and mesh parameters do not silently redefine each other. Presets retain content separately from motion. The shared animation wrapper still supplies speed, reversal, delay and slow/fast timing for reusable instances.

## Clouds and cables

The red sky uses deterministic multi-octave cloud fields with independent wind and shape evolution. Multiple depth layers move at different speeds. Fields are sampled at8Hz and interpolated between adjacent states, avoiding a visible frame-step. Wind can stop while shapes continue evolving, or both can stop. Cloud density, opacity, size, layers, wind direction, colors and evolution are editable. Small cloud-related illumination changes affect scene light. This is an evolving2D atmosphere, not a physical volumetric fluid solver.

The earlier warm sky and descending cloud transition also receive editable living-cloud detail while preserving the continuous existing travel curve. Their cloud speed, evolution and detail strength have separate controls. The existing sky/transition artwork remains retained.

Cables attach at editable left/right XYZ anchors, sag between endpoints, sway subtly with wind, and have independent spacing, thickness, subdivisions, color and cue-driven highlights. Default24 segments per cable creates72 modeled pieces for three cables. Endpoints stay fixed when wind changes. Cable attachment height and close framing were refined to put the wires near the upper ruin. This analytic curve is not a full tension/spring simulation. Explicit user model overrides continue to take precedence over the default analytic scene.

## Validation and review

Tests exercise reachable IK lengths, stance/root cancellation, sole height, foot-curve continuity, pose hierarchy, mesh-density changes, safe preset loading, source readiness, classic preservation, pace/facing controls and real pointer-driven joint posing in a DOM/canvas harness. Atmosphere tests distinguish cloud evolution from wind, verify deterministic stopped states and temporal interpolation, and verify fixed cable anchors, sag, sway and segment counts. Shared full/focused render samples remain deterministic. Technical checks do not establish subjective visual superiority.

Review exports are silent. The reference comparison retains clip-local timing; the original source's71.242-second span disagrees with its nominal60-second filename. Audio/master alignment remains unknown. Native browser/hardware rendering has not been separately certified. Architecture repetition, photographic seams, ground/camera matching and stylized smoke can still need refinement after feedback.

## Feedback ledger

- Joshua requested greater walking range, more vertices and degrees of freedom before any potential replacement by filmed material. Expanded mesh/joint tools were added; filmed replacement was not necessary for this pass.
- Joshua explicitly required preservation of the original limited-range walker. Source, renderer, preset and searchable effect are retained.
- Joshua requested moving clouds, electrical cables and stronger environmental motion. Both early/later atmosphere and anchored cables were updated.
- Joshua requested granular, very simple controls for future use. Named presets, sliders, joint dragging, part replacements and visual attachment calibration were added to standalone and sequence tools.
- New assets and original candidates remain separately registered. Current timeline boundaries remain unchanged; exact settings are captured in the new review manifest and animation catalog.

Export validation now writes each long render to a unique temporary file, fully decodes it with fail-fast error detection, and atomically replaces the deliverable only after success. This prevents interrupted/restarted encoders from corrupting a finished export. The final package repeats strict decoding before recording hashes. Preview-detail buttons trade mesh subdivision against interactive cost; no native60fps performance guarantee is made.


## Pending correction review · 2026-10-29 · annotated V60 feedback

Status: analysis only; no renderer, assets, timing defaults or user settings changed. User requests interpretation and proposed corrections before approval. Evidence: all 14 uploaded annotated screenshots (083720 and 093155–095137), current source code, preserved classic and expanded walker comparison. Still images establish visible states, not measured movement speed or proof of original 3D geometry.

Preferred direction: restore original classic searcher artwork and extend both arms/hands without changing face, coat silhouette or leg artwork. Preserve expanded mesh rig as an optional inactive alternative. Current expanded atlas has coat/waist seams and changed proportions.

Review timeline remains unchanged. Affected phases: photo-card/portrait-color (clip 0–12.054); ruined-street (13.3–25.4); ruin-occlusion (25.4–27.5); salvage-search/cable-focus/overview (27.5–45.243). Proposed edits require subsequent approval.

Observed gaps: reference boy/room has selective color beneath monochrome mother overlap; current overlap is washed-out and boy too monochrome. Street has overly repeated tall intact facades, straight corridor, uniform gravel rise and red window openings; reference has asymmetric collapsed shells, visible irregular road, varied debris depth and partial bodies at entry. Current actor has brown hair/clothes versus reference mostly monochrome with pale hair and dark equipment/boot silhouette. Reference fireball broadens/rises into black smoke while current flame is narrow, masked and short-lived. Reference electrical lattice collapses with bright sparks and foreground wreckage; current salvage cables are anchored wind curves, not this destruction event. Reference red atmosphere is brighter with denser dark smoke; current low-contrast clouds and dark grading obscure separation. Camera push/foreground facade occlusion differs in scale, direction, framing and depth. Salvage terrain is too level/repetitive, two standing facade strips too regular, helmet sits visually apart, walker is insufficiently integrated into terrain and beam lacks convincing interaction.

Implementation causes checked: classic cutout body includes both arms in a static body polygon; integratedFire uses a 140x220 rectangle, radial mask and simple smoke discs; street uses a separate screen-scaled figure rather than the scene camera transform. These explain stiffness, narrow fire and inconsistent parallax. Proposed solution: preserve classic artwork, split/reconstruct occluded arm patches, add shoulder/elbow/wrist controls, synchronize held torch; rebuild varied 2.5D ruined layers; add broad explosion/smoke stages, timed breakable electrical rig and localized sparks/light; calibrate selective color and world-space camera/actor relationships. Original technique remains inferred, not confirmed full 3D. Reuse existing occlusion action. All new actions need stable IDs, source-independent bindings, simple presets plus advanced exact controls. Recheck staged and native-speed reference/current motion after approval; screenshot annotations alone do not settle flash timing or velocities.
