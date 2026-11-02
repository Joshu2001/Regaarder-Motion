# Layered cargo and markings

Stable ID: `depot-cargo`

Separate editable cargo planes with position, depth and insignia.

## Implementation

- [depot.js](../depot.js) — SHA-256 `efb647ed9696bfa9a735b9c66e56e4e18c849720a8a5b69a8a63cec588a2f6d9`; functions: `repaintDepotAssets` (line 8), `updateDepotAssetStatus` (line 9), `reloadDepotAssets` (line 10), `paintDepotSmoke` (line 15), `renderDepot` (line 16), `seekDepot` (line 29), `depotObjectFields` (line 33), `depotMarkFields` (line 34), `renderDepotControls` (line 35).
- [depot-scene.js](../depot-scene.js) — SHA-256 `84ce38ca005a616ea88b489c5353373fe40eee1fe8949e357cf7d13c2823d211`; functions: `drawDepotInsignia` (line 7), `createDepotScene` (line 8), `cover` (line 8).
- [depot-assets.js](../depot-assets.js) — SHA-256 `d1fae065e976135f37854b26afd31c510392dd6a14d3991f245c67d566943505`; functions: `depotAssetState` (line 3), `attachDepotAsset` (line 4), `depotFigureTexture` (line 6).

## Controls and compatibility

