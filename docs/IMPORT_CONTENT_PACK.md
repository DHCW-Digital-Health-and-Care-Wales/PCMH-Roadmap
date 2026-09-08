# PCMH roadmap import: content pack and outcome mapping

Draft for Discussion. Prepared 8 September 2026.

This is the single source for the import. Copilot should read from here and change nothing in the title, summary, outcome, status, phase or capability fields. All 66 items are reproduced verbatim from the Vaccines, General Medical Services and Choose Pharmacy roadmaps.

| Source roadmap | Items | Now | Next | Later |
|---|---|---|---|---|
| Vaccines | 24 | 10 | 5 | 9 |
| General Medical Services | 19 | 6 | 8 | 5 |
| Choose Pharmacy | 23 | 9 | 5 | 9 |
| **Total** | **66** | 25 | 18 | 23 |

## 1. Coverage against the six outcome areas

| Outcome area | Now | Next | Later | Total |
|---|---|---|---|---|
| Access and Inclusion | 5 | 2 | 9 | 16 |
| Workforce and Capability | 5 | 4 | 4 | 13 |
| Digital Economy and Sustainability | 4 | 1 | 2 | 7 |
| Safety and Resilience | 5 | 4 | 4 | 13 |
| Data and Collaboration | 6 | 6 | 2 | 14 |
| Equity and Innovation | 0 | 1 | 2 | 3 |
| **Total** | 25 | 18 | 23 | **66** |

## 2. Rebalancing decisions

Access and Inclusion held 19 of 47 items before the General Medical Services content was added. Eight items have been moved to their second-best outcome area, each on the evidence of the item's own stated outcome rather than to hit a number. The spread is now 16, 14, 13, 13, 7 and 3.

| Item | Source | Now sits in | Reason |
|---|---|---|---|
| Reporting | Choose Pharmacy | Workforce and Capability | Moved from Data and Collaboration. The outcome is operational oversight for pharmacy teams. |
| System Generated Appointments (SGA) | Vaccines | Workforce and Capability | Moved from Access and Inclusion. The outcome is about staff scheduling with less reliance on DHCW support. |
| New one-page letters | Vaccines | Digital Economy and Sustainability | Moved from Access and Inclusion. The outcome names cost savings from shorter letters. |
| School immunisation: recording and stock | Vaccines | Data and Collaboration | Moved from Access and Inclusion. The stated outcome is records flowing through to GP systems and reporting. |
| Patient Medication Record (PMR) | Choose Pharmacy | Workforce and Capability | Moved from Data and Collaboration. The outcome is freeing pharmacy teams to spend more time with patients. |
| Continuous improvement | Vaccines | Workforce and Capability | Moved from Access and Inclusion. Improvements come from what staff report during the campaign. |
| Measuring usability (UMUX-Lite) | Vaccines | Equity and Innovation | Moved from Workforce and Capability. The outcome is hearing from a wider group than research sessions reach. |
| Pre-school immunisation | Vaccines | Equity and Innovation | Moved from Access and Inclusion. Pre-school uptake is where the widest gaps sit. |

Equity and Innovation still holds only three items. That is an honest reading of the source material rather than a mapping failure. All three product roadmaps describe what is being built and how it helps the people using it, and none of them frames work in terms of narrowing inequality. Filling that column properly needs directorate-level items that do not exist on any of the three roadmaps yet: Population Health Management and Cohorting as a Service, the vaccination uptake gap, and the digital inclusion work that sits behind every service moving online.


## 3. Dependency tags in use

Every tag below appears in at least one item. These populate the existing `services` field, which the card already renders as pills.

`AVT`, `CDR`, `CIS2`, `CYPrIS`, `Choose Pharmacy`, `DM+D`, `Data warehouse`, `EMIS`, `EPS`, `Enlivio`, `GMS`, `GP Links`, `GP Portal`, `GP systems`, `GP2GP`, `GPTR`, `IUVO`, `NHS 111`, `NHS Wales App`, `National Cluster`, `National Record Locator`, `Optum`, `PMR`, `SMR`, `SNOMED CT`, `WAMS`, `WCCG`, `WGPR`, `WIS`, `Yellow Card`


## 4. The items

Grouped by outcome area, then by horizon, which is the order they should appear in the data file.


