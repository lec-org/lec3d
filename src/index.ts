import { loadGLTF } from "./model/index.js";
import { get3dClickEventTargets, init } from "./scene/index.js";
import * as THREE from "three";

const lec3d = {
  THREE,
  loadGLTF,
  get3dClickEventTargets,
  init,
};

export default lec3d;
