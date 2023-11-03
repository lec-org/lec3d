import {
  AddControlsParams,
  CreateCss2dObjectParams,
  InitCss2dParams,
  InitCss2dReturns,
  InitCss3dParams,
  InitCss3dReturns,
  InitParams,
  InitReturns,
} from "./type";
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
  createCss3dSprite,
  createText,
  createCss2dRenderer,
  createCss2dObject,
} from "./utils.js";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { Group, Raycaster, Vector2 } from "three";

/** 创建基本三维场景 */
export const init = (params: InitParams): InitReturns => {
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
  // TODO: 创建地面

  // 将上述创建的所有内容加入场景
  sceneAdd({
    scene,
    content: [light.ambientLight, light.directLight, axesHelper],
  });

  // TODO：下述方法后续移入 utils 中， index 中做到尽量不额外创建函数
  // 挂载
  const mountTo = (element: HTMLElement) => {
    element.appendChild(renderer.domElement);
  };

  // 每一帧自动更新页面内容
  const refresh = () => {
    renderer.render(scene, camera);
  };

  // 添加控制, 使鼠标能够控制相机视角
  const addControls = (params?: AddControlsParams) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      params?.callback?.(scene, camera);
    });
    return controls;
  };

  // 射线拾取，鼠标点击，获取点击射线穿透的所有物体
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

/** 创建 css 3D 内容 */
export const initCss3d = ({
  scene,
  camera,
}: InitCss3dParams): InitCss3dReturns => {
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
    createText,
  };
};

/** 创建 css 2D 内容 */
export const initCss2d = ({
  scene,
  camera,
}: InitCss2dParams): InitCss2dReturns => {
  const { refresh, mountTo } = createCss2dRenderer({ scene, camera });
  // 观察者队列
  const css2dObjectList: Array<CSS2DObject> = [];

  // 创建 css 2D 对象，封装一层，方便加入观察者队列
  const wrappedCreateCss2dObject = (params: CreateCss2dObjectParams) => {
    // TODO: 删除对象后，考虑如何移出观察者队列
    const css2dObject = createCss2dObject(params);
    if (params.occludable) {
      css2dObjectList.push(css2dObject);
    }
    return css2dObject;
  };

  // TODO: 后续将方法移入 utils 中，并提供配置项控制是否开启遮挡（默认开启）
  // 射线投影
  const raycasterCollisionDetect = (
    raycaster: Raycaster,
    css2dObject: CSS2DObject
  ) => {
    let meshArr: Array<THREE.Object3D<THREE.Object3DEventMap>> = [];
    const object3dPosition = css2dObject.position.clone();
    // 计算目标到相机的距离
    // 需要复制坐标，否则可能会计算不准
    const distance = object3dPosition.distanceTo(camera.position);
    // 二维化转换，即空间向量变为平面投影 (NDC）
    const object2dPosition = object3dPosition.project(
      camera
    ) as unknown as Vector2;

    // 从镜头处发射向量
    raycaster.setFromCamera(object2dPosition, camera);

    scene.children?.forEach((child) => {
      if (child instanceof Group) {
        meshArr.push(child);
      }
    });

    if (meshArr.length > 0) {
      const intersects = raycaster.intersectObjects(meshArr);
      if (intersects.length === 0) {
        // 如果没有被遮挡，则显示
        css2dObject.element.style.visibility = "visible";
      } else {
        // 最近的相交模型的距离
        const minDistance = intersects?.[0]?.distance;
        if (typeof minDistance === "number" && minDistance < distance) {
          // 指定的模型到相机的距离 < 最近的相交相机的距离，说明被遮挡
          css2dObject.element.style.visibility = "hidden";
        } else {
          css2dObject.element.style.visibility = "visible";
        }
      }
      meshArr = [];
    }
  };

  // TODO: 这个方法可以暴露，给用户操作
  // 对所有模型进行射线投影, 处理遮挡效果
  const handleOcclusionVisibility = () => {
    // TODO: 这里或许可以优化为单例模式的
    let raycaster = new THREE.Raycaster();
    css2dObjectList.forEach((obj) => {
      raycasterCollisionDetect(raycaster, obj);
    });
    raycaster = null as any;
  };

  const __autoRefresh = () => {
    // TODO: 后续提供配置项，选择性开启
    handleOcclusionVisibility();
    refresh();
    window.requestAnimationFrame(__autoRefresh);
  };
  __autoRefresh();

  return {
    refresh,
    mountTo,
    createCss2dObject: wrappedCreateCss2dObject,
  };
};
