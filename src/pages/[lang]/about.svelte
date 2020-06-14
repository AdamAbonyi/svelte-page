<!-- routify:options index=1 -->
<FadePage>
  <MainContent>
    <div>
      <h1 out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>
        {$_(t`page_title`)}
      </h1>
      <h3>{$_(t`description`)}</h3>
    </div>

    <section>
      <p>
        <img
          src="/aa.webp"
          alt="Adam Abonyi"
          style="width:45px; height:45px; position:absolute;
          margin-top:-14px;margin-left:130px;"
          out:send={{ key: 'image' }}
          in:receive={{ key: 'image' }} />
        {$_(t`intro0`)}
      </p>
      <p>{$_(t`intro1`)}</p>
    </section>

    <section>
      <h2>{$_(t`subtitleMe`)}</h2>

      <p>{$_(t`me.0`)}</p>
      <p>{$_(t`me.1`)}</p>
      <p>{$_(t`me.2`)}</p>
      <p>{$_(t`me.3`)}</p>
    </section>

    <section>
      <h2>{$_(t`subtitlePage`)}</h2>

      <p>{$_(t`page.0`)}</p>
      <p>{$_(t`page.1`)}</p>
      <p>{$_(t`page.2`)}</p>
    </section>
  </MainContent>
</FadePage>

<script>
  import { _, setMeta, page } from '@/services/i18n'
  import { send, receive } from '@/services/crossfade'

  import FadePage from '@/pages/_components/FadePage.svelte'
  import MainContent from '@/pages/_components/MainContent.svelte'

  const t = page('about')
  setMeta(t`page_title`, t`description`)
</script>

<style>
  p {
    text-align: justify;
  }
</style>
