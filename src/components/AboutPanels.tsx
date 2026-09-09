import type { ContextPanel } from '../data/about';
import { useLanguage } from '../lib/i18n';

/**
 * The three orientation panels — principles, purpose and vision — as a term
 * and description list so each reads clearly without adding heading levels.
 * Each panel carries its accent as a left-hand rule only, never behind text,
 * so colour is never the sole thing that carries meaning.
 */
export function AboutPanels({ panels }: { panels: ContextPanel[] }) {
  const { tr } = useLanguage();

  return (
    <dl className="grid gap-4 md:grid-cols-3">
      {panels.map((panel) => (
        <div
          key={panel.id}
          className="rounded-card border border-l-4 border-border bg-surface-subtle p-5"
          style={{ borderLeftColor: panel.accent }}
        >
          <dt className="text-sm font-semibold uppercase tracking-wide text-ink-700">
            {tr(panel.label)}
          </dt>
          <dd className="mt-2 leading-relaxed text-ink-900">
            {tr(panel.body)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
