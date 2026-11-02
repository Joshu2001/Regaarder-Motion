# Documentary refinement · native tools

Stable ID: `documentary-refinement-profile`

Native template profile for narration timing, grounded cutout finish, projected cable emphasis, role safety and soft eye-fire compositing.

## Implementation

- [refinement-motion.js](../../dist/refinement-motion.js) — SHA-256 `e23a4db5d2e89810562448aaa9c5e974482175f0b24cf1fac84bea4a3890b22c`; functions: `refinementSettings` (line 6), `validateRefinement` (line 8), `validateTimeMap` (line 9), `mapStoryTime` (line 10), `nativeToStory` (line 11), `buildRefinementMap` (line 12).
- [refinement-director.js](../../dist/refinement-director.js) — SHA-256 `6bce23822d775453b6d67d386f0ed3eb5af0ec7f0336a0ef51e1e053a9d34b9b`; functions: `mapping` (line 6).
- [refinement-audio.js](../../dist/refinement-audio.js) — SHA-256 `1f4676ff60033fb56ee17161fa9f0254ba5883a321e15dfed0cffe7d8f74a22e`; functions: `createNarrationPlayer` (line 2), `narrationStore` (line 3), `db` (line 3).
- [refinement-visual.js](../../dist/refinement-visual.js) — SHA-256 `4a7f4a609894749dbce81cbfac3e83c610cfd7b56a8ee0133ba3fd214a3c2e4c`; functions: `paintTownFocus` (line 4), `paintRefinementFinish` (line 5), `paintRefinementRubble` (line 6), `paintCableEmphasis` (line 7), `paintSoftEyeFire` (line 10).
- [grounded-walk.js](../../dist/grounded-walk.js) — SHA-256 `4f668f9bb385236342bdda69c2dd2dc7132751a3eb2957271c9959f523a08e5f`; functions: `groundedWalkState` (line 4), `sourceFootHulls` (line 5), `paintGroundedWalk` (line 6).
- [sequence-expansion.js](../../dist/sequence-expansion.js) — SHA-256 `5c6c1539348ac71f5ac7608268b69f3cc8fc0d34c8230bd741e1a3179673a881`; functions: `expansionClock` (line 24), `expansionInverse` (line 25), `retimeExpansionStages` (line 26), `expansionState` (line 27), `media` (line 28), `cover` (line 29), `canvas` (line 30), `motherImage` (line 31), `paintContinuationBoy` (line 32), `roughEdge` (line 33), `paintUnfurl` (line 34), `sky` (line 35), `figure` (line 36), `sceneModel` (line 37), `destructionState` (line 38), `integratedFire` (line 39), `paintCollapse` (line 40), `rubbleForeground` (line 41), `vignette` (line 42), `street` (line 43), `createSalvageScene` (line 44), `salvageTowerPlate` (line 45), `search` (line 46), `facadePassage` (line 47), `bike` (line 48), `cleanCutout` (line 49), `drawLeg` (line 50), `feet` (line 51), `shoeHandoff` (line 52), `magnifier` (line 53), `routeImage` (line 54), `diagram` (line 55), `paintExpansion` (line 56), `blendHighlight` (line 58).
- [chapter-sequence.js](../../dist/chapter-sequence.js) — SHA-256 `25bba8853f5d67e4e47f901bdc5659fee274331258fb0f48b48a349425264e1a`; functions: `chapterSequenceState` (line 63), `restoreChapterImage` (line 64), `resolveChapterMedia` (line 65), `chapterCutout` (line 67), `chapterLayerRect` (line 74), `sprite` (line 75), `imageLayer` (line 79), `vignette` (line 80), `black` (line 81), `editedSurface` (line 82), `sky` (line 83), `ground` (line 84), `skyRaw` (line 85), `groundRaw` (line 86), `roleWord` (line 99), `roomBack` (line 101), `room` (line 102), `transformFactoryRect` (line 124), `factory` (line 125), `fireMedia` (line 135), `chapterEyePoint` (line 136), `eyeFire` (line 137), `rivalry` (line 138), `glyph` (line 148), `chapterTitle` (line 149), `personAt` (line 156), `sports` (line 157), `growthTableau` (line 165), `growth` (line 171), `chapterOcclusionEdge` (line 172), `clipSide` (line 173), `treePass` (line 174), `poseHandoff` (line 175), `paintChapterSequence` (line 176), `paintChapterWindowJoin` (line 180), `paintChapterRoomLeadIn` (line 183).
- [city-engine.js](../../dist/city-engine.js) — SHA-256 `ac012f267bf8468abbbf7bce0ff5af8432382ab41da150ea86183b0265988229`; functions: `createCityEngine` (line 6), `paint` (line 7), `pick` (line 8).

