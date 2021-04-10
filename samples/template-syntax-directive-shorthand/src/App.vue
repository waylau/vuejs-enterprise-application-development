<template>
  <div>
    <!-- v-bind指令 -->
    <p>
      <a v-bind:href="url">Welcome to waylau.com</a>
    </p>

    <!-- v-bind指令缩写 -->
    <p>
      <a :href="url">Welcome to waylau.com</a>
    </p>

    <!-- v-bind指令缩写，动态参数 -->
    <p>
      <a :[key]="url">Welcome to waylau.com</a>
    </p>

    <!-- v-on指令 -->
    <p>
      <a v-on:click="doLog">doLog</a>
    </p>

    <!-- v-on指令缩写 -->
    <p>
      <a @click="doLog">doLog</a>
    </p>

    <!-- v-on指令缩写，动态参数 -->
    <p>
      <a @[eventName]="doLog">doLog</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private url: string = "https://waylau.com/";
  private eventName: string = "click";
  private key: string = "href";

  doLog() {
    console.log("do logging...");
  }
}
</script>
