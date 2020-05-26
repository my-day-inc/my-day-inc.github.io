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
               :rows='2'
               :autosize='{ minRows: 2, maxRows: 3 }'
               type='textarea'
               placeholder='Описание'
               show-word-limit
               clearable)
      el-date-picker(v-model='newTaskDate'
                     type='date'
                     placeholder='Дата'
                     :clearable='false'
                     :editable='false')

    div(v-else)
      .list-item
        span.date {{ taskDate }}
      .list-item
        p.body {{ task.body }}
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { minLength, maxLength, required } from 'vuelidate/lib/validators'
import AppCard from './AppCard.vue'
import { Task, CardAction, TaskPeriod } from '~/types/dashboard'

export default Vue.extend({
  components: { AppCard },

  props: {
    itemId: {
      type: String,
      default: null
    } as PropOptions<string | null>,

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
      newTaskBody: '',
      newTaskDate: new Date()
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
    taskDate (): string {
      const date = new Date(this.task!.date)
      return date.toLocaleString('ru-RU', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: this.period === 'week' ? undefined : 'numeric'
      })
    },

    actionText (): string {
      const texts = {
        add: 'Создать',
        delete: 'Удалить'
      }
      return texts[this.actionType]
    },

    buttonType (): string {
      const types = {
        add: 'success',
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
          this.addItem()
          break
        case 'delete':
          this.deleteItem()
          break
      }
    },

    async addItem (): Promise<void> {
      if (this.$v.newTaskName.$invalid) {
        this.$message.error('Заполните название задачи!')
      } else if (this.$v.newTaskBody.$invalid) {
        this.$message.error('Заполните описание задачи!')
      } else {
        const { newTaskBody, newTaskDate } = this
        const newTaskName = this.newTaskName.trim()
        this.isLoading = true
        try {
          await this.$accessor.tasks.addItem({
            name: newTaskName,
            body: newTaskBody.trim(),
            date: newTaskDate
          })
          this.$message.success(`Задача "${newTaskName}" добавлена.`)
          this.newTaskName = ''
          this.newTaskBody = ''
        } catch (e) {
          this.$message.error(e.message)
        }
        this.isLoading = false
      }
    },

    async deleteItem (): Promise<void> {
      this.isLoading = true
      try {
        await this.$accessor.tasks.deleteItem(this.itemId!)
        this.$message.success(`Задача "${this.task!.name}" удалена.`)
      } catch (e) {
        this.$message.error(e.message)
      }
      this.isLoading = false
    }
  }
})
</script>

<style lang='sass' scoped>
  .el-textarea,
  .el-date-editor
    margin-top: 1rem

  .el-date-editor
    width: 100%

  .list-item
    font-size: 1rem
    margin-bottom: 18px

    i
      font-size: 1rem

  .date
    font-style: italic
    color: #909399
</style>
