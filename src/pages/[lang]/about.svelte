<!-- routify:options index=1 -->
<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  import Image from '../../_components/Image/index.svelte'

  const t = page('about')
  setMeta(t`page_title`, t`description`)
</script>

<div class="cf" transition:fade>
  <h1 out:send={{ key: 'title' }} in:receive={{ key: 'title' }}>{$_(t`page_title`)}</h1>
  <h2  out:send={{ key: 'description' }} in:receive={{ key: 'description' }}>{$_(t`description`)}</h2>
  <p>{$_(t`text1`)}</p>
  <p>{$_(t`text2`)}</p>

  <img src="/aa.webp" alt="Adam Abonyi" style="width:100px;"  out:send={{ key: 'image' }} in:receive={{ key: 'image' }} />
</div>
