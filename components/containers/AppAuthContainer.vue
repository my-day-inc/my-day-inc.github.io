<template lang='pug'>
el-row.app-form-container(type='flex' align='middle')
  el-col(:span='24')
    el-row(type='flex' justify='center' align='middle')
      el-col(:span='10') Asd
      el-col(:span='14')
        el-image.app-form-image.hidden-sm-and-down(
          :src='require("~/assets/images/common/street.svg")'
          fit='cover')
</template>

<style lang='sass' scoped>
  .app-form
    &-container
      margin-top: 2rem
      height: calc(100vh - 50px - 10rem)

    &-image
      width: 100%
</style>
