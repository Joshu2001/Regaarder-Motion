# Motionclone V66 — reference scene and effect gap audit

30 October 2026. Analysis only; no production visuals, assets, timing, source ZIP or deployment changed. Joshua requested identification and interpretation before asset creation or editing. Implementation approval remains pending.

## Evidence and clock correction

Reference: uploaded full opening WEBM. Native resolution 1920×1080. Decoded video: 5,278 frames; first PTS 0.000, last PTS 320.805 seconds (05:20.805), despite filename ending 05:08.9. Reported 1000/1 is not the actual playback cadence. Median adjacent frame interval is 0.060 seconds; largest is 0.569 seconds. This variable capture cadence limits exact motion recovery; it does not identify which original master frames were dropped.

All times below refer to this upload's decoded playback clock, approximately. Overview sampled every three seconds, opening sampled every second, and bridge sampled every half-second. Contact-sheet labels use resampled playback times; they are not asserted native-frame timestamps or exact cut boundaries. The dense bridge labels are local time + 03:48. The terminal partial tile contains padded black cells, which are not source scenes.

Project evidence: supplied V66 ZIP, AGENTS.md, fidelity workflow, scene modules, source documentation, and supplied 52.97-second V66 comparison. Sampled the comparison at five-second intervals. Earlier scenes were audited against code/documentation, not a fresh complete template render. Existence in code is distinct from verified playback fidelity. No full audio transcription or native-speed player review is claimed.

Old nominal clip names do not match this master clock consistently. For example SALES is visible around 04:04–04:07 here, whereas the handoff anchored its continuation near nominal 03:55. Establish scene landmarks before final side-by-side synchronization; do not impose one global offset.

## Opening scene map

| Upload clock, approximate | Observed reference | Current evidence / status | Work proposed after approval |
|---|---|---|---|
| 00:00–00:06 | Small central globe grows toward camera; blue Adidas and magenta Puma sides, luminous dividing seam and atmospheric light | Missing from the active opening path inspected. Current opening begins with town/map → brands → portrait | Add globe/Earth asset or sphere, independent brand planes, atmosphere/rim light and camera approach; connect globe to geography |
| 00:06–00:11 | Clouded aerial approach, white location outline and HERZOGENAURACH label | Map/title opening exists, but inspected path is an image zoom and overlays, not this full globe-to-geography approach | Separate cloud veil, boundary stroke and anchored place label; stage camera speed and arrival |
| 00:11–00:15 | Monochrome portrait, brand marks and red torn eye treatment | Existing opening capability | Verify overlay scale, red-strip alignment, portrait approach and transition edges in a new render |
| 00:15–00:21 | Close shoulder passes; desk, lamp, paper and flames; two large faces emerge behind fire | Existing reveal/fire/portrait sequence | Review shoulder occlusion, fire growth, lighting relationship, face scale and flame attachment; not a scene to recreate from scratch |
| 00:21–00:30 | Standing brothers before factories; giant rear portraits; roofs hide lower portraits; red/blue company split and historical brand marks | Existing collage and occlusion modules | Compare depth separation and entrance/exit order; preserve approved art while identifying geometric and typography differences |
| 00:30–00:39 | Chess close-up expands into board view; camera travels around board into low piece-level view; bright rectangular light behind | Actual 3D chess module exists | Match board/piece silhouette, camera height/orbit, focus, reflection and light placement; code existence is not acceptance |
| 00:39–00:49 | Earth/soil-like foreground edge clears into aerial town; approach/rotation; blue/red territories and logos; fade to black | Existing soil curtain and aerial action; aerial is an image on a perspective plane | Diagnose stretch/flatness under orbit; add shallow terrain only if needed for changing perspective; retain black interval |
| 00:50–00:55 | Two rear-view men against cloudy mountains; Lies, Secrets and Corruption write on during retreat | Existing Noir action | Review independent cloud movement, word stroke timing, foreground overlap and camera depth |
| 00:55–00:59 | Lateral move to firing soldiers; explosion and smoke; foreground ridge hides lower bodies | Existing Conflict action | Match lateral direction, explosion onset/decay, muzzle attachment, smoke and terrain occlusion |
| 00:59–01:04 | Warm blurred depot; near crates and shoulders; pullback reveals both men | Existing Depot action | Check floor contact, near-plane speed, focus settling and pullback pacing |
| 01:04–01:15 | Depot becomes framed image, recedes and rotates through red/blue storm; flash and title assembly | Existing frame/glass/storm/title system | Match frame conversion, optical glass treatment, storm depth, flash duration and letter assembly |

Conclusion: the entire first minute is not missing. The globe and its geographical connection are the clearest opening omissions. Most other opening content already has a corresponding implementation and requires a visual comparison, not duplicate asset generation.

## Remaining sequence map