### Access and Inclusion (16 items)


#### Now


**Clinical Services**  
`choose-pharmacy-clinical-services` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Provide structured digital, user centred designed and verified workflows to enable pharmacy teams to deliver NHS commissioned services to patients.
- Outcome: Pharmacy teams can deliver NHS commissioned services safely, consistently and efficiently, contributing to better patient outcomes.
- Included Services:
  - Clinical Conditions Management (CCM)
  - Common Ailments Service (CAS)
  - Sore Throat Test and Treat (STTT)
  - Urinary Tract Infection (UTI)
  - Independent Prescribers Service (IPS)
  - Emergency Medicines Supply (EMS)
  - Contraception Service (CS)
  - Discharge Medicines Review (DMR)
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Workforce and Capability

**Winter respiratory campaign**  
`vaccines-winter-respiratory-campaign` &middot; source: Vaccines &middot; status: in-progress

- Summary: Getting WIS ready for the autumn and winter respiratory campaigns. This year eligibility is widening, with a new RSV group for people aged 65 to 74 at risk, changes for the autumn flu campaign, and updates for COVID-19.
- Outcome: WIS is ready to record flu, COVID-19 and RSV vaccinations across every health board through the winter season.
- Tags: WIS
- Second-best fit if you disagree: Equity and Innovation

**Letter updates**  
`vaccines-letter-updates` &middot; source: Vaccines &middot; status: in-progress

- Summary: Updating the existing WIS letter templates for this year's autumn campaigns.
- Outcome: Existing letters are accurate and up to date for the autumn campaigns.
- Tags: WIS
- Second-best fit if you disagree: Digital Economy and Sustainability

**School immunisation service**  
`vaccines-school-immunisation-service` &middot; source: Vaccines &middot; status: in-progress &middot; phase: Alpha

- Summary: Early build and testing of the school immunisation service.
- Outcome: Tested prototypes for running school vaccination sessions digitally, ready to build on.
- Tags: WIS
- Second-best fit if you disagree: Equity and Innovation

**Electronic consent**  
`vaccines-electronic-consent` &middot; source: Vaccines &middot; status: in-progress &middot; phase: Alpha

- Summary: Early build and testing of electronic consent for vaccination.
- Outcome: A tested way for parents and guardians to give consent online, with less reliance on paper forms.
- Tags: WIS
- Second-best fit if you disagree: Data and Collaboration

#### Next


**Welsh Immunisation Service (WIS)**  
`choose-pharmacy-welsh-immunisation-service-wis` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Integration with the Welsh Immunisation Service (WIS), allowing pharmacy teams to view vaccine eligibility information and vaccine data, with a seamless pass through to provide and record vaccination services.
- Outcome: Pharmacy teams will be able to deliver vaccinations alongside other NHS commissioned services via one route.
- Tags: Choose Pharmacy, WIS
- Second-best fit if you disagree: Data and Collaboration

**Enabling digital access through NHS Wales App options**  
`gms-nhs-wales-app-digital-access` &middot; source: General Medical Services &middot; status: exploring

- Summary: Enabling access to immunisations, problems and test results through NHS Wales App options.
- Outcome: Contract reform priorities can progress with EMIS/Enlivio and patients can benefit from broader digital access to GP-held information.
- Tags: NHS Wales App, EMIS, Enlivio
- Second-best fit if you disagree: Data and Collaboration

#### Later


**Appointment Booking**  
`choose-pharmacy-appointment-booking` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Develop an appointment booking system to allow NHS commissioned services to be booked through Choose Pharmacy.
- Outcome: Patients can access NHS commissioned pharmacy services more easily through digital appointment booking, helping pharmacy teams plan workloads effectively, optimise capacity, and improve patient experience.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Workforce and Capability

**NHS 111 Integration**  
`choose-pharmacy-nhs-111-integration` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Build integrations with NHS 111 to allow sharing of information between NHS 111 and Choose Pharmacy, including referral information.
- Outcome: Enable referral information to be shared seamlessly between NHS 111 and Choose Pharmacy, helping patients access the most appropriate care, reducing the need to repeat information, and easing pressure on other services.
- Tags: Choose Pharmacy, NHS 111
- Second-best fit if you disagree: Data and Collaboration

