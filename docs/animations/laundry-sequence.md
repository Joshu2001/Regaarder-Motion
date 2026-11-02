# Laundry aerial pullback and title

Stable ID: `laundry-sequence`

Aerial camera, garments and title with replaceable image/color fill.

## Implementation

- [laundry-motion.js](../../dist/laundry-motion.js) — SHA-256 `f2c185593c78bfd59225a5057a6e88825121b451e4a57fe63983cdea51c69447`; functions: `laundryState` (line 4).
- [laundry-scene.js](../../dist/laundry-scene.js) — SHA-256 `a2972915ba29bc5cb79d306c88691f8b02496a57c4dbf0ad52435a29f14a2397`; functions: `plate` (line 10), `createLaundryScene` (line 11).
- [precision-director.js](../../dist/precision-director.js) — SHA-256 `2cc08bb04d389804df79a5f0dc2653be803b2e306508c3e5ce0e6bc3da291ad6`; functions: `laundryTiming` (line 4), `extendPrecisionDuration` (line 5), `repaintPrecision` (line 9), `loadPrecisionAssets` (line 10).
- [route-scene.js](../../dist/route-scene.js) — SHA-256 `c007e11b0650e85430930c6074dbca384ebdff57e7d0886199bf486792b57321`; functions: `paintLaundryRoutes` (line 4).
- [route-motion.js](../../dist/route-motion.js) — SHA-256 `13c37abb7799d1a8090a31b1192739cbf9d370c573998391a7ac8d30e04ab5e9`; functions: `routeSamples` (line 9), `routePoint` (line 10), `routeState` (line 11), `paintRouteLine` (line 12).
- [texture-fill.js](../../dist/texture-fill.js) — SHA-256 `4072e20c40f1afe56bb0b41828cfa3f4b23aa2b887e2ecc39f4eeafbd3da8459`; functions: `paintTextureFill` (line 4).

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
    "media": "Independent named source-slot bindings",
    "direction": "Timing reversal; geometric axes only where implemented",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [
    "precisionArchitecture",
    "precisionClouds",
    "precisionMasonry",
    "precisionFace",
    "precisionAerial",
    "precisionLinen",
    "precisionSeamstress"
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
| `precisionEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionCloudSpeed` | `-14` | number | Native renderer rate; do not assume multiplier | `precision-motion.js#precisionDefaults` |
| `precisionCloudOpacity` | `0.82` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `precisionCloudY` | `-55` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionCloudWidth` | `980` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionSkyTop` | `"#064b90"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionSkyBottom` | `"#99c6de"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionArchitectureTravel` | `-10` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionArchitecturePush` | `0.16` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryWidth` | `900` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryTravel` | `510` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionMasonryOpacity` | `1` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `precisionBoysDrift` | `-18` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysEntryGrow` | `0.065` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysExitX` | `-1350` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysExitY` | `-12` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionBoysExitZoom` | `0.62` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionNamesTime` | `1.05` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleDelay` | `0.12` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleTime` | `0.8` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleDrop` | `115` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionLightPulse` | `0.22` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTransmissionAt` | `0.18` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTransmissionTime` | `0.65` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneX` | `305` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneY` | `-20` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneWidth` | `300` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneHeight` | `320` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionPaneBars` | `6` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionCraftFace` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionFaceWidth` | `1500` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionFaceY` | `330` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionFaceBlur` | `1.5` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryStart` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryPullTime` | `1.3` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapHold` | `5.7` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleTime` | `2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleHold` | `2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryFadeTime` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapScale` | `1.08` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapStartScale` | `2.7` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapEndScale` | `1.02` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapRotation` | `-3` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `laundryMapBrightness` | `1.1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryMapSaturation` | `1.15` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentWidth` | `84` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentStartWidth` | `300` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentX` | `680` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentY` | `275` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentSpread` | `150` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentCount` | `5` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryGarmentOpacity` | `1` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `laundryGarmentSway` | `1.5` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryCloudOpacity` | `0.72` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `laundryCloudSpeed` | `11` | number | Native renderer rate; do not assume multiplier | `precision-motion.js#precisionDefaults` |
| `laundryCloudWidth` | `740` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryCloudStart` | `1.7` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitle` | `"THE LAUNDRY BOYS"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleSize` | `52` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleX` | `480` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleY` | `295` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryTitleColor` | `"#ffffff"` | string | Renderer color value | `precision-motion.js#precisionDefaults` |
| `laundryTitleTracking` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryVignette` | `0.2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionExitAccel` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionNameScale` | `1.25` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `precisionTitleScale` | `1.2` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysLead` | `1.4` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysOpacity` | `0.64` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `windowBoysX` | `445` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysY` | `180` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysWidth` | `260` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysBlur` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `windowBoysGlare` | `0.08` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureDuration` | `1.6849999999999996` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureStrength` | `1` | number | Native scalar; legacy ranges vary | `precision-motion.js#precisionDefaults` |
| `gestureGridX` | `20` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGridY` | `14` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureTiming` | `"reference"` | string | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureWomanRotation` | `0` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `gestureWomanGain` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureGarmentRotation` | `0` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `gestureGarmentGain` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureArmRotation` | `0` | number | Native angle; source specifies degrees or radians | `precision-motion.js#precisionDefaults` |
| `gestureArmGain` | `1` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0X` | `365` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0Y` | `105` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin0DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1X` | `390` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1Y` | `245` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin1DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2X` | `418` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2Y` | `475` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin2DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3X` | `690` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3Y` | `111` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin3DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4X` | `690` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4Y` | `268` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin4DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5X` | `675` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5Y` | `405` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin5DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6X` | `350` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6Y` | `405` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin6DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7X` | `445` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7Y` | `377` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin7DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8X` | `535` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8Y` | `360` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin8DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9X` | `647` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9Y` | `117` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9DX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gesturePin9DY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceLeft` | `270` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceRight` | `455` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceTop` | `0` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureFaceBottom` | `185` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothLeft` | `560` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothRight` | `840` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothTop` | `75` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `gestureClothBottom` | `425` | number | Native renderer units; inspect linked implementation before conversion | `precision-motion.js#precisionDefaults` |
| `laundryRoutesEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `route-scene.js#routeDefaults` |
| `laundryRouteColor` | `"#75c6e5"` | string | Renderer color value | `route-scene.js#routeDefaults` |
| `laundryRouteStyle` | `"dashed"` | string | Native renderer units; inspect linked implementation before conversion | `route-scene.js#routeDefaults` |
| `laundryRouteWidth` | `1.8` | number | Native renderer units; inspect linked implementation before conversion | `route-scene.js#routeDefaults` |
| `laundryRouteDash` | `5` | number | Native renderer units; inspect linked implementation before conversion | `route-scene.js#routeDefaults` |
| `laundryRouteGap` | `4` | number | Native renderer units; inspect linked implementation before conversion | `route-scene.js#routeDefaults` |
| `laundryRouteOpacity` | `0.8` | number | Native scalar; legacy ranges vary | `route-scene.js#routeDefaults` |
| `laundryRouteStartSize` | `52` | number | Native renderer units; inspect linked implementation before conversion | `route-scene.js#routeDefaults` |
| `laundryRouteEndSize` | `24` | number | Native renderer units; inspect linked implementation before conversion | `route-scene.js#routeDefaults` |
| `laundryRouteSpeed` | `1` | number | Native renderer rate; do not assume multiplier | `route-scene.js#routeDefaults` |
| `laundryTitleFill` | `"image"` | string | Native renderer units; inspect linked implementation before conversion | `texture-fill.js#textureDefaults` |
| `laundryTitleFillColor` | `"#64c4e0"` | string | Renderer color value | `texture-fill.js#textureDefaults` |
| `laundryTitleTextureSpeed` | `16` | number | Native renderer rate; do not assume multiplier | `texture-fill.js#textureDefaults` |
| `laundryTitleTextureScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `texture-fill.js#textureDefaults` |
| `laundryTitleTextureOpacity` | `0.65` | number | Native scalar; legacy ranges vary | `texture-fill.js#textureDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "laundry-sequence",
  "parameters": {
    "precisionEnabled": true,
    "precisionCloudSpeed": -14,
    "precisionCloudOpacity": 0.82,
    "precisionCloudY": -55,
    "precisionCloudWidth": 980,
    "precisionSkyTop": "#064b90",
    "precisionSkyBottom": "#99c6de",
    "precisionArchitectureTravel": -10,
    "precisionArchitecturePush": 0.16,
    "precisionMasonryWidth": 900,
    "precisionMasonryTravel": 510,
    "precisionMasonryY": 0,
    "precisionMasonryOpacity": 1,
    "precisionBoysDrift": -18,
    "precisionBoysEntryGrow": 0.065,
    "precisionBoysExitX": -1350,
    "precisionBoysExitY": -12,
    "precisionBoysExitZoom": 0.62,
    "precisionNamesTime": 1.05,
    "precisionTitleDelay": 0.12,
    "precisionTitleTime": 0.8,
    "precisionTitleDrop": 115,
    "precisionLightPulse": 0.22,
    "precisionTransmissionAt": 0.18,
    "precisionTransmissionTime": 0.65,
    "precisionPaneX": 305,
    "precisionPaneY": -20,
    "precisionPaneWidth": 300,
    "precisionPaneHeight": 320,
    "precisionPaneBars": 6,
    "precisionCraftFace": true,
    "precisionFaceWidth": 1500,
    "precisionFaceY": 330,
    "precisionFaceBlur": 1.5,
    "laundryEnabled": true,
    "laundryStart": 0,
    "laundryPullTime": 1.3,
    "laundryMapHold": 5.7,
    "laundryTitleTime": 2,
    "laundryTitleHold": 2,
    "laundryFadeTime": 0,
    "laundryMapScale": 1.08,
    "laundryMapStartScale": 2.7,
    "laundryMapEndScale": 1.02,
    "laundryMapX": 0,
    "laundryMapY": 0,
    "laundryMapRotation": -3,
    "laundryMapBrightness": 1.1,
    "laundryMapSaturation": 1.15,
    "laundryGarmentWidth": 84,
    "laundryGarmentStartWidth": 300,
    "laundryGarmentX": 680,
    "laundryGarmentY": 275,
    "laundryGarmentSpread": 150,
    "laundryGarmentCount": 5,
    "laundryGarmentOpacity": 1,
    "laundryGarmentSway": 1.5,
    "laundryCloudOpacity": 0.72,
    "laundryCloudSpeed": 11,
    "laundryCloudWidth": 740,
    "laundryCloudStart": 1.7,
    "laundryTitle": "THE LAUNDRY BOYS",
    "laundryTitleSize": 52,
    "laundryTitleX": 480,
    "laundryTitleY": 295,
    "laundryTitleColor": "#ffffff",
    "laundryTitleTracking": 1,
    "laundryVignette": 0.2,
    "precisionExitAccel": 2.2,
    "precisionNameScale": 1.25,
    "precisionTitleScale": 1.2,
    "windowBoysEnabled": true,
    "windowBoysLead": 1.4,
    "windowBoysOpacity": 0.64,
    "windowBoysX": 445,
    "windowBoysY": 180,
    "windowBoysWidth": 260,
    "windowBoysBlur": 1,
    "windowBoysGlare": 0.08,
    "gestureEnabled": true,
    "gestureDuration": 1.6849999999999996,
    "gestureStrength": 1,
    "gestureGridX": 20,
    "gestureGridY": 14,
    "gestureTiming": "reference",
    "gestureWomanX": 0,
    "gestureWomanY": 0,
    "gestureWomanScale": 1,
    "gestureWomanRotation": 0,
    "gestureWomanGain": 1,
    "gestureGarmentX": 0,
    "gestureGarmentY": 0,
    "gestureGarmentScale": 1,
    "gestureGarmentRotation": 0,
    "gestureGarmentGain": 1,
    "gestureArmX": 0,
    "gestureArmY": 0,
    "gestureArmScale": 1,
    "gestureArmRotation": 0,
    "gestureArmGain": 1,
    "gesturePin0X": 365,
    "gesturePin0Y": 105,
    "gesturePin0DX": 0,
    "gesturePin0DY": 0,
    "gesturePin1X": 390,
    "gesturePin1Y": 245,
    "gesturePin1DX": 0,
    "gesturePin1DY": 0,
    "gesturePin2X": 418,
    "gesturePin2Y": 475,
    "gesturePin2DX": 0,
    "gesturePin2DY": 0,
    "gesturePin3X": 690,
    "gesturePin3Y": 111,
    "gesturePin3DX": 0,
    "gesturePin3DY": 0,
    "gesturePin4X": 690,
    "gesturePin4Y": 268,
    "gesturePin4DX": 0,
    "gesturePin4DY": 0,
    "gesturePin5X": 675,
    "gesturePin5Y": 405,
    "gesturePin5DX": 0,
    "gesturePin5DY": 0,
    "gesturePin6X": 350,
    "gesturePin6Y": 405,
    "gesturePin6DX": 0,
    "gesturePin6DY": 0,
    "gesturePin7X": 445,
    "gesturePin7Y": 377,
    "gesturePin7DX": 0,
    "gesturePin7DY": 0,
    "gesturePin8X": 535,
    "gesturePin8Y": 360,
    "gesturePin8DX": 0,
    "gesturePin8DY": 0,
    "gesturePin9X": 647,
    "gesturePin9Y": 117,
    "gesturePin9DX": 0,
    "gesturePin9DY": 0,
    "gestureFaceLeft": 270,
    "gestureFaceRight": 455,
    "gestureFaceTop": 0,
    "gestureFaceBottom": 185,
    "gestureClothLeft": 560,
    "gestureClothRight": 840,
    "gestureClothTop": 75,
    "gestureClothBottom": 425,
    "laundryRoutesEnabled": true,
    "laundryRouteColor": "#75c6e5",
    "laundryRouteStyle": "dashed",
    "laundryRouteWidth": 1.8,
    "laundryRouteDash": 5,
    "laundryRouteGap": 4,
    "laundryRouteOpacity": 0.8,
    "laundryRouteStartSize": 52,
    "laundryRouteEndSize": 24,
    "laundryRouteSpeed": 1,
    "laundryTitleFill": "image",
    "laundryTitleFillColor": "#64c4e0",
    "laundryTitleTextureSpeed": 16,
    "laundryTitleTextureScale": 1,
    "laundryTitleTextureOpacity": 0.65
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
