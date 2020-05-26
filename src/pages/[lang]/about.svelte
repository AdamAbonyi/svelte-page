<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'

  import FadePage from '../_components/FadePage.svelte'
  import MainContent from '../_components/MainContent.svelte'

  const t = page('about')
  setMeta(t`page_title`, t`description`)
</script>

<!-- routify:options index=1 -->
<FadePage>
  <MainContent>
    <div
      style="display:inline"
      out:send={{ key: 'about' }}
      in:receive={{ key: 'about' }}>
      <h1>{$_(t`page_title`)}</h1>
    </div>
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
  </MainContent>
</FadePage>