**NHS Wales App Integration**  
`choose-pharmacy-nhs-wales-app-integration` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Build integrations with the NHS Wales App, ensuring patient information can be shared with Choose Pharmacy and enabling patients to book appointments through the app and make nominations.
- Outcome: Enable patients to manage their interactions with community pharmacy through the NHS Wales App, including booking appointments and nominating services, while ensuring information is shared securely.
- Tags: Choose Pharmacy, NHS Wales App
- Second-best fit if you disagree: Data and Collaboration

**Electronic Prescribing Service (EPS)**  
`choose-pharmacy-electronic-prescribing-service-eps` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Send prescriptions generated within Choose Pharmacy via the Electronic Prescribing Service (EPS).
- Outcome: Prescriptions generated within Choose Pharmacy will be transferred electronically to dispensing systems, reducing manual administration, streamlining pharmacy workflows, and helping patients get medicines faster.
- Tags: Choose Pharmacy, EPS
- Second-best fit if you disagree: Data and Collaboration

**Exploring future NHS Wales App enhancements for GMS**  
`gms-nhs-wales-app-gms-enhancements` &middot; source: General Medical Services &middot; status: exploring

- Summary: Exploring future NHS Wales App enhancements for GMS, including proxy enhancements and GP IT registration, where these align to wider product direction.
- Outcome: Future app opportunities are assessed against user need, strategic fit and delivery readiness.
- Tags: NHS Wales App
- Second-best fit if you disagree: Equity and Innovation

**Spring campaign**  
`vaccines-spring-campaign` &middot; source: Vaccines &middot; status: exploring

- Summary: Getting WIS ready for the spring campaign.
- Outcome: WIS is ready for the spring vaccination campaign.
- Tags: WIS

**School immunisation: a home in WIS**  
`vaccines-school-immunisation-a-home-in-wis` &middot; source: Vaccines &middot; status: exploring &middot; phase: Beta · Phase 2

- Summary: Making school immunisation a permanent part of WIS, so school vaccination teams use the same core service as other vaccination programmes.
- Outcome: School immunisation is a permanent part of WIS, giving one record and one way of working for school vaccinations.
- What this phase covers:
  - Bring school vaccination workflows into the core WIS service.
  - Use one person record across school and non-school vaccination pathways.
  - Align school vaccination reporting with the wider WIS reporting model.
  - Support consistent ways of working for school vaccination teams across Wales.
- Tags: WIS
- Second-best fit if you disagree: Data and Collaboration

**School immunisation: electronic consent**  
`vaccines-school-immunisation-electronic-consent` &middot; source: Vaccines &middot; status: exploring &middot; phase: Beta · Phase 3

- Summary: Developing electronic consent for school vaccinations, so consent can be collected and managed digitally.
- Outcome: Parents and guardians can give consent online for school vaccinations, with fewer paper forms and faster responses.
- What this phase covers:
  - Let parents and guardians complete school vaccination consent online.
  - Present consent information in a clear format for school vaccination teams.
  - Support consent responses and updates before school sessions take place.
  - Reduce paper handling across school vaccination consent processes.
- Tags: WIS
- Second-best fit if you disagree: Equity and Innovation

**NHS Wales App vaccine features**  
`vaccines-nhs-wales-app-vaccine-features` &middot; source: Vaccines &middot; status: exploring &middot; phase: Discovery

- Summary: Possible discovery into vaccine features in the NHS Wales App, subject to prioritisation.
- Outcome: People can see their vaccination record and what they're due in the NHS Wales App.
- Tags: WIS, NHS Wales App
- Second-best fit if you disagree: Equity and Innovation

### Workforce and Capability (13 items)


#### Now


**Pharmacy Hub**  
`choose-pharmacy-pharmacy-hub` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Centralised Pharmacy Hub that provides pharmacy teams with a view of services, messages, tasks, links, and operational information.
- Outcome: Provide a streamlined and intuitive experience that enables pharmacy teams to manage their workload more effectively and deliver services with greater confidence.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Access and Inclusion

**Reporting**  
`choose-pharmacy-reporting` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Add reports to show core operational information and statistics for pharmacy teams.
- Outcome: Provide pharmacy teams with operational oversight through core reporting functions.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Data and Collaboration

