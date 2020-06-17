<template lang='pug'>
AppDashboardContainer(:myself='false'
                      :title='title'
                      :tasks='tasks'
                      :pending='$fetchState.pending')
</template>

<script lang='ts'>
import Vue from 'vue'
import { Item, Task } from '~/types/dashboard'
import AppDashboardContainer from '~/components/containers/AppDashboardContainer.vue'

export default Vue.extend({
  components: { AppDashboardContainer },

  async fetch () {
    const { $axios, params, redirect } = this.$nuxt.context
    const url = `https://v1.userbase.com/v1/admin/users/${params.id}`
    const token = 'acWReBq02JyKedoXFl/vbyFC3BpDKdEbKjSFfGoGyko='
    try {
      const { data } = await $axios(url, { headers: { Authorization: `Bearer ${token}` } })
      this.user = data
    } catch (e) {
      const { message } = e
      if (message === 'Request failed with status code 400') {
        this.$message.error('Пользователь не существует')
        return redirect('/dashboard')
      } else {
        this.$message.error(message)
      }
    }
  },

  data () {
    return {
      user: null
    }
  },

  computed: {
    title (): string {
      const firstName = (this as any).user?.profile?.firstName
      const lastName = (this as any).user?.profile?.lastName
      return firstName && lastName ? `${lastName} ${firstName}` : this.$route.params.id
    },
    tasks (): Item<Task>[] {
      const tasksStr = (this as any).user?.profile?.tasks
      return tasksStr ? JSON.parse(tasksStr) : []
    }
  },

  head () {
    return {
      title: (this as any).title
    }
  }
})
</script>
