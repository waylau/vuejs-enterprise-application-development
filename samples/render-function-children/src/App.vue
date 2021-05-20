<template>
  <Heading />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Heading from "./components/Heading";
@Options({
  components: {
    Heading,
  },
})
export default class App extends Vue {}
</script>
