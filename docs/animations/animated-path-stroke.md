# Animated line / shape

Stable ID: `animated-path-stroke`

Content-independent editable stroke on normalized points, with geometry separate from style, draw-on and travelling patterns.

## Implementation

- [path-motion.js](../../dist/path-motion.js) — SHA-256 `8f194dc7ab076f350504d473ebf1863487ae8adace2f99ea5f70539849852b46`; functions: `validatePathSettings` (line 7), `pathGeometry` (line 15), `pointOnPath` (line 30), `pathMotionState` (line 34), `segment` (line 42), `arrow` (line 43), `paintPathMotion` (line 44), `sampleObjectMotion` (line 58).
- [path-controls.js](../../dist/path-controls.js) — SHA-256 `e813cdf9e3f2b8f01c9a6c46eee5de175938ba9226ae415c228e0bd1c8e74572`; functions: `mountPathControls` (line 2), `paint` (line 33), `tick` (line 34), `mountObjectMotionControls` (line 37), `draw` (line 42), `mountShoePathControls` (line 54).

## Controls and compatibility

```json
{
  "adapter": "path-motion",
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
| `pathPoints` | See JSON below | array | Normalized XY pairs relative to 960×540 stage | `path-motion.js#pathMotionDefaults` |
| `pathShape` | `"curve"` | string | line/polyline/curve/arched/rectangle/ellipse | `path-motion.js#pathMotionDefaults` |
| `pathStyle` | `"dashed"` | string | solid/dashed/dotted/arrows | `path-motion.js#pathMotionDefaults` |
| `pathAnimation` | `"draw-flow"` | string | none/draw/flow/draw-flow/pulse/trace | `path-motion.js#pathMotionDefaults` |
| `pathColor` | `"#ece9df"` | string | CSS color | `path-motion.js#pathMotionDefaults` |
| `pathWidth` | `2.5` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathDash` | `6` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathGap` | `7` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathSpeed` | `22` | number | Stage pixels per second | `path-motion.js#pathMotionDefaults` |
| `pathDirection` | `"forward"` | string | forward/reverse | `path-motion.js#pathMotionDefaults` |
| `pathDrawStart` | `0` | number | Seconds | `path-motion.js#pathMotionDefaults` |
| `pathDrawDuration` | `1.6` | number | Seconds | `path-motion.js#pathMotionDefaults` |
| `pathLoop` | `false` | boolean | Boolean; repeats draw-on, not required for continuous flow | `path-motion.js#pathMotionDefaults` |
| `pathLoopPause` | `0.4` | number | Seconds | `path-motion.js#pathMotionDefaults` |
| `pathOpacity` | `1` | number | Fraction 0–1 | `path-motion.js#pathMotionDefaults` |
| `pathArrow` | `"none"` | string | none/start/end/both | `path-motion.js#pathMotionDefaults` |
| `pathArrowSize` | `12` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathArrowSpacing` | `48` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathPulseHz` | `1` | number | Cycles per second | `path-motion.js#pathMotionDefaults` |
| `pathTraceFraction` | `0.2` | number | Fraction of arc length | `path-motion.js#pathMotionDefaults` |
| `pathArch` | `32` | number | Stage pixels | `path-motion.js#pathMotionDefaults` |
| `pathTrimStart` | `0` | number | Fraction of arc length | `path-motion.js#pathMotionDefaults` |
| `pathTrimEnd` | `1` | number | Fraction of arc length | `path-motion.js#pathMotionDefaults` |

## Limitations

- Authored stroke animation; reference pattern speed is approximate, not recovered production data.
- Solid continuous strokes have no visible marching pattern; use draw, pulse or trace for visible motion.
- Normalized points; image content and hidden 3D geometry are not reconstructed.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "animated-path-stroke",
  "parameters": {
    "pathPoints": [
      [
        0.15,
        0.65
      ],
      [
        0.37,
        0.3
      ],
      [
        0.61,
        0.62
      ],
      [
        0.84,
        0.32
      ]
    ],
    "pathShape": "curve",
    "pathStyle": "dashed",
    "pathAnimation": "draw-flow",
    "pathColor": "#ece9df",
    "pathWidth": 2.5,
    "pathDash": 6,
    "pathGap": 7,
    "pathSpeed": 22,
    "pathDirection": "forward",
    "pathDrawStart": 0,
    "pathDrawDuration": 1.6,
    "pathLoop": false,
    "pathLoopPause": 0.4,
    "pathOpacity": 1,
    "pathArrow": "none",
    "pathArrowSize": 12,
    "pathArrowSpacing": 48,
    "pathPulseHz": 1,
    "pathTraceFraction": 0.2,
    "pathArch": 32,
    "pathTrimStart": 0,
    "pathTrimEnd": 1
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
