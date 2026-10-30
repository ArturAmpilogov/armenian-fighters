import { Fragment } from "react";
import { site } from "@/content/site";
import type { SectionProps } from "./types";

const factRow =
  "grid gap-1 border-ink/15 py-4 not-first:border-t-2 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-5";
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

// What the two coaches share, then each coach's record as a list a sponsor
// can scan.
export function About({ t }: SectionProps) {
  const { about } = t;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="page-container section-pad"
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <h2 id="about-title" className="section-title lg:col-span-5">
          {about.title}
        </h2>
        <p className="max-w-[40rem] text-xl leading-relaxed lg:col-span-7 lg:pt-3">
          {about.intro}
        </p>
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
        {about.people.map((person) => (
          <article key={person.id} className="min-w-0">
            <h3 className="text-4xl sm:text-5xl">{person.name}</h3>
            <p className="mt-2 text-lg font-semibold text-ink-soft">
              {person.role}
            </p>
            <dl className="mt-6 border-t-[3px] border-ink">
              {person.facts.map((fact) => (
                <div key={fact.label} className={factRow}>
                  <dt className={factLabel}>{fact.label}</dt>
                  <dd className="min-w-0">
                    {fact.text.includes("{clubs}") ? (
                      <ClubsSentence text={fact.text} and={about.and} />
                    ) : (
                      fact.text
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
