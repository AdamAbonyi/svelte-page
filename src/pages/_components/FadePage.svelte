<script>
  import { fade } from 'svelte/transition'
</script>

<style>
  .content {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

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

<div class="content" transition:fade={{ duration: 400 }}>
  <slot />
</div>
