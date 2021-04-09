<template>
  <div>
    <h1>TemplateTwo</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "TemplateTwo",
})
export default class TemplateTwo extends Vue {
  // 定义生命周期钩子函数

  beforeCreate() {
    console.log("TemplateTwo beforeCreate");
  }

  created() {
    console.log("TemplateTwo created");
  }

  beforeMount() {
    console.log("TemplateTwo beforeMount");
  }

  mounted() {
    console.log("TemplateTwo mounted");
  }

  beforeUpdate() {
    console.log("TemplateTwo beforeUpdate");
  }

  updated() {
    console.log("TemplateTwo updated");
  }

  beforeUnmount() {
    console.log("TemplateTwo beforeUnmount");
  }

  unmounted() {
    console.log("TemplateTwo unmounted");
  }

  activated() {
    console.log("TemplateTwo activated");
  }

  deactivated() {
    console.log("TemplateTwo deactivated");
  }
}
</script>

 

