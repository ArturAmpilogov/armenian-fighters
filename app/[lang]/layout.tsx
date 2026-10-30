import { notFound } from "next/navigation";
import { RootDocument } from "@/components/RootDocument";
import { isPrefixedLocale, prefixedLocales } from "@/lib/i18n";

// Armenian and Russian, served at `/hy/` and `/ru/`. Any other prefix is a 404.
// Each page sets its own metadata.

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <RootDocument locale={lang}>{children}</RootDocument>;
}
