<template>
  <div>
    <p>
      搜索:
      <input v-model="question" />
    </p>
    <div v-for="answer in answers" :key="answer">
      {{ answer }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  watch: {
    question(value: string) {
      this.getAnswer(value);
    },
  },
})
export default class App extends Vue {
  private question: string = "";
  private answers: string[] = [];

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

  // 当question变化时，触发该方法
  getAnswer(value: string): void {
    // 搜索输入的字符是否在数组内
    console.log("search:" + value);
    this.books.forEach((book) => {
      if (this.isContains(book, value)) {
        console.log("isContains:" + value);
        this.answers.push(book);
      } else {
        this.answers = [];
      }
    });
  }

  // 字符串是否包含指定的字符
  isContains(str: string, substr: string): boolean {
    return str.indexOf(substr) >= 0;
  }
}
</script>
