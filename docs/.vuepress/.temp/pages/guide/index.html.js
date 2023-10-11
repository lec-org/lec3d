export const data = JSON.parse("{\"key\":\"v-fffb8e28\",\"path\":\"/guide/\",\"title\":\"TODO\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"filePathRelative\":\"guide/README.md\"}")

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
