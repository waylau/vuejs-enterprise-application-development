<template>
  <ComponentBanana> </ComponentBanana>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentBanana from "./components/ComponentBanana.vue";
import { provide } from "vue";
@Options({
  components: {
    ComponentBanana,
  },
})
export default class App extends Vue {
  created() {
    provide("user", "Way Lau");
    provide("location", "China");
    provide("geolocation", {
      longitude: 90,
      latitude: 135,
    });

    console.log("App created");
  }
}
</script>
