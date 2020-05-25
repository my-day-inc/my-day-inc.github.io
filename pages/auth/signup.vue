<template lang='pug'>
h1 Регистрация

  AppAuthContainer(image='street')
    AppAuthForm(form-type='signUp'
                @submit='signUp')
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

  methods: {
    async signUp (authData: AuthData): Promise<void> {
      try {
        await this.$accessor.user.signUp(authData)
        this.$router.push('/me')
      } catch (e) {
        this.$message.error(e.message)
      }
    }
  },

  head: {
    title: 'Регистрация'
  }
})
</script>