```json
{
  "adapter": "capability",
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
    "depotMountain",
    "depotRoom",
    "depotManLeft",
    "depotManRight",
    "depotCrate"
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
| `depotDuration` | `58` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotDescent` | `8` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotSmokeLead` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotSmokeClear` | `9` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotSmokeDarkness` | `0.78` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotPullStart` | `12` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotPullTime` | `18` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotStartScale` | `3.2` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotEndScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFrontScale` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotBackgroundStart` | `1.22` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFocusX` | `500` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFocusY` | `350` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotStartFocusX` | `400` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotStartFocusY` | `400` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFloorY` | `540` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCargoPushStart` | `8` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCargoPushTime` | `5` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCargoBackScale` | `1.4` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCargoMidScale` | `1.85` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCargoNearScale` | `2.6` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotBlurStart` | `16` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotBlurEnd` | `3` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFocusTime` | `6` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotBrightness` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotSaturation` | `0.75` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotHaze` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotObjects` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFrameStart` | `32` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFrameTime` | `23` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFrameEndScale` | `0.18` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCrackStart` | `40` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCrackTime` | `1.6` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTiltStart` | `43` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotTiltTime` | `12` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFrameRotation` | `-14` | number | Native angle; source specifies degrees or radians | `depot.js#depotDefaults` |
| `depotFrameTilt` | `52` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCloudLeft` | `"#21647a"` | string | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCloudRight` | `"#9c2520"` | string | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotStormDensity` | `100` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotStormSpeed` | `44` | number | Native renderer rate; do not assume multiplier | `depot-director.js#directorDefaults` |
| `depotCloudY` | `120` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotDividerX` | `500` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotDividerWidth` | `4` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotLightningBrightness` | `2.6` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotLightningRate` | `0.65` | number | Native renderer rate; do not assume multiplier | `depot-director.js#directorDefaults` |
| `depotCargoFrontEnd` | `1.6` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotMountainTravel` | `850` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFlagX` | `40` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFlagY` | `270` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFlagScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotFrameDarkness` | `0.75` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotCrackStrength` | `2.5` | number | Native scalar; legacy ranges vary | `depot-director.js#directorDefaults` |
| `depotCameraStart` | `8` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCameraEnd` | `30` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCameraDistance` | `1200` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCameraStartX` | `500` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCameraStartY` | `65` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotCameraLowY` | `250` | number | Native renderer units; inspect linked implementation before conversion | `depot.js#depotDefaults` |
| `depotGlassReflection` | `0.9` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotGlassRefraction` | `3` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotStormDarkness` | `0.74` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotCrackGlow` | `1.5` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotCrackHighlight` | `0.55` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotImpactPower` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotImpactDuration` | `0.55` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotImpactShake` | `7` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotThunder` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotShardContrast` | `0.12` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotShardReflection` | `150` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotShardTilt` | `0.16` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotShardTint` | `0.09` | number | Renderer color value | `depot-director.js#directorDefaults` |
| `depotReflectionWidth` | `220` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotReflectionAngle` | `-25` | number | Native angle; source specifies degrees or radians | `depot-director.js#directorDefaults` |
| `depotReflectionTime` | `3` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotImpactX` | `-8` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotImpactY` | `-19` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotBranchDensity` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotCloudContrast` | `1.25` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotCloudOpacity` | `0.65` | number | Native scalar; legacy ranges vary | `depot-director.js#directorDefaults` |
| `depotCloudTravel` | `85` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotCloudScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleStart` | `53.6` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotTitleTime` | `2.4` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleStagger` | `0.025` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleDistance` | `300` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleMode` | `"scatter"` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleEasing` | `"smooth"` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleLine` | `"THE INSANE TRUE STORY OF"` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleLeft` | `"ADIDAS"` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleJoin` | `" AND "` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleRight` | `"PUMA"` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleSize` | `62` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleSubtitleSize` | `27` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleY` | `300` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTitleLeftColor` | `"#25a8df"` | string | Renderer color value | `depot-director.js#directorDefaults` |
| `depotTitleRightColor` | `"#f34630"` | string | Renderer color value | `depot-director.js#directorDefaults` |
| `depotTransitionMode` | `"flash"` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTransitionDuration` | `2` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotCameraEase` | `"decelerate"` | string | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotFrameSway` | `0` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTracks` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotTrackEase` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `depot-director.js#directorDefaults` |
| `depotPortalEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotStormPortraitOpacity` | `0.32` | number | Native scalar; legacy ranges vary | `depot-director.js#portalDefaults` |
| `depotStormPortraitScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotShatterStart` | `44` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotShatterTime` | `3` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotShardGap` | `8` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotShardBreakTilt` | `0.7` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotLateDarkStart` | `45` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotLateDarkTime` | `5` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalStart` | `50.5` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalGrow` | `1.15` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalHold` | `0.35` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalClose` | `1.25` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalWidth` | `285` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalPower` | `1.25` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalBloom` | `0.65` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotVanishStart` | `51.1` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotVanishTime` | `1.05` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |
| `depotPortalYaw` | `34` | number | Native angle; source specifies degrees or radians | `depot-director.js#portalDefaults` |
| `depotPortalTitleGap` | `0.3` | number | Native renderer units; inspect linked implementation before conversion | `depot-director.js#portalDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "depot-cargo",
  "parameters": {
    "depotDuration": 58,
    "depotDescent": 8,
    "depotSmokeLead": 1,
    "depotSmokeClear": 9,
    "depotSmokeDarkness": 0.78,
    "depotPullStart": 12,
    "depotPullTime": 18,
    "depotStartScale": 3.2,
    "depotEndScale": 1,
    "depotFrontScale": 2.2,
    "depotBackgroundStart": 1.22,
    "depotFocusX": 500,
    "depotFocusY": 350,
    "depotStartFocusX": 400,
    "depotStartFocusY": 400,
    "depotFloorY": 540,
    "depotCargoPushStart": 8,
    "depotCargoPushTime": 5,
    "depotCargoBackScale": 1.4,
    "depotCargoMidScale": 1.85,
    "depotCargoNearScale": 2.6,
    "depotBlurStart": 16,
    "depotBlurEnd": 3,
    "depotFocusTime": 6,
    "depotBrightness": 1,
    "depotSaturation": 0.75,
    "depotHaze": {
      "density": 38,
      "thickness": 95,
      "speed": 12,
      "scale": 1.3,
      "turbulence": 30,
      "opacity": 0.36,
      "color": "#c5aa7a",
      "seed": 63,
      "path": [
        [
          -0.2,
          0.85
        ],
        [
          0.45,
          0.5
        ],
        [
          1.2,
          0.12
        ]
      ]
    },
    "depotObjects": [
      {
        "id": "far-0",
        "name": "Far cargo 1",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "back",
        "x": 310,
        "y": 415,
        "width": 155,
        "height": 180,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 2.3,
        "brightness": 0.64,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 455,
        "cameraProjected": true,
        "worldZ": 2900
      },
      {
        "id": "far-1",
        "name": "Far cargo 2",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "back",
        "x": 415,
        "y": 415,
        "width": 155,
        "height": 180,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 2.3,
        "brightness": 0.64,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 455,
        "cameraProjected": true,
        "worldZ": 2900
      },
      {
        "id": "far-2",
        "name": "Far cargo 3",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "back",
        "x": 585,
        "y": 415,
        "width": 155,
        "height": 180,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 2.3,
        "brightness": 0.64,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 455,
        "cameraProjected": true,
        "worldZ": 2900
      },
      {
        "id": "far-3",
        "name": "Far cargo 4",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "back",
        "x": 690,
        "y": 415,
        "width": 155,
        "height": 180,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 2.3,
        "brightness": 0.64,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 455,
        "cameraProjected": true,
        "worldZ": 2900
      },
      {
        "id": "middle-0",
        "name": "Aisle cargo 1",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "mid",
        "x": 245,
        "y": 415,
        "width": 240,
        "height": 300,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 1.1,
        "brightness": 0.78,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 540,
        "cameraProjected": true,
        "worldZ": 2300
      },
      {
        "id": "middle-1",
        "name": "Aisle cargo 2",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "mid",
        "x": 345,
        "y": 415,
        "width": 240,
        "height": 300,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 1.1,
        "brightness": 0.78,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 540,
        "cameraProjected": true,
        "worldZ": 2300
      },
      {
        "id": "middle-2",
        "name": "Aisle cargo 3",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "mid",
        "x": 615,
        "y": 415,
        "width": 240,
        "height": 300,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 1.1,
        "brightness": 0.78,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 540,
        "cameraProjected": true,
        "worldZ": 2300
      },
      {
        "id": "middle-3",
        "name": "Aisle cargo 4",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "mid",
        "x": 725,
        "y": 415,
        "width": 240,
        "height": 300,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 1.1,
        "brightness": 0.78,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 540,
        "cameraProjected": true,
        "worldZ": 2300
      },
      {
        "id": "near-0",
        "name": "Passing cargo 1",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "near",
        "x": 270,
        "y": 390,
        "width": 360,
        "height": 430,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 0.8,
        "brightness": 0.8,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 700,
        "cameraProjected": true,
        "worldZ": 1800
      },
      {
        "id": "near-1",
        "name": "Passing cargo 2",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "near",
        "x": 730,
        "y": 390,
        "width": 360,
        "height": 430,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 0.8,
        "brightness": 0.8,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 700,
        "cameraProjected": true,
        "worldZ": 1800
      },
      {
        "id": "front-0",
        "name": "Foreground cover 1",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "front",
        "x": 270,
        "y": 490,
        "width": 440,
        "height": 440,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 1.2,
        "brightness": 0.8,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 930,
        "cameraProjected": true,
        "worldZ": 650
      },
      {
        "id": "front-1",
        "name": "Foreground cover 2",
        "type": "crate",
        "slot": "depotCrate",
        "depth": "front",
        "x": 780,
        "y": 490,
        "width": 440,
        "height": 440,
        "start": 0,
        "fade": 1,
        "opacity": 1,
        "rotation": 0,
        "blur": 1.2,
        "brightness": 0.8,
        "depthStrength": 1,
        "keys": [],
        "mark": {
          "x": 0.32,
          "y": 0.48,
          "size": 0.28,
          "rotation": 0,
          "tilt": 45,
          "color": "#ddd9c7",
          "opacity": 0.8,
          "visible": true
        },
        "floorY": 930,
        "cameraProjected": true,
        "worldZ": 650
      }
    ],
    "depotFrameStart": 32,
    "depotFrameTime": 23,
    "depotFrameEndScale": 0.18,
    "depotCrackStart": 40,
    "depotCrackTime": 1.6,
    "depotTiltStart": 43,
    "depotTiltTime": 12,
    "depotFrameRotation": -14,
    "depotFrameTilt": 52,
    "depotCloudLeft": "#21647a",
    "depotCloudRight": "#9c2520",
    "depotStormDensity": 100,
    "depotStormSpeed": 44,
    "depotCloudY": 120,
    "depotDividerX": 500,
    "depotDividerWidth": 4,
    "depotLightningBrightness": 2.6,
    "depotLightningRate": 0.65,
    "depotCargoFrontEnd": 1.6,
    "depotMountainTravel": 850,
    "depotFlagX": 40,
    "depotFlagY": 270,
    "depotFlagScale": 1,
    "depotFrameDarkness": 0.75,
    "depotCrackStrength": 2.5,
    "depotCameraStart": 8,
    "depotCameraEnd": 30,
    "depotCameraDistance": 1200,
    "depotCameraStartX": 500,
    "depotCameraStartY": 65,
    "depotCameraLowY": 250,
    "depotGlassReflection": 0.9,
    "depotGlassRefraction": 3,
    "depotStormDarkness": 0.74,
    "depotCrackGlow": 1.5,
    "depotCrackHighlight": 0.55,
    "depotImpactPower": 1,
    "depotImpactDuration": 0.55,
    "depotImpactShake": 7,
    "depotThunder": 0.8,
    "depotShardContrast": 0.12,
    "depotShardReflection": 150,
    "depotShardTilt": 0.16,
    "depotShardTint": 0.09,
    "depotReflectionWidth": 220,
    "depotReflectionAngle": -25,
    "depotReflectionTime": 3,
    "depotImpactX": -8,
    "depotImpactY": -19,
    "depotBranchDensity": 1,
    "depotCloudContrast": 1.25,
    "depotCloudOpacity": 0.65,
    "depotCloudTravel": 85,
    "depotCloudScale": 1,
    "depotTitleStart": 53.6,
    "depotTitleTime": 2.4,
    "depotTitleStagger": 0.025,
    "depotTitleDistance": 300,
    "depotTitleMode": "scatter",
    "depotTitleEasing": "smooth",
    "depotTitleLine": "THE INSANE TRUE STORY OF",
    "depotTitleLeft": "ADIDAS",
    "depotTitleJoin": " AND ",
    "depotTitleRight": "PUMA",
    "depotTitleSize": 62,
    "depotTitleSubtitleSize": 27,
    "depotTitleY": 300,
    "depotTitleLeftColor": "#25a8df",
    "depotTitleRightColor": "#f34630",
    "depotTransitionMode": "flash",
    "depotTransitionDuration": 2,
    "depotCameraEase": "decelerate",
    "depotFrameSway": 0,
    "depotTracks": {},
    "depotTrackEase": {},
    "depotPortalEnabled": true,
    "depotStormPortraitOpacity": 0.32,
    "depotStormPortraitScale": 1,
    "depotShatterStart": 44,
    "depotShatterTime": 3,
    "depotShardGap": 8,
    "depotShardBreakTilt": 0.7,
    "depotLateDarkStart": 45,
    "depotLateDarkTime": 5,
    "depotPortalStart": 50.5,
    "depotPortalGrow": 1.15,
    "depotPortalHold": 0.35,
    "depotPortalClose": 1.25,
    "depotPortalWidth": 285,
    "depotPortalPower": 1.25,
    "depotPortalBloom": 0.65,
    "depotVanishStart": 51.1,
    "depotVanishTime": 1.05,
    "depotPortalYaw": 34,
    "depotPortalTitleGap": 0.3
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
