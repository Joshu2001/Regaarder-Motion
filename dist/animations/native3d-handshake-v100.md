# Editable paired handshake

Stable ID: `native3d-handshake-v100`. Capability: `native-handshake-v98`.

Controls: world-space camera, actor roots, individual bones, per-finger grip, shared palm timing/spacing, head/garment/hat materials, sculpt/weights/correctives, save/import/export.

## Limitations

- No complete mesh collision solver or general topology editor.
- Some archival sections remain illustrative placeholders.
- Native scene JSON is authoritative; GLB exports sampled transforms.

## Exact defaults

```json
{
  "native3DScene": {
    "schema": "regaarder-native3d-v1",
    "version": 1,
    "name": "Handshake · editable V100",
    "duration": 6,
    "sourceOffset": 900,
    "lighting": {
      "ambient": 0.12,
      "exposure": 0.92,
      "environmentStrength": 0.08,
      "shadowQuality": "ultra"
    },
    "cameraId": "camera-main",
    "background": "#092843",
    "nodes": [
      {
        "id": "camera-main",
        "type": "camera",
        "name": "Scene camera",
        "position": [
          0.15,
          1.3,
          2.6
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
          1.12,
          0
        ],
        "fov": 32,
        "tracks": {
          "position": [
            {
              "time": 0,
              "value": [
                0.05,
                1.42,
                1.95
              ],
              "ease": "smooth"
            },
            {
              "time": 0.6,
              "value": [
                0.1,
                1.4,
                2.1
              ],
              "ease": "smooth"
            },
            {
              "time": 1,
              "value": [
                0.2,
                1.23,
                1.25
              ],
              "ease": "smooth"
            },
            {
              "time": 1.75,
              "value": [
                0.2,
                1.23,
                1.25
              ],
              "ease": "smooth"
            },
            {
              "time": 2.2,
              "value": [
                0.05,
                1.4,
                2.5
              ],
              "ease": "smooth"
            },
            {
              "time": 2.8,
              "value": [
                0.1,
                1.6,
                2.8
              ],
              "ease": "smooth"
            },
            {
              "time": 3.3,
              "value": [
                0.1,
                2.25,
                2.9
              ],
              "ease": "smooth"
            },
            {
              "time": 4,
              "value": [
                -0.3,
                3,
                3
              ],
              "ease": "smooth"
            },
            {
              "time": 4.7,
              "value": [
                -0.55,
                3.7,
                3.1
              ],
              "ease": "smooth"
            },
            {
              "time": 5.6,
              "value": [
                -0.9,
                4.6,
                3.2
              ],
              "ease": "smooth"
            }
          ],
          "target": [
            {
              "time": 0,
              "value": [
                0.03,
                1.35,
                0
              ],
              "ease": "smooth"
            },
            {
              "time": 0.6,
              "value": [
                0.04,
                1.3,
                0.08
              ],
              "ease": "smooth"
            },
            {
              "time": 1,
              "value": [
                0.12,
                1.19,
                0.1
              ],
              "ease": "smooth"
            },
            {
              "time": 1.75,
              "value": [
                0.12,
                1.19,
                0.1
              ],
              "ease": "smooth"
            },
            {
              "time": 2.2,
              "value": [
                0,
                1.15,
                0
              ],
              "ease": "smooth"
            },
            {
              "time": 2.8,
              "value": [
                0,
                1.35,
                0
              ],
              "ease": "smooth"
            },
            {
              "time": 3.3,
              "value": [
                0,
                1.75,
                0
              ],
              "ease": "smooth"
            },
            {
              "time": 4,
              "value": [
                -0.3,
                2.3,
                0
              ],
              "ease": "smooth"
            },
            {
              "time": 4.7,
              "value": [
                -0.55,
                2.6,
                0
              ],
              "ease": "smooth"
            },
            {
              "time": 5.6,
              "value": [
                -0.9,
                3,
                0
              ],
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
        "color": "#fff3e1",
        "intensity": 2.2,
        "castShadow": true,
        "shadowRadius": 4,
        "affects": [
          "final-coach"
        ]
      },
      {
        "id": "fill",
        "type": "light",
        "name": "Fill light",
        "position": [
          -3,
          1.6,
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
        "color": "#b7d4ff",
        "intensity": 0.65,
        "castShadow": false,
        "affects": [
          "final-coach"
        ]
      },
      {
        "id": "rim",
        "type": "light",
        "name": "Rim light",
        "position": [
          1,
          2,
          -2
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
        "intensity": 1.4,
        "castShadow": false,
        "affects": [
          "final-coach"
        ]
      },
      {
        "id": "final-blue",
        "type": "humanoid",
        "name": "Blue partner",
        "position": [
          -0.46,
          0,
          0.14
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
          "neckLength": 1,
          "shoulderWidth": 1.06,
          "armLength": 1,
          "legLength": 1
        },
        "assetId": "anatomical-humanoid-v89",
        "pose": "standing",
        "style": "continuous",
        "material": {
          "color": "#167caf",
          "roughness": 0.36,
          "metalness": 0
        },
        "parts": {
          "shirt": {
            "visible": true,
            "color": "#167caf",
            "roughness": 0.42,
            "construction": "body-fit",
            "ease": 0.003
          },
          "trousers": {
            "visible": true,
            "color": "#167caf",
            "roughness": 0.35,
            "construction": "body-fit",
            "ease": 0.002
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
        "boneTracks": {
          "spine02": [
            {
              "time": 0,
              "value": [
                0,
                0,
                0
              ]
            },
            {
              "time": 0.9,
              "value": [
                3,
                5,
                0
              ]
            },
            {
              "time": 2.5,
              "value": [
                2,
                4,
                0
              ]
            },
            {
              "time": 3.3,
              "value": [
                0,
                0,
                0
              ]
            }
          ],
          "head": [
            {
              "time": 0,
              "value": [
                -2,
                0,
                0
              ]
            },
            {
              "time": 1,
              "value": [
                4,
                0,
                0
              ]
            },
            {
              "time": 2.8,
              "value": [
                0,
                0,
                0
              ]
            },
            {
              "time": 4,
              "value": [
                -2,
                0,
                0
              ]
            }
          ]
        },
        "ik": {},
        "tracks": {
          "leanAngle": [
            {
              "time": 0,
              "value": 0,
              "ease": "smooth"
            },
            {
              "time": 0.7,
              "value": 12,
              "ease": "smooth"
            },
            {
              "time": 2.05,
              "value": 12,
              "ease": "smooth"
            },
            {
              "time": 3.3,
              "value": 0,
              "ease": "smooth"
            }
          ]
        },
        "subdivision": 1,
        "headSurface": "oval-v100",
        "shape": {
          "shoulders": 0.04,
          "chest": 0.03,
          "waist": 0.04,
          "hips": 0.03,
          "glutes": 0.06,
          "thighs": 0.04,
          "calves": 0.05,
          "upperArms": 0.08,
          "forearms": 0.04,
          "headWidth": 0.02,
          "jaw": -0.04
        },
        "handCurl": {
          "L": 0.24,
          "R": 0.22
        },
        "handOffsets": {
          "L": [
            -0.045,
            0.05,
            -0.185
          ]
        },
        "gripPole": [
          -0.4,
          1.12,
          0.26
        ],
        "ikTracks": {},
        "handPoseTracks": {}
      },
      {
        "id": "final-coach",
        "type": "humanoid",
        "name": "Cream partner",
        "position": [
          0.38,
          0,
          -0.12
        ],
        "rotation": [
          0,
          -60,
          0
        ],
        "scale": [
          0.94,
          0.94,
          0.94
        ],
        "visible": true,
        "proportions": {
          "headSize": 1,
          "neckLength": 1,
          "shoulderWidth": 1.06,
          "armLength": 1,
          "legLength": 1
        },
        "assetId": "anatomical-humanoid-v89",
        "pose": "standing",
        "style": "continuous",
        "material": {
          "color": "#e5e0cc",
          "roughness": 0.36,
          "metalness": 0
        },
        "parts": {
          "shirt": {
            "visible": true,
            "color": "#e5e0cc",
            "roughness": 0.42,
            "construction": "body-fit",
            "ease": 0.003
          },
          "trousers": {
            "visible": true,
            "color": "#e5e0cc",
            "roughness": 0.35,
            "construction": "body-fit",
            "ease": 0.002
          },
          "hat": {
            "visible": true,
            "color": "#dedbca",
            "roughness": 0.78,
            "width": 1.04,
            "height": 1.02,
            "depth": 1.03,
            "lift": -0.004,
            "tilt": -16,
            "bandColor": "#a7a18f",
            "autoFit": true,
            "brimWidth": 0.86,
            "brimDepth": 0.9,
            "roll": -4
          }
        },
        "bones": {},
        "boneTracks": {
          "spine02": [
            {
              "time": 0,
              "value": [
                0,
                0,
                0
              ]
            },
            {
              "time": 0.9,
              "value": [
                3,
                -5,
                0
              ]
            },
            {
              "time": 2.5,
              "value": [
                2,
                -4,
                0
              ]
            },
            {
              "time": 3.3,
              "value": [
                0,
                0,
                0
              ]
            }
          ],
          "head": [
            {
              "time": 0,
              "value": [
                0,
                -3,
                -5
              ]
            },
            {
              "time": 1,
              "value": [
                4,
                -3,
                -5
              ]
            },
            {
              "time": 2.8,
              "value": [
                2,
                -3,
                -5
              ]
            },
            {
              "time": 4,
              "value": [
                0,
                -3,
                -5
              ]
            }
          ]
        },
        "ik": {},
        "tracks": {
          "leanAngle": [
            {
              "time": 0,
              "value": 0,
              "ease": "smooth"
            },
            {
              "time": 0.7,
              "value": 12,
              "ease": "smooth"
            },
            {
              "time": 2.05,
              "value": 12,
              "ease": "smooth"
            },
            {
              "time": 3.3,
              "value": 0,
              "ease": "smooth"
            }
          ]
        },
        "subdivision": 1,
        "headSurface": "oval-v100",
        "shape": {
          "shoulders": 0.04,
          "chest": 0.03,
          "waist": 0.04,
          "hips": 0.03,
          "glutes": 0.06,
          "thighs": 0.04,
          "calves": 0.05,
          "upperArms": 0.08,
          "forearms": 0.04,
          "headWidth": 0.02,
          "jaw": -0.04
        },
        "handCurl": {
          "L": 0.24,
          "R": 0.22
        },
        "handOffsets": {
          "R": [
            0,
            0.06,
            0.12
          ]
        },
        "gripPole": [
          0.3,
          1.12,
          0.1
        ],
        "ikTracks": {},
        "handPoseTracks": {}
      },
      {
        "id": "blue-key",
        "name": "Blue back form light",
        "type": "light",
        "lightType": "directional",
        "position": [
          -2,
          2.7,
          -1
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
        "color": "#aebbd8",
        "intensity": 1.3,
        "castShadow": false,
        "affects": [
          "final-blue"
        ],
        "target": [
          -0.46,
          1.1,
          0.14
        ]
      },
      {
        "id": "blue-fill",
        "name": "Blue restrained front fill",
        "type": "light",
        "lightType": "directional",
        "position": [
          1.8,
          1.7,
          3.2
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
        "color": "#b3c6e0",
        "intensity": 0.95,
        "castShadow": false,
        "affects": [
          "final-blue"
        ],
        "target": [
          -0.46,
          1.1,
          0.14
        ]
      },
      {
        "id": "blue-rim",
        "name": "Blue pink back rim",
        "type": "light",
        "lightType": "directional",
        "position": [
          -2.5,
          1.5,
          1
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
        "color": "#e6b2c5",
        "intensity": 2.1,
        "castShadow": false,
        "affects": [
          "final-blue"
        ],
        "target": [
          -0.46,
          1.1,
          0.14
        ]
      }
    ],
    "backgroundGradient": true,
    "backgroundKeys": [
      {
        "time": 0,
        "value": "#151422"
      },
      {
        "time": 0.9,
        "value": "#092843"
      },
      {
        "time": 2.8,
        "value": "#092843"
      },
      {
        "time": 5.6,
        "value": "#000000"
      }
    ],
    "interactions": [
      {
        "id": "handshake-contact",
        "type": "handshake",
        "actors": [
          "final-blue",
          "final-coach"
        ],
        "side": "R",
        "center": [
          0,
          1.09,
          0.24
        ],
        "separation": 0.04,
        "start": 0.15,
        "contact": 0.7,
        "release": 2.05,
        "end": 2.7,
        "shakeAmplitude": 0.015,
        "shakeFrequency": 1.8,
        "fingerCurl": [
          0.32,
          0.8,
          0.85,
          0.85,
          0.8
        ]
      }
    ]
  }
}
```
