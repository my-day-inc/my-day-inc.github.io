import { mutationTree, actionTree } from 'typed-vuex'
import { Item, Contact } from '~/types/dashboard'

export const state = () => ({
  items: [] as Item<Contact>[]
})

export const mutations = mutationTree(state, {
  SET_ITEMS (state, items) {
    state.items = items
  }
})

export const actions = actionTree({ state }, {
  async getItems ({ commit }): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.openDatabase({
      databaseName: 'contacts',
      changeHandler: (items: Item<Contact>[]) => commit('SET_ITEMS', items)
    })
  },

  async addItem (_, item: Contact): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.insertItem({
      databaseName: 'contacts',
      item
    })

    await this.app.$accessor.contacts.getItems()
  },

  async deleteItem ({ commit, state }, itemId: string): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.deleteItem({
      databaseName: 'contacts',
      itemId
    })

    commit('SET_ITEMS', state.items.filter(i => i.itemId !== itemId))
  },

  reset ({ commit }): void {
    commit('SET_ITEMS', [])
  }
})
