<!-- routify:options index=3 -->
<FadePage>
  <MainContent>
    <h1 out:send={{ key: 'projects' }} in:receive={{ key: 'projects' }}>
      {$_(t`page_title`)}
    </h1>
    <h3>{$_(t`description`)}</h3>
    {#each projects as { id, title, description, images }, i}
      <section class="box {i % 2 ? 'even' : 'odd'}">
        <div
          style="width:100%; min-height:40px;"
          out:send={{ key: `${id}` }}
          in:receive={{ key: `${id}` }}>
          <span class={i % 2 ? 'even' : 'odd'}>
            <a href={`projects/${id}`}>
              <h2>{title}</h2>
            </a>
          </span>
          <p>{description}</p>
        </div>
        <div class="images">
          {#each images as img, index}
            <img src={img} alt="{index + 1}. image of {title}" />
          {/each}
        </div>
      </section>
    {/each}
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

<style>
  .box {
    margin-bottom: 24px;
  }

  .odd {
    margin-right: 20%;
    display: inline;
    margin-left: 0;
  }

  .odd h2 {
    text-align: left;
  }

  .odd .images {
    text-align: left;
  }

  .even {
    margin-left: 20%;
  }

  .even h2 {
    text-align: right;
  }
  .even .images {
    text-align: right;
  }

  p {
    text-align: justify;
  }

  img {
    height: 120px;
    margin: 4px;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    margin: -4px;
  }

  .even .images {
    justify-content: flex-end;
  }

  @media only screen and (max-width: 600px) {
    .odd {
      margin-right: unset;
    }
    .even {
      margin-left: unset;
    }
  }
</style>
