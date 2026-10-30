import type { Metadata } from "next";
import { SponsorPage } from "@/components/SponsorPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("en", "sponsor");

export default function Page() {
  return <SponsorPage locale="en" />;
}
