import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SponsorPage } from "@/components/SponsorPage";
import { isPrefixedLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/become-a-sponsor">): Promise<Metadata> {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return buildMetadata(lang, "sponsor");
}

export default async function Page({
  params,
}: PageProps<"/[lang]/become-a-sponsor">) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <SponsorPage locale={lang} />;
}
