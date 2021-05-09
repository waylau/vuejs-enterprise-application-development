<template>
  <AsyncPage></AsyncPage>
  <AsyncPageWithOptions></AsyncPageWithOptions>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent } from "vue";

// 不带选项的异步组件
const AsyncPage = defineAsyncComponent(
  () => import("./components/ComponentApple.vue")
);

// 带选项的异步组件
const AsyncPageWithOptions = defineAsyncComponent({
  loader: () => import("./components/ComponentBanana.vue"),
  delay: 200,
  timeout: 3000,
});

@Options({
  components: {
    AsyncPage,
    AsyncPageWithOptions,
  },
})
export default class App extends Vue {}
</script>
