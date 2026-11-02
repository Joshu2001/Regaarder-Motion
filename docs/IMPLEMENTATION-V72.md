# V72 implementation and reusable project guide

Run `npm start` and open the server URL. The main inspector contains “Next sequence · football, factory and politics.” Use its preview buttons to jump to source landmarks; hide the continuation to restore the V71 endpoint. Sequence speed and individual scene durations preserve source/local correspondence. Earlier V71 timing and narration mode remain independent.

Under “Individual objects · placement and animation,” select media or an individual team/foreground member, boot, ball, coins, eye, emblem or reveal mask. Edit visibility, XY, scale, rotation, opacity, blur, brightness and depth. Choose a whole-object preset or enter shared `objectMotion*` settings in JSON. Whole-object time uses the reference-source clock (e.g. start 295 for football), so set `objectMotionStart` accordingly. Follow-path uses normalized stage XY points. Examples:

```json
{"objectMotionPreset":"float","objectMotionStart":305,"objectMotionDuration":4,"objectMotionDistance":12,"objectMotionLoop":true}
```

```json
{"objectMotionPreset":"follow-path","objectMotionStart":295,"objectMotionDuration":4,"objectMotionLoop":false,"pathPoints":[[0.5,0.5],[0.6,0.35],[0.7,0.5]],"pathShape":"curve"}
```

Media replacement preserves the prior browser-local replacement and treats the new file as a full source rather than an atlas. Existing save/export/import controls remain applicable; factory values are in `factory-defaults-v72.json`, not a live-user-instance export. JSON imports validate finite continuation numbers, positive duration/scale/depth and the shared motion schema. Source bindings do not retime actions.

Search Animation library for “continuation-sequence,” “library wipe,” “leather boot,” “focus pull” or “red photo.” The full 68.65-second action and each of 24 stages can be inserted independently with their exact native defaults, source slots and shared playback timing. Catalog Markdown/JSON is regenerated from source scopes. Preset media stays separate from movement.

Modules: continuation-sequence.js (shared renderer/state), continuation-objects.js (authored object geometry), continuation-director.js (main editor/clock migration), animation-library-director.js (library adapter). All production media lives under dist/assets. Prior active assets are byte-identical: 251 checked against the V71 ZIP. The source package retains all previous assets and archive records. See validation-v72.json, preservation-v72.json and review/check logs.

The generated-record JSON contains normalized prompts rather than claiming to reproduce unavailable exact prompt text. All selected original raster files are unmodified outputs. The boot retains an illustrative 3D proxy for the turn and crossfades to photographic detail. People/rooms are planes; no full 3D body recovery or articulated kicking is implemented. Historical imagery is documentary context, and fire is a symbolic transition. Archive image licenses/attributions are attached; CC BY-SA terms apply to relevant photograph derivatives. No new audio mix or full-film render is included.

Deliverables: editable source package, eight generated raster assets plus verified archive photographs/credits, silent full-continuation preview, side-by-side source comparison and this review. Implemented source ends at 05:55; original film is 26:54.63.
