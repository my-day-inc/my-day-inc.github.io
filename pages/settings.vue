<template lang='pug'>
div
  h1 Настройки

  p.desc
    | Это страница с настройками, тут вы
    | можете изменить некоторые данные.

  el-row(:gutter='96')
    el-col(:xs='24' :sm='24' :md='12')
      h4 Публичная информация
      el-form(label-position='top'
              @submit.native.prevent='submitPublicInfo')
        el-form-item(label='Идентификатор')
          el-input(v-model='user.userInfo.userId'
                   disabled)
            el-button(slot='append'
                      icon='el-icon-copy-document'
                      title='Скопировать'
                      @click='copyId')

        el-form-item(label='Имя')
          el-input(v-model='firstName'
                   placeholder='Введите имя'
                   :minlength='2'
                   :maxlength='128'
                   clearable)

        el-form-item(label='Фамилия')
          el-input(v-model='lastName'
                   placeholder='Введите фамилию'
                   :minlength='2'
                   :maxlength='128'
                   clearable)

        el-button(type='primary'
                  native-type='submit') Сохранить

      h4 Аккаунт
      el-form(label-position='top'
              @submit.native.prevent='submitAccountInfo')
        el-form-item(label='Почта')
          el-input(v-model='email'
                   placeholder='Введите почту'
                   type='email'
                   :minlength='5'
                   :maxlength='128'
                   required
                   clearable)

        el-form-item(label='Закрытый профиль')
          el-switch(title='Пока недоступно'
                    disabled)

        el-button(type='primary'
                  native-type='submit') Сохранить

    el-col(:xs='24' :sm='24' :md='12')
      h4 Безопасность
      el-form(label-position='top'
              @submit.native.prevent='submitSecurityInfo')
        el-form-item(label='Новый пароль')
          el-input(v-model='newPassword1'
                   placeholder='Введите новый пароль'
                   type='password'
                   :minlength='6'
                   :maxlength='16'
                   required
                   clearable
                   show-password)
        el-form-item(v-if='newPassword1'
                     label='Повторите пароль')
          el-input(v-model='newPassword2'
                   placeholder='Повторите пароль'
                   type='password'
                   :minlength='6'
                   :maxlength='16'
                   required
                   clearable
                   show-password)
        el-form-item(v-if='newPassword1 && newPassword2'
                     label='Старый пароль')
          el-input(v-model='oldPassword'
                   placeholder='Введите старый пароль'
                   type='password'
                   :minlength='6'
                   :maxlength='16'
                   required
                   clearable
                   show-password)

        el-button(type='primary'
                  native-type='submit') Сохранить
</template>

<script lang='ts'>
import Vue from 'vue'
import {
  minLength, maxLength, required, email
} from 'vuelidate/lib/validators'

export default Vue.extend({
  middleware: 'notAuthenticated',

  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      closedAccount: false,
      newPassword1: '',
      newPassword2: '',
      oldPassword: ''
    }
  },

  validations: {
    firstName: {
      minLength: minLength(2),
      maxLength: maxLength(128)
    },
    lastName: {
      minLength: minLength(2),
      maxLength: maxLength(128)
    },
    email: {
      required,
      email,
      minLength: minLength(5),
      maxLength: maxLength(128)
    },
    newPassword1: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16)
    },
    newPassword2: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16)
    },
    oldPassword: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(16)
    }
  },

  computed: {
    user () {
      return this.$accessor.user
    }
  },

  mounted () {
    const firstName = this.user?.userInfo.profile?.firstName
    const lastName = this.user?.userInfo.profile?.lastName
    const email = this.user?.userInfo.username

    if (firstName) {
      this.firstName = firstName
    }
    if (lastName) {
      this.lastName = lastName
    }
    if (email) {
      this.email = email
    }
  },

  methods: {
    async copyId () {
      const id = this.user.userInfo.userId
      try {
        await (this as any).$copyText(id)
        this.$message.success('Идентификатор скопирован')
      } catch (e) {
        this.$message.error(e.message)
      }
    },

    submitPublicInfo () {
      const { firstName, lastName } = this.$v
      if (!firstName.$invalid && !lastName.$invalid) {
        console.log(this.firstName, this.lastName)
        return
      }

      if (!firstName.minLength || !firstName.maxLength) {
        this.$message.error('Имя должно быть от 2 до 128 символов')
      } else if (!lastName.minLength || !lastName.maxLength) {
        this.$message.error('Фамилия должна быть от 2 до 128 символов')
      }
    },

    submitAccountInfo () {
      const { email } = this.$v
      if (!email.$invalid) {
        console.log(this.email)
        return
      }

      if (!email.required || !email.email) {
        this.$message.error('Введите почту')
      } else if (!email.maxLength || !email.minLength) {
        this.$message.error('Почта должна быть от 5 до 128 символов')
      }
    },

    submitSecurityInfo () {
      const { newPassword1: new1, newPassword2: new2, oldPassword: old } = this
      const { newPassword1, newPassword2, oldPassword } = this.$v
      const passwords = [newPassword1, newPassword2, oldPassword]

      if (new1 !== new2) {
        this.$message.error('Пароли не совпадают')
      } else if (passwords.every(p => !p.$invalid)) {
        console.log(new1, new2, old)
        return
      }

      if (!newPassword1.required) {
        this.$message.error('Введите новый пароль')
      } else if (!newPassword2.required) {
        this.$message.error('Повторите пароль')
      } else if (!oldPassword.required) {
        this.$message.error('Введите старый пароль')
      } else if (passwords.some(p => !p.maxLength || !p.minLength)) {
        this.$message.error('Пароль должен быть от 6 до 16 символов')
      }
    }
  }
})
</script>

<style lang='sass' scoped>
.desc
  color: #909399
  margin-top: 1rem

h4
  margin: 5rem 0 1rem
</style>
