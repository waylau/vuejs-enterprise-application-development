<template>
  <!-- type是非prop attribute 
  <ComponentApple type="radio" />-->

  <!-- type是非prop attribute -->
  <ComponentBanana type="radio" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import ComponentApple from "./components/ComponentApple.vue";
import ComponentBanana from "./components/ComponentBanana.vue";

@Options({
  components: {
    ComponentApple,
    ComponentBanana
  },
})
export default class App extends Vue {}
</script>
