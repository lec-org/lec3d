---
title: 参考文档
---

# 指南

## lec3d是什么

我们只是要一个 3d 场景，学那么多东西成本可太高了！
所以我们基于 three.js 封装了一个用于快速搭建 3d 场景的库，并且它是不限框架的！

> 目前我们在 `Vue`，`React`，`Svelte` 上都有做实践！


## 快速开始

```bash
npm i @trickle/lec3d
```

```js
import lec3d from "@trickle/lec3d";
const { scene, renderer, camera, mountTo, refresh, addControls } = lec3d.init({
  axesHelperConfigs: {
    length: 10000
  }
})

// 添加鼠标控制，缩放、旋转等
const controls = addControls()

// 导入 GLTF 3d 模型文件
lec3d.loadGLTF({ 
  modelPath: 'your_file.gltf', 
  options: {
    scale: 30,
    position: {
      x: 100,
    },
    rotation: {
      x: '30', // 字符串数字代表角度，即 30 度
      z: -0.5
    },
  }, 
  callback: (gltf, model) => {
    // 添加到场景中
    scene.add(model)
}})

// 挂载到一个 DOM 元素上
mountTo(your_dom)
```



## 贡献和维护




