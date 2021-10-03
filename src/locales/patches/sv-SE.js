export default function (config, i18n) {
  const locale = 'sv-SE';
  config.messages[locale]["X Numbers + Y Euronumbers"] =
    ctx => {
      const numbers = i18n.t('match.Numbers', locale);
      return ctx.named('Y') > 0
        ? `${ctx.named('X')} + ${ctx.named('Y')} ${numbers}`
        : `${ctx.named('X')} ${numbers}`;
    };
}
