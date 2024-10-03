import bpy

# Iterate over all objects in the scene
for obj in bpy.data.objects:
    # Check if the object has a mesh
    if obj.type == 'MESH':
        # Rename the mesh to match the object's name
        obj.data.name = obj.name
        print(f"Renamed mesh to: {obj.data.name}")
