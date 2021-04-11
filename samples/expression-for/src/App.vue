<template>
  <div>
    <!-- 使用v-for遍历数组 -->
    <h1>老卫作品集合：</h1>
    <ul>
      <li v-for="book in books" :key="book">
        {{ book }}
      </li>
    </ul>

    <!-- 使用v-for遍历数组，设置索引 -->
    <h1>老卫作品集合：</h1>
    <ul>
      <li v-for="(book, index) in books" :key="book">
        {{ index }} {{ book }}
      </li>
    </ul>

    <!-- 使用v-for遍历对象-->
    <h1>女儿的信息：</h1>
    <ul>
      <li v-for="value in myDaughter" :key="value">
        {{ value }}
      </li>
    </ul>

    <!-- 使用v-for遍历对象，设置property名称-->
    <h1>女儿的信息：</h1>
    <ul>
      <li v-for="(value, name) in myDaughter" :key="value">
        {{ name }} {{ value }}
      </li>
    </ul>

    <!-- 使用v-for遍历对象，设置property名称-->
    <h1>女儿的信息：</h1>
    <ul>
      <li v-for="(value, name, index) in myDaughter" :key="value">
        {{ index }} {{ name }} {{ value }}
      </li>
    </ul>

    <!-- 数组过滤 -->
    <h1>老卫作品集合，过滤书名大于20字符的：</h1>
    <ul>
      <li v-for="book in booksWithFilter" :key="book">
        {{ book }}
      </li>
    </ul>

    <!-- 数组过滤 -->
    <h1>使用值的范围：</h1>
    <ul>
      <li v-for="num in 5" :key="num">
        {{ num }}
      </li>
    </ul>
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

  private myDaughter: any = {
    name: "Cici",
    city: "Huizhou",
    birthday: "2014-06-23",
  };

  // 过滤，只保留书名长度大于20字符的数据
  get booksWithFilter() {
    return this.books.filter(book => book.length > 20)
  }
}
</script>
