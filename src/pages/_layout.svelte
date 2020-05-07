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

  span {
    color: orange;
    font-family: Monoton;
    font-size: 8rem;
    text-decoration: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }

  span:hover {
    color: #ffffff;
  -webkit-animation: neon5 1.5s ease-in-out infinite alternate;
  -moz-animation: neon5 1.5s ease-in-out infinite alternate;
  animation: neon5 1.5s ease-in-out infinite alternate;
}

@keyframes neon5 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF9900, 0 0 70px #FF9900, 0 0 80px #FF9900, 0 0 100px #FF9900, 0 0 150px #FF9900;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF9900, 0 0 35px #FF9900, 0 0 40px #FF9900, 0 0 50px #FF9900, 0 0 75px #FF9900;
  }
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

  <footer>
  <span>FOOTER</span>
  </footer>
</div>
