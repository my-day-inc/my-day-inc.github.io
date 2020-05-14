<template lang='pug'>
  div
    h1 Планировщик

    .dashboard
      el-row.cols(type='flex'
                  justify='space-between'
                  :gutter='32')
        el-col
          el-container(direction='vertical')
            h3.subhead Контакты
            ContactsCard
            ContactsCard(v-for='c in contacts'
                         :key='c.id'
                         :contact='c'
                         action-type='delete')

        el-col
          el-container(direction='vertical')
            h3.subhead Неделя

        el-col
          el-container(direction='vertical')
            h3.subhead Месяц
</template>

<script lang='ts'>
import Vue from 'vue'
import { Contact } from '~/types'
import ContactsCard from '~/components/Cards/ContactsCard.vue'

export default Vue.extend({
  components: {
    ContactsCard
  },

  computed: {
    contacts (): Contact[] {
      return this.$accessor.contacts.entries
    }
  }
})
</script>

<style lang='sass' scoped>
  .dashboard
    overflow: auto

  .cols
    margin-top: 3rem
    max-width: 100%
    +xl
      min-width: 1000px
      max-width: unset

  .subhead
    margin-bottom: 2rem
    font-size: 1.5rem
    color: #c0c4cc
</style>
