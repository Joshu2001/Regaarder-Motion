# Regaarder flame overlay workflow

## Verified fix at 23:57.20

The burning-shoe shot originally translated and scaled still flame shapes. Their bases moved with their tips, and a jacket mask made some bases appear detached. The accepted fix uses two continuous excerpts from real fire footage. The flame layers inherit the shoe transform, with anchors near the toe and heel. The shoe contour occludes the rear layer, smaller flames overlap the leather, and a warm flicker reaches the gloves. The source and license are recorded in the fire patch.

## Next application at 26:32.40

The rivalry reference has luminous blue plumes rising through the blue half and dark forms visible against the red half. From the still, those dark forms could be dense smoke or flame-shaped silhouettes. Use separate layers for the blue emissive flames and the dark red-side smoke. Keep the supplied cloud plates for the slower background motion. Mask both effects to their own halves, layer them around the profiles, and preserve the bright center divide and readable faces.

### Route A — use existing moving footage

1. Find suitable footage with continuous upward motion, a stable base, and enough duration to cover the shot. Record the source and license.
2. If only neutral or orange fire is available, derive a luminance matte and map its tones to deep violet, blue and cyan. Composite with alpha or Screen on a black-backed emissive clip. Use alpha with Normal or Multiply for dark smoke so it can darken the red background.
3. Expose independent position, scale, opacity, speed, start offset and mask controls. Keep the source video and effect timing separate so clips can be swapped.

### Route B — animate still plates in Kling or Gemini

Create or extract two isolated stills, one for blue fire and one for dark smoke. Feed each still into an image-to-video model separately. Use the reference screenshot for visual direction and the isolated still for the actual motion input. Generate at least the shot length, or use an overlap crossfade if an extension is needed.

**Blue flame prompt**

> Locked-off camera. Animate only the supplied electric-blue flame plate. Keep the base pinned along the bottom and let new flame tongues continuously rise, stretch, curl, split and dissolve. Cyan inner highlights, cobalt body and subtle violet edges. Keep the upper third mostly clear. No camera movement, objects, people, lettering, cuts, or whole-layer translation. Output clean alpha if available, otherwise a pure black background.

**Dark smoke prompt**

> Locked-off camera. Animate only the supplied charcoal-black smoke plate. Keep the emission area near the bottom. Dense turbulent wisps rise, roll and thin out, with flame-like silhouettes and no luminous core. Preserve clear space above for character faces. No camera movement, objects, lettering or cuts. Output alpha if available. Otherwise use an evenly lit contrasting key background that can be removed.

### Acceptance check

Compare aligned playback at normal speed and frame-step the entrance and exit. Check that the bases stay anchored, tips evolve independently, neither layer crosses the divider, the dark smoke actually darkens the red plate, and the faces stay legible. Check the entire shot for frozen frames, visible loop seams and hard matte edges.
