import { getMessages } from "@/content/messages";
import type { Locale } from "@/lib/i18n";
import { PageShell } from "./PageShell";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Costs } from "./sections/Costs";
import { Hero } from "./sections/Hero";
import { Results } from "./sections/Results";
import { Support } from "./sections/Support";
import { Why } from "./sections/Why";

export function HomePage({ locale }: { locale: Locale }) {
  const props = { locale, t: getMessages(locale) };

  return (
    <PageShell locale={locale} page="home">
      <Hero {...props} />
      <Results {...props} />
      <About {...props} />
      <Why {...props} />
      <Costs {...props} />
      <Support {...props} />
      <Contact {...props} />
    </PageShell>
  );
}
