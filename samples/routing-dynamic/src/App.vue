<template>
  <div class="app">
    <h1>Dynamic router demo</h1>

    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>
      </div>

      <div>
        <router-link to="/blog/1">Blog 1</router-link>
      </div>

      <div>
        <router-link to="/blog/2">Blog 2</router-link>
      </div>

      <div>
        <router-link to="/blog/3">Blog 3</router-link>
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