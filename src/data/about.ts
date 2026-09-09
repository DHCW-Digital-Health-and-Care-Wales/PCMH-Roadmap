/**
 * Content for the orientation block at the top of the page (mission through to
 * services). It follows the same rules as src/data/roadmap.ts: every piece of
 * display text is language-keyed, Welsh is left as a clearly marked placeholder
 * and the UI falls back to English when a Welsh string is empty (see
 * src/lib/i18n.ts).
 *
 * This file is the content. Editing the block is an edit here, not a code
 * change, and no display text belongs in the components.
 */

import type { Localised } from './roadmap';

/** The full-width mission strip at the top of the block. */
export interface MissionBand {
  label: Localised;
  statement: Localised;
}

/** One of the three panels: principles, purpose, vision. */
export interface ContextPanel {
  id: string;
  label: Localised;
  body: Localised;
  accent: string; // brand colour, rendered as a rule and never behind text
}

/** The statutory mandate strip and the framework aims shown as pills. */
export interface MandateBand {
  label: Localised;
  framework: Localised;
  aims: Localised[];
}

/** One of the five service domains. */
export interface AboutService {
  id: string;
  name: Localised;
  description: Localised;
  accent: string;
  href?: string; // that service's own public roadmap, where one exists
}

/** The NHS Wales App panel that sits under the five services. */
export interface AppPanel {
  eyebrow: Localised;
  name: Localised;
  description: Localised;
  supportsLabel: Localised;
  supports: Localised[];
}

export interface About {
  heading: Localised;
  mission: MissionBand;
  panels: ContextPanel[];
  mandate: MandateBand;
  servicesHeading: Localised;
  services: AboutService[];
  app: AppPanel;
}

// Welsh translations are outstanding, as elsewhere in the content model.
const TODO_CY = ''; // TODO: Welsh translation

export const about: About = {
  heading: { cy: TODO_CY, en: 'What we do' },

  mission: {
    label: { cy: TODO_CY, en: 'DHCW mission' },
    statement: {
      cy: TODO_CY,
      en: 'To make digital a force for good in health and care',
    },
  },

  panels: [
    {
      id: 'principles',
      label: { cy: TODO_CY, en: 'Principles' },
      body: {
        cy: TODO_CY,
        en: 'Put people first. Simplify. Design for more data, more digital. Find more value. Learn from the past, embrace the future.',
      },
      accent: '#1B294A',
    },
    {
      id: 'purpose',
      label: { cy: TODO_CY, en: 'PCMH purpose' },
      body: {
        cy: TODO_CY,
        en: 'We design, build, procure, and run national digital products and services that strengthen general practice, pharmacy, community, mental health, child health and prevention for the people of Wales.',
      },
      accent: '#12A3C9',
    },
    {
      id: 'vision',
      label: { cy: TODO_CY, en: 'PCMH vision' },
      body: {
        cy: TODO_CY,
        en: 'Trusted national digital services across general practice, pharmacy, community, mental health, child health and prevention, empowering the people of Wales to live healthier lives.',
      },
      accent: '#325083',
    },
  ],

  mandate: {
    label: { cy: TODO_CY, en: 'Statutory mandate' },
    framework: {
      cy: TODO_CY,
      en: 'NHS Wales Planning Framework 2026 to 2029',
    },
    aims: [
      { cy: TODO_CY, en: 'Population health and prevention' },
      { cy: TODO_CY, en: 'Community by design' },
      { cy: TODO_CY, en: 'Timely access to care' },
      { cy: TODO_CY, en: 'Mental health access' },
      { cy: TODO_CY, en: 'Quality and safety' },
      { cy: TODO_CY, en: 'A healthier Wales' },
    ],
  },

  servicesHeading: { cy: TODO_CY, en: 'What we deliver' },

  services: [
    {
      id: 'vaccinations',
      name: { cy: TODO_CY, en: 'Vaccinations' },
      description: {
        cy: TODO_CY,
        en: 'We help Wales to deliver efficient, data-driven vaccination services by providing a near real-time, user-centred immunisation service that streamlines data management, enhances citizen access, and supports informed decision-making.',
      },
      accent: '#1B294A',
    },
    {
      id: 'general-medical-services',
      name: { cy: TODO_CY, en: 'General Medical Services' },
      description: {
        cy: TODO_CY,
        en: 'We help Wales to deliver effective, evidence-led general medical services by providing modern primary care platforms and migration support that protect continuity of care, equip practices with reliable digital tools, and surface the data Wales needs for contract assurance.',
      },
      accent: '#F8CA4D',
    },
    {
      id: 'pharmacy-dental-optometry',
      name: { cy: TODO_CY, en: 'Pharmacy, dental and optometry' },
      description: {
        cy: TODO_CY,
        en: 'We help Wales to deliver accessible modern digital platforms in primary care, in community pharmacy, dental and optometry that ease access for patients, support clinical workflow and aim to connect contractors into the NHS.',
      },
      accent: '#12A3C9',
    },
    {
      id: 'community-services',
      name: { cy: TODO_CY, en: 'Community services' },
      description: {
        cy: TODO_CY,
        en: 'We connect professionals to deliver more coordinated and integrated care across community and mental health services by providing connected digital records and shared infrastructure that supports safer care, building a Wales-wide picture.',
      },
      accent: '#325083',
    },
    {
      id: 'mental-health',
      name: { cy: TODO_CY, en: 'Mental health' },
      description: {
        cy: TODO_CY,
        en: 'We design and support the Mental Health data and digital strategy and delivery plan for Wales, to support policy direction, and the new Mental Health Act. This includes implementation of an electronic health record, a framework for citizen facing apps and the mental health dataset.',
      },
      accent: '#4C6272',
    },
  ],

  app: {
    eyebrow: { cy: TODO_CY, en: 'Digital front door, system-wide' },
    name: { cy: TODO_CY, en: 'NHS Wales App, our digital front door' },
    description: {
      cy: TODO_CY,
      en: 'A single trusted way for citizens to access services, information, and self-management across general practice, pharmacy, community, mental health, child health and prevention. Vaccination services as early adopter functionality from Q3 2026/27.',
    },
    supportsLabel: { cy: TODO_CY, en: 'Supports all services' },
    supports: [
      { cy: TODO_CY, en: 'Vaccinations' },
      { cy: TODO_CY, en: 'General Medical Services' },
      { cy: TODO_CY, en: 'Pharmacy, dental and optometry' },
      { cy: TODO_CY, en: 'Community services' },
      { cy: TODO_CY, en: 'Mental health' },
      { cy: TODO_CY, en: 'Secondary care' },
    ],
  },
};
