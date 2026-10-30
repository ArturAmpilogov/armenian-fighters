import { newsItems, type NewsItem } from "@/content/news";
import type { Locale } from "@/lib/i18n";
import type { FeedItem, FeedPage } from "@/lib/news-feed";
import { monthLabel } from "@/lib/sponsors";

/** How many news items each feed page holds. */
export const newsPageSize = 6;

const sorted: NewsItem[] = [...newsItems].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const newsPageCount = Math.max(
  1,
  Math.ceil(sorted.length / newsPageSize),
);

function dateLabel(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function toFeedItem(item: NewsItem, locale: Locale): FeedItem {
  const { media } = item;
  return {
    id: item.id,
    date: item.date,
    dateLabel: dateLabel(item.date, locale),
    monthLabel: monthLabel(item.date.slice(0, 7), locale),
    kind: item.kind,
    title: item.title[locale],
    summary: item.summary[locale],
    media:
      media === null || media.type === "youtube"
        ? media
        : {
            type: "image",
            src: media.src,
            alt: media.alt[locale],
            credit: media.credit,
            position: media.position,
          },
    links: item.links.map((link) => ({
      label: typeof link.label === "string" ? link.label : link.label[locale],
      url: link.url,
    })),
  };
}

/** Newest first; `page` starts at 1. */
export function getNewsPage(locale: Locale, page: number): FeedPage {
  const start = (page - 1) * newsPageSize;
  return {
    page,
    totalPages: newsPageCount,
    items: sorted
      .slice(start, start + newsPageSize)
      .map((item) => toFeedItem(item, locale)),
  };
}
