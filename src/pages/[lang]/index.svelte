<script>
  import { _ } from 'svelte-i18n'
  import Image from '../../_components/Image/index.svelte'
  import { setTitle, setDescription } from '../../services/meta'

  setTitle($_('page.index.page_title'))
  setDescription($_('page.index.description'))
</script>

<h1>{$_('page.index.page_title')}</h1>
<h2>{$_('page.index.description')}</h2>
<Image src="aa" w="500px" c="rounded"/>