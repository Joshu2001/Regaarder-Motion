# Regaarder Motion

This is the complete project snapshot based on recovered commit `eb87eca`, with the ending updates through the enlarged rivalry flame overlays integrated.

## Run locally

Extract the ZIP into a new folder. In a terminal inside the extracted project folder, run:

```sh
python3 -m http.server 8000 --directory dist
```

On Windows, use `py -m http.server 8000 --directory dist` if Python is available as `py`.

- Main app — http://localhost:8000/
- Ending chapter editor — http://localhost:8000/chapter-editor.html
- Continuous review — http://localhost:8000/review-17-23.html

The app is served directly from `dist/`. The local preview needs no npm install or build. The root package manifest defines separate optional render and validation tools.

## What's integrated

The ending from 23:29 to 26:54 includes the portrait room, crowd and tabletop revisions, showroom sequence, Predator display, Peace One Day layers, and reusable real-fire clips. See [Flame overlay workflow](docs/Regaarder-Flame-Overlay-Workflow.md) and [Fire asset credits](docs/Ending-Fire-Asset-Credits.md).
