<template>
  <div>
    <!--绑定文本-->
    <input v-model="message" placeholder="编辑消息" />
    <p>输入的消息是: {{ message }}</p>

    <!--绑定多行文本-->
    <textarea v-model="message" placeholder="编辑消息"></textarea>
    <p>输入的消息是: {{ message }}</p>

    <!--单个复选框，绑定到布尔值-->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">是否选中：{{ checked }}</label>

    <!--多个复选框，绑定到同一个数组-->
    <div>
      <input type="checkbox" id="baozi" value="包子" v-model="checkedNames" />
      <label for="baozi">包子</label>
      <input type="checkbox" id="cake" value="蛋糕" v-model="checkedNames" />
      <label for="cake">蛋糕</label>
      <input
        type="checkbox"
        id="tangyuan"
        value="汤圆"
        v-model="checkedNames"
      />
      <label for="tangyuan">汤圆</label>
      <br />
      <span>点菜：{{ checkedNames }}</span>
    </div>

    <!--单选框，绑定到同一个值-->
    <div>
      <input type="radio" id="good" value="红星高照" v-model="picked" />
      <label for="good">红星高照</label>
      <br />
      <input type="radio" id="bad" value="霉运临头" v-model="picked" />
      <label for="bad">霉运临头</label>
      <br />
      <span>预测今日运势: {{ picked }}</span>
    </div>

    <!--选择框，绑定到同一个值-->
    <div>
      <select v-model="selected">
        <option disabled value="">选择一个套餐</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>选择的套餐是：{{ selected }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {
  private message: string = "";
  private checked: boolean = false;
  private checkedNames: string[] = [];
  private picked: string = "";
  private selected: string = "";
}
</script>