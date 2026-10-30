import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SponsorsPage } from "@/components/SponsorsPage";
import { isPrefixedLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/sponsors">): Promise<Metadata> {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return buildMetadata(lang, "sponsors");
}

export default async function Page({ params }: PageProps<"/[lang]/sponsors">) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <SponsorsPage locale={lang} />;
}
