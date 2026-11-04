# Animation inventory · V126

Source-master time =1130 + local seconds. Output960×540/24fps; source640×360/30fps. Position in pixels, rotation in degrees, timing in seconds, opacity/scale/depth/ramp strength as multipliers.

## layered-person-room

Separate people, chairs, tables and camera with exposure reveal and near/far blur

Reusable tool defaults: {"roomRevealStart":10,"roomRevealEnd":13.3,"roomExitStart":20.7,"roomExitEnd":22.6}

## connected-handshake

Joined contact group descends from top, shared transform retains grip

Reusable tool defaults: {"handStart":13.5,"handEnd":15.2,"handExit":22.6}

## flame-flipbook

Reusable interpolated6-frame fire atlas, independent emission anchor and light

Reusable tool defaults: {"speed":8,"strength":0.8}

## tabletop-camera-roll

Shared poster/table camera rotation, approach and lateral transition

Reusable tool defaults: {"start":37,"end":43,"fromRoll":-90,"toRoll":0}

## cash-fan

Staggered individual note planes with fixed pivot and independent sway

Reusable tool defaults: {"start":29.5,"stagger":0.4,"count":3}

## attached-cross

Two overlapping drawn strokes attached to a card/photo

Reusable tool defaults: {"duration":0.9,"secondStrokeOffset":0.28}

## boot-emphasis

Pullback followed by distinct boot punch-in, localized flex and separate ball drift

Reusable tool defaults: {"revealStart":75.3,"revealEnd":77.6,"punchStart":80.9,"punchEnd":81}

## occluded-boot-ring

Clockwise red arc drawn below isolated foreground player layer

Reusable tool defaults: {"start":81.2,"duration":1.25,"radius":75}

## Exact scene defaults and independent image transforms

These are authored settings, not recovered original source keyframes.

```json
{
  "schema": "regaarder-pele-v1",
  "version": 126,
  "speed": 1,
  "reverse": false,
  "zoom": 1,
  "parallax": 1,
  "exposure": 1,
  "glow": 9,
  "fog": 0.16,
  "flameStrength": 0.85,
  "flameSpeed": 8,
  "handStart": 13.5,
  "handSettle": 15.2,
  "handExit": 22.6,
  "roomPullback": 0.3,
  "peopleMotion": 1,
  "cashStart": 29.5,
  "cashStagger": 0.4,
  "cashCount": 3,
  "cameraRoll": 90,
  "posterSize": 245,
  "tableTravel": 1,
  "paperAge": 0.55,
  "paperTitle": "MAKE WAY FOR PELÉ",
  "secondTitle": "THE PRICE OF RIVALRY",
  "chapterTitle": "THE PELÉ PACT",
  "chapterLabel": "CHAPTER 6",
  "crossPuma": 68.5,
  "crossAdidas": 69,
  "crossPele": 72.25,
  "bootPunch": 80.9,
  "ringStart": 81.2,
  "ringDuration": 1.25,
  "ringRadius": 75,
  "ringWidth": 11,
  "playerFlex": 0.8,
  "ballDrift": 8,
  "rampStrength": 0,
  "rampStart": 75.3,
  "rampEnd": 77.6,
  "contactLock": true,
  "bootMark": true,
  "occlusion": true,
  "showBounds": false,
  "layers": {
    "room": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "table": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "chairBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "chairRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "cash": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "guest0": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "guest1": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "guest2": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "guest3": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "guest4": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "guest5": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "handshake": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "portraitBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "portraitRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "stage": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "smoke": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "wood": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "poster": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "blueCard": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "redCard": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "logoBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "logoRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "moneyOne": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "moneyHundred": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "peleBall": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "footballBackground": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "player0": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "player1": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "player2": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "ball": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "fireAtlas": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "bootBlue": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "bootRed": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "paperEdge": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "nextInsert": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "newspaper1": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "newspaper2": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    },
    "photoPrint": {
      "x": 0,
      "y": 0,
      "scale": 1,
      "rotation": 0,
      "opacity": 1,
      "blur": 0,
      "depth": 1,
      "flipX": false,
      "useImage": false,
      "visible": true
    }
  }
}
```

Each person has its own source and transform. Printed photographs remain coherent planes. Shared bill/prop copies reuse one image binding; authored instance offsets are in pele-sequence.js. Flame strength/speed are separate from source, light and camera. Book/poster art and newspaper text are reconstructions, marked in metadata. The ball has independent drift; the foreground player has optional localized upper-region flex, which is an inferred editable approximation. Boot emphasis has separate approach and punch-in phases, and the leg can occlude the ring.

Reverse applies to the entire deterministic clock, including video boundary sampling. Optional rampStrength>0 remaps only rampStart–rampEnd with a slower beginning and acceleration while preserving window endpoints. Default rampStrength=0 retains reference timing. contactLock=true keeps central diners steady against the tabletop. Mirror is per-image.

Newspaper1 and newspaper2 have independent transforms and full-scan replacement bindings. Replace an image to use it immediately; enable Use scanned paper to use the bundled optional image file. Default type remains editable. photoPrint is an independent image binding.
