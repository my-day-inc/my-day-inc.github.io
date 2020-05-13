<template lang='pug'>
  el-container
    el-aside(width='calc(84px + 2rem)')
      AppSidebar

    el-container
      el-main
        el-row
          el-col.content
            nuxt
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

  .content
    padding: 2rem calc(20px + 2rem) 2rem 0
</style>
