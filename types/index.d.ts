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

// Contacts
export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}
export type ContactAction = 'add' | 'delete'
