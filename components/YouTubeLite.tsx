"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * A YouTube thumbnail that turns into the player when pressed. Fills its
 * parent, which needs `position: relative` and a size (e.g. `aspect-video`).
 */
export function YouTubeLite({
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
