import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
  CSS3DSprite,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { Camera, Renderer } from "../type";
import {
  CreateAxesHelperParams,
  CreateCameraParams,
  CreateCss3dObjectParams,
  CreateCss3dRendererParams,
  CreateLightParams,
  CreateTextParams,
  CreateRendererParams,
  SceneAddParams,
  CreateCss2dRendererParams,
  CreateCss2dObjectParams,
} from "./type";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import helvetikerRegular from "three/examples/fonts/helvetiker_regular.typeface.json";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
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

  // TODO：类型 PerspectiveCamera 报错称没有 position 属性，后续尝试给 threejs 官方反馈一下
  return camera as Camera;
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
    preserveDrawingBuffer: true,
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

/** 创建 CSS 3D 渲染器*/
export const createCss3dRenderer = ({
  scene,
  camera,
}: CreateCss3dRendererParams) => {
  const css3dRenderer = new CSS3DRenderer();
  css3dRenderer.setSize(window.innerWidth, window.innerHeight);
  css3dRenderer.domElement.style.position = "absolute";
  css3dRenderer.domElement.style.top = "0px";
  css3dRenderer.domElement.style.left = "0px";
  css3dRenderer.domElement.style.pointerEvents = "none";
  // 渲染
  const refresh = () => {
    css3dRenderer.render(scene, camera);
  };

  // 挂载
  const mountTo = (element: HTMLElement) => {
    element.appendChild(css3dRenderer.domElement);
  };

  return {
    refresh,
    mountTo,
  };
};

// TODO: 优化，css3dObject和css3dSprite的创建逻辑可以合并复用
/** 创建 css3dObject(不会被模型遮挡)*/
export const createCss3dObject = ({ element }: CreateCss3dObjectParams) => {
  const css3dObject = new CSS3DObject(element);
  css3dObject.position.set(0, 0, 0);
  css3dObject.scale.set(1, 1, 1);

  return css3dObject;
};

/** 创建 CSS 3D 对象 */
export const createCss3dSprite = ({ element }: CreateCss3dObjectParams) => {
  const css3dSprite = new CSS3DSprite(element);
  css3dSprite.position.set(0, 0, 0);
  css3dSprite.scale.set(1, 1, 1);

  return css3dSprite;
};

/** 创建文本模型 */
export const createText = ({
  text,
  color = 0x000000,
  fontSize = 16,
  thickness = 0,
  position = {
    x: 0,
    y: 0,
    z: 0,
  },
}: CreateTextParams) => {
  const loader = new FontLoader();
  const font = loader.parse(helvetikerRegular);

  const material = new THREE.MeshBasicMaterial({ color });
  const textGeometry = new TextGeometry(text, {
    font: font,
    size: fontSize,
    height: thickness, // 字体厚度
  });

  const textMesh = new THREE.Mesh(textGeometry, material);
  textMesh.position.set(position.x, position.y, position.z);
  return textMesh;
};

/** 创建 css 2D 渲染器 */
export const createCss2dRenderer = ({
  scene,
  camera,
}: CreateCss2dRendererParams) => {
  const css2dRenderer = new CSS2DRenderer();
  css2dRenderer.setSize(window.innerWidth, innerHeight);
  document.body.appendChild(css2dRenderer.domElement);
  css2dRenderer.domElement.style.position = "absolute";
  css2dRenderer.domElement.style.top = "0px";
  css2dRenderer.domElement.style.left = "0px";
  css2dRenderer.domElement.style.zIndex = "0";
  css2dRenderer.domElement.style.pointerEvents = "none";

  // 渲染
  const refresh = () => {
    css2dRenderer.render(scene, camera);
  };

  // 挂载
  const mountTo = (element: HTMLElement) => {
    element.appendChild(css2dRenderer.domElement);
  };

  return {
    refresh,
    mountTo,
  };
};

/** 创建 css 2d 对象 */
export const createCss2dObject = ({ content }: CreateCss2dObjectParams) => {
  let formattedContent = content;
  if (typeof content === "string") {
    const domParser = new DOMParser();
    formattedContent = domParser.parseFromString(content, "text/html").body;
  }

  const css2dObject = new CSS2DObject(formattedContent as HTMLElement);
  css2dObject.position.set(0, 0, 0);
  return css2dObject;
};
