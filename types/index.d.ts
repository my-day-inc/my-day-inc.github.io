export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export type ContactsAction = 'add' | 'delete'
