"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Messages } from "@/content/messages";
import type { NewsKind } from "@/content/news";
import { format } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { newsFeedUrl, type FeedItem, type FeedPage } from "@/lib/news-feed";

type Labels = Messages["news"];

const kindStyle: Record<NewsKind, string> = {
  championship: "bg-apricot text-ink",
  interview: "bg-flag-blue text-white",
  video: "bg-corner-red text-white",
  club: "bg-ink text-white",
  event: "bg-ink text-apricot",
  training: "bg-white text-ink ring-1 ring-ink/20",
  press: "bg-white text-ink ring-1 ring-ink/20",
};

/** A YouTube thumbnail that turns into the player when pressed. */
function YouTubeLite({
  id,
  title,
  playLabel,
}: {
  id: string;
  title: string;
  playLabel: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={playLabel}
      className="group absolute inset-0 size-full"
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        unoptimized
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <span className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/10" />
      <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-corner-red text-white shadow-lg transition-transform group-hover:scale-110">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 size-7">
          <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
        </svg>
      </span>
    </button>
  );
}

function NewsCard({
  item,
  featured,
  labels,
}: {
  item: FeedItem;
  featured: boolean;
  labels: Labels;
}) {
  const { media } = item;

  return (
    <article
      className={`flex flex-col overflow-hidden bg-mat ${
        featured && media !== null ? "sm:col-span-2 lg:flex-row" : ""
      }`}
    >
      {media !== null ? (
        <figure
          className={`relative shrink-0 bg-ink ${
            featured ? "aspect-video lg:aspect-auto lg:w-3/5" : "aspect-video"
          }`}
        >
          {media.type === "youtube" ? (
            <YouTubeLite
              id={media.id}
              title={item.title}
              playLabel={format(labels.play, { title: item.title })}
            />
          ) : (
            <>
              <Image
                src={media.src}
                alt={media.alt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={
                  media.position !== null
                    ? { objectPosition: media.position }
                    : undefined
                }
              />
              <figcaption className="absolute right-0 bottom-0 bg-ink/70 px-2 py-0.5 text-xs text-white">
                {format(labels.photoCredit, { credit: media.credit })}
              </figcaption>
            </>
          )}
        </figure>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          <span className={`px-2 py-0.5 font-semibold ${kindStyle[item.kind]}`}>
            {labels.kinds[item.kind]}
          </span>
          <time dateTime={item.date} className="text-ink-soft">
            {item.dateLabel}
          </time>
        </p>
        <h3
          className={`mt-4 font-extrabold [font-stretch:70%] ${
            featured ? "text-4xl sm:text-5xl" : "text-3xl"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-3 leading-relaxed">{item.summary}</p>
        {item.links.length > 0 ? (
          <ul className="mt-auto flex flex-wrap gap-2 pt-6">
            {item.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  rel="noopener"
                  target="_blank"
                  className="inline-flex min-h-9 items-center gap-1.5 border border-ink/30 bg-paper px-3 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  {link.label}
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
        ) : null}
      </div>
    </article>
  );
}

/**
 * The news timeline, newest first. The first page arrives with the HTML; older
 * pages are static JSON files fetched as the visitor nears the end.
 */
export function NewsFeed({
  locale,
  initial,
  labels,
}: {
  locale: Locale;
  initial: FeedPage;
  labels: Labels;
}) {
  const [items, setItems] = useState(initial.items);
  const [page, setPage] = useState(initial.page);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const sentinel = useRef<HTMLDivElement>(null);
  const done = page >= initial.totalPages;

  const loadMore = useCallback(async () => {
    setStatus("loading");
    try {
      const response = await fetch(newsFeedUrl(locale, page + 1));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const next = (await response.json()) as FeedPage;
      setItems((previous) => [...previous, ...next.items]);
      setPage(next.page);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }, [locale, page]);

  // Load the next page when the end of the list comes near. After an error the
  // visitor retries by hand, so a broken connection doesn't loop.
  useEffect(() => {
    const target = sentinel.current;
    if (target === null || done || status !== "idle") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) void loadMore();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [done, status, loadMore]);

  const months: { month: string; label: string; items: FeedItem[] }[] = [];
  for (const item of items) {
    const month = item.date.slice(0, 7);
    const last = months.at(-1);
    if (last?.month === month) last.items.push(item);
    else months.push({ month, label: item.monthLabel, items: [item] });
  }

  return (
    <div>
      <ol>
        {months.map((group, groupIndex) => (
          <li
            key={group.month}
            className="grid gap-6 border-t-[3px] border-ink py-10 lg:grid-cols-12 lg:gap-8"
          >
            <h2 className="text-3xl [font-stretch:70%] lg:sticky lg:top-6 lg:col-span-3 lg:self-start">
              <time dateTime={group.month}>{group.label}</time>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-9">
              {group.items.map((item, i) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  featured={groupIndex === 0 && i === 0}
                  labels={labels}
                />
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div ref={sentinel} className="border-t-[3px] border-ink pt-8">
        <p aria-live="polite" className="text-ink-soft">
          {status === "loading"
            ? labels.loading
            : status === "error"
              ? labels.error
              : done
                ? labels.end
                : null}
        </p>
        {!done && status !== "loading" ? (
          <button
            type="button"
            onClick={() => void loadMore()}
            className="btn btn-secondary mt-4"
          >
            {status === "error" ? labels.retry : labels.loadMore}
          </button>
        ) : null}
      </div>
    </div>
  );
}
