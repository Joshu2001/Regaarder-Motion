# Battlefield to supply depot

The green foreground objects are interpreted as olive canvas-covered wooden military equipment cases or supply crates. The interior is a warm industrial supply depot / warehouse. These are visual interpretations of the reference, not identification of a documented historical location or specific people.

## Sequence and clocks

The final four seconds before the new shot build a dark smoke veil. The Depot clock overlaps the final five seconds of Conflict. The outgoing battlefield moves upward while the room enters from below, giving a continuous downward camera passage. Initial defocus settles into warm warehouse lights. Twelve independent cargo cases occupy far, middle, near and foreground planes. Cargo approaches from 5.3–9.3 seconds, growing at 1.4×, 1.85× and 2.6× across the first three planes, anchored to the floor. The right shoulder enters at 11 seconds and the left figure at 13 seconds. A pullback starts at 12 seconds and lasts 18 seconds, taking people from 3.2× to 1× and revealing heads gradually. Foreground covers enter at 28 seconds. The shot lasts 34 seconds. Imported image scenes follow it; earlier scene start times are preserved.

## Assets and insignia

The room and case are generated with prompts in `assets/depot-generation-briefs.json`. Version 21 replaces the rough version-20 reference masks with two newly generated complete transparent figures: intact hair, neck, shoulders, arms, hands and legs. Exact successful prompts are retained in `assets/depot-complete-figure-prompts-v9.json`. These are fictional figures based on the reference styling, not exact reproductions of the supplied identities. Old reference masks are archived and inactive.

Armband and cargo symbols are separate vector overlays. They identify the user-requested historical Nazi setting, without narration, endorsement or invented historical identification. Each marking has independently editable position, size, rotation, color, opacity and visibility. The new figures have plain sleeves; markings remain separate overlays. This is a 2.5D collage, not skeletal character animation or a reconstructed 3D room.

## Editing

Open **Depot** and use Descent, Cargo, Shoulder, Two figures and Full reveal to inspect the beats. Scene duration, descent, smoke, focus, camera focal point, starting/final scale, background depth and foreground depth stay editable. Every cargo case and figure has its own position, size, reveal timing, opacity, rotation, softness, brightness, depth plane and saved motion keys. The armband / cargo-insignia section edits its local symbol. Tap a rendered object or marking to get the same contextual tools. Asset replacement, image animation, manual background masking and vector tracing are available through the shared tools.

The blank core exposes the whole Depot action plus isolated figures and cargo. They use the same renderer and save into the selected layer. Insignia and object controls remain available through the full Depot tools. The full shot has a room background; isolated figure/cargo actions render transparently.

## Validation and next work

`check-depot-motion.mjs` checks descent endpoints and continuity, monotonic pullback, independent foreground timing, two marked figures, unchanged earlier phase starts differential cargo approach, floor anchoring and active RGBA figure sources. Existing Noir, battle, authoring and composition checks remain required. Browser QA must inspect the descent, shoulder view and final frame as well as selection.

Narration and sound remain pending. Obtain Joshua's transcript before asserting what this scene communicates or adding sound cues. Prompt records and concise creative intent are authoring data, not private reasoning or model training. Future work includes narration-aligned audio and video export.


## Version 22 · descent and framed storm

The 58-second shot descends along an extended rock face for 8 seconds before the depot emerges. Cargo contact positions are fixed independently of scale, with contact shadows. Cargo approach no longer reverses when the figure camera pulls back. Twelve cases, a corner flag and larger foreground covers form the depth layers. Newly generated plain field-gray military uniforms replace civilian jackets. The image service rejected generation of integrated Nazi armbands; floating overlays are removed and this requested detail remains incomplete.

At 32 seconds the depot becomes a monochrome photograph in a gold beaded frame. The frame recedes over 23 seconds; cracks begin at 40 seconds and spread over 8 seconds. Rotation and perspective tilt begin at 43 seconds, reaching their editable targets over 12 seconds. Blue/cyan and red cloud fields surround a white glowing divider and brief secondary flashes. Fine-tune exposes timing, frame size, signed rotation/tilt, cloud density/speed/position/colors and lightning frequency/brightness/width/position. Objects remain selectable and have individual motion keys. Figure insignia are source-image details, not editable floating patches. Exact successful generation prompts are in `assets/depot-generation-briefs-v10.json`.


## Version 23 · cloud and glass readability

The storm now uses continuous fractal cloud density rendered immediately from a cached texture, rather than an image-dependent layer. No solid polygon fallback is used. Glass fractures have stronger dark edges and bright bevels so they remain legible as the frame recedes. Picture brightness decreases continuously with frame pullback, reaching 18% at the final size by default. Darkening amount and crack visibility are editable in Fine-tune and the contextual frame toolbar.
