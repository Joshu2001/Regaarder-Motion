# V47 — smooth shoulder-to-room passage

28 October 2026 (Taipei). Focused correction to the v46 reference continuation.

The shoulder-to-seated-boy alpha crossfade is replaced with a sideways spatial passage. Opaque source and room planes move continuously to the right, separated by a textured dark foreground wall. The room enters from the left. The outgoing plane has a separately adjustable depth offset. One smooth camera curve covers clip 17.2–20.0 seconds, including the legacy stage boundaries at 18.027 and 18.987; no movement is restarted there. The room uses the same portrait framing before and after the passage, so it settles into the existing push-in without a positional reset.

No artwork has been regenerated. Existing source images and all retained assets remain available. The earlier war footage replacement remains deferred as requested. This version fixes motion rather than reproducing the original source geometry: the man and city remain one intact source plate, with the room and foreground wall on separate planes. The dark wall's edge and texture are procedural; the underlying reference wall and character silhouette differ.

Advanced controls expose passage start/end, dark-wall width, near-plane depth offset, wall brightness and edge-shadow softness. Sources stay replaceable through the existing image controls. The searchable spatial-occlusion-pass recipe includes aliases such as sideways camera, parallax room reveal, dark wall and no fade. Existing stage IDs and custom duration records are preserved for compatibility; the old portrait-dissolve stage is displayed as sideways passage.

32 check scripts pass. New tests sample 601 positions for monotonic motion and zero-speed endpoints; test continuity across both old stage boundaries; and render opaque colored source planes to detect uncovered seams or alpha ghosting. Existing sequence, editor, image replacement, timing, mesh, cloud, asset and retention checks also pass. Offline entrance, mid-wall, room entrance and settling stills were inspected. This does not establish an exact reference match or native-browser playback fidelity.

The focused preview covers source-clip seconds 16–22. The full review video replaces that same interval in the prior v46 rendered preview; its other scenes retain the v46 rendered content. Neither preview contains the original reference footage. Live-browser interaction remains unverified.
