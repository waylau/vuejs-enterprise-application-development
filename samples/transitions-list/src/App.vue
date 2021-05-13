<template>
  <div id="list-demo">
    <button @click="add">添加</button>
    <button @click="remove">移除</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private items: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private nextNum: number = 10;

  randomIndex() {
    return Math.floor(Math.random() * this.items.length);
  }
  add() {
    this.items.splice(this.randomIndex(), 0, this.nextNum++);
  }
  remove() {
    this.items.splice(this.randomIndex(), 1);
  }
}
</script>
<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>