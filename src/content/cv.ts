import { education } from "./profile.ts";
import { experience } from "./experience.ts";
import { getProject } from "./projects.ts";
import type { CvEntry, CvVariant, Lens } from "./types.ts";

/**
 * Three CVs, one source. Experience, education and project facts are pulled
 * from the same content the website uses; each variant only chooses the
 * order, the emphasis and the wording of its bullets.
 *
 * The PDFs in public/cv are generated from this file by `npm run cv`.
 */

const fayda = experience.find((e) => e.id === "fayda")!;
const aigot = experience.find((e) => e.id === "aigot")!;

function period(start?: string, end?: string): string | undefined {
  if (!start && !end) return undefined;
  return `${start ?? ""} – ${end ?? "present"}`;
}

function experienceEntries(faydaBullets: string[]): CvEntry[] {
  return [
    {
      heading: `${aigot.title} — ${aigot.organization}`,
      sub: aigot.location,
      period: period(aigot.startDate, aigot.endDate),
      bullets: aigot.bullets.length > 0 ? aigot.bullets : [aigot.summary],
    },
    {
      heading: `${fayda.title} — ${fayda.organization}`,
      sub: fayda.location,
      period: period(fayda.startDate, fayda.endDate),
      bullets: faydaBullets,
    },
  ];
}

function projectEntry(id: string, lens: Lens, bullets: string[]): CvEntry {
  const p = getProject(id)!;
  return {
    heading: `${p.name} — ${p.role}`,
    sub: lens === "ai-tech" ? p.statusNote : `${p.statusNote}. ${p.angle[lens]}`,
    bullets,
  };
}

function educationEntries(order: string[]): CvEntry[] {
  return order.map((id) => {
    const e = education.find((x) => x.id === id)!;
    return {
      heading: `${e.programme} — ${e.institution}`,
      sub: [e.location, e.note].filter(Boolean).join(". "),
      period: e.period,
      bullets: [],
    };
  });
}

