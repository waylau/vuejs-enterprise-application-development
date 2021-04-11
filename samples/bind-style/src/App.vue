<template>
  <!-- 绑定内联样式 -->
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

  <!-- 在内联样式中绑定对象 -->
  <div :style="styleObject"></div>

  <!-- 在内联样式中绑定数组 -->
  <div :style="styleArray"></div>

  <!-- 在内联样式中绑定多重值 -->
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
  <div :style="{ display: displayArray }"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private activeColor: string = "red";
  private fontSize: number = 30;

  private styleObject: any = {
    color: "red",
    fontSize: "30px",
  };

  private styleArray: any[] = [
    {
      color: "red",
      fontSize: "30px",
    },
    {
      backgroundColor: "lightgrey",
      textAlign: "center",
    },
  ];

  private displayArray: string[] = ["-webkit-box", "-ms-flexbox", "flex"];
}
</script>
