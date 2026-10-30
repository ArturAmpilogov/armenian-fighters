import Image from "next/image";
import type { ReactNode } from "react";
import { getMessages } from "@/content/messages";
import {
  companySponsors,
  individualSponsors,
  type CompanySponsor,
  type IndividualSponsor,
} from "@/content/sponsors";
import { localePath, type Locale } from "@/lib/i18n";
import { groupByMonth, monthLabel, type MonthGroup } from "@/lib/sponsors";
import { PageShell } from "./PageShell";
import { Contact } from "./sections/Contact";

type Corner = "blue" | "red";

const badgeColor: Record<Corner, string> = {
  blue: "bg-flag-blue",
  red: "bg-corner-red",
};

/** A jump link to one group, with how many sponsors it holds. */
function GroupLink({
  href,
  label,
  count,
  corner,
}: {
  href: string;
  label: string;
  count: number;
  corner: Corner;
}) {
  return (
    <li>
      <a
        href={href}
        className="inline-flex min-h-14 items-center gap-4 border-2 border-ink px-5 font-display text-2xl font-bold [font-stretch:70%] transition-colors hover:bg-ink hover:text-white"
      >
        {label}
        <span
          className={`inline-flex min-w-9 justify-center px-2 py-0.5 font-sans text-base text-white ${badgeColor[corner]}`}
        >
          {count}
        </span>
      </a>
    </li>
  );
}

/** One group of sponsors: newest month first, or an invitation when empty. */
function SponsorGroup<T extends { since: string }>({
  id,
  corner,
  title,
  groups,
  locale,
  empty,
  action,
  href,
  className,
  renderMonth,
}: {
  id: string;
  corner: Corner;
  title: string;
  groups: MonthGroup<T>[];
  locale: Locale;
  empty: string;
  action: string;
  href: string;
  className: string;
  renderMonth: (items: T[]) => ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={className}>
      <div className="page-container section-pad">
        <h2
          id={`${id}-title`}
          className={`section-title corner corner-${corner}`}
        >
          {title}
        </h2>

        {groups.length === 0 ? (
          <div className="mt-10 max-w-[36rem]">
            <p className="text-xl leading-relaxed">{empty}</p>
            <a href={href} className="btn btn-primary mt-8">
              {action}
            </a>
          </div>
        ) : (
          <ol className="mt-12 border-b-2 border-ink/15">
            {groups.map((group) => (
              <li
                key={group.month}
                className="grid gap-4 border-t-2 border-ink/15 py-8 lg:grid-cols-12 lg:gap-8"
              >
                <h3 className="text-2xl text-ink-soft [font-stretch:70%] lg:col-span-3">
                  <time dateTime={group.month}>
                    {monthLabel(group.month, locale)}
                  </time>
                </h3>
                <div className="lg:col-span-9">{renderMonth(group.items)}</div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function Companies({ items }: { items: CompanySponsor[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map((company) => (
        <li key={`${company.name}-${company.since}`} className="space-y-3">
          {company.logo !== null ? (
            <Image
              src={company.logo}
              alt=""
              width={240}
              height={96}
              unoptimized
              className="h-14 w-auto object-contain object-left"
            />
          ) : null}
          <p className="font-display text-3xl font-extrabold [font-stretch:70%]">
            {company.url !== null ? (
              <a
                href={company.url}
                className="text-link decoration-[3px]"
                rel="noopener sponsored"
                target="_blank"
              >
                {company.name}
              </a>
            ) : (
              company.name
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Individuals({ items }: { items: IndividualSponsor[] }) {
  return (
    <ul className="gap-10 sm:columns-2 lg:columns-3">
      {items.map((person) => (
        <li
          key={`${person.name}-${person.since}`}
          className="break-inside-avoid py-1.5 text-xl font-semibold"
        >
          {person.name}
        </li>
      ))}
    </ul>
  );
}

export function SponsorsPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const { sponsors, support } = t;

  return (
    <PageShell locale={locale} page="sponsors">
      <section
        aria-labelledby="sponsors-title"
        className="page-container pt-8 pb-16 md:pt-14"
      >
        <h1 id="sponsors-title" className="poster-title poster-title-lg">
          {sponsors.title}
        </h1>
        <p className="mt-8 max-w-[40rem] text-xl leading-relaxed">
          {sponsors.lead}
        </p>
        <nav aria-label={sponsors.groupsLabel} className="mt-10">
          <ul className="flex flex-wrap gap-3">
            <GroupLink
              href="#companies"
              label={sponsors.companies}
              count={companySponsors.length}
              corner="blue"
            />
            <GroupLink
              href="#individuals"
              label={sponsors.individuals}
              count={individualSponsors.length}
              corner="red"
            />
          </ul>
        </nav>
      </section>

      <SponsorGroup
        id="companies"
        corner="blue"
        title={sponsors.companies}
        groups={groupByMonth(companySponsors)}
        locale={locale}
        empty={sponsors.emptyCompanies}
        action={support.company.action}
        href="#contact"
        className="border-t-[3px] border-ink"
        renderMonth={(items) => <Companies items={items} />}
      />
      <SponsorGroup
        id="individuals"
        corner="red"
        title={sponsors.individuals}
        groups={groupByMonth(individualSponsors)}
        locale={locale}
        empty={sponsors.emptyIndividuals}
        action={support.individual.action}
        href={localePath(locale, "sponsor")}
        className="bg-mat"
        renderMonth={(items) => <Individuals items={items} />}
      />

      <Contact locale={locale} t={t} />
    </PageShell>
  );
}
