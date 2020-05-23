<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('about')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  .center-item {
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;
  }
</style>

<!-- routify:options index=1 -->
<div class="cf" transition:fade>
  <div class="center-item">
    <h1 out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>
      {$_(t`page_title`)}
    </h1>
    <h3>{$_(t`description`)}</h3>
    <br />

    <p>{$_(t`text1`)}</p>
    <p>{$_(t`text2`)}</p>

    <img
      src="/aa.webp"
      alt="Adam Abonyi"
      style="width:100px; height:100px;"
      out:send={{ key: 'image' }}
      in:receive={{ key: 'image' }} />
  </div>
</div>
