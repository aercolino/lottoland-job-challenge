import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('./locales', false, /\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const locale = key.replace(/\.json|[^\w-]/g, '')
    messages[locale] = locales(key);
  })
  return messages
}

function patchLocaleMessages(config, i18n) {
  const patches = require.context('./locales/patches', false, /\.js$/i);
  patches.keys().forEach(key => {
    patches(key).default(config, i18n);
  });
}


const config = {
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
};

const virgin = new VueI18n(config);
patchLocaleMessages(config, virgin);


config.numberFormats = {
  'en': {
    currency: {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'symbol',
    }
  },
  'de': {
    currency: {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'symbol',
    }
  },
  'sv-SE': {
    currency: {
      style: 'currency',
      currency: 'SEK',
      currencyDisplay: 'symbol'
    }
  }
}

const patched = new VueI18n(config); 
export default patched;
