<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="plusOne">+</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  // 定义一个组件方法
  plusOne() {
    console.log("emit event");
    
    // 发送自定义的事件
    this.$emit("plusOneEvent"); 
  }
}
</script>
