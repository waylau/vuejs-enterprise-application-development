<template>
  <div>
    <button @click="modalOpen = true">传入</button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          这是传入的内容。父是"body"
          <button @click="modalOpen = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private modalOpen: boolean = false;
}
</script>
