import Image from "next/image";
import type { Messages } from "@/content/messages";
import {
  championships,
  type Championship,
  type Medal,
  type MedalResult,
} from "@/content/results";
import type { Locale } from "@/lib/i18n";
import { MedalDisc } from "../MedalDisc";
import { FightPath } from "./FightPath";
import type { SectionProps } from "./types";

const medalBorder: Record<Medal, string> = {
  gold: "border-t-apricot",
  silver: "border-t-silver",
  bronze: "border-t-bronze",
};

function ArmenianFlag() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-6 w-9 shrink-0 flex-col ring-1 ring-white/30"
    >
      <span className="flex-1 bg-corner-red" />
      <span className="flex-1 bg-flag-blue" />
      <span className="flex-1 bg-apricot" />
    </span>
  );
}

/** The whole Armenian team's medal count, like a broadcast scoreboard. */
function MedalTally({
  medals,
  t,
}: {
  medals: Partial<Record<Medal, number>>;
  t: Messages;
}) {
  const order: Medal[] = ["gold", "silver", "bronze"];
  const counts = order
    .map((medal) => ({ medal, count: medals[medal] ?? 0 }))
    .filter(({ count }) => count > 0);

  return (
    <div className="flex items-center gap-5">
      <span className="inline-flex items-center gap-3 font-semibold">
        <ArmenianFlag />
        {t.results.team}
      </span>
      <ul aria-label={t.results.tally} className="flex items-center gap-4">
        {counts.map(({ medal, count }) => (
          <li
            key={medal}
            className="inline-flex items-center gap-2 font-display text-4xl font-black [font-stretch:70%]"
          >
            <MedalDisc medal={medal} onDark className="size-7" />
            {count}
            <span className="sr-only">{t.results.medals[medal]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrganizerBadge({ championship }: { championship: Championship }) {
  if (championship.organizerLogo !== null) {
    return (
      <Image
        src={championship.organizerLogo}
        alt={championship.organizer}
        width={181}
        height={40}
        unoptimized
        className="h-9 w-auto shrink-0 sm:h-10"
      />
    );
  }
  return (
    <span className="inline-flex h-14 shrink-0 items-center border-2 border-white px-3 font-display text-2xl font-black tracking-wide [font-stretch:70%]">
      {championship.organizer}
    </span>
  );
}

function ResultCard({
  result,
  locale,
  t,
}: {
  result: MedalResult;
  locale: Locale;
  t: Messages;
}) {
  // A fight-by-fight path needs the wide card.
  const featured = (result.details?.bouts.length ?? 0) > 0;

  return (
    <article
      className={`flex flex-col border border-t-4 border-white/15 bg-white/[0.06] p-6 sm:p-7 ${
        medalBorder[result.medal]
      } ${featured ? "lg:col-span-2" : ""}`}
    >
      <p className="flex items-center gap-3 font-semibold">
        <MedalDisc
          medal={result.medal}
          onDark
          className={featured ? "size-9" : "size-7"}
        />
        {t.results.medals[result.medal]}
      </p>
      <h4
        className={`mt-4 font-extrabold [font-stretch:70%] ${
          featured ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {result.athlete[locale]}
      </h4>
      {result.division ? (
        <p className="mt-2 text-white/70">{result.division[locale]}</p>
      ) : null}
      {result.club !== null || result.coaches !== null ? (
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-base">
          {result.club !== null ? (
            <>
              <dt className="text-white/60">{t.results.club}</dt>
              <dd className="font-semibold">{result.club}</dd>
            </>
          ) : null}
          {result.coaches !== null ? (
            <>
              <dt className="text-white/60">{t.results.coaches}</dt>
              <dd className="font-semibold">
                {result.coaches.map((coach) => coach[locale]).join(", ")}
              </dd>
            </>
          ) : null}
        </dl>
      ) : null}
      {result.details ? (
        <div className="mt-6">
          <FightPath path={result.details} locale={locale} t={t} />
        </div>
      ) : null}
      {result.proof.length > 0 ? (
        <div className="mt-auto pt-6">
          <p className="text-sm text-white/60">{t.results.proof.label}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {result.proof.map((proof) => (
              <li key={proof.url}>
                <a
                  href={proof.url}
                  rel="noopener"
                  target="_blank"
                  className="inline-flex min-h-9 items-center gap-1.5 border border-white/30 px-3 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-ink"
                >
                  {proof.kind === "news"
                    ? proof.label
                    : t.results.proof[proof.kind]}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="size-3"
                  >
                    <path
                      d="M4.5 2.5h5v5M9.5 2.5 3 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

/** One championship: its name and place, Armenia's tally, then the cards. */
function ChampionshipBoard({
  championship,
  locale,
  t,
}: {
  championship: Championship;
  locale: Locale;
  t: Messages;
}) {
  const titleId = `${championship.id}-title`;

  return (
    <article aria-labelledby={titleId} className="mt-12 first:mt-10">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-y border-white/20 py-5">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <OrganizerBadge championship={championship} />
          <div>
            <h3
              id={titleId}
              className="text-2xl [font-stretch:70%] sm:text-3xl"
            >
              {championship.name[locale]}
            </h3>
            <p className="mt-1 text-white/70">
              {championship.placeAndDate[locale]}
            </p>
          </div>
        </div>
        {championship.teamMedals !== null ? (
          <MedalTally medals={championship.teamMedals} t={t} />
        ) : null}
      </div>

      {championship.summary !== null ? (
        <p className="mt-6 max-w-[48rem] text-xl">
          {championship.summary[locale]}
        </p>
      ) : null}

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {championship.results.map((result) => (
          <ResultCard
            key={`${result.athlete.en}-${result.medal}`}
            result={result}
            locale={locale}
            t={t}
          />
        ))}
      </div>

      {championship.teamSources.length > 0 ? (
        <p className="mt-6 text-base text-white/70">
          {t.results.teamSources}:{" "}
          {championship.teamSources.map((source, i) => (
            <span key={source.url}>
              {i > 0 ? ", " : null}
              <a
                href={source.url}
                className="text-link text-white"
                rel="noopener"
                target="_blank"
              >
                {source.label}
              </a>
            </span>
          ))}
        </p>
      ) : null}
    </article>
  );
}

// A championship board: dark like an arena, Armenia's colours on top, every
// result open at once. Newest championship first.
export function Results({ locale, t }: SectionProps) {
  return (
    <section
      id="results"
      aria-labelledby="results-title"
      className="on-blue bg-ink text-white"
    >
      <div aria-hidden="true" className="flex h-3 flex-col">
        <span className="flex-1 bg-corner-red" />
        <span className="flex-1 bg-flag-blue" />
        <span className="flex-1 bg-apricot" />
      </div>
      <div className="page-container section-pad">
        <div className="grid gap-x-8 gap-y-4 lg:grid-cols-12 lg:items-end">
          <h2 id="results-title" className="section-title lg:col-span-7">
            {t.results.title}
          </h2>
          <p className="text-white/70 lg:col-span-5">{t.results.credit}</p>
        </div>

        {championships.map((championship) => (
          <ChampionshipBoard
            key={championship.id}
            championship={championship}
            locale={locale}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}
