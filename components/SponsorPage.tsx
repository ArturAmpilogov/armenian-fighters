import { getMessages, type Messages } from "@/content/messages";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { CardLogos } from "./CardLogos";
import { factLabel, factRow } from "./facts";
import { PageShell } from "./PageShell";
import { SellerDetails } from "./SellerDetails";
import { SponsorForm } from "./SponsorForm";
import { Contact } from "./sections/Contact";

const panelClass = "corner corner-red min-w-0 bg-mat p-6 sm:p-10 lg:col-span-7";

/** Shown until card payments open: what's coming, and the contacts for now. */
function ComingSoon({ sponsor }: { sponsor: Messages["sponsor"] }) {
  return (
    <section aria-labelledby="payment-title" className={panelClass}>
      <p className="inline-block bg-ink px-3 py-1 font-display text-lg font-bold text-white [font-stretch:70%]">
        {sponsor.soon.label}
      </p>
      <h2 id="payment-title" className="mt-4 text-3xl sm:text-5xl">
        {sponsor.soon.title}
      </h2>
      <p className="mt-5 text-xl leading-relaxed">{sponsor.soon.body}</p>
      <a href="#contact" className="btn btn-primary mt-8">
        {sponsor.soon.action}
      </a>
    </section>
  );
}

// Individuals sponsor by card here. Companies talk to the coaches first, so
// their button on the home page goes to the contacts instead. Until
// `payments.endpoint` is set, the page shows "coming soon" and the contacts.
export function SponsorPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const { sponsor, costs } = t;
  const { payments } = site;

  return (
    <PageShell locale={locale} page="sponsor">
      <section
        aria-labelledby="sponsor-title"
        className="page-container pt-8 pb-20 md:pt-14 md:pb-28"
      >
        <h1 id="sponsor-title" className="poster-title poster-title-lg">
          {sponsor.title}
        </h1>
        <p className="mt-8 max-w-[40rem] text-xl leading-relaxed">
          {sponsor.lead}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          {payments.endpoint === null ? (
            <ComingSoon sponsor={sponsor} />
          ) : (
            <section aria-labelledby="payment-title" className={panelClass}>
              <h2 id="payment-title" className="text-3xl sm:text-5xl">
                {sponsor.form.title}
              </h2>
              <SponsorForm
                locale={locale}
                labels={sponsor.form}
                money={sponsor.money}
                amounts={payments.amounts}
                min={payments.min}
                max={payments.max}
                endpoint={payments.endpoint}
                termsHref={localePath(locale, "terms")}
                privacyHref={localePath(locale, "privacy")}
              />
              <div className="mt-10 space-y-4 border-t-2 border-ink/15 pt-6">
                <CardLogos cards={payments.cards} label={sponsor.form.cards} />
                <p className="text-base text-ink-soft">{sponsor.form.secure}</p>
              </div>
            </section>
          )}

          <section
            aria-labelledby="sponsor-costs-title"
            className="min-w-0 lg:col-span-5 lg:pt-10"
          >
            <h2 id="sponsor-costs-title" className="text-3xl sm:text-4xl">
              {costs.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {costs.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-2.5 shrink-0 bg-flag-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      {payments.endpoint === null ? null : (
        <>
          <section aria-labelledby="how-title" className="bg-mat">
            <div className="page-container section-pad grid gap-10 lg:grid-cols-12 lg:gap-8">
              <h2 id="how-title" className="section-title lg:col-span-5">
                {sponsor.how.title}
              </h2>
              <dl className="border-t-[3px] border-ink lg:col-span-7">
                {sponsor.how.items.map((item) => (
                  <div key={item.label} className={factRow}>
                    <dt className={factLabel}>{item.label}</dt>
                    <dd className="min-w-0">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <div className="page-container section-pad grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <SellerDetails t={t} id="seller-title" />
            </div>
            <ul className="space-y-3 text-xl font-semibold lg:col-span-5 lg:pt-16">
              <li>
                <a href={localePath(locale, "terms")} className="text-link">
                  {t.terms.title}
                </a>
              </li>
              <li>
                <a href={localePath(locale, "privacy")} className="text-link">
                  {t.privacy.title}
                </a>
              </li>
            </ul>
          </div>
        </>
      )}

      <Contact locale={locale} t={t} />
    </PageShell>
  );
}
