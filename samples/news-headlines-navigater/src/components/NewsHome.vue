<template>
  <div class="news-home">
    <n-affix
            :trigger-top="50"
            position="absolute"
 
          >
    <NewsNavigater> </NewsNavigater>
          </n-affix>

    <NewsList> </NewsList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsList from "./NewsList.vue";
import NewsNavigater from "./NewsNavigater.vue";
import { NAffix } from "naive-ui";

@Options({
  components: {
    NewsNavigater,
    NewsList,
    NAffix
  },
})
export default class NewsHome extends Vue {}
</script>
