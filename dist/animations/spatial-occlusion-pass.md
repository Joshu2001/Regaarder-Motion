# Sideways wall and room reveal

Stable ID: `spatial-occlusion-pass`

Opaque source and destination planes travel behind a dark foreground wall; four directions, no alpha dissolve.

## Implementation

- [spatial-passage.js](../spatial-passage.js) — SHA-256 `95d2543eb1e65816557edaebed5a73bb49cb5111acaa8842d4d62b515f3cb409`; functions: `passageState` (line 4), `wallTexture` (line 6), `paintSpatialPassage` (line 7).

## Controls and compatibility

```json
{
  "adapter": "spatial",
  "preview": {
    "availability": "Add & preview in the composition editor"
  },
  "capabilities": {
    "playback": "Shared blank-layer clock: speed, reverse, delay, pause, easing, slow/fast",
    "parameters": "Independent per-instance copies; nested JSON editable",
    "media": "Independent named source-slot bindings",
    "direction": "Four geometric travel directions",
    "geometry": "Images remain planes; full unseen object reconstruction is not implemented."
  },
  "slots": [
    "historyShoulder",
    "historyPortrait"
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
| `historyPassageDirection` | `"right"` | string | Native renderer units; inspect linked implementation before conversion | `spatial-passage.js#passageDefaults` |
| `historyPassageStart` | `17.2` | number | Native renderer units; inspect linked implementation before conversion | `spatial-passage.js#passageDefaults` |
| `historyPassageEnd` | `20` | number | Native renderer units; inspect linked implementation before conversion | `spatial-passage.js#passageDefaults` |
| `historyPassageWallWidth` | `520` | number | Native renderer units; inspect linked implementation before conversion | `spatial-passage.js#passageDefaults` |
| `historyPassageDepth` | `55` | number | Native renderer units; inspect linked implementation before conversion | `spatial-passage.js#passageDefaults` |
| `historyPassageWallLight` | `0.85` | number | Native renderer units; inspect linked implementation before conversion | `spatial-passage.js#passageDefaults` |
| `historyPassageSoftness` | `80` | number | Native renderer units; inspect linked implementation before conversion | `spatial-passage.js#passageDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "spatial-occlusion-pass",
  "parameters": {
    "historyPassageDirection": "right",
    "historyPassageStart": 17.2,
    "historyPassageEnd": 20,
    "historyPassageWallWidth": 520,
    "historyPassageDepth": 55,
    "historyPassageWallLight": 0.85,
    "historyPassageSoftness": 80
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
