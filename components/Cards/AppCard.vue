<template lang='pug'>
el-card
  .card-header(slot='header')
    span.card-name {{ name }}
    el-button(:type='buttonType'
              @click='$emit("action")') {{ actionText }}

  slot(name='body')
</template>

<script lang='ts'>
export default {
  props: {
    name: {
      type: String,
      required: true
    },

    actionText: {
      type: String,
      required: true
    },

    buttonType: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='sass' scoped>
  .el
    &-card
      margin-bottom: 2rem

    &-button
      float: right
      padding: 5px
      font-weight: 700

  .card
    &-header
      font-weight: 700
      font-size: 1.4rem

    &-name
      font-size: 1.1rem
</style>
