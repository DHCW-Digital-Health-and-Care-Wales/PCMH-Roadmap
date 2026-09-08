/**
 * Single source of roadmap content (docs/BUILD_BRIEF.md Section 5).
 *
 * Updating the roadmap is a content edit here, not a code change. Every piece
 * of display text is language-keyed so Welsh and English are both supported.
 * Welsh values are left as clearly marked placeholders for now; the UI falls
 * back to English when a Welsh string is empty (see src/lib/i18n.ts).
 */

export type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

/**
 * Which roadmap an item originally came from. PCMH is this roadmap's own work;
 * the other three are the sibling product roadmaps whose items are imported
 * here (see docs/IMPORT_CONTENT_PACK.md).
 */
export type RoadmapSource = 'vaccines' | 'gms' | 'choose-pharmacy' | 'pcmh';

/** Every piece of display text is language-keyed. */
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string; // slug, e.g. 'access-inclusion'
  name: Localised; // formal theme name
  headline: Localised; // warm, outcome-led headline
  description: Localised;
  accent: string; // brand colour token for this theme
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  source: RoadmapSource; // which roadmap the item came from
  sourceHref?: string; // link to the originating roadmap
  phase?: string; // e.g. 'Alpha', 'Beta · Phase 1', 'Discovery'
  phaseKind?: 'discovery';
  outcome?: string; // the outcome the work is aiming for
  metric?: string; // how success is measured, where stated
  capabilities?: { label: string; items: string[] };
  services?: string[]; // e.g. ['WIS', 'Choose Pharmacy', 'CYPrIS']
  updated: string; // ISO date, e.g. '2026-06-26'
}

export interface RoadmapMeta {
  title: Localised;
  intro: Localised;
  horizonNote: Localised; // the forward-looking note
  owner: string;
  lastUpdated: string; // ISO date
  reviewNote: Localised; // how often we update it
  statusLabel: string; // 'Alpha'
}

/** One of the principles that guides how we design and deliver. */
export interface ContextPrinciple {
  title: Localised;
  body: Localised;
}

/** One of the directorate's service domains, and what it does. */
export interface ServiceDomain {
  id: string; // slug, e.g. 'general-practice'
  name: Localised;
  description: Localised;
}

/**
 * The orientation block at the top of the page. It carries the reader from the
 * DHCW mission, through our principles, purpose and vision, into what each of
 * our five service domains does, and finishes with the NHS Wales App. Every
 * string is language-keyed, so nothing is hard-coded in the component.
 */
export interface RoadmapContext {
  heading: Localised; // the section heading
  intro: Localised; // one or two sentences setting up the block
  mission: { heading: Localised; body: Localised };
  principles: {
    heading: Localised;
    intro: Localised;
    items: ContextPrinciple[];
  };
  purposeVision: {
    heading: Localised;
    purposeLabel: Localised;
    purpose: Localised;
    visionLabel: Localised;
    vision: Localised;
  };
  serviceDomains: {
    heading: Localised;
    intro: Localised;
    items: ServiceDomain[];
  };
  nhsWalesApp: { heading: Localised; body: Localised };
}

export interface Roadmap {
  meta: RoadmapMeta;
  context: RoadmapContext;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
}

// Welsh translations are outstanding. English is the working default for this
// pass; the UI falls back to English wherever a Welsh string is empty.
const TODO_CY = ''; // TODO: Welsh translation

