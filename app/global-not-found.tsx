import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { localeNames, localePath, locales } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Page not found | Armenian Fighters",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontVariables} antialiased`}>
      <body>
        <main className="page-container flex min-h-svh flex-col justify-center py-16">
          <h1 className="poster-title poster-title-xl">404</h1>
          <p className="mt-6 max-w-[34rem] text-xl">
            This page doesn&apos;t exist. Open the home page in your language:
          </p>
          <ul className="mt-8 flex flex-wrap gap-4">
            {locales.map((locale) => (
              <li key={locale}>
                <a
                  href={localePath(locale)}
                  hrefLang={locale}
                  lang={locale}
                  className="btn btn-secondary"
                >
                  {localeNames[locale].full}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
