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
//
// The payment terms and privacy policy are a draft: Tigran confirms them,
// refunds included, before card payments open (see the README checklist).

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
        id: "tigran" as const,
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
        id: "mkhitar" as const,
        name: "Mkhitar Barseghyan",
        role: "MMA and freestyle wrestling coach",
        facts: [
          {
            label: "Coaching",
            text: "Coaches MMA and freestyle wrestling at {clubs}.",
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
  sponsor: {
    title: "Become a sponsor",
    lead: "Support young Armenian fighters and MMA in Armenia.",
    money: "{amount} AMD",
    soon: {
      label: "Coming soon",
      title: "Payment by card",
      body: "Soon you'll be able to support the project here by card, once or every month. For now, write to the coaches and they'll tell you how to help.",
      action: "Write to the coaches",
    },
    form: {
      title: "Your payment",
      frequency: "How often",
      once: "Once",
      monthly: "Every month",
      amount: "Amount",
      other: "Other amount",
      otherHint: "From {min} to {max}",
      name: "Your name for the sponsors page",
      nameHint: "Optional. Leave it empty to stay anonymous.",
      email: "Email for receipts",
      agree: "I agree to the {terms} and the {privacy}.",
      termsLink: "payment terms",
      privacyLink: "privacy policy",
      agreeMonthly:
        "I understand that this amount will be charged to my card every month until I cancel.",
      summaryOnce: "{amount}, once",
      summaryMonthly: "{amount} every month, until you cancel",
      pay: "Pay {amount}",
      payPlain: "Pay",
      cards: "Accepted cards",
      secure:
        "You enter your card details on Ameriabank's secure payment page. We never see or store your card number.",
    },
    how: {
      title: "How it works",
      items: [
        {
          label: "Payment",
          text: "By Visa or Mastercard, on Ameriabank's payment page. Amounts are in Armenian drams (AMD). If your card is in another currency, your bank converts the amount.",
        },
        {
          label: "Every month",
          text: "Your card is charged on the same day each month. Each receipt has a link to cancel, and cancelling stops all future payments.",
        },
        {
          label: "Receipts",
          text: "Sent to your email after each payment.",
        },
        {
          label: "Refunds",
          text: "If you paid by mistake, write to us within 14 days and we'll refund the payment to the same card.",
        },
        {
          label: "Your name",
          text: "If you give a name, it appears on the sponsors page. Ask us any time to remove it.",
        },
      ],
    },
  },
  seller: {
    title: "Seller",
    name: "Name",
    taxId: "Taxpayer ID (ՀՎՀՀ)",
    address: "Address",
    phone: "Phone",
    email: "Email",
    pending: "To be added",
  },
  terms: {
    title: "Payment terms",
    lead: "How card payments to Armenian Fighters work: amounts, monthly payments, cancelling and refunds.",
    updated: "Last updated on 31 October 2026",
    sections: [
      {
        title: "Who receives the payment",
        body: [
          "Armenian Fighters is the project of MMA coaches Tigran Petrosyan and Mkhitar Barseghyan in Yerevan. Card payments on this site are received by the seller named above.",
        ],
      },
      {
        title: "What you pay for",
        body: [
          "A payment on this site is voluntary support for Armenian Fighters. It pays for the project's costs: travel to tournaments, entry fees and licences, medical checks and insurance, training gear and training camps.",
          "You don't buy goods or services, and nothing is delivered. If you give a name, we list it on the sponsors page.",
        ],
      },
      {
        title: "Amounts and currency",
        body: [
          "You choose the amount, from {min} to {max} per payment. Amounts are in Armenian drams (AMD).",
          "If your card is in another currency, your bank converts the amount at its own rate and may charge a fee.",
        ],
      },
      {
        title: "Card security",
        body: [
          "You enter your card details on Ameriabank's payment page, not on this site. The connection is encrypted, and your bank may ask you to confirm the payment with 3-D Secure, for example with a code by SMS.",
          "We never see or store your card number. The bank only tells us whether the payment went through. We accept Visa and Mastercard.",
        ],
      },
      {
        title: "Monthly payments",
        body: [
          "If you choose to pay every month, the first payment is taken right away and then on the same day each month. If a month has no such day, the payment is taken on the month's last day.",
          "Ameriabank keeps your card on file for these payments; we keep only a reference to it. After each payment, you get a receipt by email.",
        ],
      },
      {
        title: "Cancelling",
        body: [
          "You can cancel monthly payments at any time with the link in any receipt, or by writing to us. Cancelling stops all future payments, and the bank removes your card from file.",
        ],
      },
      {
        title: "Refunds",
        body: [
          "If you paid by mistake or were charged the wrong amount, write to us within 14 days of the payment. We refund the full amount to the same card. Your bank may take several business days to show it.",
          "We don't give refunds in cash.",
        ],
      },
      {
        title: "Questions",
        body: [
          "Write to us using the seller's details above or the contacts on the home page. We reply in English, Armenian and Russian.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    lead: "What personal data Armenian Fighters collects when you pay or write to us, and what we do with it.",
    updated: "Last updated on 31 October 2026",
    sections: [
      {
        title: "Who is responsible",
        body: [
          "The seller named above is responsible for the personal data collected on this site.",
        ],
      },
      {
        title: "What we collect",
        body: [
          "When you pay, we collect your email address, the amount and date of each payment, whether it's monthly, and the name for the sponsors page if you give one. The bank tells us whether each payment went through.",
          "When you write to us, we receive what you send. We don't collect card numbers: you enter them only on Ameriabank's page.",
        ],
      },
      {
        title: "Why we use it",
        body: [
          "To take and confirm payments, send receipts, run and cancel monthly payments, list your name on the sponsors page if you asked, answer your messages, and keep the payment records that Armenian law requires.",
        ],
      },
      {
        title: "Who else receives it",
        body: [
          "Ameriabank, which processes card payments, and the services that host this site and send our emails, only to do that work. We don't sell your data or share it for advertising.",
        ],
      },
      {
        title: "How long we keep it",
        body: [
          "Payment records, for as long as Armenian law requires. Your name stays on the sponsors page until you ask us to remove it. Everything else is deleted once it's no longer needed.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You can ask what data we hold about you and ask us to correct or delete it, under the Law of the Republic of Armenia on Protection of Personal Data. Write to us using the seller's details above.",
        ],
      },
      {
        title: "Cookies",
        body: [
          "This site doesn't set cookies or use analytics. Videos load from YouTube (youtube-nocookie.com) only when you press play, and YouTube's privacy policy then applies. Ameriabank's payment page has its own privacy policy.",
        ],
      },
    ],
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
  },
};

export type Messages = typeof en;
