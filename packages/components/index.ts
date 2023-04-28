import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./src/icon/style/iconfont/iconfont";
export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
    app.use(ElementPlus)
  },
};