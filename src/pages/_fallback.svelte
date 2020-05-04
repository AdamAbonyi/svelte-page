<script>
  import { url } from '@sveltech/routify'
  import { leftover, goto, redirect  } from '@sveltech/routify'
  import { _, locale, isSupportedLanguage } from '../services/i18n'

   /** $leftover would be 'cz/whatever' **/
  const [language, ...fragments] = $leftover.split('/')
  // const language='en'
  /** After popping the language from the url we, piece it back together **/
  const path = fragments.join('/')

  /** $redirect  **/
  if (isSupportedLanguage(language)) {
    locale.set(language)
    $redirect(`/${path}`)
  } 

</script>

<style>
  .huge {
    font-size: 12rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<div class="e404">
  <div class="huge">404</div>
  <div class="big">
    {$_('page.404.page_not_found')}
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url('/')}>{$_('page.404.go_back')}</a>
  </div>
</div>
