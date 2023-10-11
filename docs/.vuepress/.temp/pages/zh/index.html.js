export const data = JSON.parse("{\"key\":\"v-2d0ad528\",\"path\":\"/zh/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/384.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/zh/guide/index.html\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present Serio\"},\"headers\":[{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]}],\"filePathRelative\":\"zh/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
