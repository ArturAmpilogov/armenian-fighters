// English is the source of truth: Armenian and Russian must have the same keys.
//
// Armenian Fighters is the project of two Lion Heart coaches, Tigran Petrosyan
// and Mkhitar Barseghyan. The athletes belong to themselves, their families and
// their clubs: copy says "athletes who train with them", never "their team".
// Say something about both coaches only when a source credits both.
// Sponsorship is framed as backing MMA in Armenia through the project, on
// results and pride: never say who pays for trips today, and never describe
// Armenian sport as short of money. Don't promise sponsors anything the coaches
// haven't agreed to.

export const en = {
  meta: {
    title:
      "Armenian Fighters | MMA coaches Tigran Petrosyan and Mkhitar Barseghyan, Yerevan",
    description:
      "Armenian Fighters is a project of Tigran Petrosyan and Mkhitar Barseghyan, MMA coaches at the Lion Heart academy in Yerevan. Athletes who train with them won a world title and a bronze medal for Armenia at the 2026 IMMAF Youth World Championships. Support MMA in Armenia as a company or an individual.",
  },
  brand: {
    name: "Armenian Fighters",
    role: "Coaches Tigran Petrosyan and Mkhitar Barseghyan",
    place: "Yerevan, Armenia",
  },
  skipToContent: "Skip to content",
  nav: {
    label: "Sections",
    menu: "Menu",
    results: "Results",
    about: "Coaches",
    channel: "Channel",
    support: "Support",
    news: "News",
    sponsors: "Sponsors",
    newsHint: "Championships, interviews and fight nights",
    sponsorsHint: "Companies and people who back the project",
    contact: "Contact",
  },
  languageSwitcher: "Language",
  hero: {
    lead: [
      "Tigran Petrosyan and Mkhitar Barseghyan are MMA coaches at the Lion Heart academy in Yerevan.",
      "In August 2026, athletes who train with them won a world title and a bronze medal for Armenia at the IMMAF Youth World Championships in Abu Dhabi.",
      "On their YouTube channel, Armenian Fighters, they sit down with Armenian fighters to talk about the sport.",
    ],
    mission: "Supporting Armenian Fighters means supporting MMA in Armenia.",
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
  // Sources: Sportaran on Lion Heart's coaching staff (22 Nov 2025), the coaches
  // poster on lionheart.am and Tigran's Instagram bio for Tigran, Sportball24
  // for Mkhitar, and what Artur confirmed. See the README checklist first.
  about: {
    title: "The coaches",
    intro:
      "Tigran and Mkhitar coach together at Lion Heart. They prepared Rafik Aleksanyan and Sos Martirosyan for the 2026 IMMAF Youth World Championships, where Rafik won gold and Sos won bronze.",
    and: "and",
    people: [
      {
        id: "tigran",
        name: "Tigran Petrosyan",
        // His own wording from Instagram: "Проф. тренер по физподготовке & MMA".
        role: "Professional conditioning and MMA coach",
        facts: [
          {
            label: "Clubs",
            text: "Works at several clubs in Yerevan, including the professional clubs {clubs}.",
          },
          {
            label: "Coaching",
            text: "Conditioning for boxing, MMA and wrestling since 2020. Works with teenagers starting out, junior national team athletes and professional fighters, and also coaches SAMBO.",
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
        ],
      },
      {
        id: "mkhitar",
        name: "Mkhitar Barseghyan",
        role: "MMA and freestyle wrestling coach",
        facts: [
          {
            label: "Coaching",
            text: "Coaches MMA and freestyle wrestling at Lion Heart.",
          },
          {
            label: "As a fighter",
            text: "Professional MMA fighter with a wrestling style. Has fought in ACA and Eagle FC.",
          },
          {
            label: "From",
            text: "Tashir, Armenia.",
          },
        ],
      },
    ],
  },
  channel: {
    title: "Armenian Fighters on YouTube",
    body: "Tigran and Mkhitar talk with Armenian fighters about how they started, how they train and what Armenian MMA needs to grow. In the first episode, they cook steaks with Suren Petrosyan at Lake Sevan.",
    episode: "First episode: visiting Suren Petrosyan",
    play: "Play the first episode",
    watch: "Watch on YouTube",
    follow: "Follow on Instagram",
  },
  why: {
    title: "Support MMA in Armenia",
    lead: "Sponsoring Armenian Fighters means sponsoring Armenian MMA: young fighters who train in Yerevan and win medals for Armenia.",
    points: [
      {
        title: "Medals for Armenia",
        body: "At the 2026 IMMAF Youth World Championships, athletes who train with Tigran and Mkhitar won gold and bronze for Armenia.",
      },
      {
        title: "The next generation",
        body: "Teenagers starting out and junior national team athletes train with them at Lion Heart in Yerevan.",
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
      "Travel for the coaches and athletes to international tournaments",
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
      body: "Sponsor Armenian MMA through Armenian Fighters. Write to us and we'll discuss the amount.",
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
    lead: "Companies and people who support MMA in Armenia through Armenian Fighters. Thank you.",
    groupsLabel: "Sponsor groups",
    companies: "Companies",
    individuals: "Individuals",
    emptyCompanies: "No company sponsors yet. Yours could be the first.",
    emptyIndividuals: "No individual sponsors yet. You could be the first.",
  },
  contact: {
    title: "Talk to the coaches",
    body: "Tell us how you'd like to help. We reply in English, Armenian and Russian.",
    labels: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
      youtube: "YouTube",
    },
    comingSoon: "Contact details are coming soon.",
    donate: "Donate",
  },
};

export type Messages = typeof en;
