import bpy

# Iterate over all objects in the scene
for obj in bpy.data.objects:
    
    # Check if the object's name contains '_collider'
    if '_collider' in obj.name and obj.type == 'MESH':
        
        # 1. Remove all materials
        obj.data.materials.clear()
        print(f"Removed materials from {obj.name}")
        
        # 2. Add a Triangulate modifier if it doesn't already exist
        triangulate_exists = any(mod.type == 'TRIANGULATE' for mod in obj.modifiers)
        if not triangulate_exists:
            triangulate_modifier = obj.modifiers.new(name="Triangulate", type='TRIANGULATE')
            print(f"Added Triangulate modifier to {obj.name}")
        
        # 3. Set the viewport display mode to Wireframe
        obj.display_type = 'WIRE'
        #print(f"Set {obj.name} viewport display mode to WIRE")
        
        #4. Set shading to flat
        for face in obj.data.polygons:
            face.use_smooth = False
        #print("Set shading to flat")
