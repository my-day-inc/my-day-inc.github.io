<template lang='pug'>
el-form(label-position='top'
        :model='authData')
  el-form-item(label='Email')
    el-input(v-model='authData.email'
             prefix-icon='el-icon-user'
             placeholder='Введите email'
             :minlength='5'
             :maxlength='128'
             autofocus
             clearable)

  el-form-item(v-if='!isRecover' label='Пароль')
    el-input(v-model='authData.password'
             prefix-icon='el-icon-key'
             placeholder='Введите пароль'
             type='password'
             :minlength='6'
             :maxlength='16'
             clearable
             show-password)

  el-form-item(v-if='!isRecover')
    el-checkbox(v-model='authData.isRemember'
                label='Запомнить меня')

  el-form-item
    el-button(type='primary'
              @click='$emit("submit", authData)') {{ buttonText }}

  AppLink(v-if='isSignIn' to='/auth/recover') Забыли пароль?
  AppLink(v-if='!isSignUp' to='/auth/signup') Регистрация
  AppLink(v-if='!isSignIn' to='/auth/signin') Вход
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { AuthData } from '~/types'
import AppLink from '~/components/AppLink.vue'

type FormType = 'signIn' | 'signUp' | 'recover'

export default Vue.extend({
  components: { AppLink },

  props: {
    formType: {
      type: String,
      required: true
    } as PropOptions<FormType>
  },

  data () {
    return {
      authData: {
        email: '',
        password: '',
        isRemember: false
      } as AuthData
    }
  },

  computed: {
    buttonText (): string {
      const texts = {
        signIn: 'Войти',
        signUp: 'Зарегистрироваться',
        recover: 'Восстановить'
      }
      return texts[this.formType]
    },

    isSignIn (): boolean {
      return this.formType === 'signIn'
    },
    isSignUp (): boolean {
      return this.formType === 'signUp'
    },
    isRecover (): boolean {
      return this.formType === 'recover'
    }
  }
})
</script>

<style lang='sass' scoped>
  .el-link
    margin-right: 1rem
</style>
