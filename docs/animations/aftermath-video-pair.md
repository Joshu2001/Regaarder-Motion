# Two-shot war aftermath footage

Stable ID: `aftermath-video-pair`

Two replaceable video shots with independent source trims, speeds and reversible normalized crops, preserving existing transition timing. Original still views can be restored.

## Implementation

- [history-motion.js](../../dist/history-motion.js) — SHA-256 `7569a7ef586d43ebdbd97e75758a7da2a5393adca6f774036904d0f744a2b15a`; functions: `migrateExpansionShots` (line 7), `historyState` (line 10), `migrateCommerceBridgeShots` (line 12).
- [history-scene.js](../../dist/history-scene.js) — SHA-256 `1ffbb2a0116c5197151463fea8a39915a4493706648eb93e171234ee891a1d41`; functions: `createHistoryScene` (line 17), `plate` (line 19), `workshop` (line 20), `portrait` (line 21), `shoulder` (line 22), `ruins` (line 23), `silhouette` (line 24), `paper` (line 25), `strip` (line 26), `reel` (line 27), `card` (line 28).
- [history-director.js](../../dist/history-director.js) — SHA-256 `c18bc7289895c1df0949d826ab52681bf6eaa48a0ab63d10709ebbf985838f50`; functions: inline/class renderer.
- [history-footage.js](../../dist/history-footage.js) — SHA-256 `44919c74177cc1cdd1305ff84378ecb11df553e36832254ec9ee74a670a45dab`; functions: `aftermathSettings` (line 8), `paintAftermath` (line 10).

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
    "historyAftermathA",
    "historyAftermathB",
    "historyStreet"
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
| `historyAftermathMode` | `"video"` | string | selection | `history-footage.js#aftermathDefaults` |
| `historyAftermathAIn` | `1` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathAOut` | `10.005` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathARate` | `1` | number | playback multiplier | `history-footage.js#aftermathDefaults` |
| `historyAftermathAX` | `0` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathAY` | `0.011111111111111112` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathAWidth` | `0.925` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathAHeight` | `0.925` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBIn` | `1` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathBOut` | `10.005` | number | seconds in the source video | `history-footage.js#aftermathDefaults` |
| `historyAftermathBRate` | `1` | number | playback multiplier | `history-footage.js#aftermathDefaults` |
| `historyAftermathBX` | `0` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBY` | `0` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBWidth` | `1` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyAftermathBHeight` | `1` | number | fraction of source width or height (0–1) | `history-footage.js#aftermathDefaults` |
| `historyRate` | `1` | number | Native renderer rate; do not assume multiplier | `scripts/animation-catalog-spec.json#aftermath-video-pair` |
| `historyShots` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#aftermath-video-pair` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "aftermath-video-pair",
  "parameters": {
    "historyAftermathMode": "video",
    "historyAftermathAIn": 1,
    "historyAftermathAOut": 10.005,
    "historyAftermathARate": 1,
    "historyAftermathAX": 0,
    "historyAftermathAY": 0.011111111111111112,
    "historyAftermathAWidth": 0.925,
    "historyAftermathAHeight": 0.925,
    "historyAftermathBIn": 1,
    "historyAftermathBOut": 10.005,
    "historyAftermathBRate": 1,
    "historyAftermathBX": 0,
    "historyAftermathBY": 0,
    "historyAftermathBWidth": 1,
    "historyAftermathBHeight": 1,
    "historyRate": 1,
    "historyShots": [
      {
        "id": "ruins-wide",
        "from": 7.383,
        "to": 9.415,
        "duration": 2.031999999999999
      },
      {
        "id": "ruins-close",
        "from": 9.415,
        "to": 11.758,
        "duration": 2.343
      }
    ]
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
