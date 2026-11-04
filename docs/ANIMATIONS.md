# V128 update

Current continuation: ANIMATIONS-V128.md . Earlier inventory/checklist follows unchanged.

# Animation inventory · V125

Master =1020 + local seconds. Positions in960×540 pixels, rotation in degrees; opacity, scale and depth are multipliers. Original source pixels remain separate from presentation effects.

## layer-path

Replaceable sprite travel with position, scale, rotation and reversible time

Reusable tool defaults: {"start":0,"end":1,"from":[0,0,1,0],"to":[0,0,1,0]}

## family-panel-rise

Masked panel rise with separate adult, son, logo and reflection

Reusable tool defaults: {"redStart":12.5,"blueStart":13.1,"riseDuration":2.3,"exitStart":25.5,"exitEnd":27.3}

## framed-photo-retreat

One archival image moves as a framed plane; subject pixels stay coherent

Reusable tool defaults: {"start":25.5,"end":35.5,"startWidth":650,"endWidth":410,"perspective":0.04}

## photo-split-flare

Complementary masks split the same photo into cyan/red fragments

Reusable tool defaults: {"start":35.5,"duration":3,"gap":160,"tilt":28,"fadeStart":38.5,"fadeEnd":41}

## rain-fog-reflection

Seeded rain, drifting fog, mirrored masked image reflections

Reusable tool defaults: {"seed":17,"rainCount":180,"rainSpeed":0.65,"rainOpacity":0.22,"fogOpacity":0.12}

## original-motion-bridge

Editable original graphics replacing sponsor visuals; no sponsor identity

Reusable tool defaults: {"start":43,"end":60,"title":"REGAARDER","subtitle":"MOTION ATELIER"}

## localized-hair-wind

Only top 20% of portrait source is displaced. Face/glasses remain stable.

Reusable tool defaults: {"hairWind":1.8,"hairSpeed":1.3}

## heat-shimmer

Strip displacement on product/logo planes, independent of glow.

Reusable tool defaults: {"heat":1.1}

## panel-pullback-light

Camera pullback shared by figures, logo, reflections and background; opening remains covered.

Reusable tool defaults: {"panelPullback":0.15,"panelPullbackStart":16,"panelPullbackEnd":24.5,"panelSmoke":0.65}

## archival-paper-wear

Source untouched; irregular paper clipping, generated edge texture, film grain and dust are presentation layers.

Reusable tool defaults: {"photoWear":0.8,"photoAge":0.65,"photoGrain":0.08}

## Exact scene defaults

These override generic reusable-tool defaults where different.

```json
{
  "schema": "regaarder-minute17-v1",
  "version": 125,
  "speed": 1,
  "reverse": false,
  "zoom": 1,
  "parallax": 1,
  "rain": 1,
  "rainSpeed": 0.65,
  "fog": 0.19,
  "glow": 10,
  "reflection": 0.5,
  "productStart": 6.5,
  "productStagger": 0.32,
  "panelRedStart": 12.5,
  "panelBlueStart": 13.1,
  "panelRise": 2.3,
  "panelExit": 25.5,
  "panelExitEnd": 27.3,
  "photoStartWidth": 590,
  "photoEndWidth": 380,
  "photoRetreat": 1,
  "splitStart": 35.5,
  "splitDuration": 3,
  "splitGap": 160,
  "splitTilt": 28,
  "flare": 1.6,
  "flareDuration": 1.7,
  "portraitGap": 80,
  "portraitEndWidth": 218,
  "hairWind": 1.8,
  "hairSpeed": 1.3,
  "heat": 1.1,
  "groundSmoke": 0.8,
  "lightDepth": 1,
  "lightBeam": 0.7,
  "panelPullback": 0.15,
  "panelPullbackStart": 16,
  "panelPullbackEnd": 24.5,
  "panelSmoke": 0.65,
  "photoWear": 0.8,
  "photoAge": 0.65,
  "photoGrain": 0.08,
  "bridgeTitle": "REGAARDER",
  "bridgeSubtitle": "MOTION ATELIER",
  "layers": {
    "city": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "profileBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "profileRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "logoBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "logoRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "shortsBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "shortsRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "shoeBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "shoeRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "sockBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "sockRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "panelBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "panelRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "adultBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "adultRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "sonBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "sonRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "photo": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    },
    "paperEdge": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "visible": true,
      "depth": 1
    }
  }
}
```

Controls expose position, size, rotation, opacity, blur, visibility and depth per layer; scene speed/reversal; portrait spacing; hair amplitude/speed; heat amplitude; distant lights; streak; ground mist; family pullback timing/strength; reflection; photo wear/age/grain; split and flare timing. Rain speed can be negative for reversed direction. Imported media and their data URLs are saved in presets.
