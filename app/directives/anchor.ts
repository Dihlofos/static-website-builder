import type { Directive } from 'vue'

export interface AnchorOptions {
  offset?: number
  speed?: number
}

const DEFAULTS: AnchorOptions = {
  offset: 45,
  speed: 200,
}

let smoothScroll: any = null

export function setSmoothScrollInstance(instance: any) {
  smoothScroll = instance
}

function createClickHandler(options: AnchorOptions) {
  return (event: Event) => {
    const mouseEvent = event as MouseEvent
    const link = mouseEvent.currentTarget as HTMLAnchorElement
    const href = link.getAttribute('href')

    if (!href?.startsWith('#')) return
    if (mouseEvent.ctrlKey || mouseEvent.metaKey || mouseEvent.shiftKey) return

    const target = document.querySelector(href)
    if (!target) {
      if (import.meta.env.DEV) {
        console.warn(`[v-anchor] Target "${href}" not found`)
      }
      return
    }

    mouseEvent.preventDefault()

    const opts = { ...DEFAULTS, ...options }
    smoothScroll.animateScroll(target, null, {
      speed: opts.speed,
      offset: opts.offset,
    })
  }
}

export const vAnchor: Directive<HTMLElement, AnchorOptions | undefined> = {
  mounted(el, binding) {
    const handler = createClickHandler(binding.value ?? {})
    ;(el as any).__vAnchorHandler = handler
    el.addEventListener('click', handler)
  },

  updated(el, binding) {
    const oldHandler = (el as any).__vAnchorHandler
    if (oldHandler) {
      el.removeEventListener('click', oldHandler)
    }
    const handler = createClickHandler(binding.value ?? {})
    ;(el as any).__vAnchorHandler = handler
    el.addEventListener('click', handler)
  },

  unmounted(el) {
    const handler = (el as any).__vAnchorHandler
    if (handler) {
      el.removeEventListener('click', handler)
    }
  },
}
