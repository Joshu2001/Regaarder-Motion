# Salvage walk · searchlight and materials

Stable ID: `salvage-walk-searchlight`

Salvage walk · searchlight and materials. Independent media bindings, parameters and shared playback controls. V59: established boy-room cutouts, explicit vase overlap, linked phase clock, depth-layered rubble, close wheel, attached trouser/shoe sources and four independent route sources. V61: photographic classic walker with both arms; asymmetric ruins, broad explosion/smoke and timed electrical collapse with sparks. V62 matched room color and shelf, gray paper surround, photographic dark-road street, separate figure, pivoting supports and short-lived localized sparks. V63 calibrated portrait push, pre-rolled destruction, shared perspective camera and five conductor spans, bound salvage wires and darker terrain.

## Implementation

- [sequence-expansion.js](../../dist/sequence-expansion.js) — SHA-256 `5c6c1539348ac71f5ac7608268b69f3cc8fc0d34c8230bd741e1a3179673a881`; functions: `expansionClock` (line 24), `expansionInverse` (line 25), `retimeExpansionStages` (line 26), `expansionState` (line 27), `media` (line 28), `cover` (line 29), `canvas` (line 30), `motherImage` (line 31), `paintContinuationBoy` (line 32), `roughEdge` (line 33), `paintUnfurl` (line 34), `sky` (line 35), `figure` (line 36), `sceneModel` (line 37), `destructionState` (line 38), `integratedFire` (line 39), `paintCollapse` (line 40), `rubbleForeground` (line 41), `vignette` (line 42), `street` (line 43), `createSalvageScene` (line 44), `salvageTowerPlate` (line 45), `search` (line 46), `facadePassage` (line 47), `bike` (line 48), `cleanCutout` (line 49), `drawLeg` (line 50), `feet` (line 51), `shoeHandoff` (line 52), `magnifier` (line 53), `routeImage` (line 54), `diagram` (line 55), `paintExpansion` (line 56), `blendHighlight` (line 58).
- [model-studio.js](../../dist/model-studio.js) — SHA-256 `02189b3e3efb9578f0591cd5dee84e0a99735727f01741a42d5fa7dc5c6306ef`; functions: `transformVertex` (line 6), `sampleModelTrack` (line 7), `modelNodeAt` (line 8), `modelGeometry` (line 9), `validateModelScene` (line 18), `modelSceneMeshes` (line 19), `walk` (line 19), `textureData` (line 20), `paintModelScene` (line 21), `importModelOBJ` (line 22), `exportModelOBJ` (line 23), `projectModelPoint` (line 26).
- [model-recipes.js](../../dist/model-recipes.js) — SHA-256 `17ef47a356fedb4aef3c652b519ad00a48a7a1292f25d251c73568551bd2c294`; functions: `modelPart` (line 1), `modelBeam` (line 2), `helmetModel` (line 3), `bicycleModel` (line 4), `bipedModel` (line 5), `ruinModel` (line 6), `createModelRecipe` (line 7), `createRuinedStreet` (line 8).
- [model-webgl.js](../../dist/model-webgl.js) — SHA-256 `edb1feb06a4ed7b406c9fc5654bb16ac2bdd2d14f57a1d320685c9dc32a207d3`; functions: `createModelGPU` (line 2).
- [cutout-walk.js](../../dist/cutout-walk.js) — SHA-256 `dcb1fca9e74bce970059d1ca73947d0260bf6d8c0c1a4ac1a78b31894afbaf76`; functions: `parts` (line 3), `cutoutWalkPose` (line 4), `deformWalkArm` (line 5), `paintArmMesh` (line 6), `paintCutoutWalk` (line 7).
- [moving-lens.js](../../dist/moving-lens.js) — SHA-256 `d6c35280828350e0dee4814a9de6f619c33ba54e7efc3629bdec21c165d55e27`; functions: `paintMovingLens` (line 3).
- [history-scene.js](../../dist/history-scene.js) — SHA-256 `1ffbb2a0116c5197151463fea8a39915a4493706648eb93e171234ee891a1d41`; functions: `createHistoryScene` (line 17), `plate` (line 19), `workshop` (line 20), `portrait` (line 21), `shoulder` (line 22), `ruins` (line 23), `silhouette` (line 24), `paper` (line 25), `strip` (line 26), `reel` (line 27), `card` (line 28).
- [history-director.js](../../dist/history-director.js) — SHA-256 `c18bc7289895c1df0949d826ab52681bf6eaa48a0ab63d10709ebbf985838f50`; functions: inline/class renderer.
- [mesh-walk.js](../../dist/mesh-walk.js) — SHA-256 `7b11d7dfe9ff1e91d4fd48250ba14ed11453a257bddbb8193b50ee8b0c547b21`; functions: `solveWalkIK` (line 6), `walkFootTarget` (line 7), `meshWalkPose` (line 8), `partImage` (line 9), `getWalkPartImage` (line 10), `triangle` (line 11), `walkBoneMesh` (line 12), `bone` (line 13), `paintMeshWalk` (line 14), `validateWalkParameters` (line 15).
- [living-sky.js](../../dist/living-sky.js) — SHA-256 `7cd8e4c5b43d34c0e8b5996305a52c072db5c3a795c7cd99644890892de61695`; functions: `hash` (line 4), `skyNoise` (line 5), `fbm` (line 6), `cloudField` (line 7), `fieldFrame` (line 8), `paintCloudAtmosphere` (line 9), `paintLivingSky` (line 10).
- [living-cables.js](../../dist/living-cables.js) — SHA-256 `2111f25b6eae29225fc82e9f2459aa6e6bb762a3899f3779d35258737988fd1a`; functions: `cablePoint` (line 3), `blend` (line 4), `livingCableNodes` (line 5).
- [reference-staging.js](../../dist/reference-staging.js) — SHA-256 `53c15a69da2cb3c451dd2976a7bd7dfe65cf47a0ed644aff964fc14e2d452796`; functions: `cropImage` (line 8), `paintStagingSprite` (line 9), `stagingRoomState` (line 10), `paintReferenceRoom` (line 11), `electricalFailureState` (line 12), `wire` (line 13), `paintElectricalFailure` (line 14), `opaqueStreetPlate` (line 17), `paintStreetPlate` (line 18), `paintStreetPerson` (line 19), `lightningEnvelope` (line 20), `paintStagingLightning` (line 21), `paintStagingFlash` (line 22).
- [hybrid-scene.js](../../dist/hybrid-scene.js) — SHA-256 `8681c268b42bd89987acbd510cee71625d54a9709d329449567fa820c52df3cc`; functions: `hybridCamera` (line 5), `projectHybrid` (line 6), `imageAnchorWorld` (line 7), `hybridStreetActor` (line 8), `wallMaterial` (line 10), `affineTriangle` (line 11), `paintHybridFloor` (line 12), `streetLayers` (line 13), `hybridPlateRect` (line 14), `paintHybridStreetPlate` (line 15), `failureSupports` (line 16), `electricalTopology` (line 17), `sampleHybridWire` (line 18), `paintHybridWires` (line 19), `salvageCableBinding` (line 21).
- [grounded-walk.js](../../dist/grounded-walk.js) — SHA-256 `4f668f9bb385236342bdda69c2dd2dc7132751a3eb2957271c9959f523a08e5f`; functions: `groundedWalkState` (line 4), `sourceFootHulls` (line 5), `paintGroundedWalk` (line 6).

