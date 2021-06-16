<template>
  <div>
    <div>
      {{ counter.count }}
      <button @click="counter.count++">递增count</button>
    </div>
    <div>
      {{ counter.age }}
      <button @click="counter.age++">递增age</button>
    </div>
    <button @click="counter.stop()">停止侦听</button>
  </div>
  <div>
    {{ counter.numbers }}
    <button @click="counter.numbers.push(5)">增一个5</button>
  </div>
</template>

<script lang="ts">
import { Vue, setup } from "vue-class-component";

import { ref, watch, reactive } from "vue";

export default class App extends Vue {
  private counter = setup(() => {
    const count: any = ref(0);

    const age: any = ref(0);

    // watch侦听count、age的变化
    // 可以显式调用返回值stop以停止侦听
    const stop = watch([count, age], (newValues, prevValues) => {
      console.log(newValues, prevValues);
    });

    const numbers: any = reactive([1, 2, 3, 4]);

    // watch侦听numbers的变化
    watch([numbers], (newValues, prevValues) => {
      console.log(newValues, prevValues);
    });

    return {
      count,
      age,
      stop,
      numbers,
    };
  });
}
</script>