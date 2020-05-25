import { Userbase } from 'nuxt-userbase-module/types'

declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}
