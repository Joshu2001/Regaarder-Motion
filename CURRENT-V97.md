# V97 continuous character refinement

Source: original 15:00–15:06. sourceTime = localTime + 900 seconds.

Observed V96 defects: open neck boundaries, independently fitted garment seams, uneven head profile, loose hand targets and inappropriate finger curl axis.

Authored corrections: opt-in continuous body style preserves the supplied body connectivity; analytic head/neck contour reshaping uses original topology and a clean head/neck skin-weight blend. Body-fit clothing regions use shared surface positions and canonical normals with minimal clearance. Hand targets are closer and finger grip rotates about the anatomical hand axis. V96 camera, editor, granular sculpt/weights/correctives and template controls remain available. V97 entry is dist/V97.html and is isolated from earlier versions.

Origin: geometry derives from the existing registered humanoid-v89 mesh; head contour and skinning changes are project-authored procedural modifications, not scans or inferred hidden geometry. No new downloaded or generated assets.

Remaining review gaps: finger intersections, exact source camera matching, garment finish, source-exact silhouettes, head/hat contour, full collision constraints, broad subdivision/topology tools. These are unresolved; no claim that every imperfection is fixed. Slow playback was not continuously watched at 0.05x.

Migration: extract over complete V93/V94/V95 runtime (or V96). Open /V97.html through local server. Existing custom scenes remain saved; the preset button adopts V97 and retains prior custom JSON. No deployment.

Additional correction: the V97 page now explicitly loads its final-minute director; a missing entry script was discovered in the full-page test. Actor depth and cream actor orientation were adjusted toward the reference. Full-page readiness and visual fidelity are tested separately.

Verified: standalone character-editor-v97.html initializes two actors without page errors; native JSON roundtrip and 121 finite time samples pass. The full documentary V97 page readiness check timed out; integration remains unverified. Asset-register consistency check failed; no new visual assets were introduced. Comparison is silent, six seconds, sampled at 10 fps.
