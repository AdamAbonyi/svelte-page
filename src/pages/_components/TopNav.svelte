<script>
  import { goto, isActive } from '@sveltech/routify'
  import {
    _,
    locale,
    languages,
    generateNewLanguageUrl,
  } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'

  const links = [
    { name: 'page.index.page_title', url: '' },
    { name: 'page.about.page_title', url: 'about' },
    { name: 'page.contact.page_title', url: 'contact' },
    { name: 'page.projects.page_title', url: 'projects' },
    { name: 'page.resume.page_title', url: 'resume' }
  ]
</script>

<style>
  .container {
    display: flex;
    flex-flow: row wrap;
    /* This aligns items to the end line on main-axis */
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .lang {
    margin-top: -8px;
    margin-left: 8px;
  }
</style>

<div class="container">
  {#each links as l, i}
    {#if $isActive(`/${$locale}/${l.url || 'index'}`)}
      <span>{$_(l.name)}</span>
    {:else}
      <a href={`/${$locale}/${l.url}`}>{$_(l.name)}</a>
    {/if}
    {#if i < links.length - 1}&nbsp;|&nbsp;{/if}
  {/each}

  <div class="lang">
    {#each languages as l}
      <button on:click={() => $goto(generateNewLanguageUrl(l.id))} >
        {l.name}
      </button>
    {/each}
  </div>
</div>
