<script>
  import { goto, isActive } from '@sveltech/routify'
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
    { name: 'nav.bad', url: 'bad' },
  ]
</script>

<style>
  .container {
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-flow: row wrap;
    /* This aligns items to the end line on main-axis */
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    /* z-index: 20; */
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
      <button on:click={() => $goto(generateNewLanguageUrl(l.id))}>
        {l.name}
      </button>
    {/each}
  </div>
</div>
