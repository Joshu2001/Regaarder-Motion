# Chapter title and floating shoes

Stable ID: `chapter-shoes`

Text assembles while independently transformed procedural shoes float and turn.

## Implementation

- [chapter-motion.js](../chapter-motion.js) — SHA-256 `3eef1420ebb8f5d13d0412de717ef0174da6e38b2593b2a7c64d0c7f615404ca`; functions: `chapterState` (line 4), `shardFall` (line 5), `chapterFocus` (line 7).
- [chapter-shoes.js](../chapter-shoes.js) — SHA-256 `e7986fc125d900985a4eb46f32d2523a04a9a17c85a9f1172e9b5cccd353b010`; functions: `shoePose` (line 5), `rotatePoint` (line 6), `rgb` (line 7), `last` (line 11), `upperPoint` (line 12), `shoeMesh` (line 13), `paintShoe` (line 65).
- [depot-chapter.js](../depot-chapter.js) — SHA-256 `832b13b002ff1b53f5e0cc4202da4586ad7558838697be629834a76be4a67323`; functions: `glow` (line 8), `paintLogoExit` (line 9), `paintChapter` (line 10).
- [chapter-director.js](../chapter-director.js) — SHA-256 `5a5f9392d12c2746c4630f17c2deec0c1bbe3d5ebf8ef630a5f636b7851041bf`; functions: `render` (line 25).

## Controls and compatibility

```json
{
  "adapter": "scene",
  "preview": {
    "availability": "Add & preview in the composition editor"
  },
  "capabilities": {
    "playback": "Shared blank-layer clock: speed, reverse, delay, pause, easing, slow/fast",
    "parameters": "Independent per-instance copies; nested JSON editable",
    "media": "Main source asset where applicable",
    "direction": "Timing reversal; geometric axes only where implemented",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [],
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
| `depotDuration` | `92` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotTitleMode` | `"down"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotLogoExitStart` | `58` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotLogoExitTime` | `1.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotLogoExitSize` | `130` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotLogoExitZoom` | `18` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotBlackHold` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterStart` | `61` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterAssemble` | `5.2` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterHold` | `14` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterDimTime` | `3.5` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFadeTime` | `2.5` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterText` | `"THE LAUNDRY BOYS"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLabel` | `"CHAPTER 1:"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterTextSize` | `54` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLabelSize` | `27` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterY` | `275` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterMode` | `"scatter"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterStagger` | `0.012` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterDistance` | `380` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterBlur` | `24` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterGlow` | `14` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterPullback` | `0.13` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterGold` | `"#ffc65e"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterWhite` | `"#fff9df"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLeft` | `"#3b2870"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterRight` | `"#702a3a"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoOpacity` | `0.1` | number | Native scalar; legacy ranges vary | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoSize` | `290` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoApproach` | `0.08` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoY` | `285` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoLeftX` | `250` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoRightX` | `770` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoRoll` | `0` | number | Native angle; source specifies degrees or radians | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoBlur` | `5` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoReveal` | `3.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterLogoDrift` | `3` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFlash` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFlashX` | `900` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFlashY` | `350` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFlashTime` | `1.05` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFlashWidth` | `280` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterParticleCount` | `65` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterParticleSpeed` | `6` | number | Native renderer rate; do not assume multiplier | `chapter-motion.js#chapterDefaults` |
| `depotChapterEnvironmentDim` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterShoeCount` | `6` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterShoeSpeed` | `0.45` | number | Native renderer rate; do not assume multiplier | `chapter-motion.js#chapterDefaults` |
| `depotChapterShoeReveal` | `2.1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotGlassBreakAmount` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotGlassBehaviour` | `"held"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotShardDetach` | `0.45` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotShardFallStart` | `45` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotShardFallTime` | `3` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotShardGravity` | `150` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotShardFallSpin` | `65` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFocusDelay` | `1.1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterFocusTime` | `4.4` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterEdgeBlur` | `2.4` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterCentreBlur` | `0.45` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterInitialScale` | `1.48` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterAmbient` | `0.22` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterSweepAt` | `3.6` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterSweepTime` | `1.5` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterSweepPower` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |
| `depotChapterEasing` | `"smooth"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-motion.js#chapterDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "chapter-shoes",
  "parameters": {
    "depotDuration": 92,
    "depotTitleMode": "down",
    "depotLogoExitStart": 58,
    "depotLogoExitTime": 1.8,
    "depotLogoExitSize": 130,
    "depotLogoExitZoom": 18,
    "depotBlackHold": 0.8,
    "depotChapterStart": 61,
    "depotChapterAssemble": 5.2,
    "depotChapterHold": 14,
    "depotChapterDimTime": 3.5,
    "depotChapterFadeTime": 2.5,
    "depotChapterText": "THE LAUNDRY BOYS",
    "depotChapterLabel": "CHAPTER 1:",
    "depotChapterTextSize": 54,
    "depotChapterLabelSize": 27,
    "depotChapterY": 275,
    "depotChapterMode": "scatter",
    "depotChapterStagger": 0.012,
    "depotChapterDistance": 380,
    "depotChapterBlur": 24,
    "depotChapterGlow": 14,
    "depotChapterPullback": 0.13,
    "depotChapterGold": "#ffc65e",
    "depotChapterWhite": "#fff9df",
    "depotChapterLeft": "#3b2870",
    "depotChapterRight": "#702a3a",
    "depotChapterLogoOpacity": 0.1,
    "depotChapterLogoSize": 290,
    "depotChapterLogoApproach": 0.08,
    "depotChapterLogoY": 285,
    "depotChapterLogoLeftX": 250,
    "depotChapterLogoRightX": 770,
    "depotChapterLogoRoll": 0,
    "depotChapterLogoBlur": 5,
    "depotChapterLogoReveal": 3.8,
    "depotChapterLogoDrift": 3,
    "depotChapterFlash": 1,
    "depotChapterFlashX": 900,
    "depotChapterFlashY": 350,
    "depotChapterFlashTime": 1.05,
    "depotChapterFlashWidth": 280,
    "depotChapterParticleCount": 65,
    "depotChapterParticleSpeed": 6,
    "depotChapterEnvironmentDim": 0.8,
    "depotChapterShoeCount": 6,
    "depotChapterShoeSpeed": 0.45,
    "depotChapterShoeReveal": 2.1,
    "depotGlassBreakAmount": 1,
    "depotGlassBehaviour": "held",
    "depotShardDetach": 0.45,
    "depotShardFallStart": 45,
    "depotShardFallTime": 3,
    "depotShardGravity": 150,
    "depotShardFallSpin": 65,
    "depotChapterFocusDelay": 1.1,
    "depotChapterFocusTime": 4.4,
    "depotChapterEdgeBlur": 2.4,
    "depotChapterCentreBlur": 0.45,
    "depotChapterInitialScale": 1.48,
    "depotChapterAmbient": 0.22,
    "depotChapterSweepAt": 3.6,
    "depotChapterSweepTime": 1.5,
    "depotChapterSweepPower": 0.8,
    "depotChapterEasing": "smooth"
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
