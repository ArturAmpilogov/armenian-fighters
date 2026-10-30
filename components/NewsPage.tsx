import { getMessages } from "@/content/messages";
import type { Locale } from "@/lib/i18n";
import { getNewsPage } from "@/lib/news";
import { NewsFeed } from "./NewsFeed";
import { PageShell } from "./PageShell";

export function NewsPage({ locale }: { locale: Locale }) {
  const { news } = getMessages(locale);

  return (
    <PageShell locale={locale} page="news">
      <section
        aria-labelledby="news-title"
        className="page-container pt-8 pb-12 md:pt-14"
      >
        <h1 id="news-title" className="poster-title poster-title-lg">
          {news.title}
        </h1>
        <p className="mt-8 max-w-[40rem] text-xl leading-relaxed">
          {news.lead}
        </p>
      </section>
      <section aria-labelledby="news-title" className="page-container pb-24">
        <NewsFeed
          locale={locale}
          initial={getNewsPage(locale, 1)}
          labels={news}
        />
      </section>
    </PageShell>
  );
}
