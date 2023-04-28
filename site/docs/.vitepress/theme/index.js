import DefaultTheme from "vitepress/theme";
import 'vitepress-my-ui/es/style.css'
// import '../../public/css/iconfont/iconfont.js'
import vitepressElementUi from "vitepress-my-ui";
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import '../../public/css/index.css'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(vitepressElementUi);
    useComponents(app)
  },
};