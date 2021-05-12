<template>
<link
  href="https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"
  rel="stylesheet"
  type="text/css"
/>
<div>
  <button @click="show = !show">
    点击切换
  </button>

  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <p v-if="show">我显示出来了</p>
  </transition>
</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private show: boolean = true;
}
</script>
