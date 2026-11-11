"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cvVariants } from "@/content/cv";
import { lenses, profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { setLens, setTheme, useTheme } from "@/lib/prefs";
import { nav } from "@/lib/site";

const OPEN_EVENT = "open-palette";

type Item = { group: string; label: string; hint?: string; run: () => void };

/** Header button. Opens the palette; on small screens it is also the menu. */
export function PaletteButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted transition-colors hover:border-fg hover:text-fg"
      aria-label="Open menu and search"
    >
      <span className="md:hidden">Menu</span>
      <span className="hidden md:inline">Search</span>
      <kbd className="hidden rounded border border-line px-1 font-mono text-[0.65rem] normal-case md:inline">Ctrl K</kbd>
    </button>
  );
}

export function CommandPalette() {
  const router = useRouter();
  const theme = useTheme();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setQuery("");
    setIndex(0);
    dialog.showModal();
    inputRef.current?.focus();
  }, []);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => router.push(href);
    const out = (url: string) => () => window.open(url, "_blank", "noopener,noreferrer");
    return [
      { group: "Go to", label: "Home", run: go("/") },
      ...nav.map((n) => ({ group: "Go to", label: n.label, run: go(n.href) })),
      ...featuredProjects.map((p) => ({
        group: "Case studies",
        label: p.name,
        hint: p.statusNote,
        run: go(`/projects/${p.id}`),
      })),
      ...lenses.map((l) => ({
        group: "Read me as",
        label: l.label,
        hint: l.short,
        run: () => setLens(l.id),
      })),
      ...cvVariants.map((v) => ({
        group: "Download CV",
        label: v.label,
        hint: "PDF",
        run: out(`/cv/${v.fileName}`),
      })),
      {
        group: "Actions",
        label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
        run: () => setTheme(theme === "dark" ? "light" : "dark"),
      },
      { group: "Elsewhere", label: "GitHub", hint: "abrahamt17", run: out(profile.links.github) },
      { group: "Elsewhere", label: "LinkedIn", run: out(profile.links.linkedin) },
    ];
  }, [router, theme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.group} ${i.label} ${i.hint ?? ""}`.toLowerCase().includes(q));
  }, [items, query]);

  const active = Math.min(index, Math.max(filtered.length - 1, 0));

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const typing = event.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName);
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || (event.key === "/" && !typing)) {
        event.preventDefault();
        open();
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, open);
    };
  }, [open]);

  function run(item: Item | undefined) {
    if (!item) return;
    close();
    item.run();
  }

  function onInputKey(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = (active + (event.key === "ArrowDown" ? 1 : -1) + filtered.length) % Math.max(filtered.length, 1);
      setIndex(next);
      listRef.current?.querySelector(`[data-index="${next}"]`)?.scrollIntoView({ block: "nearest" });
    } else if (event.key === "Enter") {
      event.preventDefault();
      run(filtered[active]);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="palette"
      aria-label="Menu and search"
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <span aria-hidden className="font-mono text-sm text-muted">
          /
        </span>
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIndex(0);
          }}
          onKeyDown={onInputKey}
          placeholder="Where to?"
          aria-label="Search pages and actions"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={filtered.length ? `palette-item-${active}` : undefined}
          autoComplete="off"
          spellCheck={false}
          className="h-13 w-full bg-transparent py-4 text-base outline-none placeholder:text-muted"
        />
        <button type="button" onClick={close} className="label rounded border border-line px-1.5 py-0.5 hover:text-fg">
          Esc
        </button>
      </div>

      <ul ref={listRef} id="palette-list" role="listbox" className="flex-1 overflow-y-auto p-2">
        {filtered.length === 0 && <li className="px-3 py-6 text-sm text-muted">Nothing matches “{query}”.</li>}
        {filtered.map((item, i) => {
          const showGroup = i === 0 || filtered[i - 1].group !== item.group;
          return (
            <li key={`${item.group}-${item.label}`} role="presentation">
              {showGroup && <div className="label px-3 pb-1 pt-3">{item.group}</div>}
              <button
                type="button"
                id={`palette-item-${i}`}
                role="option"
                aria-selected={i === active}
                data-index={i}
                tabIndex={-1}
                onMouseMove={() => setIndex(i)}
                onClick={() => run(item)}
                className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-[0.95rem] ${
                  i === active ? "bg-accent text-accent-fg" : ""
                }`}
              >
                <span>{item.label}</span>
                {item.hint && <span className="font-mono text-[0.7rem] uppercase tracking-wider opacity-60">{item.hint}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </dialog>
  );
}
