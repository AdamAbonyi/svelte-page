<!-- routify:options index=2 -->
<script>
  import { _, setMeta, page } from '../../services/i18n'

  const t = page('contact')
  setMeta(t`page_title`, t`description`)
</script>

<h1>{$_(t`page_title`)}</h1>
<h2>{$_(t`description`)}</h2>
