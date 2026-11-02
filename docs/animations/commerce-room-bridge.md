# Money, street exchange and room entrance

Stable ID: `commerce-room-bridge`

Money, street exchange and room entrance with separately editable sources, deterministic timing and depth layers.

## Implementation

- [commerce-bridge.js](../../dist/commerce-bridge.js) — SHA-256 `a9cfd25cde2b8d4ea11796025aadac07198f700e3e2d057e19179267280600ec`; functions: `bridgeState` (line 19), `bridgeCashPose` (line 24), `media` (line 33), `draw` (line 34), `paintBridgeCash` (line 41), `paintBridgeStreet` (line 51), `paintCommerceBridge` (line 58), `mountBridgeControls` (line 71).
- [chapter-sequence.js](../../dist/chapter-sequence.js) — SHA-256 `25bba8853f5d67e4e47f901bdc5659fee274331258fb0f48b48a349425264e1a`; functions: `chapterSequenceState` (line 63), `restoreChapterImage` (line 64), `resolveChapterMedia` (line 65), `chapterCutout` (line 67), `chapterLayerRect` (line 74), `sprite` (line 75), `imageLayer` (line 79), `vignette` (line 80), `black` (line 81), `editedSurface` (line 82), `sky` (line 83), `ground` (line 84), `skyRaw` (line 85), `groundRaw` (line 86), `roleWord` (line 99), `roomBack` (line 101), `room` (line 102), `transformFactoryRect` (line 124), `factory` (line 125), `fireMedia` (line 135), `chapterEyePoint` (line 136), `eyeFire` (line 137), `rivalry` (line 138), `glyph` (line 148), `chapterTitle` (line 149), `personAt` (line 156), `sports` (line 157), `growthTableau` (line 165), `growth` (line 171), `chapterOcclusionEdge` (line 172), `clipSide` (line 173), `treePass` (line 174), `poseHandoff` (line 175), `paintChapterSequence` (line 176), `paintChapterWindowJoin` (line 180), `paintChapterRoomLeadIn` (line 183).
- [sequence-expansion.js](../../dist/sequence-expansion.js) — SHA-256 `5c6c1539348ac71f5ac7608268b69f3cc8fc0d34c8230bd741e1a3179673a881`; functions: `expansionClock` (line 24), `expansionInverse` (line 25), `retimeExpansionStages` (line 26), `expansionState` (line 27), `media` (line 28), `cover` (line 29), `canvas` (line 30), `motherImage` (line 31), `paintContinuationBoy` (line 32), `roughEdge` (line 33), `paintUnfurl` (line 34), `sky` (line 35), `figure` (line 36), `sceneModel` (line 37), `destructionState` (line 38), `integratedFire` (line 39), `paintCollapse` (line 40), `rubbleForeground` (line 41), `vignette` (line 42), `street` (line 43), `createSalvageScene` (line 44), `salvageTowerPlate` (line 45), `search` (line 46), `facadePassage` (line 47), `bike` (line 48), `cleanCutout` (line 49), `drawLeg` (line 50), `feet` (line 51), `shoeHandoff` (line 52), `magnifier` (line 53), `routeImage` (line 54), `diagram` (line 55), `paintExpansion` (line 56), `blendHighlight` (line 58).

## Controls and compatibility

