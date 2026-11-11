"use client";

import { useState } from "react";
import type { ProjectCategory } from "@/content/types";

const filters: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai-tech", label: "AI & Technology" },
  { id: "product", label: "Product" },
  { id: "project-engineering", label: "Project / Engineering" },
  { id: "technical-marketing", label: "Technical Communication" },
];

/**
 * Filters the project list. Rows are rendered on the server and passed in as
 * children; each one carries its categories in data-categories.
 */
export function ProjectBrowser({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  return (
    <div data-filter={active}>
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-1.5">
        {filters.map((filter) => {
          const on = filter.id === active;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(filter.id)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] transition-colors ${
                on ? "border-fg bg-fg text-bg" : "border-line-strong text-muted hover:border-fg hover:text-fg"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      {active !== "all" && (
        <style>{`[data-filter="${active}"] [data-categories]:not([data-categories~="${active}"]){display:none}`}</style>
      )}
      {children}
    </div>
  );
}
