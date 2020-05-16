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

  el-form-item(label='Пароль')
    el-input(v-model='authData.password'
             prefix-icon='el-icon-key'
             placeholder='Введите пароль'
             type='password'
             :minlength='6'
             :maxlength='16'
             clearable
             show-password)

  el-form-item(v-if='isNotRecover')
    el-checkbox(v-model='authData.isRemember'
                label='Запомнить меня')

  el-form-item
    el-button(type='primary'
              @click='$emit("submit", authData)') {{ buttonText }}
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { AuthData } from '~/types'
type FormType = 'signin' | 'signup' | 'recover'

export default Vue.extend({
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
        signin: 'Войти',
        signup: 'Зарегистрироваться',
        recover: 'Восстановить'
      }
      return texts[this.formType]
    },

    isNotRecover (): boolean {
      return this.formType !== 'recover'
    }
  }
})
</script>
