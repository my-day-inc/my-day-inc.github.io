<template lang='pug'>
AppDashboardContainer(:title='title'
                      :contacts='contacts'
                      :tasks='tasks'
                      :pending='$fetchState.pending')
</template>

<script lang='ts'>
import Vue from 'vue'
import { Item, Contact, Task } from '~/types/dashboard'
import AppDashboardContainer from '~/components/containers/AppDashboardContainer.vue'

export default Vue.extend({
  middleware: 'notAuthenticated',

  components: { AppDashboardContainer },

  async fetch () {
    try {
      await this.$accessor.contacts.getItems()
    } catch (e) {
      this.$message.error(e.message)
    }
  },

  data () {
    return {
      title: 'Планировщик'
    }
  },

  computed: {
    contacts (): Item<Contact>[] {
      return this.$accessor.contacts.items
    },
    tasks (): Item<Task>[] {
      return this.$accessor.tasks.items
    }
  },

  head () {
    return {
      title: (this as any).title
    }
  }
})
</script>
