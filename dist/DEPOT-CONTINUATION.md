# Battlefield to supply depot

The green foreground objects are interpreted as olive canvas-covered wooden military equipment cases or supply crates. The interior is a warm industrial supply depot / warehouse. These are visual interpretations of the reference, not identification of a documented historical location or specific people.

## Sequence and clocks

The final four seconds before the new shot build a dark smoke veil. The Depot clock overlaps the final five seconds of Conflict. The outgoing battlefield moves upward while the room enters from below, giving a continuous downward camera passage. Initial defocus settles into warm warehouse lights. Rear and middle cargo begin at 5–5.5 seconds. The right figure begins at 7.5 seconds, initially a large shoulder; the left begins at 9 seconds. A pullback starts at 10 seconds and lasts 18 seconds, taking people from 3.6× to 1× while background and foreground use different depth factors. Foreground cargo appears at 27 seconds and settles over three seconds. The shot lasts 34 seconds. Imported image scenes follow it; earlier scene start times are preserved.

## Assets and insignia

The room and single canvas-covered case are generated, with exact prompts in `assets/depot-generation-briefs.json`. The requested figure generation was rejected by the image service and was not used. Figure cutouts instead use supplied reference pixels inside self-contained native SVG masks. The left figure combines the closer body with the complete head from the later supplied frame; the right figure uses the closer supplied frame. The source photographs remain in the registry. Boundaries and lower-body detail are limited by those reference frames; foreground cargo hides the source crop at the bottom.

Armband and cargo symbols are separate vector overlays. They identify the user-requested historical Nazi setting, without narration, endorsement or invented historical identification. Each marking has independently editable position, size, rotation, color, opacity and visibility. The source armband emblem regions are covered by plain red patches so the runtime mark can be hidden or recolored. This is a 2.5D collage, not skeletal character animation or a reconstructed 3D room.

## Editing

Open **Depot** and use Descent, Cargo, Shoulder, Two figures and Full reveal to inspect the beats. Scene duration, descent, smoke, focus, camera focal point, starting/final scale, background depth and foreground depth stay editable. Every cargo case and figure has its own position, size, reveal timing, opacity, rotation, softness, brightness, depth plane and saved motion keys. The armband / cargo-insignia section edits its local symbol. Tap a rendered object or marking to get the same contextual tools. Asset replacement, image animation, manual background masking and vector tracing are available through the shared tools.

The blank core exposes the whole Depot action plus isolated figures and cargo. They use the same renderer and save into the selected layer. Insignia and object controls remain available through the full Depot tools. The full shot has a room background; isolated figure/cargo actions render transparently.

## Validation and next work

`check-depot-motion.mjs` checks descent endpoints and continuity, monotonic pullback, independent foreground timing, two marked figures, unchanged earlier phase starts and self-contained figure sources. Existing Noir, battle, authoring and composition checks remain required. Browser QA must inspect the descent, shoulder view and final frame as well as selection.

Narration and sound remain pending. Obtain Joshua's transcript before asserting what this scene communicates or adding sound cues. Prompt records and concise creative intent are authoring data, not private reasoning or model training. Future work includes adjustable source masks and cleaner full-body replacement cutouts, then narration-aligned audio and video export.
