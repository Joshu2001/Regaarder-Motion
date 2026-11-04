# V127 · corrective pass · 18:50–20:14

Continues the V126 renderer and editor. V126 remains intact separately. No publishing or GitHub step.

## Implemented corrections

- Restaurant: larger, separately positioned chairs under the seated diners; background exposure reduced. Camera scale now travels continuously from 1.3 at local 10s to 0.75 at 22.6s. It no longer settles at 16s. Existing foreground people plus two new independent near guests reveal depth during retreat. Person/seat contact stays locked by default; no whole-body wobble.
- Handshake: connected arms remain one contact group, with darker photographic grading. The restaurant keeps receding beneath it. Foreground guests and restaurant exit together.
- Branding: replaced both approximate marks with sourced vector artwork. Original SVG files are bundled next to transparent renderer derivatives. Native alpha tint preserves the shapes. Blue Adidas enters from left; red PUMA enters from right. Cards use neutral white printed marks over blue/red worn surfaces. Light sweep remains separate from the artwork.
- Money: all three notes in the first fan now use the sourced $100 image. This is a user-directed adjustment: the reference fan itself mixes denominations. Burning bundles approach from 30–36.3s and reach their full 4.2× enlargement before the 36.8s tabletop transition. Flames share bundle growth and anchors.
- Paper: default invented Sporting Chronicle sheets replaced by real scans from PLACAR no.1, 20 March 1970, reproduced by its publisher. These are period magazine pages, not the exact reference newspaper editions. The scan pixels and original lettering are retained; native grayscale, foxing, wear, and time-varying film grain are overlays. The standalone modern Pelé/ball print is retained as in the reference's mixed collage. Scan replacement retains transforms and effects. Editable typeset fallback remains optional.
- Football: removed the native white boot stroke entirely, including when a legacy preset contains bootMark=true. Red circle remains a separately drawn clockwise arc below the player, with optional leg occlusion. Added restrained edge softness, unified grayscale contrast, light shafts, and temporal film grain. Ball remains independently animated.
- Replaced the flat geometric rivals backdrop with a generated photographic blue/red lit plaster wall. Background haze, film grain, logo sweep, people reveal, banknote motion, and flames are animated independently.

## Files and editing

Open `dist/pele-editor.html` through a local HTTP server (README). New fields are exposed in scene controls. All assets remain replaceable. guest6 and guest7 share an atlas but have separate crop rectangles and individual position/scale/blur/visibility controls. New controls merge into imported V126 presets; reset uses V127 defaults. Older explicit scan=false presets retain their chosen typeset mode.

Authentic scanned text is edited by replacing the scan. Paper title fields apply to the optional typeset mode (disable Use scanned paper). The art-direction still is supporting reference only and is not flattened into the animation.

## Validation and limits

See `review-pele/verification.json`, `browser-checks.json`, and `motion-regression-v127.json`. Native production renderer validates seeking, reverse/speed, image loading, visibility, ring occlusion, fire toggles, and boot punch. Chromium editor checks image replacement, export/import, position controls and representative scenes. Review exports are 84 seconds, 960×540, 24fps and silent; comparison uses the original at master 18:50 with the same duration and frame rate.

Visual reconstruction remains approximate. Generated chairs, people, handshake, and walls differ from the original footage. Added guests are a staged interpretation of the requested deeper reveal. Flames are an inferred technique. Newspaper scans are authentic period alternatives; exact reference editions and layout have not been recovered. The source is 360p, so small lighting and edge details cannot be measured as high-resolution ground truth. Visual fidelity needs the user's review; passing software checks does not prove a visual match.
