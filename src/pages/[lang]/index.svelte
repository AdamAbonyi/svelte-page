<script>
  import { _, page } from '../../services/i18n'
  import Image from '../../_components/Image/index.svelte'
  import { setTitle, setDescription } from '../../services/meta'

  // page meta
  const t = page('index')
  setTitle($_(t`page_title`))
  setDescription($_(t`description`))
</script>

<style>
</style>

<div>
  <Image src="aa" w="500px" style="width:200px"/>
  <h1>{$_(t`page_title`)}</h1>
  <h2>{$_(t`description`)}</h2>
</div>
