## Devnotes

### Notes to self for production

`.dclignore` contains entries for gltf/bin files, as only the optimised GLB files should be deployed

### Export:

- Current pipeline is Blender: Asset Exporter plugin -> gltf (with draco) -> `glb-optimise.sh` -> glb

- After exporting, run search-replace in Vscode for `-1.png` -> `.png` to account for weird texture duplication bug before optimising

- Then do `cd dcl-scene/models` and `./glb-optimise.sh` to convert gltf to glb

- This gets best possible compression by exporting to gltf with draco, then converting to glb.

- glTF exporter settings are in the `config` dir. Most important thing is animation sampling, due to use of armature constraints.

Deploy to world:

Run from `dcl-scene` folder:

`npm run deploy -- --target-content https://worlds-content-server.decentraland.org`


### ToDo:

- [x] offset securoBot animations
- [x] add more colliders around the ufo to prevent people just jumping on the outer wall
- [x] fix uvs on restricted decal near storage door
- [x] fix collider on midway upper exit steps 
- [x] move warning cone
- [x] Fix normals on train interior
- [x] Add emissive to outside rim of the roof
- [x] Remove grass
