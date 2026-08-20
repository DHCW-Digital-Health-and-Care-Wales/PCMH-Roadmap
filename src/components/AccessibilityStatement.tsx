import { useLanguage } from '../lib/i18n';

/**
 * Accessibility statement (docs/BUILD_BRIEF.md Section 9). UK public sector
 * sites need one. States the target standard, known gaps and how to report a
 * problem. Contact route is Caroline Busby and Joshua Hunt.
 */
export function AccessibilityStatement() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';
  const headingId = 'accessibility-heading';

  return (
    <section
      id="accessibility"
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-border bg-surface-subtle px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-2xl font-bold text-heading">
          {cy ? 'Datganiad hygyrchedd' : 'Accessibility statement'}
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-ink-900">
          <p>
            {cy
              ? 'Rydym am i gymaint o bobl â phosibl allu defnyddio’r trywydd hwn. Rydym yn anelu at gydymffurfio â Chanllawiau Hygyrchedd Cynnwys Gwe (WCAG) 2.2 ar lefel AA.'
              : 'We want as many people as possible to be able to use this roadmap. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.'}
          </p>
          <p>
            {cy
              ? 'Mae’r trywydd hwn yn ei gyfnod alpha ac rydym yn dal i brofi gwahanol syniadau. Efallai na fydd rhai rhannau wedi’u profi’n llawn eto. Rydym yn agored i wahanol ddulliau o ran sut rydym yn arddangos ein gwaith yn agored ac yn gwerthfawrogi eich adborth.'
              : 'This roadmap is in alpha and we are still testing different ideas. Some parts may not yet be fully tested. We are open to taking different approaches to how we visualise our work in the open and value your feedback.'}
          </p>
          <p>
            {cy
              ? 'Os oes gennych unrhyw adborth, cysylltwch â Caroline Busby a Joshua Hunt.'
              : 'If you have any feedback please contact Caroline Busby and Joshua Hunt.'}
          </p>
        </div>
      </div>
    </section>
  );
}
