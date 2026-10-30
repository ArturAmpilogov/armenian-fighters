import type { Localized } from "@/lib/i18n";

// Only athletes who train with Tigran belong in `results`, each checked
// against a source and credited with their club and every coach. A team's
// whole medal count, when shown, is `teamMedals`.

export type Medal = "gold" | "silver" | "bronze";

export type Source = {
  label: string;
  url: string;
};

/** Public pages that show a result. Labels are in the messages, except news. */
export type Proof =
  | {
      kind:
        | "immafReport"
        | "immafVideo"
        | "immafEvent"
        | "officialResults"
        | "federationPost"
        | "clubPost";
      url: string;
    }
  | { kind: "news"; url: string; label: string };

export type Bout = {
  method: "submission" | "decision";
  /** e.g. "kimura" or a score such as "30–27". */
  detail: Localized<string> | null;
  opponent: Localized<string> | null;
  country: Localized<string> | null;
  stage: "group" | "quarterfinal" | "semifinal" | "final";
};

/** How a medal was won. Every fight listed was won. */
export type FightPath = {
  /** e.g. "Six fights, six wins", written out so plurals read naturally. */
  record: Localized<string>;
  bouts: Bout[];
  /** `true` when `bouts` is every fight, so the path of dots can be drawn. */
  complete: boolean;
  /** One line for the group-stage fights when they aren't named one by one. */
  groupStage: {
    opponents: Localized<string>;
    result: Localized<string>;
  } | null;
};

export type MedalResult = {
  medal: Medal;
  athlete: Localized<string>;
  /** Age group and weight class, or `null` while not confirmed. */
  division: Localized<string> | null;
  /** The athlete's club, credited next to the result. `null` hides it. */
  club: string | null;
  /** All the athlete's coaches, Tigran included. `null` while not confirmed. */
  coaches: Localized<string>[] | null;
  /** How the medal was won, or `null` while not known. */
  details: FightPath | null;
  proof: Proof[];
};

export type Championship = {
  id: string;
  organizer: string;
  /** Organizer's logo in `public/`, e.g. "/logos/immaf.svg". `null` shows the name. */
  organizerLogo: string | null;
  name: Localized<string>;
  placeAndDate: Localized<string>;
  /** One or two sentences under the championship's name. */
  summary: Localized<string> | null;
  /** Medals won by the whole Armenian team, for the scoreboard. */
  teamMedals: Partial<Record<Medal, number>> | null;
  /** Sources for the whole-team count. */
  teamSources: Source[];
  results: MedalResult[];
};

const lionHeartCoaches: Localized<string>[] = [
  {
    en: "Mkhitar Barseghyan",
    hy: "Մխիթար Բարսեղյան",
    ru: "Мхитар Барсегян",
  },
  {
    en: "Tigran Petrosyan",
    hy: "Տիգրան Պետրոսյան",
    ru: "Тигран Петросян",
  },
];

const rafik: Localized<string> = {
  en: "Rafik Aleksanyan",
  hy: "Ռաֆիկ Ալեքսանյան",
  ru: "Рафик Алексанян",
};

// Sportaran, 22 August 2026: stages and opponents' countries at the Youth
// Worlds, and Rafik's February bronze at the European Championships.
const sportaranRafik: Proof = {
  kind: "news",
  label: "Sportaran",
  url: "https://sportaran.com/ru/post/rafik-aleksanyan-stal-chempionom-mira-po-mma-sredi-yunoshej/",
};

// Lion Heart's post of 22 August 2026 names both medalists, their club and
// coaches Mkhitar Barseghyan and Tigran Petrosyan.
const lionHeartPost: Proof = {
  kind: "clubPost",
  url: "https://www.instagram.com/lionheart.armenia/reel/DcWYBhKqpuY/",
};

// IMMAF's official results for the event, behind a bot check people can pass.
const worldsResults: Proof = {
  kind: "officialResults",
  url: "https://immaf.smoothcomp.com/en/event/31610/results",
};

const groupSubmission: Bout = {
  method: "submission",
  detail: null,
  opponent: null,
  country: null,
  stage: "group",
};

