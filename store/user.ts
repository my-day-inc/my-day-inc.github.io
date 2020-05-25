import { mutationTree, actionTree } from 'typed-vuex'
import { AuthData } from '~/types/auth'

export const state = () => ({
  isAuthenticated: false,
  userInfo: {},
  lastUsedUsername: ''
})

export const mutations = mutationTree(state, {
  SET_AUTHENTICATED (state, isAuthenticated: boolean) {
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
    console.log('Session: ', session)

    if (session.user) {
      commit('SET_AUTHENTICATED', true)
      commit('SET_USER_INFO', session.user)
    }
    commit('SET_LAST_USED_USERNAME', session.lastUsedUsername ?? '')
  },

  async signUp ({ commit }, authData: AuthData): Promise<void> {
    const { $userbase } = this.app.context

    const userInfo = await $userbase.signUp({
      username: authData.email,
      password: authData.password
    })
    console.log('User: ', userInfo)

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
    console.log('User: ', userInfo)

    commit('SET_AUTHENTICATED', true)
    commit('SET_USER_INFO', userInfo)
  },

  async signOut (): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.signOut()
    console.log('Sign out')

    this.app.$accessor.user.reset()
  },

  reset ({ commit }): void {
    commit('SET_AUTHENTICATED', false)
    commit('SET_USER_INFO', {})
  }
})
