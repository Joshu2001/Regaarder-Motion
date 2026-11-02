# Replaceable image on a 3D plane

Stable ID: `image-plane-3d`

Replace the picture while retaining camera tilt, focus, rotation and movement.

## Implementation

- [asset-workbench.js](../asset-workbench.js) — SHA-256 `2afdbf9a9b6273fbfda39ba0da1e9dbd25a0062cfed86fe88e1d26ae21143471`; functions: `paintStudioMediaEffects` (line 1), `allStudioAssets` (line 7), `assetById` (line 8), `assetURL` (line 9), `getStudioMedia` (line 10), `downloadData` (line 13), `recipe` (line 14), `renderAssetList` (line 16), `uploadStudioAsset` (line 17), `storeStudioAsset` (line 18), `applyAssetReplacement` (line 20), `restoreStudioAssets` (line 21), `restoreSceneJSON` (line 22), `imageMotionDefaults` (line 24), `openImageAnimator` (line 25), `renderImageFields` (line 27), `renderWorkRegions` (line 28), `mediaIsReady` (line 29), `workTick` (line 30), `openCutout` (line 34), `cutRect` (line 35), `makeCutout` (line 36), `paintCutout` (line 37), `cutPoint` (line 38), `syncDivider` (line 50), `saveStudioBlob` (line 62), `fingerprintStudioFile` (line 63).
- [city-engine.js](../city-engine.js) — SHA-256 `ac012f267bf8468abbbf7bce0ff5af8432382ab41da150ea86183b0265988229`; functions: `createCityEngine` (line 6), `paint` (line 7), `pick` (line 8).

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
| `preserveAspect` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityDescent` | `0` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityFlyTime` | `10` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityDuration` | `10` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityStartU` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityStartV` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityEndU` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityEndV` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityStartDistance` | `26` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityEndDistance` | `16` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityStartElevation` | `45` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityEndElevation` | `80` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityHeading` | `0` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityRoll` | `-8` | number | Native angle; source specifies degrees or radians | `asset-workbench.js#imageMotionDefaults` |
| `cityEndRoll` | `0` | number | Native angle; source specifies degrees or radians | `asset-workbench.js#imageMotionDefaults` |
| `citySpinStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `citySpinTime` | `10` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityTurns` | `0.15` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityLogoStart` | `999` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityLogoFade` | `1` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityLogoU` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityLogoV` | `0.5` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityLogoSize` | `1` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityLogoTurns` | `0` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityLogoColor` | `"#fff"` | string | Renderer color value | `asset-workbench.js#imageMotionDefaults` |
| `cityCatStart` | `999` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityCatTime` | `1` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityEdgeBlur` | `5` | number | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |
| `cityRegions` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `asset-workbench.js#imageMotionDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "image-plane-3d",
  "parameters": {
    "preserveAspect": true,
    "cityDescent": 0,
    "cityFlyTime": 10,
    "cityDuration": 10,
    "cityStartU": 0.5,
    "cityStartV": 0.5,
    "cityEndU": 0.5,
    "cityEndV": 0.5,
    "cityStartDistance": 26,
    "cityEndDistance": 16,
    "cityStartElevation": 45,
    "cityEndElevation": 80,
    "cityHeading": 0,
    "cityRoll": -8,
    "cityEndRoll": 0,
    "citySpinStart": 0,
    "citySpinTime": 10,
    "cityTurns": 0.15,
    "cityLogoStart": 999,
    "cityLogoFade": 1,
    "cityLogoU": 0.5,
    "cityLogoV": 0.5,
    "cityLogoSize": 1,
    "cityLogoTurns": 0,
    "cityLogoColor": "#fff",
    "cityCatStart": 999,
    "cityCatTime": 1,
    "cityEdgeBlur": 5,
    "cityRegions": []
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
