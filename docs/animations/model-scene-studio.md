# Build a 3D scene from scratch

Stable ID: `model-scene-studio`

Local primitives, groups, camera, lights and keyframes; editable assemblies; OBJ geometry and scene JSON import/export.

## Implementation

- [model-studio.js](../../dist/model-studio.js) — SHA-256 `02189b3e3efb9578f0591cd5dee84e0a99735727f01741a42d5fa7dc5c6306ef`; functions: `transformVertex` (line 6), `sampleModelTrack` (line 7), `modelNodeAt` (line 8), `modelGeometry` (line 9), `validateModelScene` (line 18), `modelSceneMeshes` (line 19), `walk` (line 19), `textureData` (line 20), `paintModelScene` (line 21), `importModelOBJ` (line 22), `exportModelOBJ` (line 23), `projectModelPoint` (line 26).
- [model-recipes.js](../../dist/model-recipes.js) — SHA-256 `17ef47a356fedb4aef3c652b519ad00a48a7a1292f25d251c73568551bd2c294`; functions: `modelPart` (line 1), `modelBeam` (line 2), `helmetModel` (line 3), `bicycleModel` (line 4), `bipedModel` (line 5), `ruinModel` (line 6), `createModelRecipe` (line 7), `createRuinedStreet` (line 8).
- [model-webgl.js](../../dist/model-webgl.js) — SHA-256 `edb1feb06a4ed7b406c9fc5654bb16ac2bdd2d14f57a1d320685c9dc32a207d3`; functions: `createModelGPU` (line 2).
- [model-studio-director.js](../../dist/model-studio-director.js) — SHA-256 `33b8fab4f658dec98655f230fb6fd51491e77078731847ab73cc2bddf48d9662`; functions: `editor` (line 1), `remove` (line 1).

## Controls and compatibility

```json
{
  "adapter": "model-studio",
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
    "salvageFacade",
    "salvageGround",
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
| `scene3D` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `model-studio.js#modelStudioDefaults` |

## Limitations

- Convex extrusion caps; no booleans/sculpting/automatic semantic model generation.
- OBJ import is geometry only; no MTL, glTF or 3DS parser.
- Human rig is a blockout; photo puppet needs calibration.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "model-scene-studio",
  "parameters": {
    "scene3D": {
      "schema": "motion-model-scene-v1",
      "camera": {
        "position": [
          5,
          3,
          8
        ],
        "target": [
          0,
          0,
          0
        ],
        "fov": 42
      },
      "lights": {
        "ambient": 0.42,
        "direction": [
          -0.4,
          0.8,
          0.6
        ],
        "intensity": 0.65
      },
      "nodes": [
        {
          "id": "object-1",
          "name": "Box",
          "geometry": {
            "kind": "box"
          },
          "position": [
            0,
            0,
            0
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            2,
            2,
            2
          ],
          "material": {
            "color": "#a99cce"
          },
          "animation": {
            "spin": [
              0,
              20,
              0
            ]
          }
        }
      ]
    }
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
