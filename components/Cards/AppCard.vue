<template lang='pug'>
el-card
  .card-header(slot='header')
    span(v-if='isAdd').card-name Add placeholder
    span(v-else-if='isDelete').card-name {{ name }}

    el-button(:type='buttonType'
              @click='$emit("action")') {{ actionText }}

  slot(name='body')
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { ContactsAction } from '~/types'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },

    actionText: {
      type: String,
      required: true
    },

    actionType: {
      type: String,
      required: true
    } as PropOptions<ContactsAction>,

    buttonType: {
      type: String,
      required: true
    }
  },

  computed: {
    isAdd (): boolean {
      return this.actionType === 'add'
    },
    isDelete (): boolean {
      return this.actionType === 'delete'
    }
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
