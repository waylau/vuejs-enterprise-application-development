<template>
  <div class="hello">
    <button v-on:click="plusOne">+</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HelloWorld extends Vue {
  // 定义一个组件方法
  plusOne() {
    console.log("emit event");
    
    // 发送自定义的事件
    this.$emit("plus-one-event"); 
  }
}
</script>
