# Unfurl a printed picture

Stable ID: `paper-unfurl-reveal`

A gray reverse-face sheet opens over paper and reveals a replaceable picture. V61: photographic classic walker with both arms; asymmetric ruins, broad explosion/smoke and timed electrical collapse with sparks. V62 matched room color and shelf, gray paper surround, photographic dark-road street, separate figure, pivoting supports and short-lived localized sparks. V63 calibrated portrait push, pre-rolled destruction, shared perspective camera and five conductor spans, bound salvage wires and darker terrain.

## Implementation

- [sequence-expansion.js](../sequence-expansion.js) — SHA-256 `5c6c1539348ac71f5ac7608268b69f3cc8fc0d34c8230bd741e1a3179673a881`; functions: `expansionClock` (line 24), `expansionInverse` (line 25), `retimeExpansionStages` (line 26), `expansionState` (line 27), `media` (line 28), `cover` (line 29), `canvas` (line 30), `motherImage` (line 31), `paintContinuationBoy` (line 32), `roughEdge` (line 33), `paintUnfurl` (line 34), `sky` (line 35), `figure` (line 36), `sceneModel` (line 37), `destructionState` (line 38), `integratedFire` (line 39), `paintCollapse` (line 40), `rubbleForeground` (line 41), `vignette` (line 42), `street` (line 43), `createSalvageScene` (line 44), `salvageTowerPlate` (line 45), `search` (line 46), `facadePassage` (line 47), `bike` (line 48), `cleanCutout` (line 49), `drawLeg` (line 50), `feet` (line 51), `shoeHandoff` (line 52), `magnifier` (line 53), `routeImage` (line 54), `diagram` (line 55), `paintExpansion` (line 56), `blendHighlight` (line 58).
- [reference-staging.js](../reference-staging.js) — SHA-256 `53c15a69da2cb3c451dd2976a7bd7dfe65cf47a0ed644aff964fc14e2d452796`; functions: `cropImage` (line 8), `paintStagingSprite` (line 9), `stagingRoomState` (line 10), `paintReferenceRoom` (line 11), `electricalFailureState` (line 12), `wire` (line 13), `paintElectricalFailure` (line 14), `opaqueStreetPlate` (line 17), `paintStreetPlate` (line 18), `paintStreetPerson` (line 19), `lightningEnvelope` (line 20), `paintStagingLightning` (line 21), `paintStagingFlash` (line 22).
- [hybrid-scene.js](../hybrid-scene.js) — SHA-256 `8681c268b42bd89987acbd510cee71625d54a9709d329449567fa820c52df3cc`; functions: `hybridCamera` (line 5), `projectHybrid` (line 6), `imageAnchorWorld` (line 7), `hybridStreetActor` (line 8), `wallMaterial` (line 10), `affineTriangle` (line 11), `paintHybridFloor` (line 12), `streetLayers` (line 13), `hybridPlateRect` (line 14), `paintHybridStreetPlate` (line 15), `failureSupports` (line 16), `electricalTopology` (line 17), `sampleHybridWire` (line 18), `paintHybridWires` (line 19), `salvageCableBinding` (line 21).
- [grounded-walk.js](../grounded-walk.js) — SHA-256 `4f668f9bb385236342bdda69c2dd2dc7132751a3eb2957271c9959f523a08e5f`; functions: `groundedWalkState` (line 4), `sourceFootHulls` (line 5), `paintGroundedWalk` (line 6).

## Controls and compatibility

