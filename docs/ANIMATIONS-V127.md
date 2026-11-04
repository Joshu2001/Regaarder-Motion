# V127 animation controls

All times below are local seconds; add 1130 for source master seconds. All image layers retain x/y, scale, rotation, opacity, blur, depth, mirror, and visibility controls. Whole sequence speed/reverse remain available. Source defaults are in `dist/pele-sequence.js`; reusable tools are in `dist/pele-motion.js`.

| Effect / search terms | Control | Default | Behaviour |
|---|---|---:|---|
| Continuous restaurant retreat / zoom out | roomPullback | 0.55 | Linear scale decrease from 1.3, no internal hold |
| Retreat end | roomPullbackEnd | 22.6 s | Scale reaches 0.75 as restaurant exits |
| Deeper foreground reveal | guest6 / guest7 layers | enabled | Additional guests move into the edges from 14–20s; blurred near layer |
| Opposed logo entrance | logoSlideStart | 25 s | Red starts; blue starts 0.35s later |
| Logo entrance length | logoSlideDuration | 2 s | Smooth 520px horizontal travel |
| Reverse entrance direction | logoSlideDirection | 1 | Set -1 to reverse both directions |
| Burning bundle approach | cashApproach | 3.2 | Quadratic growth to 4.2×, 30–36.3s; coupled flame scale |
| Directional shafts / cyan-red light | lightStrength | 0.8 | Separate native overlay, slow opacity modulation |
| Film grain | grainStrength | 0.16 | Deterministic time-varying grain; archival overlays stay replaceable |
| Cutout edge softness | edgeSoftness | 0.5 px | Subtle football edge treatment before camera scaling |
| Printed paper wear | paperAge | 0.85 | Native foxing/fading/fold plus film grain over real scans |
| Red boot circle | ringStart / ringDuration | 81.2 / 1.25 s | Clockwise, radius75, width11; draws behind player |
| White boot stroke | removed | — | Legacy bootMark has no drawing effect |
| Separate ball drift | ballDrift | 8 px | Restrained independent drift |
| Local leg flex | playerFlex | 0.4 | Reduced amplitude; avoids exaggerated cutout wobble |

The source SVG geometry is preserved; runtime colored alpha and light sweep are separate. Card print marks stay neutral white. The scan image is a coherent page plane: its typography is not regenerated each frame. Print wear is deterministic so seeking the same time produces the same image.
