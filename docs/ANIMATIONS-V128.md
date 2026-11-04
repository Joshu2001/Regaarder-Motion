# V128 animation inventory and controls

Canvas units: pixels at960×540; angles: degrees; times: local seconds from20:14. Exact defaults and image transforms are serialized in dist/legacy-v128-default-preset.json. Machine-readable searchable effects: EFFECTS-V128.json. Core tools: dist/legacy-motion.js; scene binding: dist/legacy-sequence.js.

| Tool / search terms | Main controls and defaults | Editable behaviour |
|---|---|---|
| archive-crop-to-crt / framed video, boot punch | bootPunch8.8; tvStart11.533; archiveSpeed1; archiveHasReferenceFraming true | Shared video clock; fitted source-wrapper removal; raw replacements bypass crop. Cue retiming maps source clock to canonical intervals. |
| CRT screen projection / television | screenX253, screenY104, screenW388, screenH270 | Rounded mask in parent TV coordinates; nine peripheral-screen projections reuse moving content at reduced strength. Mask must be calibrated for a replacement TV. |
| CRT retreat / zoom out | tvNearScale1.28 → tvFarScale0.65, until17.733 | Whole screen/housing group retreats; parent transforms also carry reflection. |
| Reflective screen / stage | reflectionOpacity0.28; reflectionBlur3 | Flipped/compressed moving assembly projection below world baseline423. This is a 2.5D reflection, not a ray-traced floor. |
| film-burn-overlap / warm flash | burnStart11.467; burnEnd11.633; strength1; direction1 | Six photographic texture cells with screen blending; destination cut happens before burn ends. Set direction−1 to reverse texture sequence. |
| neon-handshake-bob / joined arms | amplitude16; period3.4; glow18 | Reused connected hands/arms group; alpha-edge-only neon preserves open interior and text visibility. Vertical motion independent of camera. |
| Restaurant retreat / dining contact | roomPullback0.28 | Shared continuous room camera; diners/chairs/table remain in stable contact. No invented chewing animation. |
| amount-occluded-reveal / green price | amountText $125,000; amountStart21.5; stagger0.18 | Individual glyph reveal and shaded green face; rendered behind diners/handshake. |
| product-money-depth-field / banknote rain | billSpeed1; billDensity1; seed8 | Seeded front/back flips, multiple scales, near/far blur and overlapping occlusion. Shared bill images can be replaced. |
| Product entry paths / orbit, shoes | shoeStart33; shoeTravel1; shoeDirection1 | Six independent shoe slots. Per-slot delays:0,0.65,1.3,1.9,2.5,3.2; travel duration1.5 each; exitStart47.5, exitDuration1.5. Paths cover lower-right, upper-left and near foreground. Direction−1 mirrors path travel. |
| Rain-like streaks / stadium light | streakStrength0.45; streakSpeed1 | Independent streak motion; negative speed reverses. Literal source rain technique remains unverified. |
| staggered-vertical-panels / brand reveal | brandStart39; panelDelay0.5; panelDuration1.5; direction1 | Red rises first, blue follows. Portraits/logos remain separate. Negative direction changes initial approach. |
| two-side-flow-matte / flames, smoke | flowStrength0.65; flowSpeed6 | Existing photographic fire atlas supplies a luminance alpha texture; cyan screen emission on blue, dark normal blend on red; masked to each profile and follows its image transform. |
| profile-to-memorial / outward rivals | profileStart45.5; panelDelay0.5 | New poses face outward. Prior panel leaves upward; later profile enters from below. |
| coffin rise / delayed burial | left53.8; right61.5; rise1.3; coffinDirection1 | Source photos are child planes clipped to their parent's frame. Direction−1 enters from above. |
| Memorial photo mask | photoInsetX0.492,Y0.291,W0.297,H0.19 | Fractions of coffin's drawn rectangle; inset photo has its own replace/position/scale/opacity/blur controls. |
| grave-perimeter-reveal / grass, cyan-red contour | groundStart64.5; memorialPullback0.58; outlineStart65.3; duration2.2; direction1 | Shared camera recedes to earth/grass; left cyan/right red open-bottom contours draw progressively. No terminal black fade. |
| Atmospheric dust / ash | dustStrength0.42 | Deterministic drifting points, not a claim of literal stars. |
| Film material | grain0.1; exposure1; rimStrength1 | Time-varying grain and controlled darkening/rim highlights, preserving scene hierarchy. |

Every image binding has x/y, scale, rotation, opacity, blur, depth factor, mirror and visibility. Position/size are source-independent; mask geometry is intentionally explicit. Global speed and reverse act on the whole71-second clock. Scene cue order and numeric ranges are validated. Input presets merge defaults so missing new fields can be restored; future schema migration must preserve user media and timing.

Reversal is not a license to separate connected hands or move the inset photo away from its coffin parent. Test contact, source identity and temporal overlap separately from general transform controls. Rendering the same time twice must yield the same image; software checks do not prove reference fidelity.
