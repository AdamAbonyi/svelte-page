import { addMessages, locale, _ } from 'svelte-i18n';

import en from './translations/en/translation.json'
import cz from './translations/cz/translation.json'

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
    addMessages('en', en)
    addMessages('cz', cz)

    locale.set('en');
}


export { _, setupI18n };