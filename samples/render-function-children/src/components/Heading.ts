import { Options, Vue } from "vue-class-component";
import { h } from "vue";

@Options({
  render() {
    return h(
      'div', // 标签名称
      {}, // prop/attribute
      [
        'Some text comes first.',
        h('h1', 'A headline'),
      ]
    )
  }
})
export default class Heading extends Vue {
}
