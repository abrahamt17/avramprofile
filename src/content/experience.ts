import type { Experience } from "./types.ts";

/**
 * Two roles. Organisation context is kept apart from personal contribution.
 * Empty arrays are deliberate: they are facts still to be confirmed, listed
 * in CONTENT_VERIFICATION.md, and the site simply shows nothing for them.
 */
export const experience: Experience[] = [
  {
    id: "aigot",
    organization: "AiGot SRL",
    title: "AI Engineer",
    location: "Italy",
    // aigot.start_date / aigot.end_date / aigot.employment_type: to confirm
    evidenceStatus: "user-confirmation-needed",
    summary:
      "Worked on AI-focused software and automation initiatives in a company developing technology products and SaaS solutions.",
    // aigot.actual_responsibilities / deliverables / measurable_outcomes: to confirm
    bullets: [],
    // aigot.models_and_frameworks / tools_and_infrastructure: to confirm
    technologies: [],
    organizationContext:
      "AiGot SRL is an Italian AI and software company. Its public profile describes work in AI and machine learning, SaaS product development and software automation.",
    links: [{ label: "AiGot on LinkedIn", url: "https://www.linkedin.com/company/aigot-srl/" }],
  },
  {
    id: "fayda",
    organization: "National ID Ethiopia (Fayda)",
    // Abraham states this was a full-time role for one year. Exact dates to confirm.
    title: "Software Developer",
    location: "Ethiopia",
    periodNote: "1 year · full-time",
    evidenceStatus: "user-confirmation-needed",
    summary:
      "A year of full-time work inside Ethiopia's national digital identity programme, mainly on the frontend of a grievance management portal.",
    bullets: [
      "Designed and implemented the frontend interface for a grievance management workflow.",
      "Structured the interface for operations staff: sidebar navigation, dashboard summaries, a case queue and case detail inspection.",
      "Built the table interactions: search, pagination, record inspection and updates.",
      "Later rebuilt a sanitised public version with mock data only, removing internal configuration and anything company-sensitive.",
    ],
    technologies: ["React", "TypeScript", "React Table", "SCSS"],
    organizationContext:
      "Fayda is Ethiopia's foundational national digital identity programme: public digital infrastructure for identity registration and verification, used by other services through integrations. That scale belongs to the programme, not to me.",
    // Programme figures are intentionally not shown. Recheck id.gov.et and add an
    // "as of" date before publishing any number. See CONTENT_VERIFICATION.md.
    metrics: [],
    links: [
      { label: "Public showcase repository", url: "https://github.com/abrahamt17/GRM-table" },
      { label: "Fayda", url: "https://id.gov.et/" },
    ],
  },
  {
    id: "sic",
    organization: "SIC competition",
    title: "Contender · technical product lead",
    evidenceStatus: "user-confirmation-needed",
    summary:
      "Competed with a team entry where I led the technical side: I built the product, managed my teammates, and worked on the business plan.",
    bullets: [],
    technologies: [],
  },
];

/** The date range if known, otherwise the confirmed duration, otherwise the place. */
export function rolePeriod(role: Experience): string | undefined {
  if (role.startDate) return `${role.startDate} – ${role.endDate ?? "present"}`;
  return role.periodNote ?? role.location;
}