## Controls and compatibility

```json
{
  "adapter": "expansion",
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
    "salvageFacade",
    "salvageGround",
    "salvageSearcher",
    "salvageBrownShoe",
    "salvageCreamShoe",
    "salvageSky",
    "routeShoeA",
    "routeShoeB",
    "routeShoeC",
    "routeShoeD",
    "salvageRubble",
    "salvageGrayLeg",
    "salvagePinkLeg",
    "historyMotherBackground",
    "historyMotherPerson",
    "historyMotherVase",
    "historyRoomBackground",
    "historyRoomPerson",
    "historyRoomVase",
    "historyRoomCloth",
    "warFire",
    "walkAtlas",
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
| `expansionWalkOffsetX` | `0` | number | stage pixels | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkOffsetY` | `0` | number | stage pixels | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkTravelSpeed` | `1` | number | multiplier;1 matches gait travel | `sequence-expansion.js#expansionDefaults` |
| `expansionBase` | `40.485` | number | chapter source seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionDuration` | `71.242` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionUnfurlStart` | `0` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionUnfurlEnd` | `2.2` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionOverlapStart` | `3.5` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionOverlapEnd` | `5.1` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionPortraitEnd` | `12.054` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionBlackEnd` | `13.3` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperExitX` | `1000` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperExitY` | `20` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperBob` | `34` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionStreetEnd` | `25.4` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionPassageEnd` | `27.5` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkEnd` | `45.243` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionBikeStart` | `46.8` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionShoeHandoff` | `55.3` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionFeetStart` | `56` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionLensStart` | `61.2` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionDiagramStart` | `65.963` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
| `expansionNextStart` | `70.7` | number | clip-relative seconds | `sequence-expansion.js#expansionDefaults` |
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
| `expansionBoyPush` | `560` | number | scene depth units | `sequence-expansion.js#expansionDefaults` |
| `expansionVaseBehind` | `false` | boolean | boolean | `sequence-expansion.js#expansionDefaults` |
| `expansionPaperRoughness` | `5` | number | texture pixels | `sequence-expansion.js#expansionDefaults` |
| `expansionFireStrength` | `0.72` | number | opacity | `sequence-expansion.js#expansionDefaults` |
| `expansionStreetDarkness` | `0.18` | number | opacity | `sequence-expansion.js#expansionDefaults` |
| `expansionActorScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionFootScale` | `1` | number | multiplier | `sequence-expansion.js#expansionDefaults` |
| `expansionFootSpeed` | `1` | number | multiplier | `sequence-expansion.js#expansionDefaults` |
| `expansionLensRimWidth` | `8` | number | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionModelOverrides` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRoutePoints` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `expansionRouteCrops` | See JSON below | array | normalized source rectangle per node | `sequence-expansion.js#expansionDefaults` |
| `expansionWalkRig` | See JSON below | null | Native renderer units; inspect linked implementation before conversion | `sequence-expansion.js#expansionDefaults` |
| `walkCycleRate` | `0.85` | number | cycles per second | `mesh-walk.js#meshWalkDefaults` |
| `walkStepLength` | `210` | number | rig units in1000-unit frame | `mesh-walk.js#meshWalkDefaults` |
| `walkStance` | `0.64` | number | fraction of cycle | `mesh-walk.js#meshWalkDefaults` |
| `walkLift` | `52` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHipBob` | `7` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHipSway` | `5` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHipRoll` | `2` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkTorsoLean` | `9` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkTorsoTwist` | `4` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkHeadNod` | `3` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkArmSwing` | `7` | number | degrees | `cutout-walk.js#cutoutWalkDefaults` |
| `walkElbowBend` | `18` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkWristRoll` | `4` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkCoatFlutter` | `9` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkBreath` | `2` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkFootRoll` | `16` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkGroundSlope` | `0` | number | rig rise/run | `mesh-walk.js#meshWalkDefaults` |
| `walkThighLength` | `185` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkShinLength` | `185` | number | rig units | `mesh-walk.js#meshWalkDefaults` |
| `walkBodyWidth` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkLimbWidth` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkMeshColumns` | `6` | number | integer subdivisions | `mesh-walk.js#meshWalkDefaults` |
| `walkMeshRows` | `12` | number | integer subdivisions | `mesh-walk.js#meshWalkDefaults` |
| `walkFacing` | `1` | number | direction1/-1 | `mesh-walk.js#meshWalkDefaults` |
| `walkPhase` | `0` | number | cycle offset | `cutout-walk.js#cutoutWalkDefaults` |
| `walkMode` | `"walk"` | string | Native renderer units; inspect linked implementation before conversion | `mesh-walk.js#meshWalkDefaults` |
| `walkHeadSize` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkFootSize` | `1` | number | multiplier | `mesh-walk.js#meshWalkDefaults` |
| `walkHeadAngle` | `0` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkFrontFootAngle` | `0` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkBackFootAngle` | `0` | number | degrees | `mesh-walk.js#meshWalkDefaults` |
| `walkPartAnchors` | See JSON below | object | normalized start/end source points | `mesh-walk.js#meshWalkDefaults` |
| `walkPosePhase` | `0.2` | number | fraction of cycle | `mesh-walk.js#meshWalkDefaults` |
| `walkTorchTipX` | `0.91` | number | normalized source X | `mesh-walk.js#meshWalkDefaults` |
| `walkTorchTipY` | `0.88` | number | normalized source Y | `mesh-walk.js#meshWalkDefaults` |
| `walkJointOffsets` | See JSON below | object | rig-unit XY offsets by joint | `mesh-walk.js#meshWalkDefaults` |
| `walkPartBindings` | See JSON below | object | source-slot mapping | `mesh-walk.js#meshWalkDefaults` |
| `walkPartRects` | See JSON below | object | source pixels at1280px atlas, resolution-scaled at runtime | `mesh-walk.js#meshWalkDefaults` |
| `skyWind` | `24` | number | pixels per second before layer multiplier | `living-sky.js#livingSkyDefaults` |
| `skyEvolution` | `0.16` | number | noise-time units per second | `living-sky.js#livingSkyDefaults` |
| `skyDensity` | `0.68` | number | normalized amount | `living-sky.js#livingSkyDefaults` |
| `skyOpacity` | `1` | number | opacity | `living-sky.js#livingSkyDefaults` |
| `skyScale` | `1` | number | multiplier | `living-sky.js#livingSkyDefaults` |
| `skyLayers` | `3` | number | integer1–4 | `living-sky.js#livingSkyDefaults` |
| `skySeed` | `37` | number | integer noise seed | `living-sky.js#livingSkyDefaults` |
| `skyColor` | `"#c60c24"` | string | hex color | `living-sky.js#livingSkyDefaults` |
| `skyCloudColor` | `"#140b16"` | string | hex color | `living-sky.js#livingSkyDefaults` |
| `skyLight` | `0.45` | number | normalized intensity | `living-sky.js#livingSkyDefaults` |
| `skyDirection` | `1` | number | direction1/-1 | `living-sky.js#livingSkyDefaults` |
| `skyShadowStrength` | `0.16` | number | normalized intensity | `living-sky.js#livingSkyDefaults` |
| `cableSag` | `0.3` | number | scene units | `living-cables.js#cableDefaults` |
| `cableSway` | `0.035` | number | scene units | `living-cables.js#cableDefaults` |
| `cableWind` | `0.4` | number | radians per second | `living-cables.js#cableDefaults` |
| `cableThickness` | `0.018` | number | scene-unit radius | `living-cables.js#cableDefaults` |
| `cableSegments` | `24` | number | integer8–64 | `living-cables.js#cableDefaults` |
| `cableSpacing` | `0.13` | number | scene units | `living-cables.js#cableDefaults` |
| `cableAnchorAX` | `2.5` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorAY` | `5.2` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorAZ` | `-5.9` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorBX` | `6` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorBY` | `5.9` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableAnchorBZ` | `-5.9` | number | Native renderer units; inspect linked implementation before conversion | `living-cables.js#cableDefaults` |
| `cableColor` | `"#a3a29b"` | string | hex color | `living-cables.js#cableDefaults` |
| `cableHighlight` | `"#e0dc60"` | string | hex color | `living-cables.js#cableDefaults` |
| `cableHighlightStrength` | `0.7` | number | normalized intensity | `living-cables.js#cableDefaults` |
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
| `walkFrontArmFactor` | `1.15` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkBackArmFactor` | `1` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkElbowSwing` | `4` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkWristSwing` | `2` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkArmsEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkRate` | `0.85` | number | Native renderer rate; do not assume multiplier | `cutout-walk.js#cutoutWalkDefaults` |
| `walkStride` | `12` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
| `walkKnee` | `10` | number | Native renderer units; inspect linked implementation before conversion | `cutout-walk.js#cutoutWalkDefaults` |
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

