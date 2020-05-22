import { Userbase } from 'nuxt-userbase-module/types'
import { accessorType } from '~/store'

// Accessor
declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

// Userbase
declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}

// Cards
export type CardAction = 'add' | 'delete'
export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}
export interface Task {
  id: number;
  name: string;
  body: string;
  date: string;
}
export type TaskPeriod = 'week' | 'month'

// Auth
export interface AuthData {
  email: string;
  password: string;
  isRemember: boolean;
}
