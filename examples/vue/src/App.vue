<template>
  <div ref="el" id="three"></div>
</template>


<script setup lang=ts>
  // import * as lec3d from "@trickle/lec3d";
  import lec3d from '../../../dist/index.js'
  import * as THREE from 'three'
  import { onMounted, ref } from 'vue'
  import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
  const el = ref()
  
  onMounted(() => {
    const { scene, renderer, camera, mountTo, refresh, addControls } = lec3d.init({
      axesHelperConfigs: {
        length: 10000
      }
    })
    
    // 创建css3d对象
    const { mountTo: mountCss3dTo, createCss3dObject, createText } = lec3d.initCss3d({scene, camera})
    const textMesh = createText({text: 'Hello World'})
    scene.add(textMesh)

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

    mountCss3dTo(el.value)
    mountTo(el.value)
  })
</script>