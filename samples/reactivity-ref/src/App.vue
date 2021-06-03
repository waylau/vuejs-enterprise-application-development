<template>
  <div>
    <span>{{ counter.count }}</span>
    <button @click="counter.count++">递增</button>
  </div>
</template>

<script lang="ts">
import { Vue, setup } from "vue-class-component";

import { reactive, ref } from "vue";

export default class App extends Vue {
  private counter = setup(() => {
    const count:any = ref(0);


    const books:any = reactive([ref('Vue 3 Guide')])
    // 这里需要.value
    console.log(books[0].value)

    const map:Map<string, any> = reactive(new Map([['count', ref(0)]]))
    // 这里需要 .value
    console.log(map.get('count').value)

    return {
      count,
    };
  });
}
</script>
