import type { AboutService } from '../data/about';
import type { Localised } from '../data/roadmap';
import { useLanguage } from '../lib/i18n';

/**
 * The five service domains, introduced by their heading and listed as a term
 * and description list. Each service carries its accent as a left-hand rule
 * only, never behind text, and links to that service's own public roadmap
 * where one exists.
 */
export function AboutServices({
  heading,
  services,
}: {
  heading: Localised;
  services: AboutService[];
}) {
  const { tr } = useLanguage();
  const headingId = 'about-services-heading';

  return (
    <section aria-labelledby={headingId}>
      <h3 id={headingId} className="text-lg font-bold text-heading">
        {tr(heading)}
      </h3>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-card border border-l-4 border-border bg-surface-subtle p-5"
            style={{ borderLeftColor: service.accent }}
          >
            <dt className="font-bold text-heading">
              {service.href ? (
                <a
                  href={service.href}
                  className="underline hover:no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {tr(service.name)}
                </a>
              ) : (
                tr(service.name)
              )}
            </dt>
            <dd className="mt-2 leading-relaxed text-ink-900">
              {tr(service.description)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
