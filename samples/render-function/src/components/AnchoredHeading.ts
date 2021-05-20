import { Options, Vue } from "vue-class-component";
import { h } from "vue";

@Options({
  render() {
    return h(
      'h' + this.level, // 标签名称
      {}, // prop/attribute
      this.$slots.default()
    )
  },
  props: {
    level: Number
  }
})
export default class AnchoredHeading extends Vue {
  level!: Number;
}
