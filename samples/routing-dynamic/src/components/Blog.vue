<template>
  <div class="blog">
    <h1>This is Blog</h1>
	<!-- 通过this.$route.params获取路由path中的ID值--> 
    <div>ID是{{ this.$route.params.id }}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Blog extends Vue {}
</script>