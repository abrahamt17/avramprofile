/**
 * Content model for the whole site and the three CVs.
 *
 * Rule: nothing here may be invented. A fact is either backed by a source
 * (a repository, a README Abraham wrote, his own statement) or it is left
 * out and listed in CONTENT_VERIFICATION.md.
 */

/** The three ways a visitor can read the site. One identity, three emphases. */
export type Lens = "ai-tech" | "product" | "marketing";

export type EvidenceStatus =
  | "verified" // checked against a repository or other artefact
  | "user-confirmation-needed" // stated by Abraham or LinkedIn, not yet confirmed in detail
  | "planned"
  | "prototype"
  | "implemented";

/** How a skill is backed up. Never a percentage. */
export type EvidenceLabel =
  | "Professional experience"
  | "Used in project"
  | "Coursework"
  | "Currently developing";

export type LensText = Record<Lens, string>;

export type Experience = {
  id: string;
  organization: string;
  title: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  /** Shown when exact dates are not confirmed yet, e.g. "1 year · full-time". */
  periodNote?: string;
  evidenceStatus: EvidenceStatus;
  summary: string;
  /** Only work Abraham personally did, each line traceable to a source. */
  bullets: string[];
  technologies: string[];
  /** About the organisation or programme, never about Abraham's output. */
  organizationContext?: string;
  metrics?: { label: string; value: string; source?: string; asOf?: string }[];
  links?: { label: string; url: string }[];
};

export type ProjectStatus = "concept" | "in-progress" | "prototype" | "deployed" | "archived";

export type ProjectCategory = "ai-tech" | "product" | "project-engineering" | "technical-marketing";

export type FlowStep = { label: string; note?: string; built: boolean };

export type Project = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  /** One line per lens, used on cards and in CVs. */
  angle: LensText;
  status: ProjectStatus;
  /** Short human wording for the status, e.g. "Phase 1 built". */
  statusNote: string;
  featured: boolean;
  categories: ProjectCategory[];
  problem: string;
  users: string[];
  approach: string;
  personalContribution: string[];
  implementedFeatures: string[];
  plannedFeatures: string[];
  technologies: string[];
  decisions: { title: string; body: string }[];
  outcomes: string[];
  learnings: string[];
  /** A diagram of the product journey. Not a screenshot. */
  flow?: { caption: string; steps: FlowStep[] };
  /** Safety or legal boundaries the product keeps. */
  boundaries?: string[];
  links: { label: string; url: string }[];
  evidenceStatus: EvidenceStatus;
  /** Where the facts on this page come from. Shown on the case study. */
  source: string;
};

export type Skill = {
  name: string;
  evidence: EvidenceLabel;
  /** Project or experience ids that back this skill up. */
  where: string[];
};

export type SkillGroup = {
  id: string;
  title: string;
  lens: Lens | "all";
  intro: string;
  skills: Skill[];
};

export type Education = {
  id: string;
  institution: string;
  programme: string;
  period?: string;
  note?: string;
  location?: string;
};

export type CvEntry = {
  heading: string;
  sub?: string;
  period?: string;
  bullets: string[];
};

export type CvVariant = {
  id: Lens;
  slug: string;
  label: string;
  fileName: string;
  headline: string;
  summary: string;
  /** Who this version is for, shown on the CV page. */
  suits: string[];
  sections: { title: string; entries: CvEntry[] }[];
  skills: { title: string; items: string[] }[];
};
