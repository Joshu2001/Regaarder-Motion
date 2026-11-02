# V43 template review

28 October 2026. Continuation from the recovered v43 work-in-progress checkpoint.

## Recovered artwork

Recovered both original transparent boy images from the user's saved files: Dusty blond boy in a work coat and Solemn Young Boy in a Dark Coat. Their bytes are unchanged. Original generation prompts were unavailable; the exact saved identifiers are in assets/war-layers-generation-v43.json. No third boy is used. The rejected flat sunset composite remains retained and searchable, but is no longer referenced by the browser loader or offline renderer.

## Template changes

The wartime reveal now uses separate sky/cloud, procedural sun glow, landscape, rear boy, foreground boy and fire. Foreground travel defaults to 270 px, rear to 219 px and landscape to 177 px, preserving the approximate 116:94:76 relative displacement observed in the archived short reference interval. This is image-space retargeting, not a recovered camera solve. Sky travel is inferred because the available sky matches had too few inliers. Fire stays near the lower edge with separately editable placement and opacity.

New generated assets: pale yellow/peach sky and transparent ruined landscape. Exact prompts and output identifiers are retained in assets/war-layers-generation-v43.json. The existing boy cutouts were reused, not regenerated. They are close-up illustrations with identities that differ from the reference.

The simple editor has separate replacement buttons for each boy, sky, landscape, map, route image and gesture video. Replacing sources preserves the effect settings. Advanced controls expose individual figure position, height, depth travel, softness, landscape placement, sky movement, glow and fire placement. Shared effects and prior granular controls remain available. Older global wartime scale/offset controls affect the figure/landscape group.

The recovered route implementation provides multiple shrinking garment copies, independent delays, editable paths and growing dashed, dotted or solid blue lines. Paths can be edited by dragging points; sources can be replaced per route. Default routes are authored approximations, not exact tracked trajectories.

## Validation and limits

27 check scripts pass, including a new route/parallax test: route endpoints, delayed visibility, shrinking size, actual draw-bound changes at different depths, source replacement changing the output while retaining settings, and exclusion of the rejected composite from runtime bindings. Asset provenance inventory was rebuilt, including original rejected candidates.

Offline timestamped stages were rendered. Live-browser controls, native-speed reference comparison and visual acceptance remain unverified. Automated tests establish behavior, not a perfect visual match. Sky color, architecture, identities, edge halos, exact route tracks and reference timing remain approximate. The recovered blond boy is a good usable foreground asset; it is not an exact reproduction of the source character. This package is for review and does not imply user approval.

No AI video service is connected. The accepted user-supplied woman gesture remains in use; it has not been replaced with a new rig or regenerated footage.
