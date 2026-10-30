import { isLocale, locales } from "@/lib/i18n";
import { getNewsPage, newsPageCount } from "@/lib/news";

// The news feed as static JSON, one file per language and page, e.g.
// /news-feed/ru/2.json. The News page loads these as the visitor scrolls.

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    Array.from({ length: newsPageCount }, (_, i) => ({
      lang,
      page: `${i + 1}.json`,
    })),
  );
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/news-feed/[lang]/[page]">,
) {
  const { lang, page } = await params;
  const number = Number.parseInt(page, 10);
  if (
    !isLocale(lang) ||
    page !== `${number}.json` ||
    number < 1 ||
    number > newsPageCount
  ) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }
  return Response.json(getNewsPage(lang, number));
}
