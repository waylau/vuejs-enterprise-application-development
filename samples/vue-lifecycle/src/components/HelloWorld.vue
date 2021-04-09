<template>
  <div>
    <div id="app">
      Counter: {{count}}
      <button @click="plusOne()">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";


export default class HelloWorld extends Vue {
  // 计数用的变量
  count = 0;
  
  // 定义一个组件方法
  plusOne() {
    this.count++;
    console.log("Hello World!");
  }

  // 定义生命周期钩子函数
  beforeCreate() {
    console.log("beforeCreate");
  }

  created() {
    console.log("created");
  }

  beforeMount() {
    console.log("beforeMount");
  }

  mounted() {
    console.log("mounted");
  }

  beforeUpdate() {
    console.log("beforeUpdate");
  }

  updated() {
    console.log("updated");
  }
  beforeUnmount() {
    console.log("beforeUnmount");
  }

  unmounted() {
    console.log("unmounted");
  }
  activated() {
    console.log("activated");
  }

  deactivated() {
    console.log("deactivated");
  }

}
</script>

<style>
</style>