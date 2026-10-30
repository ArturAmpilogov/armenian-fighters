import type { Locale, Localized } from "./i18n";

/** Replaces `{name}` placeholders, e.g. `format("Fight {n}", { n: 2 })`. */
export function format(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

// The payment form renders amounts on the server and again in the browser, so
// digits are grouped by hand: Intl output depends on each browser's locale
// data and could differ from the server's.
const digitGroupSeparator: Localized<string> = {
  en: ",",
  hy: "\u00a0",
  ru: "\u00a0",
};

/** "10,000" in English, "10 000" in Armenian and Russian. */
export function formatAmount(amount: number, locale: Locale): string {
  return String(Math.round(amount)).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    digitGroupSeparator[locale],
  );
}