## Controls and compatibility

```json
{
  "adapter": "native tools only",
  "preview": {
    "availability": "Native editor tools only"
  },
  "capabilities": {
    "playback": "Shared blank-layer clock: speed, reverse, delay, pause, easing, slow/fast",
    "parameters": "Independent per-instance copies; nested JSON editable",
    "media": "Independent named source-slot bindings",
    "direction": "Timing reversal; geometric axes only where implemented",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [
    "chapterRoom",
    "chapterWindow",
    "chapterPot1",
    "chapterPot2",
    "chapterPot3",
    "chapterYoungRudi",
    "chapterYoungAdi",
    "chapterShelf",
    "chapterVase",
    "chapterSill",
    "chapterFactoryOld",
    "chapterFence",
    "chapterBike",
    "chapterGround",
    "chapterSky",
    "chapterHeadAdi",
    "chapterHeadRudi",
    "chapterBrandAdi",
    "chapterBrandRudi",
    "chapterRoleTexture",
    "chapterTitleTexture",
    "chapterFireTexture",
    "chapterHorizon",
    "chapterSalesman",
    "chapterTree",
    "chapterOlderAdi",
    "chapterOlderRudi",
    "chapterOpenAdi",
    "chapterOpenRudi",
    "chapterFactoryNew",
    "chapterProp1",
    "chapterProp2",
    "chapterProp3",
    "chapterProp4",
    "chapterProp5",
    "chapterProp6",
    "chapterProp7",
    "chapterProp8"
  ],
  "commonPlayback": {
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
}
```

## Exact factory values

| Parameter | Exact default | Type | Unit / meaning | Source |
|---|---|---|---|---|
| `refineEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refineNarrationTiming` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refinePreserveCustom` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refineMapFocus` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refineMapLabel` | `"HERZOGENAURACH"` | string | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refineGrounding` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refineContactStrength` | `0.65` | number | 0–2 scalar; bounded image-space stance correction | `refinement-motion.js#refinementDefaults` |
| `refineContactShadow` | `0.26` | number | 0–2 opacity scalar, Canvas alpha clamp | `refinement-motion.js#refinementDefaults` |
| `refineRubbleDepth` | `0.45` | number | 0–2 scalar; opacity capped at 1 | `refinement-motion.js#refinementDefaults` |
| `refineCableStrength` | `0.85` | number | 0–2 glow scalar | `refinement-motion.js#refinementDefaults` |
| `refineRoleSafe` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refineEyeSoftness` | `1` | number | 0 disables new soft eye mask; positive enables it | `refinement-motion.js#refinementDefaults` |
| `refineSoundEnabled` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `refinement-motion.js#refinementDefaults` |
| `refineSoundGain` | `0.5` | number | 0–2 input; audio volume clamps to 0–1 | `refinement-motion.js#refinementDefaults` |
| `refineVignette` | `0.08` | number | Opacity scalar, visible clamp 0–0.3 | `refinement-motion.js#refinementDefaults` |

## Limitations

- Native editor tools; no independent retiming of arbitrary layers. Story anchors are authored estimates, not voice alignment recovered from audio.
- Classic photographic cutout uses bounded image-space stance correction; not a complete no-slip world-space walk solve.
- Town ellipse is an illustrative callout, not a surveyed border.
- Attached narration is stored locally. No reference voice or new ending is bundled.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "documentary-refinement-profile",
  "parameters": {
    "refineEnabled": true,
    "refineNarrationTiming": true,
    "refinePreserveCustom": true,
    "refineMapFocus": true,
    "refineMapLabel": "HERZOGENAURACH",
    "refineGrounding": true,
    "refineContactStrength": 0.65,
    "refineContactShadow": 0.26,
    "refineRubbleDepth": 0.45,
    "refineCableStrength": 0.85,
    "refineRoleSafe": true,
    "refineEyeSoftness": 1,
    "refineSoundEnabled": false,
    "refineSoundGain": 0.5,
    "refineVignette": 0.08
  },
  "playback": {
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
  },
  "bindings": {}
}
```
