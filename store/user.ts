import { mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  isAuthenticated: false,
  login: ''
})

export const mutations = mutationTree(state, {
  SET_AUTHENTICATED (state, isAuthenticated: boolean) {
    state.isAuthenticated = isAuthenticated
  },
  SET_LOGIN (state, login: string) {
    state.login = login
  }
})

interface LoginData {
  login: string;
  password: string;
}
export const actions = actionTree({ state }, {
  signIn ({ commit }, { login }: LoginData): void {
    commit('SET_LOGIN', login)
    commit('SET_AUTHENTICATED', true)
  }
})
