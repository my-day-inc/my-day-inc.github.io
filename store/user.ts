import { mutationTree, actionTree } from 'typed-vuex'
import { UserResult } from 'userbase-js/types'
import { AuthData } from '~/types/auth'

export const state = () => ({
  isAuthenticated: false as boolean,
  userInfo: {} as UserResult,
  lastUsedUsername: '' as string
})

export const mutations = mutationTree(state, {
  SET_AUTHENTICATED (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  SET_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
  },
  SET_LAST_USED_USERNAME (state, lastUsedUsername) {
    state.lastUsedUsername = lastUsedUsername
  }
})

export const actions = actionTree({ state }, {
  async tryToAuth ({ commit }): Promise<void> {
    const { $userbase } = this.app.context

    const session = await $userbase.init()

    if (session.user) {
      commit('SET_AUTHENTICATED', true)
      commit('SET_USER_INFO', session.user)
      commit('SET_LAST_USED_USERNAME', session.user.username)
    } else {
      commit('SET_LAST_USED_USERNAME', session.lastUsedUsername ?? '')
    }
  },

  async signUp ({ commit }, authData: AuthData): Promise<void> {
    const { $userbase } = this.app.context

    const userInfo = await $userbase.signUp({
      username: authData.email,
      password: authData.password
    })

    commit('SET_AUTHENTICATED', true)
    commit('SET_USER_INFO', userInfo)
  },

  async signIn ({ commit }, authData: AuthData): Promise<void> {
    const { $userbase } = this.app.context

    const userInfo = await $userbase.signIn({
      username: authData.email,
      password: authData.password,
      rememberMe: authData.isRemember ? 'local' : 'none'
    })

    commit('SET_AUTHENTICATED', true)
    commit('SET_USER_INFO', userInfo)
  },

  async signOut (): Promise<void> {
    const { $userbase } = this.app.context
    const { $accessor } = this.app

    await $userbase.signOut()

    $accessor.user.reset()
    $accessor.contacts.reset()
  },

  async recover (_, authData: AuthData): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.forgotPassword({
      username: authData.email
    })
  },

  async changeName ({ state }, { firstName, lastName }): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.updateUser({
      profile: {
        ...state.userInfo.profile,
        firstName,
        lastName
      }
    })

    await this.app.$accessor.user.tryToAuth()
  },

  async changeEmail (_, email: string): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.updateUser({
      email,
      username: email // we use email as username
    })

    await this.app.$accessor.user.tryToAuth()
  },

  async changePassword (_, { newPassword, oldPassword }): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.updateUser({
      newPassword,
      currentPassword: oldPassword
    })
  },

  reset ({ commit }): void {
    commit('SET_AUTHENTICATED', false)
    commit('SET_USER_INFO', {})
  }
})
