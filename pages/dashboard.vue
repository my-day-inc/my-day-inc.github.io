<template lang='pug'>
  div
    h1 Планировщик

    .dashboard
      el-row.cols(type='flex'
                  justify='space-between'
                  :gutter='32')
        el-col
          el-container(direction='vertical')
            h3 Контакты
            ContactsCard(v-for='(c, i) in contacts' :key='i'
                         :contact='c'
                         action-text='Удалить'
                         @action='deleteContact')

        el-col
          el-container(direction='vertical')
            h3 Неделя

        el-col
          el-container(direction='vertical')
            h3 Месяц
</template>

<script lang='ts'>
import ContactsCard from '~/components/Cards/ContactsCard.vue'

export default {
  components: {
    ContactsCard
  },

  data () {
    return {
      contacts: [
        {
          name: 'Костик Хыпищев',
          phone: '+7 (074) 153 49-94',
          email: 'kostya@mail.su'
        },
        {
          name: 'Натка Верепеева',
          phone: '+7 (074) 153 49-94',
          email: 'nata@yahoo.eu'
        },
        {
          name: 'Витя Гершев',
          phone: '+7 (074) 153 49-94',
          email: 'v1t3k@gmail.com'
        }
      ]
    }
  },

  methods: {
    deleteContact (contact: object): void {
      console.log(`Contact deleted: ${contact.name}`)
    }
  }
}
</script>

<style lang='sass' scoped>
  .dashboard
    overflow: auto

  h3
    margin-bottom: 2rem
    font-size: 1.5rem
    color: #c0c4cc

  .el-col
    font-size: 1.5rem

  .cols
    margin-top: 3rem
    max-width: 100%
    +xl
      min-width: 1000px
      max-width: unset
</style>
