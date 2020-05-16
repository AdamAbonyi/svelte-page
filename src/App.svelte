<script>
  import { Router } from '@sveltech/routify'
  import { routes } from '@sveltech/routify/tmp/routes'

  import { setupI18n } from './services/i18n'
  import WebFont from 'webfontloader'

  setupI18n({ withLocale: 'en' })

  WebFont.load({
    google: {
      families: [
        'Play',
        'Press Start 2P',
        'Audiowide',
        'Jura',
        'Black Ops One',
      ],
    },
  })

  setTimeout(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Droid Serif'],
      },
    })
  }, 10000)
</script>

<Router {routes} />
