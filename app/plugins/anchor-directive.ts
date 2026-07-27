import { vAnchor, setSmoothScrollInstance } from '~/directives/anchor'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Регистрируем директиву на обеих сторонах — чтобы SSR не падал с "Failed to resolve directive"
  nuxtApp.vueApp.directive('anchor', vAnchor)

  // smooth-scroll инициализируем только на клиенте
  if (import.meta.client) {
    const SmoothScroll = (await import('smooth-scroll')).default
    const instance = new SmoothScroll(null as any, {
      speed: 200,
      offset: 45,
    })
    setSmoothScrollInstance(instance)
  }
})
