<template>
  <div class="news-list">
    <n-card
      v-for="newsMsg in news"
      :key="newsMsg.uniquekey"
      :title="newsMsg.title"
      @click="newsClick(newsMsg.uniquekey)"
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

import axios from "axios";
@Options({
  components: {
    NCard,
    NImageGroup,
    NImage,
    NSpace,
  },
  props: {
    // 输入参数alias
    alias: String,
  },
  watch: {
    // 侦听alias的变化
    alias() {
      this.getData();
    },
  },
})
export default class NewsList extends Vue {
  // 绑定模型用的变量
  private news: any = [];

  // 新闻列表API地址
  private newsApiUrl: string = "http://v.juhe.cn/toutiao/index?type=";
  private alias: string = "top"; // 默认值top，获取全部的新闻数据
  private key: string = "&key=d95eb2c02b12e841bafb5a49d20924be";

  // 初始化时就要获取数据
  mounted() {
    this.getData();
  }

  // 调用API数据
  getData() {
    axios
      .get(this.newsApiUrl + this.alias + this.key)
      .then((response) => (this.news = response.data.result.data));
  }

  // 定义点击新闻列表的处理的方法
  newsClick(uniquekey: string) {
    console.log("uniquekey:" + uniquekey);

    // 编程式路由到指定的路径
    this.$router.push({
      name: "news-detail",
      params: {
        // 将uniquekey通过路由参数方式传递
        uniquekey: uniquekey,
      },
    });
  }
}
</script>
