<script>
  import { _, locale } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'

  const links = [
    { name: 'page.about.page_title', url: 'about' },
    { name: 'page.contact.page_title', url: 'contact' },
    { name: 'page.projects.page_title', url: 'projects' },
    { name: 'page.resume.page_title', url: 'resume' },
  ]
</script>

<style>
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;
  }

  .block {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .block > div {
    width: 100%;
    text-align: center;
  }
</style>

<div class="wrapper">
  {#each links as { name, url }}
    <div class="block">
      <div out:send={{ key: url }} in:receive={{ key: url }}>
        <a href={`/${$locale}/${url}`}>{$_(name)}</a>
      </div>
    </div>
  {/each}
</div>