**System Generated Appointments (SGA)**  
`vaccines-system-generated-appointments-sga` &middot; source: Vaccines &middot; status: in-progress

- Summary: Piloting System Generated Appointments and appointment mapping, with training and support.
- Outcome: NHS staff can schedule appointments with more automation and less reliance on DHCW support teams.
- Tags: WIS
- Second-best fit if you disagree: Access and Inclusion

**New stock management designs**  
`vaccines-new-stock-management-designs` &middot; source: Vaccines &middot; status: in-progress

- Summary: Prototyping new designs for managing vaccine stock, tested with the people who use them.
- Outcome: Updated designs that reflect user feedback and bring the look and feel into line with the rest of the product.
- Tags: WIS
- Second-best fit if you disagree: Digital Economy and Sustainability

**User management for organisations**  
`vaccines-user-management-for-organisations` &middot; source: Vaccines &middot; status: in-progress

- Summary: Enhancing user management in WIS so organisations can add and manage their own users.
- Outcome: Organisations set up their own staff more quickly, with less reliance on central administration.
- Tags: WIS
- Second-best fit if you disagree: Safety and Resilience

#### Next


**Developing the national cluster digital service blueprint**  
`gms-national-cluster-digital-service-blueprint` &middot; source: General Medical Services &middot; status: exploring

- Summary: Developing the national cluster digital service blueprint.
- Outcome: Roles, pathways, configuration and onboarding are clearer for delivery teams and stakeholders.
- Tags: National Cluster
- Second-best fit if you disagree: Access and Inclusion

**Assessing and preparing WCCG enhancements**  
`gms-wccg-enhancements` &middot; source: General Medical Services &middot; status: exploring

- Summary: Assessing and preparing WCCG enhancements including clinical notes, BCU ePOC replacement, SBU ECHO reports, Velindre hospital-initiated referrals and fixed manual referral fields.
- Outcome: High-value enhancements are understood, prioritised and prepared for delivery decisions.
- Tags: WCCG
- Second-best fit if you disagree: Access and Inclusion

**Progressing GPTR improvements**  
`gms-gptr-improvements` &middot; source: General Medical Services &middot; status: exploring

- Summary: Progressing GPTR improvements such as editable pathology requests before sample collection.
- Outcome: Users have more flexibility to correct requests earlier and reduce avoidable rework.
- Tags: GPTR
- Second-best fit if you disagree: Safety and Resilience

**Improved error messages**  
`vaccines-improved-error-messages` &middot; source: Vaccines &middot; status: exploring

- Summary: Further improvements to the error messages people see in WIS, so problems are easier to understand and put right.
- Outcome: Users spend less time working out what went wrong and know how to get help faster.
- Tags: WIS
- Second-best fit if you disagree: Access and Inclusion

#### Later


**Clinical Template Expansion**  
`choose-pharmacy-clinical-template-expansion` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Develop further clinical templates for use by pharmacy teams, devised from data collected from Choose Pharmacy and user research.
- Outcome: Provide pharmacy teams with streamlined, evidence-based clinical templates that reduce administrative effort, improve consultation efficiency, and enable patients to receive care more quickly.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Access and Inclusion

**Common Symptoms Quick Picks**  
`choose-pharmacy-common-symptoms-quick-picks` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Using Choose Pharmacy data, identify the most common symptoms recorded within specific consultation journeys and develop a quick pick system for pharmacy teams.
- Outcome: Enable pharmacy teams to initiate consultations more quickly by selecting from commonly recorded symptoms, reducing administrative effort, streamlining workflows, and helping patients receive care faster.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Access and Inclusion

**Patient Medication Record (PMR)**  
`choose-pharmacy-patient-medication-record-pmr` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Share consultation information with pharmacy back-end Patient Medication Record (PMR) systems used for dispensing medicines.
- Outcome: Streamlined dispensing workflows by automatically sharing consultation information with PMR systems, reducing administrative burden and freeing pharmacy teams to spend more time with patients.
- Tags: Choose Pharmacy, PMR
- Second-best fit if you disagree: Data and Collaboration

**Continuous improvement**  
`vaccines-continuous-improvement` &middot; source: Vaccines &middot; status: exploring

