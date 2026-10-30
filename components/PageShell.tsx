import type { ReactNode } from "react";
import { getMessages } from "@/content/messages";
import type { Locale, Page } from "@/lib/i18n";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Skip link, header and footer around every page's content. */
export function PageShell({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: Page;
  children: ReactNode;
}) {
  const t = getMessages(locale);

  return (
    <>
      <a
        href="#main"
        className="sr-only bg-ink text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:px-4 focus:py-3"
      >
        {t.skipToContent}
      </a>
      <SiteHeader locale={locale} page={page} t={t} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale} page={page} t={t} />
    </>
  );
}
