# Blue / cream character scene

Stable ID: `native3d-blue`

Editable specialized native 3D workshop: male/female body foundation, regional shape, mirrored vertex brushes, four-influence skin weights, driven correctives, garment clearance, hat centering, joint limits, saved poses, contacts, attachments and physical finishes. Bundled locally inside Blank Composition.

## Implementation

- [native3d-director.js](../native3d-director.js) — SHA-256 `b278600853a54f46a32c108dc7829d865965fd486464656163b77611611af818`; functions: `open` (line 1), `paint` (line 1), `addTemplate` (line 1).
- [native3d/atmosphere.js](../native3d/atmosphere.js) — SHA-256 `914e9c9591d249b7d56d2d9650480de4b21b5482c10ed467e2582ec1e1c5b79b`; functions: `noise` (line 4), `fbm` (line 5), `createSmokeSurface` (line 6).
- [native3d/checkpoint.js](../native3d/checkpoint.js) — SHA-256 `e06598a6f1b203fb1f8054f66576cef905f335ac0e83cf547a1d6750058a8368`; functions: `createCheckpoint3D` (line 4).
- [native3d/editor.js](../native3d/editor.js) — SHA-256 `54240e1e41cb4359a023c0c2129c6a913ab881beaffae3de8f3a1ee4620f53a3`; functions: `mountNativeEditor` (line 9), `status` (line 12), `snapshot` (line 13), `node` (line 14), `save` (line 15), `edit` (line 16), `frameView` (line 17), `choose` (line 18), `attach` (line 19), `readGizmo` (line 22), `button` (line 24), `tree` (line 25), `field` (line 26), `vector` (line 27), `select` (line 28), `baseInspector` (line 29), `inspector` (line 41), `putCustomKey` (line 42), `keys` (line 43), `timeSet` (line 44), `download` (line 46), `surfaceHit` (line 52), `hitIndex` (line 53), `paint` (line 56), `drawMarkers` (line 60), `tick` (line 62).
- [native3d/engine.js](../native3d/engine.js) — SHA-256 `aefbf0204cae9950b0cadafd2267f08a192b379af80ab5e3809cad1fbfb602fd`; functions: `loadHumanoid` (line 10), `createCharacter` (line 12), `geometry` (line 14), `reset` (line 28), `rotate` (line 29), `worldRotate` (line 30), `orientHand` (line 31), `ik` (line 32), `apply` (line 33), `roundedBox` (line 44).
- [native3d/export.js](../native3d/export.js) — SHA-256 `3fabe815dd9619dbd5a4c7d742c5f6042c6982e4f8ceedce89af7a3205d6d5f5`; functions: `exportNativeGLB` (line 3), `downloadGLB` (line 4).
- [native3d/finishes.js](../native3d/finishes.js) — SHA-256 `a89b7bb626c2d0e5211610b110b86cbf88f8c4b45cc35e6dc984e660afed30f6`; functions: `finishTexture` (line 2), `studioEnvironment` (line 3), `prepareUV` (line 4).
- [native3d/lab.js](../native3d/lab.js) — SHA-256 `fe6ef44372154c2301b3a3e0effc46571cc64567b15319268b293312e142ee67`; functions: inline/class renderer.
- [native3d/rig-names.js](../native3d/rig-names.js) — SHA-256 `9e3f359a819fc5db1cc8a5c35e231985327fb2cf53d704a0dd2882ce2ee0dde7`; functions: inline/class renderer.
- [native3d/scene.js](../native3d/scene.js) — SHA-256 `f02b7fafde894ffad47bb4a308c4f78171d1de66580fef29f0948aabdd465108`; functions: `sampleTrack` (line 5), `nodeAt` (line 6), `validateScene` (line 7), `putKey` (line 9), `base` (line 10), `actor` (line 11), `createNativeScene` (line 12), `putPartKey` (line 18).
- [native3d/wardrobe.js](../native3d/wardrobe.js) — SHA-256 `b53f769d092a1413fda507ff622319146fe0450f26d9502838e6bc809e6ec75e`; functions: `tailoredGeometry` (line 3), `surface` (line 4), `limb` (line 6).
- [native3d/workshop-ui.js](../native3d/workshop-ui.js) — SHA-256 `19dd3f2c8a12e7d5db21440ca9f5ca4d22f50075448d5ce36c780111ebea1bd7`; functions: `appendWorkshop` (line 2).
- [native3d/workshop.js](../native3d/workshop.js) — SHA-256 `ae08d7df89322d5cccc6906a6e869498619cc2a31b621e8edc77bd660ce3030a`; functions: `shapePoint` (line 6), `topology` (line 7), `surfaceController` (line 8), `sculpt` (line 9), `setWeight` (line 10), `validateWorkshop` (line 11), `applyFinish` (line 12), `limitJoints` (line 13), `contactDefinition` (line 14), `seatOffset` (line 15).

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
| `native3DScene` | See JSON below | object | Serializable3D scene: positions meters, rotations degrees, key times seconds; materials0–1 | `native3d-director.js#nativeBlueDefaults` |

## Limitations

