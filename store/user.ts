import { mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  isAuthenticated: false
})

export const mutations = mutationTree(state, {
  SET_AUTHENTICATED (state, isAuthenticated: boolean) {
    state.isAuthenticated = isAuthenticated
  }
})

export const actions = actionTree({ state }, {
  async tryToAuth ({ commit }): Promise<void> {
    const { $userbase } = this.app.context

    const session = await $userbase.init()
    console.log('Session: ', session) // eslint-disable-line
    if (session.user) {
      commit('SET_AUTHENTICATED', true)
    }
  }
})
