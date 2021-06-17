<template>
  <div class="app">
    <h1>Router demo</h1>

    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>
      </div>

      <div>
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {}
</script>