- Summary: Improvements to WIS identified through the winter campaign.
- Outcome: WIS keeps improving based on what we learn from the winter campaign.
- Tags: WIS
- Second-best fit if you disagree: Access and Inclusion

### Digital Economy and Sustainability (7 items)


#### Now


**Completing GP discovery and shaping a co-designed digital roadmap**  
`gms-gp-discovery-roadmap` &middot; source: General Medical Services &middot; status: in-progress

- Summary: Completing GP discovery and shaping a co-designed digital roadmap.
- Outcome: The team has a clearer evidence base for future product direction and prioritisation.
- Tags: GMS
- Second-best fit if you disagree: Workforce and Capability

**Working through the WCCG upgrade decision**  
`gms-wccg-upgrade-decision` &middot; source: General Medical Services &middot; status: in-progress

- Summary: Working through the WCCG upgrade decision, including plan, cost and product direction.
- Outcome: An options appraisal is produced, future investment and enhancement choices are better informed.
- Tags: WCCG
- Second-best fit if you disagree: Safety and Resilience

**Running user discovery and user research across products**  
`gms-user-discovery-and-research` &middot; source: General Medical Services &middot; status: in-progress

- Summary: Running user discovery and user research across GPTR, WCCG, GP Portal and GP Links.
- Outcome: Strategic directions for the products are shaped by service evidence and user need.
- Tags: GPTR, WCCG, GP Portal, GP Links
- Second-best fit if you disagree: Workforce and Capability

**Supporting active GMS delivery priorities**  
`gms-active-gms-delivery-priorities` &middot; source: General Medical Services &middot; status: in-progress

- Summary: Supporting active GMS delivery priorities including AVT procurement, GMS Show and Tell, the GMS Resource Hub, One Advanced Exit, SNOMED support and the National Cluster project.
- Outcome: Key service, procurement and engagement priorities keep moving while discovery work progresses.
- Tags: GMS, AVT, SNOMED CT, National Cluster
- Second-best fit if you disagree: Workforce and Capability

#### Next


**New one-page letters**  
`vaccines-new-one-page-letters` &middot; source: Vaccines &middot; status: exploring

- Summary: Releasing new, shorter, citizen-tested letter templates that replace the current ones.
- Outcome: Improved written communication, and cost savings from reducing letter length.
- Tags: WIS
- Second-best fit if you disagree: Access and Inclusion

#### Later


**Considering future EMIS Web and Optum roadmap items**  
`gms-emis-web-optum-roadmap` &middot; source: General Medical Services &middot; status: exploring

- Summary: Considering future EMIS Web and Optum roadmap items such as EMIS-X Browser, EMIS-X Companion App, Desktop Integration API, and Dynamic Templates.
- Outcome: Potential supplier-led changes are understood early and can be assessed against Welsh priorities.
- Tags: EMIS, Optum
- Second-best fit if you disagree: Safety and Resilience

**Reviewing future electronic prescribing priorities**  
`gms-future-eps-priorities` &middot; source: General Medical Services &middot; status: exploring

- Summary: Continuing to review future electronic prescribing priorities such as post-dated scripts, CIS2 phase 2 and other EPS priorities where dependencies, funding and strategic fit are clear.
- Outcome: Future EPS work is considered in a way that balances value, readiness and delivery constraints.
- Tags: EPS, CIS2
- Second-best fit if you disagree: Safety and Resilience

### Safety and Resilience (13 items)


#### Now


**Platform and Security**  
`choose-pharmacy-platform-and-security` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Provide a modern cloud based, secure and reliable platform for Choose Pharmacy.
- Outcome: Choose Pharmacy application is operating on a fast, robust, secure and expandable platform.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Digital Economy and Sustainability

**User Management**  
`choose-pharmacy-user-management` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Add role based access controls (RBAC) and user profile management.
- Outcome: Provide secure, role-based access controls that protect patient information and ensure users can only access the features and data appropriate to their role.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Workforce and Capability

**Progressing the WCCG and GPTR technology deep dive**  
`gms-wccg-gptr-tech-deep-dive` &middot; source: General Medical Services &middot; status: in-progress

- Summary: Progressing the WCCG and GPTR technology deep dive across architecture, integrations, hosting, technical debt and operational risks.
- Outcome: Modernisation opportunities and service resilience needs are better understood.
- Tags: WCCG, GPTR
- Second-best fit if you disagree: Digital Economy and Sustainability

