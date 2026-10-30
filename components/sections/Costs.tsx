import type { SectionProps } from "./types";

export function Costs({ t }: SectionProps) {
  return (
    <section aria-labelledby="costs-title" className="bg-mat">
      <div className="page-container section-pad grid gap-10 lg:grid-cols-12 lg:gap-8">
        <h2 id="costs-title" className="section-title lg:col-span-5">
          {t.costs.title}
        </h2>
        <div className="lg:col-span-7 lg:pt-3">
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {t.costs.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-2.5 shrink-0 bg-flag-blue"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
