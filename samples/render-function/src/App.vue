<template>
  <AnchoredHeading :level="2">
    <a name="hello-world" href="https:waylau.com"> 我是h2 </a>
  </AnchoredHeading>
  <AnchoredHeading :level="3">
    <a name="hello-world" href="https:waylau.com"> 我是h3 </a>
  </AnchoredHeading>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import AnchoredHeading from "./components/AnchoredHeading";
@Options({
  components: {
    AnchoredHeading,
  },
})
export default class App extends Vue {}
</script>
