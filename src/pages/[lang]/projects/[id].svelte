<!-- routify:options index=3 -->
<FadePage>
  <MainContent>
    <div out:send={{ key: `projects0` }} in:receive={{ key: `projects0` }}>
      <h2 style="margin-left:auto; margin-right:auto;display:inline">
        Blender
      </h2>
    </div>
    <h3>{$_(t`description`)}</h3>
  </MainContent>
</FadePage>

<script>
  import { ready } from '@sveltech/routify'
  import { _, setMeta, page } from '@/services/i18n'
  import { send, receive } from '@/services/crossfade'

  import FadePage from '@/pages/_components/FadePage.svelte'
  import MainContent from '@/pages/_components/MainContent.svelte'

  import projects from '@/projects.json'

  const t = page('projects')
  setMeta(t`page_title`, t`description`)
</script>
