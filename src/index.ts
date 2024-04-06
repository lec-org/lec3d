import { loadGLTF, loadFBX } from "./model/index.js";
import { init, initCss2d, initCss3d } from "./scene/index.js";
import { transferRotationValue } from "./utils.js";

const lec3d = {
  loadGLTF,
  init,
  initCss3d,
  initCss2d,
  loadFBX,
  transferRotationValue,
};

export default lec3d;
