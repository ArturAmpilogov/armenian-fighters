import { localePath, type Page } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { SectionProps } from "./sections/types";

export function SiteFooter({ locale, page, t }: SectionProps & { page: Page }) {
  return (
    <footer className="page-container flex flex-wrap items-center justify-between gap-6 py-10 text-base text-ink-soft">
      <p>
        <span
          lang="en"
          className="block font-display text-xl font-black text-ink uppercase [font-stretch:62.5%]"
        >
          {t.brand.name}
        </span>
        <span className="block">{t.brand.role}</span>
        <span className="block">{t.brand.place}</span>
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <a
          href={localePath(locale, "news")}
          className="text-link font-semibold text-ink"
        >
          {t.nav.news}
        </a>
        <a
          href={localePath(locale, "sponsors")}
          className="text-link font-semibold text-ink"
        >
          {t.nav.sponsors}
        </a>
        <LanguageSwitcher locale={locale} page={page} t={t} />
      </div>
    </footer>
  );
}
