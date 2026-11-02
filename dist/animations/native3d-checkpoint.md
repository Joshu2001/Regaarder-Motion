# Native anatomical scene ·14:55–15:00

Stable ID: `native3d-checkpoint`

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
| `native3DScene` | See JSON below | object | Serializable3D scene: positions meters, rotations degrees, key times seconds; materials0–1 | `native3d-director.js#nativeCheckpointDefaults` |

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
  "effectId": "native3d-checkpoint",
  "parameters": {
    "native3DScene": {
      "schema": "regaarder-native3d-v1",
      "version": 1,
      "name": "14:55–15:00 · native anatomical reconstruction",
      "duration": 5,
      "sourceOffset": 895,
      "lighting": {
        "exposure": 0.92,
        "ambient": 0.05
      },
      "cameraId": "camera-main",
      "background": "#220406",
      "nodes": [
        {
          "id": "camera-main",
          "type": "camera",
          "name": "Scene camera",
          "position": [
            0,
            1,
            4
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
            1,
            0
          ],
          "fov": 28,
          "tracks": {
            "position": [
              {
                "time": 0,
                "value": [
                  0,
                  1,
                  4
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8333333333333335,
                "value": [
                  0,
                  1,
                  4
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  -1.6477727273683356,
                  1.1244087898286395,
                  0.25770432526781295
                ],
                "ease": "hold"
              },
              {
                "time": 4.166666666666667,
                "value": [
                  -1.2063939830904051,
                  1.1108106859374165,
                  1.294394599131635
                ],
                "ease": "smooth"
              },
              {
                "time": 4.4,
                "value": [
                  -1.6527477175189103,
                  0.7368922520254915,
                  3.9999999999999982
                ],
                "ease": "smooth"
              },
              {
                "time": 4.666666666666667,
                "value": [
                  0,
                  0.8,
                  3.3
                ],
                "ease": "smooth"
              }
            ],
            "target": [
              {
                "time": 0,
                "value": [
                  0,
                  1,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8333333333333335,
                "value": [
                  0,
                  1,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  0,
                  1.2425860730783052,
                  0
                ],
                "ease": "hold"
              },
              {
                "time": 4.166666666666667,
                "value": [
                  0,
                  1.2015240660305357,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 4.4,
                "value": [
                  0,
                  1.227652016850056,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 4.666666666666667,
                "value": [
                  0,
                  1.15,
                  0
                ],
                "ease": "smooth"
              }
            ],
            "fov": [
              {
                "time": 0,
                "value": 27.581733794721966,
                "ease": "smooth"
              },
              {
                "time": 3.8333333333333335,
                "value": 28,
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": 42.184679011654936,
                "ease": "hold"
              },
              {
                "time": 4.166666666666667,
                "value": 42.184679011623544,
                "ease": "smooth"
              },
              {
                "time": 4.4,
                "value": 15.261055148830946,
                "ease": "smooth"
              },
              {
                "time": 4.666666666666667,
                "value": 23.46616831282448,
                "ease": "smooth"
              }
            ]
          }
        },
        {
          "id": "key",
          "type": "light",
          "name": "Key softbox",
          "position": [
            2.5,
            2.5,
            0.2
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
          "shadowRadius": 4,
          "tracks": {
            "intensity": [
              {
                "time": 0,
                "value": 0.12,
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": 2.6,
                "ease": "smooth"
              }
            ]
          }
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
          "intensity": 0.18,
          "castShadow": false,
          "tracks": {
            "intensity": [
              {
                "time": 0,
                "value": 0.06,
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": 1.4,
                "ease": "smooth"
              }
            ]
          }
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
          "color": "#ff4529",
          "intensity": 2,
          "castShadow": false,
          "tracks": {
            "color": [
              {
                "time": 0,
                "value": "#ff4529",
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": "#cbd8ff",
                "ease": "hold"
              }
            ],
            "intensity": [
              {
                "time": 0,
                "value": 0.7,
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": 2,
                "ease": "smooth"
              }
            ]
          }
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
            "color": "#080203",
            "roughness": 0.85,
            "metalness": 0
          },
          "tracks": {
            "materialColor": [
              {
                "time": 0,
                "value": "#080203",
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": "#151322",
                "ease": "hold"
              }
            ],
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "red",
          "type": "humanoid",
          "name": "Seated red figure",
          "position": [
            -0.94,
            0,
            0.6
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
            "headSize": 1,
            "neckLength": 0.95,
            "shoulderWidth": 1,
            "armLength": 1,
            "legLength": 1
          },
          "assetId": "anatomical-humanoid-v89",
          "pose": "seated",
          "style": "faceless",
          "material": {
            "color": "#9d1514",
            "roughness": 0.46,
            "metalness": 0
          },
          "parts": {
            "shirt": {
              "visible": true,
              "color": "#9d1514",
              "roughness": 0.4
            },
            "trousers": {
              "visible": true,
              "color": "#9d1514",
              "roughness": 0.44
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
          "bones": {
            "head": {
              "rotation": [
                0,
                0,
                0
              ]
            }
          },
          "boneTracks": {
            "head": [
              {
                "time": 0,
                "value": [
                  18,
                  0,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 1.1,
                "value": [
                  8,
                  0,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 2.5,
                "value": [
                  0,
                  0,
                  0
                ],
                "ease": "smooth"
              }
            ]
          },
          "ik": {
            "leftFoot": {
              "enabled": true,
              "position": [
                -0.69,
                0.08,
                0.42
              ]
            },
            "rightFoot": {
              "enabled": true,
              "position": [
                -0.69,
                0.08,
                0.78
              ]
            }
          },
          "tracks": {
            "position": [
              {
                "time": 0,
                "value": [
                  -0.94,
                  0,
                  0.6
                ],
                "ease": "smooth"
              },
              {
                "time": 0.9,
                "value": [
                  -1.12,
                  0,
                  0.6
                ],
                "ease": "smooth"
              }
            ],
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          },
          "clip": "sit",
          "leanAngle": 65,
          "sitDuration": 2.2,
          "headColor": "#320708",
          "headRoughness": 0.55,
          "handCurl": {
            "L": 0.12,
            "R": 0.18
          }
        },
        {
          "id": "coach",
          "type": "humanoid",
          "name": "Cream coach",
          "position": [
            0.83,
            0,
            -0.15
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
            "headSize": 0.99,
            "neckLength": 0.95,
            "shoulderWidth": 1,
            "armLength": 1,
            "legLength": 1
          },
          "assetId": "anatomical-humanoid-v89",
          "pose": "folded",
          "style": "faceless",
          "material": {
            "color": "#eee9da",
            "roughness": 0.46,
            "metalness": 0
          },
          "parts": {
            "shirt": {
              "visible": true,
              "color": "#eee9da",
              "roughness": 0.52
            },
            "trousers": {
              "visible": true,
              "color": "#eee9da",
              "roughness": 0.58
            },
            "hat": {
              "visible": true,
              "color": "#dedbca",
              "roughness": 0.78,
              "width": 1,
              "height": 1.05,
              "depth": 1,
              "lift": -0.01,
              "tilt": 4,
              "bandColor": "#a7a18f",
              "roll": -10,
              "autoFit": true
            }
          },
          "bones": {
            "head": {
              "rotation": [
                0,
                0,
                0
              ]
            }
          },
          "boneTracks": {
            "head": [
              {
                "time": 0,
                "value": [
                  0,
                  0,
                  0
                ],
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  0,
                  -8,
                  -4
                ],
                "ease": "hold"
              }
            ],
            "spine01": [
              {
                "time": 0,
                "value": [
                  0,
                  0,
                  0
                ],
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  0,
                  -6,
                  3
                ],
                "ease": "hold"
              }
            ],
            "upperleg01.R": [
              {
                "time": 0,
                "value": [
                  0,
                  0,
                  0
                ],
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  8,
                  0,
                  -8
                ],
                "ease": "hold"
              }
            ],
            "lowerleg01.R": [
              {
                "time": 0,
                "value": [
                  0,
                  0,
                  0
                ],
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  -6,
                  0,
                  0
                ],
                "ease": "hold"
              }
            ]
          },
          "ik": {},
          "tracks": {
            "pose": [
              {
                "time": 0,
                "value": "folded",
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": "standing",
                "ease": "hold"
              }
            ],
            "scale": [
              {
                "time": 0,
                "value": [
                  1.12,
                  1.2,
                  1.12
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8333333333333335,
                "value": [
                  1.12,
                  1.2,
                  1.12
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  1,
                  1,
                  1
                ],
                "ease": "hold"
              }
            ],
            "leanAngle": [
              {
                "time": 0,
                "value": -8,
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": 0,
                "ease": "hold"
              }
            ],
            "position": [
              {
                "time": 0,
                "value": [
                  0.88,
                  -0.45,
                  -0.4
                ],
                "ease": "smooth"
              },
              {
                "time": 2,
                "value": [
                  1.058,
                  -0.45,
                  -0.4
                ],
                "ease": "smooth"
              },
              {
                "time": 2.65,
                "value": [
                  1.2,
                  -0.45,
                  -0.4
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8333333333333335,
                "value": [
                  0.62,
                  -0.08,
                  2.5
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  0.5,
                  -0.15,
                  -0.6
                ],
                "ease": "hold"
              }
            ],
            "rotation": [
              {
                "time": 0,
                "value": [
                  0,
                  105,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8333333333333335,
                "value": [
                  0,
                  105,
                  0
                ],
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": [
                  0,
                  -38,
                  0
                ],
                "ease": "hold"
              }
            ]
          },
          "handHeight": 0,
          "handOffsets": {
            "L": [
              0.005,
              -0.005,
              0.01
            ],
            "R": [
              0,
              0.015,
              -0.005
            ]
          },
          "partTracks": {
            "hat": {
              "height": [
                {
                  "time": 0,
                  "value": 1.15,
                  "ease": "smooth"
                },
                {
                  "time": 3.8666666666666667,
                  "value": 1.05,
                  "ease": "hold"
                }
              ],
              "roll": [
                {
                  "time": 0,
                  "value": -10,
                  "ease": "smooth"
                },
                {
                  "time": 3.8666666666666667,
                  "value": -22,
                  "ease": "hold"
                }
              ]
            }
          },
          "leanAngle": -8,
          "shape": {
            "pelvis": -0.06,
            "glutes": -0.08,
            "headWidth": -0.03,
            "jaw": 0.03
          },
          "handCurl": {
            "L": 0.12,
            "R": 0.18
          }
        },
        {
          "id": "table-front",
          "type": "box",
          "name": "Black desk front",
          "position": [
            0.34,
            0.29,
            0.16
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            1.8,
            0.58,
            0.075
          ],
          "visible": true,
          "material": {
            "color": "#010101",
            "roughness": 0.6,
            "metalness": 0
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "table-top",
          "type": "box",
          "name": "Thin bright tabletop",
          "position": [
            0.34,
            0.59,
            0
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            1.82,
            0.018,
            0.42
          ],
          "visible": true,
          "material": {
            "color": "#e4e2da",
            "roughness": 0.28,
            "metalness": 0.1
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "chair-seat",
          "type": "box",
          "name": "Chair seat",
          "position": [
            -1.08,
            0.32,
            0.6
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            0.5,
            0.1,
            0.45
          ],
          "visible": true,
          "material": {
            "color": "#1b1b1b",
            "roughness": 0.85,
            "metalness": 0
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          },
          "edgeRadius": 0.045
        },
        {
          "id": "chair-back",
          "type": "box",
          "name": "Chair back",
          "position": [
            -1.3,
            0.69,
            0.6
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            0.11,
            0.61,
            0.49
          ],
          "visible": true,
          "material": {
            "color": "#1b1b1b",
            "roughness": 0.85,
            "metalness": 0
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          },
          "edgeRadius": 0.045
        },
        {
          "id": "chair-arm--1",
          "type": "tube",
          "name": "Curved chair arm -1",
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
            1,
            1,
            1
          ],
          "visible": true,
          "points": [
            [
              -1.3,
              0.39,
              0.33999999999999997
            ],
            [
              -1.2686666666666666,
              0.43574057197990707,
              0.33999999999999997
            ],
            [
              -1.2373333333333334,
              0.47948206147667605,
              0.33999999999999997
            ],
            [
              -1.206,
              0.5193127555043441,
              0.33999999999999997
            ],
            [
              -1.1746666666666667,
              0.5534918616050267,
              0.33999999999999997
            ],
            [
              -1.1433333333333333,
              0.5805255888325765,
              0.33999999999999997
            ],
            [
              -1.112,
              0.5992324335849338,
              0.33999999999999997
            ],
            [
              -1.0806666666666667,
              0.6087948169810201,
              0.33999999999999997
            ],
            [
              -1.0493333333333335,
              0.6087948169810202,
              0.33999999999999997
            ],
            [
              -1.018,
              0.5992324335849338,
              0.33999999999999997
            ],
            [
              -0.9866666666666668,
              0.5805255888325765,
              0.33999999999999997
            ],
            [
              -0.9553333333333334,
              0.5534918616050268,
              0.33999999999999997
            ],
            [
              -0.924,
              0.5193127555043442,
              0.33999999999999997
            ],
            [
              -0.8926666666666667,
              0.47948206147667605,
              0.33999999999999997
            ],
            [
              -0.8613333333333334,
              0.43574057197990707,
              0.33999999999999997
            ],
            [
              -0.8300000000000001,
              0.3900000000000001,
              0.33999999999999997
            ]
          ],
          "radius": 0.015,
          "material": {
            "color": "#303330",
            "roughness": 0.6,
            "metalness": 0.2
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "chair-arm-1",
          "type": "tube",
          "name": "Curved chair arm 1",
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
            1,
            1,
            1
          ],
          "visible": true,
          "points": [
            [
              -1.3,
              0.39,
              0.86
            ],
            [
              -1.2686666666666666,
              0.43574057197990707,
              0.86
            ],
            [
              -1.2373333333333334,
              0.47948206147667605,
              0.86
            ],
            [
              -1.206,
              0.5193127555043441,
              0.86
            ],
            [
              -1.1746666666666667,
              0.5534918616050267,
              0.86
            ],
            [
              -1.1433333333333333,
              0.5805255888325765,
              0.86
            ],
            [
              -1.112,
              0.5992324335849338,
              0.86
            ],
            [
              -1.0806666666666667,
              0.6087948169810201,
              0.86
            ],
            [
              -1.0493333333333335,
              0.6087948169810202,
              0.86
            ],
            [
              -1.018,
              0.5992324335849338,
              0.86
            ],
            [
              -0.9866666666666668,
              0.5805255888325765,
              0.86
            ],
            [
              -0.9553333333333334,
              0.5534918616050268,
              0.86
            ],
            [
              -0.924,
              0.5193127555043442,
              0.86
            ],
            [
              -0.8926666666666667,
              0.47948206147667605,
              0.86
            ],
            [
              -0.8613333333333334,
              0.43574057197990707,
              0.86
            ],
            [
              -0.8300000000000001,
              0.3900000000000001,
              0.86
            ]
          ],
          "radius": 0.015,
          "material": {
            "color": "#303330",
            "roughness": 0.6,
            "metalness": 0.2
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "blue",
          "type": "humanoid",
          "name": "Blue figure",
          "position": [
            -0.6,
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
          "visible": false,
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
            "color": "#157bab",
            "roughness": 0.46,
            "metalness": 0
          },
          "parts": {
            "shirt": {
              "visible": true,
              "color": "#157bab",
              "roughness": 0.52
            },
            "trousers": {
              "visible": true,
              "color": "#157bab",
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
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": false,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": true,
                "ease": "hold"
              }
            ]
          },
          "shape": {
            "pelvis": -0.1,
            "glutes": -0.1,
            "waist": -0.04
          },
          "handCurl": {
            "L": 0.12,
            "R": 0.18
          }
        },
        {
          "id": "smoke-back",
          "type": "plane",
          "name": "Smoke · editable depth plane",
          "position": [
            -0.95,
            1.5,
            -1.5
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            5,
            3.7,
            1
          ],
          "visible": true,
          "opacity": 0.48,
          "material": {
            "color": "#b9b9b9",
            "roughness": 1,
            "metalness": 0
          },
          "effect": {
            "kind": "smoke",
            "density": 0.95,
            "drift": 0.18,
            "turbulence": 1,
            "seed": 28
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "table-lip",
          "type": "box",
          "name": "Projecting tabletop lip",
          "position": [
            0.34,
            0.578,
            -0.225
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            1.88,
            0.028,
            0.035
          ],
          "visible": true,
          "material": {
            "color": "#c8c7c0",
            "roughness": 0.6,
            "metalness": 0
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "table-support",
          "type": "box",
          "name": "Rear desk support",
          "position": [
            1.15,
            0.29,
            -0.16
          ],
          "rotation": [
            0,
            0,
            0
          ],
          "scale": [
            0.095,
            0.58,
            0.25
          ],
          "visible": true,
          "material": {
            "color": "#171719",
            "roughness": 0.6,
            "metalness": 0
          },
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "coach-key",
          "type": "light",
          "name": "Cream figure soft key",
          "position": [
            -2,
            3,
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
          "color": "#fff4e2",
          "intensity": 3.5,
          "castShadow": false,
          "affects": [
            "coach"
          ],
          "tracks": {
            "intensity": [
              {
                "time": 0,
                "value": 3.5,
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": 1.9250000000000003,
                "ease": "smooth"
              }
            ]
          }
        },
        {
          "id": "coach-fill",
          "type": "light",
          "name": "Cream head shadow fill",
          "position": [
            1,
            1.7,
            4
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
          "color": "#fff2dd",
          "intensity": 0.75,
          "castShadow": false,
          "affects": [
            "coach"
          ],
          "tracks": {
            "intensity": [
              {
                "time": 0,
                "value": 0.75,
                "ease": "smooth"
              },
              {
                "time": 3.8666666666666667,
                "value": 0.41250000000000003,
                "ease": "smooth"
              }
            ]
          }
        },
        {
          "id": "red-rim",
          "type": "light",
          "name": "Warm silhouette rim",
          "position": [
            -2,
            1.8,
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
          "color": "#ffb052",
          "intensity": 0.7,
          "castShadow": false,
          "affects": [
            "red"
          ],
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "red-key",
          "type": "light",
          "name": "Red figure selective side key",
          "position": [
            2.5,
            1.6,
            0.7
          ],
          "target": [
            -1,
            1,
            0.6
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
          "color": "#ffddd0",
          "intensity": 1.6,
          "castShadow": true,
          "affects": [
            "red"
          ],
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        },
        {
          "id": "table-key",
          "type": "light",
          "name": "Tabletop soft light",
          "position": [
            -1,
            3,
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
          "color": "#fffaf2",
          "intensity": 2.5,
          "castShadow": false,
          "affects": [
            "table-top",
            "table-lip"
          ],
          "tracks": {
            "visible": [
              {
                "time": 0,
                "value": true,
                "ease": "hold"
              },
              {
                "time": 3.8666666666666667,
                "value": false,
                "ease": "hold"
              }
            ]
          }
        }
      ],
      "backgroundGradient": true,
      "backgroundKeys": [
        {
          "time": 0,
          "value": "#220406"
        },
        {
          "time": 3.8666666666666667,
          "value": "#220406"
        },
        {
          "time": 4.516666666666667,
          "value": "#151322"
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
