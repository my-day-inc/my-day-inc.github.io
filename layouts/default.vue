<template lang='pug'>
  el-container
    el-aside
      AppSidebar

    el-container
      el-header
        h1 Test

      el-main
        el-row
          el-col
            nuxt

      el-footer
        p Test
</template>

<script lang='ts'>
import AppSidebar from '~/components/AppSidebar.vue'

export default {
  components: { AppSidebar }
}
</script>

<style lang='sass' scoped>
  .el
    &-aside
      overflow: initial
</style>
