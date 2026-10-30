import type { Locale } from "@/lib/i18n";

export type MonthGroup<T> = {
  /** YYYY-MM */
  month: string;
  items: T[];
};

/** Newest first, grouped by the month support started. */
export function groupByMonth<T extends { since: string }>(
  items: T[],
): MonthGroup<T>[] {
  const sorted = [...items].sort((a, b) => b.since.localeCompare(a.since));
  const groups: MonthGroup<T>[] = [];
  for (const item of sorted) {
    const month = item.since.slice(0, 7);
    const last = groups.at(-1);
    if (last?.month === month) {
      last.items.push(item);
    } else {
      groups.push({ month, items: [item] });
    }
  }
  return groups;
}

/** "October 2026", "Октябрь 2026 г.", in the page's language. */
export function monthLabel(month: string, locale: Locale): string {
  const label = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${month}-01T00:00:00Z`));
  return label.charAt(0).toLocaleUpperCase(locale) + label.slice(1);
}
