<script>
  import { TabsTransition } from "@sveltech/routify/decorators";
  import { writable } from "svelte/store"

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

  if (!isSupportedLanguage(lang)) {
    const [l, ...path] = window.location.pathname.split('/').filter(x => x)
    $redirect(`/${languages[0].id}/${path.join('/')}`)
  } else {
    locale.set(lang)
  }
</script>

<style>
  .inset {
    position: absolute;
    top: 50px;
    left:0;
    right:0;
    bottom: 50px;
    overflow: hidden;
  }

  * :global(h1) {
    text-align: center;
  }

  * :global(h2) {
    text-align: center;
  }

  .content {
    margin-left:auto;
    margin-right:auto;
    width:800px;
  }

</style>

  
<div class="inset" bind:offsetWidth={$width}>
  <div class="content">
    <slot  decorator={TabsTransition} scoped={{ width }} />
  </div>
  
</div>

