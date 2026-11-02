# Shoe turn, zoom and printed-paper crumple

Stable ID: `shoe-paper-crumple`

Original shoe appearance with local upper/sole seam repair; approved tilt/front/zoom and textured paper crumple/left exit retained.

## Implementation

- [shoe-paper.js](../shoe-paper.js) — SHA-256 `d2035ab3510f6ed017fffc6b4cd3027baec2ed41ee904169e6bcafbb196be7df`; functions: `shoePaperPose` (line 8), `paperFoldState` (line 9), `paintShoePaperBackground` (line 10), `paintShoeComposition` (line 12), `paperFoldMesh` (line 14), `paintPaperCrumple` (line 15).
- [shoe-solid.js](../shoe-solid.js) — SHA-256 `2298c2325473cd2811158777f37b053653ad9b74e22ca7cd99ec1e165220fd5c`; functions: `sealedShoeMesh` (line 6), `solidShoeTriangles` (line 7), `paintSolidShoe` (line 8).
- [raster-surface.js](../raster-surface.js) — SHA-256 `322dbd54efe088f0f06070d19ff0d6b229dd401f4835a2ecadb5dea94916718a`; functions: `rasterSurface` (line 2), `putSurface` (line 3).
- [history-scene.js](../history-scene.js) — SHA-256 `1ffbb2a0116c5197151463fea8a39915a4493706648eb93e171234ee891a1d41`; functions: `createHistoryScene` (line 17), `plate` (line 19), `workshop` (line 20), `portrait` (line 21), `shoulder` (line 22), `ruins` (line 23), `silhouette` (line 24), `paper` (line 25), `strip` (line 26), `reel` (line 27), `card` (line 28).
- [history-director.js](../history-director.js) — SHA-256 `c18bc7289895c1df0949d826ab52681bf6eaa48a0ab63d10709ebbf985838f50`; functions: inline/class renderer.

## Controls and compatibility

```json
{
  "adapter": "shoe-paper",
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
    "historyShoe",
    "historyShoePaper"
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
| `historyShoePaperEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperShoeMode` | `"auto"` | string | Native renderer units; inspect linked implementation before conversion | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeTurnStart` | `32` | number | chapter source seconds | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeTurnEnd` | `38.849` | number | chapter source seconds | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeTiltEnd` | `0.24` | number | normalized fraction | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeFrontAt` | `0.7` | number | normalized fraction | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeStartYaw` | `-12` | number | degrees | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeEndYaw` | `-90` | number | degrees | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeStartPitch` | `17` | number | degrees | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeEndPitch` | `18` | number | degrees | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeTiltRoll` | `-12` | number | degrees | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeEndRoll` | `0` | number | degrees | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeX` | `480` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeY` | `280` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeEndY` | `140` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeStartSize` | `240` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeEndSize` | `1000` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyShoeZoomPower` | `1.6` | number | Native renderer units; inspect linked implementation before conversion | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperSpikeLength` | `0.28` | number | shoe model units | `shoe-paper.js#shoePaperDefaults` |
| `historyShoePaperOutline` | `9` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyShoePaperColor` | `"#7486a7"` | string | Renderer color value | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperFoldStart` | `38.849` | number | chapter source seconds | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperFoldEnd` | `40.485` | number | chapter source seconds | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperFoldStrength` | `1` | number | Native scalar; legacy ranges vary | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperFinalSize` | `0.19` | number | normalized fraction | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperFlightEnd` | `41.8` | number | chapter source seconds | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperExitX` | `-680` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperExitY` | `-65` | number | stage pixels at960×540 | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperSpin` | `130` | number | degrees | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperCreaseDepth` | `125` | number | illustrative depth units | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperGrid` | `22` | number | mesh columns | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperIncomingStart` | `41.2` | number | chapter source seconds | `shoe-paper.js#shoePaperDefaults` |
| `historyPaperIncomingEnd` | `42.4` | number | chapter source seconds | `shoe-paper.js#shoePaperDefaults` |

## Limitations

- Restored original procedural shoe; not a scanned product. Original geometry/materials retained, with local seam seals.
- Custom shoe image remains a flat replacement; it does not reconstruct new 3D views.
- Paper deformation is authored, not a physical paper simulation.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "shoe-paper-crumple",
  "parameters": {
    "historyShoePaperEnabled": true,
    "historyPaperShoeMode": "auto",
    "historyShoeTurnStart": 32,
    "historyShoeTurnEnd": 38.849,
    "historyShoeTiltEnd": 0.24,
    "historyShoeFrontAt": 0.7,
    "historyShoeStartYaw": -12,
    "historyShoeEndYaw": -90,
    "historyShoeStartPitch": 17,
    "historyShoeEndPitch": 18,
    "historyShoeTiltRoll": -12,
    "historyShoeEndRoll": 0,
    "historyShoeX": 480,
    "historyShoeY": 280,
    "historyShoeEndY": 140,
    "historyShoeStartSize": 240,
    "historyShoeEndSize": 1000,
    "historyShoeZoomPower": 1.6,
    "historyPaperSpikeLength": 0.28,
    "historyShoePaperOutline": 9,
    "historyShoePaperColor": "#7486a7",
    "historyPaperFoldStart": 38.849,
    "historyPaperFoldEnd": 40.485,
    "historyPaperFoldStrength": 1,
    "historyPaperFinalSize": 0.19,
    "historyPaperFlightEnd": 41.8,
    "historyPaperExitX": -680,
    "historyPaperExitY": -65,
    "historyPaperSpin": 130,
    "historyPaperCreaseDepth": 125,
    "historyPaperGrid": 22,
    "historyPaperIncomingStart": 41.2,
    "historyPaperIncomingEnd": 42.4
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
