import type { SkillGroup } from "./types.ts";

/**
 * Every skill carries an evidence label and points at where it was used.
 * No percentages, no bars. If Abraham would not discuss it in an interview,
 * it does not belong here.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "technical",
    title: "Technical foundations",
    lens: "ai-tech",
    intro: "What I write software with.",
    skills: [
      { name: "TypeScript & JavaScript", evidence: "Professional experience", where: ["fayda", "agentcover", "aeromind"] },
      { name: "React", evidence: "Professional experience", where: ["fayda", "agentcover", "aeromind", "creatorpay"] },
      { name: "Next.js", evidence: "Used in project", where: ["agentcover", "aeromind"] },
      { name: "Tailwind CSS", evidence: "Used in project", where: ["agentcover", "aeromind", "creatorpay"] },
      { name: "Supabase & Postgres", evidence: "Used in project", where: ["agentcover", "aeromind", "creatorpay"] },
      { name: "Row Level Security", evidence: "Used in project", where: ["agentcover"] },
      { name: "Redux & Redux-Saga", evidence: "Used in project", where: ["song-manager"] },
      { name: "Node.js & Express", evidence: "Used in project", where: ["telegram-archive-viewer", "grievance-portal"] },
      { name: "Testing: Vitest, Playwright, Jest", evidence: "Used in project", where: ["agentcover", "aeromind", "telegram-archive-viewer"] },
      { name: "Git & GitHub", evidence: "Used in project", where: ["agentcover", "aeromind"] },
    ],
  },
  {
    id: "ai",
    title: "AI and technology",
    lens: "ai-tech",
    intro: "Only what I have actually used, not what I have read about.",
    skills: [
      { name: "LLM API integration", evidence: "Used in project", where: ["aeromind"] },
      { name: "Structured model output with schemas", evidence: "Used in project", where: ["aeromind"] },
      { name: "Embeddings and retrieval", evidence: "Used in project", where: ["aeromind"] },
      { name: "Prompt design and AI guardrails", evidence: "Used in project", where: ["aeromind"] },
      { name: "AI agent risk concepts", evidence: "Used in project", where: ["agentcover"] },
      { name: "Software architecture", evidence: "Used in project", where: ["agentcover", "aeromind"] },
    ],
  },
  {
    id: "product",
    title: "Product and delivery",
    lens: "product",
    intro: "Applied on my own products, and studied in Engineering Management.",
    skills: [
      { name: "Problem framing and product discovery", evidence: "Used in project", where: ["agentcover", "aeromind"] },
      { name: "Product specification", evidence: "Used in project", where: ["agentcover", "aeromind"] },
      { name: "Roadmapping and phased scope", evidence: "Used in project", where: ["agentcover"] },
      { name: "Feature prioritisation", evidence: "Used in project", where: ["aeromind"] },
      { name: "Stakeholder mapping", evidence: "Used in project", where: ["aeromind"] },
      { name: "Project coordination", evidence: "Coursework", where: [] },
      { name: "Process improvement and systems thinking", evidence: "Coursework", where: [] },
      { name: "Agile and Scrum fundamentals", evidence: "Currently developing", where: [] },
    ],
  },
  {
    id: "marketing",
    title: "Technical marketing",
    lens: "marketing",
    intro: "A developing area, backed by project work rather than paid marketing roles.",
    skills: [
      { name: "Technical storytelling", evidence: "Used in project", where: ["agentcover", "aeromind"] },
      { name: "Product positioning", evidence: "Used in project", where: ["agentcover", "aeromind"] },
      { name: "Technical documentation", evidence: "Used in project", where: ["agentcover", "aeromind", "grievance-portal"] },
      { name: "Competitive research", evidence: "Used in project", where: ["aeromind"] },
      { name: "Go-to-market fundamentals", evidence: "Currently developing", where: [] },
      { name: "Product launch planning", evidence: "Currently developing", where: [] },
    ],
  },
];
