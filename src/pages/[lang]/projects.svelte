<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'

  import FadePage from '../_components/FadePage.svelte'
  import MainContent from '../_components/MainContent.svelte'

  const t = page('projects')
  setMeta(t`page_title`, t`description`)
</script>

<!-- routify:options index=3 -->
<FadePage>
  <MainContent>
    <h1 out:send={{ key: 'projects' }} in:receive={{ key: 'projects' }}>
      {$_(t`page_title`)}
    </h1>
    <h3>{$_(t`description`)}</h3>

    <span>
      Create a list of projects. Each project will leade to a separate page
    </span>
  </MainContent>
</FadePage>
