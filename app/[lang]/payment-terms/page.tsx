import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import { isPrefixedLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/payment-terms">): Promise<Metadata> {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return buildMetadata(lang, "terms");
}

export default async function Page({
  params,
}: PageProps<"/[lang]/payment-terms">) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <LegalPage locale={lang} page="terms" />;
}
