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

// Payment or fundraising page. The donate button appears once this is set.
const donateUrl: string | null = null;

export const site = {
  // Planned domain, not registered yet (armenianfighters.com is taken). Used
  // for canonical and social links.
  url: "https://armenianfighters.am",
  contact,
  channel,
  clubs,
  donateUrl,
};
