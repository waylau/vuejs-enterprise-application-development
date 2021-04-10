<template>
  <div>
    <!-- v-bind指令 -->
    <p>
      <a v-bind:href="url">Welcome to waylau.com</a>
    </p>

    <!-- v-on指令 -->
    <p>
      <a v-on:click="doLog">doLog</a>
    </p>

    <!-- v-on指令，动态参数 -->
    <p>
      <a v-on:[eventName]="doLog">doLog</a>
    </p>

    <!-- v-on指令，修饰符 -->
    <form v-on:submit.prevent="onSubmit">Submit</form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private url: string = "https://waylau.com/";
  private eventName: string = "click";

  doLog() {
    console.log("do logging...");
  }
}
</script>
