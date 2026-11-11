"use client";

import { lenses } from "@/content/profile";
import { setLens, useLens } from "@/lib/prefs";

/** The site's one big control: read Abraham as a builder, a planner or an explainer. */
export function LensSwitch({ compact = false }: { compact?: boolean }) {
  const active = useLens();

  return (
    <div role="group" aria-label="Choose what to emphasise" className="inline-flex flex-wrap gap-1.5">
      {lenses.map((lens, index) => {
        const on = lens.id === active;
        return (
          <button
            key={lens.id}
            type="button"
            aria-pressed={on}
            onClick={() => setLens(lens.id)}
            className={`group inline-flex items-center gap-2 rounded-full border font-mono uppercase tracking-[0.08em] transition-colors ${
              compact ? "px-3 py-1.5 text-[0.68rem]" : "px-4 py-2 text-[0.72rem]"
            } ${
              on
                ? "border-accent bg-accent text-accent-fg"
                : "border-line-strong text-muted hover:border-fg hover:text-fg"
            }`}
          >
            <span aria-hidden className={on ? "opacity-60" : "opacity-50"}>
              {String(index + 1).padStart(2, "0")}
            </span>
            {lens.label}
          </button>
        );
      })}
    </div>
  );
}
