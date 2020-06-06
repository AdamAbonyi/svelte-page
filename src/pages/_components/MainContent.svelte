<style>
  .grid-layout {
    padding: 16px;
    position: relative;
    grid-column: 1 / span 3;
    grid-row: 1 / span 2;
    max-width:800px;
    margin-left:auto;
    margin-right:auto;
  }

  @media only screen and (max-width: 600px) {
    .grid-layout {
      grid-column: 1 / span 2;
      grid-row: 1 / span 3;
    }
  }
</style>

<div class={`grid-layout`}>
  <slot />
</div>
