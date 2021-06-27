<template>
  <div class="news-detail">
    <n-space>
      <n-button @click="goback">返回</n-button>
    </n-space>
    <h1 v-if="newsDetailResult.detail">{{ newsDetailResult.detail.title }}</h1>
    <h4 v-if="newsDetailResult.detail">
      时间：{{ newsDetailResult.detail.date }}
    </h4>
    <div v-if="newsDetailResult" v-html="newsDetailResult.content"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NButton, NSpace } from "naive-ui";
import axios from "axios";
@Options({
  components: {
    NButton,
    NSpace,
  },
})
export default class NewsDetail extends Vue {
  // 新闻详情页面数据
  private newsDetailResult: any = {};

  // 新闻列表API地址
  private newsApiUrl: string = "http://v.juhe.cn/toutiao/content?uniquekey=";
  private uniquekey: string = "db61b977d9fabd0429c6d0c671aeb30e";
  private key: string = "&key=d95eb2c02b12e841bafb5a49d20924be";

  // 初始化时就要获取数据
  mounted() {
    this.getData();
  }

  // 调用API数据
  getData() {
    // 从路由参数中获取要访问的URL
    this.uniquekey = this.$route.params.uniquekey.toString();

    console.log("receive uniquekey: " + this.uniquekey);

    axios
      .get(this.newsApiUrl + this.uniquekey + this.key)
      .then((response) => (this.newsDetailResult = response.data.result));

    console.log(this.newsDetailResult);
  }

  // 返回
  goback() {
    // 回退浏览记录
    this.$router.go(-1);
  }
}
</script>
