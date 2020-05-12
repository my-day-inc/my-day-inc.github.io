<template lang='pug'>
el-menu(default-active='/' collapse router)
  el-menu-item(index='/')
    i.el-icon-s-home
    span(slot='title') Домой

  el-menu-item(index='/me')
    i.el-icon-user-solid
    span(slot='title') Аккаунт

  el-menu-item(index='/me/settings')
    i.el-icon-s-tools
    span(slot='title') Настройки
</template>
