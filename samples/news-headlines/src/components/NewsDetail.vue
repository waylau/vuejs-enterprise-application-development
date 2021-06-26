<template>
  <div class="news-detail">
    <n-space>
      <n-button @click="goback">返回</n-button>
    </n-space>
    <div v-html="newsDetailContent"></div>
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
  private newsDetailContent: any =
    "<p >其实明星当中有很对人玩网络游戏，特别是英雄联盟和王者荣耀，最近佛山GK电子竞技俱乐部宣布，黄子韬将加盟GK，担任合伙人兼联席CEO。今后，他将与俱乐部合作培养选手和艺人。</p><p >\n            <img width='100%' src='//dfzximg01.dftoutiao.com/minimodify/20210308/500x700_6045b42b1dd23.png' data-weight='500' data-width='500' data-height='700'></p>";
    // 新闻详情页面URL
  private newsUrl: string = "";

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
      /*.get(this.newsApiUrl + this.uniquekey + this.key)
      .then(
        (response) => (this.newsDetailContent = response.data.result.content)
      );
      */
    console.log(this.newsDetailContent);
  }

  // 返回
  goback() {
    // 回退浏览记录
    this.$router.go(-1);
  }
}
</script>
