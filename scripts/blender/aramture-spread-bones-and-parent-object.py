import bpy
from mathutils import Matrix

objects_to_clone = bpy.context.selected_objects

# Get the armature object
armature = bpy.data.objects.get("Armature")

# SET BONES TO AFFECT
bone_names = "baggageBelt"

# SET OFFSET BETWEEN BONES (in frames)
inc = -12.5





start = 0

if armature:
    # Loop through all the pose bones of the armature
    for index, bone in enumerate(armature.pose.bones):
        
        if "baggageBelt" in bone.name:
            for constraint in bone.constraints:
                if constraint.type == 'FOLLOW_PATH':
                    constraint.use_curve_follow = True
                    constraint.offset = start
                    
                    print("Set bone " + bone.name + " to offset " + str(start))
                    start += inc
                    
                    if objects_to_clone:
                        for obj in objects_to_clone:
                            # clone the object, parent it to the bone, and move it to the bone position
                            
                            new_name = f"baggageBelt.segment.{index + 1:03d}"
                            if "_collider_box" in obj.name:
                                new_name += "_collider_box"
                            
                            new_obj = obj.copy()
                            new_obj.name = new_name
                            
    #                        new_obj.data = object_to_clone.data.copy()
                            bpy.context.collection.objects.link(new_obj)
                            
                            new_obj.parent = armature
                            new_obj.parent_bone = bone.name
                            new_obj.parent_type = 'BONE'
                            
                            bone_matrix = armature.matrix_world @ bone.matrix
                            new_obj.matrix_world = bone_matrix @ Matrix.Rotation(-1.5708, 4, 'X')
                    
else:
    print("Armature not found.")