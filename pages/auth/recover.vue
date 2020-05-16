<template lang='pug'>
div
  h1 Восстановление

  AppAuthContainer
    AppAuthForm(form-type='recover'
                @submit='recover')
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
    recover (authData: AuthData): void {
      console.log(authData)
    }
  }
}
</script>
