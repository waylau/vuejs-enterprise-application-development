<template>
  <div id="dynamic-arguments-example">
    <!--使用pin指令，绑定对象字面量-->
    <p v-pin="{ color: 'white', text: 'hello!' }">对象字面量</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  directives: {
    // 自定义pin指令
    pin: {
      mounted(el, binding) {
        console.log(binding.value.color); // => "white"
        console.log(binding.value.text); // => "hello!"
      },
    },
  },
})
export default class App extends Vue {}
</script>
