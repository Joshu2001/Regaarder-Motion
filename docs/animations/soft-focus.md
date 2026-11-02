# Soft focus blur

Stable ID: `soft-focus`

Editable blur amount on replaceable content.

## Implementation

- [soft-media-blur.js](../../dist/soft-media-blur.js) — SHA-256 `83fe572ddf4e417a5dbb9aeac1f774e361388a80ccd0bad2792c78b50dace84e`; functions: `softEdgeBlur` (line 2).
- [effect-library.js](../../dist/effect-library.js) — SHA-256 `86d4fed9933175671d86221b0fa4d69ffc8b72968277bd126d9221709d40a55d`; functions: `compatibleEffects` (line 17), `instantiateEffect` (line 18), `effectStack` (line 19), `paintEffects` (line 20), `drawAssetMedia` (line 21), `buildAnimationPrompt` (line 22).

## Controls and compatibility

```json
{
  "adapter": "shared",
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
| `strength` | `2` | number | Native scalar; legacy ranges vary | `effect-library.js#effectDefinitions` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "soft-focus",
  "parameters": {
    "strength": 2
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
