export const locales = ["en", "hy", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Languages served under a path prefix. English is served at `/`. */
export const prefixedLocales = locales.filter(
  (locale) => locale !== defaultLocale,
);

export type Localized<T> = Record<Locale, T>;

export const localeNames: Localized<{ short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  hy: { short: "ՀԱՅ", full: "Հայերեն" },
  ru: { short: "РУС", full: "Русский" },
};

export const openGraphLocale: Localized<string> = {
  en: "en_US",
  hy: "hy_AM",
  ru: "ru_RU",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isPrefixedLocale(value: string): value is Locale {
  return (prefixedLocales as readonly string[]).includes(value);
}

/** Pages of the site, as paths under each language's root. */
export const pages = {
  home: "",
  news: "news/",
  sponsors: "sponsors/",
  sponsor: "become-a-sponsor/",
  terms: "payment-terms/",
  privacy: "privacy/",
} as const;

export type Page = keyof typeof pages;

export function localePath(locale: Locale, page: Page = "home"): string {
  const root = locale === defaultLocale ? "/" : `/${locale}/`;
  return `${root}${pages[page]}`;
}
