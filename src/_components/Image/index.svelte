<script>
  import getImageSrc from './getimg.js'
  import { fade } from 'svelte/transition'
  
  export let w = '100%'
  export let c = ''
  export let src = ''

  let loaded = false
  let containerWidth

  const load = (img) => img.onload = () => (loaded = true)
  
</script>

<style>
  img {
    object-position: center;
    width: 100%;
    will-change: opacity;

    transition: 0.4s -webkit-filter ease-in-out;
    transition: 0.4s filter ease-in-out;
  }

  .blur {
    -webkit-filter: blur(10px);
    filter: blur(10px);
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
        class:blur={!loaded}
        alt="alt"
        srcset="/images/.generated/png/{src}-50.png"
        onerror="this.src =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMszXpSDwAFYwJEhxButQAAAABJRU5ErkJggg==';"
        loading="lazy" />
    </picture>
  </div>
</div>
