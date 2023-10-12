import { SceneItem } from "./../type";
import { Scene, Camera } from "three";

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
  color?: number | string;
  fontSize?: number;
  thickness?: number;
  position?: {
    x: number;
    y: number;
    z: number;
  };
}
