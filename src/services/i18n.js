import { addMessages, locale, _ } from 'svelte-i18n';

import en from './translations/en/translation.json'
import cz from './translations/cz/translation.json'

const languages = [
    { id: 'en', name: 'EN'},
    { id: 'cz', name: 'CZ'},
  ]
  
const isSupportedLanguage = (lang) => languages.find(l=> l.id===lang)

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
    addMessages('en', en)
    addMessages('cz', cz)

    locale.set(_locale);
}

function generateNewLanguageUrl(lang, url = window.location.pathname) {
    const [l, ...path] = url.split('/').filter(x=>x)
    if (isSupportedLanguage(lang)) {
    locale.set(lang)
      return `/${lang}/${path.join('/')}`
    } else {
      return `/en/error`
    }
}

export { _, locale, setupI18n, languages, isSupportedLanguage, generateNewLanguageUrl };