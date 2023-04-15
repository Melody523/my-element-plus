import { createApp } from "vue";
import App from "./app.vue";
import vitepressElementUi from "@vitepress-element-ui/components";
const app = createApp(App);
app.use(vitepressElementUi);
app.mount("#app");