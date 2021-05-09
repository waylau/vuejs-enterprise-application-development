<template>
  <!-- 动态赋予一个变量的值 
  <ComponentApple :title="apple.title" />-->

  <!-- 动态赋予一个变量的数字值
  <ComponentApple :age="apple.age" /> -->

  <!-- 动态赋予一个变量的布尔值 
  <ComponentApple :isPublished="apple.isPublished" />-->

  <!-- 动态赋予一个动态数组
  <ComponentApple :publishedYears="apple.publishedYears" />-->

  <!-- 动态赋予一个动态对象 
  <ComponentApple :author="apple.author" />-->

  <!-- 动态赋予一个动态对象的所有property -->
  <ComponentApple v-bind="apple" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import ComponentApple from "./components/ComponentApple.vue";
@Options({
  components: {
    ComponentApple,
  },
})
export default class App extends Vue {
  private apple: any = {
    title: "Mac",
    age: 37,
    isPublished: true,
    publishedYears: [
      1976,
      1977,
      1983,
      1984,
      1991,
      1998,
      2000,
      2001,
      2002,
      2003,
      2005,
      2006,
      2008,
    ],
    author: {
      name: "Steve Jobs",
      birthday: "1955-2-24",
    },
    children: ["Eve Jobs","Lisa Brennan-Jobs"]
  };
}
</script>
