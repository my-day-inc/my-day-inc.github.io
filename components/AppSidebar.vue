<template lang='pug'>
el-menu(v-loading='isLoading'
        :default-active='$route.path'
        collapse
        router)
  el-menu-item(index='/')
    i.el-icon-s-home
    span(slot='title') Домой

  el-menu-item(index='/dashboard')
    i.el-icon-menu
    span(slot='title') Планировщик

  el-menu-item(index='/docs'
               disabled)
    i.el-icon-s-order
    span(slot='title') Документы

  el-menu-item(index='/reports'
               disabled)
    i.el-icon-s-marketing
    span(slot='title') Отчеты

  el-menu-item(index='/settings')
    i.el-icon-s-tools
    span(slot='title') Настройки

  el-menu-item.no-index(v-if='isAuthenticated'
                        @click='signOut')
    i.el-icon-error
    span(slot='title') Выйти
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isLoading: false
    }
  },

  computed: {
    isAuthenticated (): boolean {
      return this.$accessor.user.isAuthenticated
    }
  },

  methods: {
    async signOut (): Promise<void> {
      this.isLoading = true
      try {
        await this.$accessor.user.signOut()
        this.$router.push('/')
        this.$message('Вы вышли из аккаунта')
      } catch (e) {
        this.$message.error(e.message)
      }
      this.isLoading = false
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

    .no-index
      color: #909399 !important
</style>
