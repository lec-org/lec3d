<h1 align="center"> 🎉lec3d🎈</h1>

基于three.js进行封装, 用于快速高效地搭建3D场景的JS库

> lec3d 是一个JS库，不限制开发框架
>
> lec3d 内置 three.js, 避免版本兼容问题，无需再下载 three.js
>
> lec3d 将内置的 three.js 的 API 完整暴露, 便于原有的 three.js 项目平稳升级

## 使用指南

```bash
npm i @trickle/lec3d
```

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


### 贡献者 
>由衷感谢所有人的积极贡献

<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/lhuanran">
            <img src="https://avatars.githubusercontent.com/u/118098272?v=4" width="50;" alt="lhuanran"/>
            <br />
            <sub><b>Null</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/CoderSerio">
            <img src="https://avatars.githubusercontent.com/u/79406469?v=4" width="50;" alt="CoderSerio"/>
            <br />
            <sub><b>Carbon 碳苯</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->
