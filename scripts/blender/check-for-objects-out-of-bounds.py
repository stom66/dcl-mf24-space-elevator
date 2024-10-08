import bpy
from mathutils import Vector

max_x = 48
max_y = 48
max_z = 65

# Recursive function to check objects in a collection and its subcollections
def check_objects_in_collection(collection):
    for obj in collection.objects:

        # Get world positions of all bounding box coords        
        world_matrix = obj.matrix_world        
        bbox_world = [world_matrix @ Vector(corner) for corner in obj.bound_box]

        if any(co[0] > max_x  or co[1] > max_y or co[1] < 0 or co[2] > max_z for co in bbox_world):
            obj.select_set(True)
    
    for child_collection in collection.children:
        check_objects_in_collection(child_collection)


# Check the active collection and all its subcollections
active_collection = bpy.context.view_layer.active_layer_collection.collection
check_objects_in_collection(active_collection)
