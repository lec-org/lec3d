import lec3d from "@trickle/lec3d";
const { scene, renderer, camera, mountTo, refresh, addControls } = lec3d.init({
  axesHelperConfigs: {
    length: 10000,
  },
});

mountTo(yourElement);
