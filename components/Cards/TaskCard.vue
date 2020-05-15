<template lang='pug'>
AppCard(v-loading='isLoading'
        :name='taskName'
        :action-text='actionText'
        :button-type='buttonType'
        @action='action')
  template(#body)
    div(v-if='isAdd')
      el-input(v-model='newTaskName'
               :minlength='2'
               :maxlength='15'
               placeholder='Название'
               show-word-limit
               clearable)
      el-input(v-model='newTaskBody'
               :minlength='2'
               :maxlength='140'
               type='textarea'
               placeholder='Задача'
               autosize
               show-word-limit
               clearable)

    div(v-else)
      .list-item
        i.el-icon-phone
      .list-item
        i.el-icon-s-custom
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { minLength, maxLength, required } from 'vuelidate/lib/validators'
import AppCard from './AppCard.vue'
import { Task, CardAction, TaskPeriod } from '~/types'

export default Vue.extend({
  components: { AppCard },

  props: {
    task: {
      type: Object,
      default: null
    } as PropOptions<Task | null>,

    actionType: {
      type: String,
      default: 'add'
    } as PropOptions<CardAction>,

    period: {
      type: String,
      default: 'week'
    } as PropOptions<TaskPeriod>
  },

  data () {
    return {
      isLoading: false,
      newTaskName: '',
      newTaskBody: ''
    }
  },

  validations: {
    newTaskName: {
      minLength: minLength(2),
      maxLength: maxLength(15),
      required
    },
    newTaskBody: {
      minLength: minLength(2),
      maxLength: maxLength(140),
      required
    }
  },

  computed: {
    taskName (): string {
      return this.task?.name ?? 'Новая задача'
    },

    actionText (): string {
      const texts = {
        add: 'Добавить',
        delete: 'Удалить'
      }
      return texts[this.actionType]
    },

    buttonType (): string {
      const types = {
        add: 'primary',
        delete: 'danger'
      }
      return types[this.actionType]
    },

    isAdd (): boolean {
      return this.actionType === 'add'
    },
    isDelete (): boolean {
      return this.actionType === 'delete'
    }
  },

  methods: {
    action (): void {
      switch (this.actionType) {
        case 'add':
          this.addEntry()
          break
        case 'delete':
          this.deleteEntry()
          break
      }
    },

    async addEntry (): Promise<void> {
      if (this.$v.newTaskName.$invalid) {
        this.$message.error('Заполните название задачи!')
      } else if (this.$v.newTaskBody.$invalid) {
        this.$message.error('Опишите задачу!')
      } else {
        const { newTaskName, newTaskBody } = this
        this.isLoading = true
        await this.$accessor.tasks.addEntry({
          name: newTaskName,
          body: newTaskBody,
          period: this.period
        })
        this.$message.success(`Задача "${newTaskName}" добавлена.`)
        this.newTaskName = ''
        this.newTaskBody = ''
        this.isLoading = false
      }
    },

    async deleteEntry (): Promise<void> {
      const { task } = this
      this.isLoading = true
      await this.$accessor.tasks.deleteEntry({
        id: task!.id,
        period: this.period
      })
      this.$message.success(`Задача "${task!.name}" удалена.`)
      this.isLoading = false
    }
  }
})
</script>

<style lang='sass' scoped>
  .list-item
    font-size: 1rem
    margin-bottom: 18px

    i
      font-size: 1rem

    .el-link
      margin-left: 10px
</style>
