import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

import { ui_debug } from './ui'
import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'



//  █████╗ ███████╗███████╗███████╗████████╗███████╗
// ██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝██╔════╝
// ███████║███████╗███████╗█████╗     ██║   ███████╗
// ██╔══██║╚════██║╚════██║██╔══╝     ██║   ╚════██║
// ██║  ██║███████║███████║███████╗   ██║   ███████║
// ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝
//
// Note the 180 rotation, this is so that position in Blender align with positions in DCL (with Y and Z swapped)

const EXT = ".glb" 


let spaceStation = engine.addEntity()
Transform.create(spaceStation, {
	position: Vector3.create(0, 0, 0),
	scale   : Vector3.create(1, 1, 1),
	rotation: Quaternion.fromEulerDegrees(0, 180, 0)
})
GltfContainer.create(spaceStation, { src: 'models/space-elevator.gltf' })



/* let spaceStationModel = engine.addEntity()
Transform.create(spaceStationModel, {
	position: Vector3.create(0, 0, 0),
	scale   : Vector3.create(1, 1, 1),
	rotation: Quaternion.fromEulerDegrees(0, 180, 0)
})
GltfContainer.create(spaceStationModel, { src: 'models/space-elevator-model' + EXT })

let spaceStationArmature = engine.addEntity()
Transform.create(spaceStationArmature, {
	position: Vector3.create(0, 0, 0),
	scale   : Vector3.create(1, 1, 1),
	rotation: Quaternion.fromEulerDegrees(0, 180, 0)
})
GltfContainer.create(spaceStationArmature, { src: 'models/space-elevator-armature' + EXT })

 */

// ██╗   ██╗██╗
// ██║   ██║██║
// ██║   ██║██║
// ██║   ██║██║
// ╚██████╔╝██║
//  ╚═════╝ ╚═╝
//
// Only used for development, not intended to be present in final scene.

const uiComponent = () => [ui_debug()]
ReactEcsRenderer.setUiRenderer(uiComponent)
