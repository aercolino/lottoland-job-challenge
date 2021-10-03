export default function (config, i18n) {
  const locale = 'de';
  config.messages[locale]["X Numbers + Y Euronumbers"] =
    ctx => {
      const numbers = i18n.tc('match.Numbers', ctx.named('X'), locale);
      const euroNumbers = i18n.tc('match.Euronumbers', ctx.named('Y'), locale);
      return `${numbers} + ${euroNumbers}`;
    };
}
