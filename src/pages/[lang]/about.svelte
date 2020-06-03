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
    <div>
      <img
        src="/aa.webp"
        alt="Adam Abonyi"
        style="width:100px; height:100px; position:absolute; right:16px"
        out:send={{ key: 'image' }}
        in:receive={{ key: 'image' }} />
      <h1 out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>
        {$_(t`page_title`)}
      </h1>
      <h3>{$_(t`description`)}</h3>
    </div>
    <br />

    <p>{$_(t`text1`)}</p>
    <p>{$_(t`text2`)}</p>
    <p>{$_(t`text3`)}</p>
    <p>{$_(t`text4`)}</p>
    <p>{$_(t`text5`)}</p>
    <p>{$_(t`text6`)}</p>

  </MainContent>
</FadePage>