```json
{
  "adapter": "commerce-bridge",
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
    "bridgeStreet",
    "bridgeSubject",
    "bridgeShoulder",
    "bridgeCash",
    "chapterRoom",
    "chapterWindow",
    "chapterYoungAdi",
    "chapterYoungRudi",
    "chapterShelf",
    "chapterSill",
    "chapterPot1",
    "chapterPot2",
    "chapterPot3",
    "chapterRoleTexture",
    "routeShoeA",
    "routeShoeB",
    "routeShoeC",
    "routeShoeD",
    "historyShoePaper",
    "chapterVase",
    "chapterFactoryOld",
    "chapterFence",
    "chapterBike",
    "chapterGround",
    "chapterSky",
    "chapterHeadAdi",
    "chapterHeadRudi",
    "chapterBrandAdi",
    "chapterBrandRudi",
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
| `chapterSequenceEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterLayerEdits` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSourceBindings` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterEdgeAlpha` | `110` | number | Native scalar; legacy ranges vary | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomDirection` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeDirection` | `"left"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPoseDirection` | `"left"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterJoinDirection` | `"right"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPosePixelsPerSecond` | `1400` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesText` | `"SALES"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufacturingText` | `"MANUFACTURING"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleSmall` | `"CHAPTER 2:"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleText` | `"THE NAZI OLYMPICS"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesFont` | `250` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufacturingFont` | `104` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleFont` | `58` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleColor` | `"#f6c55b"` | string | Renderer color value | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoleColor` | `"#e5edf4"` | string | Renderer color value | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoleFillMode` | `"image"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleFillMode` | `"color"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTextureSpeed` | `12` | number | Native renderer rate; do not assume multiplier | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTextureScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesStart` | `0.15` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesReveal` | `1.1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomSwapStart` | `3` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomSwapEnd` | `4.4` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufactureStart` | `7.1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterManufactureEnd` | `8.7` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPairStart` | `10.7` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterWireStart` | `13.1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryCut` | `16.45` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRivalryStart` | `20.6` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterEyeFireStart` | `21.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundFireStart` | `22.1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFadeStart` | `28.7` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBlackStart` | `30.3` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleStart` | `32.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleAssembleEnd` | `34.2` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleRetreatEnd` | `39.5` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleBlack` | `41.2` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSportsStart` | `42.2` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesmanStart` | `43.4` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesmanEnd` | `44.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeStart` | `47.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeEnd` | `49.4` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPoseStart` | `52.1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSequenceDuration` | `52.95` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryInitialZoom` | `4.8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryDecay` | `1.4` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryWidth` | `500` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryY` | `145` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundHorizon` | `425` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundTextureScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundRoughness` | `0.72` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundForegroundDarkness` | `0.48` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundGrayscale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundBrightness` | `0.9` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundContactShadow` | `0.62` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGroundDepthStrength` | `1` | number | Native scalar; legacy ranges vary | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryBaseY` | `445` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFenceScale` | `0.72` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeScale` | `0.58` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeX` | `380` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeY` | `378` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterWindowRecess` | `48` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterWindowPerspective` | `1` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryEntryLift` | `0` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBikeGroundY` | `445` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFenceGroundY` | `475` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRoomRetreat` | `0.16` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFactoryRetreat` | `0.3` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleRetreat` | `0.3` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSportsRetreat` | `0.18` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHeadSize` | `520` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHeadYaw` | `84` | number | Native angle; source specifies degrees or radians | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPanelBlue` | `"#113b58"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPanelRed` | `"#621221"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterLeftEyeU` | `0.78` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterLeftEyeV` | `0.48` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRightEyeU` | `0.29` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterRightEyeV` | `0.48` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterEyeFireSize` | `74` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFireStrength` | `0.82` | number | Native scalar; legacy ranges vary | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterFireHeight` | `180` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHeadLight` | `0.85` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleScatterX` | `560` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleScatterY` | `200` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTitleBlur` | `22` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterGlyphDelay` | `0.018` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPropCount` | `8` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPropSpeed` | `36` | number | Native renderer rate; do not assume multiplier | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterPropSeed` | `17` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSkyWind` | `19` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSkyEvolution` | `0.12` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterHorizonBlur` | `7` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTeamCount` | `12` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterSalesmanSize` | `390` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeWidth` | `600` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterTreeBlur` | `1.4` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterMarkerEnabled` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterMarkerColor` | `"#3857ff"` | string | Renderer color value | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterMarkerSize` | `22` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterJoinDuration` | `1.042` | number | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `chapterBridgeStatus` | `"authored; original diagram-to-room bridge not supplied"` | string | Native renderer units; inspect linked implementation before conversion | `chapter-sequence.js#chapterSequenceDefaults` |
| `expansionEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionBoyColorEnabled` | `true` | boolean | Renderer color value | `sequence-expansion.js#expansionDefaults` |
| `expansionBoyWidth` | `600` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionBoyY` | `45` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionBoyX` | `120` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRoomWarmth` | `0.18` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRuinWidth` | `8` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionTowerOnly` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRuinAlphaCutoff` | `160` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionTerrainRelief` | `0.12` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRuinHeight` | `6` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRuinX` | `4.9` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRuinDepth` | `-6` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionArmSwing` | `15` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionElbowSwing` | `8` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWristSwing` | `4` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionExplosionStart` | `12.35` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionExplosionDuration` | `5.2` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionExplosionSize` | `1.12` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionExplosionX` | `490` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionExplosionY` | `290` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionGridScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionGridX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionGridY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionArmsEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionSmokeStrength` | `0.95` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionCollapseStart` | `15.4` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionCollapseDuration` | `3` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionSparkStrength` | `1` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionFlashStrength` | `0.65` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionLightningStart` | `19.2` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionLightningStrength` | `0.8` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionPortraitSaturation` | `1.25` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkEngine` | `"classic"` | string | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkOffsetX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkOffsetY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkTravelSpeed` | `1` | number | Native renderer rate; do not assume multiplier | `sequence-expansion.js#expansionDefaults` |
| `expansionBase` | `40.485` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionDuration` | `71.242` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionUnfurlStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionUnfurlEnd` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionOverlapStart` | `3.5` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionOverlapEnd` | `5.1` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPortraitEnd` | `12.054` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionBlackEnd` | `13.3` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperExitX` | `1000` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperExitY` | `20` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperBob` | `34` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionStreetEnd` | `25.4` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPassageEnd` | `27.5` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkEnd` | `45.243` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionBikeStart` | `46.8` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionShoeHandoff` | `55.3` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionFeetStart` | `56` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionLensStart` | `61.2` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionDiagramStart` | `65.963` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionNextStart` | `70.7` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionCameraPush` | `6.5` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkRate` | `0.85` | number | Native renderer rate; do not assume multiplier | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkStride` | `12` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionBeamOpacity` | `0.65` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionHelmetGlow` | `0.65` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWheelSpeed` | `100` | number | Native renderer rate; do not assume multiplier | `sequence-expansion.js#expansionDefaults` |
| `expansionLensZoom` | `1.65` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionLensRadius` | `175` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteDrawTime` | `1.6` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteStyle` | `"dashed"` | string | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteAnimation` | `"draw-flow"` | string | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteSpeed` | `22` | number | Native renderer rate; do not assume multiplier | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteDash` | `6` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteGap` | `7` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteWidth` | `2.5` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteColor` | `"#ece9df"` | string | Renderer color value | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteDirection` | `"forward"` | string | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteArrow` | `"none"` | string | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteShape` | `"arched"` | string | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteArch` | `32` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteArrowSize` | `12` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteArrowSpacing` | `48` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteOpacity` | `1` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionRoutePulseHz` | `1` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteTraceFraction` | `0.2` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteTrimStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteTrimEnd` | `1` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteLoop` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteLoopPause` | `0.4` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteDrawStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionHighlightColor` | `"#e0dc60"` | string | Renderer color value | `sequence-expansion.js#expansionDefaults` |
| `expansionBoyPush` | `560` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionVaseBehind` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperRoughness` | `5` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionFireStrength` | `0.72` | number | Native scalar; legacy ranges vary | `sequence-expansion.js#expansionDefaults` |
| `expansionStreetDarkness` | `0.18` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionActorScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionFootScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionFootSpeed` | `1` | number | Native renderer rate; do not assume multiplier | `sequence-expansion.js#expansionDefaults` |
| `expansionLensRimWidth` | `8` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionModelOverrides` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRoutePoints` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteCrops` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkRig` | See JSON below | null | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |

