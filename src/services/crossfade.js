import { quintOut } from 'svelte/easing'
import { crossfade } from 'svelte/transition'

const speed = 400

const [send, receive] = crossfade({
  easing: quintOut,
  duration: () => speed,
  fallback (node) {
    const style = getComputedStyle(node)
    const transform = style.transform === 'none' ? '' : style.transform

    return {
      duration: speed,
      easing: quintOut,
      css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
    }
  }
})

export { send, receive }
