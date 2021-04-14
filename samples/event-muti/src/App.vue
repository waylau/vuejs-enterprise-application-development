<template>
  <div>
    <p>计数: {{ counter }}</p>
    <button @click="plusOne(), plus(3, $event)">+count</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private counter: number = 0;

  // 定义一个递增1的组件方法
  plusOne(): void {
    this.counter++;
    console.log("plusOne");
  }

  // 定义一个递增任意数的组件方法
  plus(count: number, event: Event) {
    this.counter += count;
    console.log("event:" + event.target);
  }
}
</script>
