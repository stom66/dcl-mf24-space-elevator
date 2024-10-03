// ███████╗ ██████╗███████╗███╗   ██╗███████╗    ██████╗  █████╗ ██████╗ ███████╗███╗   ██╗████████╗
// ██╔════╝██╔════╝██╔════╝████╗  ██║██╔════╝    ██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗  ██║╚══██╔══╝
// ███████╗██║     █████╗  ██╔██╗ ██║█████╗      ██████╔╝███████║██████╔╝█████╗  ██╔██╗ ██║   ██║
// ╚════██║██║     ██╔══╝  ██║╚██╗██║██╔══╝      ██╔═══╝ ██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║   ██║
// ███████║╚██████╗███████╗██║ ╚████║███████╗    ██║     ██║  ██║██║  ██║███████╗██║ ╚████║   ██║
// ╚══════╝ ╚═════╝╚══════╝╚═╝  ╚═══╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
//
// Note the 180 rotation, this is so that position in Blender align with positions in DCL (with Y and Z swapped)

import { Settings } from "./_settings";

//import * as utils from "@dcl/ecs-scene-utils";
//import * as ui from "@dcl/ui-scene-utils";
//import * as dcldash from "dcldash";

const _scene = new Entity("_scene");
_scene.addComponent(Settings.SCENE_TRANSFORM);
engine.addEntity(_scene);

// ███████╗██╗  ██╗ █████╗ ███╗   ███╗██████╗ ██╗     ███████╗     █████╗ ███████╗███████╗███████╗████████╗
// ██╔════╝╚██╗██╔╝██╔══██╗████╗ ████║██╔══██╗██║     ██╔════╝    ██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝
// █████╗   ╚███╔╝ ███████║██╔████╔██║██████╔╝██║     █████╗      ███████║███████╗███████╗█████╗     ██║
// ██╔══╝   ██╔██╗ ██╔══██║██║╚██╔╝██║██╔═══╝ ██║     ██╔══╝      ██╔══██║╚════██║╚════██║██╔══╝     ██║
// ███████╗██╔╝ ██╗██║  ██║██║ ╚═╝ ██║██║     ███████╗███████╗    ██║  ██║███████║███████║███████╗   ██║
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝
//

let arm = new Entity();
arm.addComponent(new GLTFShape("models/armature.gltf"));
arm.addComponent(
	new Transform({
		position: new Vector3(0, 0, 0),
		scale: new Vector3(1, 1, 1),
		rotation: Quaternion.Euler(0, 0, 0),
	})
);
arm.setParent(_scene);

/* let spaceElevator = new Entity();
spaceElevator.addComponent(new GLTFShape("models/space-elevator.gltf"));
spaceElevator.addComponent(
	new Transform({
		position: new Vector3(0, 0, 0),
		scale: new Vector3(1, 1, 1),
		rotation: Quaternion.Euler(0, 0, 0),
	})
);
spaceElevator.setParent(_scene); */

/* let conveyor = new Entity();
conveyor.addComponent(new GLTFShape("models/conveyor-test.gltf"));
conveyor.addComponent(
	new Transform({
		position: new Vector3(-8, 0, -8),
		scale: new Vector3(1, 1, 1),
		rotation: Quaternion.Euler(0, 0, 0),
	})
);
conveyor.setParent(_scene); */
