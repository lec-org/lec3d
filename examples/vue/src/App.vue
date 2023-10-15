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
    // 创建css2d对象
    const { mountTo: mountCss2dTo, createCss2dObject } = lec3d.initCss2d({scene, camera})

    const textMesh = createText({text: 'Hello World'})
    scene.add(textMesh)

    let value = 1
    const content = document.createElement('div')
    content.innerText = value
    const css2dObject = createCss2dObject({content})
    scene.add(css2dObject)

    setInterval(() => {
      content.innerText = ++value
    }, 300);

    const controls = addControls()

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

    mountCss2dTo(el.value)
    mountCss3dTo(el.value)
    mountTo(el.value)
  })
</script>