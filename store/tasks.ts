import { mutationTree, actionTree } from 'typed-vuex'
import { Task, TaskPeriod } from '~/types/dashboard'

export const state = () => ({
  week: [
    {
      id: 1,
      name: 'Кошка',
      body: 'Помыть мохнатую.',
      date: '5/15/2020'
    },
    {
      id: 2,
      name: 'Кино',
      body: 'Посмотреть "Маяк 2019".',
      date: '5/10/2020'
    }
  ] as Task[],

  month: [
    {
      id: 3,
      name: 'Стрижка',
      body: 'Сходить подстричься.',
      date: '5/5/2020'
    }
  ] as Task[]
})

export const mutations = mutationTree(state, {
  SET_ENTRIES_WEEK (state, entries: Task[]) {
    state.week = entries
  },
  SET_ENTRIES_MONTH (state, entries: Task[]) {
    state.month = entries
  }
})

interface DeletedEntry {
  id: number;
  period: TaskPeriod;
}
interface AddedEntry {
  name: string;
  body: string;
  period: TaskPeriod;
}

export const actions = actionTree({ state }, {
  addEntry ({ state, commit }, { name, body, period }: AddedEntry): void {
    const entries = [...state[period]]
    const id = entries.length ? entries[entries.length - 1].id + 1 : 1
    const date = (new Date()).toLocaleDateString('en-US')
    entries.push({ id, name, body, date })

    if (period === 'week') {
      commit('SET_ENTRIES_WEEK', entries)
    } else if (period === 'month') {
      commit('SET_ENTRIES_MONTH', entries)
    }
  },

  deleteEntry ({ state, commit }, { id, period }: DeletedEntry): void {
    const entries = state[period].filter((e: Task) => e.id !== id)

    if (period === 'week') {
      commit('SET_ENTRIES_WEEK', entries)
    } else if (period === 'month') {
      commit('SET_ENTRIES_MONTH', entries)
    }
  }
})
