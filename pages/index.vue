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

    el-timeline
      el-timeline-item(v-for='(point, i) in points' :key='i'
        :type='point.type' :timestamp='point.timestamp') {{ point.content }}
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
  .desc,
  .el-carousel
    margin-top: 2rem

  .desc
    font-size: 1.2rem
    padding: 1rem 20% 1rem 0

  .el-carousel
    border-radius: .5rem
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

  .carousel-img
    width: 100%
    max-height: 100%
    object-fit: cover
</style>
