import { addMessages, locale, _ } from 'svelte-i18n';

import en from './translations/en/translation.json'
import cz from './translations/cz/translation.json'

const languages = [
    { id: 'cz', name: 'CZ'},
    { id: 'en', name: 'EN'},
  ]

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
    addMessages('en', en)
    addMessages('cz', cz)

    locale.set(_locale);
}

const isSupportedLanguage = (lang) => languages.find(l=> l.id===lang)

export { _, locale, setupI18n, languages, isSupportedLanguage };