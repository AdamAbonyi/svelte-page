<script>
  import { redirect } from '@sveltech/routify'
  import { locale, languages, isSupportedLanguage } from '../../services/i18n'

  import TopNav from '../_components/TopNav.svelte'

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

  * :global(.cf) {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
  }

  * :global(.background-image) {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    opacity: 0.5;
    height: 200px;
  }
</style>

<div class="content">
  <slot />

  <TopNav />
</div>
