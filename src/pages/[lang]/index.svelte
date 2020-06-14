<!-- routify:options index=0 -->
<FadePage fullscreen>
  <HomePageContent>
    <div style="position:absolute; width:100%;">
      <div
        class="img"
        alt="this page was created in SvelteJs using Routify"
        out:send={{ key: 'image' }}
        in:receive={{ key: 'image' }}>
        <Image src="aa" />
      </div>

      <h1>{$_(t`page_title`)}</h1>
      <h3>{$_(t`description`)}</h3>
    </div>
  </HomePageContent>

  <!-- Menu path-->
  {#each links as { name, url }, i}
    <div class={`item item${i + 1}`}>
      <div out:send={{ key: url }} in:receive={{ key: url }}>
        <a class="link" data-buzz={`${$_(name)}`} href={`/${$locale}/${url}`}>
          {$_(name)}
        </a>
      </div>
    </div>
  {/each}
</FadePage>

<script>
  import { goto } from '@sveltech/routify'

  import { _, setMeta, page, locale } from '@/services/i18n'
  import { send, receive } from '@/services/crossfade'
  import Image from '@/_components/Image/index.svelte'
  import Nav from '@/pages/_components/Nav.svelte'
  import FadePage from '@/pages/_components/FadePage.svelte'
  import HomePageContent from '@/pages/_components/HomePageContent.svelte'

  const t = page('index')
  setMeta(t`page_title`, t`description`)

  const links = [
    { name: 'page.about.page_title', url: 'about' },
    { name: 'page.contact.page_title', url: 'contact' },
    { name: 'page.projects.page_title', url: 'projects' },
    { name: 'page.resume.page_title', url: 'resume' },
  ]
</script>

<style>
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item > div {
    text-align: center;
    width: 100%;
  }

  .item > div > div {
    display: inline-block;
  }

  .item1 {
    grid-column: 1;
    grid-row: 1;
  }

  .item2 {
    grid-column: 1;
    grid-row: 2;
  }

  .item3 {
    grid-column: 3;
    grid-row: 1;
  }

  .item4 {
    grid-column: 3;
    grid-row: 2;
  }

  .img {
    margin: auto;
    width: 300px;
    height: 300px;
  }

  @media only screen and (max-width: 800px) {
    .img {
      width: 200px;
      height: 200px;
    }
  }

  @media only screen and (max-width: 600px) {
    .item1 {
      grid-column: 1;
      grid-row: 1;
    }

    .item2 {
      grid-column: 2;
      grid-row: 1;
    }

    .item3 {
      grid-column: 1;
      grid-row: 3;
    }

    .item4 {
      grid-column: 2;
      grid-row: 3;
    }
  }

  .link {
    color: inherit;
    text-decoration: none;
  }

  .link:hover {
    font-weight: bold;
  }

  .buzz {
    display: inline-block;
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: all 250ms ease;
    transform: translatez(0);
    perspective: 50px;
  }

  .buzz:before,
  .buzz:after {
    white-space: pre;
    content: attr(data-buzz);
    position: absolute;
    z-index: -1;
    opacity: 0.5;
    transition: all 150ms ease;
  }

  .buzz:before {
    color: darkgray;
    top: 2px;
    left: 2px;
  }

  .buzz:after {
    color: lightgray;
    bottom: 2px;
    right: 2px;
  }

  .buzz:hover:before {
    transform: rotatex(-15deg) rotatey(5deg) scale(1.5);
  }

  .buzz:hover:after {
    transform: rotatey(-5deg) rotatex(15deg) scale(1.5);
  }
</style>
