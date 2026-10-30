import type { Metadata } from "next";
import { SponsorsPage } from "@/components/SponsorsPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("en", "sponsors");

export default function Page() {
  return <SponsorsPage locale="en" />;
}
