import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const config = {
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
};

const i18n = new VueI18n(config);

let locale = 'en';
config.messages[locale]["X Numbers + Y Euronumbers"] =
  ctx => {
    return `${i18n.tc('match.Numbers', ctx.named('X'), locale)} + ${i18n.tc('match.Euronumbers', ctx.named('Y'), locale)}`;
  };

locale = 'de';
config.messages[locale]["X Numbers + Y Euronumbers"] =
  ctx => {
    return `${i18n.tc('match.Numbers', ctx.named('X'), locale)} + ${i18n.tc('match.Euronumbers', ctx.named('Y'), locale)}`;
  };

locale = 'sv-SE';
config.messages[locale]["X Numbers + Y Euronumbers"] =
  ctx => {
    return ctx.named('Y') > 0
      ? `${ctx.named('X')} + ${ctx.named('Y')} ${i18n.t('match.Numbers', locale)}`
      : `${ctx.named('X')} ${i18n.t('match.Numbers', locale)}`;
  };

export default new VueI18n(config);
