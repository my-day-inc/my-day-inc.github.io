<template lang='pug'>
div
  h1 Мой день

  p.desc
    | Добро пожаловать на сайт "Социальный ежедневник".
    | Записывать свои планы и делиться ими со всеми желающими стало легко и просто!

  el-carousel(height='500px'
              :interval='5000')
    el-carousel-item(v-for='i in 3' :key='i')
      img.carousel-img(:src='require(`~/assets/images/homepage/${i}.jpg`)')

  h3 Подробнее
  p.desc
    | На сегодняшний день планирование своих дел является важной
    | частью человека, если он хочет все успевать и завершать дела вовремя.
    br
    br
    | В 21 веке всю информацию удобно хранить в цифровом виде на наших
    | компьютерах или телефонах, но что делать, если времени хватает только
    | для того, чтобы записать свои дела, а поделиться информацией со всеми
    | уже долго и сложно?
    br
    br
    | Современная система коммуникации все активнее использует
    | информационные технологии и компьютерные телекоммуникации.
    | Особенно динамично развивается система общения между людьми с помощью
    | смарфонов и компьютеров, чему способствует ряд факторов,
    | и прежде всего - оснащение практически каждого человека
    | компьютерной техникой и развитие сообщества сетей Интернет.
    br
    br
    | Практика показывает, что почти 50% времени тратится впустую
    | при планирование своего расписания вручную.
    | В этом поможет "Социальный ежедневник" - планирование своих дел
    | и распространение их между своими близкими, коллегами, друзьями и другими.

  el-steps(:active='2' align-center)
    el-step(title='Шаг 1' description='Зарегистрируйтесь')
    el-step(title='Шаг 2' description='Добавьте задачи в планировщик')
    el-step(title='Шаг 3' description='Поделитесь с друзьями своей страницей')

  .faq
    h3 Остались вопросы?

    el-collapse
      el-collapse-item(title='Регистрация' name='1')
        p
          | Чтобы зарегистрироваться, пройдите
          |
          n-link(to='/auth/signup') сюда
          |  и введите учетные данные.
      el-collapse-item(title='Задачи' name='2')
        p
          | Для добавления новых задач, воспользуйтесь
          |
          n-link(to='/dashboard') планировщиком
          | .
      el-collapse-item(title='Как поделиться с друзьями' name='3')
        p
          | Чтобы поделиться с друзьями, зайдите в
          | планировщик и скопируйте ссылку на профиль.

  .rate
    h4
      | Если у вас остались вопросы, пишите:
      |
      a(href='mailto:cmartkrik@gmail.com') cmartkrik@gmail.com
</template>

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

    a
      color: #409eff

      &:hover
        opacity: .7

      &:active
        opacity: .5
</style>
