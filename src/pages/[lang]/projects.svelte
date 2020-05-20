<script>
  import { _, setMeta, page } from '../../services/i18n'
  import { send, receive } from '../../services/crossfade'
  import { fade } from 'svelte/transition'

  const t = page('projects')
  setMeta(t`page_title`, t`description`)
</script>

<!-- routify:options index=3 -->
<div class="background-image" transition:fade />
<div class="cf" transition:fade>
  <h1 out:send={{ key: 'projects' }} in:receive={{ key: 'projects' }}>{$_(t`page_title`)}</h1>
  <h3>{$_(t`description`)}</h3>

  <span>
    Create a list of projects. Each project will leade to a separate page
  </span>
</div>
