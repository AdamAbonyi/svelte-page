<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'

  import FadePage from '../_components/FadePage.svelte'
  import MainContent from '../_components/MainContent.svelte'

  const t = page('resume')
  setMeta(t`page_title`, t`description`)
</script>

<style>

</style>

<!-- routify:options index=4 -->
<FadePage>
  <MainContent>
    <h1 out:send={{ key: 'resume' }} in:receive={{ key: 'resume' }}>
      {$_(t`page_title`)}
    </h1>
    <h3>{$_(t`description`)}</h3>

    <span>
      Create a full screen-able resume here. Something similar to what I have
      with 3 columns, photo in the middle. Exportable to pdf and printable
    </span>
  </MainContent>
</FadePage>
