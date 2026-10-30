import type { Localized, Locale } from "@/lib/i18n";
import { en, type Messages } from "./en";
import { hy } from "./hy";
import { ru } from "./ru";

const messages: Localized<Messages> = { en, hy, ru };

export type { Messages };
export { format } from "@/lib/format";

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
