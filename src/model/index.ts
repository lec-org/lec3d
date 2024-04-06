import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { transferRotationValue } from "../utils.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { LoadGLTFParams, LoadFBXParams } from "./type";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
// import { AnimationAction } from 'three/src/animation/AnimationAction.js';
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

// TODO: 把各种模型都支持一下，然后把动画播放等方法到一个 control 对象里面
// TODO: 把各个模型都抹平一下，放到一个适配器里面
// TODO: 目前有bug，这里导出的模型并非一定是模型本身，有时候是模型所在的容器（Group），需要改一下不然会很麻烦

/** 导入 GLTF 文件 */
export const loadGLTF = async ({
  modelPath,
  options,
  callback,
}: LoadGLTFParams): Promise<any> => {
  const loader = new THREE.ImageLoader();
  loader.setCrossOrigin("Anonymous"); // 解决跨域问题
  const gltfLoader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    gltfLoader.load(
      modelPath,
      (gltf: GLTF) => {
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

        // 后续不再单独返回模型，而是返回整个 gltf 对象
        callback?.(gltf, model);
        resolve({ gltf, model });
      },
      undefined,
      (err) => {
        reject(err);
      }
    );
  });
};
export const loadFBX = async ({
  modelPath,
  options,
  callback,
}: LoadFBXParams): Promise<any> => {
  const fbxLoader = new FBXLoader();
  fbxLoader.setCrossOrigin("Anonymous");

  return new Promise((resolve, reject) => {
    fbxLoader.load(
      modelPath,
      (FBX: any) => {
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

        const id = options?.animation?.index;
        const mixer = new THREE.AnimationMixer(FBX);
        const action = mixer.clipAction(FBX.animations[id || 0]);

        const playAnimation = () => {
          if (FBX.animations.length != 0) {
            action.play();
            mixer.update(0.01);
          }
        };
        const animationStart = () => {
          playAnimation();
          requestAnimationFrame(animationStart);
        };
        callback?.(FBX, animationStart);
        resolve({
          fbx: FBX,
          model: FBX.children[0],
          control: {
            animationStart,
          },
        });
      },
      undefined,
      (err) => {
        reject(err);
      }
    );
  });
};
