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
               placeholder='Имя'
               show-word-limit
               clearable)
      el-input.margin(v-model='newContactEmail'
                      placeholder='Email'
                      type='email'
                      :minlength='5'
                      :maxlength='128'
                      clearable)
        i.el-input__icon.el-icon-s-custom(slot='prefix')
      el-input.margin(v-model='newContactPhone'
                      v-mask='"+7 (###) ### ##-##"'
                      placeholder='Телефон'
                      inputmode='numeric'
                      clearable)
        i.el-input__icon.el-icon-phone(slot='prefix')

    div(v-else)
      .list-item
        i.el-icon-s-custom
        el-link(type='info'
                :href='emailLink'
                target='_blank') {{ contact.email }}
      .list-item
        i.el-icon-phone
        el-link(type='info'
                :href='phoneLink'
                target='_blank') {{ contact.phone }}
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
      required,
      minLength: minLength(2),
      maxLength: maxLength(15)
    },
    newContactPhone: {
      required,
      minLength: minLength(18),
      maxLength: maxLength(18)
    },
    newContactEmail: {
      required,
      email,
      minLength: minLength(5),
      maxLength: maxLength(128)
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