## Limitations

- Generated illustrative artwork; not original footage or recovered 3D. Approximate trajectories and camera. User visual acceptance pending. Integrated template timing uses stage durations; standalone duration uses bridgeDuration.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "commerce-room-bridge",
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
    "bridgeCashDirection": "down",
    "chapterSequenceEnabled": true,
    "chapterLayerEdits": {},
    "chapterSourceBindings": {},
    "chapterEdgeAlpha": 110,
    "chapterRoomDirection": 1,
    "chapterTreeDirection": "left",
    "chapterPoseDirection": "left",
    "chapterJoinDirection": "right",
    "chapterPosePixelsPerSecond": 1400,
    "chapterSalesText": "SALES",
    "chapterManufacturingText": "MANUFACTURING",
    "chapterTitleSmall": "CHAPTER 2:",
    "chapterTitleText": "THE NAZI OLYMPICS",
    "chapterSalesFont": 250,
    "chapterManufacturingFont": 104,
    "chapterTitleFont": 58,
    "chapterTitleColor": "#f6c55b",
    "chapterRoleColor": "#e5edf4",
    "chapterRoleFillMode": "image",
    "chapterTitleFillMode": "color",
    "chapterTextureSpeed": 12,
    "chapterTextureScale": 1,
    "chapterSalesStart": 0.15,
    "chapterSalesReveal": 1.1,
    "chapterRoomSwapStart": 3,
    "chapterRoomSwapEnd": 4.4,
    "chapterManufactureStart": 7.1,
    "chapterManufactureEnd": 8.7,
    "chapterPairStart": 10.7,
    "chapterWireStart": 13.1,
    "chapterFactoryCut": 16.45,
    "chapterRivalryStart": 20.6,
    "chapterEyeFireStart": 21.8,
    "chapterGroundFireStart": 22.1,
    "chapterFadeStart": 28.7,
    "chapterBlackStart": 30.3,
    "chapterTitleStart": 32.8,
    "chapterTitleAssembleEnd": 34.2,
    "chapterTitleRetreatEnd": 39.5,
    "chapterTitleBlack": 41.2,
    "chapterSportsStart": 42.2,
    "chapterSalesmanStart": 43.4,
    "chapterSalesmanEnd": 44.8,
    "chapterTreeStart": 47.8,
    "chapterTreeEnd": 49.4,
    "chapterPoseStart": 52.1,
    "chapterSequenceDuration": 52.95,
    "chapterFactoryInitialZoom": 4.8,
    "chapterFactoryDecay": 1.4,
    "chapterFactoryWidth": 500,
    "chapterFactoryY": 145,
    "chapterGroundHorizon": 425,
    "chapterGroundTextureScale": 1,
    "chapterGroundRoughness": 0.72,
    "chapterGroundForegroundDarkness": 0.48,
    "chapterGroundGrayscale": 1,
    "chapterGroundBrightness": 0.9,
    "chapterGroundContactShadow": 0.62,
    "chapterGroundDepthStrength": 1,
    "chapterFactoryBaseY": 445,
    "chapterFenceScale": 0.72,
    "chapterBikeScale": 0.58,
    "chapterBikeX": 380,
    "chapterBikeY": 378,
    "chapterWindowRecess": 48,
    "chapterWindowPerspective": 1,
    "chapterFactoryEntryLift": 0,
    "chapterBikeGroundY": 445,
    "chapterFenceGroundY": 475,
    "chapterRoomRetreat": 0.16,
    "chapterFactoryRetreat": 0.3,
    "chapterTitleRetreat": 0.3,
    "chapterSportsRetreat": 0.18,
    "chapterHeadSize": 520,
    "chapterHeadYaw": 84,
    "chapterPanelBlue": "#113b58",
    "chapterPanelRed": "#621221",
    "chapterLeftEyeU": 0.78,
    "chapterLeftEyeV": 0.48,
    "chapterRightEyeU": 0.29,
    "chapterRightEyeV": 0.48,
    "chapterEyeFireSize": 74,
    "chapterFireStrength": 0.82,
    "chapterFireHeight": 180,
    "chapterHeadLight": 0.85,
    "chapterTitleScatterX": 560,
    "chapterTitleScatterY": 200,
    "chapterTitleBlur": 22,
    "chapterGlyphDelay": 0.018,
    "chapterPropCount": 8,
    "chapterPropSpeed": 36,
    "chapterPropSeed": 17,
    "chapterSkyWind": 19,
    "chapterSkyEvolution": 0.12,
    "chapterHorizonBlur": 7,
    "chapterTeamCount": 12,
    "chapterSalesmanSize": 390,
    "chapterTreeWidth": 600,
    "chapterTreeBlur": 1.4,
    "chapterMarkerEnabled": false,
    "chapterMarkerColor": "#3857ff",
    "chapterMarkerSize": 22,
    "chapterJoinDuration": 1.042,
    "chapterBridgeStatus": "authored; original diagram-to-room bridge not supplied",
    "expansionEnabled": true,
    "expansionBoyColorEnabled": true,
    "expansionBoyWidth": 600,
    "expansionBoyY": 45,
    "expansionBoyX": 120,
    "expansionRoomWarmth": 0.18,
    "expansionRuinWidth": 8,
    "expansionTowerOnly": true,
    "expansionRuinAlphaCutoff": 160,
    "expansionTerrainRelief": 0.12,
    "expansionRuinHeight": 6,
    "expansionRuinX": 4.9,
    "expansionRuinDepth": -6,
    "expansionArmSwing": 15,
    "expansionElbowSwing": 8,
    "expansionWristSwing": 4,
    "expansionExplosionStart": 12.35,
    "expansionExplosionDuration": 5.2,
    "expansionExplosionSize": 1.12,
    "expansionExplosionX": 490,
    "expansionExplosionY": 290,
    "expansionGridScale": 1,
    "expansionGridX": 0,
    "expansionGridY": 0,
    "expansionArmsEnabled": true,
    "expansionSmokeStrength": 0.95,
    "expansionCollapseStart": 15.4,
    "expansionCollapseDuration": 3,
    "expansionSparkStrength": 1,
    "expansionFlashStrength": 0.65,
    "expansionLightningStart": 19.2,
    "expansionLightningStrength": 0.8,
    "expansionPortraitSaturation": 1.25,
    "expansionWalkEngine": "classic",
    "expansionWalkOffsetX": 0,
    "expansionWalkOffsetY": 0,
    "expansionWalkTravelSpeed": 1,
    "expansionBase": 40.485,
    "expansionDuration": 71.242,
    "expansionUnfurlStart": 0,
    "expansionUnfurlEnd": 2.2,
    "expansionOverlapStart": 3.5,
    "expansionOverlapEnd": 5.1,
    "expansionPortraitEnd": 12.054,
    "expansionBlackEnd": 13.3,
    "expansionPaperExitX": 1000,
    "expansionPaperExitY": 20,
    "expansionPaperBob": 34,
    "expansionStreetEnd": 25.4,
    "expansionPassageEnd": 27.5,
    "expansionWalkEnd": 45.243,
    "expansionBikeStart": 46.8,
    "expansionShoeHandoff": 55.3,
    "expansionFeetStart": 56,
    "expansionLensStart": 61.2,
    "expansionDiagramStart": 65.963,
    "expansionNextStart": 70.7,
    "expansionCameraPush": 6.5,
    "expansionWalkRate": 0.85,
    "expansionWalkStride": 12,
    "expansionBeamOpacity": 0.65,
    "expansionHelmetGlow": 0.65,
    "expansionWheelSpeed": 100,
    "expansionLensZoom": 1.65,
    "expansionLensRadius": 175,
    "expansionRouteDrawTime": 1.6,
    "expansionRouteStyle": "dashed",
    "expansionRouteAnimation": "draw-flow",
    "expansionRouteSpeed": 22,
    "expansionRouteDash": 6,
    "expansionRouteGap": 7,
    "expansionRouteWidth": 2.5,
    "expansionRouteColor": "#ece9df",
    "expansionRouteDirection": "forward",
    "expansionRouteArrow": "none",
    "expansionRouteShape": "arched",
    "expansionRouteArch": 32,
    "expansionRouteArrowSize": 12,
    "expansionRouteArrowSpacing": 48,
    "expansionRouteOpacity": 1,
    "expansionRoutePulseHz": 1,
    "expansionRouteTraceFraction": 0.2,
    "expansionRouteTrimStart": 0,
    "expansionRouteTrimEnd": 1,
    "expansionRouteLoop": false,
    "expansionRouteLoopPause": 0.4,
    "expansionRouteDrawStart": 0,
    "expansionHighlightColor": "#e0dc60",
    "expansionBoyPush": 560,
    "expansionVaseBehind": false,
    "expansionPaperRoughness": 5,
    "expansionFireStrength": 0.72,
    "expansionStreetDarkness": 0.18,
    "expansionActorScale": 1,
    "expansionFootScale": 1,
    "expansionFootSpeed": 1,
    "expansionLensRimWidth": 8,
    "expansionModelOverrides": {},
    "expansionRoutePoints": [
      [
        160,
        340
      ],
      [
        355,
        215
      ],
      [
        565,
        325
      ],
      [
        780,
        205
      ]
    ],
    "expansionRouteCrops": [
      [
        0.09,
        0.76,
        0.83,
        0.21
      ],
      null,
      null,
      [
        0.1,
        0.72,
        0.67,
        0.21
      ]
    ],
    "expansionWalkRig": null
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
