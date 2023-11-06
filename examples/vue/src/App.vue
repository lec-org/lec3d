<template>
  <div ref="el" id="three"></div>
  <div>Hello</div>
</template>

<script setup lang="ts">
// import * as lec3d from "@trickle/lec3d";
import lec3d from "../../../dist/index.js";
import { onMounted, ref } from "vue";
const el = ref();

onMounted(() => {
  const {
    scene,
    renderer,
    getClickEventTargets,
    camera,
    mountTo,
    refresh,
    clear,
    unload,
    addControls,
  } = lec3d.init({
    axesHelperConfigs: {
      length: 10000,
    },
  });
  // 创建css3d对象
  const {
    mountTo: mountCss3dTo,
    createCss3dObject,
    createText,
  } = lec3d.initCss3d({ scene, camera });
  // 创建css2d对象
  const { mountTo: mountCss2dTo, createCss2dObject } = lec3d.initCss2d({
    scene,
    camera,
  });

  const textMesh = createText({
    text: "你好",
    options: {
      rotation: {
        x: "-30",
      },
    },
  });
  scene.add(textMesh);

  let value = 1;
  const content = document.createElement("div");
  content.innerText = "" + value;
  const css2dObject = createCss2dObject({ content });
  scene.add(css2dObject);

  setInterval(() => {
    content.innerText = "" + ++value;
  }, 300);

  const controls = addControls();

  lec3d.loadFBX({
    modelPath: "3d_model/mythra.fbx",
    options: {
      scale: 0.01,
      position: {
        x: 10,
        y: 10,
      },
      animation: {
        index: 1,
      },
    },
    callback: (FBX: any, animationStart: Function) => {
      // camera.lookAt(model.position)
      scene.add(FBX);
      animationStart();
    },
  });

  setTimeout(() => {
    camera.position.x++;
  }, 100);

  mountCss2dTo(el.value);
  mountCss3dTo(el.value);
  mountTo(el.value);
});
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
#three {
  width: 100vw;
  height: 100vh;
}
</style>
