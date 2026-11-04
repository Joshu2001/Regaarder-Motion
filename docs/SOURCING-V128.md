# V128 sources and derivative classifications

The user requires archival-source searches before generation, cinematic lighting matched to context, and nondestructive restoration. A reverse-image upload facility was unavailable. Descriptive searches and verified source pages were used; originals are preserved, and generated/restored derivatives are never labelled archival originals.

## Successfully retrieved originals

- **Rudolf Dassler**: Deutsche Biographie page https://www.deutsche-biographie.de/dbo027444-5.html identifies the image as Rudolf Dassler,ca.1965, PUMA SE/Archive, unknown photographer. Original: https://www.deutsche-biographie.de/downloadImage?image=%2Fimages%2Fc%2Fcd%2FRudolf-dassler-portr%C3%A4t.jpg . File `rudolf-original.jpg`; used unchanged as source with runtime grayscale/crop for left memorial. This matches the recognisable glasses portrait in the reference.
- **Adi Dassler**: adidas Archive image caption on https://www.adidas-group.com/en/magazine/innovation/the-history-of-adidas-a-background-of-collaboration-and-innovation . Original retrieved URL and bytes in assets/legacy128/sourcing.json. File `adi-original.jpg`; original preserved, runtime face crop/monochrome for right memorial. It is a verified alternative archival portrait, not the exact reference inset.
- **PUMA KING Top FG**: official product page https://uk.puma.com/uk/en/pd/king-top-fg-football-boots/105607?swatch=01 . Official CDN original `king-original.png`, retained. It is the modern KING Top relaunch, not represented as an original1970 boot. `king-cutout.png` is a generated background-extraction derivative; `king-views.png` contains reconstructed alternate angles.
- **Logos**: exact V127 sourced SVG geometry is reused for Adidas/PUMA. Source files and original downloads remain in assets/pele126; colored runtime surfaces and light effects do not alter logo silhouettes.
- **Currency**: V126 sourced banknote originals reused, mixed denomination variants. Source details remain in SOURCING-V126.json; no claim that every reference bill denomination is identifiable.

## Archival video lead and retained reference material

Official FIFA Brazil–Peru1970 full-match listing was located: https://www.plus.fifa.com/en/content/brazil-v-peru-quarter-finals-1970-fifa-world-cup-mexico-full-match-replay/ea037e9e-bd14-4367-8ee7-0d36c08ab599 ; alternate indexed page https://www.fifa.com/es/watch/3qOC3mM7l4OWyyjjyPdJEL . The official playback route redirected to an inaccessible service; no clean master was downloaded. The reference CRT caption reads BRASIL–PERU.

`archive-reference-excerpt.mp4` and archive-frames are a17.8-second derivative of the user-provided360p video, source master20:14 onward. Original baked framing is removed by a documented per-cue runtime crop, including a fitted crop during the original CRT retreat. Thus moving footage is retained, but there is unavoidable compression and resampling. It is tagged REFERENCE VIDEO EXCERPT, not a newly recovered archive master. Replacing it with a clean raw clip switches off that reference-framing crop.

## Celebration search and reconstruction

Searches located archive/agency candidates for shirtless Pelé carried by teammates with raised fist/flag, including Getty and IPA listings. Clean high-resolution retrieval was unsuccessful. `celebration-reference-original.jpg` preserves the supplied frame. `celebration.png` restores and extracts its coherent player/carriers/flag group through built-in image generation; it is explicitly a RESTORED/GENERATED RECONSTRUCTION, not evidence of the historical scene at new resolution. No watermarks were removed.

## Generated material and pose assets

Files: crt-stage.png; crt-stack.png; coffin.png; young-profiles.png; older-profiles.png; grave-ground.png; stadium.png; film-burn-atlas.png; celebration.png; king-cutout.png; king-views.png. Exact prompts and each input role are recorded in GENERATED-PROMPTS-V128.md. Young profiles are anonymous symbolic rivals. Older profile poses reference retrieved Rudolf/Adi identities but are reconstructed viewpoints. The photographic originals used within coffins remain separately replaceable and preserved.

The slate of generated environments and materials is designed for dramatic readable reflections, weathered wood/iron, skin/rim contrast, real grass/soil and restrained atmosphere. These are reconstructions, not archive records. Original pixels, dimensions, hashes, bounds, file paths and classification tags are available in dist/legacy-manifest.json. User replacements display USER MEDIA/source unverified until provenance is supplied.
