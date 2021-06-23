<template>
  <div class="news-navigater">
    <n-tabs type="line">
      <n-tab-pane
        v-for="category in categories"
        :key="category.alias"
        :tab="category.name"
        :name="category.name"
      >
        {{ category.name }}
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NTabPane } from "naive-ui";
import { NTabs } from "naive-ui";
import { CategoryService } from "../category-service";
import { Category } from "@/category";

@Options({
  components: {
    NTabPane,
    NTabs,
  },
})
export default class NewsNavigater extends Vue {
  private categoryService: CategoryService = new CategoryService();
  private categories: Category[] = this.categoryService.getCategoryData();
}
</script>
