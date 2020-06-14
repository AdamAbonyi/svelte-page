<!-- routify:options index=2 -->
<FadePage>
  <MainContent>
    <h1 out:send={{ key: 'contact' }} in:receive={{ key: 'contact' }}>
      {$_(t`page_title`)}
    </h1>
    <h3>{$_(t`description`)}</h3>

    <span>
      [Add a contact game here. Small game, if you solve it it sends you a token
      to send a message to me through the UI... or something like that]
    </span>
  </MainContent>
</FadePage>

<script>
  import { _, setMeta, page } from '@/services/i18n'
  import { send, receive } from '@/services/crossfade'

  import FadePage from '@/pages/_components/FadePage.svelte'
  import MainContent from '@/pages/_components/MainContent.svelte'

  const t = page('contact')
  setMeta(t`page_title`, t`description`)
</script>
