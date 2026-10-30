import {
  Noto_Sans_Armenian,
  Sofia_Sans,
  Sofia_Sans_Extra_Condensed,
} from "next/font/google";

// Sofia Sans covers Latin and Cyrillic. Armenian letters fall through to
// Noto Sans Armenian, whose width axis lets headings match the condensed face.

export const sofiaSans = Sofia_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sofia",
  display: "swap",
});

export const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sofia-condensed",
  display: "swap",
});

export const notoSansArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  axes: ["wdth"],
  variable: "--font-armenian",
  display: "swap",
});

export const fontVariables = [
  sofiaSans.variable,
  sofiaSansExtraCondensed.variable,
  notoSansArmenian.variable,
].join(" ");
