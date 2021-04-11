<template>
  <!-- 使用v-if -->
  <h1 v-if="isGood">Vue is good!</h1>

  <!-- 使用v-else -->
  <div v-if="Math.random() > 0.5">显示这块</div>
  <div v-else>否则，显示这块</div>

  <!-- 使用v-else-if -->
  <div v-if="score === 'A'">A</div>
  <div v-else-if="score === 'B'">B</div>
  <div v-else-if="score === 'C'">C</div>
  <div v-else>D</div>

  <!-- 使用v-show -->
  <h1 v-show="isDisplay">I am display!</h1>
</template>


<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private isGood: boolean = true;
  private score:string ="B";
  private isDisplay: boolean = true;
}
</script>
