<template lang='pug'>
div
  h1 Восстановление

  AppAuthContainer(image='park')
    AppAuthForm(v-loading='isLoading'
                form-type='recover'
                @submit='recover')
</template>

<script lang='ts'>
import Vue from 'vue'
import { AuthData } from '~/types/auth'
import AppAuthContainer from '~/components/containers/AppAuthContainer.vue'
import AppAuthForm from '~/components/AppAuthForm.vue'

export default Vue.extend({
  middleware: 'authenticated',

  components: {
    AppAuthContainer,
    AppAuthForm
  },

  data () {
    return {
      isLoading: false
    }
  },

  methods: {
    async recover (authData: AuthData): Promise<void> {
      try {
        this.isLoading = true
        await this.$accessor.user.recover(authData)
        this.$router.push('/auth/signin')
        this.$message
          .success(`Временный пароль отправлен на ${authData.email}`)
      } catch (e) {
        this.$message.error(e.message)
      } finally {
        this.isLoading = false
      }
    }
  },

  head: {
    title: 'Восстановление пароля'
  }
})
</script>