- Reference-informed reconstruction; original production geometry and exact camera are unproven.
- Image puppet is calibrated to its default source, not automatic human retargeting.
- Partial final transition has no invented destination.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "salvage-walk-searchlight",
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
    "walkCycleRate": 0.85,
    "walkStepLength": 210,
    "walkStance": 0.64,
    "walkLift": 52,
    "walkHipBob": 7,
    "walkHipSway": 5,
    "walkHipRoll": 2,
    "walkTorsoLean": 9,
    "walkTorsoTwist": 4,
    "walkHeadNod": 3,
    "walkArmSwing": 7,
    "walkElbowBend": 18,
    "walkWristRoll": 4,
    "walkCoatFlutter": 9,
    "walkBreath": 2,
    "walkFootRoll": 16,
    "walkGroundSlope": 0,
    "walkThighLength": 185,
    "walkShinLength": 185,
    "walkBodyWidth": 1,
    "walkLimbWidth": 1,
    "walkMeshColumns": 6,
    "walkMeshRows": 12,
    "walkFacing": 1,
    "walkPhase": 0,
    "walkMode": "walk",
    "walkHeadSize": 1,
    "walkFootSize": 1,
    "walkHeadAngle": 0,
    "walkFrontFootAngle": 0,
    "walkBackFootAngle": 0,
    "walkPartAnchors": {},
    "walkPosePhase": 0.2,
    "walkTorchTipX": 0.91,
    "walkTorchTipY": 0.88,
    "walkJointOffsets": {
      "head": [
        -10,
        32
      ]
    },
    "walkPartBindings": {},
    "walkPartRects": {
      "torso": [
        35,
        5,
        370,
        400
      ],
      "head": [
        470,
        45,
        365,
        355
      ],
      "coat": [
        840,
        5,
        410,
        405
      ],
      "thigh": [
        110,
        418,
        225,
        400
      ],
      "shin": [
        550,
        418,
        160,
        395
      ],
      "boot": [
        825,
        505,
        420,
        290
      ],
      "upperarm": [
        75,
        815,
        275,
        415
      ],
      "torcharm": [
        445,
        805,
        395,
        405
      ],
      "forearm": [
        935,
        800,
        245,
        415
      ]
    },
    "skyWind": 24,
    "skyEvolution": 0.16,
    "skyDensity": 0.68,
    "skyOpacity": 1,
    "skyScale": 1,
    "skyLayers": 3,
    "skySeed": 37,
    "skyColor": "#c60c24",
    "skyCloudColor": "#140b16",
    "skyLight": 0.45,
    "skyDirection": 1,
    "skyShadowStrength": 0.16,
    "cableSag": 0.3,
    "cableSway": 0.035,
    "cableWind": 0.4,
    "cableThickness": 0.018,
    "cableSegments": 24,
    "cableSpacing": 0.13,
    "cableAnchorAX": 2.5,
    "cableAnchorAY": 5.2,
    "cableAnchorAZ": -5.9,
    "cableAnchorBX": 6,
    "cableAnchorBY": 5.9,
    "cableAnchorBZ": -5.9,
    "cableColor": "#a3a29b",
    "cableHighlight": "#e0dc60",
    "cableHighlightStrength": 0.7,
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
    "walkFrontArmFactor": 1.15,
    "walkBackArmFactor": 1,
    "walkElbowSwing": 4,
    "walkWristSwing": 2,
    "walkArmsEnabled": true,
    "walkRate": 0.85,
    "walkStride": 12,
    "walkKnee": 10,
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
