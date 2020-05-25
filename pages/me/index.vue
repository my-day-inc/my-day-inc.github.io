<template lang='pug'>
div
  h1 Аккаунт
  p {{ userInfo }}
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
