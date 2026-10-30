import { format, type Messages } from "@/content/messages";
import type { Bout, FightPath as FightPathData } from "@/content/results";
import type { Locale } from "@/lib/i18n";

// Filled for a submission, a ring for a decision, gold for the final.
function boutDot(bout: Bout) {
  if (bout.stage === "final") return "size-9 bg-apricot ring-2 ring-white";
  return bout.method === "submission"
    ? "size-7 bg-white"
    : "size-7 ring-[3px] ring-white ring-inset";
}

const boutRow =
  "grid gap-x-4 border-b border-white/20 py-2.5 sm:grid-cols-[9.5rem_1fr_auto]";

/** One athlete's run through the bracket, shown on the dark results board. */
export function FightPath({
  path,
  locale,
  t,
}: {
  path: FightPathData;
  locale: Locale;
  t: Messages;
}) {
  const fight = t.results.fight;
  const method = (bout: Bout) => {
    const name =
      bout.method === "submission" ? fight.submission : fight.decision;
    return bout.detail ? `${name} (${bout.detail[locale]})` : name;
  };
  const named = path.bouts.filter((bout) => bout.opponent !== null);
  const hasRows = path.groupStage !== null || named.length > 0;

  return (
    <div>
      <p className="font-display text-2xl font-bold [font-stretch:70%]">
        {path.record[locale]}
      </p>
      {path.complete && path.bouts.length > 0 ? (
        <>
          <ol className="mt-3 flex items-end gap-2.5">
            {path.bouts.map((bout, i) => (
              <li key={i} className="flex flex-col items-center gap-1">
                <span
                  aria-hidden="true"
                  className={`block rounded-full ${boutDot(bout)}`}
                />
                <span aria-hidden="true" className="text-xs text-white/60">
                  {i + 1}
                </span>
                <span className="sr-only">
                  {format(fight.label, { n: i + 1 })}: {fight.won},{" "}
                  {method(bout)}
                </span>
              </li>
            ))}
          </ol>
          <p
            aria-hidden="true"
            className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/70"
          >
            <span className="inline-flex items-center gap-2">
              <span className="size-3 rounded-full bg-white" />
              {fight.submission}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-3 rounded-full ring-2 ring-white ring-inset" />
              {fight.decision}
            </span>
          </p>
        </>
      ) : null}

      {hasRows ? (
        <dl className="mt-5 border-t border-white/20 text-base">
          {path.groupStage !== null ? (
            <div className={boutRow}>
              <dt className="text-sm text-white/70 sm:text-base">
                {fight.group}
              </dt>
              <dd className="font-semibold">
                {path.groupStage.opponents[locale]}
              </dd>
              <dd className="text-white/70">
                {path.groupStage.result[locale]}
              </dd>
            </div>
          ) : null}
          {named.map((bout) => (
            <div key={bout.stage} className={boutRow}>
              <dt className="text-sm text-white/70 sm:text-base">
                {fight[bout.stage]}
              </dt>
              <dd>
                <span className="font-semibold">{bout.opponent?.[locale]}</span>
                {bout.country !== null ? (
                  <span className="text-white/70">
                    {" "}
                    ({bout.country[locale]})
                  </span>
                ) : null}
              </dd>
              <dd className="text-white/70">{method(bout)}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
