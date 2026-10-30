import type { Metadata } from "next";
import { getMessages } from "@/content/messages";
import { site } from "@/content/site";
import {
  defaultLocale,
  localePath,
  locales,
  openGraphLocale,
  type Locale,
  type Page,
} from "@/lib/i18n";

// Armenian copy puts a word joiner after hyphens ("MMA-\u2060ի") so lines don't
// break there. Tab titles and search snippets show it as a space.
function withoutWordJoiners(text: string): string {
  return text.replaceAll("\u2060", "");
}

export function buildMetadata(locale: Locale, page: Page = "home"): Metadata {
  const t = getMessages(locale);
  const copy =
    page === "home"
      ? t.meta
      : {
          title: `${t[page].title} | ${t.brand.name}`,
          description: t[page].lead,
        };
  const title = withoutWordJoiners(copy.title);
  const description = withoutWordJoiners(copy.description);
  const languages = Object.fromEntries(
    locales.map((other) => [other, localePath(other, page)]),
  );

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: localePath(locale, page),
      languages: {
        ...languages,
        "x-default": localePath(defaultLocale, page),
      },
    },
    openGraph: {
      type: "website",
      siteName: t.brand.name,
      title,
      description,
      url: localePath(locale, page),
      locale: openGraphLocale[locale],
      alternateLocale: locales
        .filter((other) => other !== locale)
        .map((other) => openGraphLocale[other]),
    },
  };
}
