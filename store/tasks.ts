import { getterTree, actionTree } from 'typed-vuex'
import { randomStr } from '~/plugins/_'
import { Item, Task } from '~/types/dashboard'

export const state = () => ({})

export const getters = getterTree(state, {
  items (_state, _getters, rootState) {
    const profile = rootState.user.userInfo.profile
    return profile?.tasks ? JSON.parse(rootState.user.userInfo.profile.tasks) : []
  }
})

export const actions = actionTree({ state }, {
  async getItems (): Promise<void> {
    await this.app.$accessor.user.tryToAuth()
  },

  async addItem ({ getters }, item: Task): Promise<void> {
    const { $userbase } = this.app.context

    const itemWithId = { item, itemId: randomStr() }

    await $userbase.updateUser({
      profile: {
        tasks: JSON.stringify([...getters.items, itemWithId])
      }
    })

    await this.app.$accessor.tasks.getItems()
  },

  async deleteItem ({ getters }, itemId: string): Promise<void> {
    const { $userbase } = this.app.context

    await $userbase.updateUser({
      profile: {
        tasks: JSON.stringify([...getters.items.filter((i: Item<Task>) => i.itemId !== itemId)])
      }
    })
  }
})
