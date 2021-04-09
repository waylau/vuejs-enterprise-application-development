<template>
  <div>
    <h1>TemplateOne</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class TemplateOne extends Vue {
  // 定义生命周期钩子函数

  beforeCreate() {
    console.log("TemplateOne beforeCreate");
  }

  created() {
    console.log("TemplateOne created");
  }

  beforeMount() {
    console.log("TemplateOne beforeMount");
  }

  mounted() {
    console.log("TemplateOne mounted");
  }

  beforeUpdate() {
    console.log("TemplateOne beforeUpdate");
  }

  updated() {
    console.log("TemplateOne updated");
  }

  beforeUnmount() {
    console.log("TemplateOne beforeUnmount");
  }

  unmounted() {
    console.log("TemplateOne unmounted");
  }

  activated() {
    console.log("TemplateOne activated");
  }

  deactivated() {
    console.log("TemplateOne deactivated");
  }
}
</script>