<script>
  import { _, page } from '../../services/i18n'
  import { setTitle, setDescription } from '../../services/meta'

  // page meta
  const t = page('about')
  setTitle($_(t`page_title`))
  setDescription($_(t`description`))
</script>

<h1>{$_(t`page_title`)}</h1>
<h2>{$_(t`description`)}</h2>
