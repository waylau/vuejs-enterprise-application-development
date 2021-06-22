<template>
  <div class="news-navigater">
    <n-tabs type="line">
      <n-tab-pane name="top" tab="头条">头条</n-tab-pane>
      <n-tab-pane name="guonei" tab="国内">国内</n-tab-pane>
      <n-tab-pane name="guoji" tab="国际">国际</n-tab-pane>
      <n-tab-pane name="yule" tab="娱乐">娱乐</n-tab-pane>
      <n-tab-pane name="tiyu" tab="体育">体育</n-tab-pane>
      <n-tab-pane name="junshi" tab="军事">军事</n-tab-pane>
      <n-tab-pane name="keji" tab="科技">科技</n-tab-pane>
      <n-tab-pane name="caijing" tab="财经">财经</n-tab-pane>
      <n-tab-pane name="shishang" tab="时尚">时尚</n-tab-pane>
      <n-tab-pane name="youxi" tab="游戏">游戏</n-tab-pane>
      <n-tab-pane name="qiche" tab="汽车">汽车</n-tab-pane>
      <n-tab-pane name="jiankang" tab="健康">健康</n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NTabPane } from "naive-ui";
import { NTabs } from "naive-ui";

@Options({
  components: {
    NTabPane,
    NTabs,
  },
})
export default class NewsNavigater extends Vue {}
</script>
