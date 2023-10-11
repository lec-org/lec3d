export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/384.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/guide/index.html\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present Serio\"},\"headers\":[{\"level\":3,\"title\":\"Install\",\"slug\":\"install\",\"link\":\"#install\",\"children\":[]}],\"filePathRelative\":\"README.md\"}")

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
