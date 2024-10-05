// ███████╗ ██████╗███████╗███╗   ██╗███████╗    ██████╗  █████╗ ██████╗ ███████╗███╗   ██╗████████╗
// ██╔════╝██╔════╝██╔════╝████╗  ██║██╔════╝    ██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗  ██║╚══██╔══╝
// ███████╗██║     █████╗  ██╔██╗ ██║█████╗      ██████╔╝███████║██████╔╝█████╗  ██╔██╗ ██║   ██║
// ╚════██║██║     ██╔══╝  ██║╚██╗██║██╔══╝      ██╔═══╝ ██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║   ██║
// ███████║╚██████╗███████╗██║ ╚████║███████╗    ██║     ██║  ██║██║  ██║███████╗██║ ╚████║   ██║
// ╚══════╝ ╚═════╝╚══════╝╚═╝  ╚═══╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
//
// Note the 180 rotation, this is so that position in Blender align with positions in DCL (with Y and Z swapped)

//import { Settings } from './_settings'

import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

//import { movePlayerTo } from '~system/RestrictedActions'

// ███████╗██╗  ██╗ █████╗ ███╗   ███╗██████╗ ██╗     ███████╗     █████╗ ███████╗███████╗███████╗████████╗
// ██╔════╝╚██╗██╔╝██╔══██╗████╗ ████║██╔══██╗██║     ██╔════╝    ██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝
// █████╗   ╚███╔╝ ███████║██╔████╔██║██████╔╝██║     █████╗      ███████║███████╗███████╗█████╗     ██║
// ██╔══╝   ██╔██╗ ██╔══██║██║╚██╔╝██║██╔═══╝ ██║     ██╔══╝      ██╔══██║╚════██║╚════██║██╔══╝     ██║
// ███████╗██╔╝ ██╗██║  ██║██║ ╚═╝ ██║██║     ███████╗███████╗    ██║  ██║███████║███████║███████╗   ██║
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝
//

// Armature
/* let arm = engine.addEntity()
Transform.create(arm, {
	position: Vector3.create(0, 0, 0),
	scale: Vector3.create(1, 1, 1),
	rotation: Quaternion.fromEulerDegrees(0, 180, 0)
})
GltfContainer.create(arm, { src: 'models/armature.gltf' }) */

// Elevator

let elevator = engine.addEntity()
Transform.create(elevator, {
	position: Vector3.create(0, 0, 0),
	scale: Vector3.create(1, 1, 1),
	rotation: Quaternion.fromEulerDegrees(0, 180, 0)
})
GltfContainer.create(elevator, { src: 'models/space-elevator.gltf' })
