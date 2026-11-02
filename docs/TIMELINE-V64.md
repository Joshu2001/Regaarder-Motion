# V63 timeline and editorial context

Original transcript preserved unchanged. Later clip timings are verified clip-relative; nominal source offsets are provisional. Sound and exact transcript alignment remain unassigned.

| Scene | Review seconds | Clip seconds | Implementation |
| --- | --- | --- | --- |
| father-workshop | 0.000–4.135 | —–— | The father works in shoe factories but cannot support the family on his wages. |
| mother-passage | 4.135–6.135 | —–— | The household needs another source of income. |
| mother-laundry | 6.135–9.135 | —–— | Their mother runs a laundry business, cleaning customers’ clothes. |
| aerial-deliveries | 9.135–16.135 | —–— | Rudi and Adi deliver cleaned clothes around town. |
| laundry-title | 16.135–20.135 | —–— | The brothers become known as the Laundry Boys. |
| war-clouds | 20.135–25.597 | —–— | Both brothers are drafted into the German Army for the First World War. |
| war-hold | 25.597–27.935 | —–— | The brothers return to find that the mother’s laundry has lost its customers. |
| eye-portal | 27.935–28.864 | —–— | The narration returns attention to the mother’s failed laundry business. |
| workshop | 28.864–32.288 | —–— | The mother’s laundry has lost every customer. |
| number-reel-1 | 32.288–32.980 | —–— | The story moves from family loss to the broader economic aftermath. |
| ruins-wide | 32.980–35.012 | —–— | The war has destroyed Germany’s economy. |
| ruins-close | 35.012–37.355 | —–— | The situation looks bleak. |
| over-shoulder | 37.355–43.624 | —–— | Adi comes up with a business idea to help the family survive. |
| portrait-dissolve | 43.624–44.584 | —–— | Adi’s interests and intended trade become the focus. |
| portrait-mono | 44.584–50.685 | —–— | Adi has an interest in athletics and wants to follow his father into shoemaking. |
| number-reel-2 | 50.685–51.190 | —–— | The narration introduces footwear designed for particular events. |
| shoe-strip | 51.190–57.597 | —–— | People did not typically have specific shoes for different events. |
| shoe-turn | 57.597–64.446 | —–— | Spiked running shoes could give athletes an advantage. |
| photo-flip | 64.446–66.082 | —–— | Adi turns his mother’s laundry shed into a workshop. |
| photo-card | 66.082–69.582 | 0.0–3.5 | Reference-informed photo card |
| portrait-color | 69.582–78.136 | 3.5–12.054000000000002 | Reference-informed portrait color |
| dark-exit | 78.136–79.382 | 12.054000000000002–13.299999999999997 | Reference-informed dark exit |
| ruined-street | 79.382–91.482 | 13.299999999999997–25.400000000000006 | Reference-informed ruined street |
| ruin-occlusion | 91.482–93.582 | 25.400000000000006–27.5 | Reference-informed ruin occlusion |
| salvage-search | 93.582–102.364 | 27.5–36.282 | Reference-informed salvage search |
| cable-focus | 102.364–105.582 | 36.282–39.5 | Reference-informed cable focus |
| salvage-overview | 105.582–111.325 | 39.5–45.242999999999995 | Reference-informed salvage overview |
| vertical-workshop-passage | 111.325–112.882 | 45.242999999999995–46.8 | Reference-informed vertical workshop passage |
| wheel-trimmer | 112.882–121.382 | 46.8–55.3 | Reference-informed wheel trimmer |
| shoe-walk-handoff | 121.382–127.282 | 55.3–61.2 | Reference-informed shoe walk handoff |
| shoe-magnifier | 127.282–132.045 | 61.2–65.963 | Reference-informed shoe magnifier |
| shoe-evolution | 132.045–136.782 | 65.963–70.7 | Reference-informed shoe evolution |
| next-occlusion | 136.782–137.324 | 70.7–71.242 | Reference-informed next occlusion |

