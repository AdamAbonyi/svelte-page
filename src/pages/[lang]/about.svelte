<!-- routify:options index=1 -->
<script>
  import { _, setMeta, page } from '../../services/i18n'

  const t = page('about')
  setMeta(t`page_title`, t`description`)
</script>

<h1>{$_(t`page_title`)}</h1>
<h2>{$_(t`description`)}</h2>
<p>{$_(t`text1`)}</p>
<p>{$_(t`text2`)}</p>
