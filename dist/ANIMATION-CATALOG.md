# Animation catalog · V50

Human and AI share stable effect IDs, exact factory defaults and implementation evidence. Live settings are separate composition exports. Read ANIMATION-ARCHITECTURE.md for the editing contract and future-animation requirements.

## Shared playback defaults

```json
{
  "speed": 1,
  "reverse": false,
  "delay": 0,
  "pauseAt": 0.5,
  "pauseFor": 0,
  "ease": "linear",
  "slowFast": false,
  "slowStart": 0.3,
  "slowEnd": 0.65,
  "slowSpeed": 0.35,
  "fastSpeed": 2
}
```

Shared speed `1.5` means 1.5×. Native rate fields retain their own renderer units.

| ID | Animation | Adapter | Parameters | Details |
|---|---|---|---:|---|
| `opening-paper-tear` | Torn opening and portrait push | capability | 7 | [Read](animations/opening-paper-tear.md) |
| `opening-light` | Practical lamp and exposure | capability | 4 | [Read](animations/opening-light.md) |
| `photographed-fire` | Photographed fire overlay | shared | 1 | [Read](animations/photographed-fire.md) |
| `procedural-flame` | Procedural flame and embers | capability | 7 | [Read](animations/procedural-flame.md) |
| `wall-fire` | Fire around the desk and wall | capability | 7 | [Read](animations/wall-fire.md) |
| `portrait-pair` | Two portrait cutouts | capability | 7 | [Read](animations/portrait-pair.md) |
| `outdoor-depth` | Outdoor layered camera | capability | 8 | [Read](animations/outdoor-depth.md) |
| `red-blue-finish` | Red and blue ending | capability | 4 | [Read](animations/red-blue-finish.md) |
| `chess-camera` | Chess board and camera | capability | 20 | [Read](animations/chess-camera.md) |
| `surface-material` | Soil snow and cloud reveal | capability | 5 | [Read](animations/surface-material.md) |
| `aerial-camera` | Aerial map camera | capability | 36 | [Read](animations/aerial-camera.md) |
| `image-plane-3d` | Replaceable image on a 3D plane | capability | 29 | [Read](animations/image-plane-3d.md) |
| `region-overlay` | Editable shape and region | capability | 3 | [Read](animations/region-overlay.md) |
| `noir-sequence` | Lies secrets and soldiers | capability | 15 | [Read](animations/noir-sequence.md) |
| `brush-writing` | Editable written title | capability | 5 | [Read](animations/brush-writing.md) |
| `battle-sequence` | Battlefield camera and soldiers | capability | 26 | [Read](animations/battle-sequence.md) |
| `soldier-volley` | Staggered soldier firing | capability | 26 | [Read](animations/soldier-volley.md) |
| `battle-fireball` | Expanding blast | capability | 26 | [Read](animations/battle-fireball.md) |
| `battle-ground-fire` | Editable ground fire patches | capability | 3 | [Read](animations/battle-ground-fire.md) |
| `atmosphere-flow` | Animated cloud field | capability | 27 | [Read](animations/atmosphere-flow.md) |
| `depot-sequence` | Supply depot descent and pullback | capability | 123 | [Read](animations/depot-sequence.md) |
| `depot-cargo` | Layered cargo and markings | capability | 123 | [Read](animations/depot-cargo.md) |
| `depot-people` | Two depot figures | capability | 123 | [Read](animations/depot-people.md) |
| `chapter-shoes` | Chapter title and floating shoes | scene | 65 | [Read](animations/chapter-shoes.md) |
| `nursery-sequence` | 1898 mother cradle and window | scene | 49 | [Read](animations/nursery-sequence.md) |
| `village-sequence` | Boys town and crafts | scene | 217 | [Read](animations/village-sequence.md) |
| `legacy-gesture-mesh` | Legacy portrait mesh gesture | native tools | 0 | [Read](animations/legacy-gesture-mesh.md) |
| `gesture-layer-rig` | Layered garment and arm rig | native tools | 2 | [Read](animations/gesture-layer-rig.md) |
| `gesture-video` | Replaceable gesture video clip | native tools | 8 | [Read](animations/gesture-video.md) |
| `laundry-sequence` | Laundry aerial pullback and title | scene | 163 | [Read](animations/laundry-sequence.md) |
| `war-sequence` | Cloud descent and layered boys | scene | 41 | [Read](animations/war-sequence.md) |
| `history-sequence` | Portraits reels shoes and cards | scene | 71 | [Read](animations/history-sequence.md) |
| `focus-reveal` | Focus zoom and picture reveal | focus | 25 | [Read](animations/focus-reveal.md) |
| `spatial-occlusion-pass` | Sideways wall and room reveal | spatial | 7 | [Read](animations/spatial-occlusion-pass.md) |
| `cloud-passage` | Cloud bank passage | cloud | 5 | [Read](animations/cloud-passage.md) |
| `layer-keyframes` | Layer keyframes and transforms | layer | 9 | [Read](animations/layer-keyframes.md) |
| `primitive-object` | Editable 3D primitive | capability | 5 | [Read](animations/primitive-object.md) |
| `blank-composition` | Independent composition layers | native tools | 11 | [Read](animations/blank-composition.md) |
| `soft-focus` | Soft focus blur | shared | 1 | [Read](animations/soft-focus.md) |
| `film-timing` | Source video timing | native tools | 8 | [Read](animations/film-timing.md) |
| `shared-texture-fill` | Image or color inside a silhouette | shared | 6 | [Read](animations/shared-texture-fill.md) |
| `shared-route-travel` | Travel along a route | shared | 5 | [Read](animations/shared-route-travel.md) |
| `shared-cloud-descent` | Cloud descent overlay | shared | 3 | [Read](animations/shared-cloud-descent.md) |
| `shared-fire-frame` | Fire around content | shared | 1 | [Read](animations/shared-fire-frame.md) |
| `shared-light-pulse` | Light swell | shared | 3 | [Read](animations/shared-light-pulse.md) |
| `shared-lightning` | Lightning flash | shared | 3 | [Read](animations/shared-lightning.md) |
| `shared-vignette` | Edge shadows | shared | 1 | [Read](animations/shared-vignette.md) |
| `shared-fade-in` | Fade entrance | shared | 1 | [Read](animations/shared-fade-in.md) |
| `shared-push-in` | Camera push | shared | 2 | [Read](animations/shared-push-in.md) |
| `atmosphere-smoke` | Rising smoke | capability | 27 | [Read](animations/atmosphere-smoke.md) |
| `atmosphere-fog` | Low foreground fog | capability | 27 | [Read](animations/atmosphere-fog.md) |
| `aftermath-video-pair` | Two-shot war aftermath footage | scene | 17 | [Read](animations/aftermath-video-pair.md) |
| `perspective-portrait-room` | Perspective room and foreground parallax | room | 31 | [Read](animations/perspective-portrait-room.md) |
| `perspective-mother-room` | Mother workshop · layered room | mother-room | 28 | [Read](animations/perspective-mother-room.md) |
| `ruined-window-parallax` | Ruined window · pullback and sideways parallax | ruined-window | 27 | [Read](animations/ruined-window-parallax.md) |
| `shoe-paper-crumple` | Shoe turn, zoom and printed-paper crumple | shoe-paper | 33 | [Read](animations/shoe-paper-crumple.md) |
| `reference-continuation` | Reference continuation · paper through shoe diagram | expansion | 311 | [Read](animations/reference-continuation.md) |
| `paper-tumble-unfurl` | Paper tumble with concurrent unfurl | expansion | 280 | [Read](animations/paper-tumble-unfurl.md) |
| `room-picture-overlap` | Woman to boy · aligned room overlap | expansion | 280 | [Read](animations/room-picture-overlap.md) |
| `ruined-street-approach` | Ruined street · red sky and depth approach | expansion | 280 | [Read](animations/ruined-street-approach.md) |
| `salvage-walk-searchlight` | Salvage walk · searchlight and materials | expansion | 280 | [Read](animations/salvage-walk-searchlight.md) |
| `material-focus-highlight` | Material focus · cables and highlights | expansion | 280 | [Read](animations/material-focus-highlight.md) |
| `vertical-bicycle-passage` | Vertical passage into bicycle scene | expansion | 280 | [Read](animations/vertical-bicycle-passage.md) |
| `wheel-drive-callout` | Wheel rotation · leather trimmer callout | expansion | 280 | [Read](animations/wheel-drive-callout.md) |
| `layered-walking-feet` | Layered walking feet · shoe handoff | expansion | 280 | [Read](animations/layered-walking-feet.md) |
| `shoe-evolution-route` | Shoe evolution · dashed route and nodes | expansion | 280 | [Read](animations/shoe-evolution-route.md) |
| `model-scene-studio` | Build a 3D scene from scratch | model-studio | 1 | [Read](animations/model-scene-studio.md) |
| `moving-magnifier` | Moving magnifier over media | lens | 127 | [Read](animations/moving-magnifier.md) |
| `paper-unfurl-reveal` | Unfurl a printed picture | unfurl | 217 | [Read](animations/paper-unfurl-reveal.md) |
| `rigged-cutout-walk` | Classic cutout walk · preserved V59 | cutout-walk | 25 | [Read](animations/rigged-cutout-walk.md) |
| `natural-mesh-walk` | Natural mesh walk · feet, body and coat | mesh-walk | 38 | [Read](animations/natural-mesh-walk.md) |
| `living-cloud-sky` | Living clouds · wind and evolving shape | living-sky | 12 | [Read](animations/living-cloud-sky.md) |
| `anchored-electric-cables` | Electric cables · anchored sag and wind | living-cables | 15 | [Read](animations/anchored-electric-cables.md) |
| `war-destruction-collapse` | Explosion, falling poles and electrical wires | expansion | 280 | [Read](animations/war-destruction-collapse.md) |
| `classic-walk-with-hands` | Photographic walk · both arms and hands | cutout-walk | 25 | [Read](animations/classic-walk-with-hands.md) |
| `layered-room-color-reveal` | Paper photo · colored room and person reveal | expansion | 280 | [Read](animations/layered-room-color-reveal.md) |
| `grounded-photographic-walk` | Photographic walk · ground-constrained soles | grounded-walk | 28 | [Read](animations/grounded-photographic-walk.md) |
| `layered-shoe-company-chapter` | Layered shoe-company chapter | chapter-sequence | 104 | [Read](animations/layered-shoe-company-chapter.md) |
| `role-portrait-parallax` | Portrait roles and room parallax | chapter-sequence | 104 | [Read](animations/role-portrait-parallax.md) |
| `factory-photo-pullback` | Factory ground-to-wide pullback | chapter-sequence | 104 | [Read](animations/factory-photo-pullback.md) |
| `opposed-rivalry-reveal` | Opposing rivalry heads | chapter-sequence | 104 | [Read](animations/opposed-rivalry-reveal.md) |
| `scatter-chapter-title` | Scattered chapter title | chapter-sequence | 104 | [Read](animations/scatter-chapter-title.md) |
| `team-depth-introduction` | Team and salesman introduction | chapter-sequence | 104 | [Read](animations/team-depth-introduction.md) |
| `tree-occlusion-pass` | Tree scene boundary | chapter-sequence | 104 | [Read](animations/tree-occlusion-pass.md) |
| `factory-portrait-tableau` | Factory and leaning portraits | chapter-sequence | 104 | [Read](animations/factory-portrait-tableau.md) |
| `factory-pose-handoff` | Factory pose handoff | chapter-sequence | 104 | [Read](animations/factory-pose-handoff.md) |
| `commerce-room-bridge` | Money, street exchange and room entrance | commerce-bridge | 231 | [Read](animations/commerce-room-bridge.md) |
| `commerce-street-exchange` | Street exchange through foreground shoulder | commerce-bridge | 231 | [Read](animations/commerce-street-exchange.md) |
| `commerce-shoulder-room` | Shoulder-covered room entrance | commerce-bridge | 231 | [Read](animations/commerce-shoulder-room.md) |
| `commerce-cash-burst` | Depth-ordered tumbling money | bridge-cash | 26 | [Read](animations/commerce-cash-burst.md) |
| `animated-path-stroke` | Animated line / shape | path-motion | 23 | [Read](animations/animated-path-stroke.md) |
| `marching-dashes` | Travelling dashed connector | path-motion | 23 | [Read](animations/marching-dashes.md) |
| `travelling-dots` | Travelling dotted connector | path-motion | 23 | [Read](animations/travelling-dots.md) |
| `travelling-arrows` | Travelling arrow path | path-motion | 23 | [Read](animations/travelling-arrows.md) |
| `moving-path-trace` | Moving path trace | path-motion | 23 | [Read](animations/moving-path-trace.md) |
| `whole-layer-motion-presets` | Object / shape motion presets | native tools | 32 | [Read](animations/whole-layer-motion-presets.md) |
| `cinematic-globe-opening` | Dramatic globe · animated rivals and storm sky | globe-opening | 54 | [Read](animations/cinematic-globe-opening.md) |
| `documentary-finish` | Documentary finish · edge shading | refinement-finish | 2 | [Read](animations/documentary-finish.md) |
| `documentary-refinement-profile` | Documentary refinement · native tools | native tools | 15 | [Read](animations/documentary-refinement-profile.md) |
| `continuation-sequence` | Football to political montage | continuation-sequence | 27 | [Read](animations/continuation-sequence.md) |
| `continuation-pose` | Factory pose | continuation-sequence | 27 | [Read](animations/continuation-pose.md) |
| `continuation-questions` | Questions into workshop | continuation-sequence | 27 | [Read](animations/continuation-questions.md) |
| `continuation-workshop` | Expanded workshop | continuation-sequence | 27 | [Read](animations/continuation-workshop.md) |
| `continuation-boot` | Leather boot turn | continuation-sequence | 27 | [Read](animations/continuation-boot.md) |
| `continuation-boot-field` | Boot into football | continuation-sequence | 27 | [Read](animations/continuation-boot-field.md) |
| `continuation-football` | Football and approaching ball | continuation-sequence | 27 | [Read](animations/continuation-football.md) |
| `continuation-lineup` | Lineup and foreground depth | continuation-sequence | 27 | [Read](animations/continuation-lineup.md) |
| `continuation-library-wipe` | Foreground wipe into library | continuation-sequence | 27 | [Read](animations/continuation-library-wipe.md) |
| `continuation-library` | Shoe design and sales | continuation-sequence | 27 | [Read](animations/continuation-library.md) |
| `continuation-library-out` | Library departure | continuation-sequence | 27 | [Read](animations/continuation-library-out.md) |
| `continuation-black-a` | Black separator | continuation-sequence | 27 | [Read](animations/continuation-black-a.md) |
| `continuation-political-focus` | Red sky and focus pull | continuation-sequence | 27 | [Read](animations/continuation-political-focus.md) |
| `continuation-black-b` | Short black separator | continuation-sequence | 27 | [Read](animations/continuation-black-b.md) |
| `continuation-roundel` | Curved emblem to photograph | continuation-sequence | 27 | [Read](animations/continuation-roundel.md) |
| `continuation-holes` | Irregular reveal into rally | continuation-sequence | 27 | [Read](animations/continuation-holes.md) |
| `continuation-fire-wipe` | Rally and fire into factory | continuation-sequence | 27 | [Read](animations/continuation-fire-wipe.md) |
| `continuation-factory-money` | Factory, desks and money | continuation-sequence | 27 | [Read](animations/continuation-factory-money.md) |
| `continuation-symbol-eye` | Political symbol and eye reveal | continuation-sequence | 27 | [Read](animations/continuation-symbol-eye.md) |
| `continuation-eye` | Eye above commercial scene | continuation-sequence | 27 | [Read](animations/continuation-eye.md) |
| `continuation-vertical-street` | Vertical camera into street | continuation-sequence | 27 | [Read](animations/continuation-vertical-street.md) |
| `continuation-street` | Two figures in street | continuation-sequence | 27 | [Read](animations/continuation-street.md) |
| `continuation-photo-tear` | Red photo reveal behind figure | continuation-sequence | 27 | [Read](animations/continuation-photo-tear.md) |
| `continuation-foreground-swap` | Foreground character exchange | continuation-sequence | 27 | [Read](animations/continuation-foreground-swap.md) |
| `continuation-crowd-tear` | Red crowd reveal | continuation-sequence | 27 | [Read](animations/continuation-crowd-tear.md) |
| `olympic-sequence` | 1936 Olympics and Jesse Owens | olympic-sequence | 30 | [Read](animations/olympic-sequence.md) |
| `olympic-crowd-retract` | Crowd reveal contracts | olympic-sequence | 30 | [Read](animations/olympic-crowd-retract.md) |
| `olympic-red-fragments` | Red fragments in street | olympic-sequence | 30 | [Read](animations/olympic-red-fragments.md) |
| `olympic-white-gold` | White flash to gold | olympic-sequence | 30 | [Read](animations/olympic-white-gold.md) |
| `olympic-olympic-hold` | Golden Olympic composition | olympic-sequence | 30 | [Read](animations/olympic-olympic-hold.md) |
| `olympic-date-1936` | 1936 assembles | olympic-sequence | 30 | [Read](animations/olympic-date-1936.md) |
| `olympic-berlin-parade` | Berlin parade reveal | olympic-sequence | 30 | [Read](animations/olympic-berlin-parade.md) |
| `olympic-crt-pullback` | Reveal television | olympic-sequence | 30 | [Read](animations/olympic-crt-pullback.md) |
| `olympic-brothers-tv` | Brothers beside television | olympic-sequence | 30 | [Read](animations/olympic-brothers-tv.md) |
| `olympic-tv-push` | Approach screen | olympic-sequence | 30 | [Read](animations/olympic-tv-push.md) |
| `olympic-tv-static` | Screen interference | olympic-sequence | 30 | [Read](animations/olympic-tv-static.md) |
| `olympic-through-screen` | Through screen to track | olympic-sequence | 30 | [Read](animations/olympic-through-screen.md) |
| `olympic-runner-silhouette` | Runner silhouette | olympic-sequence | 30 | [Read](animations/olympic-runner-silhouette.md) |
| `olympic-jesse-title` | Jesse Owens glyph assembly | olympic-sequence | 30 | [Read](animations/olympic-jesse-title.md) |
| `olympic-jesse-hold` | Runner and title hold | olympic-sequence | 30 | [Read](animations/olympic-jesse-hold.md) |
| `olympic-red-track-tear` | Red irregular reveal | olympic-sequence | 30 | [Read](animations/olympic-red-track-tear.md) |
| `olympic-portrait-pullback` | Political portrait pullback | olympic-sequence | 30 | [Read](animations/olympic-portrait-pullback.md) |
| `olympic-team-podium` | Team and podium rise | olympic-sequence | 30 | [Read](animations/olympic-team-podium.md) |
| `olympic-crowd-depth` | Audience depth | olympic-sequence | 30 | [Read](animations/olympic-crowd-depth.md) |
| `olympic-owens-entrance` | Owens foreground entrance | olympic-sequence | 30 | [Read](animations/olympic-owens-entrance.md) |
| `olympic-owens-hold` | Owens foreground hold | olympic-sequence | 30 | [Read](animations/olympic-owens-hold.md) |
| `olympic-rack-back` | Rack focus to rear | olympic-sequence | 30 | [Read](animations/olympic-rack-back.md) |
| `olympic-political-depth-hold` | Depth focus hold | olympic-sequence | 30 | [Read](animations/olympic-political-depth-hold.md) |
| `olympic-portrait-occlusion` | Portrait occlusion wipe | olympic-sequence | 30 | [Read](animations/olympic-portrait-occlusion.md) |
| `olympic-village-meeting` | Meeting setup | olympic-sequence | 30 | [Read](animations/olympic-village-meeting.md) |
| `success-betrayal-continuation` | Shoe success to betrayal | betrayal-sequence | 29 | [Read](animations/success-betrayal-continuation.md) |
| `betrayal-meeting-hold` | Meeting continuation | betrayal-sequence | 29 | [Read](animations/betrayal-meeting-hold.md) |
| `betrayal-spike-entrance` | Black running spike rises into focus | betrayal-sequence | 29 | [Read](animations/betrayal-spike-entrance.md) |
| `betrayal-spike-hold` | Product hold over blurred meeting | betrayal-sequence | 29 | [Read](animations/betrayal-spike-hold.md) |
| `betrayal-background-flash` | Background flash changes the setting | betrayal-sequence | 29 | [Read](animations/betrayal-background-flash.md) |
| `betrayal-shoe-exit` | Shoe departs and seated athletes sharpen | betrayal-sequence | 29 | [Read](animations/betrayal-shoe-exit.md) |
| `betrayal-seated-athletes` | Seated-athlete hold | betrayal-sequence | 29 | [Read](animations/betrayal-seated-athletes.md) |
| `betrayal-held-shoe-entry` | Owens holding the shoe enters foreground | betrayal-sequence | 29 | [Read](animations/betrayal-held-shoe-entry.md) |
| `betrayal-held-shoe-hold` | Smiling product presentation | betrayal-sequence | 29 | [Read](animations/betrayal-held-shoe-hold.md) |
| `betrayal-podium-flash` | Whole-frame flash into medal podium | betrayal-sequence | 29 | [Read](animations/betrayal-podium-flash.md) |
| `betrayal-podium-settle` | Podium establishes | betrayal-sequence | 29 | [Read](animations/betrayal-podium-settle.md) |
| `betrayal-medal-type-in` | 4X GOLD MEDALS assembles | betrayal-sequence | 29 | [Read](animations/betrayal-medal-type-in.md) |
| `betrayal-medal-type-hold` | Medal title hold | betrayal-sequence | 29 | [Read](animations/betrayal-medal-type-hold.md) |
| `betrayal-medal-type-out` | Letters leave and side athletes lower | betrayal-sequence | 29 | [Read](animations/betrayal-medal-type-out.md) |
| `betrayal-political-rise` | Political portrait rises behind winner | betrayal-sequence | 29 | [Read](animations/betrayal-political-rise.md) |
| `betrayal-column-rise` | Tall plinth rises under winner | betrayal-sequence | 29 | [Read](animations/betrayal-column-rise.md) |
| `betrayal-audience-rise` | Near audience fills the bottom | betrayal-sequence | 29 | [Read](animations/betrayal-audience-rise.md) |
| `betrayal-political-hold` | Political/podium depth hold | betrayal-sequence | 29 | [Read](animations/betrayal-political-hold.md) |
| `betrayal-brothers-return` | Portrait drops as brothers enter | betrayal-sequence | 29 | [Read](animations/betrayal-brothers-return.md) |
| `betrayal-brothers-gold` | Brothers hold on yellow success scene | betrayal-sequence | 29 | [Read](animations/betrayal-brothers-gold.md) |
| `betrayal-banknotes` | Banknotes tumble overhead | betrayal-sequence | 29 | [Read](animations/betrayal-banknotes.md) |
| `betrayal-map-patches` | Patch reveal into parchment map | betrayal-sequence | 29 | [Read](animations/betrayal-map-patches.md) |
| `betrayal-world-orders` | Dotted routes grow from the shoe | betrayal-sequence | 29 | [Read](animations/betrayal-world-orders.md) |
| `betrayal-factory-tear` | Torn opening returns to factory | betrayal-sequence | 29 | [Read](animations/betrayal-factory-tear.md) |
| `betrayal-factory-hold` | Facing brothers in factory | betrayal-sequence | 29 | [Read](animations/betrayal-factory-hold.md) |
| `betrayal-red-window` | Red irregular window opens between them | betrayal-sequence | 29 | [Read](animations/betrayal-red-window.md) |
| `betrayal-tension-push` | Red tension scene builds | betrayal-sequence | 29 | [Read](animations/betrayal-tension-push.md) |
| `betrayal-fade-black` | Scene fades down | betrayal-sequence | 29 | [Read](animations/betrayal-fade-black.md) |
| `betrayal-black-hold` | Near-black separator | betrayal-sequence | 29 | [Read](animations/betrayal-black-hold.md) |
| `betrayal-chapter-three` | Chapter 3: THE BETRAYAL begins | betrayal-sequence | 29 | [Read](animations/betrayal-chapter-three.md) |
| `wartime-family-continuation` | Betrayal, wartime and family | wartime-sequence | 48 | [Read](animations/wartime-family-continuation.md) |
| `wartime-chapter-hold` | Chapter title retreats | wartime-sequence | 48 | [Read](animations/wartime-chapter-hold.md) |
| `wartime-chapter-fade` | Title fades to black | wartime-sequence | 48 | [Read](animations/wartime-chapter-fade.md) |
| `wartime-black-pause` | Black pause | wartime-sequence | 48 | [Read](animations/wartime-black-pause.md) |
| `wartime-hall-entry` | Shadow hall and silhouettes | wartime-sequence | 48 | [Read](animations/wartime-hall-entry.md) |
| `wartime-brothers-entry` | Brothers enter foreground | wartime-sequence | 48 | [Read](animations/wartime-brothers-entry.md) |
| `wartime-brothers-hold` | Brothers in hall | wartime-sequence | 48 | [Read](animations/wartime-brothers-hold.md) |
| `wartime-stadium-reveal` | Foreground passage to stadium | wartime-sequence | 48 | [Read](animations/wartime-stadium-reveal.md) |
| `wartime-money` | Arms open and falling money | wartime-sequence | 48 | [Read](animations/wartime-money.md) |
| `wartime-seated-reveal` | Pass smiling man to seated brother | wartime-sequence | 48 | [Read](animations/wartime-seated-reveal.md) |
| `wartime-seated-hold` | Seated brother holds | wartime-sequence | 48 | [Read](animations/wartime-seated-hold.md) |
| `wartime-blast-entry` | Explosion expands | wartime-sequence | 48 | [Read](animations/wartime-blast-entry.md) |
| `wartime-blast-smoke` | Smoke covers scene | wartime-sequence | 48 | [Read](animations/wartime-blast-smoke.md) |
| `wartime-aircraft-entry` | Aircraft emerges from smoke | wartime-sequence | 48 | [Read](animations/wartime-aircraft-entry.md) |
| `wartime-aircraft-hold` | Aircraft over red storm | wartime-sequence | 48 | [Read](animations/wartime-aircraft-hold.md) |
| `wartime-aircraft-exit` | Aircraft leaves above frame | wartime-sequence | 48 | [Read](animations/wartime-aircraft-exit.md) |
| `wartime-building-entry` | Factory building rises | wartime-sequence | 48 | [Read](animations/wartime-building-entry.md) |
| `wartime-emblem` | Historical emblem emerges | wartime-sequence | 48 | [Read](animations/wartime-emblem.md) |
| `wartime-building-hold` | Factory exterior and red sky | wartime-sequence | 48 | [Read](animations/wartime-building-hold.md) |
| `wartime-interior-wipe` | Building lifts to reveal factory | wartime-sequence | 48 | [Read](animations/wartime-interior-wipe.md) |
| `wartime-worker` | Factory worker foreground | wartime-sequence | 48 | [Read](animations/wartime-worker.md) |
| `wartime-eye-reflection` | Worker contracts into eye reflection | wartime-sequence | 48 | [Read](animations/wartime-eye-reflection.md) |
| `wartime-portrait-reveal` | Pull back from eye to portrait | wartime-sequence | 48 | [Read](animations/wartime-portrait-reveal.md) |
| `wartime-fire-build` | Flames and reflected warm light | wartime-sequence | 48 | [Read](animations/wartime-fire-build.md) |
| `wartime-house-dissolve` | Portrait dissolves to house | wartime-sequence | 48 | [Read](animations/wartime-house-dissolve.md) |
| `wartime-family-entry` | Foreground head reveals family | wartime-sequence | 48 | [Read](animations/wartime-family-entry.md) |
| `wartime-family-pullback` | Family group pullback | wartime-sequence | 48 | [Read](animations/wartime-family-pullback.md) |
| `shelter-conflict-letter` | Shelter, conflict and letter inspection | shelter-sequence | 19 | [Read](animations/shelter-conflict-letter.md) |
| `shelter-family` | Shelter · family | shelter-sequence | 19 | [Read](animations/shelter-family.md) |
| `shelter-aircraft` | Shelter · aircraft | shelter-sequence | 19 | [Read](animations/shelter-aircraft.md) |
| `shelter-bombing` | Shelter · bombing | shelter-sequence | 19 | [Read](animations/shelter-bombing.md) |
| `shelter-pair-entry` | Shelter · pair entry | shelter-sequence | 19 | [Read](animations/shelter-pair-entry.md) |
| `shelter-pair-passage` | Shelter · pair passage | shelter-sequence | 19 | [Read](animations/shelter-pair-passage.md) |
| `shelter-quote-build` | Shelter · quote build | shelter-sequence | 19 | [Read](animations/shelter-quote-build.md) |
| `shelter-aircraft-annotation` | Shelter · aircraft annotation | shelter-sequence | 19 | [Read](animations/shelter-aircraft-annotation.md) |
| `shelter-type-passage` | Shelter · type passage | shelter-sequence | 19 | [Read](animations/shelter-type-passage.md) |
| `shelter-shelter-hold` | Shelter · shelter hold | shelter-sequence | 19 | [Read](animations/shelter-shelter-hold.md) |
| `shelter-ceiling-passage` | Shelter · ceiling passage | shelter-sequence | 19 | [Read](animations/shelter-ceiling-passage.md) |
| `shelter-conflict` | Shelter · conflict | shelter-sequence | 19 | [Read](animations/shelter-conflict.md) |
| `shelter-soldiers` | Shelter · soldiers | shelter-sequence | 19 | [Read](animations/shelter-soldiers.md) |
| `shelter-workers` | Shelter · workers | shelter-sequence | 19 | [Read](animations/shelter-workers.md) |
| `shelter-machines` | Shelter · machines | shelter-sequence | 19 | [Read](animations/shelter-machines.md) |
| `shelter-factory` | Shelter · factory | shelter-sequence | 19 | [Read](animations/shelter-factory.md) |
| `shelter-letter-entry` | Shelter · letter entry | shelter-sequence | 19 | [Read](animations/shelter-letter-entry.md) |
| `shelter-lens` | Shelter · lens | shelter-sequence | 19 | [Read](animations/shelter-lens.md) |
| `trial-whole` | Interrogation & trial · whole | trial-sequence | 17 | [Read](animations/trial-whole.md) |
| `trial-letter-continuation` | Interrogation & trial · letter continuation | trial-sequence | 17 | [Read](animations/trial-letter-continuation.md) |
| `trial-paper-fire` | Interrogation & trial · paper fire | trial-sequence | 17 | [Read](animations/trial-paper-fire.md) |
| `trial-interrogation` | Interrogation & trial · interrogation | trial-sequence | 17 | [Read](animations/trial-interrogation.md) |
| `trial-shoulder-passage` | Interrogation & trial · shoulder passage | trial-sequence | 17 | [Read](animations/trial-shoulder-passage.md) |
| `trial-frontal-questioning` | Interrogation & trial · frontal questioning | trial-sequence | 17 | [Read](animations/trial-frontal-questioning.md) |
| `trial-newspaper-entry` | Interrogation & trial · newspaper entry | trial-sequence | 17 | [Read](animations/trial-newspaper-entry.md) |
| `trial-newspaper-scroll` | Interrogation & trial · newspaper scroll | trial-sequence | 17 | [Read](animations/trial-newspaper-scroll.md) |
| `trial-paper-cell-passage` | Interrogation & trial · paper cell passage | trial-sequence | 17 | [Read](animations/trial-paper-cell-passage.md) |
| `trial-prison` | Interrogation & trial · prison | trial-sequence | 17 | [Read](animations/trial-prison.md) |
| `trial-bars-camp-passage` | Interrogation & trial · bars camp passage | trial-sequence | 17 | [Read](animations/trial-bars-camp-passage.md) |
| `trial-camp` | Interrogation & trial · camp | trial-sequence | 17 | [Read](animations/trial-camp.md) |
| `trial-photo-folder` | Interrogation & trial · photo folder | trial-sequence | 17 | [Read](animations/trial-photo-folder.md) |
| `trial-folder-hold` | Interrogation & trial · folder hold | trial-sequence | 17 | [Read](animations/trial-folder-hold.md) |
| `trial-desk-tilt-writing` | Interrogation & trial · desk tilt writing | trial-sequence | 17 | [Read](animations/trial-desk-tilt-writing.md) |
| `trial-writing-hold` | Interrogation & trial · writing hold | trial-sequence | 17 | [Read](animations/trial-writing-hold.md) |
| `trial-table-court-passage` | Interrogation & trial · table court passage | trial-sequence | 17 | [Read](animations/trial-table-court-passage.md) |
| `trial-courtroom` | Interrogation & trial · courtroom | trial-sequence | 17 | [Read](animations/trial-courtroom.md) |
| `trial-witness-exchange` | Interrogation & trial · witness exchange | trial-sequence | 17 | [Read](animations/trial-witness-exchange.md) |
| `feud-whole` | Feud · whole minute | feud-sequence | 19 | [Read](animations/feud-whole.md) |
| `feud-court-continuation` | Feud · court continuation | feud-sequence | 19 | [Read](animations/feud-court-continuation.md) |
| `feud-witness-slices` | Feud · witness slices | feud-sequence | 19 | [Read](animations/feud-witness-slices.md) |
| `feud-face-pullback` | Feud · face pullback | feud-sequence | 19 | [Read](animations/feud-face-pullback.md) |
| `feud-allegation-collage` | Feud · allegation collage | feud-sequence | 19 | [Read](animations/feud-allegation-collage.md) |
| `feud-collage-question` | Feud · collage question | feud-sequence | 19 | [Read](animations/feud-collage-question.md) |
| `feud-question-hold` | Feud · question hold | feud-sequence | 19 | [Read](animations/feud-question-hold.md) |
| `feud-metal-heads` | Feud · metal heads | feud-sequence | 19 | [Read](animations/feud-metal-heads.md) |
| `feud-heads-factory-handoff` | Feud · heads factory handoff | feud-sequence | 19 | [Read](animations/feud-heads-factory-handoff.md) |
| `feud-factory-split` | Feud · factory split | feud-sequence | 19 | [Read](animations/feud-factory-split.md) |
| `feud-company-reveal` | Feud · company reveal | feud-sequence | 19 | [Read](animations/feud-company-reveal.md) |
| `feud-revenge-fire` | Feud · revenge fire | feud-sequence | 19 | [Read](animations/feud-revenge-fire.md) |
| `feud-fade-black` | Feud · fade black | feud-sequence | 19 | [Read](animations/feud-fade-black.md) |
| `feud-black-hold` | Feud · black hold | feud-sequence | 19 | [Read](animations/feud-black-hold.md) |
| `feud-chapter-assembly` | Feud · chapter assembly | feud-sequence | 19 | [Read](animations/feud-chapter-assembly.md) |
| `feud-chapter-hold` | Feud · chapter hold | feud-sequence | 19 | [Read](animations/feud-chapter-hold.md) |
| `division-whole` | Company division · whole minute | division-sequence | 26 | [Read](animations/division-whole.md) |
| `division-chapter-exit` | Company division · chapter exit | division-sequence | 26 | [Read](animations/division-chapter-exit.md) |
| `division-black-hold` | Company division · black hold | division-sequence | 26 | [Read](animations/division-black-hold.md) |
| `division-writer-adi` | Company division · writer adi | division-sequence | 26 | [Read](animations/division-writer-adi.md) |
| `division-name-assembly` | Company division · name assembly | division-sequence | 26 | [Read](animations/division-name-assembly.md) |
| `division-name-merge` | Company division · name merge | division-sequence | 26 | [Read](animations/division-name-merge.md) |
| `division-pronunciation` | Company division · pronunciation | division-sequence | 26 | [Read](animations/division-pronunciation.md) |
| `division-writer-rudi` | Company division · writer rudi | division-sequence | 26 | [Read](animations/division-writer-rudi.md) |
| `division-ruda-assembly` | Company division · ruda assembly | division-sequence | 26 | [Read](animations/division-ruda-assembly.md) |
| `division-window-push` | Company division · window push | division-sequence | 26 | [Read](animations/division-window-push.md) |
| `division-ruda-puma-morph` | Company division · ruda puma morph | division-sequence | 26 | [Read](animations/division-ruda-puma-morph.md) |
| `division-puma-runner` | Company division · puma runner | division-sequence | 26 | [Read](animations/division-puma-runner.md) |
| `division-scalloped-factory-passage` | Company division · scalloped factory passage | division-sequence | 26 | [Read](animations/division-scalloped-factory-passage.md) |
| `division-factory-division` | Company division · factory division | division-sequence | 26 | [Read](animations/division-factory-division.md) |
| `division-worker-passage` | Company division · worker passage | division-sequence | 26 | [Read](animations/division-worker-passage.md) |
| `division-founder-adi` | Company division · founder adi | division-sequence | 26 | [Read](animations/division-founder-adi.md) |
| `division-founder-exchange` | Company division · founder exchange | division-sequence | 26 | [Read](animations/division-founder-exchange.md) |
| `division-facade-town-pullback` | Company division · facade town pullback | division-sequence | 26 | [Read](animations/division-facade-town-pullback.md) |
| `division-organic-map-wipe` | Company division · organic map wipe | division-sequence | 26 | [Read](animations/division-organic-map-wipe.md) |
| `division-river-trace` | Company division · river trace | division-sequence | 26 | [Read](animations/division-river-trace.md) |
| `division-map-label-turn` | Company division · map label turn | division-sequence | 26 | [Read](animations/division-map-label-turn.md) |
| `communities-whole` | Divided communities · whole minute | communities-sequence | 23 | [Read](animations/communities-whole.md) |
| `communities-map-continuation` | Divided communities · map continuation | communities-sequence | 23 | [Read](animations/communities-map-continuation.md) |
| `communities-adidas-bank` | Divided communities · adidas bank | communities-sequence | 23 | [Read](animations/communities-adidas-bank.md) |
| `communities-puma-bank` | Divided communities · puma bank | communities-sequence | 23 | [Read](animations/communities-puma-bank.md) |
| `communities-founders-map` | Divided communities · founders map | communities-sequence | 23 | [Read](animations/communities-founders-map.md) |
| `communities-flare-change` | Divided communities · flare change | communities-sequence | 23 | [Read](animations/communities-flare-change.md) |
| `communities-cloud-emblems` | Divided communities · cloud emblems | communities-sequence | 23 | [Read](animations/communities-cloud-emblems.md) |
| `communities-factories-water` | Divided communities · factories water | communities-sequence | 23 | [Read](animations/communities-factories-water.md) |
| `communities-town-pullback` | Divided communities · town pullback | communities-sequence | 23 | [Read](animations/communities-town-pullback.md) |
| `communities-school-wipe-a` | Divided communities · school wipe a | communities-sequence | 23 | [Read](animations/communities-school-wipe-a.md) |
| `communities-school-a` | Divided communities · school a | communities-sequence | 23 | [Read](animations/communities-school-a.md) |
| `communities-school-wipe-b` | Divided communities · school wipe b | communities-sequence | 23 | [Read](animations/communities-school-wipe-b.md) |
| `communities-school-b` | Divided communities · school b | communities-sequence | 23 | [Read](animations/communities-school-b.md) |
| `communities-perforated-clear` | Divided communities · perforated clear | communities-sequence | 23 | [Read](animations/communities-perforated-clear.md) |
| `communities-couple-separate` | Divided communities · couple separate | communities-sequence | 23 | [Read](animations/communities-couple-separate.md) |
| `communities-couple-white-erosion` | Divided communities · couple white erosion | communities-sequence | 23 | [Read](animations/communities-couple-white-erosion.md) |
| `communities-gang-entrance` | Divided communities · gang entrance | communities-sequence | 23 | [Read](animations/communities-gang-entrance.md) |
| `communities-gang-shoes` | Divided communities · gang shoes | communities-sequence | 23 | [Read](animations/communities-gang-shoes.md) |
| `communities-bright-organic-clear` | Divided communities · bright organic clear | communities-sequence | 23 | [Read](animations/communities-bright-organic-clear.md) |
| `communities-town-return` | Divided communities · town return | communities-sequence | 23 | [Read](animations/communities-town-return.md) |
| `communities-bent-necks-title` | Divided communities · bent necks title | communities-sequence | 23 | [Read](animations/communities-bent-necks-title.md) |
| `communities-down-looking-men` | Divided communities · down looking men | communities-sequence | 23 | [Read](animations/communities-down-looking-men.md) |
| `communities-crossed-gaze` | Divided communities · crossed gaze | communities-sequence | 23 | [Read](animations/communities-crossed-gaze.md) |
| `communities-vertical-mayor-transition` | Divided communities · vertical mayor transition | communities-sequence | 23 | [Read](animations/communities-vertical-mayor-transition.md) |
| `communities-mayor-room` | Divided communities · mayor room | communities-sequence | 23 | [Read](animations/communities-mayor-room.md) |
| `communities-two-colored-shoes` | Divided communities · two colored shoes | communities-sequence | 23 | [Read](animations/communities-two-colored-shoes.md) |
| `communities-lateral-display-transition` | Divided communities · lateral display transition | communities-sequence | 23 | [Read](animations/communities-lateral-display-transition.md) |
| `communities-shoe-display-entrance` | Divided communities · shoe display entrance | communities-sequence | 23 | [Read](animations/communities-shoe-display-entrance.md) |
| `opportunity-whole` | Divided opportunity · whole minute | opportunity-sequence | 26 | [Read](animations/opportunity-whole.md) |
| `opportunity-display-continuation` | Divided opportunity · display continuation | opportunity-sequence | 26 | [Read](animations/opportunity-display-continuation.md) |
| `opportunity-second-boot-entrance` | Divided opportunity · second boot entrance | opportunity-sequence | 26 | [Read](animations/opportunity-second-boot-entrance.md) |
| `opportunity-comparison-hold` | Divided opportunity · comparison hold | opportunity-sequence | 26 | [Read](animations/opportunity-comparison-hold.md) |
| `opportunity-panels-up` | Divided opportunity · panels up | opportunity-sequence | 26 | [Read](animations/opportunity-panels-up.md) |
| `opportunity-inspector-rise` | Divided opportunity · inspector rise | opportunity-sequence | 26 | [Read](animations/opportunity-inspector-rise.md) |
| `opportunity-inspector-hold` | Divided opportunity · inspector hold | opportunity-sequence | 26 | [Read](animations/opportunity-inspector-hold.md) |
| `opportunity-panels-return` | Divided opportunity · panels return | opportunity-sequence | 26 | [Read](animations/opportunity-panels-return.md) |
| `opportunity-date-hold` | Divided opportunity · date hold | opportunity-sequence | 26 | [Read](animations/opportunity-date-hold.md) |
| `opportunity-date-fade` | Divided opportunity · date fade | opportunity-sequence | 26 | [Read](animations/opportunity-date-fade.md) |
| `opportunity-white-stripe-reveal` | Divided opportunity · white stripe reveal | opportunity-sequence | 26 | [Read](animations/opportunity-white-stripe-reveal.md) |
| `opportunity-striped-boot-hold` | Divided opportunity · striped boot hold | opportunity-sequence | 26 | [Read](animations/opportunity-striped-boot-hold.md) |
| `opportunity-warm-flare` | Divided opportunity · warm flare | opportunity-sequence | 26 | [Read](animations/opportunity-warm-flare.md) |
| `opportunity-rival-boots-grow` | Divided opportunity · rival boots grow | opportunity-sequence | 26 | [Read](animations/opportunity-rival-boots-grow.md) |
| `opportunity-founders-rise` | Divided opportunity · founders rise | opportunity-sequence | 26 | [Read](animations/opportunity-founders-rise.md) |
| `opportunity-rivals-foreground` | Divided opportunity · rivals foreground | opportunity-sequence | 26 | [Read](animations/opportunity-rivals-foreground.md) |
| `opportunity-dark-transition` | Divided opportunity · dark transition | opportunity-sequence | 26 | [Read](animations/opportunity-dark-transition.md) |
| `opportunity-trophy-ball-reveal` | Divided opportunity · trophy ball reveal | opportunity-sequence | 26 | [Read](animations/opportunity-trophy-ball-reveal.md) |
| `opportunity-green-cloud-build` | Divided opportunity · green cloud build | opportunity-sequence | 26 | [Read](animations/opportunity-green-cloud-build.md) |
| `opportunity-black-hold-a` | Divided opportunity · black hold a | opportunity-sequence | 26 | [Read](animations/opportunity-black-hold-a.md) |
| `opportunity-chapter-assembly` | Divided opportunity · chapter assembly | opportunity-sequence | 26 | [Read](animations/opportunity-chapter-assembly.md) |
| `opportunity-chapter-hold` | Divided opportunity · chapter hold | opportunity-sequence | 26 | [Read](animations/opportunity-chapter-hold.md) |
| `opportunity-chapter-fade` | Divided opportunity · chapter fade | opportunity-sequence | 26 | [Read](animations/opportunity-chapter-fade.md) |
| `opportunity-black-hold-b` | Divided opportunity · black hold b | opportunity-sequence | 26 | [Read](animations/opportunity-black-hold-b.md) |
| `opportunity-truss-reveal` | Divided opportunity · truss reveal | opportunity-sequence | 26 | [Read](animations/opportunity-truss-reveal.md) |
| `opportunity-emblem-spin-approach` | Divided opportunity · emblem spin approach | opportunity-sequence | 26 | [Read](animations/opportunity-emblem-spin-approach.md) |
| `opportunity-badge-to-office` | Divided opportunity · badge to office | opportunity-sequence | 26 | [Read](animations/opportunity-badge-to-office.md) |
| `opportunity-coach-office` | Divided opportunity · coach office | opportunity-sequence | 26 | [Read](animations/opportunity-coach-office.md) |
| `opportunity-office-defocus` | Divided opportunity · office defocus | opportunity-sequence | 26 | [Read](animations/opportunity-office-defocus.md) |
| `opportunity-negotiation-reveal` | Divided opportunity · negotiation reveal | opportunity-sequence | 26 | [Read](animations/opportunity-negotiation-reveal.md) |
| `opportunity-shoe-presentation` | Divided opportunity · shoe presentation | opportunity-sequence | 26 | [Read](animations/opportunity-shoe-presentation.md) |
| `opportunity-camera-around-figures` | Divided opportunity · camera around figures | opportunity-sequence | 26 | [Read](animations/opportunity-camera-around-figures.md) |
| `opportunity-whip-reframe` | Divided opportunity · whip reframe | opportunity-sequence | 26 | [Read](animations/opportunity-whip-reframe.md) |
| `opportunity-chair-foreground` | Divided opportunity · chair foreground | opportunity-sequence | 26 | [Read](animations/opportunity-chair-foreground.md) |
| `opportunity-bend-to-chair` | Divided opportunity · bend to chair | opportunity-sequence | 26 | [Read](animations/opportunity-bend-to-chair.md) |
| `checkpoint-whole` | 15-minute checkpoint · whole five seconds | checkpoint-sequence | 35 | [Read](animations/checkpoint-whole.md) |
| `checkpoint-sit-completion` | 15-minute checkpoint · sit completion | checkpoint-sequence | 35 | [Read](animations/checkpoint-sit-completion.md) |
| `checkpoint-seated-coach-drift` | 15-minute checkpoint · seated coach drift | checkpoint-sequence | 35 | [Read](animations/checkpoint-seated-coach-drift.md) |
| `checkpoint-departure-defocus` | 15-minute checkpoint · departure defocus | checkpoint-sequence | 35 | [Read](animations/checkpoint-departure-defocus.md) |
| `checkpoint-blue-pair-cut` | 15-minute checkpoint · blue pair cut | checkpoint-sequence | 35 | [Read](animations/checkpoint-blue-pair-cut.md) |
| `checkpoint-foreground-crossing` | 15-minute checkpoint · foreground crossing | checkpoint-sequence | 35 | [Read](animations/checkpoint-foreground-crossing.md) |
| `checkpoint-blue-pair-settle` | 15-minute checkpoint · blue pair settle | checkpoint-sequence | 35 | [Read](animations/checkpoint-blue-pair-settle.md) |
| `native3d-humanoid` | Anatomical humanoid study | capability | 1 | [Read](animations/native3d-humanoid.md) |
| `native3d-crimson` | Crimson seated character scene | capability | 1 | [Read](animations/native3d-crimson.md) |
| `native3d-blue` | Blue / cream character scene | capability | 1 | [Read](animations/native3d-blue.md) |
| `native3d-checkpoint` | Native anatomical scene ·14:55–15:00 | capability | 1 | [Read](animations/native3d-checkpoint.md) |
| `native3d-female` | Female anatomical foundation | capability | 1 | [Read](animations/native3d-female.md) |
| `depot-control-portal` | Shatter → darken → portal | capability | 17 | [Read](animations/depot-control-portal.md) |
| `depot-control-camera` | Camera & shoulders | capability | 9 | [Read](animations/depot-control-camera.md) |
| `depot-control-glass` | Glass & impact | capability | 21 | [Read](animations/depot-control-glass.md) |
| `depot-control-frame` | Frame & retreat | capability | 9 | [Read](animations/depot-control-frame.md) |
| `depot-control-storm` | Clouds & lightning | capability | 14 | [Read](animations/depot-control-storm.md) |
| `depot-control-title` | Title & letter motion | capability | 7 | [Read](animations/depot-control-title.md) |
| `depot-control-transition` | Transitions & atmosphere | capability | 6 | [Read](animations/depot-control-transition.md) |
| `history-stage-war-hold` | war hold | scene | 72 | [Read](animations/history-stage-war-hold.md) |
| `history-stage-eye-portal` | eye portal | scene | 72 | [Read](animations/history-stage-eye-portal.md) |
| `history-stage-workshop` | workshop | scene | 72 | [Read](animations/history-stage-workshop.md) |
| `history-stage-number-reel-1` | number reel 1 | scene | 72 | [Read](animations/history-stage-number-reel-1.md) |
| `history-stage-ruins-wide` | ruins wide | scene | 72 | [Read](animations/history-stage-ruins-wide.md) |
| `history-stage-ruins-close` | ruins close | scene | 72 | [Read](animations/history-stage-ruins-close.md) |
| `history-stage-over-shoulder` | over shoulder | scene | 72 | [Read](animations/history-stage-over-shoulder.md) |
| `history-stage-portrait-dissolve` | portrait dissolve | scene | 72 | [Read](animations/history-stage-portrait-dissolve.md) |
| `history-stage-portrait-mono` | portrait mono | scene | 72 | [Read](animations/history-stage-portrait-mono.md) |
| `history-stage-number-reel-2` | number reel 2 | scene | 72 | [Read](animations/history-stage-number-reel-2.md) |
| `history-stage-shoe-strip` | shoe strip | scene | 72 | [Read](animations/history-stage-shoe-strip.md) |
| `history-stage-shoe-turn` | shoe turn | scene | 72 | [Read](animations/history-stage-shoe-turn.md) |
| `history-stage-photo-flip` | photo flip | scene | 72 | [Read](animations/history-stage-photo-flip.md) |
| `history-stage-photo-card` | photo card | scene | 72 | [Read](animations/history-stage-photo-card.md) |
| `history-stage-portrait-color` | portrait color | scene | 72 | [Read](animations/history-stage-portrait-color.md) |
| `history-stage-dark-exit` | dark exit | scene | 72 | [Read](animations/history-stage-dark-exit.md) |
| `history-stage-ruined-street` | ruined street | scene | 72 | [Read](animations/history-stage-ruined-street.md) |
| `history-stage-ruin-occlusion` | ruin occlusion | scene | 72 | [Read](animations/history-stage-ruin-occlusion.md) |
| `history-stage-salvage-search` | salvage search | scene | 72 | [Read](animations/history-stage-salvage-search.md) |
| `history-stage-cable-focus` | cable focus | scene | 72 | [Read](animations/history-stage-cable-focus.md) |
| `history-stage-salvage-overview` | salvage overview | scene | 72 | [Read](animations/history-stage-salvage-overview.md) |
| `history-stage-vertical-workshop-passage` | vertical workshop passage | scene | 72 | [Read](animations/history-stage-vertical-workshop-passage.md) |
| `history-stage-wheel-trimmer` | wheel trimmer | scene | 72 | [Read](animations/history-stage-wheel-trimmer.md) |
| `history-stage-shoe-walk-handoff` | shoe walk handoff | scene | 72 | [Read](animations/history-stage-shoe-walk-handoff.md) |
| `history-stage-shoe-magnifier` | shoe magnifier | scene | 72 | [Read](animations/history-stage-shoe-magnifier.md) |
| `history-stage-shoe-evolution` | shoe evolution | scene | 72 | [Read](animations/history-stage-shoe-evolution.md) |
| `history-stage-next-occlusion` | next occlusion | scene | 72 | [Read](animations/history-stage-next-occlusion.md) |
| `history-stage-bridge-cash` | bridge cash | scene | 72 | [Read](animations/history-stage-bridge-cash.md) |
| `history-stage-bridge-street-exchange` | bridge street exchange | scene | 72 | [Read](animations/history-stage-bridge-street-exchange.md) |
| `history-stage-bridge-shoulder-room` | bridge shoulder room | scene | 72 | [Read](animations/history-stage-bridge-shoulder-room.md) |
| `history-stage-bridge-room-lead-in` | bridge room lead in | scene | 72 | [Read](animations/history-stage-bridge-room-lead-in.md) |
| `history-stage-chapter-role-sales` | chapter role sales | scene | 72 | [Read](animations/history-stage-chapter-role-sales.md) |
| `history-stage-chapter-role-manufacturing` | chapter role manufacturing | scene | 72 | [Read](animations/history-stage-chapter-role-manufacturing.md) |
| `history-stage-chapter-team-formation` | chapter team formation | scene | 72 | [Read](animations/history-stage-chapter-team-formation.md) |
| `history-stage-chapter-factory-pullback` | chapter factory pullback | scene | 72 | [Read](animations/history-stage-chapter-factory-pullback.md) |
| `history-stage-chapter-rivalry` | chapter rivalry | scene | 72 | [Read](animations/history-stage-chapter-rivalry.md) |
| `history-stage-chapter-two-title` | chapter two title | scene | 72 | [Read](animations/history-stage-chapter-two-title.md) |
| `history-stage-chapter-sports-outreach` | chapter sports outreach | scene | 72 | [Read](animations/history-stage-chapter-sports-outreach.md) |
| `history-stage-chapter-factory-growth` | chapter factory growth | scene | 72 | [Read](animations/history-stage-chapter-factory-growth.md) |
| `history-stage-chapter-pose-handoff` | chapter pose handoff | scene | 72 | [Read](animations/history-stage-chapter-pose-handoff.md) |

## Source coverage

All top-level JS modules are classified in scripts/animation-source-map.json. The generator rejects unknown modules and uncovered animation modules. Source fallbacks are retained as evidence, distinct from factory defaults. Archived shader fragments remain listed in the registry.
