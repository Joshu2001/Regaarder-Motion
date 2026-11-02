# Replaceable gesture video clip

Stable ID: `gesture-video`

Trim, playback speed, held ending and looping for supplied video; no generated motion.

## Implementation

- [media-clip.js](../media-clip.js) — SHA-256 `aae065e2195adb94e5473a1a1833c6d711a514f11f01076ff08cb4fa8d506030`; functions: `mediaClipTime` (line 3), `syncMediaClip` (line 4), `mediaReady` (line 5).
- [media-tools.js](../media-tools.js) — SHA-256 `a4c972573a5f28fde8ddba64d8de4797cf39a33bb26498b70f341db30a4b0197`; functions: `openVectorTool` (line 4), `paintVector` (line 5).

## Controls and compatibility

```json
{
  "adapter": "native tools only",
  "preview": {
    "availability": "Native editor tools only"
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
| `gestureVideoEnabled` | `true` | boolean | Native renderer units; inspect linked implementation before conversion | `media-clip.js#mediaClipDefaults` |
| `gestureVideoIn` | `0` | number | Native renderer units; inspect linked implementation before conversion | `media-clip.js#mediaClipDefaults` |
| `gestureVideoOut` | `3` | number | Native renderer units; inspect linked implementation before conversion | `media-clip.js#mediaClipDefaults` |
| `gestureVideoRate` | `1` | number | Native renderer rate; do not assume multiplier | `media-clip.js#mediaClipDefaults` |
| `gestureVideoLoop` | `false` | boolean | Native renderer units; inspect linked implementation before conversion | `media-clip.js#mediaClipDefaults` |
| `gestureVideoScale` | `1` | number | Native renderer units; inspect linked implementation before conversion | `media-clip.js#mediaClipDefaults` |
| `gestureVideoX` | `0` | number | Native renderer units; inspect linked implementation before conversion | `media-clip.js#mediaClipDefaults` |
| `gestureVideoY` | `0` | number | Native renderer units; inspect linked implementation before conversion | `media-clip.js#mediaClipDefaults` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "gesture-video",
  "parameters": {
    "gestureVideoEnabled": true,
    "gestureVideoIn": 0,
    "gestureVideoOut": 3,
    "gestureVideoRate": 1,
    "gestureVideoLoop": false,
    "gestureVideoScale": 1,
    "gestureVideoX": 0,
    "gestureVideoY": 0
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
