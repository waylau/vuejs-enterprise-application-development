<template>
  <div>user: {{ user }}</div>
  <div>location: {{ location }}</div>
  <div>geolocation: {{ geolocation }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { inject } from "vue";

@Options({
  inject:['user','location','geolocation']
})
export default class ComponentBanana extends Vue {
  created() {
    const user = inject("user"); // 注入 property
    console.log("Injected user:" + user);

    const location = inject("location"); // 注入 property
    console.log("Injected location:" + location);

    const geolocation = inject("geolocation"); // 注入 property
    console.log("Injected geolocation:" + geolocation);

    return { user, location, geolocation };
  }
}
</script>