import { localePath, type Page } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { SectionProps } from "./sections/types";

export function SiteHeader({ locale, page, t }: SectionProps & { page: Page }) {
  const home = localePath(locale);
  const links = [
    { href: `${home}#results`, label: t.nav.results, current: false },
    { href: `${home}#about`, label: t.nav.about, current: false },
    { href: `${home}#support`, label: t.nav.support, current: false },
    {
      href: localePath(locale, "news"),
      label: t.nav.news,
      current: page === "news",
    },
    {
      href: localePath(locale, "sponsors"),
      label: t.nav.sponsors,
      current: page === "sponsors",
    },
    { href: `${home}#contact`, label: t.nav.contact, current: false },
  ];
  const linkClass =
    "hover:text-corner-red aria-[current=page]:text-corner-red aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8";

  return (
    <header className="page-container relative flex items-center justify-between gap-3 py-5 sm:gap-6">
      <a
        href={home}
        className="corner corner-red pt-2.5 pl-3 font-display text-xl leading-none font-black whitespace-nowrap uppercase [font-stretch:62.5%] before:size-4 before:border-t-[3px] before:border-l-[3px] sm:text-2xl"
      >
        {t.brand.name}
      </a>
      <div className="flex items-center gap-3 sm:gap-8">
        <nav aria-label={t.nav.label} className="hidden xl:block">
          <ul className="flex gap-6 text-base font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className={linkClass}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:block">
          <LanguageSwitcher locale={locale} page={page} t={t} />
        </div>
        {/* Below the wide layout the sections sit behind a menu button; on
            phones the language switcher moves in there too. */}
        <details className="group xl:hidden">
          <summary
            aria-label={t.nav.menu}
            className="grid size-10 cursor-pointer list-none place-items-center border-2 border-ink [&::-webkit-details-marker]:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5">
              <path
                className="group-open:hidden"
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="hidden group-open:block"
                d="M4 4l12 12M16 4 4 16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </summary>
          <nav
            aria-label={t.nav.label}
            className="absolute inset-x-4 top-full z-20 border-[3px] border-ink bg-paper p-2 shadow-[6px_6px_0_var(--color-ink)] sm:right-8 sm:left-auto sm:w-72"
          >
            <ul className="text-lg font-semibold">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={link.current ? "page" : undefined}
                    className={`block px-4 py-3 hover:bg-mat ${linkClass}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t-2 border-ink/15 px-2 pt-3 pb-1 sm:hidden">
              <LanguageSwitcher locale={locale} page={page} t={t} />
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
