import { mutationTree, actionTree } from 'typed-vuex'
import { Item, Task } from '~/types/dashboard'

export const state = () => ({
  items: [] as Item<Task>[]
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
      databaseName: 'tasks',
      changeHandler: (items: Item<Task>[]) => commit('SET_ITEMS', items)
    })
  },

  async addItem (_, item: Task): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.insertItem({
      databaseName: 'tasks',
      item
    })

    await this.app.$accessor.tasks.getItems()
  },

  async deleteItem ({ commit, state }, itemId: string): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.deleteItem({
      databaseName: 'tasks',
      itemId
    })

    commit('SET_ITEMS', state.items.filter(i => i.itemId !== itemId))
  }
})
