<template lang='pug'>
el-form(label-position='top'
        @submit.native.prevent='submit')
  el-form-item(label='Почта')
    el-input(v-model='email'
             prefix-icon='el-icon-user'
             placeholder='Введите почту'
             type='email'
             :minlength='5'
             :maxlength='128'
             autofocus
             clearable)

  el-form-item(v-if='!isRecover'
               label='Пароль')
    el-input(v-model='password'
             prefix-icon='el-icon-key'
             placeholder='Введите пароль'
             type='password'
             :minlength='6'
             :maxlength='16'
             clearable
             show-password)

  el-form-item(v-if='isSignIn')
    el-checkbox(v-model='isRemember'
                label='Запомнить меня')

  el-form-item
    el-button(type='primary'
              native-type='submit') {{ buttonText }}

  AppLink(v-if='isSignIn' to='/auth/recover') Забыли пароль?
  AppLink(v-if='!isSignUp' to='/auth/signup') Регистрация
  AppLink(v-if='!isSignIn' to='/auth/signin') Вход
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import {
  minLength, maxLength, required, email
} from 'vuelidate/lib/validators'
import { AuthData } from '~/types/auth'
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
      email: '',
      password: '',
      isRemember: false
    }
  },

  validations () {
    const rules: any = {
      email: {
        required,
        email,
        minLength: minLength(5),
        maxLength: maxLength(128)
      }
    }

    if (!this.isRecover) {
      rules.password = {
        required,
        minLength: minLength(6),
        maxLength: maxLength(16)
      }
    }
    return rules
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
  },

  mounted () {
    if (!this.isSignUp) {
      this.email = this.$accessor.user.lastUsedUsername
    }
  },

  methods: {
    submit (): void {
      const authData: AuthData = {
        email: this.email,
        password: this.password,
        isRemember: this.isRemember
      }

      if (!this.$v.$invalid) {
        this.$emit('submit', authData)
        return
      }

      const { email, password } = this.$v

      if (!email.required || !email.email) {
        this.$message.error('Введите почту')
      } else if (!email.maxLength || !email.minLength) {
        this.$message.error('Почта должна быть от 5 до 128 символов')
      } else if (!password.required) {
        this.$message.error('Введите пароль')
      } else if (!password.maxLength || !password.minLength) {
        this.$message.error('Пароль должен быть от 6 до 16 символов')
      }
    }
  }
})
</script>

<style lang='sass' scoped>
  .el-link
    margin-right: 1rem
</style>
