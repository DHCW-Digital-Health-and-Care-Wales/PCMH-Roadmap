import type { RoadmapContext } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';

/**
 * Orientation block for the top of the page (after the title, before the
 * horizon explainer). It carries the reader from the DHCW mission, through our
 * principles, purpose and vision, into what each of our five service domains
 * does, and finishes with the NHS Wales App. All copy comes from
 * src/data/roadmap.ts; nothing is hard-coded here. Sub-sections use a term and
 * description list so titles read clearly without adding heading levels, and
 * colour is never the only thing that carries meaning.
 */
export function ContextSection({ context }: { context: RoadmapContext }) {
  const { tr } = useLanguage();
  const headingId = 'context-heading';

  return (
    <section
      id="context"
      aria-labelledby={headingId}
      className="scroll-mt-28 border-b border-border bg-surface px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-2xl font-bold text-heading">
          {tr(context.heading)}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-700">
          {tr(context.intro)}
        </p>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-heading">
            {tr(context.mission.heading)}
          </h3>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-900">
            {tr(context.mission.body)}
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-heading">
            {tr(context.principles.heading)}
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-900">
            {tr(context.principles.intro)}
          </p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {context.principles.items.map((principle) => (
              <div
                key={tr(principle.title)}
                className="rounded-card border border-border bg-surface-subtle p-5"
              >
                <dt className="font-bold text-heading">
                  {tr(principle.title)}
                </dt>
                <dd className="mt-2 leading-relaxed text-ink-900">
                  {tr(principle.body)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-heading">
            {tr(context.purposeVision.heading)}
          </h3>
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-card border border-border bg-surface-subtle p-5">
              <dt className="text-sm font-semibold uppercase tracking-wide text-ink-700">
                {tr(context.purposeVision.purposeLabel)}
              </dt>
              <dd className="mt-2 text-lg leading-relaxed text-ink-900">
                {tr(context.purposeVision.purpose)}
              </dd>
            </div>
            <div className="rounded-card border border-border bg-surface-subtle p-5">
              <dt className="text-sm font-semibold uppercase tracking-wide text-ink-700">
                {tr(context.purposeVision.visionLabel)}
              </dt>
              <dd className="mt-2 text-lg leading-relaxed text-ink-900">
                {tr(context.purposeVision.vision)}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-heading">
            {tr(context.serviceDomains.heading)}
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-900">
            {tr(context.serviceDomains.intro)}
          </p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {context.serviceDomains.items.map((domain) => (
              <div
                key={domain.id}
                className="rounded-card border border-border bg-surface-subtle p-5"
              >
                <dt className="font-bold text-heading">{tr(domain.name)}</dt>
                <dd className="mt-2 leading-relaxed text-ink-900">
                  {tr(domain.description)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-bold text-heading">
            {tr(context.nhsWalesApp.heading)}
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-900">
            {tr(context.nhsWalesApp.body)}
          </p>
        </div>
      </div>
    </section>
  );
}
