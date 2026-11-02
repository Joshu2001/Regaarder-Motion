# Ruined window · pullback and sideways parallax

Stable ID: `ruined-window-parallax`

A rear-profile person looks downward through a damaged empty wall opening at close ruins. Person shrinks and shifts against city; wall exposure grows before opaque sideways passage.

## Implementation

- [ruined-window.js](../../dist/ruined-window.js) — SHA-256 `6fd97a916324097dad88bd5234ec3d9067c80a0a5137987f615f408830008161`; functions: `ruinedWindowState` (line 7), `paintRuinedWindow` (line 8), `paint` (line 8).
- [history-scene.js](../../dist/history-scene.js) — SHA-256 `1ffbb2a0116c5197151463fea8a39915a4493706648eb93e171234ee891a1d41`; functions: `createHistoryScene` (line 17), `plate` (line 19), `workshop` (line 20), `portrait` (line 21), `shoulder` (line 22), `ruins` (line 23), `silhouette` (line 24), `paper` (line 25), `strip` (line 26), `reel` (line 27), `card` (line 28).
- [history-director.js](../../dist/history-director.js) — SHA-256 `c18bc7289895c1df0949d826ab52681bf6eaa48a0ab63d10709ebbf985838f50`; functions: inline/class renderer.

## Controls and compatibility

```json
{
  "adapter": "ruined-window",
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
    "historyWindowCity",
    "historyWindowPerson",
    "historyWindowWall"
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
| `historyWindowEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowStart` | `11.758` | number | chapter source seconds | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowEnd` | `20` | number | chapter source seconds | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowSpeed` | `1` | number | playback multiplier | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowDirection` | `"right"` | string | enum | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPullback` | `260` | number | shared illustrative scene units | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPersonDepth` | `950` | number | shared illustrative scene units | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowCityDepth` | `2800` | number | shared illustrative scene units | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowWallDepth` | `750` | number | shared illustrative scene units | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPersonX` | `-240` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPersonY` | `-45` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPersonWidth` | `730` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPersonTravel` | `0` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowCityTravel` | `0` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowWallTravel` | `0` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowCityScale` | `1.26` | number | scale multiplier | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowCityX` | `0` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowCityY` | `0` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowWallX` | `-600` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowWallY` | `-60` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowWallWidth` | `2400` | number | stage pixels at960×540 | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowCityBlur` | `1.6` | number | output pixels | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPersonBlur` | `0` | number | output pixels | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowWallBlur` | `0.5` | number | output pixels | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowPersonBrightness` | `0.84` | number | brightness multiplier | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowCityBrightness` | `0.83` | number | brightness multiplier | `ruined-window.js#ruinedWindowDefaults` |
| `historyWindowWallBrightness` | `0.65` | number | brightness multiplier | `ruined-window.js#ruinedWindowDefaults` |

## Limitations

- 2.5D image planes; not a reconstructed volumetric city.
- Screenshot spacing does not establish native camera speed.
- Motion continues into existing spatial passage; original stage timing retained.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "ruined-window-parallax",
  "parameters": {
    "historyWindowEnabled": true,
    "historyWindowStart": 11.758,
    "historyWindowEnd": 20,
    "historyWindowSpeed": 1,
    "historyWindowDirection": "right",
    "historyWindowPullback": 260,
    "historyWindowPersonDepth": 950,
    "historyWindowCityDepth": 2800,
    "historyWindowWallDepth": 750,
    "historyWindowPersonX": -240,
    "historyWindowPersonY": -45,
    "historyWindowPersonWidth": 730,
    "historyWindowPersonTravel": 0,
    "historyWindowCityTravel": 0,
    "historyWindowWallTravel": 0,
    "historyWindowCityScale": 1.26,
    "historyWindowCityX": 0,
    "historyWindowCityY": 0,
    "historyWindowWallX": -600,
    "historyWindowWallY": -60,
    "historyWindowWallWidth": 2400,
    "historyWindowCityBlur": 1.6,
    "historyWindowPersonBlur": 0,
    "historyWindowWallBlur": 0.5,
    "historyWindowPersonBrightness": 0.84,
    "historyWindowCityBrightness": 0.83,
    "historyWindowWallBrightness": 0.65
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
