// Facts that are the same in every language.

export type ContactChannel =
  | "email"
  | "phone"
  | "whatsapp"
  | "telegram"
  | "instagram"
  | "youtube";

export type ContactLink = {
  channel: ContactChannel;
  /**
   * Email; phone in international format ("+374 99 123456"); WhatsApp as
   * digits ("37499123456"); or a username or handle without "@".
   */
  value: string;
  /** The project's own account, or a coach's. */
  owner: "project" | CoachId;
};

/** Matches `id` in each coach profile (`about.people` in the messages). */
export type CoachId = "tigran" | "mkhitar";

// The YouTube channel "Armenian fighters" lives at @black_tiger_nolimit.
const youtube = "black_tiger_nolimit";
const instagram = "_armenian_fighters_";

// Shown in this order in "Contact". The YouTube channel has its own section,
// so it isn't repeated here.
const contact: ContactLink[] = [
  { channel: "instagram", value: instagram, owner: "project" },
  { channel: "instagram", value: "black_tiger_nolimit", owner: "tigran" },
  // From Sportball24's profile of Mkhitar; see the README checklist.
  { channel: "instagram", value: "mkhitar_barseghyan57mma", owner: "mkhitar" },
];

const channel = {
  youtube: `https://www.youtube.com/@${youtube}`,
  instagram: `https://www.instagram.com/${instagram}/`,
  /** The episode shown on the home page: the debut, with Suren Petrosyan. */
  episode: "xr253o72jTM",
};

export type Club = {
  name: string;
  url: string;
};

const lionHeart: Club = { name: "Lion Heart", url: "https://lionheart.am/" };
const armMen: Club = {
  name: "ARM.MEN",
  url: "https://www.instagram.com/armmenclub/",
};

// Professional clubs where each coach works, linked where a profile fact says
// "{clubs}".
const clubs: Record<CoachId, Club[]> = {
  tigran: [lionHeart, armMen],
  mkhitar: [lionHeart],
};

export type CardBrand = "visa" | "mastercard";

export type Payments = {
  /**
   * The server address that starts an Ameriabank card payment. The form on
   * "Become a sponsor" stays closed until this is set (see the README).
   */
  endpoint: string | null;
  /** Amounts offered as buttons, in AMD. */
  amounts: number[];
  min: number;
  max: number;
  /** Card logos shown under the form. */
  cards: CardBrand[];
};

const payments: Payments = {
  endpoint: null,
  amounts: [2000, 5000, 10000, 20000, 50000],
  min: 1000,
  // Ameriabank allows at most 50,000 AMD per payment for "donations for own
  // website" (Annex 1 of its Internet Acquiring terms, edition 9).
  max: 50000,
  // Confirm with the bank which cards the contract covers.
  cards: ["visa", "mastercard"],
};

/**
 * Who receives card payments: the individual entrepreneur or company on the
 * Ameriabank contract. The bank requires these on the site. `null` shows
 * "To be added".
 */
export type Merchant = {
  /** Legal name, as on the contract. */
  name: string | null;
  /** Armenian taxpayer ID (ՀՎՀՀ). */
  taxId: string | null;
  address: string | null;
  /** In international format, "+374 99 123456". */
  phone: string | null;
  email: string | null;
};

const merchant: Merchant = {
  name: null,
  taxId: null,
  address: null,
  phone: null,
  email: null,
};

export const site = {
  // Chosen domain, not registered yet (armenianfighters.com is taken). Used
  // for canonical and social links.
  url: "https://armenianfighters.am",
  contact,
  channel,
  clubs,
  payments,
  merchant,
};
