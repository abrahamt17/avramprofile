import type { Project } from "./types.ts";

/**
 * `implementedFeatures` holds only what exists in the repository today.
 * Anything from a roadmap or product concept goes in `plannedFeatures`.
 */
export const projects: Project[] = [
  {
    id: "agentcover",
    name: "AgentCover",
    role: "Founder, product and technical development",
    tagline: "Risk intelligence for organisations that run autonomous AI agents.",
    angle: {
      "ai-tech":
        "The secure foundation of a product many companies can share, with access rules enforced and tested at the database level.",
      product:
        "A product specification and phased roadmap for a new kind of risk, with Phase 1 built and the rest honestly marked as planned.",
      marketing:
        "Explaining an emerging problem, AI agent risk, to European organisations without overstating what the product does.",
    },
    status: "in-progress",
    statusNote: "Phase 1 built",
    featured: true,
    categories: ["ai-tech", "product", "project-engineering", "technical-marketing"],
    problem:
      "AI agents are starting to act on their own: sending messages, moving data, calling tools. That creates operational, financial, security and liability risk that most organisations cannot yet describe, let alone assess or insure. There is no shared record of which agents exist, who owns them, or what they are allowed to do.",
    users: [
      "European businesses deploying AI agents",
      "AI developers who need to show their agents are managed responsibly",
    ],
    approach:
      "Treat it as a risk-intelligence product first and an insurance product second. Start with the unglamorous base every later module depends on: organisations, roles, invitations and an audit trail. Then add the agent registry, risk assessment and insurance intelligence in phases, each one shipped only when it is real.",
    personalContribution: [
      "Framed the problem and wrote the product overview, architecture, database schema, security notes and phased roadmap.",
      "Built the Phase 1 codebase: public site, authentication flows, onboarding, organisation tenancy, team management and audit log.",
      "Designed the role and permission model and enforced it in the database with Row Level Security.",
      "Set up the test approach: unit and database tests on an in-process Postgres, and browser tests for the public pages.",
    ],
    implementedFeatures: [
      "Public site: home, how it works, about and security pages",
      "Demo preview with a fictional organisation and clearly labelled synthetic data",
      "Sign up, sign in, password reset and email verification flows",
      "Three-step onboarding that creates an organisation and its owner",
      "Organisation tenancy, roles and Row Level Security",
      "Team invitations with hashed tokens, role changes and member removal",
      "Audit log of organisation events",
      "Dashboard shell, overview and settings",
    ],
    plannedFeatures: [
      "AI agent registry and profiles",
      "Risk assessment and scoring",
      "Insurance coverage intelligence",
      "Risk monitoring",
      "Incident reporting",
      "AI risk copilot",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase (Postgres, Auth, RLS)",
      "Zod",
      "React Hook Form",
      "Vitest",
      "PGlite",
      "Playwright",
    ],
    decisions: [
      {
        title: "Foundation before features",
        body: "The interesting modules all need tenancy, roles and an audit trail to be trustworthy. Building those first is slower to demo but means later features do not have to be rebuilt.",
      },
      {
        title: "Security rules live in the database",
        body: "Access is enforced with Row Level Security rather than only in application code, and the rules are tested against a real Postgres engine running in-process.",
      },
      {
        title: "Unbuilt modules say so",
        body: "Agents, risk, insurance, incidents, monitoring and the copilot appear in the product as labelled placeholder pages. Nobody should mistake the roadmap for the product.",
      },
      {
        title: "One schema for browser and server",
        body: "Each form is validated by a single Zod schema shared by both sides, so the rules cannot drift apart.",
      },
    ],
    outcomes: [
      "Phase 1 is implemented. Public pages and the demo are browser-tested; tenancy, roles, invitations and the audit log are tested at the database level.",
      "The authentication flows are implemented but have not yet been exercised against a live Supabase project.",
      "No users, customers or deployments yet. This is an early-stage product.",
    ],
    learnings: [
      "Writing the roadmap and the 'what works today' table before writing features kept the scope honest.",
      "Next: the agent registry, which is the record every other module reads from.",
    ],
    flow: {
      caption: "Product journey. Solid steps are built; outlined steps are planned.",
      steps: [
        { label: "Organisation", note: "tenancy, roles", built: true },
        { label: "Audit trail", note: "who did what", built: true },
        { label: "Agent registry", built: false },
        { label: "Risk assessment", built: false },
        { label: "Coverage intelligence", built: false },
        { label: "Monitoring & incidents", built: false },
      ],
    },
    boundaries: [
      "AgentCover is a technology and risk-intelligence platform. It is not an insurer, broker or underwriter.",
      "It does not issue policies or make coverage decisions.",
      "Risk insights are educational, not regulated insurance or legal advice.",
    ],
    links: [],
    evidenceStatus: "verified",
    source: "Project repository README, roadmap and source code (private repository), reviewed November 2026.",
  },
  {
    id: "aeromind",
    name: "AeroMind",
    role: "Co-founder, product and technical lead",
    tagline: "An aviation psychology platform that turns a professional's assessment into a student pilot's development plan.",
    angle: {
      "ai-tech":
        "A working MVP I built alone: two portals, a learning academy, and an AI tutor with strict limits on what it may say.",
      product:
        "I led a team of three from idea to pitch: product plan, a deliberately narrow MVP, and a business case with pricing and a financial plan.",
      marketing:
        "A pitch that explains a specialised product to students, schools and psychologists without claiming to be first, unique or clinical.",
    },
    status: "prototype",
    statusNote: "Working prototype, not deployed",
    featured: true,
    categories: ["ai-tech", "product", "project-engineering", "technical-marketing"],
    problem:
      "Becoming a pilot is an expensive bet, and psychological assessment decides who gets through. A student is tested when they enter flight school and again before an airline lets them fly. In the 18 to 24 months between, stress, workload and decision-making all get harder, and most students prepare alone, with no structured professional feedback. AeroMind fills that middle: a qualified psychologist reviews the student, and the approved recommendations become a learning plan.",
    users: ["Aspiring and student pilots in Europe", "Aviation psychology professionals"],
    approach:
      "Three connected parts: a marketplace where students find a professional, an academy with courses on stress, decisions and fatigue, and an AI learning companion. I built the whole journey end to end for two roles before adding anything else, kept the professional responsible for every judgment, and used AI only for teaching and for drafting plans from approved recommendations. In parallel the team built the business case: who pays, how much, and what has to be true for it to work.",
    personalContribution: [
      "Built the entire MVP myself, from the first screen to the AI tutor.",
      "Led a team of three: set the plan, split the work, and kept product, business case and pitch moving together.",
      "Wrote the product plan: the user journeys for both roles, what is in the MVP and what is deliberately left out.",
      "Worked on the business plan with the team: pricing, market sizing, a three-year financial plan and a six-week validation plan.",
      "Set the product's guardrails: what it must never claim, and where a qualified professional must decide.",
    ],
    implementedFeatures: [
      "Trainee portal: onboarding, profile, dashboard, assessments, reports, development plan and scenarios",
      "Psychologist portal: onboarding, profile, dashboard, assessment review and report writing",
      "Professional directory and assessment requests",
      "Full demo journey for both roles, with all professionals, questionnaires and reports labelled as samples",
      "Academy: course catalogue, simulated enrolment, lesson player, quizzes and progress",
      "AI tutor that answers from the lesson material and declines off-topic or clinical questions",
      "AI-drafted development plans, with pre-written labelled content when no AI provider is connected",
      "Runs on a built-in database with no setup, or on hosted Supabase",
    ],
    plannedFeatures: [
      "Public deployment",
      "Paid plan and payments",
      "Flight school distribution and licences",
      "PDF report upload",
      "A first school cohort on the live product",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (Postgres)",
      "PGlite with pgvector",
      "OpenAI API",
      "Zod",
      "Vitest",
    ],
    decisions: [
      {
        title: "AI teaches; professionals assess",
        body: "The tutor is written to never diagnose, never say whether someone is fit to fly, and never predict an assessment result. Those judgments stay with a qualified professional.",
      },
      {
        title: "One place to choose the AI provider",
        body: "All model calls go through a small provider interface. With no provider configured, the app falls back to pre-written content that is labelled as such, so the demo never fails silently.",
      },
      {
        title: "A narrow MVP on purpose",
        body: "Flight schools, airlines and payments are part of the long-term picture and are explicitly not built. The MVP serves trainees and psychologists only.",
      },
      {
        title: "No 'first' or 'only'",
        body: "Digital assessment tools already exist in aviation. The product copy treats assessment-to-development as a hypothesis to test, not a proven gap.",
      },
    ],
    outcomes: [
      "The MVP journey works end to end for both roles and is covered by automated tests, including database permissions.",
      "The AI tutor and development plans have been tested with real model responses.",
      "Entered in the SIC competition as a three-person team, with a pitch deck and a working product to show.",
      "Not deployed. No real users, no revenue, and no real psychological data: everything shown is sample data, and the business figures are estimates.",
    ],
    learnings: [
      "In a sensitive domain, most of the product work is deciding what the software must refuse to do.",
      "A working product changes the conversation: people react to what they can click, not to a slide.",
      "Next: turn assumptions into evidence with student, flight school and psychologist interviews before building more.",
    ],
    flow: {
      caption: "The trainee journey. Every step shown is built in the prototype.",
      steps: [
        { label: "Discover", note: "find a professional", built: true },
        { label: "Request", note: "ask for assessment", built: true },
        { label: "Assess", note: "by the professional", built: true },
        { label: "Report", note: "written and released", built: true },
        { label: "Plan", note: "development plan", built: true },
        { label: "Practise", note: "lessons, scenarios", built: true },
      ],
    },
    plan: {
      note: "From the team's pitch deck, November 2026. These are estimates and targets, not results. Nothing here has been earned or validated yet.",
      items: [
        { value: "€99", label: "Planned price per student, per year" },
        { value: "20%", label: "Planned commission on each professional review" },
        { value: "960", label: "Paying students needed to break even" },
        { value: "Year 2", label: "Planned break-even in the base case" },
        { value: "€4.5M", label: "Our estimate of yearly European spend on assessment preparation" },
        { value: "€27k", label: "Funding asked for the first year" },
      ],
      next: "Next six weeks: test the assumptions with 30 students, 15 flight schools and 5 aviation psychologists, then run one school cohort on the live prototype.",
    },
    boundaries: [
      "AeroMind does not diagnose mental-health conditions.",
      "It does not issue fitness certificates and has no aviation medical or regulatory approval.",
      "Qualified professionals remain responsible for assessments and decisions.",
      "All data in the prototype is sample data.",
    ],
    links: [{ label: "Repository", url: "https://github.com/abrahamt17/Aeromind" }],
    evidenceStatus: "verified",
    source: "Public repository (README, project notes, source code, commit history) and the team's pitch deck, both November 2026.",
  },
  {
    id: "creatorpay",
    name: "CreatorPay",
    role: "Developer",
    tagline: "A payroll and campaign platform prototype for influencer marketing.",
    angle: {
      "ai-tech":
        "A working application covering campaigns, creator payroll, escrow and batch payouts, with a documented data model.",
      product:
        "Business software built around one operational question: how do you pay creators fairly for measured performance?",
      marketing:
        "A product that sits inside marketing operations, where attribution, creator trust and payouts meet.",
    },
    status: "prototype",
    statusNote: "Prototype with a public demo",
    featured: true,
    categories: ["ai-tech", "project-engineering"],
    problem:
      "Brands that work with many creators have to track what each one delivered, decide what that is worth, and pay them, often across countries. Doing that in spreadsheets is slow and hard to audit.",
    users: ["Marketing teams running creator campaigns", "Creators who are paid on performance"],
    approach:
      "Model the work as a pipeline, from campaign to tracked results to a payroll calculation to a payout, and give each stage its own screen on top of a single Postgres schema.",
    personalContribution: [
      "Built the application in the public repository: dashboard, campaign, creator, fraud and payroll interfaces.",
      "Defined the database schema and seed data, and documented the API and setup.",
    ],
    implementedFeatures: [
      "Dashboard with campaign table, performance charts and top creators",
      "Payroll screens: batch payout dialog, batch history, escrow panel and creator payment profiles",
      "Tax document dialog for creator payments",
      "Fraud review cards and detail views",
      "Creator marketplace with a trust view",
      "Protected routes, light and dark themes and a language toggle",
      "SQL schema, seed data, API notes and a migration guide in the repository",
    ],
    plannedFeatures: [],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase (Postgres, Auth)",
      "TanStack Query",
      "Recharts",
      "Vitest",
    ],
    decisions: [
      {
        title: "Payroll as a pipeline, not a form",
        body: "Payouts are grouped into batches with a history and an escrow view, so there is always a record of what was paid, to whom and why.",
      },
      {
        title: "Database-first",
        body: "The schema and seed data are plain SQL files in the repository, so the data model can be read and reviewed without running the app.",
      },
    ],
    outcomes: [
      "A working prototype with a public demo. It has no production users, and payouts have not been run with real money.",
    ],
    learnings: [
      "Business software is mostly about the record: who approved what, and when.",
    ],
    flow: {
      caption: "The pipeline the interface is organised around.",
      steps: [
        { label: "Campaign", built: true },
        { label: "Results", note: "tracked performance", built: true },
        { label: "Payroll", note: "calculate amounts", built: true },
        { label: "Escrow", built: true },
        { label: "Batch payout", built: true },
      ],
    },
    links: [
      { label: "Repository", url: "https://github.com/abrahamt17/engage-royal-flow" },
      { label: "Live demo", url: "https://engage-royal-flow.vercel.app" },
    ],
    evidenceStatus: "user-confirmation-needed",
    source:
      "Public repository file structure, README and dependency list, reviewed November 2026. Features are listed from the interface code present in the repository.",
  },
  {
    id: "grievance-portal",
    name: "Grievance Portal Showcase",
    role: "Frontend developer",
    tagline: "A public, sanitised version of the portal I worked on at Fayda.",
    angle: {
      "ai-tech": "An operations interface for case handlers: queue table, search, pagination and case detail.",
      product: "An interface designed around how operations staff find and resolve a case.",
      marketing: "A careful public showcase of internal work, using mock data only.",
    },
    status: "archived",
    statusNote: "Public showcase",
    featured: false,
    categories: ["ai-tech", "project-engineering"],
    problem: "",
    users: [],
    approach: "",
    personalContribution: [],
    implementedFeatures: [
      "Grievance queue table with search, pagination and updates",
      "Case detail modal and dashboard summaries",
      "Local sample backend with mock data",
    ],
    plannedFeatures: [],
    technologies: ["React", "TypeScript", "React Table", "SCSS", "Node.js"],
    decisions: [],
    outcomes: [],
    learnings: [],
    links: [{ label: "Repository", url: "https://github.com/abrahamt17/GRM-table" }],
    evidenceStatus: "verified",
    source: "Public repository README.",
  },
  {
    id: "telegram-archive-viewer",
    name: "Telegram Archive Viewer",
    role: "Developer",
    tagline: "Reads exported Telegram chats and shows them as a local, read-only archive.",
    angle: {
      "ai-tech": "Parsers for Telegram's JSON and HTML export formats, with tests, behind a small Express server.",
      product: "A small tool with one job: read your own exported chats, locally, without uploading them anywhere.",
      marketing: "A privacy-first utility explained in one sentence.",
    },
    status: "prototype",
    statusNote: "Personal tool",
    featured: false,
    categories: ["ai-tech"],
    problem: "",
    users: [],
    approach: "",
    personalContribution: [],
    implementedFeatures: [
      "Imports JSON, HTML and ZIP chat exports",
      "Telegram-style read-only viewer in the browser",
      "Parser tests with fixtures",
    ],
    plannedFeatures: [],
    technologies: ["JavaScript", "Node.js", "Express", "Cheerio", "Jest"],
    decisions: [],
    outcomes: [],
    learnings: [],
    links: [{ label: "Repository", url: "https://github.com/abrahamt17/why_not_telegram_clone" }],
    evidenceStatus: "verified",
    source: "Public repository README and file structure.",
  },
  {
    id: "song-manager",
    name: "Song Manager",
    role: "Developer",
    tagline: "A small React and Redux app for managing a list of songs over a REST API.",
    angle: {
      "ai-tech": "State management and API calls for fetching, adding, editing and deleting.",
      product: "A compact exercise in the complete create, read, update and delete loop.",
      marketing: "A simple app with a clear README.",
    },
    status: "deployed",
    statusNote: "Live",
    featured: false,
    categories: ["ai-tech"],
    problem: "",
    users: [],
    approach: "",
    personalContribution: [],
    implementedFeatures: [
      "Fetch songs from a REST API (JSONPlaceholder)",
      "Add, edit and delete songs",
      "Show more or fewer results",
    ],
    plannedFeatures: [],
    technologies: ["React", "Redux Toolkit", "Redux-Saga", "Emotion", "Axios"],
    decisions: [],
    outcomes: [],
    learnings: [],
    links: [
      { label: "Repository", url: "https://github.com/abrahamt17/Music-manager-with-RESTapi" },
      { label: "Live", url: "https://song-manager-with-restapi.vercel.app/" },
    ],
    evidenceStatus: "verified",
    source: "Public repository README and dependency list.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const additionalProjects = projects.filter((p) => !p.featured);

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
