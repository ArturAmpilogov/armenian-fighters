import { localePath, type Page } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { SectionProps } from "./sections/types";

export function SiteHeader({ locale, page, t }: SectionProps & { page: Page }) {
  const home = localePath(locale);
  const section = (id: string, label: string) => ({
    href: `${home}#${id}`,
    label,
    current: false,
  });
  const results = section("results", t.nav.results);
  const about = section("about", t.nav.about);
  const support = section("support", t.nav.support);
  const contact = section("contact", t.nav.contact);
  // News and Sponsors are pages of their own; the rest are home page sections.
  const news = {
    href: localePath(locale, "news"),
    label: t.nav.news,
    hint: t.nav.newsHint,
    current: page === "news",
    tile: "bg-corner-red hover:bg-corner-red-dark",
  };
  const sponsors = {
    href: localePath(locale, "sponsors"),
    label: t.nav.sponsors,
    hint: t.nav.sponsorsHint,
    current: page === "sponsors",
    tile: "bg-ink hover:bg-flag-blue",
  };
  const pages = [news, sponsors];
  const sections = [results, about, support, contact];
  const links = [results, about, support, news, sponsors, contact];
  const linkClass =
    "hover:text-corner-red aria-[current=page]:text-corner-red aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8";

  return (
    <header>
      {/* On phones the name, the language switcher and the menu button don't
          fit in one row, so the languages get their own strip on top. */}
      <div className="bg-mat sm:hidden">
        <div className="page-container flex justify-end">
          <LanguageSwitcher locale={locale} page={page} t={t} />
        </div>
      </div>
      <div className="page-container relative flex items-center justify-between gap-3 py-5 sm:gap-6">
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
          {/* Below the wide layout the sections sit behind a menu button. The
              panel is hidden while closed: Chrome still lays out closed
              <details> content, and long Armenian words overflowed the page. */}
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
              className="absolute inset-x-4 top-full z-20 hidden border-[3px] border-ink bg-paper p-2 shadow-[6px_6px_0_var(--color-ink)] group-open:block sm:right-8 sm:left-auto sm:w-72"
            >
              {/* The two pages come first, as big tiles, so they don't get lost
                  among the home page sections. Each tile keeps its colour; an
                  apricot bar on the left marks the page you're on. */}
              <ul className="grid gap-2">
                {pages.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={link.current ? "page" : undefined}
                      className={`block px-4 py-3 text-white transition-colors aria-[current=page]:shadow-[inset_6px_0_0_var(--color-apricot)] ${link.tile}`}
                    >
                      <span className="block font-display text-2xl leading-tight font-bold [font-stretch:70%]">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-white/80">
                        {link.hint}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="mt-2 border-t-2 border-ink/15 pt-1 text-lg font-semibold">
                {sections.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`block px-4 py-3 hover:bg-mat ${linkClass}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
