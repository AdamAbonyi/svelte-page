<script>
  import Octocat from './_components/Octocat.svelte'
  import TopNav from './_components/TopNav.svelte'

</script>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px auto 50px;
    height: 100vh;
    justify-items: center;
  }

  header {
    grid-column: span 12;
  }

  main {
    grid-column: span 12;
    
  }

  footer {
    grid-column: span 12;
  }
</style>

<Octocat />

<div class="container">
  <header>
    <TopNav />
  </header>

  <main>
    <slot />
  </main>

  <footer>FOOTER</footer>
</div>
