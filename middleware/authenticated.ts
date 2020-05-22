import { Context } from '@nuxt/types'

export default ({ redirect, app: { $accessor } }: Context) => {
  /*
  const r = await $userbase.init()
  console.log(r)
  const rr = await $userbase.signUp({
    username: 'test',
    password: '12345678'
  })
  console.log(rr)
  */
  if (!$accessor.user.isAuthenticated) {
    return redirect('/auth/signin')
  }
}