- Specialized character and prop surface tools; no general topology editor or cloth simulator.
- Body targets and garment transfer do not establish finished anatomy, tailored clothing or collision-free fitting.
- Brush picking is triangle based and radius uses bind space. Weight assignment is per vertex, not a brush stroke.
- Correctives use local Euler drivers; extreme shapes and combinations require visual review.
- Native JSON preserves all workshop data. GLB exports evaluated mesh and sampled transforms; changing procedural materials or driven geometry may differ externally.
- Source footage remains an illustrative approximation, not an exact match.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "native3d-blue",
  "parameters": {
    "native3DScene": {
      "schema": "regaarder-native3d-v1",
      "version": 1,
      "name": "Blue / cream pair",
      "duration": 5,
      "sourceOffset": null,
      "lighting": {
        "exposure": 0.92,
        "ambient": 0.65
      },
      "cameraId": "camera-main",
      "background": "#151322",
      "nodes": [
        {
          "id": "camera-main",
          "type": "camera",
          "name": "Scene camera",
          "position": [
            0,
            1,
            4.3
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            1,
            1,
            1
          ],
          "visible": true,
          "target": [
            0,
            1.2,
            0
          ],
          "fov": 33
        },
        {
          "id": "key",
          "type": "light",
          "name": "Key softbox",
          "position": [
            2.2,
            4,
            3
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            1,
            1,
            1
          ],
          "visible": true,
          "lightType": "directional",
          "color": "#fff3e1",
          "intensity": 3,
          "castShadow": true,
          "shadowRadius": 4
        },
        {
          "id": "fill",
          "type": "light",
          "name": "Fill light",
          "position": [
            -3,
            2,
            2
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            1,
            1,
            1
          ],
          "visible": true,
          "lightType": "directional",
          "color": "#b7d4ff",
          "intensity": 1.2,
          "castShadow": false
        },
        {
          "id": "rim",
          "type": "light",
          "name": "Rim light",
          "position": [
            1,
            3,
            -3
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            1,
            1,
            1
          ],
          "visible": true,
          "lightType": "directional",
          "color": "#dce6ff",
          "intensity": 2,
          "castShadow": false
        },
        {
          "id": "floor",
          "type": "plane",
          "name": "Ground / contact shadow",
          "position": [
            0,
            -0.012,
            0
          ],
          "rotation": [
            -90,
            0,
            0
          ],
          "scale": [
            12,
            12,
            1
          ],
          "visible": true,
          "material": {
            "color": "#1a2029",
            "roughness": 0.85,
            "metalness": 0
          }
        },
        {
          "id": "blue",
          "type": "humanoid",
          "name": "Blue figure",
          "position": [
            -0.65,
            0,
            0.3
          ],
          "rotation": [
            0,
            90,
            0
          ],
          "scale": [
            1,
            1,
            1
          ],
          "visible": true,
          "proportions": {
            "headSize": 1.06,
            "neckLength": 0.95,
            "shoulderWidth": 1,
            "armLength": 1,
            "legLength": 1
          },
          "assetId": "anatomical-humanoid-v89",
          "pose": "standing",
          "style": "faceless",
          "material": {
            "color": "#137cba",
            "roughness": 0.46,
            "metalness": 0
          },
          "parts": {
            "shirt": {
              "visible": true,
              "color": "#137cba",
              "roughness": 0.52
            },
            "trousers": {
              "visible": true,
              "color": "#137cba",
              "roughness": 0.58
            },
            "hat": {
              "visible": false,
              "color": "#dedbca",
              "roughness": 0.78,
              "width": 1,
              "height": 1,
              "depth": 1,
              "lift": 0,
              "tilt": -4,
              "bandColor": "#a7a18f"
            }
          },
          "bones": {},
          "boneTracks": {},
          "ik": {},
          "tracks": {}
        },
        {
          "id": "coach",
          "type": "humanoid",
          "name": "Cream coach",
          "position": [
            0.65,
            0,
            -0.6
          ],
          "rotation": [
            0,
            -65,
            0
          ],
          "scale": [
            1,
            1,
            1
          ],
          "visible": true,
          "proportions": {
            "headSize": 1.06,
            "neckLength": 0.95,
            "shoulderWidth": 1,
            "armLength": 1,
            "legLength": 1
          },
          "assetId": "anatomical-humanoid-v89",
          "pose": "standing",
          "style": "faceless",
          "material": {
            "color": "#dedbca",
            "roughness": 0.46,
            "metalness": 0
          },
          "parts": {
            "shirt": {
              "visible": true,
              "color": "#dedbca",
              "roughness": 0.52
            },
            "trousers": {
              "visible": true,
              "color": "#dedbca",
              "roughness": 0.58
            },
            "hat": {
              "visible": true,
              "color": "#dedbca",
              "roughness": 0.78,
              "width": 1,
              "height": 1,
              "depth": 1,
              "lift": 0,
              "tilt": -4,
              "bandColor": "#a7a18f"
            }
          },
          "bones": {},
          "boneTracks": {},
          "ik": {},
          "tracks": {}
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
