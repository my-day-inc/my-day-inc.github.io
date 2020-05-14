<template lang='pug'>
el-card
  .clearfix(slot='header')
    span.name {{ contact.name }}
    el-button(type='danger'
              @click='$emit("action", contact)') {{ actionText }}

  .list-item
    i.el-icon-phone
    el-link(type='info'
            :href='`tel:${contact.phone}`'
            target='_blank') {{ contact.phone }}
  .list-item
    i.el-icon-s-custom
    el-link(type='info'
            :href='`mailto:${contact.email}`'
            target='_blank') {{ contact.email }}
</template>

<script lang='ts'>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    },
    actionText: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang='sass' scoped>
  .el-card
    margin-bottom: 2rem

  .clearfix
    font-weight: 700

    .name
      font-size: 1.1rem

  .el-button
    float: right
    padding: 5px
    font-weight: 700

  .list-item
    font-size: 1rem
    margin-bottom: 18px

    i
      font-size: 1rem

    .el-link
      margin-left: 10px
</style>
