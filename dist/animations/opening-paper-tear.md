# Torn opening and portrait push

Stable ID: `opening-paper-tear`

An expanding torn mask reveals a replaceable portrait and begins the approach.

## Implementation

- [index.html](../index.html) — SHA-256 `4804798725a17cb83b90a010ba90dbc67b9586ae8604c042ceca06fc3e3226df`; functions: `formatClipTime` (line 6), `frame` (line 7), `update` (line 9), `load` (line 9), `tick` (line 9), `tearPath` (line 16), `setSpeed` (line 18), `openEditor` (line 19).
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
    "shoulder"
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
| `zoom` | `3.1` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `zoomSpeed` | `55` | number | Native renderer rate; do not assume multiplier | `continuation.js#continuationDefaults` |
| `deskSize` | `100` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `deskReveal` | `3` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `deskDelay` | `1.2` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `deskDirection` | `"down"` | string | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `sceneDirection` | `"iris"` | string | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "opening-paper-tear",
  "parameters": {
    "zoom": 3.1,
    "zoomSpeed": 55,
    "deskSize": 100,
    "deskReveal": 3,
    "deskDelay": 1.2,
    "deskDirection": "down",
    "sceneDirection": "iris"
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
