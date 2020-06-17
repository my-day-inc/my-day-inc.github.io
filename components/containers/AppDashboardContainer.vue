<template lang='pug'>
div
  h1 {{ title }}

  .dashboard
    el-row.cols(type='flex'
                justify='space-between'
                :gutter='32')
      el-col(v-if='myself')
        el-container(direction='vertical')
          h3.subhead Контакты
          ContactsCard
          content-placeholders(v-if='pending'
                               :rounded='true')
            content-placeholders-img(v-for='i in 10'
                                     :key='i')
          div(v-else)
            div(v-if='contacts.length')
              ContactsCard(v-for='c in contacts'
                           :key='c.itemId'
                           :itemId='c.itemId'
                           :contact='c.item'
                           action-type='delete')
            el-row.empty(v-else
                         type='flex'
                         justify='center'
                         align='middle')
              i.el-icon-user-solid

      el-col
        el-container(direction='vertical')
          h3.subhead Эта неделя
          TaskCard(v-if='myself')
          content-placeholders(v-if='pending'
                               :rounded='true')
            content-placeholders-img(v-for='i in 10'
                                     :key='i')
          div(v-else)
            div(v-if='tasksWeek.length')
              TaskCard(v-for='t in tasksWeek'
                       :key='t.itemId'
                       :show-button='myself'
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
          content-placeholders(v-if='pending'
                               :rounded='true')
            content-placeholders-img(v-for='i in 10'
                                     :key='i')
          div(v-else)
            div(v-if='tasksLater.length')
              TaskCard(v-for='t in tasksLater'
                       :key='t.itemId'
                       :show-button='myself'
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
import Vue, { PropOptions } from 'vue'
import { Item, Contact, Task } from '~/types/dashboard'
import ContactsCard from '~/components/Cards/ContactsCard.vue'
import TaskCard from '~/components/Cards/TaskCard.vue'

export default Vue.extend({
  components: {
    ContactsCard,
    TaskCard
  },

  props: {
    myself: {
      type: Boolean,
      default: true
    } as PropOptions<boolean>,
    title: {
      required: true,
      type: String
    } as PropOptions<string>,
    contacts: {
      type: Array,
      default: null
    } as PropOptions<Item<Contact>[]>,
    tasks: {
      required: true,
      type: Array
    } as PropOptions<Item<Task>[]>,
    pending: {
      required: true,
      type: Boolean
    } as PropOptions<boolean>
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
    tasksWeek (): Item<Task>[] {
      return this.tasks.filter(t => new Date(t.item.date) < this.week)
    },
    tasksLater (): Item<Task>[] {
      return this.tasks.filter(t => new Date(t.item.date) > this.week)
    }
  }
})
</script>

<style lang='sass' scoped>
  .dashboard
    overflow: auto
    +xl
      padding: 0 1rem

    &::before
      display: none
      content: ''
      width: 1rem
      height: calc(100% - 6rem)
      position: absolute
      right: 0
      bottom: 0
      background: linear-gradient(to left, #fff, transparent)
      pointer-events: none
      z-index: 1
      +xl
        display: block

    &::after
      display: none
      content: ''
      width: 1rem
      height: calc(100% - 6rem)
      position: absolute
      left: 0
      bottom: 0
      background: linear-gradient(to right, #fff, transparent)
      pointer-events: none
      z-index: 1
      +xl
        display: block

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
