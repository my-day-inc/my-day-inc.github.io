<template lang='pug'>
div
  h1 Вход

  AppAuthContainer(image='houses')
    AppAuthForm(v-loading='isLoading'
                form-type='signIn'
                @submit='signIn')
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
    async signIn (authData: AuthData): Promise<void> {
      try {
        this.isLoading = true
        await this.$accessor.user.signIn(authData)
        this.$router.push('/me')
      } catch (e) {
        this.$message.error(e.message)
      } finally {
        this.isLoading = false
      }
    }
  },

  head: {
    title: 'Вход'
  }
})
</script>
