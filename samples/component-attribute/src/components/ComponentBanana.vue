<template>
  <ComponentBananaMijiao />
  <ComponentBananaPlantain v-bind="$attrs" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import ComponentBananaMijiao from "./ComponentBananaMijiao.vue";
import ComponentBananaPlantain from "./ComponentBananaPlantain.vue";

@Options({
  components: {
    ComponentBananaMijiao,
    ComponentBananaPlantain,
  },
})
export default class ComponentBanana extends Vue {}
</script>