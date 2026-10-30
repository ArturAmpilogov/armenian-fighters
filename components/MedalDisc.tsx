import type { Medal } from "@/content/results";

const medalColor: Record<Medal, string> = {
  gold: "bg-apricot",
  silver: "bg-silver",
  bronze: "bg-bronze",
};

/** Decorative: always render the medal's name next to it. */
export function MedalDisc({
  medal,
  onDark = false,
  className = "size-7",
}: {
  medal: Medal;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rounded-full ring-2 ${
        onDark ? "ring-white" : "ring-ink"
      } ${medalColor[medal]} ${className}`}
    />
  );
}
