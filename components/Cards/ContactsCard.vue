<template lang='pug'>
el-card
  .clearfix(slot='header')
    span.name {{ name }}
    el-button(v-if='btnTxt' type='danger' @click='btnCb') {{ btnTxt }}

  .list-item(v-if='data.phone')
    i.el-icon-phone
    el-link(type='info'
            :href='`tel:${data.phone}`'
            target='_blank') {{ data.phone }}
  .list-item(v-if='data.email')
    i.el-icon-s-custom
    el-link(type='info'
            :href='`mailto:${data.email}`'
            target='_blank') {{ data.email }}
</template>

<script lang='ts'>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    btnTxt: {
      type: String,
      default: null
    },
    btnCb: {
      type: Function,
      default: () => {}
    },
    data: {
      type: Object,
      default: () => ({})
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
