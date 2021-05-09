<template>
  <ComponentBanana>
    <!--文本-->
    <template v-slot:default>Hello</template>

    <!--HTML-->
    <template v-slot:banana-mijiao>
      <a href="https://waylau.com"> Welcom to waylau.com</a>
    </template>

    <!--模板-->
    <template v-slot:banana-plantain>
      <div id="counter">Counter: {{ counter }}</div>
    </template>
  </ComponentBanana>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ComponentBanana from "./components/ComponentBanana.vue";

@Options({
  components: {
    ComponentBanana,
  },
})
export default class App extends Vue {
  private counter: number = 0;
}
</script>
