<template lang='pug'>
p {{ tasks }}
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const url = `https://v1.userbase.com/v1/admin/users/${params.id}`
    const token = 'acWReBq02JyKedoXFl/vbyFC3BpDKdEbKjSFfGoGyko='
    const { data } = await $axios(url, { headers: { Authorization: `Bearer ${token}` } })
    return { tasks: data.profile.tasks }
  }
}
</script>