const youthWorlds2026: Championship = {
  id: "immaf-youth-worlds-2026",
  organizer: "IMMAF",
  organizerLogo: "/logos/immaf.svg",
  name: {
    en: "IMMAF Youth World Championships",
    hy: "IMMAF-\u2060ի պատանիների աշխարհի առաջնություն",
    ru: "Юношеский чемпионат мира IMMAF",
  },
  placeAndDate: {
    en: "Abu Dhabi, August 2026",
    hy: "Աբու Դաբի, 2026 թ. օգոստոս",
    ru: "Абу-Даби, август 2026",
  },
  summary: {
    en: "Armenia's 32-athlete team won three medals. Two of them were won by athletes of the Lion Heart academy, coached by Mkhitar Barseghyan and Tigran Petrosyan.",
    hy: "Հայաստանի 32 մարզիկից բաղկացած հավաքականը նվաճեց երեք մեդալ։ Դրանցից երկուսը նվաճել են Lion Heart ակադեմիայի մարզիկները, որոնց մարզիչներն են Մխիթար Բարսեղյանը և Տիգրան Պետրոսյանը։",
    ru: "Сборная Армении из 32 спортсменов завоевала три медали. Две из них завоевали спортсмены академии Lion Heart, их тренеры — Мхитар Барсегян и Тигран Петросян.",
  },
  // Gold for Rafik Aleksanyan, bronze for Sos and for Edik Martirosyan.
  // Edik trains at another club with another coach, so he isn't listed below.
  teamMedals: { gold: 1, bronze: 2 },
  teamSources: [
    {
      label: "Lorik Humanitarian Fund",
      url: "https://www.lorikhf.org/post/armenia-brings-home-three-medals-from-2026-immaf-youth-world-championships",
    },
    {
      label: "Armenian Weekly",
      url: "https://armenianweekly.com/2026/08/30/armenia-brings-home-three-medals-from-2026-mma-youth-world-championships/",
    },
  ],
  results: [
    {
      medal: "gold",
      athlete: rafik,
      division: {
        en: "Youth A, featherweight 65.8 kg",
        hy: "Պատանիներ A, կիսաթեթև քաշ 65,8 կգ",
        ru: "Юноши A, полулёгкий вес 65,8 кг",
      },
      club: "Lion Heart",
      coaches: lionHeartCoaches,
      // Opponents' names and the kimura: IMMAF's report of 25 August 2026.
      details: {
        record: {
          en: "Six fights, six wins",
          hy: "Վեց մենամարտ, վեց հաղթանակ",
          ru: "Шесть боёв, шесть побед",
        },
        complete: true,
        bouts: [
          groupSubmission,
          groupSubmission,
          groupSubmission,
          {
            method: "submission",
            detail: { en: "kimura", hy: "կիմուրա", ru: "кимура" },
            opponent: {
              en: "Georgi Rusev",
              hy: "Գեորգի Ռուսև",
              ru: "Георги Русев",
            },
            country: { en: "Bulgaria", hy: "Բուլղարիա", ru: "Болгария" },
            stage: "quarterfinal",
          },
          {
            method: "decision",
            detail: null,
            opponent: {
              en: "Abubakr Sattorov",
              hy: "Աբուբակր Սատտորով",
              ru: "Абубакр Сатторов",
            },
            country: { en: "Tajikistan", hy: "Տաջիկստան", ru: "Таджикистан" },
            stage: "semifinal",
          },
          {
            method: "decision",
            detail: null,
            opponent: {
              en: "Muhammadaziz Nazarov",
              hy: "Մուհամմադազիզ Նազարով",
              ru: "Мухаммадазиз Назаров",
            },
            country: { en: "Uzbekistan", hy: "Ուզբեկստան", ru: "Узбекистан" },
            stage: "final",
          },
        ],
        groupStage: {
          opponents: {
            en: "Opponents from Mexico, Kazakhstan and the UAE",
            hy: "Մրցակիցներ Մեքսիկայից, Ղազախստանից և ԱՄԷ-ից",
            ru: "Соперники из Мексики, Казахстана и ОАЭ",
          },
          result: {
            en: "Three submissions",
            hy: "Երեք սաբմիշն",
            ru: "Три сабмишна",
          },
        },
      },
      proof: [
        {
          kind: "immafReport",
          url: "https://immaf.org/2026/08/25/aleksanyan-wins-big-as-zerwal-and-lemos-show-stunning-form-2026-immaf-world-championships/",
        },
        {
          kind: "immafVideo",
          url: "https://www.instagram.com/immafed/reel/DcWWYjQgsL0/",
        },
        worldsResults,
        lionHeartPost,
        sportaranRafik,
      ],
    },
    // MMA Federation of Armenia, 18 August 2026: Youth D (born 2014–2015),
    // 52 kg, three wins, bronze, Lion Heart, coaches Barseghyan and Petrosyan.
    {
      medal: "bronze",
      athlete: {
        en: "Sos Martirosyan",
        hy: "Սոս Մարտիրոսյան",
        ru: "Сос Мартиросян",
      },
      division: {
        en: "Youth D (11–12), 52 kg",
        hy: "Պատանիներ D (11–12 տ.), 52 կգ",
        ru: "Юноши D (11–12 лет), до 52 кг",
      },
      club: "Lion Heart",
      coaches: lionHeartCoaches,
      details: {
        record: {
          en: "Three fights won",
          hy: "Երեք հաղթանակ",
          ru: "Три победы",
        },
        complete: false,
        bouts: [],
        groupStage: null,
      },
      proof: [
        {
          kind: "federationPost",
          url: "https://www.instagram.com/p/DcL9fcCl2k_/",
        },
        worldsResults,
        lionHeartPost,
      ],
    },
  ],
};

