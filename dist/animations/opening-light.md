# Practical lamp and exposure

Stable ID: `opening-light`

Lamp/window light and exposure over replaceable imagery.

## Implementation

- [continuation.js](../continuation.js) — SHA-256 `17ddd9afec0261e06d667b32320849b86635d120cb8dff5e5996fbba575c4df9`; functions: `motionEase` (line 1), `syncDuration` (line 11), `fxValue` (line 25), `selectEffect` (line 27), `startPart` (line 30), `chooseAsset` (line 32), `assetDB` (line 33), `saveAsset` (line 33), `restoreAssets` (line 33), `ready` (line 35), `cover` (line 36), `contain` (line 37), `flameTexture` (line 39), `drawFire` (line 40), `applyRegionBlur` (line 45), `drawPairPiece` (line 47), `drawStandingPiece` (line 48), `hueShift` (line 49), `wallFire` (line 50), `renderOutdoor` (line 52), `drawBlurSelection` (line 59), `photographedFire` (line 66), `landscapePlate` (line 69), `drawBackPiece` (line 70), `composeRoofPortraits` (line 71), `emberParticles` (line 72), `liveCombustion` (line 73), `attachFireVideo` (line 76), `refreshPosters` (line 88).

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
    "deskLamp"
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
| `light` | `85` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `lightFade` | `3` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `lightColor` | `"#ffe6b4"` | string | Renderer color value | `continuation.js#continuationDefaults` |
| `lampSize` | `100` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "opening-light",
  "parameters": {
    "light": 85,
    "lightFade": 3,
    "lightColor": "#ffe6b4",
    "lampSize": 100
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
