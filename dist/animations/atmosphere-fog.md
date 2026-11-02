# Low foreground fog

Stable ID: `atmosphere-fog`

Editable low foreground fog path, density, thickness, color and drift.

## Implementation

- [atmosphere-engine.js](../atmosphere-engine.js) — SHA-256 `c028b03a522e6b63a824b9e4dedf4f390e8fc612d573656b8523b9d4701ba8c4`; functions: `hash` (line 4), `sampleFlowPath` (line 5), `atmosphereParticle` (line 6), `createAtmosphere` (line 7), `texture` (line 7).
- [battle.js](../battle.js) — SHA-256 `b7522e0c540275984601121e807c14e9ff36bc8e3492f24bd3d52f8a6c39676f`; functions: `prepareBattleFlames` (line 14), `renderBattle` (line 18), `seekBattle` (line 22), `addNumber` (line 26), `renderBattleControls` (line 27), `openFlowEditor` (line 35), `flowPoint` (line 37), `flowLoop` (line 39), `flowCapability` (line 42), `invalidateBattleFrame` (line 49).

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
| `battleDuration` | `26` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleGlide` | `6` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleDirection` | `"left"` | string | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleFireBuild` | `3` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastDecay` | `7` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastRise` | `9` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastStart` | `6.5` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastGrow` | `2.2` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastSize` | `1.05` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastX` | `435` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastY` | `440` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleBlastPulse` | `65` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleSmokeStart` | `8` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleSmokeGrow` | `6` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleFogStart` | `12` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleFogBuild` | `8` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleRate` | `1` | number | Native renderer rate; do not assume multiplier | `battle.js#battleDefaults` |
| `battleSeed` | `19` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleFlashDuration` | `0.13` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleRecoil` | `5` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleShotMode` | `"staggered"` | string | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleLayers` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `noirClouds` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleSmoke` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleFog` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleSoldiers` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `flow` | See JSON below | object | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults.battleFog` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "atmosphere-fog",
  "parameters": {
    "battleDuration": 26,
    "battleGlide": 6,
    "battleDirection": "left",
    "battleFireBuild": 3,
    "battleBlastDecay": 7,
    "battleBlastRise": 9,
    "battleBlastStart": 6.5,
    "battleBlastGrow": 2.2,
    "battleBlastSize": 1.05,
    "battleBlastX": 435,
    "battleBlastY": 440,
    "battleBlastPulse": 65,
    "battleSmokeStart": 8,
    "battleSmokeGrow": 6,
    "battleFogStart": 12,
    "battleFogBuild": 8,
    "battleRate": 1,
    "battleSeed": 19,
    "battleFlashDuration": 0.13,
    "battleRecoil": 5,
    "battleShotMode": "staggered",
    "battleLayers": {
      "soldiers": true,
      "terrain": true,
      "fireball": true,
      "smoke": true,
      "flashes": true,
      "fog": true
    },
    "noirClouds": {
      "density": 60,
      "thickness": 65,
      "speed": 19,
      "scale": 1.5,
      "turbulence": 45,
      "opacity": 0.7,
      "color": "#e0e3d8",
      "seed": 13,
      "path": [
        [
          -0.25,
          0.32
        ],
        [
          0.35,
          0.25
        ],
        [
          1.25,
          0.32
        ]
      ]
    },
    "battleSmoke": {
      "density": 68,
      "thickness": 60,
      "speed": 23,
      "scale": 0.85,
      "turbulence": 65,
      "opacity": 0.8,
      "color": "#4f504b",
      "seed": 28,
      "path": [
        [
          0.43,
          0.72
        ],
        [
          0.44,
          0.42
        ],
        [
          0.35,
          -0.25
        ]
      ]
    },
    "battleFog": {
      "density": 45,
      "thickness": 50,
      "speed": 15,
      "scale": 1.25,
      "turbulence": 35,
      "opacity": 0.6,
      "color": "#c4c6b2",
      "seed": 41,
      "path": [
        [
          -0.2,
          0.94
        ],
        [
          0.5,
          0.91
        ],
        [
          1.2,
          0.92
        ]
      ]
    },
    "battleSoldiers": [
      {
        "x": -30,
        "y": 290,
        "width": 340,
        "muzzleU": 0.11,
        "muzzleV": 0.265,
        "sprite": 0,
        "blur": 1.4,
        "opacity": 1,
        "rotation": 0
      },
      {
        "x": 150,
        "y": 255,
        "width": 360,
        "muzzleU": 0.065,
        "muzzleV": 0.29,
        "sprite": 1,
        "blur": 0.4,
        "opacity": 1,
        "rotation": 0
      },
      {
        "x": 360,
        "y": 195,
        "width": 400,
        "muzzleU": 0.1,
        "muzzleV": 0.21,
        "sprite": 2,
        "blur": 0,
        "opacity": 1,
        "rotation": 0
      },
      {
        "x": 610,
        "y": 270,
        "width": 360,
        "muzzleU": 0.1,
        "muzzleV": 0.2,
        "sprite": 3,
        "blur": 0.8,
        "opacity": 1,
        "rotation": 0
      }
    ],
    "flow": {
      "density": 45,
      "thickness": 50,
      "speed": 15,
      "scale": 1.25,
      "turbulence": 35,
      "opacity": 0.6,
      "color": "#c4c6b2",
      "seed": 41,
      "path": [
        [
          -0.2,
          0.94
        ],
        [
          0.5,
          0.91
        ],
        [
          1.2,
          0.92
        ]
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
