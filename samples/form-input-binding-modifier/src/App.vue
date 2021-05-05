<template>
  <!-- .lazy修饰符，change事件之后再进行同步 -->
  <div>
    <input v-model.lazy="message" />
    <p>输入的消息: {{ message }}</p>
  </div>

  <!-- .number修饰符，自动将用户的输入值转为数值类型 -->
  <div>
    <input v-model.number="age" />
    <p>输入的内容: {{ age }}</p>
  </div>

  <!-- .trim修饰符，自动将用户的输入值转为数值类型 -->
  <div>
    <input v-model.trim="text" />
    <p>输入的内容: {{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private message: string = "";

  private age: number = 0;

  private text: string = "";
}
</script>