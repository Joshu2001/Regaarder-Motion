# V126 asset generation and reuse

Follow ASSET-CREATION-GUIDELINES.md. Built-in image generation was used; no external AI-video service was used. Photographic texture, expressive but restrained faces, cyan/crimson narrative opposition, warm luxury lighting, credible anatomy, physical contacts and editable compositing were prompt requirements.

## Reused existing work

Backgrounds for the brand/tabletop scenes, connected handshake, blank weathered brand cards, logo artwork, chapter boots and paper texture were reused. The old pack's illustrative executive portraits and flat dining silhouettes remain alternatives; they are not the new default people. Original V125 scene files and assets are unchanged.

## New generated/derived assets

| File group | Prompt specification | Classification |
|---|---|---|
|room-clean.png|Edit original room into an entirely empty late1960s luxury restaurant plate; remove all people and large foreground table/armchairs; preserve cyan-left/crimson-right lighting, warm chandelier, reflective parquet, palms, smoke and empty dining furniture. Photographic, no text/logos.|Generated clean-plate reconstruction.|
|guest0–guest5.png|Transparent3×2atlas; six complete separately seated period guests, no tables/chairs; serious businessmen facing inward, women/men at varied back/profile angles; real cloth/anatomy, blue/red/violet rim. Generous gutters, each person isolated.|Illustrative person cutouts; technical cell separation preserves alpha.|
|portrait-blue/red.png|Transparent two-column atlas using retrieved Horst portrait and source-frame right portrait; preserve identities, expressions, suit/tie and orientations; remove background, extend only missing lower bust, restrained cyan/red rim and restored photographic detail.|Archival-derived AI-assisted extraction/restoration, not untouched original photographs.|
|football-clean.png|Edit matching bicycle photograph to remove all three players and ball, retaining stadium/pitch perspective, monochrome grain and lighting.|Archival-background reconstruction.|
|player0/1/2.png, ball.png|Extract exact three football poses plus ball into a transparent2×2atlas, keep bicycle kick as ONE connected pose; no stage, text or extra figures; preserve monochrome texture. Technical connected-component extraction avoids an atlas cell boundary clipping a foot.|Archival-derived extraction/reconstruction.|
|table/chair-blue/chair-red/cash-stack.png|Transparent2×2furniture atlas: full mahogany table with two crystal drinks and a warm lamp, two inward-facing green leather armchairs with blue/red rims, green paper-money bundle; no people, cinematic tactile materials.|Generated props.|
|fire-atlas.png|Transparent3×2six-frame flipbook: successive turbulent burning-paper flame poses with common bottom-center emitter, pale hot cores, orange edges, wispy smoke and tiny embers, no fuel object or black rectangles.|Generated VFX; inferred treatment.|

Individual cropped assets are project-bound under dist/assets/pele126; source-generated atlases are retained by the image-generation result. Derivation, alpha bounds and hashes are in pele-manifest.json. Originals of retrieved photography/currency remain preserved. The header/printed text is native editable type, not baked generator lettering.

## Source searches and original media

A direct reverse-image endpoint was unavailable, so descriptive image searches were used. Successful downloads and source URLs are recorded in SOURCING-V126.json: matching Pelé bicycle-kick photograph, matching smiling Pelé-with-ball photograph, Horst portrait and one-/hundred-dollar imagery. The exact right portrait is reference-derived. The Mexico poster web lead returned404; the already-created reconstructed poster was retained. No exact matching archived newspaper scan was retrieved; the newspaper surfaces are explicit editorial facsimiles using sourced photographs and editable script-inspired text. They are not historical evidence.

The final0.6seconds reuse the exact existing framed archival video from the supplied reference, preserving the next-scene boundary. Native renderers use decoded frames of that same segment; browser uses its MP4.

## Interpretation decisions

Joshua authorized separate people and inferred flame techniques. The scene therefore uses individually editable staged people, an interpolated flame atlas and emission glow. Burning-cash imagery follows the narration's cost/rivalry metaphor. Hair/body/ball treatments are authored2.5D approximations; they are not assertions about the original production pipeline. Original photography files are not overwritten by filters, masks, motion or overlays.
