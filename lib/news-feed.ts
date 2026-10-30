import type { NewsKind } from "@/content/news";
import type { Locale } from "@/lib/i18n";

// Shared by the server, which writes the feed pages, and the browser, which
// reads them. Holds no news data, so it stays out of the client bundle.

/** A news item in one language, as sent to the browser. */
export type FeedItem = {
  id: string;
  date: string;
  // Both labels are formatted on the server: browsers without Armenian locale
  // data would print English month names and break hydration.
  dateLabel: string;
  monthLabel: string;
  kind: NewsKind;
  title: string;
  summary: string;
  media:
    | {
        type: "image";
        src: string;
        alt: string;
        credit: string;
        position: string | null;
      }
    | { type: "youtube"; id: string }
    | null;
  links: { label: string; url: string }[];
};

export type FeedPage = {
  page: number;
  totalPages: number;
  items: FeedItem[];
};

/** Where the browser fetches a feed page. Served as static JSON. */
export function newsFeedUrl(locale: Locale, page: number): string {
  return `/news-feed/${locale}/${page}.json`;
}
