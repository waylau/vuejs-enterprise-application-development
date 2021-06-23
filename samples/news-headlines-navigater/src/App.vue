<template>
  <NewsHome/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsHome from "./components/NewsHome.vue";

@Options({
  components: {
    NewsHome,
  },
})
export default class App extends Vue {}
</script>

