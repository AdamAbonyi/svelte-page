<script>
  import { url, route, goto } from '@sveltech/routify'
  import {
    _,
    locale,
    languages,
    generateNewLanguageUrl,
  } from '../../services/i18n'

  const links = [
    { name: 'nav.home', url: '' },
    { name: 'nav.about', url: 'about' },
    { name: 'nav.contact', url: 'contact' },
    { name: 'nav.projects', url: 'projects' },
    { name: 'nav.resume', url: 'resume' },
    // {name: 'nav.example', url: 'example'},
    { name: 'nav.bad', url: 'bad' },
  ]
</script>

<style>
  .container {
    display: flex;
    flex-flow: row wrap;
    /* This aligns items to the end line on main-axis */
    justify-content: flex-end;
    padding: 16px;
  }

  .lang {
    /* padding:16px; */
    margin-top: -8px;
    margin-left: 8px;
  }
</style>

<div class="container">
  {#each links as l, i}
    <a href={`/${$locale}/${l.url}`}>{$_(l.name)}</a>
    {#if i < links.length - 1}&nbsp;|&nbsp;{/if}
  {/each}

  <div class="lang">
    {#each languages as l}
      <button on:click={() => $goto(generateNewLanguageUrl(l.id))}>
        {l.name}
      </button>
    {/each}
  </div>
</div>
