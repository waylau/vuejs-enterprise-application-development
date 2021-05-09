<template>
  <!--HTML-->
  <HelloWorld>
    <a href="https://waylau.com"> Welcom to waylau.com</a>
  </HelloWorld>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
}
</script>
