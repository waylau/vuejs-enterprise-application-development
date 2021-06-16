<template>
  <div>
    <span>{{ counter.count }}</span>
    <button @click="counter.count++">递增</button>
    <button @click="counter.stop()">停止侦听</button>
  </div>
</template>

<script lang="ts">
import { Vue, setup } from "vue-class-component";

import { ref, watchEffect } from "vue";

export default class App extends Vue {
  private counter = setup(() => {
    const count: any = ref(0);

    // watchEffect侦听count的变化
    // 可以显式调用返回值stop以停止侦听
    const stop = watchEffect(() =>
      console.log("count changed to: " + count.value)
    );

    return {
      count,
      stop,
    };
  });
}
</script>