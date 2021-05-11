<template>
  <div>
    <div
      @mousemove="xCoordinate"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
    >
      <h3>移动鼠标</h3>
      <p>坐标x: {{ x }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private x: number = 0;

  xCoordinate(e: any) {
    this.x = e.clientX;
  }
}
</script>
<style>
.movearea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 6vmin;
  transition: 0.2s background-color ease;
}
</style>