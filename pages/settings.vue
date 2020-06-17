<template lang='pug'>
div
  h1 Настройки
  p.id
    | {{ userInfo.userId }}
    br
    | Это ваш уникальный id

  p
    | Чтобы поделиться с другими своим расписанием, отправьте им
    |
    n-link(:to='`/dashboard/${userInfo.userId}`') эту
    |  ссылку.
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
