export const siteData = JSON.parse("{\"base\":\"/lec3d/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"16x16\",\"href\":\"/images/icons/16.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"64x64\",\"href\":\"/images/icons/64.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\"}],[\"meta\",{\"name\":\"application-name\",\"content\":\"Mud\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-title\",\"content\":\"Mud\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/icons/apple-touch-icon.png\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/images/icons/safari-pinned-tab.svg\",\"color\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"lec3d\",\"description\":\"quickly build 3D front-end\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"lec3d\",\"description\":\"快速构建3d前端场景的JS库\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
