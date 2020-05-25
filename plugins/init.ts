import { Context } from '@nuxt/types'

export default async function ({ app: { $accessor } }: Context) {
  await $accessor.user.tryToAuth()
}
