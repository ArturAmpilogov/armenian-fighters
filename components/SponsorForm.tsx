"use client";

import { Fragment, useId, useState, type ReactNode } from "react";
import type { Messages } from "@/content/messages";
import { format, formatAmount } from "@/lib/format";
import type { Locale } from "@/lib/i18n";

type Frequency = "once" | "monthly";

const legendClass = "font-display text-2xl font-bold [font-stretch:70%]";

const inputClass =
  "mt-2 block w-full min-w-0 border-2 border-ink bg-white px-4 py-3 text-lg disabled:cursor-not-allowed disabled:opacity-60";

/** Replaces `{name}` placeholders with elements, e.g. links inside a sentence. */
function withNodes(template: string, nodes: Record<string, ReactNode>) {
  return template.split(/(\{\w+\})/).map((part, i) => {
    const key = part.slice(1, -1);
    return (
      <Fragment key={i}>
        {part.startsWith("{") && key in nodes ? nodes[key] : part}
      </Fragment>
    );
  });
}

/** One radio button drawn as a big tile. */
function Choice({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="flex min-h-14 cursor-pointer items-center justify-center border-2 border-ink bg-white px-3 text-center font-display text-xl font-bold [font-stretch:70%] transition-colors peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-corner-red peer-enabled:hover:border-corner-red peer-disabled:cursor-not-allowed peer-disabled:opacity-60">
        {children}
      </span>
    </label>
  );
}

// The sponsor's choices, sent to `endpoint`, which starts the payment on
// Ameriabank's page. Without an endpoint the form is shown but disabled.
export function SponsorForm({
  locale,
  labels,
  money,
  amounts,
  min,
  max,
  endpoint,
  termsHref,
  privacyHref,
}: {
  locale: Locale;
  labels: Messages["sponsor"]["form"];
  /** "{amount} AMD" in this language. */
  money: string;
  amounts: number[];
  min: number;
  max: number;
  endpoint: string | null;
  termsHref: string;
  privacyHref: string;
}) {
  const [frequency, setFrequency] = useState<Frequency>("once");
  // Starts on the middle amount.
  const [preset, setPreset] = useState<number | "other">(
    amounts[Math.floor(amounts.length / 2)],
  );
  const [other, setOther] = useState("");
  const ids = useId();

  const amount = preset === "other" ? Number(other) : preset;
  const valid = Number.isInteger(amount) && amount >= min && amount <= max;
  const amountLabel = (value: number) =>
    format(money, { amount: formatAmount(value, locale) });
  const summary = valid
    ? format(
        frequency === "monthly" ? labels.summaryMonthly : labels.summaryOnce,
        { amount: amountLabel(amount) },
      )
    : "";
  const link = (href: string, text: string) => (
    <a
      href={href}
      className="text-link font-semibold"
      rel="noopener"
      target="_blank"
    >
      {text}
    </a>
  );

  return (
    <form action={endpoint ?? undefined} method="post" className="mt-8">
      <fieldset disabled={endpoint === null} className="min-w-0 space-y-8">
        <fieldset className="min-w-0">
          <legend className={legendClass}>{labels.frequency}</legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {(["once", "monthly"] as const).map((value) => (
              <Choice
                key={value}
                name="frequency"
                value={value}
                checked={frequency === value}
                onChange={() => setFrequency(value)}
              >
                {labels[value]}
              </Choice>
            ))}
          </div>
        </fieldset>

        <fieldset className="min-w-0">
          <legend className={legendClass}>{labels.amount}</legend>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {amounts.map((value) => (
              <Choice
                key={value}
                name="preset"
                value={String(value)}
                checked={preset === value}
                onChange={() => setPreset(value)}
              >
                {amountLabel(value)}
              </Choice>
            ))}
            <Choice
              name="preset"
              value="other"
              checked={preset === "other"}
              onChange={() => setPreset("other")}
            >
              {labels.other}
            </Choice>
          </div>
          {preset === "other" ? (
            <label className="mt-5 block">
              <span className="text-lg font-semibold">{labels.other}</span>
              <input
                type="number"
                inputMode="numeric"
                min={min}
                max={max}
                step={1}
                required
                value={other}
                onChange={(event) => setOther(event.target.value)}
                aria-describedby={`${ids}-other-hint`}
                className={inputClass}
              />
              <span
                id={`${ids}-other-hint`}
                className="mt-2 block text-base text-ink-soft"
              >
                {format(labels.otherHint, {
                  min: amountLabel(min),
                  max: amountLabel(max),
                })}
              </span>
            </label>
          ) : null}
          <input type="hidden" name="amount" value={valid ? amount : ""} />
        </fieldset>

        <label className="block">
          <span className="text-lg font-semibold">{labels.name}</span>
          <input
            name="name"
            autoComplete="name"
            maxLength={60}
            aria-describedby={`${ids}-name-hint`}
            className={inputClass}
          />
          <span
            id={`${ids}-name-hint`}
            className="mt-2 block text-base text-ink-soft"
          >
            {labels.nameHint}
          </span>
        </label>

        <label className="block">
          <span className="text-lg font-semibold">{labels.email}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </label>

        <div className="space-y-5 border-t-2 border-ink/15 pt-6">
          <p
            aria-live="polite"
            className="min-h-8 font-display text-2xl font-bold [font-stretch:70%]"
          >
            {summary}
          </p>
          <label className="flex gap-3">
            <input
              type="checkbox"
              name="agree"
              required
              className="mt-1 size-5 shrink-0 accent-ink"
            />
            <span>
              {withNodes(labels.agree, {
                terms: link(termsHref, labels.termsLink),
                privacy: link(privacyHref, labels.privacyLink),
              })}
            </span>
          </label>
          {frequency === "monthly" ? (
            <label className="flex gap-3">
              <input
                type="checkbox"
                name="agreeMonthly"
                required
                className="mt-1 size-5 shrink-0 accent-ink"
              />
              <span>{labels.agreeMonthly}</span>
            </label>
          ) : null}
          <button
            type="submit"
            className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            {valid
              ? format(labels.pay, { amount: amountLabel(amount) })
              : labels.payPlain}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
