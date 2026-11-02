# Depth-ordered tumbling money

Stable ID: `commerce-cash-burst`

Independent deterministic money bundles with varying depth, spin, focus and temporal blur; transparent overlay.

## Implementation

- [commerce-bridge.js](../commerce-bridge.js) — SHA-256 `a9cfd25cde2b8d4ea11796025aadac07198f700e3e2d057e19179267280600ec`; functions: `bridgeState` (line 19), `bridgeCashPose` (line 24), `media` (line 33), `draw` (line 34), `paintBridgeCash` (line 41), `paintBridgeStreet` (line 51), `paintCommerceBridge` (line 58), `mountBridgeControls` (line 71).
- [chapter-sequence.js](../chapter-sequence.js) — SHA-256 `25bba8853f5d67e4e47f901bdc5659fee274331258fb0f48b48a349425264e1a`; functions: `chapterSequenceState` (line 63), `restoreChapterImage` (line 64), `resolveChapterMedia` (line 65), `chapterCutout` (line 67), `chapterLayerRect` (line 74), `sprite` (line 75), `imageLayer` (line 79), `vignette` (line 80), `black` (line 81), `editedSurface` (line 82), `sky` (line 83), `ground` (line 84), `skyRaw` (line 85), `groundRaw` (line 86), `roleWord` (line 99), `roomBack` (line 101), `room` (line 102), `transformFactoryRect` (line 124), `factory` (line 125), `fireMedia` (line 135), `chapterEyePoint` (line 136), `eyeFire` (line 137), `rivalry` (line 138), `glyph` (line 148), `chapterTitle` (line 149), `personAt` (line 156), `sports` (line 157), `growthTableau` (line 165), `growth` (line 171), `chapterOcclusionEdge` (line 172), `clipSide` (line 173), `treePass` (line 174), `poseHandoff` (line 175), `paintChapterSequence` (line 176), `paintChapterWindowJoin` (line 180), `paintChapterRoomLeadIn` (line 183).
- [sequence-expansion.js](../sequence-expansion.js) — SHA-256 `5c6c1539348ac71f5ac7608268b69f3cc8fc0d34c8230bd741e1a3179673a881`; functions: `expansionClock` (line 24), `expansionInverse` (line 25), `retimeExpansionStages` (line 26), `expansionState` (line 27), `media` (line 28), `cover` (line 29), `canvas` (line 30), `motherImage` (line 31), `paintContinuationBoy` (line 32), `roughEdge` (line 33), `paintUnfurl` (line 34), `sky` (line 35), `figure` (line 36), `sceneModel` (line 37), `destructionState` (line 38), `integratedFire` (line 39), `paintCollapse` (line 40), `rubbleForeground` (line 41), `vignette` (line 42), `street` (line 43), `createSalvageScene` (line 44), `salvageTowerPlate` (line 45), `search` (line 46), `facadePassage` (line 47), `bike` (line 48), `cleanCutout` (line 49), `drawLeg` (line 50), `feet` (line 51), `shoeHandoff` (line 52), `magnifier` (line 53), `routeImage` (line 54), `diagram` (line 55), `paintExpansion` (line 56), `blendHighlight` (line 58).

## Controls and compatibility

```json
{
  "adapter": "bridge-cash",
  "preview": {
    "availability": "Add & preview in the composition editor"
  },
  "capabilities": {
    "playback": "Shared blank-layer clock: speed, reverse, delay, pause, easing, slow/fast",
    "parameters": "Independent per-instance copies; nested JSON editable",
    "media": "Independent named source-slot bindings",
    "direction": "Timing reversal; geometric axes only where implemented",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [
    "bridgeCash",
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
    "chapterProp8",
    "bridgeStreet",
    "bridgeSubject",
    "bridgeShoulder"
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
| `bridgeEnabled` | `true` | boolean | Boolean | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeDuration` | `10.5` | number | Standalone clip seconds; template uses editable stage durations | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashDuration` | `2.7` | number | Clip seconds | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeRoomRevealStart` | `5.6` | number | Clip seconds | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeRoomRevealEnd` | `7.1` | number | Clip seconds | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashCount` | `45` | number | Integer bundles | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashSeed` | `67` | number | Deterministic integer seed | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashSize` | `250` | number | Stage pixels at depth 1 | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashTimeScale` | `1.3` | number | Dimensionless money clock multiplier | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashLead` | `0.2` | number | Money clock seconds pre-roll | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashGravity` | `300` | number | Stage pixels per second squared | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashSpin` | `1.2` | number | Radians per second | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashBlur` | `2.4` | number | Stage pixels | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeStreetPush` | `0.055` | number | Dimensionless zoom | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeSubjectX` | `580` | number | Stage pixels (960×540) | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeSubjectY` | `85` | number | Stage pixels (960×540) | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeSubjectWidth` | `480` | number | Stage pixels (960×540) | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeSubjectInitialScale` | `1.95` | number | Dimensionless multiplier | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeShoulderWidth` | `1420` | number | Stage pixels (960×540) | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeShoulderY` | `-440` | number | Stage pixels (960×540) | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeShoulderBlur` | `5` | number | Stage pixels (960×540) | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeRoomPan` | `140` | number | Stage pixels (960×540) | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeRoomStartScale` | `1.14` | number | Dimensionless multiplier | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeLayerEdits` | See JSON below | object | Per-slot placement/scale/rotation/light/blur/opacity | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeSourceBindings` | See JSON below | object | Source slot to independent asset ID | `commerce-bridge.js#commerceBridgeDefaults` |
| `bridgeCashDirection` | `"down"` | string | Reserved direction label; current renderer uses down only | `commerce-bridge.js#commerceBridgeDefaults` |

## Limitations

- Generated illustrative artwork; not original footage or recovered 3D. Approximate trajectories and camera. User visual acceptance pending. Integrated template timing uses stage durations; standalone duration uses bridgeDuration.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "commerce-cash-burst",
  "parameters": {
    "bridgeEnabled": true,
    "bridgeDuration": 10.5,
    "bridgeCashDuration": 2.7,
    "bridgeRoomRevealStart": 5.6,
    "bridgeRoomRevealEnd": 7.1,
    "bridgeCashCount": 45,
    "bridgeCashSeed": 67,
    "bridgeCashSize": 250,
    "bridgeCashTimeScale": 1.3,
    "bridgeCashLead": 0.2,
    "bridgeCashGravity": 300,
    "bridgeCashSpin": 1.2,
    "bridgeCashBlur": 2.4,
    "bridgeStreetPush": 0.055,
    "bridgeSubjectX": 580,
    "bridgeSubjectY": 85,
    "bridgeSubjectWidth": 480,
    "bridgeSubjectInitialScale": 1.95,
    "bridgeShoulderWidth": 1420,
    "bridgeShoulderY": -440,
    "bridgeShoulderBlur": 5,
    "bridgeRoomPan": 140,
    "bridgeRoomStartScale": 1.14,
    "bridgeLayerEdits": {},
    "bridgeSourceBindings": {},
    "bridgeCashDirection": "down"
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
