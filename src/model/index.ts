import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
// TODO: 当前先只实现导入 GLTF 文件，后面要用别的类型再加
import { transferRotationValue } from "./utils.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { LoadGLTFParams } from "./type";
import * as THREE from "three";
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

    const posX = options?.position?.x ?? 0;
    const posY = options?.position?.y ?? 0;
    const posZ = options?.position?.z ?? 0;
    const scale = options?.scale ?? 1;
    const rotX = transferRotationValue(options?.rotation?.x);
    const rotY = transferRotationValue(options?.rotation?.y);
    const rotZ = transferRotationValue(options?.rotation?.z);

    model.position.set(posX, posY, posZ);
    model.scale.set(scale, scale, scale);
    model.rotateX(rotX);
    model.rotateY(rotY);
    model.rotateZ(rotZ);

    callback?.(gltf, model);
  });
};
