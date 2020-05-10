<script>
  import { url, route } from '@sveltech/routify'
  import { _, page } from '../../services/i18n'
  import { setTitle, setDescription } from '../../services/meta'


  const t = page('404')
    setTitle($_(t`page_not_found`))
    setDescription($_(t`page_not_found`))
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
    {$_(t`page_not_found`)}
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url('/')}>{$_('page.404.go_back')}</a>
  </div>
</div>
