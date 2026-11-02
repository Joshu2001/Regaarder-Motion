# Production technique research · v40

Reviewed 2026-10-28 at Joshua's request. This supplements the footage measurements; it does not replace them or identify the exact method used in the woman/blouse shot.

## Primary sources

1. [Rijal Nurjaman — MagnatesMedia editing breakdown](https://www.linkedin.com/posts/rijal-nurjaman-39546a251_experience-skills-media-activity-7157818201421086720-zWLC). The author's firsthand account identifies work on MagnatesMedia projects and describes using After Effects 3D cameras for parallax. This is a practitioner statement about his workflow, not a breakdown of the supplied shoe-company shot.
2. [Adobe — Animate photos with a parallax effect](https://helpx.adobe.com/in_hi/after-effects/how-to/animate-picture.html). Adobe describes separating image elements, reconstructing missing background, placing layers at different depths and animating a camera. This supports the layered-photo model as an established workflow.
3. [Adobe — Animating with Puppet tools](https://helpx.adobe.com/after-effects/desktop/animate-in-after-effects/animate-with-puppet-tools/animating-puppet-tools.html). Adobe documents deforming pins, protected/stiff regions and overlap controls. It also documents pin position, rotation and scale, and cautions that excessive constraints or poorly coordinated transforms can distort an image.
4. [MagnatesMedia — official course site](https://magnatesmedia.com/). The public site advertises editing instruction and resources. It does not publicly establish which effects created this specific shot. Paid lessons and project files were not accessed.

No third-party tutorials marketed as “MagnatesMedia style” are treated as proof of the channel's actual production method. No commercial preset, third-party artwork or source code was copied into the project.

## Implementation mapping

| Useful production concept | Current template equivalent | Limit |
|---|---|---|
| Depth-layered still-image movement | Separate masonry, children, architecture, sky and cloud transforms | The street is illustrative and most architecture is one plane |
| Controlled regional image movement | Measured woman, forearm and garment curves driving a shared mesh | An image-space reconstruction, not an anatomical rig |
| Position/rotation/scale controls | Independent woman/arm/garment offsets, scale, rotation and measured-motion gain | A neutral override preserves the accepted default movement |
| Deformation handles | Ten editable rest-position and displacement controls | Numerical controls; no full After Effects Puppet implementation |
| Preserve rigid details | Editable protected face and blouse rectangles | Some surrounding background bending remains possible |
| Timeline authoring | Each numeric control uses the existing surface keyframe/interpolation system | Source reference curves remain a separate measured baseline |
| Compositing overlap | Existing pane masks and foreground crossings | The woman mesh cannot recreate arbitrary self-occlusion; a future cutout rig would be needed |

## Granular user controls added after the audit

Under Look & motion, three region surfaces expose X/Y offset, scale, rotation and motion gain. Ten pin surfaces expose rest X/Y and displacement X/Y for face focus, torso, lower body, hanger, blouse center, blouse hem, elbow, forearm, supporting hand and raised hand. Another surface exposes the protected face/blouse bounds. Each surface participates in the existing numeric keyframe controls and persists with the user's settings.

Default transforms, pin offsets and pin positions are neutral. A numerical before/after comparison of the default mesh at five representative times found a maximum node difference of **zero** after adding the controls. Tests also confirm that non-neutral body transforms, pin displacement and pin rest positions change the output while preserving the triangle-area constraint. Therefore the new controls expand authoring without silently changing the reviewed default preview.

The research corroborates the plausibility of layered parallax and regional deformation. It does **not** prove that MagnatesMedia used Puppet pins, our mesh model or a particular tool in this scene. The source hypothesis tests and visual comparison remain the evidence for this reconstruction.
