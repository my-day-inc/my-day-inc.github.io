<template lang='pug'>
div
  h1 Вход

  AppAuthContainer
    AppAuthForm(form-type='signIn'
                @submit='signIn')
</template>

<script lang='ts'>
import { AuthData } from '~/types'
import AppAuthContainer from '~/components/containers/AppAuthContainer.vue'
import AppAuthForm from '~/components/AppAuthForm.vue'

export default {
  components: {
    AppAuthContainer,
    AppAuthForm
  },

  methods: {
    signIn (authData: AuthData): void {
      console.log(authData)
    }
  }
}
</script>
