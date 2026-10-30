import type { SectionProps } from "./types";

export function Why({ t }: SectionProps) {
  return (
    <section aria-labelledby="why-title" className="border-t-[3px] border-ink">
      <div className="page-container section-pad">
        <h2 id="why-title" className="section-title">
          {t.why.title}
        </h2>
        <p className="mt-6 max-w-[44rem] font-display text-3xl leading-tight font-bold [font-stretch:70%] text-flag-blue sm:text-4xl">
          {t.why.lead}
        </p>
        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.why.points.map((point) => (
            <li key={point.title}>
              <h3 className="text-3xl">{point.title}</h3>
              <p className="mt-3">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
