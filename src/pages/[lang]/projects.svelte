<!-- routify:options index=3 -->
<script>
  import { _, setMeta, page } from '../../services/i18n'

  const t = page('projects')
  setMeta(t`page_title`, t`description`)
</script>

<h1>{$_(t`page_title`)}</h1>
<h2>{$_(t`description`)}</h2>
