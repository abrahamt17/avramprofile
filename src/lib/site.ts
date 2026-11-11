/** The public address. NEXT_PUBLIC_SITE_URL overrides it (for example on a preview deployment). */
const fallback = process.env.NODE_ENV === "production" ? "https://abrahamt.work" : "http://localhost:3000";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallback).replace(/\/$/, "");

export const nav = [
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
] as const;
