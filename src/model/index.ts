import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
// TODO: 当前先只实现导入 GLTF 文件，后面要用别的类型再加
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { LoadGLTFParams } from "./type";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

/** 导入 GLTF 文件 */
export const loadGLTF = ({ modelPath, options, callback }: LoadGLTFParams) => {
  const loader = new THREE.ImageLoader();
  loader.setCrossOrigin("Anonymous"); // 解决跨域问题

  const gltfLoader = new GLTFLoader();
  gltfLoader.load(modelPath, (gltf: GLTF) => {
    const model = gltf.scene;

    const x = options?.position?.x ?? 0;
    const y = options?.position?.y ?? 0;
    const z = options?.position?.z ?? 0;
    const scale = options?.scale ?? 1;

    model.position.set(x, y, z);
    model.scale.set(scale, scale, scale);

    callback?.(gltf, model);
  });
};
