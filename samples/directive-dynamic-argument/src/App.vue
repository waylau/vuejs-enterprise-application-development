<template>
  <div id="dynamic-arguments-example">
    <!--使用pin指令-->
    <p v-pin="20">距离顶部20px</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  directives: {
    // 自定义pin指令
    pin: {
      mounted(el, binding) {
        el.style.position = "fixed";
        // binding.value是我们传递给指令的值
        el.style.top = binding.value + "px";
      },
    },
  },
})
export default class App extends Vue {}
</script>
