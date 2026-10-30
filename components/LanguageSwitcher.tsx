import { localeNames, localePath, locales, type Page } from "@/lib/i18n";
import type { SectionProps } from "./sections/types";

// Plain links: each language has its own root layout, so switching is a full
// page load either way. Each link opens the same page in the other language.
export function LanguageSwitcher({
  locale,
  page,
  t,
}: SectionProps & { page: Page }) {
  return (
    <nav aria-label={t.languageSwitcher}>
      <ul className="flex gap-1">
        {locales.map((other) => {
          const current = other === locale;
          return (
            <li key={other}>
              <a
                href={localePath(other, page)}
                hrefLang={other}
                lang={other}
                title={localeNames[other].full}
                aria-current={current ? "true" : undefined}
                className={`inline-flex min-h-10 min-w-11 items-center justify-center px-2 text-base font-semibold ${
                  current ? "bg-ink text-white" : "text-ink hover:bg-mat"
                }`}
              >
                {localeNames[other].short}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
