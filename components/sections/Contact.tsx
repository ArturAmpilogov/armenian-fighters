import type { ReactNode } from "react";
import { site, type ContactChannel, type ContactLink } from "@/content/site";
import type { SectionProps } from "./types";

// Outline glyphs drawn on a 24px grid, one per channel, so each contact reads
// at a glance.
const channelIcons: Record<ContactChannel, ReactNode> = {
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
  youtube: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </>
  ),
};

function ChannelIcon({ channel }: { channel: ContactChannel }) {
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

function channelLink({ channel, value }: ContactLink) {
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
    case "youtube":
      return { href: `https://www.youtube.com/@${value}`, text: `@${value}` };
  }
}

export function Contact({ t }: SectionProps) {
  // Each card says whose account it is (the project or a coach) in big type,
  // with the handle underneath: handles can be too long for big type.
  const links = site.contact.map((contact) => {
    const coach = t.about.people.find((person) => person.id === contact.owner);
    const { href, text } = channelLink(contact);
    return {
      key: `${contact.channel}-${contact.value}`,
      channel: contact.channel,
      href,
      owner: coach?.name ?? t.brand.name,
      // The channel's handle is Tigran's nickname, so name the platform.
      detail: contact.channel === "youtube" ? t.contact.labels.youtube : text,
    };
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-blue bg-flag-blue text-white"
    >
      <div className="page-container section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
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
                <li key={link.key}>
                  {/* Each channel is one big card: the whole card is the link. */}
                  <a
                    href={link.href}
                    className="group flex items-center gap-4 bg-white p-4 text-ink shadow-[6px_6px_0_var(--color-ink)] transition-colors hover:bg-apricot sm:gap-5 sm:p-5"
                  >
                    <span className="grid size-14 shrink-0 place-items-center bg-flag-blue text-white transition-colors group-hover:bg-ink sm:size-16">
                      <ChannelIcon channel={link.channel} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xl font-bold sm:text-2xl">
                        {link.owner}
                      </span>
                      <span className="block text-base [overflow-wrap:anywhere] text-ink-soft group-hover:text-ink">
                        {link.detail}
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
