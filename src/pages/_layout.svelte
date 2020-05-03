<script>
  import { _, locale } from 'svelte-i18n'
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
    <button on:click={() => locale.set('cz')}>CZ</button>
    <button on:click={() => locale.set('en')}>EN</button>
  </span>

  <span>
    <a href="/home">{$_('nav.home')}</a>
    /
    <a href="/bio">{$_('nav.bio')}</a>
    /
    <a href="/example">{$_('nav.example')}</a>
  </span>

</div>

<div class="border">
  <slot />
</div>
