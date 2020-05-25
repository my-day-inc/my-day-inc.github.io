<template lang='pug'>
el-menu(:default-active='path'
        collapse
        router)
  el-menu-item(index='/')
    i.el-icon-s-home
    span(slot='title') Домой

  el-menu-item(index='/me')
    i.el-icon-user-solid
    span(slot='title') Аккаунт

  el-menu-item(index='/dashboard')
    i.el-icon-menu
    span(slot='title') Планировщик

  el-menu-item(index='/docs' disabled)
    i.el-icon-s-order
    span(slot='title') Документы

  el-menu-item(index='/reports' disabled)
    i.el-icon-s-marketing
    span(slot='title') Отчеты

  el-menu-item(index='/me/settings')
    i.el-icon-s-tools
    span(slot='title') Настройки

  el-menu-item(v-if='isAuthenticated' @click='signOut')
    i.el-icon-caret-left
    span(slot='title') Выйти
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    path (): string {
      return this.$route.path
    },
    isAuthenticated (): boolean {
      return this.$accessor.user.isAuthenticated
    }
  },

  methods: {
    async signOut (): Promise<void> {
      try {
        await this.$accessor.user.signOut()
        this.$router.push('/')
      } catch (e) {
        this.$message.error(e.message)
      }
    }
  }
})
</script>

<style lang='sass' scoped>
  .el
    &-menu
      position: sticky
      top: 0
      height: 100vh
</style>