```json
{
  "adapter": "unfurl",
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
    "unfurlSource",
    "historyShoePaper",
    "hybridGround",
    "stagingRoom",
    "stagingShelf",
    "stagingStreet",
    "stagingSoldier"
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
| `walkFrontShoulderX` | `474` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontShoulderY` | `287` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontElbowX` | `491` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontElbowY` | `523` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontWristX` | `554` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontWristY` | `720` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackShoulderX` | `618` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackShoulderY` | `458` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackElbowX` | `704` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackElbowY` | `595` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackWristX` | `766` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackWristY` | `625` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkArmSwing` | `7` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkFrontArmFactor` | `1.15` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackArmFactor` | `1` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkElbowSwing` | `4` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkWristSwing` | `2` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkArmsEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkRate` | `0.85` | number | Native renderer rate; do not assume multiplier | `cutout-walk.js#cutoutWalkDefaults` |
| `walkStride` | `12` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkKnee` | `10` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkPhase` | `0` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBob` | `3` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkEdgeThreshold` | `100` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkRig` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `stagingRoomEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingFillInteriors` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBoyDepth` | `1.4` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBasinDepth` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingShelfDepth` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingForegroundStrength` | `0` | number | Native scalar; legacy ranges vary | `reference-staging.js#stagingDefaults` |
| `stagingStreetEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingMatWidth` | `68` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingMatColor` | `"#696765"` | string | Renderer color value | `reference-staging.js#stagingDefaults` |
| `stagingColorStart` | `3.8` | number | Renderer color value | `reference-staging.js#stagingDefaults` |
| `stagingColorEnd` | `5.2` | number | Renderer color value | `reference-staging.js#stagingDefaults` |
| `stagingMotherExitStart` | `4.55` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingMotherExitEnd` | `5.25` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBoyStart` | `3.6` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBoyEnd` | `4.5` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingRoomPush` | `0.72` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingRoomFocusX` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingRoomFocusY` | `0.45` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBoyX` | `205` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBoyY` | `60` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBoyWidth` | `555` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBoyLight` | `0.91` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingMotherX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingMotherY` | `72` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingMotherWidth` | `405` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingShelfX` | `745` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingShelfY` | `205` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingShelfWidth` | `190` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingShelfLight` | `0.68` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingClothX` | `225` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingClothY` | `294` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingClothWidth` | `135` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBasinX` | `-160` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBasinY` | `355` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingBasinWidth` | `475` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingRoomLight` | `0.86` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingFaceShadow` | `0.43` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetPush` | `0.34` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetFocusX` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetFocusY` | `0.43` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetLight` | `0.72` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetReveal` | `1.1` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetPersonX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetPersonFeet` | `485` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetPersonHeight` | `245` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetPersonGrowth` | `340` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingStreetPersonLight` | `0.72` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingElectricalDepth` | `1` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingPoleLean` | `75` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingFailureStart` | `12.9` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingFailureDuration` | `2.7` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingSparkLifetime` | `0.13` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingSparkSize` | `1.3` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingSparkCount` | `16` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingSparkStop` | `19.7` | number | Native renderer units; inspect linked implementation before conversion | `reference-staging.js#stagingDefaults` |
| `stagingSmokeOpacity` | `0.98` | number | Native scalar; legacy ranges vary | `reference-staging.js#stagingDefaults` |
| `hybridStreetEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridTravel` | `5.55` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridPan` | `2.6` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridPanStart` | `23.2` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridPanDuration` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridFocal` | `820` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridHorizonStart` | `220` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridHorizonEnd` | `20` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridCameraHeight` | `2.4` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridActorDepth` | `7.2` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridActorHeight` | `2.05` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridActorX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridBackdropDepth` | `18` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridForegroundDepth` | `8.5` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWireDarkness` | `"#777b72"` | string | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWireWidth` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWireSag` | `0.28` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWireRelease` | `12.95` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWireFallTime` | `8.2` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWireAnchors` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridSalvageAttach` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridRuinAnchorU` | `0.855` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridRuinAnchorV` | `0.25` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridCableReach` | `10` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridCableRise` | `1` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridSalvageGroundLight` | `0.7` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridSalvageSkyLight` | `0.82` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWalkTravel` | `1.35` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWalkCadence` | `1.1` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridActorTrack` | `1` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridActorEndX` | `800` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `hybridWireNearDepth` | `8.2` | number | Native renderer units; inspect linked implementation before conversion | `hybrid-scene.js#hybridDefaults` |
| `groundedWalkEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `grounded-walk.js#groundedWalkDefaults` |
| `groundedWalkStrength` | `1` | number | Native scalar; legacy ranges vary | `grounded-walk.js#groundedWalkDefaults` |
| `groundedWalkGround` | `530` | number | Native renderer units; inspect linked implementation before conversion | `grounded-walk.js#groundedWalkDefaults` |

## Limitations

