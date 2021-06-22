<template>
    <n-button>Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="info">Info</n-button>
    <n-button type="success">Success</n-button>
    <n-button type="warning">Warning</n-button>
    <n-button type="error">Error</n-button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { NButton } from 'naive-ui'

@Options({
  components: {
    NButton,
  },
})
export default class App extends Vue {}
</script>
