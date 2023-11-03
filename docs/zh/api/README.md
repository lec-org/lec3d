---
title: 示例和定义
---

# API

### init

> 快速初始化，并返回相机、场景、渲染器等对象和添加鼠标控制、获取鼠标点击对象等方法

**示例**

@[code ts](../../components/init/index.ts)

**参数**

- `params`: 配置项，所有内容都是可选的，具体定义如下:

@[code ts](../../components/init/params.ts)

**返回值**

@[code ts](../../components/init/returns.ts)



### initCss3d

> 创建 css 3d 内容，主要分为 `对象` 和 `精灵` 两种：
>
> `对象`: 能够被鼠标操作缩放，不被模型遮挡，能够通过DOM操作获取
>
> `精灵`: 不能被鼠标操作缩放，可以被模型遮挡，能够通过射线拾取(可以粗略理解为鼠标点击操作获取)

**示例**

@[code ts](../../components/initCss3d/index.ts)

**参数**

- `initCss3dParams`: 配置项，定义如下:

@[code ts](../../components/initCss3d/params.ts)

**返回值**

@[code ts](../../components/initCss3d/returns.ts)





### initCss2d

> 创建 css 2d 内容，其特点是：
>
> 不能被鼠标操作缩放，**默认情况下**不被模型遮挡，能够通过DOM操作获取
>
> 但是 lec3d 提供了配置项，能够控制其是否被模型遮挡

**示例**

@[code ts](../../components/initCss2d/index.ts)

**参数**

- `intCss2dParams`: 配置项，定义如下:

@[code ts](../../components/initCss2d/params.ts)

**返回值**

@[code ts](../../components/initCss2d/returns.ts)



### loadGLTF

> 导入 GLTF 模型文件, 并做相关配置

**示例**

@[code ts](../../components/loadGLTF/index.ts)

**参数**

- `loadGLTFparams`: 配置项，定义如下： 

@[code ts](../../components/loadGLTF/params.ts)

**返回值**

@[code ts](../../components/loadGLTF/returns.ts)



