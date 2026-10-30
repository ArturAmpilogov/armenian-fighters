import { site } from "@/content/site";
import { YouTubeLite } from "../YouTubeLite";
import type { SectionProps } from "./types";

// The project's YouTube channel: what it is about, and the debut episode to
// play right on the page.
export function Channel({ t }: SectionProps) {
  const { channel } = t;

  return (
    <section id="channel" aria-labelledby="channel-title" className="bg-mat">
      <div className="page-container section-pad grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 id="channel-title" className="section-title">
            {channel.title}
          </h2>
          <p className="mt-6 max-w-[36rem] text-xl leading-relaxed">
            {channel.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.channel.youtube}
              className="btn btn-primary"
              rel="noopener"
              target="_blank"
            >
              {channel.watch}
            </a>
            <a
              href={site.channel.instagram}
              className="btn btn-secondary"
              rel="noopener"
              target="_blank"
            >
              {channel.follow}
            </a>
          </div>
        </div>
        <figure className="min-w-0 lg:col-span-7">
          <div className="relative aspect-video overflow-hidden bg-ink">
            <YouTubeLite
              id={site.channel.episode}
              title={channel.episode}
              playLabel={channel.play}
            />
          </div>
          <figcaption className="mt-3 font-semibold text-ink-soft">
            {channel.episode}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
