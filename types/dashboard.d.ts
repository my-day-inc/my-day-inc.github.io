export interface Item<T> {
  itemId: string
  item: T
}
export interface Contact {
  id: string
  name: string
  phone: string
  email: string
}
export interface Task {
  name: string
  body: string
  date: string
}

export type TaskPeriod = 'week' | 'later'
export type CardAction = 'add' | 'delete'
