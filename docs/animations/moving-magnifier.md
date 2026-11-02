# Moving magnifier over media

Stable ID: `moving-magnifier`

A moving circular lens samples a synchronized enlarged region of the same source; rim and handle remain independent. V61: photographic classic walker with both arms; asymmetric ruins, broad explosion/smoke and timed electrical collapse with sparks. V62 matched room color and shelf, gray paper surround, photographic dark-road street, separate figure, pivoting supports and short-lived localized sparks. V63 calibrated portrait push, pre-rolled destruction, shared perspective camera and five conductor spans, bound salvage wires and darker terrain.

## Implementation

- [moving-lens.js](../../dist/moving-lens.js) — SHA-256 `d6c35280828350e0dee4814a9de6f619c33ba54e7efc3629bdec21c165d55e27`; functions: `paintMovingLens` (line 3).
- [sequence-expansion.js](../../dist/sequence-expansion.js) — SHA-256 `5c6c1539348ac71f5ac7608268b69f3cc8fc0d34c8230bd741e1a3179673a881`; functions: `expansionClock` (line 24), `expansionInverse` (line 25), `retimeExpansionStages` (line 26), `expansionState` (line 27), `media` (line 28), `cover` (line 29), `canvas` (line 30), `motherImage` (line 31), `paintContinuationBoy` (line 32), `roughEdge` (line 33), `paintUnfurl` (line 34), `sky` (line 35), `figure` (line 36), `sceneModel` (line 37), `destructionState` (line 38), `integratedFire` (line 39), `paintCollapse` (line 40), `rubbleForeground` (line 41), `vignette` (line 42), `street` (line 43), `createSalvageScene` (line 44), `salvageTowerPlate` (line 45), `search` (line 46), `facadePassage` (line 47), `bike` (line 48), `cleanCutout` (line 49), `drawLeg` (line 50), `feet` (line 51), `shoeHandoff` (line 52), `magnifier` (line 53), `routeImage` (line 54), `diagram` (line 55), `paintExpansion` (line 56), `blendHighlight` (line 58).
- [reference-staging.js](../../dist/reference-staging.js) — SHA-256 `53c15a69da2cb3c451dd2976a7bd7dfe65cf47a0ed644aff964fc14e2d452796`; functions: `cropImage` (line 8), `paintStagingSprite` (line 9), `stagingRoomState` (line 10), `paintReferenceRoom` (line 11), `electricalFailureState` (line 12), `wire` (line 13), `paintElectricalFailure` (line 14), `opaqueStreetPlate` (line 17), `paintStreetPlate` (line 18), `paintStreetPerson` (line 19), `lightningEnvelope` (line 20), `paintStagingLightning` (line 21), `paintStagingFlash` (line 22).
- [hybrid-scene.js](../../dist/hybrid-scene.js) — SHA-256 `8681c268b42bd89987acbd510cee71625d54a9709d329449567fa820c52df3cc`; functions: `hybridCamera` (line 5), `projectHybrid` (line 6), `imageAnchorWorld` (line 7), `hybridStreetActor` (line 8), `wallMaterial` (line 10), `affineTriangle` (line 11), `paintHybridFloor` (line 12), `streetLayers` (line 13), `hybridPlateRect` (line 14), `paintHybridStreetPlate` (line 15), `failureSupports` (line 16), `electricalTopology` (line 17), `sampleHybridWire` (line 18), `paintHybridWires` (line 19), `salvageCableBinding` (line 21).
- [grounded-walk.js](../../dist/grounded-walk.js) — SHA-256 `4f668f9bb385236342bdda69c2dd2dc7132751a3eb2957271c9959f523a08e5f`; functions: `groundedWalkState` (line 4), `sourceFootHulls` (line 5), `paintGroundedWalk` (line 6).

## Controls and compatibility

```json
{
  "adapter": "lens",
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
    "lensSource",
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
| `lensDuration` | `4.763` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensZoom` | `1.65` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensRadius` | `175` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensStartX` | `120` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensStartY` | `270` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensEndX` | `820` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensEndY` | `270` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensBob` | `65` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensRim` | `"#343431"` | string | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensRimWidth` | `5` | number | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
| `lensHandle` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `moving-lens.js#movingLensDefaults` |
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

- Stylized magnification, not a physically simulated optical lens.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "moving-magnifier",
  "parameters": {
    "lensDuration": 4.763,
    "lensZoom": 1.65,
    "lensRadius": 175,
    "lensStartX": 120,
    "lensStartY": 270,
    "lensEndX": 820,
    "lensEndY": 270,
    "lensBob": 65,
    "lensRim": "#343431",
    "lensRimWidth": 5,
    "lensHandle": true,
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
