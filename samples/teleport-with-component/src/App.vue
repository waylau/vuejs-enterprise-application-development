<template>
  <h2>App root component</h2>
  <div>
    <ComponentParent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import ComponentParent from "./components/ComponentParent.vue";
@Options({
  components: {
    ComponentParent,
  },
})
export default class App extends Vue {
}
</script>
