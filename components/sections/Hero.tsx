import type { SectionProps } from "./types";

// A fight-poster cover: the project's name across the page, the two coaches,
// then the story and the two actions.
export function Hero({ t }: SectionProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="page-container pt-8 pb-20 md:pt-14 lg:pb-28"
    >
      {/* The project name stays in Latin letters in every language. */}
      <h1 id="hero-title" lang="en" className="poster-title poster-title-name">
        {t.brand.name}
      </h1>
      <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
        <p className="font-display text-3xl leading-tight font-bold [font-stretch:70%] text-corner-red sm:text-4xl lg:col-span-5">
          {t.brand.role}
        </p>
        <div className="lg:col-span-7">
          <div className="max-w-[40rem] space-y-4 text-xl leading-relaxed">
            {t.hero.lead.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 flex max-w-[40rem] items-start gap-4 text-xl leading-relaxed font-bold">
            <span
              aria-hidden="true"
              className="mt-1.5 inline-flex h-5 w-8 shrink-0 flex-col"
            >
              <span className="flex-1 bg-corner-red" />
              <span className="flex-1 bg-flag-blue" />
              <span className="flex-1 bg-apricot" />
            </span>
            {t.hero.mission}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#support" className="btn btn-primary">
              {t.hero.primaryAction}
            </a>
            <a href="#results" className="btn btn-secondary">
              {t.hero.secondaryAction}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
