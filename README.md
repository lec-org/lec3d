## lec3d

基于three.js进行封装, 用于更快速高效地快速搭建3d展示场景的JS库

> lec3d 直接内置了一个 three.js 避免版本兼容问题
>
> lec3d 也将 three 的 API 直接暴露, 方便原有的 three.js 项目平稳升级 

## 使用指南

使用文档请参考: [lec3d 官方文档](https://lec-org.github.io/lec3d/) (开发+内测中...)

## 参与贡献

### 开发

使用 `npm run build:dev` 开启打包热更新, 这样一来修改 `/src` 下的文件时, 就会自动更新 `/dist` 的内容

进入 `/example`, 这里有很多可以供你快速验证更新内容的样例项目, 选择其中你需要的进行自测验证即可

如果你要新建或调整 `/example` 中项目的依赖引入方式, 这里提供两种方案:

**方案一**
> 使用打包文件的相对路径, 如 `import * as lec3d from '../../../dist/index.js'`


**方案二**
> 使用第三方依赖 `yalc` 模拟 `npm` 包发布和安装, 相关命令如下:
>
> 根目录下, 模拟发布: `yalc publish`
>
> 根目录下, 模拟版本更新: `yalc update`
>
> 测试项目的根目录下, 模拟安装: `yalc add @trickle/lec3d`


### 提交

TODO: 补充提交相关细则