**Defining archive database retention requirements**  
`gms-archive-database-retention` &middot; source: General Medical Services &middot; status: in-progress

- Summary: Defining archive database retention requirements.
- Outcome: Disk space, service stability and compliance needs are managed more effectively.
- Tags: GMS
- Second-best fit if you disagree: Data and Collaboration

**Clearer vaccination warnings**  
`vaccines-clearer-vaccination-warnings` &middot; source: Vaccines &middot; status: in-progress

- Summary: Clearer warnings when a vaccination looks like a duplicate, or when the person isn't in a priority group.
- Outcome: Staff can catch possible recording errors before they happen.
- Tags: WIS
- Second-best fit if you disagree: Data and Collaboration

#### Next


**Sodium Valproate Forms**  
`choose-pharmacy-sodium-valproate-forms` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Provide pharmacy teams with access to Sodium Valproate forms.
- Outcome: Improve clinical safety by providing access to structured Sodium Valproate monitoring and risk acknowledgement forms to support safe prescribing, regulatory compliance, and improved patient outcomes.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Data and Collaboration

**Progressing WCCG and GPTR migration work**  
`gms-wccg-gptr-migration` &middot; source: General Medical Services &middot; status: exploring

- Summary: Progressing WCCG and GPTR migration work, including VCF migration, UAT and production cloud migration planning.
- Outcome: Migration activity is better sequenced, risk-managed and ready for delivery.
- Tags: WCCG, GPTR
- Second-best fit if you disagree: Digital Economy and Sustainability

**Continuing EPS improvement work**  
`gms-eps-improvement-work` &middot; source: General Medical Services &middot; status: exploring

- Summary: Continuing EPS improvement work, including bulk signing and related priorities where funding and impact assessment activity allow.
- Outcome: Prescribing workflows become safer, more efficient and better aligned to future service needs.
- Tags: EPS
- Second-best fit if you disagree: Workforce and Capability

**Storage Area Network (SAN)**  
`vaccines-storage-area-network-san` &middot; source: Vaccines &middot; status: exploring

- Summary: Essential infrastructure work on the Storage Area Network.
- Outcome: Essential maintenance keeps the storage behind WIS running reliably.
- Tags: WIS

#### Later


**Yellowcard Reporting**  
`choose-pharmacy-yellowcard-reporting` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Provide an integration with the Yellowcard reporting system for adverse reactions.
- Outcome: Enable pharmacy teams to quickly and securely report suspected adverse drug reactions, supporting patient safety, national medicines monitoring, and improved health outcomes.
- Tags: Choose Pharmacy, Yellow Card
- Second-best fit if you disagree: Data and Collaboration

**Considering future safety and resilience items**  
`gms-safety-and-resilience-items` &middot; source: General Medical Services &middot; status: exploring

- Summary: Considering future safety and resilience items including National Record Locator, Panic Button 2.0, reasonable adjustment patient flags and GP2GP transport or failure rate improvements.
- Outcome: Future resilience and safety improvements can be assessed and sequenced in line with service risk.
- Tags: GP2GP, National Record Locator
- Second-best fit if you disagree: Equity and Innovation

**Live cloud and PostgreSQL migration**  
`vaccines-live-cloud-and-postgresql-migration` &middot; source: Vaccines &middot; status: exploring

- Summary: Moving WIS onto cloud hosting and a PostgreSQL database.
- Outcome: WIS runs on modern cloud hosting, making it more reliable and easier to improve and scale in response to demand.
- Tags: WIS
- Second-best fit if you disagree: Digital Economy and Sustainability

**CYPrIS maintenance and security**  
`vaccines-cypris-maintenance-and-security` &middot; source: Vaccines &middot; status: exploring

- Summary: Essential maintenance and security upgrades to CYPrIS, the child health platform that works alongside WIS.
- Outcome: CYPrIS stays secure and reliable while we focus new development on WIS.
- Tags: CYPrIS

### Data and Collaboration (14 items)


#### Now


