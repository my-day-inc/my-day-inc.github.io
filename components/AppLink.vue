<template lang='pug'>
el-link(v-if='router'
        :type='type'
        @click.prevent='navigate')
  slot

el-link(v-else
        :href='to'
        :type='type')
  slot
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'

type LinkType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true
    },

    router: {
      type: Boolean,
      default: true
    },

    type: {
      type: String,
      default: 'default'
    } as PropOptions<LinkType>
  },

  methods: {
    navigate (): void {
      this.$router.push(this.to)
    }
  }
})
</script>
