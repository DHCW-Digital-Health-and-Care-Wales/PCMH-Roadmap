import type { RoadmapItem } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';
import { SOURCE_LABELS, STATUS_LABELS } from '../lib/roadmap-helpers';

/**
 * A single roadmap item (docs/BUILD_BRIEF.md Section 4). Shows the title,
 * summary, a text status label, the delivery phase where known, the outcome we
 * are aiming for, any capability detail, related services and which roadmap the
 * item came from. Never shows a date: the roadmap communicates priority and
 * confidence, not committed dates.
 */
export function RoadmapCard({ item }: { item: RoadmapItem }) {
  const { lang, tr } = useLanguage();
  const cy = lang === 'cy';
  const sourceLabel = tr(SOURCE_LABELS[item.source]);

  return (
    <article className="rounded-card border border-border bg-surface p-4 shadow-sm">
      <h4 className="font-bold text-heading">{tr(item.title)}</h4>
      <p className="mt-2 text-sm leading-relaxed text-ink-900">
        {tr(item.summary)}
      </p>

      {item.outcome ? (
        <p className="mt-3 text-sm leading-relaxed text-ink-900">
          <span className="font-semibold">
            {cy ? 'Canlyniad' : 'Outcome'}:{' '}
          </span>
          {item.outcome}
        </p>
      ) : null}

      {item.metric ? (
        <p className="mt-2 text-sm leading-relaxed text-ink-900">
          <span className="font-semibold">
            {cy ? 'Mesur' : 'How we measure it'}:{' '}
          </span>
          {item.metric}
        </p>
      ) : null}

      {item.capabilities && item.capabilities.items.length > 0 ? (
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-700">
            {item.capabilities.label}
          </p>
          <ul className="mt-1 space-y-0.5 text-sm text-ink-900">
            {item.capabilities.items.map((capability, index) => (
              <li
                key={`${item.id}-capability-${index}`}
                className="whitespace-pre-wrap"
              >
                {capability}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-border-strong bg-surface-subtle px-2.5 py-0.5 text-xs font-medium text-ink-700">
          {tr(STATUS_LABELS[item.status])}
        </span>
        {item.phase ? (
          <span className="inline-flex items-center rounded-full border border-border-strong bg-surface-subtle px-2.5 py-0.5 text-xs font-medium text-ink-700">
            <span className="sr-only">{cy ? 'Cam' : 'Phase'}: </span>
            {item.phase}
          </span>
        ) : null}
        {item.services?.map((service) => (
          <span
            key={service}
            className="inline-flex items-center rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-700"
          >
            {service}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-ink-500">
        {cy ? 'O drywydd' : 'From the'} {sourceLabel} {cy ? '' : 'roadmap'}
        {item.sourceHref ? (
          <>
            {' '}
            <a
              href={item.sourceHref}
              className="underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              {cy ? 'gweld y trywydd' : 'view roadmap'}
            </a>
          </>
        ) : null}
      </p>
    </article>
  );
}
