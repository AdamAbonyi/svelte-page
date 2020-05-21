<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('about')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  .content {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }


</style>

<!-- routify:options index=1 -->
<div class="cf" transition:fade>

  <h1 out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>
    {$_(t`page_title`)}
  </h1>
  <h3>{$_(t`description`)}</h3>
  <br />

  <div class="content">
    <p>{$_(t`text1`)}</p>
    <p>{$_(t`text2`)}</p>

    <img
      src="/aa.webp"
      alt="Adam Abonyi"
      style="width:100px;"
      out:send={{ key: 'image' }}
      in:receive={{ key: 'image' }} />
  </div>

</div>
