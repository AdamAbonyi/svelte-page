<script>
  import { redirect } from '@sveltech/routify'
  import { locale, languages, isSupportedLanguage } from '../../services/i18n'

  export let lang

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

  * :global(h3) {
    text-align: center;
  }
  * :global(.cf) {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

</style>
<div class="content">
  <slot />
</div>

