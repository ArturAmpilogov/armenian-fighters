import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("en", "privacy");

export default function Page() {
  return <LegalPage locale="en" page="privacy" />;
}
