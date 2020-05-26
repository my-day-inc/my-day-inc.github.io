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
          h3.subhead Эта неделя
          TaskCard
          div(v-if='tasksWeek.length')
            TaskCard(v-for='t in tasksWeek'
                     :key='t.itemId'
                     :itemId='t.itemId'
                     :task='t.item'
                     action-type='delete')
          el-row.empty(v-else
                       type='flex'
                       justify='center'
                       align='middle')
            i.el-icon-success

      el-col
        el-container(direction='vertical')
          h3.subhead Позже
          div(v-if='tasksLater.length')
            TaskCard(v-for='t in tasksLater'
                     :key='t.itemId'
                     :itemId='t.itemId'
                     :task='t.item'
                     period='later'
                     action-type='delete')
          el-row.empty(v-else
                       type='flex'
                       justify='center'
                       align='middle')
            i.el-icon-success
</template>

<script lang='ts'>
import Vue from 'vue'
import { Item, Contact, Task } from '~/types/dashboard'
import ContactsCard from '~/components/Cards/ContactsCard.vue'
import TaskCard from '~/components/Cards/TaskCard.vue'

export default Vue.extend({
  middleware: 'notAuthenticated',

  components: {
    ContactsCard,
    TaskCard
  },

  async fetch () {
    await this.$accessor.tasks.getItems()
  },

  data () {
    return {
      week: (() => {
        const date = new Date()
        date.setDate(date.getDate() + 7)
        return date
      })()
    }
  },

  computed: {
    contacts (): Contact[] {
      return this.$accessor.contacts.entries
    },

    tasks (): Item<Task>[] {
      return this.$accessor.tasks.items
    },
    tasksWeek (): Item<Task>[] {
      return this.tasks.filter(t => new Date(t.item.date) < this.week)
    },
    tasksLater (): Item<Task>[] {
      return this.tasks.filter(t => new Date(t.item.date) > this.week)
    }
  },

  head: {
    title: 'Планировщик'
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

  .empty
    height: calc(100vh - 300px)

    i
      color: #ebeef5
      font-size: 7rem
</style>
