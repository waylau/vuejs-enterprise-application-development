<template>
  <div class="hello">
    <slot>
      <!--后备内容-->
      <a href="https://waylau.com"> waylau.com</a>
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HelloWorld extends Vue {
}
</script>
