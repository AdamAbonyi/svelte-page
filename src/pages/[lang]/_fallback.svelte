<script>
  import { route } from '@sveltech/routify'
  import { _, locale, setMeta, page } from '../../services/i18n'

  const t = page('404')
  setMeta(t`page_not_found`)
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
    <a href={$route.last.path}>{$_(t`go_back`)}</a>
  </div>
</div>
