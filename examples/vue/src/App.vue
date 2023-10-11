<template>
  <div ref="el" id="three"></div>
</template>


<script setup lang=ts>
  // import * as lec3d from "@trickle/lec3d";
  import lec3d from '../../../dist/index.js'
  import { onMounted, ref } from 'vue'

  const el = ref()
  onMounted(() => {
    const { scene, renderer, camera, mountTo, refresh, addControls } = lec3d.init({})
    // el.value.appendChild(renderer.domElement)

    addControls({
      callback: (scene, camera) => {
        console.log(scene, camera)
      }
    })

    lec3d.loadGLTF({ 
      modelPath: '3d_model/scene.gltf', 
      options: {
        scale: 30,
        position: {
          x: 100,
          y: 100
        },
        rotation: {
          x: '30',
          z: -0.5
        },
      }, 
      callback: (gltf, model) => {
        scene.add(model)
    }})


    mountTo(el.value)
  })
</script>