V60 changes preserve default boundary times. User phase edits now retime internal events and containing stage duration together. See FIDELITY-CORRECTIONS-V60.md.

V60 preserves default boundaries. New walking, living atmosphere and anchored cables are active within those phases. See ANIMATION-QUALITY-V60.md.


## Pending correction review · 2026-10-29 · annotated V60 feedback

Status: analysis only; no renderer, assets, timing defaults or user settings changed. User requests interpretation and proposed corrections before approval. Evidence: all 14 uploaded annotated screenshots (083720 and 093155–095137), current source code, preserved classic and expanded walker comparison. Still images establish visible states, not measured movement speed or proof of original 3D geometry.

Preferred direction: restore original classic searcher artwork and extend both arms/hands without changing face, coat silhouette or leg artwork. Preserve expanded mesh rig as an optional inactive alternative. Current expanded atlas has coat/waist seams and changed proportions.

Review timeline remains unchanged. Affected phases: photo-card/portrait-color (clip 0–12.054); ruined-street (13.3–25.4); ruin-occlusion (25.4–27.5); salvage-search/cable-focus/overview (27.5–45.243). Proposed edits require subsequent approval.

Observed gaps: reference boy/room has selective color beneath monochrome mother overlap; current overlap is washed-out and boy too monochrome. Street has overly repeated tall intact facades, straight corridor, uniform gravel rise and red window openings; reference has asymmetric collapsed shells, visible irregular road, varied debris depth and partial bodies at entry. Current actor has brown hair/clothes versus reference mostly monochrome with pale hair and dark equipment/boot silhouette. Reference fireball broadens/rises into black smoke while current flame is narrow, masked and short-lived. Reference electrical lattice collapses with bright sparks and foreground wreckage; current salvage cables are anchored wind curves, not this destruction event. Reference red atmosphere is brighter with denser dark smoke; current low-contrast clouds and dark grading obscure separation. Camera push/foreground facade occlusion differs in scale, direction, framing and depth. Salvage terrain is too level/repetitive, two standing facade strips too regular, helmet sits visually apart, walker is insufficiently integrated into terrain and beam lacks convincing interaction.

Implementation causes checked: classic cutout body includes both arms in a static body polygon; integratedFire uses a 140x220 rectangle, radial mask and simple smoke discs; street uses a separate screen-scaled figure rather than the scene camera transform. These explain stiffness, narrow fire and inconsistent parallax. Proposed solution: preserve classic artwork, split/reconstruct occluded arm patches, add shoulder/elbow/wrist controls, synchronize held torch; rebuild varied 2.5D ruined layers; add broad explosion/smoke stages, timed breakable electrical rig and localized sparks/light; calibrate selective color and world-space camera/actor relationships. Original technique remains inferred, not confirmed full 3D. Reuse existing occlusion action. All new actions need stable IDs, source-independent bindings, simple presets plus advanced exact controls. Recheck staged and native-speed reference/current motion after approval; screenshot annotations alone do not settle flash timing or velocities.


## V61 feedback and implementation ledger

Joshua approved the preceding correction plan with “Go ahead, implement.” Boundaries remain unchanged. Photo-card/portrait-color (clip 0–12.054) now uses separate color boy and monochrome mother, revised portrait placement and warm room. Ruined-street (13.3–25.4) uses varied ruins/road, shared camera projection, broad explosion, persistent smoke, timed electrical collapse, sparks and lightning. Ruin-occlusion (25.4–27.5) changes foreground travel direction. Salvage-search/cable-focus/overview (27.5–45.243) restores the original photographic walker with both-arm articulation and asymmetric ruins, retaining mesh and original static-arm alternatives. See FIDELITY-CORRECTIONS-V61.md for exact values, evidence, inferred techniques, migrations and remaining gaps. Downstream bicycle/shoe/lens/route boundaries remain unchanged. No sound alignment or confirmed full-3D reconstruction is claimed.


