import type { Localized } from "@/lib/i18n";

// News items for the News page, in any order: the page sorts newest first.
// Every item links to where it was published. Photos are the publishers' own,
// credited on the card; files live in `public/images/news/`.
//
// Copy follows the same rules as the rest of the site: athletes train "with"
// Tigran, clubs and co-coaches are credited, and nothing says who pays.

export type NewsKind =
  | "championship"
  | "interview"
  | "video"
  | "club"
  | "event"
  | "training"
  | "press";

export type NewsMedia =
  | {
      type: "image";
      src: string;
      alt: Localized<string>;
      credit: string;
      /** CSS object-position, for photos cropped to the card's 16:9 frame. */
      position: string | null;
    }
  | { type: "youtube"; id: string }
  | null;

export type NewsLink = {
  label: string | Localized<string>;
  url: string;
};

export type NewsItem = {
  id: string;
  /** YYYY-MM-DD, the day it was published. */
  date: string;
  kind: NewsKind;
  title: Localized<string>;
  summary: Localized<string>;
  media: NewsMedia;
  links: NewsLink[];
};

const instagram = "Instagram";

export const newsItems: NewsItem[] = [
  {
    id: "armmen-mma-sign-ups",
    date: "2026-10-20",
    kind: "club",
    title: {
      en: "ARM.MEN MMA is taking sign-ups",
      hy: "ARM.MEN MMA-\u2060ն ընդունում է հայտեր",
      ru: "ARM.MEN MMA открывает запись",
    },
    summary: {
      en: "The ARM.MEN club in Yerevan, where Tigran coaches, opened applications for its MMA programme. Each applicant, or a parent, is contacted to arrange a first training session.",
      hy: "Երևանի ARM.MEN ակումբը, որտեղ մարզում է Տիգրանը, սկսել է ընդունել հայտեր MMA ծրագրին։ Յուրաքանչյուր դիմողի կամ նրա ծնողի հետ կապ են հաստատում՝ առաջին մարզումը պայմանավորելու համար։",
      ru: "Клуб ARM.MEN в Ереване, где тренирует Тигран, открыл запись в секцию MMA. С каждым, кто оставил заявку, или с его родителем связываются, чтобы договориться о первой тренировке.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-10-armmen-signups.jpg",
      alt: {
        en: "The ARM-MEN Sport Club sign lit up on the building",
        hy: "ARM-MEN Sport Club-\u2060ի լուսավորված ցուցանակը շենքի վրա",
        ru: "Светящаяся вывеска ARM-MEN Sport Club на здании",
      },
      credit: "Armenian MMA / Instagram",
      position: "50% 55%",
    },
    links: [
      {
        label: instagram,
        url: "https://www.instagram.com/_armenian_fighters_/reel/DetZTSmtiiy/",
      },
      { label: "ARM.MEN", url: "https://www.instagram.com/armmenclub/" },
    ],
  },
  {
    id: "combat-sambo-world-championship-prep",
    date: "2026-10-17",
    kind: "training",
    title: {
      en: "Getting ready for the Combat SAMBO World Championship",
      hy: "Նախապատրաստություն մարտական սամբոյի աշխարհի առաջնությանը",
      ru: "Подготовка к чемпионату мира по боевому самбо",
    },
    summary: {
      en: "Speed, accuracy and explosive power: a Lion Heart session before the training camp for the Combat SAMBO World Championship.",
      hy: "Արագություն, ճշգրտություն և պայթուցիկ ուժ. մարզում Lion Heart-\u2060ում՝ մարտական սամբոյի աշխարհի առաջնության ուսումնամարզական հավաքից առաջ։",
      ru: "Скорость, точность и взрывная сила: тренировка в Lion Heart перед сборами к чемпионату мира по боевому самбо.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-10-combat-sambo-camp.jpg",
      alt: {
        en: "A fighter in a red SAMBO jacket wearing a bronze medal",
        hy: "Կարմիր սամբոյի բաճկոնով մարտիկ՝ բրոնզե մեդալով",
        ru: "Боец в красной куртке самбо с бронзовой медалью",
      },
      credit: "Armenian MMA / Instagram",
      position: "50% 12%",
    },
    links: [
      {
        label: instagram,
        url: "https://www.instagram.com/_armenian_fighters_/reel/DenwTq1MO6w/",
      },
    ],
  },
  {
    id: "team-welcomed-home",
    date: "2026-08-24",
    kind: "club",
    title: {
      en: "Welcome home",
      hy: "Բարի վերադարձ",
      ru: "С возвращением домой",
    },
    summary: {
      en: "Lion Heart met Armenia's team back from Abu Dhabi with one gold and two bronze medals. Two Lion Heart athletes won medals and two more finished fifth in their divisions.",
      hy: "Lion Heart-\u2060ը դիմավորեց Աբու Դաբիից մեկ ոսկե և երկու բրոնզե մեդալով վերադարձած Հայաստանի հավաքականին։ Lion Heart-\u2060ի երկու մարզիկ նվաճեցին մեդալներ, ևս երկուսը զբաղեցրին 5-\u2060րդ տեղը իրենց քաշային կարգերում։",
      ru: "Lion Heart встретил сборную Армении, вернувшуюся из Абу-Даби с одной золотой и двумя бронзовыми медалями. Два спортсмена Lion Heart завоевали медали, ещё двое заняли пятое место в своих категориях.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-08-team-welcome.jpg",
      alt: {
        en: "Lion Heart athletes and coaches with the club banner at Zvartnots airport",
        hy: "Lion Heart-\u2060ի մարզիկներն ու մարզիչները ակումբի պաստառով «Զվարթնոց» օդանավակայանում",
        ru: "Спортсмены и тренеры Lion Heart с баннером клуба в аэропорту «Звартноц»",
      },
      credit: "Lion Heart / Instagram",
      position: "50% 55%",
    },
    links: [
      {
        label: instagram,
        url: "https://www.instagram.com/lionheart.armenia/reel/DcbVKK7KDxY/",
      },
    ],
  },
  {
    id: "rafik-aleksanyan-world-champion",
    date: "2026-08-22",
    kind: "championship",
    title: {
      en: "Rafik Aleksanyan is world champion",
      hy: "Ռաֆիկ Ալեքսանյանը աշխարհի չեմպիոն է",
      ru: "Рафик Алексанян — чемпион мира",
    },
    summary: {
      en: "Six fights, six wins in Abu Dhabi: Rafik took gold at the IMMAF Youth World Championships in the Youth A 65.8 kg division. He trains at Lion Heart with coaches Mkhitar Barseghyan and Tigran Petrosyan.",
      hy: "Վեց մենամարտ, վեց հաղթանակ Աբու Դաբիում. Ռաֆիկը ոսկե մեդալ նվաճեց IMMAF-\u2060ի պատանիների աշխարհի առաջնությունում՝ Youth A, 65,8 կգ։ Նա մարզվում է Lion Heart-\u2060ում՝ մարզիչներ Մխիթար Բարսեղյանի և Տիգրան Պետրոսյանի մոտ։",
      ru: "Шесть боёв, шесть побед в Абу-Даби: Рафик взял золото юношеского чемпионата мира IMMAF в категории Youth A до 65,8 кг. Он тренируется в Lion Heart у Мхитара Барсегяна и Тиграна Петросяна.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-08-rafik-world-champion.jpg",
      alt: {
        en: "Rafik Aleksanyan raises the Armenian flag in the cage in Abu Dhabi",
        hy: "Ռաֆիկ Ալեքսանյանը Աբու Դաբիում վանդակում բարձրացնում է Հայաստանի դրոշը",
        ru: "Рафик Алексанян поднимает флаг Армении в клетке в Абу-Даби",
      },
      credit: "IMMAF",
      position: "50% 30%",
    },
    links: [
      {
        label: {
          en: "IMMAF video",
          hy: "IMMAF-\u2060ի տեսանյութ",
          ru: "Видео IMMAF",
        },
        url: "https://www.instagram.com/immafed/reel/DcWWYjQgsL0/",
      },
      {
        label: {
          en: "IMMAF report",
          hy: "IMMAF-\u2060ի հաշվետվություն",
          ru: "Отчёт IMMAF",
        },
        url: "https://immaf.org/2026/08/25/aleksanyan-wins-big-as-zerwal-and-lemos-show-stunning-form-2026-immaf-world-championships/",
      },
      {
        label: "Lion Heart",
        url: "https://www.instagram.com/lionheart.armenia/reel/DcWYBhKqpuY/",
      },
      {
        label: "Sportaran",
        url: "https://sportaran.com/ru/post/rafik-aleksanyan-stal-chempionom-mira-po-mma-sredi-yunoshej/",
      },
      { label: "A1+", url: "https://a1plus.am/hy/article/506036" },
    ],
  },
  {
    id: "sos-martirosyan-bronze",
    date: "2026-08-18",
    kind: "championship",
    title: {
      en: "Bronze for Sos Martirosyan",
      hy: "Բրոնզ Սոս Մարտիրոսյանի համար",
      ru: "Бронза Соса Мартиросяна",
    },
    summary: {
      en: "Sos won three fights and took bronze at the IMMAF Youth World Championships in the Youth D 52 kg division. He trains at Lion Heart with coaches Mkhitar Barseghyan and Tigran Petrosyan.",
      hy: "Սոսը հաղթեց երեք մենամարտում և բրոնզե մեդալ նվաճեց IMMAF-\u2060ի պատանիների աշխարհի առաջնությունում՝ Youth D, 52 կգ։ Նա մարզվում է Lion Heart-\u2060ում՝ մարզիչներ Մխիթար Բարսեղյանի և Տիգրան Պետրոսյանի մոտ։",
      ru: "Сос выиграл три боя и взял бронзу юношеского чемпионата мира IMMAF в категории Youth D до 52 кг. Он тренируется в Lion Heart у Мхитара Барсегяна и Тиграна Петросяна.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-08-sos-bronze.jpg",
      alt: {
        en: "Sos Martirosyan with his bronze medal and the Armenian flag, next to IMMAF President Kerrith Brown",
        hy: "Սոս Մարտիրոսյանը բրոնզե մեդալով և Հայաստանի դրոշով՝ IMMAF-\u2060ի նախագահ Քերիթ Բրաունի կողքին",
        ru: "Сос Мартиросян с бронзовой медалью и флагом Армении рядом с президентом IMMAF Керритом Брауном",
      },
      credit: "MMA Federation of Armenia / Instagram",
      position: "50% 35%",
    },
    links: [
      {
        label: {
          en: "MMA Federation of Armenia",
          hy: "Հայաստանի MMA ֆեդերացիա",
          ru: "Федерация MMA Армении",
        },
        url: "https://www.instagram.com/p/DcL9fcCl2k_/",
      },
    ],
  },
  {
    id: "rafik-aleksanyan-european-bronze",
    date: "2026-02-10",
    kind: "championship",
    title: {
      en: "A European medal for Rafik Aleksanyan",
      hy: "Եվրոպայի առաջնության մեդալ Ռաֆիկ Ալեքսանյանի համար",
      ru: "Медаль чемпионата Европы у Рафика Алексаняна",
    },
    summary: {
      en: "In Belgrade, Rafik beat Azerbaijan's Kanan Aliyev 30–27 in the quarterfinal of the IMMAF European Championships, which guaranteed a medal. He went on to take bronze in the Youth A 61.2 kg division.",
      hy: "Բելգրադում Ռաֆիկը IMMAF-\u2060ի Եվրոպայի առաջնության քառորդ եզրափակչում 30:27 հաշվով հաղթեց ադրբեջանցի Քանան Ալիևին՝ ապահովելով մեդալ։ Արդյունքում նա բրոնզե մեդալ նվաճեց Youth A, 61,2 կգ քաշային կարգում։",
      ru: "В Белграде Рафик победил азербайджанца Канана Алиева 30:27 в четвертьфинале чемпионата Европы IMMAF, что гарантировало медаль. В итоге он взял бронзу в категории Youth A до 61,2 кг.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-02-rafik-belgrade.jpg",
      alt: {
        en: "Rafik Aleksanyan in the gym, in Sportball24's announcement of his semifinal",
        hy: "Ռաֆիկ Ալեքսանյանը դահլիճում՝ Sportball24-\u2060ի կիսաեզրափակչի մասին հայտարարության մեջ",
        ru: "Рафик Алексанян в зале, на анонсе Sportball24 о выходе в полуфинал",
      },
      credit: "Sportball24",
      position: "50% 30%",
    },
    links: [
      {
        label: {
          en: "IMMAF event page",
          hy: "IMMAF-\u2060ի մրցաշարի էջ",
          ru: "Страница турнира IMMAF",
        },
        url: "https://immaf.org/championship/2026-immaf-european-championships/",
      },
      {
        label: "Sportball24",
        url: "https://sportball24.com/en/post/rafik-aleksanyan-v-shage-ot-finala-pobeda-v-chetvertfinale-immaf/",
      },
    ],
  },
  {
    id: "lion-heart-academy-opens",
    date: "2025-11-22",
    kind: "club",
    title: {
      en: "Lion Heart academy opens in Yerevan",
      hy: "Երևանում բացվեց Lion Heart ակադեմիան",
      ru: "В Ереване открылась академия Lion Heart",
    },
    summary: {
      en: "The new MMA academy opened under head coach Armen Gulyan. Its coaching team includes Tigran Petrosyan for MMA and conditioning.",
      hy: "Նոր MMA ակադեմիան բացվեց գլխավոր մարզիչ Արմեն Գուլյանի ղեկավարությամբ։ Մարզչական կազմում է Տիգրան Պետրոսյանը՝ MMA և ֆիզիկական պատրաստություն։",
      ru: "Новая академия MMA открылась под руководством главного тренера Армена Гуляна. В тренерский состав вошёл Тигран Петросян — MMA и физподготовка.",
    },
    media: {
      type: "image",
      src: "/images/news/2025-11-lion-heart-opening.webp",
      alt: {
        en: "The Lion Heart opening press conference in front of the club's logo",
        hy: "Lion Heart-\u2060ի բացման մամուլի ասուլիսը ակումբի լոգոյի ֆոնին",
        ru: "Пресс-конференция в честь открытия Lion Heart на фоне логотипа клуба",
      },
      credit: "Sportaran",
      position: null,
    },
    links: [
      {
        label: "Sportaran",
        url: "https://www.sportaran.com/en/post/v-erevane-otkrylas-mezhdunarodnaya-akademiya-mma-lvinoe-serdce",
      },
    ],
  },
  {
    id: "armenian-fighters-suren-petrosyan",
    date: "2026-10-21",
    kind: "interview",
    title: {
      en: "Armenian Fighters: visiting Suren Petrosyan",
      hy: "Armenian Fighters. Սուրեն Պետրոսյանի հյուրընկալությամբ",
      ru: "Armenian Fighters: в гостях у Сурена Петросяна",
    },
    summary: {
      en: "The hour-long debut episode of the Armenian Fighters vlog. Over beef steaks at All Seasons Sevan on Lake Sevan, Lion Heart coaches Mkhitar Barseghyan and Tigran Petrosyan talk with MMA fighter Suren Petrosyan. Suren shares what Armenian MMA needs to reach the next level: years of steady work, training camps with strong sparring partners from abroad, and sponsors who back young fighters.",
      hy: "Armenian Fighters վլոգի առաջին՝ մեկժամյա թողարկումը։ Սևանա լճի ափին՝ All Seasons Sevan-\u2060ում, սթեյքեր պատրաստելով, Lion Heart-\u2060ի մարզիչներ Մխիթար Բարսեղյանը և Տիգրան Պետրոսյանը զրուցում են MMA մարտիկ Սուրեն Պետրոսյանի հետ։ Սուրենը պատմում է, թե ինչ է պետք հայկական MMA-\u2060ին նոր մակարդակի հասնելու համար՝ տարիների համառ աշխատանք, հավաքներ արտասահմանցի ուժեղ սպարինգ-գործընկերների հետ և հովանավորներ, որոնք կաջակցեն երիտասարդ մարտիկներին։",
      ru: "Дебютный часовой выпуск влога Armenian Fighters. За приготовлением стейков в All Seasons Sevan на берегу Севана тренеры Lion Heart Мхитар Барсегян и Тигран Петросян беседуют с бойцом MMA Суреном Петросяном. Сурен рассказывает, что нужно армянскому MMA, чтобы выйти на новый уровень: годы упорной работы, сборы с сильными спарринг-партнёрами из-за рубежа и спонсоры, которые поддерживают молодых бойцов.",
    },
    media: { type: "youtube", id: "xr253o72jTM" },
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=xr253o72jTM" },
      {
        label: { en: "Announcement", hy: "Հայտարարություն", ru: "Анонс" },
        url: "https://www.instagram.com/_armenian_fighters_/reel/DeYkEAItsAa/",
      },
    ],
  },
  {
    id: "armat-fs-orion-fc",
    date: "2026-09-26",
    kind: "event",
    title: {
      en: "Judging at ARMAT FS × ORION FC",
      hy: "Դատավոր՝ ARMAT FS × ORION FC-\u2060ում",
      ru: "Судейство на ARMAT FS × ORION FC",
    },
    summary: {
      en: "Tigran worked as a judge at the international fight night at Tashir Arena in Yerevan. Armenian fighters won 11 of 12 bouts, and in the main event Suren Petrosyan beat Russia's Danil Volkov. Lion Heart's vlog shows the night behind the scenes.",
      hy: "Տիգրանը դատավոր էր Երևանի «Տաշիր Արենայում» կայացած միջազգային մարտական երեկոյին։ Հայ մարտիկները հաղթեցին 12 մենամարտից 11-\u2060ում, իսկ գլխավոր մենամարտում Սուրեն Պետրոսյանը հաղթեց ռուսաստանցի Դանիլ Վոլկովին։ Lion Heart-\u2060ի վլոգը ցույց է տալիս երեկոն կուլիսներից։",
      ru: "Тигран работал судьёй на международном вечере боёв на «Ташир Арене» в Ереване. Армянские бойцы выиграли 11 боёв из 12, а в главном бою Сурен Петросян победил россиянина Данила Волкова. Влог Lion Heart показывает вечер из-за кулис.",
    },
    media: { type: "youtube", id: "P11ik76mY4I" },
    links: [
      {
        label: "Sportaran",
        url: "https://sportaran.com/ru/post/armyanskie-bojcy-oderzhali-11-pobed-v-12-poedinkah-na-turnire-armat-fs-x-orion-fc-v-erevane/",
      },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=P11ik76mY4I" },
    ],
  },
  {
    id: "21tv-after-the-world-championships",
    date: "2026-09-09",
    kind: "interview",
    title: {
      en: "On 21TV after the world championships",
      hy: "21TV-\u2060ի եթերում՝ աշխարհի առաջնությունից հետո",
      ru: "На 21TV после чемпионата мира",
    },
    summary: {
      en: "Tigran joined Armenia's MMA federation president Garegin Aghabalyan and coach Mkhitar Barseghyan on 21TV's talk show “Dinayi Het” (With Dina) to talk about the IMMAF Youth World Championships. Later in the show, Rafik Aleksanyan and Sos Martirosyan joined them.",
      hy: "Տիգրանը Հայաստանի MMA ֆեդերացիայի նախագահ Գարեգին Աղաբալյանի և մարզիչ Մխիթար Բարսեղյանի հետ «Դինայի հետ» հաղորդման ստուդիայում խոսեց IMMAF-\u2060ի պատանիների աշխարհի առաջնության մասին։ Հաղորդման ընթացքում նրանց միացան Ռաֆիկ Ալեքսանյանը և Սոս Մարտիրոսյանը։",
      ru: "Тигран вместе с президентом федерации MMA Армении Гарегином Агабаляном и тренером Мхитаром Барсегяном рассказал в программе 21TV «С Диной» («Դինայի հետ») о юношеском чемпионате мира IMMAF. Позже к ним присоединились Рафик Алексанян и Сос Мартиросян.",
    },
    media: { type: "youtube", id: "l9dJjymm1Kw" },
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=l9dJjymm1Kw" },
    ],
  },
  {
    id: "armenia-open-2026",
    date: "2026-06-24",
    kind: "event",
    title: {
      en: "Lion Heart wins Armenia Open 2026",
      hy: "Lion Heart-\u2060ը հաղթեց Armenia Open 2026-\u2060ում",
      ru: "Lion Heart выиграл Armenia Open 2026",
    },
    summary: {
      en: "More than 200 young athletes competed in Vanadzor at the tournament in memory of Gerasim Manukyan. Lion Heart took the team title with 12 gold, 10 silver and 21 bronze medals.",
      hy: "Վանաձորում Գերասիմ Մանուկյանի հիշատակին նվիրված մրցաշարին մասնակցեց ավելի քան 200 երիտասարդ մարզիկ։ Lion Heart-\u2060ը զբաղեցրեց թիմային առաջին տեղը՝ 12 ոսկե, 10 արծաթե և 21 բրոնզե մեդալով։",
      ru: "В Ванадзоре на турнире памяти Герасима Манукяна выступили более 200 юных спортсменов. Lion Heart занял первое место в командном зачёте: 12 золотых, 10 серебряных и 21 бронзовая медаль.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-06-armenia-open.webp",
      alt: {
        en: "Two young fighters grappling in the cage at Armenia Open",
        hy: "Երկու երիտասարդ մարտիկ վանդակում Armenia Open-\u2060ում",
        ru: "Двое юных бойцов в борьбе в клетке на Armenia Open",
      },
      credit: "Sportaran",
      position: "50% 35%",
    },
    links: [
      {
        label: "Sportaran",
        url: "https://sportaran.com/ru/post/v-vanadzore-proshel-detsko-yunosheskij-turnir-armenia-open-2026/",
      },
    ],
  },
  {
    id: "lion-heart-first-six-months",
    date: "2026-05-24",
    kind: "club",
    title: {
      en: "Lion Heart's first six months",
      hy: "Lion Heart-\u2060ի առաջին վեց ամիսը",
      ru: "Первые полгода Lion Heart",
    },
    summary: {
      en: "Head coach Armen Gulyan summed up the academy's first half-year: more than 500 athletes, 21 wins in 26 professional MMA fights, and 57 gold, 27 silver and 29 bronze medals at amateur level.",
      hy: "Գլխավոր մարզիչ Արմեն Գուլյանը ամփոփեց ակադեմիայի առաջին կես տարին. ավելի քան 500 մարզիկ, 26 պրոֆեսիոնալ MMA մենամարտում 21 հաղթանակ, սիրողական մակարդակում՝ 57 ոսկե, 27 արծաթե և 29 բրոնզե մեդալ։",
      ru: "Главный тренер Армен Гулян подвёл итоги первых шести месяцев академии: более 500 спортсменов, 21 победа в 26 профессиональных боях по правилам MMA и 57 золотых, 27 серебряных и 29 бронзовых медалей на любительском уровне.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-05-lion-heart-six-months.webp",
      alt: {
        en: "The Lion Heart team together in the academy's gym",
        hy: "Lion Heart-\u2060ի թիմը ակադեմիայի դահլիճում",
        ru: "Команда Lion Heart в зале академии",
      },
      credit: "Sportaran",
      position: "50% 60%",
    },
    links: [
      {
        label: "Sportaran",
        url: "https://sportaran.com/ru/post/armen-gulyan-podvel-itogi-pervyh-shesti-mesyacev-raboty-akademii-lvinoe-serdce-v-erevane/",
      },
    ],
  },
  {
    id: "armat-fight-show-1",
    date: "2026-04-19",
    kind: "event",
    title: {
      en: "The first Armat Fight Show",
      hy: "Առաջին Armat Fight Show-\u2060ն",
      ru: "Первый Armat Fight Show",
    },
    summary: {
      en: "Lion Heart organised the first Armat Fight Show at Tashir Arena in Yerevan. Suren Petrosyan won by TKO in the second round.",
      hy: "Lion Heart-\u2060ը կազմակերպեց առաջին Armat Fight Show մրցաշարը Երևանի «Տաշիր Արենայում»։ Սուրեն Պետրոսյանը հաղթեց տեխնիկական նոկաուտով՝ երկրորդ ռաունդում։",
      ru: "Lion Heart организовал первый турнир Armat Fight Show на «Ташир Арене» в Ереване. Сурен Петросян победил техническим нокаутом во втором раунде.",
    },
    media: {
      type: "image",
      src: "/images/news/2026-04-afs-1.webp",
      alt: {
        en: "The AFS 1 fight poster",
        hy: "AFS 1 մրցաշարի պաստառը",
        ru: "Постер турнира AFS 1",
      },
      credit: "Sportaran",
      position: "50% 20%",
    },
    links: [
      {
        label: { en: "Results", hy: "Արդյունքներ", ru: "Результаты" },
        url: "https://sportaran.com/ru/post/v-erevane-sostoyalsya-pervyj-turnir-armat-fight-show-vse-rezultaty/",
      },
      {
        label: { en: "Fight card", hy: "Մրցաշարի քարտ", ru: "Кард турнира" },
        url: "https://sportaran.com/ru/post/pervyj-turnir-armat-fc-projdet-v-erevane-obyavlen-glavnyj-kard/",
      },
    ],
  },
  {
    id: "suren-petrosyan-joins-lion-heart",
    date: "2026-03-24",
    kind: "club",
    title: {
      en: "Suren Petrosyan starts training at Lion Heart",
      hy: "Սուրեն Պետրոսյանը սկսել է մարզվել Lion Heart-\u2060ում",
      ru: "Сурен Петросян начал подготовку в Lion Heart",
    },
    summary: {
      en: "Professional fighter Suren Petrosyan began preparing for his return to the cage at the Lion Heart academy, alongside Armenian MMA legend Davit Khachatryan and the rest of the team.",
      hy: "Պրոֆեսիոնալ մարտիկ Սուրեն Պետրոսյանը սկսել է պատրաստվել օկտագոն վերադարձին Lion Heart ակադեմիայում՝ հայկական MMA-\u2060ի լեգենդ Դավիթ Խաչատրյանի և թիմի մյուս մարզիկների հետ։",
      ru: "Профессиональный боец Сурен Петросян начал готовиться к возвращению в клетку в академии Lion Heart вместе с легендой армянского MMA Давидом Хачатряном и другими спортсменами команды.",
    },
    media: null,
    links: [
      {
        label: "Lion Heart / Telegram",
        url: "https://t.me/fightclub_lionheart/813",
      },
    ],
  },
  {
    id: "lion-heart-on-21tv",
    date: "2026-01-20",
    kind: "video",
    title: {
      en: "Lion Heart on 21TV",
      hy: "Lion Heart-\u2060ը 21TV-\u2060ի եթերում",
      ru: "Lion Heart на 21TV",
    },
    summary: {
      en: "21TV's evening show visited the new Lion Heart academy. On air, Tigran is introduced as both an athlete and a coach of the club.",
      hy: "21TV-\u2060ի երեկոյան հաղորդումը այցելեց նոր Lion Heart ակադեմիա։ Եթերում Տիգրանին ներկայացնում են որպես ակումբի մարզիկ և մարզիչ։",
      ru: "Вечерняя программа 21TV побывала в новой академии Lion Heart. В эфире Тиграна представляют как спортсмена и тренера клуба.",
    },
    media: { type: "youtube", id: "YTmrGc3lBno" },
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=YTmrGc3lBno" },
    ],
  },
];
