import { Fragment } from "react";
import { site } from "@/content/site";
import type { SectionProps } from "./types";

const factRow =
  "grid gap-1 border-ink/15 py-5 not-first:border-t-2 sm:grid-cols-[11rem_1fr] sm:gap-6";
const factLabel =
  "font-display text-xl font-bold [font-stretch:70%] text-corner-red";

/** "…the professional clubs {clubs}." with each club linked. */
function ClubsSentence({ text, and }: { text: string; and: string }) {
  const [before, after = ""] = text.split("{clubs}");
  const last = site.clubs.length - 1;

  return (
    <>
      {before}
      {site.clubs.map((club, i) => (
        <Fragment key={club.name}>
          {i > 0 ? (i === last ? ` ${and} ` : ", ") : null}
          <a
            href={club.url}
            className="text-link font-semibold"
            rel="noopener"
            target="_blank"
          >
            {club.name}
          </a>
        </Fragment>
      ))}
      {after}
    </>
  );
}

// A short introduction, then his record as a list a sponsor can scan.
export function About({ t }: SectionProps) {
  const { about } = t;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="page-container section-pad grid gap-8 lg:grid-cols-12"
    >
      <h2 id="about-title" className="section-title lg:col-span-5">
        {about.title}
      </h2>
      <div className="lg:col-span-7 lg:pt-3">
        <p className="max-w-[40rem] text-xl leading-relaxed">{about.intro}</p>
        <dl className="mt-10 border-t-[3px] border-ink">
          <div className={factRow}>
            <dt className={factLabel}>{about.clubs.label}</dt>
            <dd className="max-w-[36rem]">
              <ClubsSentence text={about.clubs.text} and={about.clubs.and} />
            </dd>
          </div>
          {about.facts.map((fact) => (
            <div key={fact.label} className={factRow}>
              <dt className={factLabel}>{fact.label}</dt>
              <dd className="max-w-[36rem]">{fact.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