export const roadmap: Roadmap = {
  meta: {
    title: {
      cy: TODO_CY,
      en: 'Primary, Community and Mental Health: our roadmap',
    },
    intro: {
      cy: TODO_CY,
      en: 'This roadmap shows what we are working on across primary, community and mental health care in Wales, and where we are heading. We have grouped our work under six outcomes that matter to the people we serve.',
    },
    horizonNote: {
      cy: TODO_CY,
      en: 'Now is what we are actively working on. Next is what we expect to pick up. Later is the direction we are setting. The further out the work, the more it may change as we learn. We do not put dates on this roadmap, and Next and Later are not commitments to deliver by a particular time.',
    },
    owner:
      'Primary, Community and Mental Health Directorate, Digital Health and Care Wales',
    lastUpdated: '2026-09-08',
    reviewNote: {
      cy: TODO_CY,
      en: 'We update this roadmap regularly as our plans develop.',
    },
    statusLabel: 'Alpha',
  },

  // Orientation block for the top of the page. This is seeded from DHCW's
  // published organisational strategy (purpose, vision and principles) and the
  // directorate's service areas; the directorate can refine the copy here
  // without touching the component.
  context: {
    heading: { cy: TODO_CY, en: 'Our mission and services' },
    intro: {
      cy: TODO_CY,
      en: 'Before the roadmap itself, here is a short orientation: who we are, what guides us, and the services this work sits behind.',
    },
    mission: {
      heading: { cy: TODO_CY, en: 'Our mission' },
      body: {
        cy: TODO_CY,
        en: 'Digital Health and Care Wales builds and runs the national digital services that the NHS in Wales relies on. In the Primary, Community and Mental Health directorate, our part of that mission is care closer to home. We support the teams and services people turn to first, across general practice, community pharmacy, immunisation, mental health, and community and child health.',
      },
    },
    principles: {
      heading: { cy: TODO_CY, en: 'Our principles' },
      intro: {
        cy: TODO_CY,
        en: 'A small number of principles guide how we design and deliver, whichever service we are working on.',
      },
      items: [
        {
          title: { cy: TODO_CY, en: 'Putting people first' },
          body: {
            cy: TODO_CY,
            en: 'We design around the needs of the people who use our services and the people who care for them.',
          },
        },
        {
          title: { cy: TODO_CY, en: 'Simplifying everything we do' },
          body: {
            cy: TODO_CY,
            en: 'We remove complexity so services are easier to use and easier to run.',
          },
        },
        {
          title: { cy: TODO_CY, en: 'Designing for more data and digital' },
          body: {
            cy: TODO_CY,
            en: 'We build for a future where joined-up data and digital services are the norm, not the exception.',
          },
        },
        {
          title: { cy: TODO_CY, en: 'Finding more value' },
          body: {
            cy: TODO_CY,
            en: 'We focus our effort and our spending where they make the biggest difference to care.',
          },
        },
        {
          title: {
            cy: TODO_CY,
            en: 'Learning from the past while building for the future',
          },
          body: {
            cy: TODO_CY,
            en: 'We take what we have learned and use it to make the next thing better.',
          },
        },
      ],
    },
    purposeVision: {
      heading: { cy: TODO_CY, en: 'Our purpose and vision' },
      purposeLabel: { cy: TODO_CY, en: 'Purpose' },
      purpose: {
        cy: TODO_CY,
        en: 'To make digital a force for good in health and care.',
      },
      visionLabel: { cy: TODO_CY, en: 'Vision' },
      vision: {
        cy: TODO_CY,
        en: 'World-leading digital services that help people in Wales live healthier lives, and that give the people who care for them the tools and information they need.',
      },
    },
    serviceDomains: {
      heading: { cy: TODO_CY, en: 'Our five service domains' },
      intro: {
        cy: TODO_CY,
        en: 'Our work spans five service domains. Each supports a different part of primary, community and mental health care, and the roadmap below draws on all of them.',
      },
      items: [
        {
          id: 'general-practice',
          name: { cy: TODO_CY, en: 'General practice' },
          description: {
            cy: TODO_CY,
            en: 'The systems that GP teams and primary care staff use every day to care for their patients and manage their practice.',
          },
        },
        {
          id: 'community-pharmacy',
          name: { cy: TODO_CY, en: 'Community pharmacy' },
          description: {
            cy: TODO_CY,
            en: 'Digital services that let pharmacy teams deliver NHS commissioned services, from common ailments and contraception to emergency medicines.',
          },
        },
        {
          id: 'immunisation',
          name: { cy: TODO_CY, en: 'Immunisation' },
          description: {
            cy: TODO_CY,
            en: 'Recording and managing vaccinations across Wales, so people get the protection they are due and their records stay accurate.',
          },
        },
        {
          id: 'mental-health',
          name: { cy: TODO_CY, en: 'Mental health' },
          description: {
            cy: TODO_CY,
            en: 'Digital services that support mental health care across community and specialist settings, including services for children and young people.',
          },
        },
        {
          id: 'community-child-health',
          name: { cy: TODO_CY, en: 'Community and child health' },
          description: {
            cy: TODO_CY,
            en: 'Services that support community teams and child health, helping care join up outside hospital.',
          },
        },
      ],
    },
    nhsWalesApp: {
      heading: { cy: TODO_CY, en: 'The NHS Wales App' },
      body: {
        cy: TODO_CY,
        en: 'Much of this work reaches the public through the NHS Wales App, the digital front door to the NHS in Wales. People can already use it to book and manage GP appointments, order repeat prescriptions and see parts of their health record, in Welsh or English. As our services develop, more of what we build will be available through the app.',
      },
    },
  },

  // Horizon definitions from docs/BUILD_BRIEF.md Section 1.
  horizons: [
    {
      id: 'now',
      label: { cy: TODO_CY, en: 'Now' },
      definition: {
        cy: TODO_CY,
        en: 'Work we are actively doing. It is well understood and underway. Items here can carry more detail.',
      },
    },
    {
      id: 'next',
      label: { cy: TODO_CY, en: 'Next' },
      definition: {
        cy: TODO_CY,
        en: 'What we expect to pick up next. It is direction, and it may change based on what we learn from the work happening now.',
      },
    },
    {
      id: 'later',
      label: { cy: TODO_CY, en: 'Later' },
      definition: {
        cy: TODO_CY,
        en: 'The direction we are setting. It is deliberately high level and will take shape as we get closer.',
      },
    },
  ],

  // The six outcome categories. Descriptions are used verbatim from
  // docs/BUILD_BRIEF.md Section 6. Each category has a distinct accent so the
  // themes are visually separable, but meaning never relies on colour alone.
  categories: [
    {
      id: 'access-inclusion',
      name: { cy: TODO_CY, en: 'Access and Inclusion' },
      headline: { cy: TODO_CY, en: "When you need it, it's there." },
      description: {
        cy: TODO_CY,
        en: "When you need care, whether that's from your GP, a pharmacy, a community service or mental health support, reaching it should be quick and simple. This theme covers the everyday ways you get to primary and community care and how we're making them easier, so you spend less time waiting and chasing. It also gives the teams who care for you time back from admin to focus on care. Going digital should never shut anyone out. If getting online is hard for you, or not something you want, you'll still be able to reach the care you need. As more services move online, we're making sure the people who face the biggest barriers get the most support.",
      },
      accent: '#325083',
    },
    {
      id: 'workforce-capability',
      name: { cy: TODO_CY, en: 'Workforce and Capability' },
      headline: {
        cy: TODO_CY,
        en: 'People who care for you, supported to do it well.',
      },
      description: {
        cy: TODO_CY,
        en: "The people who care for you should have digital tools they're confident using. This theme is about making sure staff across primary and community care, including mental health, are well-supported to get the best from the systems they rely on every day. It's also about the jobs we create. We're growing skilled digital careers here in Wales, in engineering, product, design and data, so that public money builds lasting capability and good jobs at home.",
      },
      accent: '#12A3C9',
    },
    {
      id: 'digital-economy-sustainability',
      name: { cy: TODO_CY, en: 'Digital Economy and Sustainability' },
      headline: { cy: TODO_CY, en: 'Public money, lasting value.' },
      description: {
        cy: TODO_CY,
        en: "Public money goes furthest when services are built around the people who use them. This theme is about spending well on digital services across primary and community care, including mental health, and designing them so they make a real difference. That means starting from real user needs and proving new ideas work before we scale them. It also means building on open standards so we're never locked into a single supplier, growing teams and skills that stay in Wales, and making sure every pound spent reaches frontline care.",
      },
      accent: '#005AA8',
    },
    {
      id: 'safety-resilience',
      name: { cy: TODO_CY, en: 'Safety and Resilience' },
      headline: { cy: TODO_CY, en: 'Foundations you can count on.' },
      description: {
        cy: TODO_CY,
        en: "When you use a digital service for your care, it needs to be there and working. This theme is about the systems and connections that keep primary, community and mental health services running day to day. We're making them safer and more resilient, so services stay reliable and recover quickly when something does go wrong. Dependable foundations also let services run in real time and support new ways of caring for you.",
      },
      accent: '#1B294A',
    },
    {
      id: 'data-collaboration',
      name: { cy: TODO_CY, en: 'Data and Collaboration' },
      headline: { cy: TODO_CY, en: 'Your information, working for your care.' },
      description: {
        cy: TODO_CY,
        en: "Your care is safer when the people looking after you can see the right information at the right time. This theme is about joining up information across primary and community care, including mental health, so you don't have to repeat your story and nothing important gets missed. Used responsibly, the same information helps us understand where need is greatest and plan services around it. We look after your information carefully and are open about how it's used, sharing it only where it helps your care.",
      },
      accent: '#4C6272',
    },
    {
      id: 'equity-innovation',
      name: { cy: TODO_CY, en: 'Equity and Innovation' },
      headline: { cy: TODO_CY, en: 'Innovation that reaches everyone.' },
      description: {
        cy: TODO_CY,
        en: 'New ideas in digital health should reach the people who need them most, not just those who find technology easy. This is about making sure that as we develop and scale new approaches across primary, community and mental health care, we do it in a way that reduces health inequalities rather than deepening them. Faster adoption of innovation across Wales only counts as success when it works for everyone.',
      },
      accent: '#C9941A',
    },
  ],

  // The 66 imported roadmap items, verbatim from docs/import-items.json
  // (see docs/IMPORT_CONTENT_PACK.md). Grouped by outcome area, then by
  // horizon, which is the order they appear here. Titles, summaries,
  // outcomes, statuses, phases and capabilities carry across unchanged from
  // the Vaccines, Choose Pharmacy and General Medical Services roadmaps.
  items: [
    {
      id: 'choose-pharmacy-clinical-services',
      title: { cy: TODO_CY, en: 'Clinical Services' },
      summary: {
        cy: TODO_CY,
        en: 'Provide structured digital, user centred designed and verified workflows to enable pharmacy teams to deliver NHS commissioned services to patients.',
      },
      categoryId: 'access-inclusion',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Pharmacy teams can deliver NHS commissioned services safely, consistently and efficiently, contributing to better patient outcomes.',
      capabilities: {
        label: 'Included Services',
        items: [
          'Clinical Conditions Management (CCM)',
          '   Common Ailments Service (CAS)',
          '      Sore Throat Test and Treat (STTT)',
          '      Urinary Tract Infection (UTI)',
          '   Independent Prescribers Service (IPS)',
          'Emergency Medicines Supply (EMS)',
          'Contraception Service (CS)',
          'Discharge Medicines Review (DMR)',
        ],
      },
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-winter-respiratory-campaign',
      title: { cy: TODO_CY, en: 'Winter respiratory campaign' },
      summary: {
        cy: TODO_CY,
        en: 'Getting WIS ready for the autumn and winter respiratory campaigns. This year eligibility is widening, with a new RSV group for people aged 65 to 74 at risk, changes for the autumn flu campaign, and updates for COVID-19.',
      },
      categoryId: 'access-inclusion',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      outcome:
        'WIS is ready to record flu, COVID-19 and RSV vaccinations across every health board through the winter season.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-letter-updates',
      title: { cy: TODO_CY, en: 'Letter updates' },
      summary: {
        cy: TODO_CY,
        en: "Updating the existing WIS letter templates for this year's autumn campaigns.",
      },
      categoryId: 'access-inclusion',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      outcome:
        'Existing letters are accurate and up to date for the autumn campaigns.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-school-immunisation-service',
      title: { cy: TODO_CY, en: 'School immunisation service' },
      summary: {
        cy: TODO_CY,
        en: 'Early build and testing of the school immunisation service.',
      },
      categoryId: 'access-inclusion',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      phase: 'Alpha',
      outcome:
        'Tested prototypes for running school vaccination sessions digitally, ready to build on.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-electronic-consent',
      title: { cy: TODO_CY, en: 'Electronic consent' },
      summary: {
        cy: TODO_CY,
        en: 'Early build and testing of electronic consent for vaccination.',
      },
      categoryId: 'access-inclusion',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      phase: 'Alpha',
      outcome:
        'A tested way for parents and guardians to give consent online, with less reliance on paper forms.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-welsh-immunisation-service-wis',
      title: { cy: TODO_CY, en: 'Welsh Immunisation Service (WIS)' },
      summary: {
        cy: TODO_CY,
        en: 'Integration with the Welsh Immunisation Service (WIS), allowing pharmacy teams to view vaccine eligibility information and vaccine data, with a seamless pass through to provide and record vaccination services.',
      },
      categoryId: 'access-inclusion',
      horizon: 'next',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Pharmacy teams will be able to deliver vaccinations alongside other NHS commissioned services via one route.',
      services: ['Choose Pharmacy', 'WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-nhs-wales-app-digital-access',
      title: {
        cy: TODO_CY,
        en: 'Enabling digital access through NHS Wales App options',
      },
      summary: {
        cy: TODO_CY,
        en: 'Enabling access to immunisations, problems and test results through NHS Wales App options.',
      },
      categoryId: 'access-inclusion',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Contract reform priorities can progress with EMIS/Enlivio and patients can benefit from broader digital access to GP-held information.',
      services: ['NHS Wales App', 'EMIS', 'Enlivio'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-appointment-booking',
      title: { cy: TODO_CY, en: 'Appointment Booking' },
      summary: {
        cy: TODO_CY,
        en: 'Develop an appointment booking system to allow NHS commissioned services to be booked through Choose Pharmacy.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Patients can access NHS commissioned pharmacy services more easily through digital appointment booking, helping pharmacy teams plan workloads effectively, optimise capacity, and improve patient experience.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-nhs-111-integration',
      title: { cy: TODO_CY, en: 'NHS 111 Integration' },
      summary: {
        cy: TODO_CY,
        en: 'Build integrations with NHS 111 to allow sharing of information between NHS 111 and Choose Pharmacy, including referral information.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Enable referral information to be shared seamlessly between NHS 111 and Choose Pharmacy, helping patients access the most appropriate care, reducing the need to repeat information, and easing pressure on other services.',
      services: ['Choose Pharmacy', 'NHS 111'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-nhs-wales-app-integration',
      title: { cy: TODO_CY, en: 'NHS Wales App Integration' },
      summary: {
        cy: TODO_CY,
        en: 'Build integrations with the NHS Wales App, ensuring patient information can be shared with Choose Pharmacy and enabling patients to book appointments through the app and make nominations.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Enable patients to manage their interactions with community pharmacy through the NHS Wales App, including booking appointments and nominating services, while ensuring information is shared securely.',
      services: ['Choose Pharmacy', 'NHS Wales App'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-electronic-prescribing-service-eps',
      title: { cy: TODO_CY, en: 'Electronic Prescribing Service (EPS)' },
      summary: {
        cy: TODO_CY,
        en: 'Send prescriptions generated within Choose Pharmacy via the Electronic Prescribing Service (EPS).',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Prescriptions generated within Choose Pharmacy will be transferred electronically to dispensing systems, reducing manual administration, streamlining pharmacy workflows, and helping patients get medicines faster.',
      services: ['Choose Pharmacy', 'EPS'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-nhs-wales-app-gms-enhancements',
      title: {
        cy: TODO_CY,
        en: 'Exploring future NHS Wales App enhancements for GMS',
      },
      summary: {
        cy: TODO_CY,
        en: 'Exploring future NHS Wales App enhancements for GMS, including proxy enhancements and GP IT registration, where these align to wider product direction.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Future app opportunities are assessed against user need, strategic fit and delivery readiness.',
      services: ['NHS Wales App'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-spring-campaign',
      title: { cy: TODO_CY, en: 'Spring campaign' },
      summary: {
        cy: TODO_CY,
        en: 'Getting WIS ready for the spring campaign.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      outcome: 'WIS is ready for the spring vaccination campaign.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-school-immunisation-a-home-in-wis',
      title: { cy: TODO_CY, en: 'School immunisation: a home in WIS' },
      summary: {
        cy: TODO_CY,
        en: 'Making school immunisation a permanent part of WIS, so school vaccination teams use the same core service as other vaccination programmes.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      phase: 'Beta · Phase 2',
      outcome:
        'School immunisation is a permanent part of WIS, giving one record and one way of working for school vaccinations.',
      capabilities: {
        label: 'What this phase covers',
        items: [
          'Bring school vaccination workflows into the core WIS service.',
          'Use one person record across school and non-school vaccination pathways.',
          'Align school vaccination reporting with the wider WIS reporting model.',
          'Support consistent ways of working for school vaccination teams across Wales.',
        ],
      },
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-school-immunisation-electronic-consent',
      title: { cy: TODO_CY, en: 'School immunisation: electronic consent' },
      summary: {
        cy: TODO_CY,
        en: 'Developing electronic consent for school vaccinations, so consent can be collected and managed digitally.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      phase: 'Beta · Phase 3',
      outcome:
        'Parents and guardians can give consent online for school vaccinations, with fewer paper forms and faster responses.',
      capabilities: {
        label: 'What this phase covers',
        items: [
          'Let parents and guardians complete school vaccination consent online.',
          'Present consent information in a clear format for school vaccination teams.',
          'Support consent responses and updates before school sessions take place.',
          'Reduce paper handling across school vaccination consent processes.',
        ],
      },
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-nhs-wales-app-vaccine-features',
      title: { cy: TODO_CY, en: 'NHS Wales App vaccine features' },
      summary: {
        cy: TODO_CY,
        en: 'Possible discovery into vaccine features in the NHS Wales App, subject to prioritisation.',
      },
      categoryId: 'access-inclusion',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      phase: 'Discovery',
      phaseKind: 'discovery',
      outcome:
        "People can see their vaccination record and what they're due in the NHS Wales App.",
      services: ['WIS', 'NHS Wales App'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-pharmacy-hub',
      title: { cy: TODO_CY, en: 'Pharmacy Hub' },
      summary: {
        cy: TODO_CY,
        en: 'Centralised Pharmacy Hub that provides pharmacy teams with a view of services, messages, tasks, links, and operational information.',
      },
      categoryId: 'workforce-capability',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Provide a streamlined and intuitive experience that enables pharmacy teams to manage their workload more effectively and deliver services with greater confidence.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-reporting',
      title: { cy: TODO_CY, en: 'Reporting' },
      summary: {
        cy: TODO_CY,
        en: 'Add reports to show core operational information and statistics for pharmacy teams.',
      },
      categoryId: 'workforce-capability',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Provide pharmacy teams with operational oversight through core reporting functions.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-system-generated-appointments-sga',
      title: { cy: TODO_CY, en: 'System Generated Appointments (SGA)' },
      summary: {
        cy: TODO_CY,
        en: 'Piloting System Generated Appointments and appointment mapping, with training and support.',
      },
      categoryId: 'workforce-capability',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      outcome:
        'NHS staff can schedule appointments with more automation and less reliance on DHCW support teams.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-new-stock-management-designs',
      title: { cy: TODO_CY, en: 'New stock management designs' },
      summary: {
        cy: TODO_CY,
        en: 'Prototyping new designs for managing vaccine stock, tested with the people who use them.',
      },
      categoryId: 'workforce-capability',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      outcome:
        'Updated designs that reflect user feedback and bring the look and feel into line with the rest of the product.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-user-management-for-organisations',
      title: { cy: TODO_CY, en: 'User management for organisations' },
      summary: {
        cy: TODO_CY,
        en: 'Enhancing user management in WIS so organisations can add and manage their own users.',
      },
      categoryId: 'workforce-capability',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      outcome:
        'Organisations set up their own staff more quickly, with less reliance on central administration.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-national-cluster-digital-service-blueprint',
      title: {
        cy: TODO_CY,
        en: 'Developing the national cluster digital service blueprint',
      },
      summary: {
        cy: TODO_CY,
        en: 'Developing the national cluster digital service blueprint.',
      },
      categoryId: 'workforce-capability',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Roles, pathways, configuration and onboarding are clearer for delivery teams and stakeholders.',
      services: ['National Cluster'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-wccg-enhancements',
      title: { cy: TODO_CY, en: 'Assessing and preparing WCCG enhancements' },
      summary: {
        cy: TODO_CY,
        en: 'Assessing and preparing WCCG enhancements including clinical notes, BCU ePOC replacement, SBU ECHO reports, Velindre hospital-initiated referrals and fixed manual referral fields.',
      },
      categoryId: 'workforce-capability',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'High-value enhancements are understood, prioritised and prepared for delivery decisions.',
      services: ['WCCG'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-gptr-improvements',
      title: { cy: TODO_CY, en: 'Progressing GPTR improvements' },
      summary: {
        cy: TODO_CY,
        en: 'Progressing GPTR improvements such as editable pathology requests before sample collection.',
      },
      categoryId: 'workforce-capability',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Users have more flexibility to correct requests earlier and reduce avoidable rework.',
      services: ['GPTR'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-improved-error-messages',
      title: { cy: TODO_CY, en: 'Improved error messages' },
      summary: {
        cy: TODO_CY,
        en: 'Further improvements to the error messages people see in WIS, so problems are easier to understand and put right.',
      },
      categoryId: 'workforce-capability',
      horizon: 'next',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'Users spend less time working out what went wrong and know how to get help faster.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-clinical-template-expansion',
      title: { cy: TODO_CY, en: 'Clinical Template Expansion' },
      summary: {
        cy: TODO_CY,
        en: 'Develop further clinical templates for use by pharmacy teams, devised from data collected from Choose Pharmacy and user research.',
      },
      categoryId: 'workforce-capability',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Provide pharmacy teams with streamlined, evidence-based clinical templates that reduce administrative effort, improve consultation efficiency, and enable patients to receive care more quickly.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-common-symptoms-quick-picks',
      title: { cy: TODO_CY, en: 'Common Symptoms Quick Picks' },
      summary: {
        cy: TODO_CY,
        en: 'Using Choose Pharmacy data, identify the most common symptoms recorded within specific consultation journeys and develop a quick pick system for pharmacy teams.',
      },
      categoryId: 'workforce-capability',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Enable pharmacy teams to initiate consultations more quickly by selecting from commonly recorded symptoms, reducing administrative effort, streamlining workflows, and helping patients receive care faster.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-patient-medication-record-pmr',
      title: { cy: TODO_CY, en: 'Patient Medication Record (PMR)' },
      summary: {
        cy: TODO_CY,
        en: 'Share consultation information with pharmacy back-end Patient Medication Record (PMR) systems used for dispensing medicines.',
      },
      categoryId: 'workforce-capability',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Streamlined dispensing workflows by automatically sharing consultation information with PMR systems, reducing administrative burden and freeing pharmacy teams to spend more time with patients.',
      services: ['Choose Pharmacy', 'PMR'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-continuous-improvement',
      title: { cy: TODO_CY, en: 'Continuous improvement' },
      summary: {
        cy: TODO_CY,
        en: 'Improvements to WIS identified through the winter campaign.',
      },
      categoryId: 'workforce-capability',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'WIS keeps improving based on what we learn from the winter campaign.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-gp-discovery-roadmap',
      title: {
        cy: TODO_CY,
        en: 'Completing GP discovery and shaping a co-designed digital roadmap',
      },
      summary: {
        cy: TODO_CY,
        en: 'Completing GP discovery and shaping a co-designed digital roadmap.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'now',
      status: 'in-progress',
      source: 'gms',
      outcome:
        'The team has a clearer evidence base for future product direction and prioritisation.',
      services: ['GMS'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-wccg-upgrade-decision',
      title: { cy: TODO_CY, en: 'Working through the WCCG upgrade decision' },
      summary: {
        cy: TODO_CY,
        en: 'Working through the WCCG upgrade decision, including plan, cost and product direction.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'now',
      status: 'in-progress',
      source: 'gms',
      outcome:
        'An options appraisal is produced, future investment and enhancement choices are better informed.',
      services: ['WCCG'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-user-discovery-and-research',
      title: {
        cy: TODO_CY,
        en: 'Running user discovery and user research across products',
      },
      summary: {
        cy: TODO_CY,
        en: 'Running user discovery and user research across GPTR, WCCG, GP Portal and GP Links.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'now',
      status: 'in-progress',
      source: 'gms',
      outcome:
        'Strategic directions for the products are shaped by service evidence and user need.',
      services: ['GPTR', 'WCCG', 'GP Portal', 'GP Links'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-active-gms-delivery-priorities',
      title: { cy: TODO_CY, en: 'Supporting active GMS delivery priorities' },
      summary: {
        cy: TODO_CY,
        en: 'Supporting active GMS delivery priorities including AVT procurement, GMS Show and Tell, the GMS Resource Hub, One Advanced Exit, SNOMED support and the National Cluster project.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'now',
      status: 'in-progress',
      source: 'gms',
      outcome:
        'Key service, procurement and engagement priorities keep moving while discovery work progresses.',
      services: ['GMS', 'AVT', 'SNOMED CT', 'National Cluster'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-new-one-page-letters',
      title: { cy: TODO_CY, en: 'New one-page letters' },
      summary: {
        cy: TODO_CY,
        en: 'Releasing new, shorter, citizen-tested letter templates that replace the current ones.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'next',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'Improved written communication, and cost savings from reducing letter length.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-emis-web-optum-roadmap',
      title: {
        cy: TODO_CY,
        en: 'Considering future EMIS Web and Optum roadmap items',
      },
      summary: {
        cy: TODO_CY,
        en: 'Considering future EMIS Web and Optum roadmap items such as EMIS-X Browser, EMIS-X Companion App, Desktop Integration API, and Dynamic Templates.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'later',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Potential supplier-led changes are understood early and can be assessed against Welsh priorities.',
      services: ['EMIS', 'Optum'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-future-eps-priorities',
      title: {
        cy: TODO_CY,
        en: 'Reviewing future electronic prescribing priorities',
      },
      summary: {
        cy: TODO_CY,
        en: 'Continuing to review future electronic prescribing priorities such as post-dated scripts, CIS2 phase 2 and other EPS priorities where dependencies, funding and strategic fit are clear.',
      },
      categoryId: 'digital-economy-sustainability',
      horizon: 'later',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Future EPS work is considered in a way that balances value, readiness and delivery constraints.',
      services: ['EPS', 'CIS2'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-platform-and-security',
      title: { cy: TODO_CY, en: 'Platform and Security' },
      summary: {
        cy: TODO_CY,
        en: 'Provide a modern cloud based, secure and reliable platform for Choose Pharmacy.',
      },
      categoryId: 'safety-resilience',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Choose Pharmacy application is operating on a fast, robust, secure and expandable platform.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-user-management',
      title: { cy: TODO_CY, en: 'User Management' },
      summary: {
        cy: TODO_CY,
        en: 'Add role based access controls (RBAC) and user profile management.',
      },
      categoryId: 'safety-resilience',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Provide secure, role-based access controls that protect patient information and ensure users can only access the features and data appropriate to their role.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-wccg-gptr-tech-deep-dive',
      title: {
        cy: TODO_CY,
        en: 'Progressing the WCCG and GPTR technology deep dive',
      },
      summary: {
        cy: TODO_CY,
        en: 'Progressing the WCCG and GPTR technology deep dive across architecture, integrations, hosting, technical debt and operational risks.',
      },
      categoryId: 'safety-resilience',
      horizon: 'now',
      status: 'in-progress',
      source: 'gms',
      outcome:
        'Modernisation opportunities and service resilience needs are better understood.',
      services: ['WCCG', 'GPTR'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-archive-database-retention',
      title: {
        cy: TODO_CY,
        en: 'Defining archive database retention requirements',
      },
      summary: {
        cy: TODO_CY,
        en: 'Defining archive database retention requirements.',
      },
      categoryId: 'safety-resilience',
      horizon: 'now',
      status: 'in-progress',
      source: 'gms',
      outcome:
        'Disk space, service stability and compliance needs are managed more effectively.',
      services: ['GMS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-clearer-vaccination-warnings',
      title: { cy: TODO_CY, en: 'Clearer vaccination warnings' },
      summary: {
        cy: TODO_CY,
        en: "Clearer warnings when a vaccination looks like a duplicate, or when the person isn't in a priority group.",
      },
      categoryId: 'safety-resilience',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      outcome: 'Staff can catch possible recording errors before they happen.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-sodium-valproate-forms',
      title: { cy: TODO_CY, en: 'Sodium Valproate Forms' },
      summary: {
        cy: TODO_CY,
        en: 'Provide pharmacy teams with access to Sodium Valproate forms.',
      },
      categoryId: 'safety-resilience',
      horizon: 'next',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Improve clinical safety by providing access to structured Sodium Valproate monitoring and risk acknowledgement forms to support safe prescribing, regulatory compliance, and improved patient outcomes.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-wccg-gptr-migration',
      title: { cy: TODO_CY, en: 'Progressing WCCG and GPTR migration work' },
      summary: {
        cy: TODO_CY,
        en: 'Progressing WCCG and GPTR migration work, including VCF migration, UAT and production cloud migration planning.',
      },
      categoryId: 'safety-resilience',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Migration activity is better sequenced, risk-managed and ready for delivery.',
      services: ['WCCG', 'GPTR'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-eps-improvement-work',
      title: { cy: TODO_CY, en: 'Continuing EPS improvement work' },
      summary: {
        cy: TODO_CY,
        en: 'Continuing EPS improvement work, including bulk signing and related priorities where funding and impact assessment activity allow.',
      },
      categoryId: 'safety-resilience',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Prescribing workflows become safer, more efficient and better aligned to future service needs.',
      services: ['EPS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-storage-area-network-san',
      title: { cy: TODO_CY, en: 'Storage Area Network (SAN)' },
      summary: {
        cy: TODO_CY,
        en: 'Essential infrastructure work on the Storage Area Network.',
      },
      categoryId: 'safety-resilience',
      horizon: 'next',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'Essential maintenance keeps the storage behind WIS running reliably.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-yellowcard-reporting',
      title: { cy: TODO_CY, en: 'Yellowcard Reporting' },
      summary: {
        cy: TODO_CY,
        en: 'Provide an integration with the Yellowcard reporting system for adverse reactions.',
      },
      categoryId: 'safety-resilience',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Enable pharmacy teams to quickly and securely report suspected adverse drug reactions, supporting patient safety, national medicines monitoring, and improved health outcomes.',
      services: ['Choose Pharmacy', 'Yellow Card'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-safety-and-resilience-items',
      title: {
        cy: TODO_CY,
        en: 'Considering future safety and resilience items',
      },
      summary: {
        cy: TODO_CY,
        en: 'Considering future safety and resilience items including National Record Locator, Panic Button 2.0, reasonable adjustment patient flags and GP2GP transport or failure rate improvements.',
      },
      categoryId: 'safety-resilience',
      horizon: 'later',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Future resilience and safety improvements can be assessed and sequenced in line with service risk.',
      services: ['GP2GP', 'National Record Locator'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-live-cloud-and-postgresql-migration',
      title: { cy: TODO_CY, en: 'Live cloud and PostgreSQL migration' },
      summary: {
        cy: TODO_CY,
        en: 'Moving WIS onto cloud hosting and a PostgreSQL database.',
      },
      categoryId: 'safety-resilience',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'WIS runs on modern cloud hosting, making it more reliable and easier to improve and scale in response to demand.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-cypris-maintenance-and-security',
      title: { cy: TODO_CY, en: 'CYPrIS maintenance and security' },
      summary: {
        cy: TODO_CY,
        en: 'Essential maintenance and security upgrades to CYPrIS, the child health platform that works alongside WIS.',
      },
      categoryId: 'safety-resilience',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'CYPrIS stays secure and reliable while we focus new development on WIS.',
      services: ['CYPrIS'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-patient-search-add-patient',
      title: { cy: TODO_CY, en: 'Patient Search/Add Patient' },
      summary: {
        cy: TODO_CY,
        en: 'Patient identification via integration with the Care Data Repository (CDR). Allow users to add patients manually if not found in the CDR using tools such as the Welsh Address Matching Service (WAMS).',
      },
      categoryId: 'data-collaboration',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Enable pharmacists to quickly identify and register patients using national services, ensuring accurate patient records and safe care delivery.',
      services: ['Choose Pharmacy', 'CDR', 'WAMS'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-patient-hub',
      title: { cy: TODO_CY, en: 'Patient Hub' },
      summary: {
        cy: TODO_CY,
        en: 'A centralised patient hub showing key patient information, including a consolidated patient history, allergy and intolerance management including Shared Medicines Record (SMR) integration and adverse reaction recording.',
      },
      categoryId: 'data-collaboration',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Pharmacy teams will have access to a single, consolidated view of key patient information to support safe, informed clinical decision-making.',
      capabilities: {
        label: 'Included Information',
        items: [
          'Patient Overview',
          'Patient Detail',
          'Patient History',
          'Welsh GP Record (WGPR)',
          'Adverse Reactions Management',
          'Service Registration Management',
        ],
      },
      services: ['Choose Pharmacy', 'SMR', 'WGPR'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-clinical-coding-snomed-ct',
      title: { cy: TODO_CY, en: 'Clinical Coding (SNOMED CT)' },
      summary: {
        cy: TODO_CY,
        en: 'Provide SNOMED CT clinical coding functionality to ensure that all clinical information recorded is standardised.',
      },
      categoryId: 'data-collaboration',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Recording clinical information using standardised SNOMED CT codes improves data quality, supports safer clinical decision-making, and enables seamless information sharing across NHS Wales services.',
      services: ['Choose Pharmacy', 'SNOMED CT'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-medication-coding-dmd',
      title: { cy: TODO_CY, en: 'Medication Coding (DM+D)' },
      summary: {
        cy: TODO_CY,
        en: 'Provide Dictionary of Medicines and Devices (DM+D) search functionality, so all medications supplied are coded.',
      },
      categoryId: 'data-collaboration',
      horizon: 'now',
      status: 'in-progress',
      source: 'choose-pharmacy',
      outcome:
        'Recording medications using standardised DM+D codes improves medicines safety, supports accurate reimbursement to pharmacies, and enables consistent and reliable sharing of medication information across NHS Wales services.',
      services: ['Choose Pharmacy', 'DM+D'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-registrant-consent-recording',
      title: { cy: TODO_CY, en: 'Registrant Consent Recording' },
      summary: {
        cy: TODO_CY,
        en: 'Recording registrant consent at the point of vaccination, keeping WIS up to date with regulatory change.',
      },
      categoryId: 'data-collaboration',
      horizon: 'now',
      status: 'in-progress',
      source: 'vaccines',
      outcome:
        'The service stays in line with current requirements for recording consent.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-more-frequent-gp-write-back',
      title: { cy: TODO_CY, en: 'More frequent GP write-back' },
      summary: {
        cy: TODO_CY,
        en: 'Investigating whether we can send vaccination updates back to GP records more often, working with IUVO and EMIS.',
      },
      categoryId: 'data-collaboration',
      horizon: 'now',
      status: 'exploring',
      source: 'vaccines',
      phase: 'Discovery',
      phaseKind: 'discovery',
      outcome:
        'A clear view of whether more frequent updates are feasible, and what it would take to deliver them.',
      services: ['WIS', 'GP systems', 'EMIS', 'IUVO'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-clinical-data-repository-cdr',
      title: { cy: TODO_CY, en: 'Clinical Data Repository (CDR)' },
      summary: {
        cy: TODO_CY,
        en: 'Store all Choose Pharmacy consultation data as coded, structured information within the national Care Data Repository (CDR).',
      },
      categoryId: 'data-collaboration',
      horizon: 'next',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Pharmacy consultations form part of a comprehensive patient record, improving visibility of care provided across healthcare settings in Wales, improving patient safety and outcomes.',
      services: ['Choose Pharmacy', 'CDR'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-discharge-medicines-review-dmr',
      title: { cy: TODO_CY, en: 'Discharge Medicines Review (DMR)' },
      summary: {
        cy: TODO_CY,
        en: 'Enhance the functionality of the Discharge Medicines Review journey by enabling the import of discharge medicines information from the Shared Medicines Record (SMR).',
      },
      categoryId: 'data-collaboration',
      horizon: 'next',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Pharmacists will be able to import current medication information, reducing the risk of transcription error and duplication, improving accuracy, and supporting effective Discharge Medicines Reviews.',
      services: ['Choose Pharmacy', 'SMR'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-data-dashboards',
      title: { cy: TODO_CY, en: 'Data Dashboards' },
      summary: {
        cy: TODO_CY,
        en: 'Create rich data dashboards for Choose Pharmacy data tailored to user roles.',
      },
      categoryId: 'data-collaboration',
      horizon: 'next',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'The data will provide service insights and performance metrics that help users and stakeholders monitor services, make informed decisions, drive improvements in patient care and outcomes.',
      services: ['Choose Pharmacy'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-emis-clinical-services-integrations',
      title: {
        cy: TODO_CY,
        en: 'Testing national integrations with EMIS Clinical Services',
      },
      summary: {
        cy: TODO_CY,
        en: 'Progressing the testing of national integrations with EMIS Clinical Services and undertake cluster evaluation work.',
      },
      categoryId: 'data-collaboration',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'The team can understand how cluster models should be configured, assured and supported.',
      services: ['EMIS', 'National Cluster'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-school-immunisation-recording-and-stock',
      title: { cy: TODO_CY, en: 'School immunisation: recording and stock' },
      summary: {
        cy: TODO_CY,
        en: 'Recording and managing HPV, MenACWY and Teenage Booster (3-in-1) through consent forms, with writeback to CYPrIS and GP systems, and updates to the data warehouse. Writeback to GP systems is subject to external dependencies.',
      },
      categoryId: 'data-collaboration',
      horizon: 'next',
      status: 'exploring',
      source: 'vaccines',
      phase: 'Beta · Phase 1',
      outcome:
        'School-age vaccinations for HPV, MenACWY and the 3-in-1 booster are recorded in WIS and flow through to GP records and reporting.',
      capabilities: {
        label: 'What this phase covers',
        items: [
          'Record HPV, MenACWY and Teenage Booster (3-in-1) vaccinations through consent forms.',
          'Configure and maintain vaccination defaults for these vaccines.',
          'Manage the full vaccine stock lifecycle for these vaccines.',
          'Identify children who need vaccination and are eligible for catch-up clinics.',
          'Support the batch recording of vaccination outcomes.',
          'Writeback to CYPrIS and to GP systems.',
          'Extended writeback to EMIS, covering flu, the 3-in-1 booster and MenACWY.',
          'Update the data warehouse.',
          'Advanced Patient Search available for the new vaccines.',
        ],
      },
      services: ['WIS', 'CYPrIS', 'GP systems', 'EMIS', 'Data warehouse'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-managing-not-in-wales-records',
      title: { cy: TODO_CY, en: 'Managing “not in Wales” records' },
      summary: {
        cy: TODO_CY,
        en: 'Building on the recently defined requirements, developing how WIS manages records for people who have moved away from Wales.',
      },
      categoryId: 'data-collaboration',
      horizon: 'next',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'Better data quality, with records kept up to date when people move away.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'choose-pharmacy-gp-system-writeback',
      title: { cy: TODO_CY, en: 'GP System Writeback' },
      summary: {
        cy: TODO_CY,
        en: 'Write consultation information directly to GP systems using clinically coded messages.',
      },
      categoryId: 'data-collaboration',
      horizon: 'later',
      status: 'exploring',
      source: 'choose-pharmacy',
      outcome:
        'Consultation information will be shared directly with GP systems using clinically coded messages, reducing administrative effort, eliminating manual transcription, improving the timeline for GPs to receive information, and improving patient safety.',
      services: ['Choose Pharmacy', 'GP systems'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-gp2gp-cross-border-discovery',
      title: { cy: TODO_CY, en: 'Exploring GP2GP cross-border discovery' },
      summary: { cy: TODO_CY, en: 'Exploring GP2GP cross-border discovery.' },
      categoryId: 'data-collaboration',
      horizon: 'later',
      status: 'exploring',
      source: 'gms',
      outcome:
        'The team can understand options for improving electronic transfer of GP patient records.',
      services: ['GP2GP'],
      updated: '2026-09-08',
    },
    {
      id: 'gms-avt-framework-call-off',
      title: {
        cy: TODO_CY,
        en: 'Moving AVT into framework and call-off process',
      },
      summary: {
        cy: TODO_CY,
        en: 'Moving AVT from procurement into a framework and call-off process.',
      },
      categoryId: 'equity-innovation',
      horizon: 'next',
      status: 'exploring',
      source: 'gms',
      outcome:
        'Practices have a clearer route to adopt ambient voice technology solutions from the framework.',
      services: ['AVT'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-measuring-usability-umux-lite',
      title: { cy: TODO_CY, en: 'Measuring usability (UMUX-Lite)' },
      summary: {
        cy: TODO_CY,
        en: "Adding a short two-question survey to the service, asking whether it does what people need and whether it's easy to use. It takes under a minute to answer and gives us a usability score we can track over time and compare with other services.",
      },
      categoryId: 'equity-innovation',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      outcome:
        'We can see whether changes are making the service easier to use, and hear from a wider group of users than we reach through research sessions.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
    {
      id: 'vaccines-pre-school-immunisation',
      title: { cy: TODO_CY, en: 'Pre-school immunisation' },
      summary: { cy: TODO_CY, en: 'Discovery into pre-school immunisation.' },
      categoryId: 'equity-innovation',
      horizon: 'later',
      status: 'exploring',
      source: 'vaccines',
      phase: 'Discovery',
      phaseKind: 'discovery',
      outcome:
        'A clear understanding of how WIS could support pre-school vaccination.',
      services: ['WIS'],
      updated: '2026-09-08',
    },
  ],
};
