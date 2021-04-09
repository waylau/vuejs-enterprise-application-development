<template>
  <div>
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTabComponent === tab }]"
      @click="currentTabComponent = tab"
    >
      {{ tab }}
    </button>

    <!-- 当currentTabComponent变化时，组件也会变化 -->
    <component :is="currentTabComponent"></component>
  </div>
</template>

 

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import TemplateOne from "./components/TemplateOne.vue";
import TemplateTwo from "./components/TemplateTwo.vue";

@Options({
  components: {
    TemplateOne,
    TemplateTwo,
  },
})
export default class App extends Vue {
  private currentTabComponent: string = "TemplateOne";

  private tabs: string[] = ["TemplateOne", "TemplateTwo"];
}
</script>