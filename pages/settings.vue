<template lang='pug'>
div
  h1 Настройки
  p.id {{ userInfo.userId }}
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  middleware: 'notAuthenticated',

  computed: {
    userInfo () {
      return this.$accessor.user.userInfo
    }
  }
})
</script>

<style lang='sass' scoped>
  .id
    color: #c0c4cc
</style>
