<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('index')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  img {
    -webkit-filter: drop-shadow(4px 4px 0 rgba(255, 255, 255, 0.1))
      drop-shadow(-4px -4px 0 rgba(255, 255, 255, 0.1));
    filter: drop-shadow(4px 4px 0 rgba(255, 255, 255, 0.1))
      drop-shadow(-4px -4px 0 rgba(255, 255, 255, 0.1));

    /* image-rendering: crisp-edges;
    filter: grayscale(100%); */
  }
</style>

<!-- routify:options index=0 -->
<div class="cf" style="text-align:center" transition:fade>
  <img
    src="/aa.webp"
    alt="Adam Abonyi"
    style="width:300px"
    out:send={{ key: 'image' }}
    in:receive={{ key: 'image' }} />
  <h1 out:send={{ key: 'title' }} in:receive={{ key: 'title' }}>
    {$_(t`page_title`)}
  </h1>
  <h3 out:send={{ key: 'description' }} in:receive={{ key: 'description' }}>
    {$_(t`description`)}
  </h3>
</div>
