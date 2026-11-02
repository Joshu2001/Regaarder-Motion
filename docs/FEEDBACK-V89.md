# V89 feedback / decisions

Joshua clarified that bundled libraries and assets are allowed. End users should not need external authoring apps. Templates should be ready-made3D compositions; granular editing belongs in Blank Composition. The humanoid's realism is the first priority, followed by native scene/rig/animation tools.

Implemented: a licensed anatomical foundation and rig, independently controllable garment/accessory parts, native scene hierarchy, object/bone/finger controls, hand/foot targets, materials/lights/camera and keyframes, JSON/GLB export, and unpacking into Blank Composition. Main and editor render through one underlying engine. The previous V88/V87 paths remain selectable.

Review-driven corrections: rejected the initial neutral body reading and ridged faceless projection; applied a supplied male graphical target and replaced the face/neck style surface. Smoothed fitted garments, extended the hem, added cuff/collar detail and corrected the hat placement. Added foot-target constraints for the seated reference scene. Corrected a scene-import selection-state bug and made vector/bone edits preserve other components. Browser tests exposed and fixed launcher removal during legacy UI initialization. Multiple native worlds now reuse one renderer and preserve cached character instances.

Backlog: improve wardrobe fit and intersections, per-pose volume correctives and anatomical joint limits, precise hand/seat contacts and reference-body silhouettes, source-light/atmosphere fidelity, and the incoming895model join. Sculpting/topology/general model import follow the first editor release. Stop source coverage at15:00 until Joshua reviews the result.
