<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('contact')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  .center-item {
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;
  }
</style>

<!-- routify:options index=2 -->
<div class="background-image" transition:fade />

<div class="cf" transition:fade>
  <div class="center-item">
    <h1 out:send={{ key: 'contact' }} in:receive={{ key: 'contact' }}>
      {$_(t`page_title`)}
    </h1>
    <h3>{$_(t`description`)}</h3>

    <span>
      Add a contact game here. Small game, if you solve it it sends you a token
      to send a message to me through the UI... or something like that
    </span>
  </div>
</div>
