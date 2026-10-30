import { format, getMessages } from "@/content/messages";
import { site } from "@/content/site";
import { formatAmount } from "@/lib/format";
import { localePath, type Locale } from "@/lib/i18n";
import { PageShell } from "./PageShell";
import { SellerDetails } from "./SellerDetails";

// The payment terms and the privacy policy: the seller first, since the text
// refers to "the seller named above", then the sections.
export function LegalPage({
  locale,
  page,
}: {
  locale: Locale;
  page: "terms" | "privacy";
}) {
  const t = getMessages(locale);
  const copy = t[page];
  const other = page === "terms" ? "privacy" : "terms";
  const money = (amount: number) =>
    format(t.sponsor.money, { amount: formatAmount(amount, locale) });
  const values = {
    min: money(site.payments.min),
    max: money(site.payments.max),
  };

  return (
    <PageShell locale={locale} page={page}>
      <article
        aria-labelledby="legal-title"
        className="page-container pt-8 pb-24 md:pt-14"
      >
        <h1 id="legal-title" className="poster-title poster-title-md">
          {copy.title}
        </h1>
        <p className="mt-8 max-w-[40rem] text-xl leading-relaxed">
          {copy.lead}
        </p>
        <p className="mt-4 text-base text-ink-soft">{copy.updated}</p>

        <div className="mt-12 max-w-[44rem] bg-mat p-6 sm:p-10">
          <SellerDetails t={t} id="seller-title" />
        </div>

        <div className="mt-16 max-w-[44rem] space-y-12">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl sm:text-4xl">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lg leading-relaxed">
                  {format(paragraph, values)}
                </p>
              ))}
            </section>
          ))}
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-xl font-semibold">
          <li>
            <a href={localePath(locale, other)} className="text-link">
              {t[other].title}
            </a>
          </li>
          <li>
            <a href={localePath(locale, "sponsor")} className="text-link">
              {t.sponsor.title}
            </a>
          </li>
        </ul>
      </article>
    </PageShell>
  );
}
