# Enhanced temporal audit — original11:55–12:55

## Method and limits

This is the strongest discrete visual audit completed in this environment for this interval. I inspected all1800frames at thumbnail resolution and40native-size samples, supplementing the prior479dense/120regular samples and11native views. I did NOT watch a continuously played20-minute0.05×video; I did NOT perform continuous normal-speed audiovisual playback. No audio-listening assessment or narration beat synchronization is claimed. The0.05×file already delivered is genuine1.5fps/1800frames/1200seconds and silent.

Confidence is high for scene order, explicit cut/black boundaries, the workers’ fast near-plane appearance and the independent label motion. Confidence is moderate for exact easing, focal curves, masks and original3D technique. Perceived smoothness, flicker sensitivity and audio rhythm still require continuous normal-speed review after implementation. No claim of perfect fidelity or a numerical confidence percentage. No assets/renderer changes or visual implementation were authorized/performed during this audit.

## Findings and corrections

### Full coverage

Observed/measured: All1,800decoded frames were visually presented in30ordered sheets,60consecutive frames per2second source interval. Each thumbnail160×90.40additional native640×360samples were inspected across name merge, window push, RUDA→PUMA, foreground workers and map movement.

Implementation consequence: This closes the earlier gaps between sampled frames for coarse changes. It does not mean every frame was inspected at native resolution or perceived in continuous motion.

### Map label leads camera

Observed/measured: At source772.000, estimated title major axis−1.09° and river major axis+20.18°. At772.500: title−18.94°,river+15.95°. At773.000: title−62.38°,river−1.71°. Native-size frames visibly confirm the title turns before the river/map finishes turning.

Implementation consequence: CORRECTION: common map movement plus independent title rotation/scale/fade. Do not rigidly lock title and river to one transform. PCA axes describe thresholded visible shapes, not recovered physical camera yaw; curved/partly drawn river and clipped/fading text limit accuracy. Disregard angle estimates after title clipping becomes severe.

### Name merge

Observed/measured: DASSLER loses its ending through progressive letter/mask changes; remaining DAS and ADI reposition and overlap before ADIDAS settles. The merge is staged across roughly725.5–726.9.

Implementation consequence: Keep glyph identity, horizontal/vertical travel and overlap. Do not replace whole words instantaneously.

### RUDA→PUMA

Observed/measured: The source shows letter contours collapsing/squashing/masking and re-forming, roughly741.37–742.33. Native-size frames show reduced glyph sections between complete words.

Implementation consequence: Refine prior description: glyph-level deformation/masking/substitution, not loose physical fragments flying through space. Original renderer/morph method remains inferred.

### Window push

Observed/measured: Writer grows and exits downward by around740.5 while window expands; RUDA survives as the room becomes a white field. Window grids remain faintly visible before disappearance.

Implementation consequence: Separate actor, window, room exposure and text clocks. A fade alone loses the spatial passage; a single global zoom also ties text too tightly to the room.

### Workers passage

Observed/measured: Frame1268/source757.266667 still shows factories. Frame1269/source757.300000 is suddenly dominated by a blurred near back/suspenders. Neighboring frames show close backs moving across and rapidly receding into the row by roughly757.8.

Implementation consequence: Frame-align the near-plane entrance. Match the fast initial scale change and slower settling; preserve strong focus/motion softness. Do not introduce a slow opacity reveal.

### Facade cut

Observed/measured: Frame1494/source764.800000 remains the founder/factory composition; frame1495/source764.833333 cuts to the extremely close pale facade. Subsequent frames retreat into the timbered town.

Implementation consequence: Preserve this deliberate hard cut, then model layered roof/building retreat. Do not smooth every abrupt visual change automatically.

### Black interval

Observed/measured: Frames133–140/source719.433333–719.666667 inclusive have exactly zero decoded luminance. Eight frames; next frame719.700000 is nonzero.

Implementation consequence: Keep explicit black0.266667s at this source clock; preceding near-black title fade is longer and must not be confused with exactly black frames. Picture black does not imply audio silence.

### Scalloped lift

Observed/measured: Ordered frames750–752show the outgoing runner/cat scene moving upward with repeated scalloped/toothed boundaries while the next blue-sky factory scene appears below.

Implementation consequence: Treat as a masked nested composition and strong vertical handoff; the boundary’s supposed real-world object/3D construction remains unconfirmed.

### White map transition

Observed/measured: White forms expand/merge over768.3–769.9, with incoming aerial imagery and text progressively visible among changing openings.

Implementation consequence: Use an organic reveal/matte sequence with separate outgoing/incoming scenes. A uniform white flash or ordinary dissolve would be materially different.

