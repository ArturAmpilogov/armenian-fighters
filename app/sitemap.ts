import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { localePath, locales, pages, type Page } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (path: string) => new URL(path, site.url).href;

  return (Object.keys(pages) as Page[]).flatMap((page) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, absolute(localePath(locale, page))]),
    );
    return locales.map((locale) => ({
      url: absolute(localePath(locale, page)),
      alternates: { languages },
    }));
  });
}
