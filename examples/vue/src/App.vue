<template>
  <div ref="el" id="three"></div>
</template>


<script setup lang=ts>
  import * as lec3d from "@trickle/lec3d";
  import { onMounted, ref } from 'vue'

  const el = ref()
  onMounted(() => {
    console.log('3d', lec3d)
    const { scene, renderer, camera } = lec3d.init()
    el.value.appendChild(renderer.domElement)
   
    lec3d.loadGLTF({ 
      modelPath: '3d_model/scene.gltf', 
      options: { scale: 10, position: { z: 1, x: 100, y: 100} }, 
      callback: (gltf, model) => {
        console.log(gltf, model)
        scene.add(model)
    }})

    lec3d.createControls({
      scene,
      camera,
      element: renderer.domElement,
      callback: () => {
        console.log(123)
      }
    })
  })
</script>