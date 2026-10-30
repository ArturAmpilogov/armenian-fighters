import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsPage } from "@/components/NewsPage";
import { isPrefixedLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/news">): Promise<Metadata> {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return buildMetadata(lang, "news");
}

export default async function Page({ params }: PageProps<"/[lang]/news">) {
  const { lang } = await params;
  if (!isPrefixedLocale(lang)) notFound();
  return <NewsPage locale={lang} />;
}
