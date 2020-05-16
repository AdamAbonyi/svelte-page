<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('contact')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  .background-image {
    background-image: url('/images/responsive/phone3.jpg');
    background-position-y: -220px;
    opacity: 0.4;
  }
</style>

<!-- routify:options index=2 -->
<div class="background-image" transition:fade />

<div class="cf" transition:fade>
  <h1 out:send={{ key: 'title' }} in:receive={{ key: 'title' }}>
    {$_(t`page_title`)}
  </h1>
  <h2 out:send={{ key: 'description' }} in:receive={{ key: 'description' }}>
    {$_(t`description`)}
  </h2>
</div>
