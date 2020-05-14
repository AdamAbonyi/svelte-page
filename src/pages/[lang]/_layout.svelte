<script>
  import { TabsTransition } from "@sveltech/routify/decorators";
  import { writable } from "svelte/store"

  import { BaseTransition } from "@sveltech/routify/decorators"
  import { fade } from 'svelte/transition'

  import { url, route, redirect } from '@sveltech/routify'
  import {
    _,
    locale,
    languages,
    isSupportedLanguage,
  } from '../../services/i18n'

  import TopNav from '../_components/TopNav.svelte'

  export let lang
  const width = writable()

  const configs = [
    {
        condition: c => c.toHigherIndex,
        transition: fade,
        inParams: {duration: 500}, 
        outParams: {duration: 500}  
    },
    {
        condition: c => c.toLowerIndex,
        transition: fade,
        inParams: {duration: 500}, 
        outParams: {duration: 500}  
    }
  ]

  if (!isSupportedLanguage(lang)) {
    const [l, ...path] = window.location.pathname.split('/').filter(x => x)
    $redirect(`/${languages[0].id}/${path.join('/')}`)
  } else {
    locale.set(lang)
  }
</script>

<style>
  * :global(h1) {
    text-align: center;
  }

  * :global(h2) {
    text-align: center;
  }

  * :global(.cf) {
    position:absolute;
    left:3rem;
    right:3rem;
    top:50px;
    bottom:50px;
  }



</style>
<!-- <div class="inset" bind:offsetWidth={$width}>
  <div class="content">
    <slot  decorator={BaseTransition} scoped={{ width }} />
  </div>
</div> -->

<div class="content">
  <div class="cf" transition:fade>
    <slot />
  </div>
</div>

