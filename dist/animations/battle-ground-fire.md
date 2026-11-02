# Editable ground fire patches

Stable ID: `battle-ground-fire`

Individually placed and timed ground flames.

## Implementation

- [asset-selection.js](../asset-selection.js) — SHA-256 `37ea83083dd9f3628b6866e0c5447d19e35e3660c2fda50396cd25c63bbc7e69`; functions: `currentSceneAssets` (line 5), `clearSceneSelection` (line 6), `drawSceneSelection` (line 7), `selectSceneAsset` (line 8), `assetSave` (line 11), `toolField` (line 12), `toolButton` (line 13), `toolNumbers` (line 14), `selectedAssetId` (line 15), `mediaTools` (line 16), `keyframeTools` (line 17), `renderFirePatchTools` (line 18), `renderAssetContext` (line 19), `drawBlankSelection` (line 33).
- [battle-scene.js](../battle-scene.js) — SHA-256 `5539c1d365065db56d9d04cd6743993dc00fea9c8623afa989e1edf0d233def0`; functions: `resolveSoldierSource` (line 4), `createBattleScene` (line 5), `soldierTexture` (line 6), `cover` (line 7), `sky` (line 8), `hue` (line 9), `groundFire` (line 10), `explosion` (line 11), `muzzle` (line 12), `panel` (line 13).

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
| `battleFireBuild` | `3` | number | Native renderer units; inspect linked implementation before conversion | `battle.js#battleDefaults` |
| `battleFirePatches` | See JSON below | array | Native renderer units; inspect linked implementation before conversion | `battle.js#firePatchDefaults` |
| `battleFireSource` | `"filmed"` | string | Native renderer units; inspect linked implementation before conversion | `scripts/animation-catalog-spec.json#battle-ground-fire` |

## Limitations

- Native scene and media dependencies remain applicable.
- Native units must not be reinterpreted without inspecting the linked renderer.
- Image planes do not reconstruct unseen geometry. Artwork-specific gesture rigs require native calibration.

## Machine-readable instance

```json
{
  "schema": "regaarder-animation-instance-v1",
  "effectId": "battle-ground-fire",
  "parameters": {
    "battleFireBuild": 3,
    "battleFirePatches": [
      {
        "id": "fire-0",
        "x": 95,
        "y": 425,
        "width": 230,
        "height": 190,
        "color": "#ff7b25",
        "speed": 1,
        "turbulence": 60,
        "wind": 0,
        "opacity": 0.9,
        "start": 0,
        "build": 3,
        "keys": []
      },
      {
        "id": "fire-1",
        "x": 265,
        "y": 425,
        "width": 230,
        "height": 220,
        "color": "#ff7b25",
        "speed": 1,
        "turbulence": 60,
        "wind": 0,
        "opacity": 0.9,
        "start": 0,
        "build": 3,
        "keys": []
      },
      {
        "id": "fire-2",
        "x": 435,
        "y": 425,
        "width": 230,
        "height": 190,
        "color": "#ff7b25",
        "speed": 1,
        "turbulence": 60,
        "wind": 0,
        "opacity": 0.9,
        "start": 0,
        "build": 3,
        "keys": []
      },
      {
        "id": "fire-3",
        "x": 605,
        "y": 425,
        "width": 230,
        "height": 220,
        "color": "#ff7b25",
        "speed": 1,
        "turbulence": 60,
        "wind": 0,
        "opacity": 0.9,
        "start": 0,
        "build": 3,
        "keys": []
      },
      {
        "id": "fire-4",
        "x": 775,
        "y": 425,
        "width": 230,
        "height": 190,
        "color": "#ff7b25",
        "speed": 1,
        "turbulence": 60,
        "wind": 0,
        "opacity": 0.9,
        "start": 0,
        "build": 3,
        "keys": []
      }
    ],
    "battleFireSource": "filmed"
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
