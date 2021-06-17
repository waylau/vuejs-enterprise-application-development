import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// 使用路由router
createApp(App).use(router).mount('#app')