**Patient Search/Add Patient**  
`choose-pharmacy-patient-search-add-patient` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Patient identification via integration with the Care Data Repository (CDR). Allow users to add patients manually if not found in the CDR using tools such as the Welsh Address Matching Service (WAMS).
- Outcome: Enable pharmacists to quickly identify and register patients using national services, ensuring accurate patient records and safe care delivery.
- Tags: Choose Pharmacy, CDR, WAMS
- Second-best fit if you disagree: Safety and Resilience

**Patient Hub**  
`choose-pharmacy-patient-hub` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: A centralised patient hub showing key patient information, including a consolidated patient history, allergy and intolerance management including Shared Medicines Record (SMR) integration and adverse reaction recording.
- Outcome: Pharmacy teams will have access to a single, consolidated view of key patient information to support safe, informed clinical decision-making.
- Included Information:
  - Patient Overview
  - Patient Detail
  - Patient History
  - Welsh GP Record (WGPR)
  - Adverse Reactions Management
  - Service Registration Management
- Tags: Choose Pharmacy, SMR, WGPR
- Second-best fit if you disagree: Safety and Resilience

**Clinical Coding (SNOMED CT)**  
`choose-pharmacy-clinical-coding-snomed-ct` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Provide SNOMED CT clinical coding functionality to ensure that all clinical information recorded is standardised.
- Outcome: Recording clinical information using standardised SNOMED CT codes improves data quality, supports safer clinical decision-making, and enables seamless information sharing across NHS Wales services.
- Tags: Choose Pharmacy, SNOMED CT
- Second-best fit if you disagree: Safety and Resilience

**Medication Coding (DM+D)**  
`choose-pharmacy-medication-coding-dmd` &middot; source: Choose Pharmacy &middot; status: in-progress

- Summary: Provide Dictionary of Medicines and Devices (DM+D) search functionality, so all medications supplied are coded.
- Outcome: Recording medications using standardised DM+D codes improves medicines safety, supports accurate reimbursement to pharmacies, and enables consistent and reliable sharing of medication information across NHS Wales services.
- Tags: Choose Pharmacy, DM+D
- Second-best fit if you disagree: Safety and Resilience

**Registrant Consent Recording**  
`vaccines-registrant-consent-recording` &middot; source: Vaccines &middot; status: in-progress

- Summary: Recording registrant consent at the point of vaccination, keeping WIS up to date with regulatory change.
- Outcome: The service stays in line with current requirements for recording consent.
- Tags: WIS
- Second-best fit if you disagree: Safety and Resilience

**More frequent GP write-back**  
`vaccines-more-frequent-gp-write-back` &middot; source: Vaccines &middot; status: exploring &middot; phase: Discovery

- Summary: Investigating whether we can send vaccination updates back to GP records more often, working with IUVO and EMIS.
- Outcome: A clear view of whether more frequent updates are feasible, and what it would take to deliver them.
- Tags: WIS, GP systems, EMIS, IUVO
- Second-best fit if you disagree: Safety and Resilience

#### Next


**Clinical Data Repository (CDR)**  
`choose-pharmacy-clinical-data-repository-cdr` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Store all Choose Pharmacy consultation data as coded, structured information within the national Care Data Repository (CDR).
- Outcome: Pharmacy consultations form part of a comprehensive patient record, improving visibility of care provided across healthcare settings in Wales, improving patient safety and outcomes.
- Tags: Choose Pharmacy, CDR

**Discharge Medicines Review (DMR)**  
`choose-pharmacy-discharge-medicines-review-dmr` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Enhance the functionality of the Discharge Medicines Review journey by enabling the import of discharge medicines information from the Shared Medicines Record (SMR).
- Outcome: Pharmacists will be able to import current medication information, reducing the risk of transcription error and duplication, improving accuracy, and supporting effective Discharge Medicines Reviews.
- Tags: Choose Pharmacy, SMR
- Second-best fit if you disagree: Safety and Resilience

**Data Dashboards**  
`choose-pharmacy-data-dashboards` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Create rich data dashboards for Choose Pharmacy data tailored to user roles.
- Outcome: The data will provide service insights and performance metrics that help users and stakeholders monitor services, make informed decisions, drive improvements in patient care and outcomes.
- Tags: Choose Pharmacy
- Second-best fit if you disagree: Workforce and Capability

