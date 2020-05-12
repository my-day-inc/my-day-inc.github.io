<template lang='pug'>
  div
    h1 Домашняя страница
    p.desc
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      | Morbi mattis dictum mauris. Phasellus facilisis urna eget
      | erat luctus maximus. Aenean et consectetur nisl.
      | Donec id rutrum ante, ac mollis lectus.
      | Nulla diam dui, varius non ipsum eu, pharetra sollicitudin quam.

    el-carousel(height='500px' type='card')
      el-carousel-item(v-for='(img, i) in imgs' :key='i')
        img(:src='img' alt='Скриншот')

    el-timeline(:reverse='reverse')
      el-timeline-item(v-for='(point, i) in points' :key='i'
        :type='point.type' :timestamp='point.timestamp') {{ point.content }}
</template>

<script lang='ts'>
export default {
  data () {
    return {
      imgs: [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg',
        'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
      ],
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

<style lang='sass'>
  h1,
  .el-carousel,
  .el-timeline,
  .desc
    margin-top: 2rem

  .desc
    font-size: 1.2rem
    padding: 1rem 0
</style>