## Subsequent V61 rejection and pending detailed review · 2026-10-29

Joshua is dissatisfied with V61. New annotated screenshots 113121–114505 and sampled comparison frames identify missing gray paper surround/right wooden structure, grayscale destination room, overlap/framing/light mismatch, unchanged rubble road material, repeated facade source/red leakage, wrong street person/costume/scale, fence-like electrical structure, weak smoke/incorrect opening grade and paper-like sparks. Analysis only: no visual edits or timings changed. Pending issue IDs P01–P04 and S01–S06 are detailed in V61-REFERENCE-REVIEW.md. Recommended production path: preserve photographic artwork, calibrated 2.5D layers and both-arm animation; mesh remains optional. Await interpretation approval before implementation.


## V62 approved correction implementation

Joshua approved P01–P04/S01–S06 with “go ahead, implement”, then requested detailed low-effort editing and resumed after interruption. No phase boundaries changed. Photo-card/portrait-color 0–12.054: separate gray surround, colored room/window, wooden shelf, monochrome mother, independent incoming boy and foreground depth. Ruined-street 13.3–25.4: photographic dark road/asymmetric ruins, dark interiors, corrected rear-view character, pivoting supports/wires, finite sparks, denser smoke and retained lightning/flash. Existing occlusion and downstream phases preserved. Final visual acceptance pending; see FIDELITY-CORRECTIONS-V62.md for exact defaults, provenance, tests and limits.


## Subsequent V62 annotated review · analysis only

All 17 new annotations merged with unannotated frame checks and implementation evidence. Pending issues R01–R14 cover mat, contrast/portrait zoom, destruction entry, building masses, cable origins/topology, light, framing/lateral passage, salvage layout/attachments and walker progression. Literal no-zoom/no-cutout/no-lightning claims are qualified; perceptual mismatches remain confirmed. Shared-camera photographic/3D hybrid proposed. No visual changes applied. Further implementation awaits interpretation approval; see V62-MERGED-REVIEW.md.


## V63 · merged corrections authorized and implemented

Joshua authorized the R01–R14 visual edits. Existing stage boundaries remain. Paper/portrait (0–12.054): broader irregular mat, stronger continuous close approach, revised opacity/exposure. Street (13.3–25.4): explosion and falling spans pre-roll before entry; camera/ground/photo/actor share projection. Late lateral travel starts at 23.2 and continues beneath foreground occlusion into the 25.4–27.5 passage. Salvage/search (27.5–45.243): darker terrain/storm, right-side ruin and geometry-derived cable binding; photographic walk has faster matched authored path/cadence and vertical alpha-sole correction. Further source identities, exact original origins and horizontal stance locking remain unresolved/approximate. User visual review pending. See FIDELITY-CORRECTIONS-V63.md.

## V64 feedback ledger and structural update
Joshua confirmed unresolved cable visibility, inadequate character approach, unattached cable, adult identity and insufficient second-arm motion. Source/code/frame checks confirmed the perceptual defects. V64 overlaps support failure with approach (12.95–21.7), retains actor during pan (23.2 onward), changes default salvage identity to adolescent, uses continuous arm deformation and solid wall mounts, and preserves prior alternatives. See FIDELITY-CORRECTIONS-V64.md for confirmed/qualified findings and exact controls. Native reference master/audio remain unavailable; lower-resolution comparison is the evidence source.


## New reference analysis — nominal 03:55–04:47
Analysis complete before visual editing; subsequent implementation authorized. Source library ID libfile_2b56a733ccc081918a0099e97004717b, last video PTS52.902. The old nominal source-end estimate237.627s is not a verified overlap: previous footage ends at shoe diagram/window, new footage opens in SALES room. Missing bridge around nominal03:40–03:55, preferably obtain03:40–04:00. Preserve earlier exports and mark their source mapping provisional. See NEXT-REFERENCE-REVIEW-03m55.md/json. Production defaults/assets unchanged in this analysis pass.