export const cvVariants: CvVariant[] = [
  {
    id: "ai-tech",
    slug: "ai-technology",
    label: "AI & Technology",
    fileName: "Abraham_Tikuye_AI_Technology.pdf",
    headline: "Software & AI Developer",
    summary:
      "Software and AI-focused developer with a Computer Science background and current Engineering Management studies. Builds web products in TypeScript, React and Next.js, integrates language models into real workflows, and tests what he ships.",
    suits: ["Software or frontend developer", "AI engineer or developer", "Automation developer", "Technical analyst"],
    sections: [
      { title: "Experience", entries: experienceEntries(fayda.bullets.slice(0, 3)) },
      {
        title: "Projects",
        entries: [
          projectEntry("aeromind", "ai-tech", [
            "Built the full prototype in Next.js and TypeScript with separate trainee and psychologist portals.",
            "Implemented an AI tutor that answers from lesson material using embeddings and retrieval, with rules that stop it diagnosing or judging fitness to fly.",
            "Put all model calls behind one provider interface, with a labelled fallback when no AI provider is configured.",
            "Covered the journey, permissions and AI plan generation with automated tests.",
          ]),
          projectEntry("agentcover", "ai-tech", [
            "Built the multi-tenant foundation: authentication, organisations, roles, invitations and audit log.",
            "Enforced access with Postgres Row Level Security and tested the rules on an in-process Postgres.",
            "Shared one Zod schema per form between browser and server.",
          ]),
          projectEntry("creatorpay", "ai-tech", [
            "Built campaign, payroll, escrow and batch-payout interfaces in React and TypeScript on Supabase.",
            "Defined the SQL schema and seed data and documented the API.",
          ]),
        ],
      },
      { title: "Education", entries: educationEntries(["perugia", "upt", "gondar"]) },
    ],
    skills: [
      { title: "Languages & frameworks", items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "Redux", "Node.js"] },
      { title: "Data & backend", items: ["Supabase", "PostgreSQL", "Row Level Security", "REST APIs"] },
      { title: "AI", items: ["LLM API integration", "Structured output", "Embeddings and retrieval", "Prompt design and guardrails"] },
      { title: "Quality & tools", items: ["Vitest", "Playwright", "Jest", "Git", "GitHub"] },
    ],
  },
  {
    id: "product",
    slug: "product-engineering-management",
    label: "Product & Engineering Management",
    fileName: "Abraham_Tikuye_Product_Engineering_Management.pdf",
    headline: "Product & Technical Project Profile",
    summary:
      "Engineering Management student with a software and AI background. Frames problems from the user's side, writes clear specifications and phased roadmaps, and can build the first version himself. Looking for associate product, product analyst or technical project coordination roles.",
    suits: ["Associate product manager", "Product or business analyst", "Technical project coordinator", "PMO analyst"],
    sections: [
      {
        title: "Product & project work",
        entries: [
          projectEntry("agentcover", "product", [
            "Framed a new problem, the risk created by autonomous AI agents, and identified two user groups.",
            "Wrote the product overview, architecture, security notes and a phased roadmap.",
            "Scoped Phase 1 to the foundation every later module depends on, and delivered it.",
            "Kept planned modules visibly separate from built ones in the product and its documentation.",
          ]),
          projectEntry("aeromind", "product", [
            "Co-founded the project around one hypothesis: linking professional assessment to ongoing development.",
            "Mapped the journey for two user roles and delivered it end to end as a working prototype.",
            "Cut the MVP to trainees and psychologists; flight schools, airlines and payments are deliberately out of scope.",
            "Wrote product guardrails for a sensitive domain, including what the product must never claim.",
          ]),
        ],
      },
      {
        title: "Experience",
        entries: experienceEntries([
          "Designed and implemented the frontend for a grievance management workflow used by operations staff.",
          "Organised the interface around how a case is found, inspected and updated.",
        ]),
      },
      { title: "Education", entries: educationEntries(["perugia", "upt", "gondar"]) },
    ],
    skills: [
      { title: "Product", items: ["Problem framing", "Product specification", "Roadmapping", "Feature prioritisation", "Stakeholder mapping"] },
      { title: "Delivery", items: ["Scope definition", "Phased planning", "Technical documentation", "Risk and dependency tracking"] },
      { title: "Technical base", items: ["TypeScript", "React", "Next.js", "PostgreSQL", "LLM integration", "Automated testing"] },
    ],
  },
  {
    id: "marketing",
    slug: "technical-marketing",
    label: "Technical Marketing",
    fileName: "Abraham_Tikuye_Technical_Marketing.pdf",
    headline: "Technical Marketing Profile",
    summary:
      "Technically trained communicator with a software and AI background and Engineering Management studies. Understands products at the level of the code, and explains them plainly: what they do, who they are for, and what they do not do. Seeking an entry-level technical or product marketing role; marketing experience so far comes from his own products.",
    suits: ["Technical marketing associate", "Product marketing associate", "Technical content or developer marketing", "Go-to-market associate"],
    sections: [
      {
        title: "Positioning & communication work",
        entries: [
          projectEntry("agentcover", "marketing", [
            "Defined the positioning: risk intelligence for AI agents, clearly distinct from being an insurer or broker.",
            "Wrote the public site: home, how it works, about and security pages.",
            "Explained an unfamiliar problem to a business audience before presenting any feature.",
            "Built a demo preview with clearly labelled synthetic data so the product can be shown honestly.",
          ]),
          projectEntry("aeromind", "marketing", [
            "Positioned a specialised product for two audiences: trainee pilots and aviation psychologists.",
            "Reviewed existing aviation assessment tools and set a rule against 'first', 'only' or 'unique' claims.",
            "Wrote careful product language for a sensitive domain: educational, not clinical.",
          ]),
          projectEntry("grievance-portal", "marketing", [
            "Turned internal internship work into a public showcase with mock data and a clear written account of my contribution.",
          ]),
        ],
      },
      {
        title: "Experience",
        entries: experienceEntries([
          "Designed and implemented the frontend for a grievance management workflow.",
          "Documented the work for a public audience without exposing internal details.",
        ]),
      },
      { title: "Education", entries: educationEntries(["perugia", "upt", "gondar"]) },
    ],
    skills: [
      { title: "Communication", items: ["Technical storytelling", "Product positioning", "Technical documentation", "Competitive research"] },
      { title: "Developing", items: ["Go-to-market fundamentals", "Product launch planning"] },
      { title: "Technical literacy", items: ["TypeScript", "React", "Next.js", "LLM integration", "Databases", "APIs"] },
    ],
  },
];

export function getCvVariant(id: Lens): CvVariant {
  return cvVariants.find((v) => v.id === id)!;
}
