<template>
  <Heading :items="books" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Heading from "./components/Heading";
@Options({
  components: {
    Heading,
  },
})
export default class App extends Vue {
  private books: any[] = [
    { name: "分布式系统常用技术及案例分析" },
    { name: "Spring Boot 企业级应用开发实战" },
    { name: "Spring Cloud 微服务架构开发实战" },
    { name: "Spring 5 开发大全" },
    { name: "分布式系统常用技术及案例分析（第2版）" },
    { name: "Cloud Native 分布式架构原理与实践" },
    { name: "Angular企业级应用开发实战" },
    { name: "大型互联网应用轻量级架构实战" },
    { name: "Java核心编程" },
    { name: "MongoDB＋Express＋Angular＋Node.js全栈开发实战派" },
    { name: "Node.js企业级应用开发实战" },
    { name: "Netty原理解析与开发实战" },
    { name: "分布式系统开发实战" },
    { name: "轻量级Java EE企业应用开发实战" },
  ];
}
</script>
