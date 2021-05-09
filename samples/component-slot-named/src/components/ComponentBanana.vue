<template>
  <div class="banana-plantain">
    <slot name="banana-plantain"> </slot>
  </div>

  <div class="banana-mijiao">
    <slot name="banana-mijiao"> </slot>
  </div>

  <div class="default">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ComponentBanana extends Vue {}
</script>