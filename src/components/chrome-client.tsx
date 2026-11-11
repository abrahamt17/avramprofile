"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { setTheme, useTheme } from "@/lib/prefs";
import { nav } from "@/lib/site";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-6 md:flex">
      {nav.map((item) => {
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={`text-sm transition-colors hover:text-fg ${current ? "text-fg" : "text-muted"}`}
            >
              {item.label}
              {current && <span aria-hidden className="ml-1.5 inline-block size-1.5 rounded-full bg-accent align-middle" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function ThemeToggle() {
  const theme = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-8 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-fg hover:text-fg"
    >
      <svg aria-hidden viewBox="0 0 16 16" className="size-3.5">
        <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
      </svg>
    </button>
  );
}

function subscribeMinute(callback: () => void) {
  const id = window.setInterval(callback, 15_000);
  return () => window.clearInterval(id);
}

/** Current time where Abraham is. Renders nothing on the server. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribeMinute,
    () => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date()),
    () => "",
  );
  if (!time) return null;
  return (
    <span>
      <span aria-hidden> · </span>
      <span className="tabular-nums">{time}</span> local
    </span>
  );
}

/** Moves the hero grid's spotlight with the pointer. Purely decorative. */
export function GridField() {
  return (
    <div
      aria-hidden
      className="grid-field"
      ref={(node) => {
        if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const parent = node.parentElement;
        if (!parent) return;
        const move = (event: PointerEvent) => {
          const rect = parent.getBoundingClientRect();
          node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
          node.style.setProperty("--my", `${event.clientY - rect.top}px`);
        };
        parent.addEventListener("pointermove", move);
        return () => parent.removeEventListener("pointermove", move);
      }}
    />
  );
}
