/**
 * Presentation helpers for the roadmap (docs/BUILD_BRIEF.md Sections 4 and 7).
 *
 * Grouping logic lives here so components stay small, and status is given a
 * language-keyed text label so meaning is never carried by colour alone.
 */
import type {
  Horizon,
  ItemStatus,
  Localised,
  Roadmap,
  RoadmapItem,
  RoadmapSource,
} from '../data/roadmap';

/** Items in a category for a given horizon, preserving source order. */
export function itemsFor(
  roadmap: Roadmap,
  categoryId: string,
  horizon: Horizon,
): RoadmapItem[] {
  return roadmap.items.filter(
    (item) => item.categoryId === categoryId && item.horizon === horizon,
  );
}

/** Human-readable, language-keyed label for an item status. */
export const STATUS_LABELS: Record<ItemStatus, Localised> = {
  exploring: { cy: '', en: 'Exploring' },
  'in-progress': { cy: '', en: 'In progress' },
  shipped: { cy: '', en: 'Shipped' },
};

/**
 * Human-readable, language-keyed label for an item's originating roadmap. Used
 * to show where an imported item came from. English strings match the source
 * names used on the sibling roadmaps verbatim.
 */
export const SOURCE_LABELS: Record<RoadmapSource, Localised> = {
  vaccines: { cy: '', en: 'Vaccines' },
  gms: { cy: '', en: 'General Medical Services' },
  'choose-pharmacy': { cy: '', en: 'Choose Pharmacy' },
  pcmh: { cy: '', en: 'PCMH' },
};

/**
 * Format an ISO date (YYYY-MM-DD) as a readable day-month-year string in the
 * active language, for example "26 June 2026". Falls back to British English
 * formatting if the locale is unavailable, and to the raw value if parsing
 * fails. Used only for "last updated"; roadmap items never show dates.
 */
export function formatDate(iso: string, lang: 'cy' | 'en'): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  const locale = lang === 'cy' ? 'cy' : 'en-GB';
  try {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }
}
