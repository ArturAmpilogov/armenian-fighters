import type { Metadata } from "next";
import { NewsPage } from "@/components/NewsPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("en", "news");

export default function Page() {
  return <NewsPage locale="en" />;
}
