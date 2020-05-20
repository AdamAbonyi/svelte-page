<script>
  import { goto, isActive } from '@sveltech/routify'
  import { fade } from 'svelte/transition'

  import { _, setMeta, page, locale } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'

  import TopNav from '../_components/TopNav.svelte'

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
  img {
    -webkit-filter: drop-shadow(4px 4px 0 rgba(255, 255, 255, 0.1))
      drop-shadow(-4px -4px 0 rgba(255, 255, 255, 0.1));
    filter: drop-shadow(4px 4px 0 rgba(255, 255, 255, 0.1))
      drop-shadow(-4px -4px 0 rgba(255, 255, 255, 0.1));

    /* image-rendering: crisp-edges;
    filter: grayscale(100%); */
  }
</style>

<!-- routify:options index=0 -->
<div class="cf" style="text-align:center" transition:fade>
  <img
    src="/aa.webp"
    alt="Adam Abonyi"
    style="width:300px"
    out:send={{ key: 'image' }}
    in:receive={{ key: 'image' }} />
  <h1>{$_(t`page_title`)}</h1>
  <h3>{$_(t`description`)}</h3>

  <!-- About -->
  <div class="test" id="NW">
    <div out:send={{ key: 'about' }} in:receive={{ key: 'about' }}>
      <a href={`/${$locale}/about`}>{$_('page.about.page_title')}</a>
    </div>
  </div>

  <div class="test" id="NE">
    <div out:send={{ key: 'contact' }} in:receive={{ key: 'contact' }}>
      <a href={`/${$locale}/contact`}>{$_('page.contact.page_title')}</a>
    </div>
  </div>

  <div class="test" id="SE">
    <div out:send={{ key: 'projects' }} in:receive={{ key: 'projects' }}>
      <a href={`/${$locale}/projects`}>{$_('page.projects.page_title')}</a>
    </div>
  </div>
  ​
  <div class="test" id="SW">
    <div out:send={{ key: 'resume' }} in:receive={{ key: 'resume' }}>
      <a href={`/${$locale}/resume`}>{$_('page.resume.page_title')}</a>
    </div>
  </div>
</div>
