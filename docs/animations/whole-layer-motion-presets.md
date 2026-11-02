# Object / shape motion presets

Stable ID: `whole-layer-motion-presets`

Follow a normalized path, float, pulse, spin, shake or fade any rendered composition layer, or selected chapter image layer.

## Implementation

- [path-motion.js](../../dist/path-motion.js) — SHA-256 `8f194dc7ab076f350504d473ebf1863487ae8adace2f99ea5f70539849852b46`; functions: `validatePathSettings` (line 7), `pathGeometry` (line 15), `pointOnPath` (line 30), `pathMotionState` (line 34), `segment` (line 42), `arrow` (line 43), `paintPathMotion` (line 44), `sampleObjectMotion` (line 58).
- [composition-core.js](../../dist/composition-core.js) — SHA-256 `38a6a99ae9a02c91f24d7de4843b0587a3789d4df9eb2cf4b58fd1258ed94597`; functions: `registerCapability` (line 6), `discoverTemplateCapabilities` (line 9), `layerSpan` (line 17), `saveBlank` (line 18), `refreshCapabilityMenu` (line 19), `openBlank` (line 20), `addBlankLayer` (line 22), `renderBlankLayers` (line 24), `blankField` (line 25), `renderBlankInspector` (line 26), `renderBlankContext` (line 36), `drawBlankMedia` (line 38), `paintTemplateAction` (line 39), `paintBlank` (line 40), `blankLoop` (line 42), `openLayerTools` (line 52), `archiveBlank` (line 55), `refreshBlankSnapshots` (line 56).
- [chapter-sequence.js](../../dist/chapter-sequence.js) — SHA-256 `25bba8853f5d67e4e47f901bdc5659fee274331258fb0f48b48a349425264e1a`; functions: `chapterSequenceState` (line 63), `restoreChapterImage` (line 64), `resolveChapterMedia` (line 65), `chapterCutout` (line 67), `chapterLayerRect` (line 74), `sprite` (line 75), `imageLayer` (line 79), `vignette` (line 80), `black` (line 81), `editedSurface` (line 82), `sky` (line 83), `ground` (line 84), `skyRaw` (line 85), `groundRaw` (line 86), `roleWord` (line 99), `roomBack` (line 101), `room` (line 102), `transformFactoryRect` (line 124), `factory` (line 125), `fireMedia` (line 135), `chapterEyePoint` (line 136), `eyeFire` (line 137), `rivalry` (line 138), `glyph` (line 148), `chapterTitle` (line 149), `personAt` (line 156), `sports` (line 157), `growthTableau` (line 165), `growth` (line 171), `chapterOcclusionEdge` (line 172), `clipSide` (line 173), `treePass` (line 174), `poseHandoff` (line 175), `paintChapterSequence` (line 176), `paintChapterWindowJoin` (line 180), `paintChapterRoomLeadIn` (line 183).
- [chapter-controls.js](../../dist/chapter-controls.js) — SHA-256 `b0801a75f98b14a83d85a7166cffe8d6d43a7dbe9b28b231fa9ee33161d90131`; functions: `mountChapterControls` (line 4), `draw` (line 11).
- [path-controls.js](../../dist/path-controls.js) — SHA-256 `e813cdf9e3f2b8f01c9a6c46eee5de175938ba9226ae415c228e0bd1c8e74572`; functions: `mountPathControls` (line 2), `paint` (line 33), `tick` (line 34), `mountObjectMotionControls` (line 37), `draw` (line 42), `mountShoePathControls` (line 54).
- [layer-motion.js](../../dist/layer-motion.js) — SHA-256 `4f3e319a0fd6e375c7b59e29bb9abe6461e9545d55caf4b5100b1d05e7752ad9`; functions: `sampleLayer` (line 6), `applyObjectMotion` (line 7), `maskedSource` (line 9), `paintLayer` (line 10).

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
| `objectMotionPreset` | `"none"` | string | none/follow-path/float/pulse/spin/shake/fade | `path-motion.js#objectMotionDefaults` |
| `objectMotionStart` | `0` | number | Seconds | `path-motion.js#objectMotionDefaults` |
| `objectMotionDuration` | `4` | number | Seconds per traversal/cycle | `path-motion.js#objectMotionDefaults` |
| `objectMotionLoop` | `true` | boolean | Boolean | `path-motion.js#objectMotionDefaults` |
| `objectMotionDirection` | `"forward"` | string | forward/reverse | `path-motion.js#objectMotionDefaults` |
| `objectMotionDistance` | `30` | number | Stage pixels | `path-motion.js#objectMotionDefaults` |
| `objectMotionAmount` | `0.12` | number | Scale fraction | `path-motion.js#objectMotionDefaults` |
| `objectMotionSpin` | `45` | number | Degrees per second | `path-motion.js#objectMotionDefaults` |
| `objectMotionFollowTangent` | `false` | boolean | Boolean | `path-motion.js#objectMotionDefaults` |
| `pathPoints` | See JSON below | array | Normalized XY pairs relative to 960×540 stage | `path-motion.js#pathMotionDefaults` |
| `pathShape` | `"curve"` | string | line/polyline/curve/arched/rectangle/ellipse | `path-motion.js#pathMotionDefaults` |
| `pathStyle` | `"dashed"` | string | solid/dashed/dotted/arrows | `path-motion.js#pathMotionDefaults` |
| `pathAnimation` | `"draw-flow"` | string | none/draw/flow/draw-flow/pulse/trace | `path-motion.js#pathMotionDefaults` |
| `pathColor` | `"#ece9df"` | string | CSS color | `path-motion.js#pathMotionDefaults` |
| `pathWidth` | `2.5` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathDash` | `6` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathGap` | `7` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathSpeed` | `22` | number | Stage pixels per second | `path-motion.js#pathMotionDefaults` |
| `pathDirection` | `"forward"` | string | forward/reverse | `path-motion.js#pathMotionDefaults` |
| `pathDrawStart` | `0` | number | Seconds | `path-motion.js#pathMotionDefaults` |
| `pathDrawDuration` | `1.6` | number | Seconds | `path-motion.js#pathMotionDefaults` |
| `pathLoop` | `false` | boolean | Boolean; repeats draw-on, not required for continuous flow | `path-motion.js#pathMotionDefaults` |
| `pathLoopPause` | `0.4` | number | Seconds | `path-motion.js#pathMotionDefaults` |
| `pathOpacity` | `1` | number | Fraction 0–1 | `path-motion.js#pathMotionDefaults` |
| `pathArrow` | `"none"` | string | none/start/end/both | `path-motion.js#pathMotionDefaults` |
| `pathArrowSize` | `12` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathArrowSpacing` | `48` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathPulseHz` | `1` | number | Cycles per second | `path-motion.js#pathMotionDefaults` |
| `pathTraceFraction` | `0.2` | number | Fraction of arc length | `path-motion.js#pathMotionDefaults` |
| `pathArch` | `32` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathTrimStart` | `0` | number | Fraction of arc length | `path-motion.js#pathMotionDefaults` |
| `pathTrimEnd` | `1` | number | Fraction of arc length | `path-motion.js#pathMotionDefaults` |

