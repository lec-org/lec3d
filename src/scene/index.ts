import { AddControlsParams, Get3dClickEventTargetsParams } from "./type";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import {
  createScene,
  createLight,
  createAxesHelper,
  createCamera,
  createRenderer,
  sceneAdd,
} from "./utils.js";

/** 创建基本三维场景 */
export const init = () => {
  // 创建场景
  const scene = createScene();
  // 创建并添加光源
  const light = createLight();
  scene.add(light.ambientLight);
  // 创建辅助坐标轴
  const axesHelper = createAxesHelper();
  // 创建透视相机
  const camera = createCamera();
  // 创建渲染器
  const renderer = createRenderer();
  // 将上述创建的所有内容加入场景
  sceneAdd({
    scene,
    content: [light.ambientLight, light.dirLight, axesHelper],
  });

  // 挂载
  const mountTo = (element: HTMLElement) => {
    element.appendChild(renderer.domElement);
  };

  // 每一帧自动更新页面内容
  const refresh = () => {
    renderer.render(scene, camera);
  };

  // 为场景添加鼠标控制
  const addControls = ({ callback }: AddControlsParams) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      callback?.(scene, camera);
    });
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
  };
};

// // 创建2d内容渲染器
// export const init2dRenderer = () => {
//   const objRenderer = new CSS2DRenderer();
//   objRenderer.setSize(window.innerWidth, window.innerHeight);
//   objRenderer.domElement.style.position = "absolute";
//   objRenderer.domElement.style.top = "0px";

//   objRenderer.domElement.style.pointerEvents = "none";
//   return objRenderer;
// };

// export const mount2dObject = (
//   content: string,
//   scene: THREE.Scene,
//   options: Options
// ) => {
//   const div = document.createElement("div");
//   div.innerHTML = `<div class="tag">${content}</div>`;

//   var label = new CSS2DObject(div);
//   //设置模型对象CSS2DObject在场景位置
//   //标签标注boxMesh模型所以复制boxMesh的位置
//   label.position.set(
//     options.position?.x || 0,
//     options.position?.y || 0,
//     options.position?.z || 0
//   );
//   //适当偏移标签
//   label.position.y += 300;
//   scene.add(label);
//   return label;
//   // scene.add(label)
// };

/** 鼠标点击，获取点击射线穿透的所有物体 */
export const get3dClickEventTargets = ({
  scene,
  camera,
  event,
}: Get3dClickEventTargetsParams) => {
  const meshArr: any[] = [];
  const pointer = new THREE.Vector2();

  const rayCaster = new THREE.Raycaster();
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
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
