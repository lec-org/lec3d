---
title: API
---

# API

## 通用

### init

快速初始化，并返回相机、场景

参数：TODO
返回值：TODO

```js
import lec3d from "@trickle/lec3d";
const { scene, renderer, camera, mountTo, refresh, addControls } = lec3d.init({
  axesHelperConfigs: {
    length: 10000
  }
})
```


## 模型

### loadGLTF

快速导入 GLTF 模型文件, 并做相关

参数: TODO
返回值：TODO

```js
lec3d.loadGLTF({ 
  modelPath: '3d_model/scene.gltf', 
  options: {
    scale: 30,
    position: {
      x: 100,
      y: 100
    },
    rotation: {
      x: '30', // 字符串数字代表角度，即 30 度
      z: -0.5
    },
  }, 
  callback: (gltf, model) => {
    scene.add(model)
}})
```




