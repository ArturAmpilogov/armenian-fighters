import type { Messages } from "@/content/messages";
import { site } from "@/content/site";
import { factLabel, factRow } from "./facts";

/** Who receives card payments, as the bank requires on the site. */
export function SellerDetails({ t, id }: { t: Messages; id: string }) {
  const { merchant } = site;
  const { seller } = t;
  const rows = [
    { label: seller.name, value: merchant.name, href: null },
    { label: seller.taxId, value: merchant.taxId, href: null },
    { label: seller.address, value: merchant.address, href: null },
    {
      label: seller.phone,
      value: merchant.phone,
      href:
        merchant.phone !== null
          ? `tel:${merchant.phone.replace(/\s+/g, "")}`
          : null,
    },
    {
      label: seller.email,
      value: merchant.email,
      href: merchant.email !== null ? `mailto:${merchant.email}` : null,
    },
  ];

  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-3xl sm:text-4xl">
        {seller.title}
      </h2>
      <dl className="mt-6 border-t-[3px] border-ink">
        {rows.map((row) => (
          <div key={row.label} className={factRow}>
            <dt className={factLabel}>{row.label}</dt>
            <dd className="min-w-0 [overflow-wrap:anywhere]">
              {row.value === null ? (
                <span className="text-ink-soft">{seller.pending}</span>
              ) : row.href !== null ? (
                <a href={row.href} className="text-link font-semibold">
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
