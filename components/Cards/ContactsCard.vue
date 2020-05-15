<template lang='pug'>
AppCard(v-loading='isLoading'
        :name='contactName'
        :action-text='actionText'
        :button-type='buttonType'
        @action='action')
  template(#body)
    div(v-if='isAdd')
      el-input(v-model='newContactId'
               v-mask='"######"'
               :minlength='6'
               :maxlength='6'
               placeholder='ID контакта'
               inputmode='numeric'
               show-word-limit
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
  minLength, maxLength, numeric, required
} from 'vuelidate/lib/validators'
import AppCard from './AppCard.vue'
import { Contact, CardAction } from '~/types'

export default Vue.extend({
  components: { AppCard },

  props: {
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
      newContactId: this.actionType === 'add' ? '' : null
    }
  },

  validations: {
    newContactId: {
      minLength: minLength(6),
      maxLength: maxLength(6),
      numeric,
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
          this.addEntry()
          break
        case 'delete':
          this.deleteEntry()
          break
      }
    },

    addEntry (): void {
      if (this.$v.newContactId.$invalid) {
        this.$message.error('Заполните ID контакта!')
      } else {
        this.isLoading = true
        setTimeout(() => {
          this.$message.success(`Контакт ${this.newContactId} добавлен.`)
          this.newContactId = ''
          this.isLoading = false
        }, 1000)
      }
    },

    async deleteEntry (): Promise<void> {
      const { contact } = this
      this.isLoading = true
      await this.$accessor.contacts.deleteEntry(contact!.id)
      this.$message.success(`Контакт "${contact!.name}" удален.`)
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
