import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { isPrefixedLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return buildMetadata(lang, "privacy");
}

export default async function Page({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <LegalPage locale={lang} page="privacy" />;
}
