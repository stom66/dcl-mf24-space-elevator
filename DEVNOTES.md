## Devnotes

### Notes to self for production


### Export:

- Current pipeline is Blender: Asset Exporter plugin -> gltf (with draco) -> `glb-optimise.sh` -> glb

- After exporting, run search-replace in Vscode for `-1.png` -> `.png` to account for weird texture duplication bug

- Then do `cd dcl-scene/models` and `./glb-optimise.sh` to convert gltf to glb
- This gets best possible compression by exporting to gltf with draco, then converting to glb.

- glTF exporter settings are in the `config` dir. Most important thing is animation sampling, due to use of armature constraints.

Deploy to world:

Run from `dcl-scene` folder:

`npm run deploy -- --target-content https://worlds-content-server.decentraland.org`
