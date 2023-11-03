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
  animation?:{
    index?:number
  }
}

export type Position = {
  x?: number;
  y?: number;
  z?: number;
};

export type Renderer = THREE.WebGLRenderer;
export type Camera = THREE.Camera & Position;
export type Scene = THREE.Scene;
export type SceneItem = Object3D<Object3DEventMap>;
