import { quintOut } from 'svelte/easing'
import { crossfade } from 'svelte/transition'
const [send, receive] = crossfade({
  easing: quintOut,
  duration: d => 500/*Math.sqrt(d * 5000)*/,
  fallback (node, params) {
    const style = getComputedStyle(node)
    const transform = style.transform === 'none' ? '' : style.transform

    return {
      duration: 500,
      easing: quintOut,
      css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
    }
  }
})

export { send, receive }
