<template>
  <div class="navigate">
    <h1>Navigate</h1>
    <a-tabs
      default-active-key="1"
      tab-position="top"
      :style="{ height: '200px' }"
      size="small"
      tabBarGutter="4"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane
        v-for="category in getCategoryData()"
        :key="category.alias"
        :tab="`${category.name}`"
      >
        {{ category.name }}内容
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Category} from '../category'; // 导入新闻分类的包装类型

export default class Navigate extends Vue {
  // 新闻分类列表
  private categories: Category[] = [
    { alias: "top", name: "首页" },
    { alias: "shehui", name: "社会" },
    { alias: "guonei", name: "国内" },
    { alias: "guoji", name: "国际" },
    { alias: "yule", name: "娱乐" },
    { alias: "tiyu", name: "体育" },
    { alias: "junshi", name: "军事" },
    { alias: "keji", name: "科技" },
    { alias: "caijing", name: "财经" },
    { alias: "shishang", name: "时尚" },
  ];

  // 获取新闻分类列表
  getCategoryData() {
    return this.categories;
  }
}
</script>