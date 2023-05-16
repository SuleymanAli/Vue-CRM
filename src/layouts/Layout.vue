<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import LayoutDefault from './LayoutDefault'
import LayoutEmpty from './LayoutEmpty'

export default {
  components: {
    LayoutDefault,
    LayoutEmpty
  },
  computed: {
    layout () {
      return this.$route.meta.layout || 'LayoutDefault'
    }
  }
}
</script>
