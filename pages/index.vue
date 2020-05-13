<template lang='pug'>
  div
    h1 Домашняя страница

    p.desc
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      | Morbi mattis dictum mauris. Phasellus facilisis urna eget
      | erat luctus maximus. Aenean et consectetur nisl.
      | Donec id rutrum ante, ac mollis lectus.
      | Nulla diam dui, varius non ipsum eu, pharetra sollicitudin quam.

    el-carousel(height='500px'
                :interval='5000')
      el-carousel-item(v-for='i in 3' :key='i')
        img.carousel-img(:src='require(`~/assets/images/homepage/${i}.jpg`)')

    h3 Подробнее
    p.desc
      | Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse
      | convallis neque vitae facilisis malesuada. Quisque fringilla a nisi nec suscipit.
      | Maecenas bibendum tincidunt enim vel tristique. Maecenas ornare felis at metus
      | semper pharetra. Donec sed tellus justo. Aliquam ut dictum elit. Suspendisse diam est,
      | interdum feugiat felis id, commodo posuere ante. Nunc pretium accumsan tincidunt.
      br
      br
      | Duis posuere vel ex tincidunt semper. In tempor urna urna, ac suscipit sapien eleifend ut.
      | Sed dictum venenatis justo, in elementum lacus efficitur vel. Duis sed enim maximus,
      | fermentum tortor in, lobortis lorem. Quisque posuere, ante a lacinia laoreet,
      | tortor arcu scelerisque eros, ullamcorper commodo ex lacus a urna.

    el-steps(:active='2' align-center)
      el-step(title='Step 1' description='Some description')
      el-step(title='Step 2' description='Some description')
      el-step(title='Step 3' description='Some description')
      el-step(title='Step 4' description='Some description')

    .faq
      h3 Остались вопросы?

      el-collapse
        el-collapse-item(title='Вопрос' name='1')
          p
            | Consistent with real life: in line with the process and
            | logic of real life, and comply with languages and habits
            | that the users are used to
        el-collapse-item(title='Еще вопрос' name='2')
          p
            | Consistent with real life: in line with the process and
            | logic of real life, and comply with languages and habits
            | that the users are used to
        el-collapse-item(title='Тупой вопрос' name='3')
          p
            | Consistent with real life: in line with the process and
            | logic of real life, and comply with languages and habits
            | that the users are used to
        el-collapse-item(title='Для тупорылых' name='4')
          p
            | Consistent with real life: in line with the process and
            | logic of real life, and comply with languages and habits
            | that the users are used to

    .rate
      h4 Была ли статья полезной?
      el-rate(v-model='rate' :colors='rateColors')
</template>

<script lang='ts'>
export default {
  data () {
    return {
      rate: null,
      rateColors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  }
}
</script>

<style lang='sass' scoped>
  h3,
  .desc,
  .el-carousel,
  .el-collapse
    margin-top: 2rem

  .desc
    font-size: 1.2rem
    padding: 1rem 20% 1rem 0

  .el-carousel
    border-radius: .5rem
    margin-bottom: 3rem
    +sm
      height: 300px !important

  .carousel-img
    width: 100%
    max-height: 100%
    object-fit: cover
    +md
      max-width: 100%
      height: 100%

  .el-steps
    margin: 5rem 0

  .faq
    padding: 0 10rem
    +md
      padding: 0 3rem
    +sm
      padding: 0

  .rate
    margin-top: 5rem
    text-align: center

    .el-rate
      margin-top: .7rem
</style>
