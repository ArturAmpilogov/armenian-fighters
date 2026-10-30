// Facts that are the same in every language. Anything left as `null` is not
// shown on the site, so fill these in as they become available.

export type Contact = {
  email: string | null;
  /** International format, e.g. "+374 99 123456". */
  phone: string | null;
  /** Digits only, international format, e.g. "37499123456". */
  whatsapp: string | null;
  /** Username without "@". */
  telegram: string | null;
  /** Username without "@". */
  instagram: string | null;
};

const contact: Contact = {
  email: null,
  phone: null,
  whatsapp: null,
  telegram: null,
  instagram: "black_tiger_nolimit",
};

export type Club = {
  name: string;
  url: string;
};

// Professional clubs where Tigran coaches, named in "About".
const clubs: Club[] = [
  { name: "Lion Heart", url: "https://lionheart.am/" },
  { name: "ARM.MEN", url: "https://www.instagram.com/armmenclub/" },
];

// Payment or fundraising page. The donate button appears once this is set.
const donateUrl: string | null = null;

export const site = {
  // Chosen domain, not registered yet. Used for canonical and social links.
  url: "https://tigrancoach.com",
  contact,
  clubs,
  donateUrl,
};
