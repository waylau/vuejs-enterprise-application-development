import { createApp } from 'vue'
import App from './App.vue'

// 引入Ant Design Vue的Button组件及其样式即可
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css'; 

// 使用Button组件
createApp(App).use(Button).mount('#app')