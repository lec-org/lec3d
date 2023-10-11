// 暂时先从这里导出
import { loadGLTF } from "./model/index.js";
import { get3dClickEventTargets, createControls, init } from "./scene/index.js";
import * as THREE from "three";

const lec3d = {
  THREE,
  loadGLTF,
  get3dClickEventTargets,
  createControls,
  init,
};

export default lec3d;
