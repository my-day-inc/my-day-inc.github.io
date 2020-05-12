<template lang='pug'>
  el-container
    el-aside
      AppSidebar
    el-main
      el-row
        el-col(:span='20')
          nuxt
</template>

<script lang='ts'>
import AppSidebar from '~/components/AppSidebar.vue'

export default {
  components: {
    AppSidebar
  }
}
</script>

<style lang='sass'>
  html
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif
    font-size: 16px
    word-spacing: 1px
    -moz-osx-font-smoothing: grayscale
    -webkit-font-smoothing: antialiased
    box-sizing: border-box

  *,
  *::before,
  *::after
    box-sizing: border-box
    margin: 0
</style>
