<template lang='pug'>
AppCard(:name='contact.name'
        :action-text='actionText'
        @action='$emit("action", contact)')
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
import AppCard from './AppCard.vue'

export default {
  components: { AppCard },

  props: {
    contact: {
      type: Object,
      required: true
    },
    actionText: {
      type: String,
      required: true
    }
  },

  computed: {
    phoneLink (): string {
      return `tel:${this.contact.phone}`
    },
    emailLink (): string {
      return `mailto:${this.contact.email}`
    }
  }
}
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
