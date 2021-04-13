<template>
  <div>
    <button @click="counter += 1">+</button>
    <p>计数: {{ counter }} </p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private counter: number = 0;
  
}
</script>
