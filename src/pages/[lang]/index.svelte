<script>
  import { goto } from '@sveltech/routify'
  import { fade } from 'svelte/transition'

  import { _, setMeta, page, locale } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import Nav from '../_components/Nav.svelte'

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
  /* img {
    image-rendering: crisp-edges;
    filter: grayscale(100%);
  } */

  .content {
    display: absolute;
  }

  .center-item {
    display: relative;
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item > div {
    text-align: center;
    width: 100%;
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

  img {
    width: 300px;
    height: 300px;
    transition: all 0.4s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
</style>

<!-- routify:options index=0 -->

<div class="cf" transition:fade>
  <div class="item center-item">
    <div class="content">
      <img
        src="/aa.webp"
        alt="Adam Abonyi"
        out:send={{ key: 'image' }}
        in:receive={{ key: 'image' }} />

      <h1>{$_(t`page_title`)}</h1>
      <h3>{$_(t`description`)}</h3>
    </div>
  </div>

  <!-- Menu path-->
  {#each links as { name, url }, i}
    <div class={`item item${i + 1}`}>
      <div out:send={{ key: url }} in:receive={{ key: url }}>
        <a href={`/${$locale}/${url}`}>{$_(name)}</a>
      </div>
    </div>
  {/each}
</div>
