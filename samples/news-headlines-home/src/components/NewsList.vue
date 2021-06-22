<template>
  <div class="news-list">
    <n-card
      title="新时代女性的自我关爱”主题沙龙暨双山街道福泰社区妇儿活动家园启动仪式举行"
    >
      <n-image-group>
        <n-space>
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308134708_d0216565f1d6fe1abdfa03efb4f3e23c_0_mwpm_03201609.png"
          />
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308134708_d0216565f1d6fe1abdfa03efb4f3e23c_1_mwpm_03201609.png"
          />
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308134708_d0216565f1d6fe1abdfa03efb4f3e23c_2_mwpm_03201609.png"
          />
        </n-space>
      </n-image-group>
    </n-card>
    <n-card title="点赞！东海县公安局学雷锋见行动">
      <n-image-group>
        <n-space>
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308133849_b9f3d069a1ab400bf2d87fcc15793ca5_1_mwpm_03201609.png"
          />
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308133849_b9f3d069a1ab400bf2d87fcc15793ca5_2_mwpm_03201609.png"
          />
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308133849_b9f3d069a1ab400bf2d87fcc15793ca5_3_mwpm_03201609.png"
          />
        </n-space>
      </n-image-group>
    </n-card>
    <n-card title="滴滴发布女司机数据：2020年新增女性网约车司机超26万">
      <n-image-group>
        <n-space>
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308134023_7a9ca0543b00332147c42e1ee4146908_0_mwpm_03201609.png"
          />
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308134023_7a9ca0543b00332147c42e1ee4146908_1_mwpm_03201609.jpeg"
          />
          <n-image
            width="90"
            src="https://dfzximg02.dftoutiao.com/news/20210308/20210308134708_d0216565f1d6fe1abdfa03efb4f3e23c_1_mwpm_03201609.png"
          />
        </n-space>
      </n-image-group>
    </n-card>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NCard, NImageGroup, NImage, NSpace } from "naive-ui";

@Options({
  components: {
    NCard,
    NImageGroup,
    NImage,
    NSpace,
  },
})
export default class NewsList extends Vue {}
</script>
