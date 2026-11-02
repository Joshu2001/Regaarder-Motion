# Legacy portrait mesh gesture

Stable ID: `legacy-gesture-mesh`

Retained artwork-specific mesh motion; native tools only, not automatic image retargeting.

## Implementation

- [gesture-motion.js](../../dist/gesture-motion.js) — SHA-256 `ebf8e3e244d7a098156112025ae9a90ceff6ef96891388f2d753479a9ac62b63`; functions: `sampleGesture` (line 4), `invert` (line 8), `regionDelta` (line 10), `weights` (line 11), `gestureGrid` (line 12), `minimumMeshAreaRatio` (line 19).
- [gesture-scene.js](../../dist/gesture-scene.js) — SHA-256 `7114ecb266d3a09252ff121bb6040f5c9a1db1f440e374f471a04024658070be`; functions: `triangle` (line 2), `createGestureScene` (line 4).
- [gesture-track.js](../../dist/gesture-track.js) — SHA-256 `6319bd90628d7c40b9a907a80cbf5b8ea99c64dae14108955863bc7379e10a76`; functions: inline/class renderer.

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

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "legacy-gesture-mesh",
  "parameters": {},
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
