// English is the source of truth: Armenian and Russian must have the same keys.
//
// The athletes belong to themselves, their families and their clubs. Copy talks
// about Tigran's own work ("athletes who train with him"), never "his team".
// Sponsorship is framed as backing MMA in Armenia through Tigran's work, on
// results and pride: never say who pays for trips today, and never describe
// Armenian sport as short of money. Don't promise sponsors anything Tigran
// hasn't agreed to.

export const en = {
  meta: {
    title:
      "Tigran Petrosyan | Professional conditioning and MMA coach, Yerevan",
    description:
      "Tigran Petrosyan is a professional conditioning and MMA coach in Yerevan, working with teenagers and professional fighters. Athletes who train with him won a world title and a bronze medal for Armenia at the 2026 IMMAF Youth World Championships. Support his work, and MMA in Armenia, as a company or an individual.",
  },
  brand: {
    name: "Tigran Petrosyan",
    // His own wording from Instagram: "Проф. тренер по физподготовке & MMA".
    role: "Professional conditioning and MMA coach",
    place: "Yerevan, Armenia",
  },
  skipToContent: "Skip to content",
  nav: {
    label: "Sections",
    menu: "Menu",
    results: "Results",
    about: "About",
    support: "Support",
    news: "News",
    sponsors: "Sponsors",
    contact: "Contact",
  },
  languageSwitcher: "Language",
  hero: {
    lead: [
      "Tigran coaches fighters at every stage, from teenagers in their first year to adult professionals.",
      "In August 2026, athletes who train with him won a world title and a bronze medal for Armenia at the IMMAF Youth World Championships in Abu Dhabi.",
    ],
    mission: "Supporting his work means supporting MMA in Armenia.",
    primaryAction: "Support Armenian MMA",
    secondaryAction: "See the results",
  },
  results: {
    title: "Results",
    credit:
      "The medals belong to the athletes, and to the families, clubs and coaches behind them.",
    medals: {
      gold: "Gold",
      silver: "Silver",
      bronze: "Bronze",
    },
    team: "Armenia",
    club: "Club",
    coaches: "Coaches",
    tally: "Medals won by Armenia",
    fight: {
      label: "Fight {n}",
      won: "won",
      submission: "Submission",
      decision: "Unanimous decision",
      group: "Group stage",
      quarterfinal: "Quarterfinal",
      semifinal: "Semifinal",
      final: "Final",
    },
    proof: {
      label: "Confirmed by",
      immafReport: "IMMAF report",
      immafVideo: "IMMAF video",
      immafEvent: "IMMAF event page",
      officialResults: "Official results",
      federationPost: "MMA Federation of Armenia",
      clubPost: "Lion Heart",
    },
    teamSources: "Armenia's medal count",
  },
  // Sources: the coaches poster on lionheart.am, his Instagram bio, and what
  // the user confirmed. See the README checklist before adding more.
  about: {
    title: "About Tigran",
    intro:
      "Tigran is a professional conditioning and MMA coach in Yerevan. He works with teenagers who are just starting, with junior national team athletes and with adult professional fighters, and also trains amateurs who simply want to get stronger.",
    clubs: {
      label: "Clubs",
      text: "Works at several clubs in Yerevan, including the professional clubs {clubs}.",
      and: "and",
    },
    facts: [
      {
        label: "Coaching",
        text: "Conditioning for boxing, MMA and wrestling since 2020. He also coaches SAMBO.",
      },
      {
        label: "Instructor",
        text: "Nine years as an instructor in physical and psychological training for military personnel and Interior Ministry officers.",
      },
      {
        label: "As an athlete",
        text: "Champion and winner of All-Russian tournaments in judo, SAMBO and combat SAMBO. Candidate Master of Sport in three sports. Blue belt in Brazilian jiu-jitsu.",
      },
      {
        label: "Education",
        text: "Siberian State University of Physical Education and Sport.",
      },
      {
        label: "2026",
        text: "Together with Mkhitar Barseghyan, prepared Lion Heart athletes Rafik Aleksanyan (European bronze in February, world champion in August) and Sos Martirosyan (world bronze), and travelled with them to the IMMAF Youth World Championships in Abu Dhabi.",
      },
      {
        label: "Vlog",
        text: "Co-hosts the Armenian Fighters vlog with Mkhitar Barseghyan. The first episode, in October 2026, is a conversation with MMA fighter Suren Petrosyan at Lake Sevan.",
      },
    ],
  },
  why: {
    title: "Support MMA in Armenia",
    lead: "Sponsoring Tigran's work means sponsoring Armenian MMA: young fighters who train in Yerevan and win medals for Armenia.",
    points: [
      {
        title: "Medals for Armenia",
        body: "In 2026, athletes who train with him won world gold, world bronze and European bronze, all for Armenia.",
      },
      {
        title: "The next generation",
        body: "Teenagers starting out, junior national team athletes and adult professionals all train with him in Yerevan.",
      },
      {
        title: "Support you can see",
        body: "With their permission, sponsors are listed on a separate page of this site.",
      },
    ],
  },
  costs: {
    title: "What your support pays for",
    items: [
      "Travel for the coach and athletes to international tournaments",
      "Entry fees and licences",
      "Medical checks and insurance",
      "Training gear: gloves, shin guards and mats",
      "Training camps before major events",
    ],
  },
  support: {
    title: "Ways to support",
    company: {
      title: "For companies",
      body: "Sponsor Armenian MMA through Tigran's coaching work. Write to us and we'll discuss the amount.",
      perk: "Your company on the sponsors page, with your logo and a link to your website",
      action: "Become a sponsor",
    },
    individual: {
      title: "For individuals",
      body: "Support young Armenian fighters with any amount.",
      perk: "Your name on the sponsors page, if you want",
      action: "Become a sponsor",
    },
    allSponsors: "All sponsors",
  },
  news: {
    title: "News",
    lead: "Championships, interviews and life at the gym. Newest first.",
    kinds: {
      championship: "Championship",
      interview: "Interview",
      video: "Video",
      club: "Club",
      event: "Tournament",
      training: "Training",
      press: "Press",
    },
    loadMore: "Show older news",
    loading: "Loading older news…",
    end: "That's all the news so far.",
    error: "Couldn't load older news. Check your connection and try again.",
    retry: "Try again",
    play: "Play video: {title}",
    photoCredit: "Photo: {credit}",
  },
  sponsors: {
    title: "Sponsors",
    lead: "Companies and people who support MMA in Armenia through Tigran Petrosyan's coaching work. Thank you.",
    groupsLabel: "Sponsor groups",
    companies: "Companies",
    individuals: "Individuals",
    emptyCompanies: "No company sponsors yet. Yours could be the first.",
    emptyIndividuals: "No individual sponsors yet. You could be the first.",
  },
  contact: {
    title: "Talk to the coach",
    body: "Tell us how you'd like to help. We reply in English, Armenian and Russian.",
    labels: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
    },
    comingSoon: "Contact details are coming soon.",
    donate: "Donate",
  },
};

export type Messages = typeof en;
