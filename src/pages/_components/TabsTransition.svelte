<Transition {configs}>
  <slot />
</Transition>

<script>
  import { scale, fly } from 'svelte/transition'
  import { route } from '@sveltech/routify'
  import { Transition } from '@sveltech/routify/decorators'

  export let scoped
  const { width } = scoped

  const configs = [
    {
      // New and old route are identical, do nothing
      condition: ({ routes }) => routes[0] === routes[1],
      transition: () => {},
    },
    {
      condition: c => c.toAncestor,
      transition: scale,
      inParams: { start: 1.2 },
      outParams: { start: 0.8 },
    },
    {
      condition: c => c.toDescendant,
      transition: scale,
      inParams: { start: 0.8 },
      outParams: { start: 1.2 },
    },
    {
      // No matching config. We don't want a transition
      condition: () => true,
      transition: () => {},
    },
  ]
</script>
