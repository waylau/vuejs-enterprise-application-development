<template>
  <div class="news-list">
    <n-card
      v-for="newsMsg in news"
      :key="newsMsg.uniquekey"
      :title="newsMsg.title"
    >
      <n-image-group>
        <n-space>
          <n-image width="90" :src="newsMsg.thumbnail_pic_s" />
          <n-image width="90" :src="newsMsg.thumbnail_pic_s02" />
          <n-image width="90" :src="newsMsg.thumbnail_pic_s03" />
        </n-space>
      </n-image-group>
    </n-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NCard, NImageGroup, NImage, NSpace } from "naive-ui";
import { NewsService } from "../news-service";
//import { NewsMsg } from "@/news";
import axios from "axios";
@Options({
  components: {
    NCard,
    NImageGroup,
    NImage,
    NSpace,
  },
})
export default class NewsList extends Vue {
  private newsService: NewsService = new NewsService();
  // 绑定模型用的变量
  private news = [];
  // 新闻列表API地址
  newsApiUrl = "http://v.juhe.cn/toutiao/index?type=";
  alias = "top"; // 默认值top，获取全部的新闻数据
  key = "&key=d95eb2c02b12e841bafb5a49d20924be";

  // 初始化时就要获取数据
  /*created() {
    this.showNewsData();
  }*/

  // 指定参数类型NewsMsg
  // get showNewsData() {

  //return this.newsService.getNewsData();
  //}

  mounted() {
    axios
      .get(this.newsApiUrl + this.alias + this.key)
      .then((response) => (this.news = response.data.result.data));
  }
}
</script>
