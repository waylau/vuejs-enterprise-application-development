<template>
  <div>
    <p>是否出版过书？</p>

    <!-- 未使用计算属性 -->
    <P>{{ books.length > 0 ? "Yes" : "No" }}</P>

    <!-- 使用计算属性 -->
    <P>{{ publishedBooksMessage }}</P>

    <!-- 未使用计算属性，而是使用普通方法 -->
    <P>{{ getPublishedBooksMessage() }}</P>

    <!-- 点击清空数据 -->
    <button @click="clearData">清空数据</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

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

  // 使用计算属性
  get publishedBooksMessage(): string {
    return this.books.length > 0 ? "Yes" : "No";
  }

  // 未使用计算属性，而是使用普通方法
  getPublishedBooksMessage(): string {
    return this.books.length > 0 ? "Yes" : "No";
  }

  // 清空数据
  clearData() {
    this.books = [];
  }

}
</script>
