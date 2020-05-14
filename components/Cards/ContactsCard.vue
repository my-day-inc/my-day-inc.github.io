<template lang='pug'>
AppCard(:name='contactsName'
        :action-text='actionText'
        :action-type='actionType'
        :button-type='buttonType'
        @action='action')
  template(#body)
    div(v-if='isAdd')
      input(v-model='newContactId')

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
import AppCard from './AppCard.vue'
import { Contact, ContactsAction } from '~/types'

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
    } as PropOptions<ContactsAction>
  },

  data () {
    return {
      newContactId: this.actionType === 'add' ? '' : null
    }
  },

  computed: {
    contactsName (): string {
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
          this.addContact()
          break
        case 'delete':
          this.deleteContact()
          break
      }
    },

    addContact (): void {
      // eslint-disable-next-line
      console.log(`Contact added: ${this.newContactId}`)
    },

    deleteContact (): void {
      // eslint-disable-next-line
      console.log(`Contact deleted: ${this.contact!.name}`)
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
