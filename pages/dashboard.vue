<template lang='pug'>
  div
    h1 Планировщик

    .dashboard
      el-row.cols(type='flex'
                  justify='space-between'
                  :gutter='32')
        el-col
          el-container(direction='vertical')
            h3.subhead Контакты
            ContactsCard(v-for='c in contacts' :key='c.id'
                         :contact='c'
                         action-text='Удалить'
                         @action='deleteContact')

        el-col
          el-container(direction='vertical')
            h3.subhead Неделя

        el-col
          el-container(direction='vertical')
            h3.subhead Месяц
</template>

<script lang='ts'>
import ContactsCard from '~/components/Cards/ContactsCard.vue'
import { Contact } from '~/types/intefaces'

export default {
  components: {
    ContactsCard
  },

  data () {
    return {
      contacts: [
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
      ]
    }
  },

  methods: {
    deleteContact (contact: Contact): void {
      console.log(`Contact deleted: ${contact.name}`)
    }
  }
}
</script>

<style lang='sass' scoped>
  .dashboard
    overflow: auto

  .cols
    margin-top: 3rem
    max-width: 100%
    +xl
      min-width: 1000px
      max-width: unset

  .subhead
    margin-bottom: 2rem
    font-size: 1.5rem
    color: #c0c4cc
</style>
