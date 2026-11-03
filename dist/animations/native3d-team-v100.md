# Editable red players

Stable ID: `native3d-team-v100`. Capability: `native-team-v98`.

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
    "name": "Three independent red anatomical players",
    "duration": 6,
    "sourceOffset": 915,
    "lighting": {
      "exposure": 0.92,
      "ambient": 0.06
    },
    "cameraId": "camera-main",
    "background": "#08090b",
    "nodes": [
      {
        "id": "camera-main",
        "type": "camera",
        "name": "Scene camera",
        "position": [
          0.3,
          1.2,
          4.8
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
        "fov": 33,
        "tracks": {
          "position": [
            {
              "time": 0,
              "value": [
                0.4,
                1.2,
                5.2
              ],
              "ease": "smooth"
            },
            {
              "time": 6,
              "value": [
                0,
                1.2,
                4.5
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
        "intensity": 0.6,
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
        "color": "#ffb34f",
        "intensity": 3,
        "castShadow": false
      },
      {
        "id": "final-player-0",
        "type": "humanoid",
        "name": "Red player 1",
        "position": [
          -0.65,
          0,
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
        "proportions": {
          "headSize": 1,
          "neckLength": 0.95,
          "shoulderWidth": 1,
          "armLength": 1,
          "legLength": 1
        },
        "assetId": "anatomical-humanoid-v89",
        "pose": "standing",
        "style": "continuous",
        "material": {
          "color": "#b71326",
          "roughness": 0.38,
          "metalness": 0
        },
        "parts": {
          "shirt": {
            "visible": true,
            "color": "#b71326",
            "roughness": 0.52,
            "construction": "body-fit"
          },
          "trousers": {
            "visible": true,
            "color": "#b71326",
            "roughness": 0.58,
            "construction": "body-fit"
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
          "head": [
            {
              "time": 0,
              "value": [
                0,
                8,
                0
              ]
            },
            {
              "time": 6,
              "value": [
                0,
                6,
                0
              ]
            }
          ]
        },
        "ik": {},
        "tracks": {},
        "subdivision": 1,
        "headSurface": "oval-v100",
        "shape": {
          "shoulders": 0.04,
          "chest": 0.05,
          "waist": -0.04,
          "glutes": 0.04,
          "thighs": 0.03
        },
        "headColor": "#b71326",
        "handCurl": {
          "L": 0.15,
          "R": 0.16
        }
      },
      {
        "id": "final-player-1",
        "type": "humanoid",
        "name": "Red player 2",
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
        "proportions": {
          "headSize": 1,
          "neckLength": 0.95,
          "shoulderWidth": 1,
          "armLength": 1,
          "legLength": 1
        },
        "assetId": "anatomical-humanoid-v89",
        "pose": "standing",
        "style": "continuous",
        "material": {
          "color": "#b71326",
          "roughness": 0.38,
          "metalness": 0
        },
        "parts": {
          "shirt": {
            "visible": true,
            "color": "#b71326",
            "roughness": 0.52,
            "construction": "body-fit"
          },
          "trousers": {
            "visible": true,
            "color": "#b71326",
            "roughness": 0.58,
            "construction": "body-fit"
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
          "head": [
            {
              "time": 0,
              "value": [
                0,
                0,
                0
              ]
            },
            {
              "time": 6,
              "value": [
                0,
                0,
                0
              ]
            }
          ]
        },
        "ik": {},
        "tracks": {},
        "subdivision": 1,
        "headSurface": "oval-v100",
        "shape": {
          "shoulders": 0.04,
          "chest": 0.05,
          "waist": -0.04,
          "glutes": 0.04,
          "thighs": 0.03
        },
        "headColor": "#b71326",
        "handCurl": {
          "L": 0.15,
          "R": 0.16
        }
      },
      {
        "id": "final-player-2",
        "type": "humanoid",
        "name": "Red player 3",
        "position": [
          0.65,
          0,
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
        "proportions": {
          "headSize": 1,
          "neckLength": 0.95,
          "shoulderWidth": 1,
          "armLength": 1,
          "legLength": 1
        },
        "assetId": "anatomical-humanoid-v89",
        "pose": "standing",
        "style": "continuous",
        "material": {
          "color": "#b71326",
          "roughness": 0.38,
          "metalness": 0
        },
        "parts": {
          "shirt": {
            "visible": true,
            "color": "#b71326",
            "roughness": 0.52,
            "construction": "body-fit"
          },
          "trousers": {
            "visible": true,
            "color": "#b71326",
            "roughness": 0.58,
            "construction": "body-fit"
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
          "head": [
            {
              "time": 0,
              "value": [
                0,
                -8,
                0
              ]
            },
            {
              "time": 6,
              "value": [
                0,
                -6,
                0
              ]
            }
          ]
        },
        "ik": {},
        "tracks": {},
        "subdivision": 1,
        "headSurface": "oval-v100",
        "shape": {
          "shoulders": 0.04,
          "chest": 0.05,
          "waist": -0.04,
          "glutes": 0.04,
          "thighs": 0.03
        },
        "headColor": "#b71326",
        "handCurl": {
          "L": 0.15,
          "R": 0.16
        }
      }
    ],
    "transparentBackground": true
  }
}
```
