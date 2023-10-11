<template>
  <div ref="el" id="three"></div>
</template>


<script setup lang=ts>
  // import * as lec3d from "@trickle/lec3d";
  import lec3d from '../../../dist/index.js'
  import { onMounted, ref } from 'vue'

  const el = ref()
  onMounted(() => {
    const { scene, renderer, camera, mountTo, refresh } = lec3d.init()
    // el.value.appendChild(renderer.domElement)

    lec3d.loadGLTF({ 
      modelPath: '3d_model/scene.gltf', 
      options: { scale: 30  }, 
      callback: (gltf, model) => {
        scene.add(model)
    }})

    lec3d.createControls({
      scene,
      camera,
      element: renderer.domElement,
      callback: (scene, camera) => {
        console.log(scene, camera)
      }
    })

    mountTo(el.value)
  })
</script>