// IMMAF's event page: Belgrade, 5–15 February 2026, Youth A on 8–9 February.
// Sportball24, 10 February 2026: Youth A 61.2 kg, quarterfinal win over
// Kanan Aliyev 30–27. Bronze: Sportaran (22 August) and Rafik's Instagram.
// The user confirmed Tigran coached him for it.
const europeans2026: Championship = {
  id: "immaf-europeans-2026",
  organizer: "IMMAF",
  organizerLogo: "/logos/immaf.svg",
  name: {
    en: "IMMAF European Championships",
    hy: "IMMAF-\u2060ի Եվրոպայի առաջնություն",
    ru: "Чемпионат Европы IMMAF",
  },
  placeAndDate: {
    en: "Belgrade, February 2026",
    hy: "Բելգրադ, 2026 թ. փետրվար",
    ru: "Белград, февраль 2026",
  },
  summary: {
    en: "Six months before his world title, Rafik Aleksanyan won bronze at the European Championships.",
    hy: "Աշխարհի չեմպիոնի տիտղոսից վեց ամիս առաջ Ռաֆիկ Ալեքսանյանը բրոնզե մեդալ նվաճեց Եվրոպայի առաջնությունում։",
    ru: "За полгода до титула чемпиона мира Рафик Алексанян завоевал бронзу чемпионата Европы.",
  },
  teamMedals: null,
  teamSources: [],
  results: [
    {
      medal: "bronze",
      athlete: rafik,
      division: {
        en: "Youth A, 61.2 kg",
        hy: "Պատանիներ A, 61,2 կգ",
        ru: "Юноши A, до 61,2 кг",
      },
      club: "Lion Heart",
      coaches: lionHeartCoaches,
      details: {
        record: {
          en: "Reached the semifinal",
          hy: "Հասավ կիսաեզրափակիչ",
          ru: "Вышел в полуфинал",
        },
        complete: false,
        bouts: [
          {
            method: "decision",
            detail: { en: "30–27", hy: "30–27", ru: "30:27" },
            opponent: {
              en: "Kanan Aliyev",
              hy: "Քանան Ալիև",
              ru: "Канан Алиев",
            },
            country: { en: "Azerbaijan", hy: "Ադրբեջան", ru: "Азербайджан" },
            stage: "quarterfinal",
          },
        ],
        groupStage: null,
      },
      proof: [
        {
          kind: "immafEvent",
          url: "https://immaf.org/championship/2026-immaf-european-championships/",
        },
        {
          kind: "news",
          label: "Sportball24",
          url: "https://sportball24.com/en/post/rafik-aleksanyan-v-shage-ot-finala-pobeda-v-chetvertfinale-immaf/",
        },
        sportaranRafik,
      ],
    },
  ],
};

/** Newest first. */
export const championships: Championship[] = [youthWorlds2026, europeans2026];
