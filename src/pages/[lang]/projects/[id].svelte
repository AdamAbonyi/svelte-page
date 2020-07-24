<!-- routify:options index=3 -->
<FadePage>
  <MainContent>
    <div out:send={{ key: `${test}` }} in:receive={{ key: `${test}` }}>
      <h2 style="margin-left:auto; margin-right:auto;display:inline">
        {title}
      </h2>

      <h3>{description}</h3>
    </div>
  </MainContent>
</FadePage>

<script>
  import { ready } from '@sveltech/routify'
  import { _, setMeta, page } from '@/services/i18n'
  import { send, receive } from '@/services/crossfade'

  import FadePage from '@/pages/_components/FadePage.svelte'
  import MainContent from '@/pages/_components/MainContent.svelte'

  import projects from '@/projects.json'

  export let id
  const test = id

  const { title, description, images } = projects.find(x => x.id === id)

  const t = page('projects')
  setMeta(t`page_title`, t`description`)
</script>
