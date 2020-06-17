<template lang='pug'>
el-card
  .card-header(slot='header')
    span.card-name {{ name }}
    el-button(v-if='showButton'
              :type='buttonType'
              @click='$emit("action")') {{ actionText }}

  slot(name='body')
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    showButton: {
      type: Boolean,
      default: true
    } as PropOptions<boolean>,
    name: {
      type: String,
      required: true
    } as PropOptions<string>,
    actionText: {
      type: String,
      required: true
    } as PropOptions<string>,
    buttonType: {
      type: String,
      required: true
    } as PropOptions<string>
  }
})
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
