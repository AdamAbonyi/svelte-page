<script>
  import { Router } from '@sveltech/routify'
  import { routes } from '@sveltech/routify/tmp/routes'

  import { setupI18n } from './services/i18n'

  setupI18n({ withLocale: 'en' })
</script>

<Router {routes} />
