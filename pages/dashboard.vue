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
          TaskCard
          TaskCard(v-for='t in tasksWeek'
                   :key='t.id'
                   :task='t'
                   action-type='delete')

      el-col
        el-container(direction='vertical')
          h3.subhead Месяц
          TaskCard(period='month')
          TaskCard(v-for='t in tasksMonth'
                   :key='t.id'
                   :task='t'
                   period='month'
                   action-type='delete')
</template>

<script lang='ts'>
import Vue from 'vue'
import { Contact, Task } from '~/types'
import ContactsCard from '~/components/Cards/ContactsCard.vue'
import TaskCard from '~/components/Cards/TaskCard.vue'

export default Vue.extend({
  components: {
    ContactsCard,
    TaskCard
  },

  computed: {
    contacts (): Contact[] {
      return this.$accessor.contacts.entries
    },

    tasksWeek (): Task[] {
      return this.$accessor.tasks.week.slice().reverse()
    },
    tasksMonth (): Task[] {
      return this.$accessor.tasks.month.slice().reverse()
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
