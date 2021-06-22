<template>
  <div class="home">
    <Navigate></Navigate>
    <List></List>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navigate from "./Navigate.vue";
import List from "./List.vue";

@Options({
  components: {
    Navigate,
    List,
  },
})
export default class Home extends Vue {}
</script>

 

