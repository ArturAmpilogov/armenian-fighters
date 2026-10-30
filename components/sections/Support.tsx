import { site } from "@/content/site";
import { localePath } from "@/lib/i18n";
import type { SectionProps } from "./types";

type SupportCardProps = {
  corner: "blue" | "red";
  title: string;
  body: string;
  perk: string;
  action: string;
  href: string;
  external: boolean;
};

function SupportCard({
  corner,
  title,
  body,
  perk,
  action,
  href,
  external,
}: SupportCardProps) {
  return (
    <article
      className={`corner corner-${corner} flex min-w-0 flex-col bg-mat p-6 sm:p-10`}
    >
      <h3 className="text-3xl sm:text-5xl">{title}</h3>
      <p className="mt-5 text-xl leading-relaxed">{body}</p>
      <p className="mt-6 flex gap-3 text-ink-soft">
        <span
          aria-hidden="true"
          className={`mt-2 size-2.5 shrink-0 ${
            corner === "blue" ? "bg-flag-blue" : "bg-corner-red"
          }`}
        />
        {perk}
      </p>
      <div className="mt-auto pt-10">
        <a
          href={href}
          className="btn btn-primary"
          {...(external ? { rel: "noopener", target: "_blank" } : {})}
        >
          {action}
        </a>
      </div>
    </article>
  );
}

// Two ways in, nothing else: a company sponsors, a person supports. Both are
// thanked on the sponsors page.
export function Support({ locale, t }: SectionProps) {
  const { support } = t;

  return (
    <section
      id="support"
      aria-labelledby="support-title"
      className="page-container section-pad"
    >
      <h2 id="support-title" className="section-title">
        {support.title}
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        <SupportCard
          corner="blue"
          {...support.company}
          href="#contact"
          external={false}
        />
        <SupportCard
          corner="red"
          {...support.individual}
          href={site.donateUrl ?? "#contact"}
          external={site.donateUrl !== null}
        />
      </div>
      <p className="mt-10">
        <a
          href={localePath(locale, "sponsors")}
          className="text-link text-xl font-semibold"
        >
          {support.allSponsors}
        </a>
      </p>
    </section>
  );
}
