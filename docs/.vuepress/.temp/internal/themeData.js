export const themeData = JSON.parse("{\"logo\":\"/images/384.png\",\"repo\":\"https://github.com/CoderSerio/lec3d\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"Guide\",\"link\":\"/guide/\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"Guide\",\"children\":[\"/guide/README.md\"]}]},\"editLinkText\":\"Edit this page on GitHub\",\"selectLanguageName\":\"English\"},\"/zh/\":{\"navbar\":[{\"text\":\"文档\",\"link\":\"/zh/guide/\"}],\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"selectLanguageAriaLabel\":\"选择语言\",\"sidebar\":{\"/zh/guide/\":[{\"text\":\"\",\"children\":[\"/zh/guide/README.md\"]}]},\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换颜色模式\",\"toggleSidebar\":\"切换侧边栏\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
