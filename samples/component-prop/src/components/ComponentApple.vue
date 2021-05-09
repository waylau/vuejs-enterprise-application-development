<template>
  <div class="apple">
    <h2>title: {{ title }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>isPublished: {{ isPublished }}</h2>
    <h2>publishedYears: {{ publishedYears }}</h2>
    <h2>author: {{ author }}</h2>
    <h2>children: {{ children }}</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    age: Number,
    isPublished: Boolean,
    publishedYears: Array,
    author: Object,
    children: {
      // 自定义验证函数
      validator: function(value: Array<String>) {
        // 必须有值
        console.log("value.length: " + value.length);
        return value.length > 0
      }
    }
  },
})
export default class ComponentApple extends Vue {
  title!: string;
  age!: Number;
  isPublished!: Boolean;
  publishedYears: Array<Number> = [];
  author!: Object;
  children: Array<String> = [];
}
</script>