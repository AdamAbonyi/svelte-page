<script>
  import getImageSrc from './getimg.js'
  import { fade } from 'svelte/transition'
  
  export let w = '100%'
  export let c = ''
  export let src = ''

  let loaded = false
  let containerWidth

  function load(img) {
    img.onload = () => (loaded = true)
  }
</script>

<style>
  img {
    object-position: center;
    width: 100%;
    will-change: opacity;
  }

  .blur {
    -webkit-filter: blur(5px);
    filter: blur(5px);
    transform: scale(1);
  }

  .placeholder {
    position: relative;
    z-index: 1;
  }

  .loaded .placeholder {
    position: absolute;
  }
</style>

<div class:loaded style="width: 100%; max-width:{w}">
  <div style="overflow: hidden;" bind:offsetWidth={containerWidth}>
    {#if !loaded}
      <img
        out:fade={{ duration: 300 }}
        class="placeholder blur"
        src="./images/.generated/png/{src}-25.png"
        alt="placeholder" />
    {/if}
    <picture>
      <source
        type="image/webp"
        srcset={getImageSrc({ src }, 'webp', { containerWidth })} />
      <source
        type="image/png"
        srcset={getImageSrc({ src }, 'png', { containerWidth })} />
      <img
        use:load
        class="main {c}"
        alt="alt"
        srcset="./images/.generated/png/{src}-25.png"
        onerror="this.src =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMszXpSDwAFYwJEhxButQAAAABJRU5ErkJggg==';"
        loading="lazy" />
    </picture>
  </div>
</div>
