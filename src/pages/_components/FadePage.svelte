<div class="content" class:fullscreen transition:fade={{ duration: 400 }}>
  <slot />
</div>

<script>
  import { fade } from 'svelte/transition'

  export let fullscreen = false
</script>

<style>
  .fullscreen {
    bottom: 0;
    height: 100%;
  }

  .content {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }
</style>
