<template lang='pug'>
AppCard(v-loading='isLoading'
        :name='contactName'
        :action-text='actionText'
        :button-type='buttonType'
        @action='action')
  template(#body)
    div(v-if='isAdd')
      el-input(v-model='newContactName'
               :minlength='2'
               :maxlength='15'
               placeholder='Имя контакта'
               show-word-limit
               clearable)
      el-input.margin(v-model='newContactEmail'
                      placeholder='Email контакта'
                      type='email'
                      clearable)
      el-input.margin(v-model='newContactPhone'
                      placeholder='ID контакта'
                      inputmode='numeric'
                      clearable)

    div(v-else)
      .list-item
        i.el-icon-phone
        el-link(type='info'
                :href='phoneLink'
                target='_blank') {{ contact.phone }}
      .list-item
        i.el-icon-s-custom
        el-link(type='info'
                :href='emailLink'
                target='_blank') {{ contact.email }}
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import {
  minLength, maxLength, required, email
} from 'vuelidate/lib/validators'
import AppCard from './AppCard.vue'
import { Contact, CardAction } from '~/types/dashboard'

export default Vue.extend({
  components: { AppCard },

  props: {
    itemId: {
      type: String,
      default: null
    } as PropOptions<string | null>,

    contact: {
      type: Object,
      default: null
    } as PropOptions<Contact | null>,

    actionType: {
      type: String,
      default: 'add'
    } as PropOptions<CardAction>
  },

  data () {
    return {
      isLoading: false,
      newContactName: '',
      newContactPhone: '',
      newContactEmail: ''
    }
  },

  validations: {
    newContactName: {
      minLength: minLength(2),
      maxLength: maxLength(15),
      required
    },
    newContactPhone: {
      required
    },
    newContactEmail: {
      email,
      required
    }
  },

  computed: {
    contactName (): string {
      return this.contact?.name ?? 'Новый контакт'
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
    },

    phoneLink (): string | null {
      return this.isAdd
        ? null : `tel:${this.contact!.phone}`
    },
    emailLink (): string | null {
      return this.isAdd
        ? null : `mailto:${this.contact!.email}`
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
      if (this.$v.newContactName.$invalid) {
        this.$message.error('Заполните имя контакта')
      } else if (this.$v.newContactPhone.$invalid) {
        this.$message.error('Заполните телефон контакта')
      } else if (this.$v.newContactEmail.$invalid) {
        this.$message.error('Заполните email контакта')
      } else {
        this.isLoading = true
        let { newContactName } = this
        newContactName = newContactName.trim()
        try {
          await this.$accessor.contacts.addItem({
            name: newContactName,
            phone: this.newContactPhone,
            email: this.newContactEmail.trim()
          })
          this.$message.success(`Контакт ${newContactName} добавлен`)
          this.newContactName = ''
          this.newContactPhone = ''
          this.newContactEmail = ''
        } catch (e) {
          this.$message.error(e.message)
        }
        this.isLoading = false
      }
    },

    async deleteItem (): Promise<void> {
      this.isLoading = true
      try {
        await this.$accessor.contacts.deleteItem(this.itemId!)
        this.$message.success(`Контакт "${this.contact!.name}" удален`)
      } catch (e) {
        this.$message.error(e.message)
      }
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
      font-size: 1rem

  .margin
    margin-top: 1rem
</style>
