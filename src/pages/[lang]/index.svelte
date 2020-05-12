<script>
  import Image from '../../_components/Image/index.svelte'

  import { _, setMeta, page } from '../../services/i18n'

  const t = page('index')
  setMeta(t`page_title`, t`description`)
</script>

<style>

</style>

<div>
  <Image src="aa" w="500px" style="width:200px" />
  <h1>{$_(t`page_title`)}</h1>
  <h2>{$_(t`description`)}</h2>
</div>