**Testing national integrations with EMIS Clinical Services**  
`gms-emis-clinical-services-integrations` &middot; source: General Medical Services &middot; status: exploring

- Summary: Progressing the testing of national integrations with EMIS Clinical Services and undertake cluster evaluation work.
- Outcome: The team can understand how cluster models should be configured, assured and supported.
- Tags: EMIS, National Cluster
- Second-best fit if you disagree: Safety and Resilience

**School immunisation: recording and stock**  
`vaccines-school-immunisation-recording-and-stock` &middot; source: Vaccines &middot; status: exploring &middot; phase: Beta · Phase 1

- Summary: Recording and managing HPV, MenACWY and Teenage Booster (3-in-1) through consent forms, with writeback to CYPrIS and GP systems, and updates to the data warehouse. Writeback to GP systems is subject to external dependencies.
- Outcome: School-age vaccinations for HPV, MenACWY and the 3-in-1 booster are recorded in WIS and flow through to GP records and reporting.
- What this phase covers:
  - Record HPV, MenACWY and Teenage Booster (3-in-1) vaccinations through consent forms.
  - Configure and maintain vaccination defaults for these vaccines.
  - Manage the full vaccine stock lifecycle for these vaccines.
  - Identify children who need vaccination and are eligible for catch-up clinics.
  - Support the batch recording of vaccination outcomes.
  - Writeback to CYPrIS and to GP systems.
  - Extended writeback to EMIS, covering flu, the 3-in-1 booster and MenACWY.
  - Update the data warehouse.
  - Advanced Patient Search available for the new vaccines.
- Tags: WIS, CYPrIS, GP systems, EMIS, Data warehouse
- Second-best fit if you disagree: Access and Inclusion

**Managing “not in Wales” records**  
`vaccines-managing-not-in-wales-records` &middot; source: Vaccines &middot; status: exploring

- Summary: Building on the recently defined requirements, developing how WIS manages records for people who have moved away from Wales.
- Outcome: Better data quality, with records kept up to date when people move away.
- Tags: WIS
- Second-best fit if you disagree: Safety and Resilience

#### Later


**GP System Writeback**  
`choose-pharmacy-gp-system-writeback` &middot; source: Choose Pharmacy &middot; status: exploring

- Summary: Write consultation information directly to GP systems using clinically coded messages.
- Outcome: Consultation information will be shared directly with GP systems using clinically coded messages, reducing administrative effort, eliminating manual transcription, improving the timeline for GPs to receive information, and improving patient safety.
- Tags: Choose Pharmacy, GP systems
- Second-best fit if you disagree: Safety and Resilience

**Exploring GP2GP cross-border discovery**  
`gms-gp2gp-cross-border-discovery` &middot; source: General Medical Services &middot; status: exploring

- Summary: Exploring GP2GP cross-border discovery.
- Outcome: The team can understand options for improving electronic transfer of GP patient records.
- Tags: GP2GP
- Second-best fit if you disagree: Safety and Resilience

### Equity and Innovation (3 items)


#### Next


**Moving AVT into framework and call-off process**  
`gms-avt-framework-call-off` &middot; source: General Medical Services &middot; status: exploring

- Summary: Moving AVT from procurement into a framework and call-off process.
- Outcome: Practices have a clearer route to adopt ambient voice technology solutions from the framework.
- Tags: AVT
- Second-best fit if you disagree: Digital Economy and Sustainability

#### Later


**Measuring usability (UMUX-Lite)**  
`vaccines-measuring-usability-umux-lite` &middot; source: Vaccines &middot; status: exploring

- Summary: Adding a short two-question survey to the service, asking whether it does what people need and whether it's easy to use. It takes under a minute to answer and gives us a usability score we can track over time and compare with other services.
- Outcome: We can see whether changes are making the service easier to use, and hear from a wider group of users than we reach through research sessions.
- Tags: WIS
- Second-best fit if you disagree: Workforce and Capability

**Pre-school immunisation**  
`vaccines-pre-school-immunisation` &middot; source: Vaccines &middot; status: exploring &middot; phase: Discovery

- Summary: Discovery into pre-school immunisation.
- Outcome: A clear understanding of how WIS could support pre-school vaccination.
- Tags: WIS
- Second-best fit if you disagree: Access and Inclusion