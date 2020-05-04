<script>
  import { url, route, redirect } from '@sveltech/routify'
  import { _, locale, languages, isSupportedLanguage} from '../../services/i18n'
  export let lang 
  
  if (!isSupportedLanguage(lang)) { 
    const [lang, ...path] = window.location.pathname.split('/').filter(x=>x)
    $redirect(`/${languages[0].id}/${path.join('/')}`) 
  } 
  else {
    locale.set(lang)
  }
</script>

<slot />
