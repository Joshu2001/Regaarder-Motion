# Layered garment and arm rig

Stable ID: `gesture-layer-rig`

Editable layer masks and contact constraints calibrated for the original artwork.

## Implementation

- [gesture-layers.js](../../dist/gesture-layers.js) — SHA-256 `fc93795d307ed2e8d52e6676268e72f66a1360fba0a7f6beb36850eb1366f626`; functions: `regionMatrix` (line 11), `connectorMatrix` (line 13), `createLayeredGesture` (line 14).
- [layer-director.js](../../dist/layer-director.js) — SHA-256 `a523197242792f02947f2777acd1c5904bfd24f06a7c289ad9f0abcb55d85b8c`; functions: `ensureLayerSources` (line 3), `show` (line 8).

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
| `version` | `1` | number | Native renderer units; inspect linked implementation before conversion | `gesture-layers.js#defaultLayerRecipe` |
| `layers` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `gesture-layers.js#defaultLayerRecipe` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "gesture-layer-rig",
  "parameters": {
    "version": 1,
    "layers": [
      {
        "id": "background",
        "source": "rigBackground"
      },
      {
        "id": "body",
        "source": "original",
        "track": "woman",
        "extendBottom": true,
        "mask": [
          [
            350,
            14
          ],
          [
            379,
            20
          ],
          [
            399,
            35
          ],
          [
            414,
            58
          ],
          [
            417,
            82
          ],
          [
            413,
            100
          ],
          [
            422,
            113
          ],
          [
            419,
            123
          ],
          [
            411,
            129
          ],
          [
            414,
            138
          ],
          [
            408,
            151
          ],
          [
            400,
            164
          ],
          [
            404,
            176
          ],
          [
            428,
            174
          ],
          [
            450,
            176
          ],
          [
            465,
            190
          ],
          [
            470,
            230
          ],
          [
            478,
            270
          ],
          [
            485,
            315
          ],
          [
            492,
            344
          ],
          [
            497,
            380
          ],
          [
            519,
            440
          ],
          [
            600,
            1000
          ],
          [
            200,
            1000
          ],
          [
            282,
            470
          ],
          [
            298,
            416
          ],
          [
            315,
            392
          ],
          [
            300,
            370
          ],
          [
            285,
            345
          ],
          [
            267,
            310
          ],
          [
            253,
            275
          ],
          [
            252,
            245
          ],
          [
            263,
            217
          ],
          [
            281,
            200
          ],
          [
            305,
            187
          ],
          [
            311,
            170
          ],
          [
            299,
            155
          ],
          [
            277,
            147
          ],
          [
            260,
            133
          ],
          [
            250,
            112
          ],
          [
            252,
            86
          ],
          [
            261,
            64
          ],
          [
            283,
            47
          ],
          [
            303,
            31
          ],
          [
            326,
            20
          ]
        ],
        "repair": true
      },
      {
        "id": "upper-arm",
        "source": "original",
        "track": "upperConnector",
        "anchors": [
          [
            455,
            205
          ],
          [
            655,
            120
          ]
        ],
        "mask": [
          [
            403,
            168
          ],
          [
            445,
            166
          ],
          [
            472,
            180
          ],
          [
            488,
            195
          ],
          [
            516,
            202
          ],
          [
            538,
            185
          ],
          [
            570,
            166
          ],
          [
            590,
            164
          ],
          [
            609,
            141
          ],
          [
            634,
            120
          ],
          [
            652,
            112
          ],
          [
            674,
            103
          ],
          [
            674,
            110
          ],
          [
            658,
            124
          ],
          [
            644,
            139
          ],
          [
            629,
            145
          ],
          [
            610,
            160
          ],
          [
            597,
            177
          ],
          [
            574,
            198
          ],
          [
            558,
            234
          ],
          [
            544,
            267
          ],
          [
            525,
            279
          ],
          [
            501,
            280
          ],
          [
            477,
            269
          ],
          [
            457,
            238
          ],
          [
            437,
            215
          ]
        ]
      },
      {
        "id": "garment",
        "source": "original",
        "track": "garment",
        "mask": [
          [
            646,
            140
          ],
          [
            650,
            126
          ],
          [
            674,
            107
          ],
          [
            694,
            106
          ],
          [
            711,
            110
          ],
          [
            736,
            141
          ],
          [
            777,
            154
          ],
          [
            803,
            190
          ],
          [
            836,
            253
          ],
          [
            831,
            284
          ],
          [
            786,
            298
          ],
          [
            776,
            351
          ],
          [
            789,
            394
          ],
          [
            751,
            411
          ],
          [
            698,
            416
          ],
          [
            647,
            410
          ],
          [
            604,
            402
          ],
          [
            549,
            382
          ],
          [
            545,
            363
          ],
          [
            562,
            345
          ],
          [
            588,
            325
          ],
          [
            589,
            280
          ],
          [
            554,
            275
          ],
          [
            527,
            262
          ],
          [
            533,
            217
          ],
          [
            548,
            185
          ],
          [
            571,
            170
          ],
          [
            602,
            158
          ],
          [
            626,
            141
          ],
          [
            646,
            116
          ]
        ]
      },
      {
        "id": "lower-arm",
        "source": "original",
        "track": "connector",
        "anchors": [
          [
            349,
            399
          ],
          [
            548,
            360
          ]
        ],
        "mask": [
          [
            312,
            355
          ],
          [
            337,
            353
          ],
          [
            359,
            361
          ],
          [
            401,
            351
          ],
          [
            451,
            341
          ],
          [
            488,
            339
          ],
          [
            512,
            343
          ],
          [
            539,
            345
          ],
          [
            558,
            354
          ],
          [
            553,
            370
          ],
          [
            531,
            383
          ],
          [
            504,
            387
          ],
          [
            480,
            379
          ],
          [
            440,
            387
          ],
          [
            400,
            400
          ],
          [
            360,
            410
          ],
          [
            334,
            416
          ],
          [
            317,
            404
          ]
        ]
      }
    ]
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
