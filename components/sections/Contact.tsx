import type { ReactNode } from "react";
import { site, type Contact as ContactDetails } from "@/content/site";
import type { SectionProps } from "./types";

type Channel = keyof ContactDetails;

const channels: Channel[] = [
  "email",
  "phone",
  "whatsapp",
  "telegram",
  "instagram",
];

// Outline glyphs drawn on a 24px grid, one per channel, so each contact reads
// at a glance.
const channelIcons: Record<Channel, ReactNode> = {
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z" />
      <path d="M9.5 9.5c.5 2.5 2.5 4.5 5 5l1-1.5-2-1-1 1a4 4 0 0 1-1.5-1.5l1-1-1-2z" />
    </>
  ),
  telegram: (
    <>
      <path d="M21 4 3 11l6 2.5L11 20l3-4 5 4z" />
      <path d="m9 13.5 12-9.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
};

function ChannelIcon({ channel }: { channel: Channel }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-7 sm:size-8"
    >
      {channelIcons[channel]}
    </svg>
  );
}

function channelLink(channel: Channel, value: string) {
  switch (channel) {
    case "email":
      return { href: `mailto:${value}`, text: value };
    case "phone":
      return { href: `tel:${value.replace(/\s+/g, "")}`, text: value };
    case "whatsapp":
      return { href: `https://wa.me/${value}`, text: `+${value}` };
    case "telegram":
      return { href: `https://t.me/${value}`, text: `@${value}` };
    case "instagram":
      return { href: `https://www.instagram.com/${value}/`, text: `@${value}` };
  }
}

export function Contact({ t }: SectionProps) {
  const links = channels.flatMap((channel) => {
    const value = site.contact[channel];
    return value === null ? [] : [{ channel, ...channelLink(channel, value) }];
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-blue bg-flag-blue text-white"
    >
      <div className="page-container section-pad grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="poster-title poster-title-lg">
            {t.contact.title}
          </h2>
          <p className="mt-8 max-w-[34rem] text-xl text-white/85">
            {t.contact.body}
          </p>
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          {links.length > 0 ? (
            <ul className="space-y-5">
              {links.map((link) => (
                <li key={link.channel}>
                  {/* Each channel is one big card: the whole card is the link. */}
                  <a
                    href={link.href}
                    className="group flex items-center gap-4 bg-white p-4 text-ink shadow-[6px_6px_0_var(--color-ink)] transition-colors hover:bg-apricot sm:gap-5 sm:p-5"
                  >
                    <span className="grid size-14 shrink-0 place-items-center bg-flag-blue text-white transition-colors group-hover:bg-ink sm:size-16">
                      <ChannelIcon channel={link.channel} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base text-ink-soft group-hover:text-ink">
                        {t.contact.labels[link.channel]}
                      </span>
                      <span className="block text-xl font-bold break-words sm:text-2xl xl:text-3xl">
                        {link.text}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl text-white/85">{t.contact.comingSoon}</p>
          )}
          {site.donateUrl !== null ? (
            <a
              href={site.donateUrl}
              className="btn btn-apricot mt-10"
              rel="noopener"
              target="_blank"
            >
              {t.contact.donate}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
