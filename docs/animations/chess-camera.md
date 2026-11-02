# Chess board and camera

Stable ID: `chess-camera`

Editable board, objects and camera with rendered scene motion.

## Implementation

- [chess.js](../../dist/chess.js) — SHA-256 `5deee9fd6651e6a25058e65530ea20564b34056abc3fc05458c66433df5ff6f2`; functions: `chessChanged` (line 4), `renderChess` (line 6), `updateObjectFields` (line 7), `setChessMode` (line 8), `renderChessEditor` (line 9), `addFields` (line 14).
- [chess-director.js](../../dist/chess-director.js) — SHA-256 `931f58637d68dea023e2e434c0731ebc01aad56decd6c15c752938553ac86c31`; functions: `chessSeconds` (line 4), `seekChess` (line 5), `homePose` (line 6), `trackFor` (line 7), `currentObjectPose` (line 8), `extendChess` (line 9), `directorSave` (line 10), `keyField` (line 11), `objectOptions` (line 12), `renderChessDirector` (line 13), `logoEdit` (line 25), `applyMotionPreset` (line 27), `renderCameraKeys` (line 28), `uploadLogo` (line 29), `restoreChessLogos` (line 30).
- [chess-engine.js](../../dist/chess-engine.js) — SHA-256 `c16e22aaf53de9a1a8ddece0220fab722399afbf975c797ce0c34d05601abc12`; functions: `clip` (line 15), `createChessEngine` (line 19), `mesh` (line 24), `makePiece` (line 35), `updateEmission` (line 40), `markGeometry` (line 44), `syncBranding` (line 45), `setLogoImage` (line 46), `select` (line 50), `setEditing` (line 51), `applyPose` (line 53), `paint` (line 54).
- [chess-motion.js](../../dist/chess-motion.js) — SHA-256 `24ca9de531ed9d8ef49a13747833d81fce55bf10f3b6565d57cb90b810fc936b`; functions: `easing` (line 3), `pose` (line 4), `key` (line 5), `sampleTrack` (line 6), `defaultTracks` (line 7), `sampleCamera` (line 15).

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
| `chessDistance` | `19.25` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessObjects` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessTracks` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessCameraKeys` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessLogos` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessDuration` | `48` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessPull` | `10` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessOrbit` | `32` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessTilt` | `42` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessBlur` | `10` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessFocus` | `5` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessMove` | `5` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessMoveTime` | `3` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessSecond` | `10` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessSpin` | `70` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessLight` | `90` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessReflection` | `55` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessBloom` | `45` | number | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessWarm` | `"#ff6d36"` | string | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |
| `chessCool` | `"#9ad6ff"` | string | Native renderer units; inspect linked implementation before conversion | `continuation.js#continuationDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "chess-camera",
  "parameters": {
    "chessDistance": 19.25,
    "chessObjects": {},
    "chessTracks": {},
    "chessCameraKeys": [],
    "chessLogos": {
      "w-bishop-2": {
        "type": "stripes",
        "size": 0.75,
        "height": 1.05
      },
      "b-bishop-5": {
        "type": "cat",
        "size": 0.85,
        "height": 1.05
      }
    },
    "chessDuration": 48,
    "chessPull": 10,
    "chessOrbit": 32,
    "chessTilt": 42,
    "chessBlur": 10,
    "chessFocus": 5,
    "chessMove": 5,
    "chessMoveTime": 3,
    "chessSecond": 10,
    "chessSpin": 70,
    "chessLight": 90,
    "chessReflection": 55,
    "chessBloom": 45,
    "chessWarm": "#ff6d36",
    "chessCool": "#9ad6ff"
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
