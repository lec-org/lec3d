import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { Renderer, SceneItem } from "./../type";
import { Scene, Camera, Intersection, Object3D, Object3DEventMap } from "three";
import {
  CSS3DObject,
  CSS3DSprite,
} from "three/examples/jsm/renderers/CSS3DRenderer";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export interface InitSceneParams {
  /** 辅助坐标轴 */
  axesHelperConfigs?: {
    enable: boolean;
    size: number;
  };
}

export interface InitSceneReturns {
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
}

export interface AddControlsParams {
  callback?: (scene: Scene, camera: Camera) => void;
}
export interface CreateControlsParams {
  scene: Scene;
  camera: Camera;
  element: HTMLElement;
  callback: Function;
}
export interface SceneAddParams {
  scene: Scene;
  content: Array<SceneItem> | SceneItem;
}

export interface CreateAxesHelperParams {
  length?: number;
}

export interface CreateLightParams {
  color?: number | string;
  colorOpacity?: number;
  ambientLightColor?: number | string;
  ambientLightColorOpacity?: number;
  directLightColor?: number | string;
  directLightColorOpacity?: number;
}

export interface CreateCameraParams {
  width?: number;
  height?: number;
  position?: {
    x: number;
    y: number;
    z: number;
  };
  lookAt?: {
    x: number;
    y: number;
    z: number;
  };
}

export interface CreateRendererParams {
  width?: number;
  height?: number;
  backgroundColor?: number | string;
  backgroundColorOpacity?: number;
}

export type InitParams = {
  lightConfigs?: CreateLightParams;
  cameraConfigs?: CreateCameraParams;
  axesHelperConfigs?: CreateAxesHelperParams;
  rendererConfigs?: CreateRendererParams;
} | null;

export type InitReturns = {
  renderer: Renderer;
  camera: Camera;
  scene: Scene;
  mountTo: (el: HTMLElement) => void;
  refresh: () => void;
  addControls: (params?: AddControlsParams) => OrbitControls;
  getClickEventTargets: (
    e: MouseEvent
  ) => Intersection<Object3D<Object3DEventMap>>[];
  clear: () => void;
  unload: () => void;
};
export interface CreateCss3dRendererParams {
  scene: Scene;
  camera: Camera;
}

export interface CreateCss3dObjectParams {
  element: HTMLElement;
}
export interface CreatePlaneParams extends CreateCss3dObjectParams {
  angle: string | number;
}

export interface InitCss3dParams {
  scene: Scene;
  camera: Camera;
}

export type InitCss3dReturns = {
  refresh: () => void;
  mountTo: (element: HTMLElement) => void;
  createCss3dObject: ({ element }: CreateCss3dObjectParams) => CSS3DObject;
  createCss3dSprite: ({ element }: CreateCss3dObjectParams) => CSS3DSprite;
  createText: ({
    text,
    options,
  }: CreateTextParams) => THREE.Mesh<
    TextGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;
};

export interface CreateCanvasPlaneParams {
  element: HTMLElement;
  callback: (
    plane: THREE.Mesh<
      THREE.PlaneGeometry,
      THREE.MeshBasicMaterial,
      THREE.Object3DEventMap
    >
  ) => void;
}

export interface CreateTextParams {
  text: string;
  options?: {
    color?: number | string;
    fontSize?: number;
    fontFamilyFile?: string;
    thickness?: number;
    position?: {
      x: number;
      y: number;
      z: number;
    };
    rotation?: {
      x?: number | string;
      y?: number | string;
      z?: number | string;
    };
  };
}

// TODO: 后续有改动再调整
export type InitCss2dParams = InitCss3dParams;
export type InitCss2dReturns = {
  refresh: () => void;
  mountTo: (element: HTMLElement) => void;
  createCss2dObject: (params: CreateCss2dObjectParams) => CSS2DObject;
};

export type CreateCss2dRendererParams = CreateCss3dRendererParams;

export interface CreateCss2dObjectParams {
  content: string | HTMLElement;
  style?: Record<string, string | number>;
  occludable?: boolean;
}
