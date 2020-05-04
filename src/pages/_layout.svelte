<script>
  import { url, route, goto } from '@sveltech/routify'
  import { _,locale, languages, generateNewLanguageUrl } from '../services/i18n'

  const links = [
    {name: 'nav.home', url: ''},
    {name: 'nav.bio', url: 'bio'},
    {name: 'nav.example', url: 'example'},
    {name: 'nav.bad', url: 'bad'},
  ]
</script>

<style>
  .border {
    /* border: 1px solid black; */
    margin: auto;
    max-width: 800px;
    padding: 8px 32px;
  }
</style>

<div>
  <span>
  {#each languages as l}
      <button on:click={() => $goto(generateNewLanguageUrl(l.id))}>{l.name}</button> 
  {/each}
  </span>

  <span>
  {#each links as l, i}
    <a href={`/${$locale}/${l.url}`}>{$_(l.name)}</a>{#if i < links.length - 1}&nbsp;|&nbsp;{/if} 
  {/each}
  </span>

</div>

<div class="border">
  <slot />
</div>