- Authored mesh; not physical cloth/paper simulation.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "paper-unfurl-reveal",
  "parameters": {
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
    "expansionWalkRig": null,
    "walkFrontShoulderX": 474,
    "walkFrontShoulderY": 287,
    "walkFrontElbowX": 491,
    "walkFrontElbowY": 523,
    "walkFrontWristX": 554,
    "walkFrontWristY": 720,
    "walkBackShoulderX": 618,
    "walkBackShoulderY": 458,
    "walkBackElbowX": 704,
    "walkBackElbowY": 595,
    "walkBackWristX": 766,
    "walkBackWristY": 625,
    "walkArmSwing": 7,
    "walkFrontArmFactor": 1.15,
    "walkBackArmFactor": 1,
    "walkElbowSwing": 4,
    "walkWristSwing": 2,
    "walkArmsEnabled": true,
    "walkRate": 0.85,
    "walkStride": 12,
    "walkKnee": 10,
    "walkPhase": 0,
    "walkBob": 3,
    "walkEdgeThreshold": 100,
    "walkRig": {
      "width": 1024,
      "height": 1536,
      "hip": [
        520,
        930
      ],
      "backKnee": [
        310,
        1160
      ],
      "frontKnee": [
        700,
        1170
      ],
      "flashlight": [
        850,
        690
      ],
      "parts": {
        "body": [
          [
            0,
            0
          ],
          [
            1024,
            0
          ],
          [
            1024,
            960
          ],
          [
            0,
            960
          ]
        ],
        "backThigh": [
          [
            350,
            890
          ],
          [
            550,
            940
          ],
          [
            390,
            1195
          ],
          [
            220,
            1160
          ]
        ],
        "backShin": [
          [
            235,
            1120
          ],
          [
            405,
            1160
          ],
          [
            370,
            1475
          ],
          [
            45,
            1475
          ],
          [
            45,
            1320
          ]
        ],
        "frontThigh": [
          [
            500,
            890
          ],
          [
            740,
            900
          ],
          [
            810,
            1200
          ],
          [
            600,
            1210
          ]
        ],
        "frontShin": [
          [
            600,
            1130
          ],
          [
            805,
            1120
          ],
          [
            860,
            1290
          ],
          [
            980,
            1370
          ],
          [
            965,
            1490
          ],
          [
            620,
            1490
          ]
        ]
      }
    },
    "stagingRoomEnabled": true,
    "stagingFillInteriors": true,
    "stagingBoyDepth": 1.4,
    "stagingBasinDepth": 2.2,
    "stagingShelfDepth": 0.8,
    "stagingForegroundStrength": 0,
    "stagingStreetEnabled": true,
    "stagingMatWidth": 68,
    "stagingMatColor": "#696765",
    "stagingColorStart": 3.8,
    "stagingColorEnd": 5.2,
    "stagingMotherExitStart": 4.55,
    "stagingMotherExitEnd": 5.25,
    "stagingBoyStart": 3.6,
    "stagingBoyEnd": 4.5,
    "stagingRoomPush": 0.72,
    "stagingRoomFocusX": 0.5,
    "stagingRoomFocusY": 0.45,
    "stagingBoyX": 205,
    "stagingBoyY": 60,
    "stagingBoyWidth": 555,
    "stagingBoyLight": 0.91,
    "stagingMotherX": 480,
    "stagingMotherY": 72,
    "stagingMotherWidth": 405,
    "stagingShelfX": 745,
    "stagingShelfY": 205,
    "stagingShelfWidth": 190,
    "stagingShelfLight": 0.68,
    "stagingClothX": 225,
    "stagingClothY": 294,
    "stagingClothWidth": 135,
    "stagingBasinX": -160,
    "stagingBasinY": 355,
    "stagingBasinWidth": 475,
    "stagingRoomLight": 0.86,
    "stagingFaceShadow": 0.43,
    "stagingStreetPush": 0.34,
    "stagingStreetFocusX": 0.5,
    "stagingStreetFocusY": 0.43,
    "stagingStreetLight": 0.72,
    "stagingStreetReveal": 1.1,
    "stagingStreetPersonX": 480,
    "stagingStreetPersonFeet": 485,
    "stagingStreetPersonHeight": 245,
    "stagingStreetPersonGrowth": 340,
    "stagingStreetPersonLight": 0.72,
    "stagingElectricalDepth": 1,
    "stagingPoleLean": 75,
    "stagingFailureStart": 12.9,
    "stagingFailureDuration": 2.7,
    "stagingSparkLifetime": 0.13,
    "stagingSparkSize": 1.3,
    "stagingSparkCount": 16,
    "stagingSparkStop": 19.7,
    "stagingSmokeOpacity": 0.98,
    "hybridStreetEnabled": true,
    "hybridTravel": 5.55,
    "hybridPan": 2.6,
    "hybridPanStart": 23.2,
    "hybridPanDuration": 2.2,
    "hybridFocal": 820,
    "hybridHorizonStart": 220,
    "hybridHorizonEnd": 20,
    "hybridCameraHeight": 2.4,
    "hybridActorDepth": 7.2,
    "hybridActorHeight": 2.05,
    "hybridActorX": 0,
    "hybridBackdropDepth": 18,
    "hybridForegroundDepth": 8.5,
    "hybridWireDarkness": "#777b72",
    "hybridWireWidth": 2.2,
    "hybridWireSag": 0.28,
    "hybridWireRelease": 12.95,
    "hybridWireFallTime": 8.2,
    "hybridWireAnchors": {
      "left": [
        0.19,
        0.29
      ],
      "right": [
        0.87,
        0.25
      ]
    },
    "hybridSalvageAttach": true,
    "hybridRuinAnchorU": 0.855,
    "hybridRuinAnchorV": 0.25,
    "hybridCableReach": 10,
    "hybridCableRise": 1,
    "hybridSalvageGroundLight": 0.7,
    "hybridSalvageSkyLight": 0.82,
    "hybridWalkTravel": 1.35,
    "hybridWalkCadence": 1.1,
    "hybridActorTrack": 1,
    "hybridActorEndX": 800,
    "hybridWireNearDepth": 8.2,
    "groundedWalkEnabled": true,
    "groundedWalkStrength": 1,
    "groundedWalkGround": 530
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
