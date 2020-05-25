import { getAccessorType } from 'nuxt-typed-vuex'

import * as contacts from '~/store/contacts'
import * as tasks from '~/store/tasks'
import * as user from '~/store/user'

export const accessorType = getAccessorType({
  modules: {
    contacts,
    tasks,
    user
  }
})