| Upload clock, approximate | Visible reference | Current status |
|---|---|---|
| 01:15–01:29 | Black pause; Chapter 1 / THE LAUNDRY BOYS, drifting footwear, scattered blurred letters; date begins late in interval | Chapter/date actions exist; timing needs remapping |
| 01:29–01:42 | Mother/baby room, lateral foreground passage, baby by window, window approach into boys | Nursery/window actions exist; depth and occlusion require visual verification |
| 01:42–01:51 | RUDI/ADI labels; boys clear to town; HERZOGENAURACH title | Village action exists |
| 01:51–02:00 | Shoemaker foreground hand/shoe, lateral passage to woman holding blouse | Workshop and garment actions exist; real gesture fidelity remains limited |
| 02:00–02:15 | Red aerial route/title, cloud cover, wartime boys rising against sunset | Laundry/war actions exist |
| 02:15–02:39 | Seated young man; destruction images; monochrome window portrait; number wheels into outlined shoe row | History sequence exists |
| 02:39–03:00 | Selected spiked shoe turns, photo/paper transition, colored seated portrait, dark exit | Shoe/paper/portrait actions exist |
| 03:00–03:33 | Ruined street, rear-view figure, electrical collapse; sideways wall clearance into rubble walk and highlighted cable | Expansion and electrical/cable/walk actions exist; body gait is an approximation |
| 03:33–03:50 | Bicycle-wheel leather trimmer, shoe/feet handoff, magnifying lens | Existing bicycle/lens actions |
| 03:50–03:53.5 | Four shoe cutouts assemble along dotted diagram route | Existing diagram action |
| 03:53.5–03:56 | Bundled cash tumbles across diagram, with near objects larger/blurred; pile/burst obscures transition | Missing corresponding cash passage in inspected join; current generic wooden occluder does not reproduce it |
| 03:56–03:59.5 | Suited young man on street, seen across near shoulder/back of another suited figure; foreground body traverses view | Missing dedicated street/suit shot in the inspected diagram-to-room path |
| 03:59–04:04 | Foreground suited shoulder clears into warm room; two young men reposition with unequal scale/occlusion; second man takes focus | Missing/partial entrance staging. V66 has later room handoffs, but its generic bridge skips this full lead-in |
| 04:04–04:20 | SALES reveal; frontal portrait handoff; MANUFACTURING reveal; pair and barbed line/marker | Implemented continuation. Supplied comparison shows different typography, portraits/framing and room layout; fidelity remains open |
| 04:20–04:32 | Factory pullback; facing metallic heads; eye flames, brand fields and lower fire | Implemented approximation. Comparison shows different factory/ground framing, head geometry and foreground flame rendering |
| 04:32–04:44 | Black interval and Chapter 2 / THE NAZI OLYMPICS with footwear | Implemented. Comparison shows different typeface/proportions, background and prop density |
| 04:44–04:56 | Athletics team, rear-view bag carrier, tree wipe, older men/factory, arms-open pose handoff | Implemented through partial pose handoff. Supplied comparison shows scale, ground and composition differences |
| 04:56–05:00 | Arms-open figures complete reveal; large white question-mark graphics and connecting visual travel | Beyond current documented endpoint; requires new continuation rather than just a timing patch |
| 05:00–05:10 | Large foreground shoe/leg; footballer on field, airborne brown ball, camera/scale changes and bright haze | Missing next sequence |
| 05:10–05:17 | Camera/foreground player movement clears to lineup; nearer dark silhouettes occlude the line | Missing next sequence |
| 05:17–05:20.8 | Two men at desks against library/bookcase background; shoes and papers on desks | Missing next sequence, ending at this upload's cutoff |

## Highest-priority missing bridge: interpretation and asset requirements

1. Cash passage: observed bundles enter at different scale, rotation and focus over the shoe diagram. Proposed technique: several reusable money-bundle cutouts or simple textured boxes, independent trajectories, depth ordering and motion blur. Particle/rigid-body simulation is an option, not a proven original method. Expose count, onset, spread, gravity/drift, spin, blur and exit. The note denomination and exact graphics are unresolved; do not invent historical factual significance.
2. Street exchange: observed sharp suited young man beyond soft near shoulder/neck in a street. Required layers: clean street plate, far subject, near back/shoulder cutout, possible separate head/body where movement demands it. Camera approach and foreground crossing must remain separate. Turning/speaking body motion cannot be faithfully inferred from one cutout.
3. Street-to-room passage: near body temporarily hides the incoming room. Reuse the existing room/portraits where identity and angle permit, but retain a dedicated incoming foreground actor and correct order: outgoing street → body crossing → incoming room pair → SALES portrait. Do not substitute a bare crossfade or wooden plank.
4. Opening globe: use a lit sphere if changing curvature and rotation demand it; otherwise a sufficiently resolved globe plate with layered atmosphere may suffice. Logos, divide, glow, globe approach and map arrival need independent controls. The aerial reference is visibly a geographic render; an illustrative town cannot be labeled geographically exact.
5. Post-handoff continuation: complete pose reveal/question marks, then shoe/football action, team occlusion and desk/library shot. A static player sliding across the ground would not reproduce a kick; choose pose sequence, rig or replaceable video only after reviewing the movement densely.

## Recommended implementation choices for Joshua

A — Complete the missing bridge first (recommended): cash → street exchange → room lead-in. This replaces an acknowledged invented join and repairs narrative continuity using already-existing neighboring scenes.

B — Restore the opening first: globe → geographic approach → existing portrait. Best if the immediate goal is a complete beginning-to-end opening review.

C — Extend beyond the current endpoint: complete poses/question marks → football → lineup → library. Best for adding coverage, but leaves existing opening/bridge gaps unresolved.

After bounded implementation and self-review, create the continuous side-by-side with explicit scene anchors, both clocks, version labels and honest uncovered intervals. Do not stretch one scene to hide absent content.

## Feedback ledger and structural update

- Request recorded: analyze missing scenes/effects before generating or editing; later green light required.
- New reference supersedes prior missing-footage inventory for this covered upload.
- Confirmed source omissions: active opening globe, cash/street bridge, post-pose continuation.
- Partial/existing: most opening and middle scenes; window depth, ground contact, typography, walking and fire are fidelity issues rather than absent scenes.
- Timing issue: reference filename duration differs from decoded endpoint; previous master mappings are provisional and need scene correspondence.
- Production status: no assets generated, no visual code changed, no source replacement, no GitHub push or deployment. Documentation-only analysis added locally; original attached ZIP remains unchanged.
- Pending acceptance: Joshua validates the scene interpretation and chooses a bounded block before implementation.
