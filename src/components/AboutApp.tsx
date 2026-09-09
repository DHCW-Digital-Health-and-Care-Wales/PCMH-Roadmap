import type { AppPanel } from '../data/about';
import { useLanguage } from '../lib/i18n';

/**
 * The NHS Wales App panel beneath the five services: an eyebrow, the app name,
 * a short description, and the services it supports shown as text pills. The
 * supports label names the list in text, so meaning never rests on colour.
 */
export function AboutApp({ app }: { app: AppPanel }) {
  const { tr } = useLanguage();
  const headingId = 'about-app-heading';

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-card border border-border bg-surface-subtle p-6"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-ink-700">
        {tr(app.eyebrow)}
      </p>
      <h3 id={headingId} className="mt-2 text-xl font-bold text-heading">
        {tr(app.name)}
      </h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-ink-900">
        {tr(app.description)}
      </p>
      <p className="mt-4 text-sm font-semibold text-ink-700">
        {tr(app.supportsLabel)}
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {app.supports.map((service, index) => (
          <li
            key={`app-support-${index}`}
            className="inline-flex items-center rounded-full bg-surface-muted px-3 py-1 text-sm font-medium text-ink-700"
          >
            {tr(service)}
          </li>
        ))}
      </ul>
    </section>
  );
}
