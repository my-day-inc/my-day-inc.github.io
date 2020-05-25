import { mutationTree, actionTree } from 'typed-vuex'
import { Contact } from '~/types/dashboard'

export const state = () => ({
  entries: [
    {
      id: '1',
      name: 'Костик Хыпищев',
      phone: '+7 (074) 153 49-94',
      email: 'kostya@mail.su'
    },
    {
      id: '2',
      name: 'Натка Верепеева',
      phone: '+7 (074) 153 49-94',
      email: 'nata@yahoo.eu'
    },
    {
      id: '3',
      name: 'Витя Гершев',
      phone: '+7 (074) 153 49-94',
      email: 'v1t3k@gmail.com'
    }
  ] as Contact[]
})

export const mutations = mutationTree(state, {
  SET_ENTRIES (state, entries: Contact[]) {
    state.entries = entries
  }
})

export const actions = actionTree({ state }, {
  deleteEntry ({ state, commit }, id: string): void {
    const entries = state.entries.filter((e: Contact) => e.id !== id)
    commit('SET_ENTRIES', entries)
  }
})
