<template>
  <div class="news-home">
    <NewsNavigater> </NewsNavigater>
    <NewsList> </NewsList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsList from "./NewsList.vue";
import NewsNavigater from "./NewsNavigater.vue";
@Options({
  components: {
    NewsNavigater,
    NewsList,
  },
})
export default class NewsHome extends Vue {}
</script>
