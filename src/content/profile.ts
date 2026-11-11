import type { Education, Lens, LensText } from "./types.ts";

export const profile = {
  name: "Abraham Tikuye",
  shortName: "Abraham",
  location: "Timișoara, Romania",
  timeZone: "Europe/Bucharest",
  positioning: "Technology. Intelligence. Product Innovation.",
  links: {
    linkedin: "https://www.linkedin.com/in/abraham-tikuye-31a485283/",
    github: "https://github.com/abrahamt17",
  },
  /** Add only when Abraham approves a public address. See CONTENT_VERIFICATION.md. */
  email: null as string | null,
} as const;

export const lenses: { id: Lens; label: string; short: string }[] = [
  { id: "ai-tech", label: "AI & Technology", short: "Build" },
  { id: "product", label: "Product & Engineering", short: "Plan" },
  { id: "marketing", label: "Technical Marketing", short: "Explain" },
];

/**
 * The headline is one sentence in three parts. Each lens lights up its part.
 */
export const headline: { lens: Lens; text: string }[] = [
  { lens: "ai-tech", text: "I build with technology," },
  { lens: "product", text: "think in products," },
  { lens: "marketing", text: "and help turn complex ideas into useful solutions." },
];

/** The hero's three words. Each one is a lens. */
export const verbs: { lens: Lens; word: string; line: string }[] = [
  { lens: "ai-tech", word: "Build", line: "I build with technology." },
  { lens: "product", word: "Plan", line: "I think in products." },
  { lens: "marketing", word: "Explain", line: "I turn complex ideas into useful solutions." },
];

/**
 * Numbers on the home page. Each one is countable and has a source.
 * Add a number only if it is real and Abraham's own.
 */
export const stats: { value: string; unit?: string; label: string; source: string }[] = [
  { value: "1", unit: "yr", label: "Full-time at Ethiopia's national ID programme", source: "Software Developer, Fayda" },
  { value: "2", label: "Products founded and built", source: "AgentCover, AeroMind" },
  { value: "31", label: "Public repositories on GitHub", source: "github.com/abrahamt17, Nov 2026" },
  { value: "3", label: "Countries studied and worked in", source: "Ethiopia, Italy, Romania" },
];

export const intro: LensText = {
  "ai-tech":
    "Software and AI-focused builder with a Computer Science background. I work mostly in TypeScript, React and Next.js, connect language models to real workflows, and test what I ship.",
  product:
    "A builder studying Engineering Management. I start from the user's problem, write down what is in and out of scope, and keep a clear line between what is built and what is only planned.",
  marketing:
    "A technical person who likes explaining things. I can read the code behind a product, so I can say plainly what it does, who it is for, and what it does not do yet.",
};

export const story: { year: string; title: string; body: string }[] = [
  {
    year: "2021",
    title: "Computer Science",
    body: "I started with software. I studied Computer Science at the University of Gondar for about three years and did not complete the degree.",
  },
  {
    year: "1 year",
    title: "A national-scale system",
    body: "I worked full-time for a year at National ID Ethiopia (Fayda), mainly on the frontend of a grievance management portal.",
  },
  {
    year: "2024",
    title: "Engineering Management",
    body: "I moved to Italy to study Engineering Management at the University of Perugia, adding systems, operations and project thinking to the technical base.",
  },
  {
    year: "Now",
    title: "AI products",
    body: "Based in Timișoara on Erasmus at Politehnica, with AI engineering experience at AiGot and two products of my own in progress: AgentCover and AeroMind.",
  },
];

export const about = {
  lead: "I did not leave technology for management. I added management to technology.",
  paragraphs: [
    "I began where most developers begin: writing code because it was fun. Computer Science at the University of Gondar gave me the foundations, and frontend work gave me something to show people. I left before finishing that degree, and I say so plainly.",
    "A year at National ID Ethiopia changed how I saw software. The portal I worked on was one small part of a very large public system, and it mattered less how clever the code was than whether an operator could find a case and resolve it.",
    "That is why I chose Engineering Management next. I wanted to understand the parts around the code: how work is scoped, how decisions and trade-offs are made, and how a team gets from an idea to something people can use.",
    "Today I work where those meet. I build AI-enabled products, I write their specifications and roadmaps, and I care about explaining them honestly, including what is not built yet.",
  ],
  interests: [
    "AI-enabled products and agent risk",
    "Software engineering with TypeScript and React",
    "Product discovery and specification",
    "Technical project coordination",
    "Explaining technical products clearly",
  ],
};

export const education: Education[] = [
  {
    id: "perugia",
    institution: "Università degli Studi di Perugia",
    programme: "Engineering Management studies",
    period: "2024 – present",
    location: "Perugia, Italy",
    note: "In progress.",
  },
  {
    id: "upt",
    institution: "Universitatea Politehnica Timișoara",
    programme: "Erasmus mobility",
    location: "Timișoara, Romania",
    note: "Exchange period within the Engineering Management studies. Not a separate degree.",
  },
  {
    id: "gondar",
    institution: "University of Gondar",
    programme: "Undergraduate studies in Computer Science",
    period: "2021 – 2024",
    location: "Gondar, Ethiopia",
    note: "Did not complete the degree.",
  },
];
