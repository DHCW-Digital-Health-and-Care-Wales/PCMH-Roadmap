import type { MissionBand } from '../data/about';
import { useLanguage } from '../lib/i18n';

/**
 * The full-width mission strip at the top of the block: the DHCW mission shown
 * as a labelled band. The label reads above the statement so the strip makes
 * sense in text alone; the dark band is decorative and carries no meaning.
 */
export function AboutMission({ mission }: { mission: MissionBand }) {
  const { tr } = useLanguage();

  return (
    <div className="rounded-card bg-heading px-6 py-8 text-white">
      <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
        {tr(mission.label)}
      </p>
      <p className="mt-2 text-2xl font-bold">{tr(mission.statement)}</p>
    </div>
  );
}
