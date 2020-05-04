<script>
  import { redirect } from '@sveltech/routify'
  import { languages } from '../services/i18n'

  $redirect(`${languages[0].id}`)
</script>

