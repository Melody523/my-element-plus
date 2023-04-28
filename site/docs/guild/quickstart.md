# 快速开始

- 安装依赖

```
npm install vitepress-my-ui
```

- 引入样式

```js
import 'vitepress-my-ui/es/style.css'
```

- 全局注册

```js
import { createApp } from "vue";
import App from "./app.vue";
import 'vitepress-my-ui/es/style.css'
import vitepressElementUi from "vitepress-my-ui";
const app = createApp(App);
app.use(vitepressElementUi);
app.mount("#app");
```
