<template>
  <HelloWorld @plus-one-event="handlePlusOneEvent" />
  <div id="counter">Counter: {{ counter }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
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
