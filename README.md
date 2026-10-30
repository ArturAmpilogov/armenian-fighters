# Armenian Fighters

The website of Armenian Fighters, the project of Tigran Petrosyan and Mkhitar
Barseghyan, MMA coaches at the Lion Heart academy in Yerevan. It is built for
sponsors, and pitches support for the project as support for MMA in Armenia.
It has three pages:

- **Home**: the cover, championship results of athletes who train with them,
  the two coaches, the Armenian Fighters YouTube channel, why support the
  project, what the money pays for, ways to support (companies and
  individuals), and contacts.
- **News**: championships, interviews and club news, newest first. More news
  loads as you scroll.
- **Sponsors**: everyone who supports the project, split into companies and individuals,
  newest first and grouped by month.

Languages: English at `/` (main), Armenian at `/hy/`, Russian at `/ru/`. The
other pages follow the same pattern, e.g. `/news/`, `/hy/news/`, `/ru/news/`.

Built with Next.js 16 as a fully static site (`output: "export"`), so it can be
hosted for free on Cloudflare Pages, Netlify or GitHub Pages.

## Who the site speaks for

The site is about the two coaches' own work. The athletes belong to
themselves, their families and their clubs. So the copy:

- says "athletes who train with them", never "their athletes" or "their team";
- says something about both coaches only when a source credits both (for
  example the 2026 world medals); facts about one coach go in that coach's
  profile;
- credits each athlete's club next to their result (`club` in
  `content/results.ts`);
- never says who pays for trips today, and never describes Armenian sport as
  short of money;
- promises sponsors only one thing: a place on the sponsors page.

## Run it

```bash
pnpm install
```

```bash
pnpm dev
```

Then open http://localhost:3000.

```bash
pnpm build
```

The static site is written to `out/`.

## Edit the content

All text and data live in `content/`. You don't need to touch the components to
change what the site says.

| File                     | What it holds                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| `content/messages/en.ts` | All English text. This is the source of truth.                                                  |
| `content/messages/hy.ts` | Armenian text. TypeScript fails the build if a key is missing.                                  |
| `content/messages/ru.ts` | Russian text. Same rule.                                                                        |
| `content/results.ts`     | Championships, medals, athletes, clubs, fight details and source links, in all three languages. |
| `content/news.ts`        | News items, with photos in `public/images/news/`.                                               |
| `content/sponsors.ts`    | Company and individual sponsors.                                                                |
| `content/site.ts`        | Contacts, donate link and the site address. `null` hides an item.                               |

### Add a sponsor

Add an entry to `content/sponsors.ts`, only with the sponsor's permission.
`since` is the date their support started; the page sorts and groups by it.

```ts
export const companySponsors: CompanySponsor[] = [
  {
    name: "Company name",
    since: "2026-11-15",
    url: "https://example.com", // or null
    logo: "/sponsors/company.svg", // file in public/sponsors/, or null
  },
];

export const individualSponsors: IndividualSponsor[] = [
  { name: "Name as they want it shown", since: "2026-11-20" },
];
```

### Add a news item

Add an entry to `content/news.ts` with a date, a kind (championship,
interview, video, club, event, training or press), a title and summary in all three
languages, and links to where it was published. For media, use a photo in
`public/images/news/` (credit the source in `credit`) or a YouTube video id; the
video plays on the page when pressed. Order doesn't matter: the page sorts
newest first.

The first six items are in the page's HTML. Older ones are static JSON files
(`/news-feed/<lang>/<page>.json`), generated at build time and fetched as the
visitor scrolls, so there's no server or database.

### Add fight details to a result

