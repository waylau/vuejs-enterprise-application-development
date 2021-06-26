<template>
  <div class="news-home">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      <NewsNavigater @tab-click-event="handleTabClickEvent"> </NewsNavigater>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px">
      <NewsList :alias="alias"> </NewsList>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsList from "./NewsList.vue";
import NewsNavigater from "./NewsNavigater.vue";
import { NLayout, NLayoutHeader } from "naive-ui";

@Options({
  components: {
    NewsNavigater,
    NewsList,
    NLayoutHeader,
    NLayout,
  },
})
export default class NewsHome extends Vue {
  private alias: string = "top";

  handleTabClickEvent(alias: string) {
    console.log("handleTabClickEvent:" + alias);

    // 标签页的分类别名
    this.alias = alias;
  }
}
</script>
