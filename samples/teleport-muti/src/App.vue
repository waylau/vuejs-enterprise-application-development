<template>
  <div>
    <teleport to="body">
      <div>这是传入的内容1</div>
    </teleport>

    <teleport to="body">
      <div>这是传入的内容2</div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>
