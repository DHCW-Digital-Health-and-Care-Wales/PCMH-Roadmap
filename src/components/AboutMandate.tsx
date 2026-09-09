import type { MandateBand } from '../data/about';
import { useLanguage } from '../lib/i18n';

/**
 * The statutory mandate strip: the mandate label, the planning framework it
 * sits under, and the framework's aims shown as text pills. Each aim is
 * labelled in text, so shape and colour never carry meaning on their own.
 */
export function AboutMandate({ mandate }: { mandate: MandateBand }) {
  const { tr } = useLanguage();

  return (
    <div className="rounded-card border border-border bg-surface-subtle p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-ink-700">
        {tr(mandate.label)}
      </p>
      <p className="mt-2 text-lg font-bold text-heading">
        {tr(mandate.framework)}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {mandate.aims.map((aim, index) => (
          <li
            key={`mandate-aim-${index}`}
            className="inline-flex items-center rounded-full border border-border-strong bg-surface px-3 py-1 text-sm font-medium text-ink-700"
          >
            {tr(aim)}
          </li>
        ))}
      </ul>
    </div>
  );
}
