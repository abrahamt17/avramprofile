"use client";

import { useSyncExternalStore } from "react";
import type { Lens } from "@/content/types";

/**
 * Lens and theme live as attributes on <html> (set before paint by the inline
 * script in the root layout) and are mirrored to localStorage. CSS does the
 * actual switching; these hooks only let controls show the current value.
 */

export type Theme = "light" | "dark";

const EVENT = "prefs-change";
const LENSES: Lens[] = ["ai-tech", "product", "marketing"];

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private mode or blocked storage: the choice still applies for this page.
  }
}

export function setLens(lens: Lens) {
  document.documentElement.dataset.lens = lens;
  save("lens", lens);
  window.dispatchEvent(new Event(EVENT));
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  save("theme", theme);
  window.dispatchEvent(new Event(EVENT));
}

export function useLens(): Lens {
  return useSyncExternalStore(
    subscribe,
    () => {
      const value = document.documentElement.dataset.lens as Lens | undefined;
      return value && LENSES.includes(value) ? value : "ai-tech";
    },
    () => "ai-tech",
  );
}

export function useTheme(): Theme {
  return useSyncExternalStore(
    subscribe,
    () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
    () => "light",
  );
}
