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

export interface Get3dClickEventTargetsParams {
  scene: Scene;
  camera: Camera;
  event: MouseEvent;
}

export interface AddControlsParams {
  callback?: (scene: Scene, camera: Camera) => void;
}

export interface SceneAddParams {
  scene: Scene;
  content: Array<SceneItem> | SceneItem;
}
