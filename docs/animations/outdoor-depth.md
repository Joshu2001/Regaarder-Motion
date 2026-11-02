# Outdoor layered camera

Stable ID: `outdoor-depth`

Depth movement through separate sky, buildings and foreground layers.

## Implementation

- [continuation.js](../../dist/continuation.js) — SHA-256 `17ddd9afec0261e06d667b32320849b86635d120cb8dff5e5996fbba575c4df9`; functions: `motionEase` (line 1), `syncDuration` (line 11), `fxValue` (line 25), `selectEffect` (line 27), `startPart` (line 30), `chooseAsset` (line 32), `assetDB` (line 33), `saveAsset` (line 33), `restoreAssets` (line 33), `ready` (line 35), `cover` (line 36), `contain` (line 37), `flameTexture` (line 39), `drawFire` (line 40), `applyRegionBlur` (line 45), `drawPairPiece` (line 47), `drawStandingPiece` (line 48), `hueShift` (line 49), `wallFire` (line 50), `renderOutdoor` (line 52), `drawBlurSelection` (line 59), `photographedFire` (line 66), `landscapePlate` (line 69), `drawBackPiece` (line 70), `composeRoofPortraits` (line 71), `emberParticles` (line 72), `liveCombustion` (line 73), `attachFireVideo` (line 76), `refreshPosters` (line 88).
- [epilogue.js](../../dist/epilogue.js) — SHA-256 `3f5f50127ff512eb2407d7f6c6c263b7382165a44f243ea4b3207e1479b48273`; functions: `peopleCameraRig` (line 1), `formatClipTime` (line 3), `saveEffects` (line 6), `cloudBand` (line 7), `heritageLogo` (line 8), `movingSky` (line 9), `renderEpilogue` (line 10), `cameraTransform` (line 20), `localToPreview` (line 21), `previewToLocal` (line 22), `updateFireHandles` (line 23), `showFireSelection` (line 24).
- [exterior-scene.js](../../dist/exterior-scene.js) — SHA-256 `ab6a94552b3385140eba3ed88b8a521ffe2bcc4c655d1ae08f54547dff383a35`; functions: `plate` (line 6), `record` (line 7), `paintExterior` (line 8).

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
    "outdoor",
    "standing",
    "youngMan",
    "mysteryMen",
    "mysterySky",
    "clouds",
    "backPair"
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
| `outdoorReveal` | `8` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `outdoorZoom` | `1.08` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `parallaxTime` | `12` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cameraZoom` | `1.8` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cameraRise` | `100` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cloudSpeed` | `35` | number | Native renderer rate; do not assume multiplier | `continuation.js#continuationDefaults` |
| `cameraDelay` | `0` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `cameraEase` | `"accelerate"` | string | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "outdoor-depth",
  "parameters": {
    "outdoorReveal": 8,
    "outdoorZoom": 1.08,
    "parallaxTime": 12,
    "cameraZoom": 1.8,
    "cameraRise": 100,
    "cloudSpeed": 35,
    "cameraDelay": 0,
    "cameraEase": "accelerate"
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
