<template>
  <h2>Child component</h2>
  <h3>title: {{ title }}</h3>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
  },
})
export default class ComponentChild extends Vue {
  title!: string;
}
</script>