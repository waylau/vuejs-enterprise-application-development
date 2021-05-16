<template>
  <div>
    <!--使用focus指令-->
    <input v-focus />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  directives: {
    // 自定义focus指令
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
})
export default class App extends Vue {}
</script>
