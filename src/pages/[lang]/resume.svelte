<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('resume')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  .center-item {
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;
  }
</style>

<!-- routify:options index=4 -->
<div class="cf" transition:fade>
  <div class="center-item">
    <h1 out:send={{ key: 'resume' }} in:receive={{ key: 'resume' }}>
      {$_(t`page_title`)}
    </h1>
    <h3>{$_(t`description`)}</h3>

    <span>
      Create a full screen-able resume here. Something similar to what I have
      with 3 columns, photo in the middle. Exportable to pdf and printable
    </span>
  </div>
</div>