## Limitations

- Use Animate this object / shape on the selected layer; not a standalone scene renderer.
- Presets transform the rendered object/layer, not an anatomical skeleton or recovered 3D mesh.
- Path offsets are relative to the layer’s native center; open paths can jump when looping.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "whole-layer-motion-presets",
  "parameters": {
    "objectMotionPreset": "none",
    "objectMotionStart": 0,
    "objectMotionDuration": 4,
    "objectMotionLoop": true,
    "objectMotionDirection": "forward",
    "objectMotionDistance": 30,
    "objectMotionAmount": 0.12,
    "objectMotionSpin": 45,
    "objectMotionFollowTangent": false,
    "pathPoints": [
      [
        0.15,
        0.65
      ],
      [
        0.37,
        0.3
      ],
      [
        0.61,
        0.62
      ],
      [
        0.84,
        0.32
      ]
    ],
    "pathShape": "curve",
    "pathStyle": "dashed",
    "pathAnimation": "draw-flow",
    "pathColor": "#ece9df",
    "pathWidth": 2.5,
    "pathDash": 6,
    "pathGap": 7,
    "pathSpeed": 22,
    "pathDirection": "forward",
    "pathDrawStart": 0,
    "pathDrawDuration": 1.6,
    "pathLoop": false,
    "pathLoopPause": 0.4,
    "pathOpacity": 1,
    "pathArrow": "none",
    "pathArrowSize": 12,
    "pathArrowSpacing": 48,
    "pathPulseHz": 1,
    "pathTraceFraction": 0.2,
    "pathArch": 32,
    "pathTrimStart": 0,
    "pathTrimEnd": 1
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
