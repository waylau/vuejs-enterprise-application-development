import { Options, Vue } from "vue-class-component";
import { h } from "vue";

@Options({
  props: ['items'],
  render() {
    if (this.items.length) {
      return h('ul', this.items.map((item: any) => {
        return h('li', item.name)
      }))
    } else {
      return h('p', 'No items found.')
    }
  }
})
export default class Heading extends Vue {
}
