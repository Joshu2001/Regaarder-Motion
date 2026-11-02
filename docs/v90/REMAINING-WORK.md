# Remaining work after V90

1. Character surface: replace classified body-face clothing shells with authored seam loops, closed sleeve/trouser openings, cloth thickness and independently fitted garment topology. Add elbow/shoulder/hip/knee pose correctives. Keep original control mesh, rig and weights as immutable source, sparse edit layers per instance.
2. Contacts: editable elbow/knee pole targets, anatomical limits, seat/foot surface constraints and hand clearance/collision tests. Current analytic IK reaches targets but does not resolve mesh intersections or contact pressure.
3. Modeling workspace: selection sets, vertex/edge/face picking, mirror tools, brush displacement and undoable mesh operations. Add staged GLB import with geometry/material/bone validation and local asset identities. Existing bone transforms do not constitute sculpting or general model import.
4. Final look: physically meaningful soft emitter/contact shading and precise source-specific silhouette/light/camera fitting, then volumetric atmosphere where performance allows. V90 uses filtered directional shadows and a 2.5D smoke plane; thin hat parts currently do not cast shadows.
5. Performance: measure actual mobile devices, geometry and shadow budgets, smoke updates, caching/disposal and export cancellation. Desktop SwiftShader checks are functional checks, not hardware performance evidence.

Work in this order on one reusable actor/wardrobe rig before propagating it across scenes. Review still silhouettes first, then contact poses, then continuous motion; source coverage stays at15:00 during refinement.
