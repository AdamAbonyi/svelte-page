<style>
  .middle {
    position: relative;
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item > div {
    text-align: center;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .middle {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
  }
</style>

<div class="middle item">
  <slot />
</div>
