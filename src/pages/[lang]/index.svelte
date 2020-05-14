<!-- routify:options index=0 -->
<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  import Image from '../../_components/Image/index.svelte'

  const t = page('index')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  .center {
    text-align:center;
  }
</style>

<div class="cf center" transition:fade>
  <img src="/aa.webp" alt="Adam Abonyi" style="width:200px;"  out:send={{ key: 'image' }} in:receive={{ key: 'image' }} />
  <br />
  <h1 out:send={{ key: 'title' }} in:receive={{ key: 'title' }}>{$_(t`page_title`)}</h1>
  <h2 out:send={{ key: 'description' }} in:receive={{ key: 'description' }}>{$_(t`description`)}</h2>
</div>
