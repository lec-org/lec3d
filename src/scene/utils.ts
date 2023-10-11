import * as THREE from "three";
import { Renderer } from "../type";
import {
  CreateAxesHelperParams,
  CreateCameraParams,
  CreateLightParams,
  CreateRendererParams,
  SceneAddParams,
} from "./type";

/** 创建场景 */
export const createScene = () => {
  const scene = new THREE.Scene();
  // scene.fog = new THREE.Fog(0x005577, -100, 1300);
  return scene;
};

/** 创建光源 */
export const createLight = ({
  color = 0xffffff,
  colorOpacity = 1,
  ambientLightColor,
  ambientLightColorOpacity,
  directLightColor,
  directLightColorOpacity,
}: CreateLightParams) => {
  // 环境光
  const ambientLight = new THREE.AmbientLight(
    ambientLightColor ?? color,
    ambientLightColorOpacity ?? colorOpacity
  );
  // 平行光
  const directLight = new THREE.DirectionalLight(
    directLightColor ?? color,
    directLightColorOpacity ?? colorOpacity
  );
  directLight.color.setHSL(0.1, 1, 0.6);
  directLight.position.set(-1, 1.75, 1);
  directLight.position.multiplyScalar(30);

  return { ambientLight, directLight };
};

/** 创建相机 */
export const createCamera = ({
  width = window.innerWidth,
  height = window.innerHeight,
  position = { x: 200, y: 150, z: 200 },
  lookAt = { x: 0, y: 0, z: 0 },
}: CreateCameraParams) => {
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 20000);

  //设置相机位置
  camera.position.set(position.x, position.y, position.z);
  //设置相机方向
  camera.lookAt(lookAt.x, lookAt.y, lookAt.z);

  return camera;
};

/** 创建渲染器 */
export const createRenderer = ({
  width = window.innerWidth,
  height = window.innerHeight,
  backgroundColor = 0xffffff,
  backgroundColorOpacity = 0,
}: CreateRendererParams): Renderer => {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setClearColor(backgroundColor, backgroundColorOpacity);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setSize(width, height);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  return renderer;
};

/** 创建辅助坐标轴 */
export const createAxesHelper = ({ length = 0 }: CreateAxesHelperParams) => {
  const axesHelper = new THREE.AxesHelper(length);
  return axesHelper;
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
