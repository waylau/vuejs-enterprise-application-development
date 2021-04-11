<template>
  <!-- 在class中绑定对象 -->
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  ></div>

  <!-- 在class中绑定数组 -->
  <div :class="classArray"></div>

  <!-- 在组件上使用class -->
  <HelloWorld class="like vue"></HelloWorld>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private isActive: boolean = true;
  private hasError: boolean = true;
  private classArray: any[] = [
    { active: "isActive" },
    { "text-danger": "hasError" },
  ];
}
</script>
