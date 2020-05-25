import { Context } from '@nuxt/types'

export default ({ redirect, app: { $accessor } }: Context) => {
  if (!$accessor.user.isAuthenticated) {
    redirect('/auth/signin')
  }
}
