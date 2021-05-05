<template>
  <!--单个复选框，绑定到动态property上-->
  <div>
    <input
      type="checkbox"
      id="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    />
    <label for="checkbox">是否选中：{{ toggle }}</label>
  </div>

  <!--单选框，绑定到动态property上-->
  <div>
    <label v-for="book in books" :key="book">
      <input type="radio" v-model="picked" v-bind:value="book" />
      {{ book }}
      <br />
    </label>

    <br />
    <span>选中: {{ picked }}</span>
  </div>

  <!--选择框，绑定到动态property上-->

  <div>
    <select v-model="selected">
      <option disabled value="">选择一本书</option>
      <option v-for="book in bookList" :key="book.id" v-bind:value="book.id">
        {{ book.label }}
      </option>
    </select>
    <span>选择的套餐是：{{ selected }}</span>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private toggle: string = "yes";
  private picked: string = "";

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
  private selected: string = "";
  private bookList: any[] = [
    {
      id: 1,
      label: "Spring Boot 企业级应用开发实战",
    },
    {
      id: 2,
      label: "Spring Cloud 微服务架构开发实战",
    },
    {
      id: 3,
      label: "Spring 5 开发大全",
    },
    {
      id: 4,
      label: "Netty原理解析与开发实战",
    },
  ];
}
</script>