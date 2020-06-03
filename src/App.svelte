<script>
  import { Router } from '@sveltech/routify'
  import { routes } from '@sveltech/routify/tmp/routes'

  import { setupI18n } from './services/i18n'
  import WebFont from 'webfontloader'

  setupI18n({ withLocale: 'en' })

  WebFont.load({
    google: {
      families: ['Source Code Pro'],
    },
  })

  // load these only on demand
  // setTimeout(() => {
  //   WebFont.load({
  //     google: {
  //       families: [
  //       'Audiowide'
  //       'Press Start 2P',
  //       'Jura',
  //       'Black Ops One'],
  //     },
  //   })
  // }, 3000)
</script>

<Router {routes} />