Set `details` on a result in `content/results.ts` (see Rafik Aleksanyan's entry).
A result with `details: null` is shown as a plain row.

To add a language, add it to `locales` in `lib/i18n.ts` and add a messages file.

## How it is built

- `app/(en)/` serves English at `/`. `app/[lang]/` serves the other languages.
  Each has its own root layout so `<html lang>` is correct on every page.
- `app/global-not-found.tsx` is the 404 page (needed because there are two root
  layouts).
- `components/PageShell.tsx` wraps every page with the header and footer.
  `components/HomePage.tsx` and `components/SponsorsPage.tsx` put the sections
  together; home sections are in `components/sections/`.
- Colours and type are in `app/globals.css`. The palette is the Armenian flag:
  blue for text and structure, red for actions, apricot only for gold. Blue
  marks companies and red marks individuals.
- Fonts: Sofia Sans (Latin and Cyrillic) with Noto Sans Armenian for Armenian
  letters.

## Deploy

Any static host works. Use these settings:

- Build command: `pnpm build`
- Output directory: `out`

## Before publishing

The site is a draft. Check these before it goes live.

**People to ask first**

- [ ] Tigran and Mkhitar approve every word: the site speaks in their names.
- [ ] Show the page to the director of Lion Heart before it goes live: both
      coaches work there, and the club is credited next to each result.
- [ ] Each named athlete agrees to appear, and a parent for under-18s.
- [ ] Each athlete's club, filled in as `club` in `content/results.ts`.
- [ ] Every sponsor agrees to be listed on the sponsors page.

**Facts**

- [ ] Only athletes who train with Tigran are listed, each checked against a
      source. Edik Martirosyan (Armenia's other bronze) trains at another
      club with another coach, so he is counted only in Armenia's medal
      tally (`teamMedals` in `content/results.ts`).
- [ ] Rafik Aleksanyan: gold confirmed by IMMAF's report and IMMAF's video.
      Lion Heart's post of 22 August 2026 gives his age (17), Youth A,
      65.8 kg, his club and coaches Mkhitar Barseghyan and Tigran Petrosyan.
      Sportaran (22 August) gives the stages and opponents' countries. IMMAF's
      report names the last three opponents and the kimura.
- [ ] Sos Martirosyan: everything on his card (Youth D, born 2014–2015,
      52 kg, three wins, bronze, Lion Heart, coaches Mkhitar Barseghyan and
      Tigran Petrosyan) is from the MMA Federation of Armenia's Instagram post
      of 18 August 2026; Lion Heart's post confirms club and coaches. IMMAF's
      2026 youth divisions go by birth year: Youth D 2014–2015, C 2012–2013,
      B 2010–2011, A 2008–2009 (capped at 17).
- [ ] Armenia's three medals (`teamMedals`) are from the Lorik Humanitarian
      Fund (27 August) and Armenian Weekly (30 August). Lion Heart's post of
      22 August counts two; it went up before the last competition day.
- [ ] The "Official results" button links to the event's results on
      Smoothcomp (immaf.smoothcomp.com/en/event/31610/results). Its bot check
      blocked automated reading, so open it once to confirm both athletes are
      listed.
- [ ] Rafik's bronze at the 2026 IMMAF European Championships (Belgrade,
      5–15 February; Youth A on 8–9 February per IMMAF's event page): Youth A
      61.2 kg and the quarterfinal win over Kanan Aliyev 30–27 are from
      Sportball24 (10 February); the bronze from Sportaran (22 August) and his
      Instagram bio. Artur confirmed Tigran coached him for it; confirm
      Mkhitar Barseghyan did too, since the card credits both.
- [ ] IMMAF's logo (`public/logos/immaf.svg`, the white logo from immaf.org)
      is used to name the championship, not to suggest IMMAF endorses the
      site. Remove it if IMMAF asks: set `organizerLogo` to `null` in
      `content/results.ts` and the board shows "IMMAF" as text.
- [ ] Mkhitar's profile: "MMA & freestyle" coach at Lion Heart is from
      Sportaran's article on the academy's opening (22 November 2025).
      Professional MMA fighter, wrestling style, ACA and Eagle FC, born in
      Tashir: Sportball24's profile, whose fight list ends in March 2024. The
      site leaves out his record and weight class; ask him what he wants shown
      (titles, ranks, years of coaching).
- [ ] Tigran's facts list in "The coaches" comes from two public sources. The coaches
      poster on lionheart.am/en/trenera gives the All-Russian tournament wins
      in judo, SAMBO and combat SAMBO, the nine years as an instructor for
      military personnel and Interior Ministry officers, and conditioning for
      boxing, MMA and wrestling since 2020. His Instagram bio ("СибГУФК 🎓
      КМС-x3, BJJ 🟦") gives the university, Candidate Master of Sport in three
      sports and the BJJ blue belt. Confirm with Tigran which three sports, and
      whether to name them.
- [ ] Other results (SAMBO, professional fights) to add.
- [ ] News: every story links to where it was published.
- [x] The Armenian Fighters vlog with Suren Petrosyan (21 October) is the
      project's debut episode, hosted by Lion Heart coaches Mkhitar Barseghyan
      and Tigran Petrosyan (confirmed by Artur on 2026-10-30).
- [ ] Tigran does not coach Suren Petrosyan: they are colleagues at Lion
      Heart. Never say he trains Suren. The same goes for other pro fighters at
      Lion Heart unless Tigran confirms a name.
- [ ] Not on the page yet: Sportaran (3 September 2026) lists a "Тигран
      Петросян" among the coaches preparing Armenia's team for the IMMAF World
      Championships in Tbilisi. Add it once Tigran confirms it's him.
- [ ] The 21TV show of 9 September (YouTube l9dJjymm1Kw) names Tigran in its
      title. The January 21TV feature (YTmrGc3lBno) introduces him as a Lion
      Heart athlete and coach.
- [ ] Tigran judged ARMAT FS × ORION FC (26 September 2026, Tashir Arena):
      Artur's account, from a separate judges' table. No public source
      names the officials (checked armatfightshow.com, Sportaran, Panorama,
      Aysor, 168.am, Armenian Life). Confirm the exact role with Tigran: judge,
      or another official such as timekeeper.
- [ ] Armenia Open, the six-month summary and Armat Fight Show are Lion Heart
      club news from Sportaran; the cards credit the club, not Tigran.
- [ ] Tigran's profile names the professional clubs Lion Heart and ARM.MEN
      (links in `content/site.ts`), as Artur asked on 2026-10-30. Show the
      page to both clubs before it goes live.

**Language**

- [ ] A native speaker proofreads the Armenian text.
- [ ] Proofread the Russian text.

**Setup**

- [ ] Contacts in `content/site.ts`: the project's Instagram
      (`_armenian_fighters_`, the account that announced the first episode),
      Tigran's (`black_tiger_nolimit`) and Mkhitar's (`mkhitar_barseghyan57mma`,
      from Sportball24). The YouTube channel (`@black_tiger_nolimit`, shown as
      "Armenian fighters") has its own section, not a contact card. Confirm the
      handles with the coaches, and add email, phone or WhatsApp if they want
      sponsors to use them.
- [ ] Donate link in `content/site.ts`, once there is a way to receive money
      (an organisation or a fiscal sponsor). Until then, the individuals' "Become a sponsor" button leads
      to the contacts.
- [ ] Register `armenianfighters.am` (chosen and still free on 2026-10-30)
      and add it in Vercel → Settings → Domains. It is already `url` in
      `content/site.ts`, used for canonical links and the sitemap. Register it
      in a coach's name so the project owns it. `.am` names are sold by
      Armenian registrars (the registry lists them at
      https://amnic.isoc.am/en/registrars), and registration takes up to three
      business days. `armenianfighters.com` and `armenianfighters.org` are
      taken. Don't use `armenian-fighters.com`: a missed hyphen sends visitors
      to someone else's `armenianfighters.com`.
- [ ] News photos (`public/images/news/`) are the publishers' own: IMMAF,
      Sportaran, Sportball24, and Instagram posts by Lion Heart, the MMA
      Federation of Armenia and Armenian MMA. YouTube cards show YouTube's own
      thumbnail and play through youtube-nocookie.com. Each is credited on its card, and
      Artur chose to use them. Ask the publishers if possible, and remove any
      photo on request.
- [x] The folder and GitHub repository are renamed to `armenian-fighters`
      (2026-10-30); the old repository URL redirects.
- [ ] Rename the Vercel project to `armenian-fighters` (Vercel → Settings →
      General) for an `armenian-fighters.vercel.app` address.
