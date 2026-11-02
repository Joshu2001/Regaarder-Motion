# V46 — next reference sequence implemented

28 October 2026 (Taipei). Continues v45; the corrected continuous cloud passage, existing boy cutouts and uploaded woman gesture remain in place.

## Result

The analyzed 53.788-second reference sequence is represented by 17 editable stages. Its first 2.338 seconds overlap the existing wartime-boy hold, so it extends the default depot timeline by 51.45 seconds, to depot-local 189.45 seconds. The new review video covers the complete reference segment, including that overlap. It is silent and uses offline 960 × 540 rendering.

Implemented: focal eye entrance into the workshop; seated-worker hold and window-light accents; one numbered-metal-reel renderer reused for both wipes; monochrome ruined-street wide/close plates; over-the-shoulder plate push; seated-boy dissolve and monochrome push; scrolling shoe cutouts with white/blue selection borders; a real procedural shoe turn with optional mesh spikes; framed picture-card flip; workshop/card push and color portrait reveal; dark exit; ruined street with separate rear-facing figure and fiery overlay.

## Assets and provenance

Five new generated illustrations: workshop, seated portrait, over-the-shoulder city, empty ruined street and transparent rear-facing figure. These are reconstructions, not archival photographs or historical likeness claims. Exact prompts and output identifiers are retained in assets/history-generation-v46.json and assets/history-figure-generation-v46.json. Original PNG bytes remain unchanged. Existing war-boy images and photographed fire are reused. Every available candidate remains retained, indexed and described; no earlier generation was deleted.

The shoe is an extension of the existing project-authored last/upper/sole/lace mesh, adding optional actual spike faces. It is illustrative and not a scan or exact model of the reference shoe. A flat user replacement preserves strip/selection/framing but does not gain unseen 3D geometry.

## Editing and reusable recipes

Open Next chapter · portraits, shoes & transitions. Replace the workshop, seated portrait, over-the-shoulder picture, ruined street, shoe, final figure or final fiery overlay separately. Replacing a source keeps its timing. Choose Use editable shoe mesh to restore the procedural object.

Sequence speed and portrait push have simple controls. Advanced controls expose each stage duration; eye focus and zoom; wheel count and metal color; outline width/colors; shoe size, yaw/pitch/roll, leather color and spike length; grain; source framing, brightness and softness; final figure placement/height; and final fire placement/size/amount. Per-stage overrides can separate portrait push and reel settings from shared defaults. Each stage can be downloaded as a JSON recipe. Existing browser settings are preserved. Browser-local uploaded replacements must be saved/exported through the editor; they are not magically included in this source ZIP.

The sequence search understands plain-language aliases such as eye zoom, numbers, clock, shoes, blue selection, spikes and photo flip. sequence-effects.json records stable recipe IDs, descriptions, parameter names and source/instance relationships. Both number wipes share the same function. These are searchable sequence recipes; general effect-stack adapters are not yet implemented for every new recipe. Existing generic effects remain in their shared library. The full editor-wide search across all historical effects is still a broader pending feature.

Asset descriptions and default shot relationships are present in semantic-context.json. Narration and sound remain pending user inputs; no script meaning, sound timing or AI service integration has been fabricated.

## Validation

31 check scripts pass, including a new sequence renderer test and an editor DOM harness. Covered: stage selection/timing; playback rate; exact first-frame handoff from the existing war scene; source replacement changing output without changing timing; rendering all stages; spike geometry; shared number-reel recipe; runtime script/dispatch wiring; editor initialization; replacement routing; speed and duration persistence; plain-language effect search. Existing cloud continuity, gesture, route, catalog, asset-retention and other scene checks pass. Provenance hashes and archive integrity are also checked.

Offline still review caught and corrected a misplaced eye focus and undersized foreshortened shoe. A separate generated figure replaced the provisional procedural silhouette. These checks are not a claim of frame-perfect reproduction. Live-browser playback and interaction remain unverified; the DOM harness does not substitute for a real browser review.

## Material visual limitations for review

- The generated people and environments differ from the reference identities and geometry.
- The workshop, portrait and shoulder shots currently use intact image plates with framing/grade changes, not fully separated subject/background depth reconstruction or organic body animation.
- Eye mask, metallic reels and paper-card turn are authored approximations; the reel geometry and perspective do not exactly reproduce the source.
- The shoe is an approximate procedural mesh; its last, laces, materials, silhouette and turn path differ from the reference.
- One ruined-street plate supplies both the wide/close illustrative cuts and the final setting; it does not reproduce the two original archival shots.
- The final fiery form's identity was not established by the supplied frames. The default is an editable fire/glow composite, with a replacement slot, rather than an invented exact identity. The clip ends during this scene, so its later hold and exit are not reconstructed.

This version implements the approved interpretation for user review; it does not imply visual approval.
