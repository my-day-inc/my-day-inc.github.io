<template lang='pug'>
h1 Регистрация

  AppAuthContainer(image='street')
    AppAuthForm(form-type='signUp'
                @submit='signUp')
</template>

<script lang='ts'>
import { AuthData } from '~/types'
import AppAuthContainer from '~/components/containers/AppAuthContainer.vue'
import AppAuthForm from '~/components/AppAuthForm.vue'

export default {
  head: {
    title: 'Регистрация'
  },

  components: {
    AppAuthContainer,
    AppAuthForm
  },

  methods: {
    signUp (authData: AuthData): void {
      console.log(authData)
    }
  }
}
</script>
