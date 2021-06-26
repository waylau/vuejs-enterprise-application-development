<template>
  <div class="hello">
    <h1>{{ count }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    count: Number,
  },
})
export default class CounterShow extends Vue {
  count!: number;
}
</script>