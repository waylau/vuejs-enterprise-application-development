<template>
  <div>
    <!-- 在 <template> 中使用 v-for -->
    <h1>老卫作品集合：</h1>
    <ul>
      <template  v-for="book in books" :key="book">
        <li><span>{{ book }}</span> {{ book.length }}</li>
      </template >
    </ul>

    <!-- 在组件上使用 v-for -->
    <HelloWorld v-for="book in books" :key="book" :msg="book"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private books: string[] = [
    "分布式系统常用技术及案例分析",
    "Spring Boot 企业级应用开发实战",
    "Spring Cloud 微服务架构开发实战",
    "Spring 5 开发大全",
    "分布式系统常用技术及案例分析（第2版）",
    "Cloud Native 分布式架构原理与实践",
    "Angular企业级应用开发实战",
    "大型互联网应用轻量级架构实战",
    "Java核心编程",
    "MongoDB＋Express＋Angular＋Node.js全栈开发实战派",
    "Node.js企业级应用开发实战",
    "Netty原理解析与开发实战",
    "分布式系统开发实战",
    "轻量级Java EE企业应用开发实战",
  ];
}
</script>
