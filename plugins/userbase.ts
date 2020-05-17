import Vue from 'vue'
import userbase from 'userbase-js'

type PaymentsMode = 'disabled' | 'test' | 'prod'
type SubscriptionStatus = 'active' | 'incomplete' |
                          'incomplete_expired' | 'past_due' |
                          'canceled' | 'unpaid' |
                          'trialing' | undefined
interface User {
  username: string
  userId: string
  authToken: string
  creationDate: Date
  email?: string
  profile?: object
  paymentsMode: PaymentsMode
  subscriptionStatus?: SubscriptionStatus
  trialExpirationDate?: Date
  cancelSubscriptionAt?: Date
}
interface InitOpts {
  appId: string
}
interface Session {
  user?: User
  lastUsedUsername?: string
}
type Init = (opts: InitOpts) => Promise<Session>

declare module '@nuxt/types' {
  interface Context {
    $userbase: {
      init: Init
    }
  }
}

const init: Init = opts => userbase.init(opts)

Vue.prototype.$userbase = {
  init
}
