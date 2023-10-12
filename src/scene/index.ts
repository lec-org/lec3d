import { AddControlsParams, InitCss3dParams, InitParams } from "./type";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import {
  createScene,
  createLight,
  createAxesHelper,
  createCamera,
  createRenderer,
  sceneAdd,
  createCss3dRenderer,
  createCss3dObject,
  createPlane,
  createCss3dSprite,
} from "./utils.js";

/** 创建基本三维场景 */
export const init = (params: InitParams) => {
  // TODO: 完善 createScene 的自定义参数支持
  // 创建场景
  const scene = createScene();
  // 创建并添加光源
  const light = createLight({ ...params?.lightConfigs });
  scene.add(light.ambientLight);
  // 创建辅助坐标轴
  const axesHelper = createAxesHelper({ ...params?.axesHelperConfigs });
  // 创建透视相机
  const camera = createCamera({ ...params?.cameraConfigs });
  // 创建渲染器
  const renderer = createRenderer({ ...params?.rendererConfigs });
  // 创建地面

  // 将上述创建的所有内容加入场景
  sceneAdd({
    scene,
    content: [light.ambientLight, light.directLight, axesHelper],
  });

  // 挂载
  const mountTo = (element: HTMLElement) => {
    element.appendChild(renderer.domElement);
  };

  // 每一帧自动更新页面内容
  const refresh = () => {
    renderer.render(scene, camera);
  };

  // 添加控制, 使鼠标能够控制相机视角
  const addControls = ({ callback }: AddControlsParams) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      callback?.(scene, camera);
    });
  };

  // 鼠标点击，获取点击射线穿透的所有物体
  const getClickEventTargets = (event: MouseEvent) => {
    const meshArr: Array<THREE.Object3D<THREE.Object3DEventMap>> = [];
    const pointer = new THREE.Vector2();
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const rayCaster = new THREE.Raycaster();
    rayCaster.setFromCamera(pointer, camera);

    scene.children?.forEach((child) => {
      if (child.isObject3D) {
        meshArr.push(child);
      }
    });

    const targets = rayCaster.intersectObjects(meshArr);
    // callback?.(targets);
    return targets;
  };

  // 内部方法, 每一帧自动刷新
  const __autoRefresh = () => {
    refresh();
    window.requestAnimationFrame(__autoRefresh);
  };
  __autoRefresh();

  return {
    renderer,
    camera,
    scene,
    mountTo,
    refresh,
    addControls,
    getClickEventTargets,
  };
};

/** 创建 css 3d 内容 */
export const initCss3d = ({ scene, camera }: InitCss3dParams) => {
  const { refresh, mountTo } = createCss3dRenderer({ scene, camera });

  const __autoRefresh = () => {
    refresh();
    window.requestAnimationFrame(__autoRefresh);
  };
  __autoRefresh();

  return {
    refresh,
    mountTo,
    createCss3dObject,
    createCss3dSprite,
    createPlane,
  };
};
