<script>
  import { url, route, redirect } from '@sveltech/routify'
  import {
    _,
    locale,
    languages,
    isSupportedLanguage,
  } from '../../services/i18n'
  export let lang

  if (!isSupportedLanguage(lang)) {
    const [l, ...path] = window.location.pathname.split('/').filter(x => x)
    $redirect(`/${languages[0].id}/${path.join('/')}`)
  } else {
    locale.set(lang)
  }
</script>

<style>
  .content {
    max-width: 800px;
  }

  * :global(h1) {
    text-align: center;
  }

  * :global(h2) {
    text-align: center;
  }
</style>

<div class="content">
  <slot />
</div>
