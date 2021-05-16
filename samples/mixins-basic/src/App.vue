<template>
  <div></div>
</template>

<script lang="ts">
import Goodbye from "./GoodBye";
import HelloWorld from "./HelloWorld";

import { mixins } from "vue-class-component";

export default class App extends mixins(HelloWorld, Goodbye) {
  created() {
    console.log("before created!");
    // 拥有了sayHi()和sayBye()的能力
    this.sayHi();
    this.sayBye();
    
    // HelloWorld和Goodbye同时拥有say()方法
    this.say();
    console.log("end created!");
  }
}
</script>
