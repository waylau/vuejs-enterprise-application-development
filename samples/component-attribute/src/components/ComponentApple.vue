<template>
  <input type="text" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  // 禁用attribute继承
  inheritAttrs: false,
})
export default class ComponentApple extends Vue {}
</script>