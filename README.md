### `dcl-mf24-space-elevator`

# Space Elevator
## Decentraland Music Festival 2024

This respository contains my submission for the Decentraland Music Festival 2024. 

It contains the final exported asset, a demo scene, and all of the source assets used to create the scene.

### Live Demo: [stom.dcl.eth](https://decentraland.org/play/?NETWORK=mainnet&position=0%2C0&ealm=stom.dcl.eth)

### GLB File: [dcl-scene/models/space-elevator.glb](https://github.com/stom66/dcl-mf24-space-elevator/blob/main/dcl-scene/models/space-elevator.glb)

> Note: the model transforms require a 180 degree rotation on the Y axis
	


---

## Demo scene

1) Clone this repo in your favourite way: via GitHub Desktop, or by running the following in a terminal
	```
	git clone https://github.com/stom66/dcl-mf24-space-elevator
	```
1) Once complete, open the project folder in a terminal or in VSCode and run the following:
	```
    cd dcl-scene
	npm install
	npm run start
	```

---

## Repository Overview

This repository is split in the following folders:

* `/assets` - contains all assets and textures before being exported to `glTF`. This includes all `blend` files, as well as full-size source textures.
    * `/assets/models` - source files for each model in the scene, including full res textures
    * `/assets/fonts` - any fonts used in the scene and accompanying media
    * `/assets/tex` - asset agnostic textures used across the scene
* `/config` - useful info such as import/export settings, UVPackMaster Presets, shader templates
* `/dcl-scene` - the DCL scene to be deployed. Exported glTF files are in `/dcl-scene/models` along with a `tex` folder of optimised textures
* `/reference` - screenshots, previs, reference pictures used during asset creation
* `/scripts` - various bash utility scripts

---

## License

This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/4.0/, see the license included in this repository, or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.