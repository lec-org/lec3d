import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CreateControlsParams, SceneAddParams } from "./type";

/** 创建场景 */
export const createScene = () => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x005577, -100, 1300);
  return scene;
};

/** 创建光源 */
export const createLight = () => {
  // 环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  // 平行光
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.color.setHSL(0.1, 1, 0.6);
  dirLight.position.set(-1, 1.75, 1);
  dirLight.position.multiplyScalar(30);

  return { ambientLight, dirLight };
};

/** 创建相机 */
export const createCamera = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
  //设置相机位置
  camera.position.set(200, 150, 200);
  //设置相机方向
  camera.lookAt(0, 0, 0);

  return camera;
};

/** 创建渲染器 */
export const createRenderer = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setClearColor(0x005577, 0.6);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setSize(width, height);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  return renderer;
};

/** 创建辅助坐标轴 */
export const createAxesHelper = () => {
  const axesHelper = new THREE.AxesHelper(1000);
  return axesHelper;
};

/** 创建控制，如鼠标操作等 */
export const createControls = ({
  scene,
  camera,
  element,
  callback,
}: CreateControlsParams) => {
  if (!element) {
    throw "error: no container element!";
  }
  const controls = new OrbitControls(camera, element);
  controls.addEventListener("change", () => {
    // renderer.render(scene, camera);
    callback?.(scene, camera);
  });
};

/** 给场景添加内容 */
export const sceneAdd = ({ scene, content }: SceneAddParams) => {
  if (content instanceof Array) {
    content.forEach((item) => {
      scene.add(item);
    });
  } else {
    scene.add(content);
  }
};
