import { GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import { transferRotationValue } from "../utils.js";
// TODO: 当前先只实现导入 GLTF 文件，后续再实现其他类型的文件
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { LoadGLTFParams,LoadFBXParams } from "./type";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
// import { AnimationAction } from 'three/src/animation/AnimationAction.js';
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

/** 导入 GLTF 文件 */
export const loadGLTF = ({
  modelPath,
  options,
  callback,
}: LoadGLTFParams): LoadGLTFReturns => {
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
export const loadFBX = ({ modelPath,options,  callback }: LoadFBXParams) => {
  // const loader = new THREE.ImageLoader();
  // loader.setCrossOrigin("Anonymous"); // 解决跨域问题

  const fbxLoader = new FBXLoader();
  fbxLoader.load(modelPath, (FBX: any) => {
    
    // const model = FBX.scene;
    const posX = options?.position?.x ?? 0;
    const posY = options?.position?.y ?? 0;
    const posZ = options?.position?.z ?? 0;
    const scale = options?.scale ?? 1;
    const rotX = transferRotationValue(options?.rotation?.x);
    const rotY = transferRotationValue(options?.rotation?.y);
    const rotZ = transferRotationValue(options?.rotation?.z);

    FBX.position.set(posX, posY, posZ);
    FBX.scale.set(scale, scale, scale);
    FBX.rotateX(rotX);
    FBX.rotateY(rotY);
    FBX.rotateZ(rotZ);
    // console.log(FBX.position)
    console.log(FBX)
     const id = options?.animation?.index
     const mixer = new THREE.AnimationMixer(FBX)
     const  action = mixer.clipAction(FBX.animations[id||0])
    
    const playAnimation = () => {
      if (FBX.animations.length != 0) {
        action.play()
        mixer.update(0.01)
      }
    }
    const animationStart = () => {
      playAnimation()
      requestAnimationFrame(animationStart)
    }
    callback?.(FBX,animationStart);
  })
};
