import type { Messages } from "@/content/messages";
import type { Locale } from "@/lib/i18n";

export type SectionProps = {
  locale: Locale;
  t: Messages;
};
