"use client";

import { lenses, verbs } from "@/content/profile";
import { setLens, useLens } from "@/lib/prefs";

/** The hero: three giant words. Pressing one changes what the whole site puts first. */
export function LensWords() {
  const active = useLens();
  return (
    <div role="group" aria-label="Choose what to emphasise">
      {verbs.map((verb) => {
        const lens = lenses.find((l) => l.id === verb.lens)!;
        return (
          <button
            key={verb.lens}
            type="button"
            data-part={verb.lens}
            aria-pressed={verb.lens === active}
            aria-label={`${verb.word}: read the site with ${lens.label} first`}
            onClick={() => setLens(verb.lens)}
            className="lens-word text-left"
          >
            {verb.word}
            <span className="stop">.</span>
          </button>
        );
      })}
    </div>
  );
}

/** Compact version for inner pages. */
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
