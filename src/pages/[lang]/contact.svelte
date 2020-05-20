<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('contact')
  setMeta(t`page_title`, t`description`)
</script>

<!-- routify:options index=2 -->
<div class="background-image" transition:fade />

<div class="cf" transition:fade>
  <h1>{$_(t`page_title`)}</h1>
  <h3>{$_(t`description`)}</h3>

  <span>
    Add a contact game here. Small game, if you solve it it sends you a token to
    send a message to me through the UI... or something like that
  </span>
</div>
