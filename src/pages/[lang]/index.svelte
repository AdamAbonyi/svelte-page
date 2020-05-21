<script>
  import { goto } from '@sveltech/routify'
  import { slide } from 'svelte/transition'

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
</style>

<!-- routify:options index=0 -->

<div class="cf" style="text-align:center">
  <img
    src="/aa.webp"
    alt="Adam Abonyi"
    style="width:300px"
    out:send={{ key: 'image' }}
    in:receive={{ key: 'image' }} />
  <h1 transition:slide style="z-index:1000">{$_(t`page_title`)}</h1>
  <h3 transition:slide>{$_(t`description`)}</h3>
</div>

<!-- Menu path-->
<Nav />