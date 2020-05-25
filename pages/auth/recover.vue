<template lang='pug'>
div
  h1 Восстановление

  AppAuthContainer(image='park')
    AppAuthForm(form-type='recover'
                @submit='recover')
</template>

<script lang='ts'>
import { AuthData } from '~/types/auth'
import AppAuthContainer from '~/components/containers/AppAuthContainer.vue'
import AppAuthForm from '~/components/AppAuthForm.vue'

export default {
  middleware: 'authenticated',

  components: {
    AppAuthContainer,
    AppAuthForm
  },

  methods: {
    recover (authData: AuthData): void {
      console.log(authData)
    }
  },

  head: {
    title: 'Восстановление пароля'
  }
}
</script>
