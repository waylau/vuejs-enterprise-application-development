<template>
  <CounterClick @plusOneEvent="handlePlusOneEvent" />

  <CounterShow :count="counter" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CounterShow from "./components/CounterShow.vue";

import CounterClick from "./components/CounterClick.vue";

@Options({
  components: {
    CounterShow,

    CounterClick,
  },
})
export default class App extends Vue {
  private counter: number = 0;

  handlePlusOneEvent() {
    console.log("handlePlusOneEvent");

    // 计数器递增

    this.counter++;
  }
}
</script>