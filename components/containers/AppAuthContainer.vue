<template lang='pug'>
el-row.app-form-container(type='flex'
                          align='middle')
  el-col(:span='24')
    el-row(type='flex'
           justify='center'
           align='middle'
           :gutter='32')
      el-col(:xs='24' :sm='20' :md='9')
        slot
      el-col(:span='15').hidden-sm-and-down
        el-image.app-form-image(
          :src='require("~/assets/images/common/street.svg")'
          fit='cover')
</template>

<style lang='sass' scoped>
  .app-form
    &-container
      margin-top: 2rem
      height: calc(100vh - 50px - 10rem)
      +sm
        height: unset

    &-image
      width: 100%
</style>
