import { createApp } from 'vue'
import App from './App.vue'

// 引入Ant Design Vue的组件及其样式即可
import Tabs from 'ant-design-vue/lib/tabs';
import List from 'ant-design-vue/lib/list';
import Avatar from 'ant-design-vue/lib/avatar';
import 'ant-design-vue/lib/tabs/style/css'; 
import 'ant-design-vue/lib/list/style/css'; 
import 'ant-design-vue/lib/avatar/style/css'; 

// 使用Ant Design Vue的组件
createApp(App).use(Tabs).use(List).use(Avatar).mount('#app')
