<template lang='pug'>
AppCard(:name='contact.name'
        :action-text='actionText'
        :button-type='buttonType'
        @action='action')
  template(#body)
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
import AppCard from './AppCard.vue'
import { Contact, ContactsAction } from '~/types'

export default Vue.extend({
  components: { AppCard },

  props: {
    contact: {
      type: Object,
      default: (): Contact => ({
        id: '',
        name: '',
        phone: '',
        email: ''
      })
    } as PropOptions<Contact>,

    actionType: {
      type: String,
      default: 'add'
    } as PropOptions<ContactsAction>
  },

  computed: {
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

    phoneLink (): string {
      return `tel:${this.contact.phone}`
    },

    emailLink (): string {
      return `mailto:${this.contact.email}`
    }
  },

  methods: {
    action (): void {
      switch (this.actionType) {
        case 'add':
          this.addContact()
          break
        case 'delete':
          this.deleteContact()
          break
      }
    },

    addContact (): void {
      const { contact } = this
      // eslint-disable-next-line
      console.log(`Contact added: ${contact.name}`)
    },

    deleteContact (): void {
      const { contact } = this
      // eslint-disable-next-line
      console.log(`Contact deleted: ${contact.name}`)
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
