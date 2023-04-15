import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./src/icon/style/iconfont/iconfont";
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { ElConfigProvider } from 'element-plus';
export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
      if (c == 'Icon') {
        app.component('SvgIcon', components['Icon']);
      }
    }
    app.use(ElementPlus)
    
  },
  setup() {// zh_CN zh_TW en_US zh_VN
		return {
			locale: zhCn,
		};
	},
	components: {
		ElConfigProvider,
	},
};