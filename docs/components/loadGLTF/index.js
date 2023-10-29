import lec3d from "@trickle/lec3d";
const { scene } = lec3d.init();

lec3d.loadGLTF({
  modelPath: "3d_model/scene.gltf",
  options: {
    scale: 30,
    position: {
      x: 100,
      y: 100,
    },
    rotation: {
      x: "30", // 字符串数字代表角度，即 30 度
      z: -0.5,
    },
  },
  callback: (gltf, model) => {
    scene.add(model);
  },
});
