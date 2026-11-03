# V103 refinement

Source: original documentary 900.000–905.630 seconds. Local time = source time − 900.

## Implemented

- Shorter, numerically parameterized head/neck profile; lower skull height/depth,
  jaw taper/chin projection and corrected blue head pitch. Rounded skull cap.
- Cream root turns less toward the camera during contact; hat tilt and roll revised.
- Actor-scoped pale back rim, restrained cream fill and stronger blue front fill.
- Contact starts later and release lasts longer to better follow the reference.
- Less extreme finger curls, bounded paired finger capsule correction and a UI toggle.
  The correction rolls back if its measured capsule overlap becomes worse.
- Pose-volume preservation also responds to arm elevation away from the torso.
- A local 2,950-vertex underarm shirt cleanup is stored as an ordinary editable
  sculpt layer. Each offset is capped at 3 mm; weights and the source mesh are retained.
- Previous V102 defaults are retained in previous-scenes-v102.js.

## Validation

Contact tests cover approach, hold, release and repeated same-time renders. During
the sampled hold, the capsule overlap score fell from approximately 1.135e-5 m²
to 6.424e-10 m²; this is a simplified proxy, not a triangle-intersection guarantee.
Palm target error remains below 1.9 mm. See contact.json.

Raised-arm deformation checks show zero sampled shoulder triangles compressed
below 10% of rest area with correction enabled (two with linear skinning).
Neck-turn and neutral samples are finite and have no severely compressed triangles.
These checks preceded the final skull-cap cosmetic adjustment.

Save/reload, invalid-import preservation, color/shape/finger editing, frame stepping,
slow playback and GLB structural checks passed. Native JSON is authoritative:
animated volume and paired finger corrections are not baked into GLB morph targets.
Subdivision cache and corrective/weight retention checks passed.

The comparison is a silent 12 fps review render, paired with nearest source frames
from the original 30 fps footage. Source/local timestamps appear in the header.
It is not a claim of continuous 0.05× inspection or frame-perfect reconstruction.

## Remaining differences

The reference's exact mesh, camera and lighting cannot be uniquely recovered from
these images. Character spacing, shoulder/back silhouette, neck junction shading,
the precise hat profile and finger contact surfaces still differ. The cream underarm
crease is still stronger than the reference. This release improves the identified
defects but is not an exact match or a general collision/physics system.

No deployment or GitHub push was performed.
