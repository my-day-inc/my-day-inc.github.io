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

    el-timeline
      el-timeline-item(v-for='(point, i) in points' :key='i'
        :type='point.type' :timestamp='point.timestamp') {{ point.content }}

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
</template>

<script lang='ts'>
export default {
  data () {
    return {
      points: [
        {
          content: 'Test',
          timestamp: '2018-04-12 20:46',
          type: 'success'
        },
        {
          content: 'Another test',
          timestamp: '2018-04-12 20:46',
          type: 'primary'
        },
        {
          content: 'Another another test',
          timestamp: '2018-04-12 20:46',
          type: 'danger'
        },
        {
          content: 'Test another',
          timestamp: '2018-04-12 20:46',
          type: 'info'
        }
      ]
    }
  }
}
</script>

<style lang='sass' scoped>
  h3,
  .desc,
  .el-carousel,
  .el-timeline,
  .el-collapse
    margin-top: 2rem

  .desc
    font-size: 1.2rem
    padding: 1rem 20% 1rem 0

  .el-carousel
    border-radius: .5rem
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    margin-bottom: 3rem

  .carousel-img
    width: 100%
    max-height: 100%
    object-fit: cover

  .faq
    padding: 0 10rem
</style>
