<template>
  <input ref="input" />
  <ComponentApple ref="appleInput" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import ComponentApple from "./components/ComponentApple.vue";
@Options({
  components: {
    ComponentApple,
  },
})
export default class App extends Vue {
  mounted() {
    let input: any = this.$refs.input;
    input.focus();

    let appleInput: any = this.$refs.appleInput;
    appleInput.focus();
  }
}
</script>
