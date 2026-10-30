import { RootDocument } from "@/components/RootDocument";

// English is the main language and is served at `/`, without a prefix.
// Each page sets its own metadata.

export default function EnglishLayout({ children }: LayoutProps<"/">) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
