<template>
  <ComponentBanana />
  <ComponentApple />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import ComponentBanana from "./components/ComponentBanana.vue";
import ComponentApple from "./components/ComponentApple.vue";
@Options({
  components: {
    ComponentBanana,
    ComponentApple,
  },
})
export default class App extends Vue {}
</script>
