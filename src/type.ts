import { Object3D, Object3DEventMap } from "three/src/core/Object3D";

export interface CommonModelOptions {
  scale?: number;
  name?: string;
  position?: {
    x?: number;
    y?: number;
    z?: number;
  };
  rotation?: {
    x?: number | string;
    y?: number | string;
    z?: number | string;
  };
}

export type Renderer = THREE.WebGLRenderer;
export type Camera = THREE.PerspectiveCamera;
export type Scene = THREE.Scene;
export type SceneItem = Object3D<Object3DEventMap>;
