export type CardAction = 'add' | 'delete'
export type TaskPeriod = 'week' | 'month'

export interface Contact {
  id: string
  name: string
  phone: string
  email: string
}
export interface Task {
  id: number
  name: string
  body: string
  date: string
}
