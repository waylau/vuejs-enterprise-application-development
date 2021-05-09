<template>
  <div>
    <h1>ComponentBanana</h1>
  </div>
  <ComponentApple />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentApple from "./ComponentApple.vue";

@Options({
  components: {
    ComponentApple,
  },
})
export default class ComponentBanana extends Vue {}
</script>