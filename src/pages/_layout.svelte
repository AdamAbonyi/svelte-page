<script>
  import { _, locale } from 'svelte-i18n'

  const links = [
    {name: 'nav.home', url: '/'},
    {name: 'nav.bio', url: '/bio'},
    {name: 'nav.example', url: '/example'},
  ]

  const langs = [
    { id: 'cz', name: 'CZ'},
    { id: 'en', name: 'EN'},
  ]
</script>

<style>
  .border {
    border: 1px solid black;
    margin: auto;
    max-width: 800px;
    padding: 8px 32px;
  }
</style>

<div>
  <span>
    {#each langs as l,i}
      <button on:click={() => locale.set(l.id)}>{l.name}</button> 
    {/each}
  </span>

  <span>
  {#each links as l, i}
    <a href={l.url}>{$_(l.name)}</a>{#if i < links.length - 1}&nbsp;|&nbsp;{/if} 
  {/each}
  </span>

</div>

<div class="border">
  <slot />
</div>
