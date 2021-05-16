<template>
  <h2>Parent component</h2>
  <teleport to="body">
    <ComponentChild title="Way Lau" />
  </teleport>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentChild from "./ComponentChild.vue";
@Options({
  components: {
    ComponentChild,
  },
})
export default class ComponentParent extends Vue {}
</script>