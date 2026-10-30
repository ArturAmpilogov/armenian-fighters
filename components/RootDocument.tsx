import type { ReactNode } from "react";
import "@/app/globals.css";
import { fontVariables } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

/** The `<html>` shell shared by the English and the prefixed-language root layouts. */
export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale} className={`${fontVariables} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
