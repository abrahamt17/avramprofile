import Link from "next/link";
import type { ReactNode } from "react";
import type { EvidenceLabel, FlowStep, Project, ProjectStatus } from "@/content/types";
import { LensText } from "./lens";

/** Page opening: small index label, large title, optional lead. */
export function PageIntro({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="wrap pb-12 pt-16 md:pb-16 md:pt-24">
      <p className="label rise">
        <span className="text-accent-text">{index}</span> — {kicker}
      </p>
      <h1 className="display rise mt-5 max-w-4xl text-[clamp(2.3rem,6vw,4.6rem)]" style={{ "--i": 1 } as React.CSSProperties}>
        {title}
      </h1>
      {children && (
        <div className="prose-p rise mt-7 max-w-2xl text-lg" style={{ "--i": 2 } as React.CSSProperties}>
          {children}
        </div>
      )}
    </section>
  );
}

export function SectionHead({ index, title, aside }: { index: string; title: string; aside?: ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6">
      <h2 className="label">
        <span className="text-accent-text">{index}</span> — {title}
      </h2>
      {aside && <div className="text-sm text-muted">{aside}</div>}
    </div>
  );
}

const statusDot: Record<ProjectStatus, "full" | "half" | "empty"> = {
  deployed: "full",
  "in-progress": "half",
  prototype: "half",
  concept: "empty",
  archived: "full",
};

/** Honest status marker: filled = live, half = partly built, hollow = concept. */
export function StatusTag({ status, note }: { status: ProjectStatus; note: string }) {
  const kind = statusDot[status];
  return (
    <span className="label inline-flex items-center gap-2 whitespace-nowrap">
      <Dot kind={kind} />
      {note}
    </span>
  );
}

export function Dot({ kind }: { kind: "full" | "half" | "empty" }) {
  return (
    <svg aria-hidden viewBox="0 0 10 10" className="size-2.5 shrink-0 text-accent-text">
      <circle cx="5" cy="5" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {kind === "full" && <circle cx="5" cy="5" r="4" fill="currentColor" />}
      {kind === "half" && <path d="M5 1a4 4 0 0 1 0 8z" fill="currentColor" />}
    </svg>
  );
}

export function EvidenceTag({ label }: { label: EvidenceLabel }) {
  const kind = label === "Professional experience" || label === "Used in project" ? "full" : label === "Coursework" ? "half" : "empty";
  return (
    <span className="label inline-flex items-center gap-2 whitespace-nowrap">
      <Dot kind={kind} />
      {label}
    </span>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={`size-4 ${className}`}>
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** A featured project as a full-width row. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${project.id}`} className="row reveal group px-1 py-7 md:px-3 md:py-9">
      <div className="grid items-baseline gap-x-8 gap-y-3 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)_auto]">
        <span className="label">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="row-title display text-3xl md:text-[2.6rem]">{project.name}</h3>
        <div>
          <LensText text={project.angle} as="p" className="prose-p text-[0.98rem]" />
          <div className="mt-3">
            <StatusTag status={project.status} note={project.statusNote} />
          </div>
        </div>
        <Arrow className="row-arrow hidden text-muted md:block" />
      </div>
    </Link>
  );
}

/** Product journey as linework. Solid nodes are built, hollow nodes are planned. A diagram, not a screenshot. */
export function FlowDiagram({ steps, caption }: { steps: FlowStep[]; caption: string }) {
  return (
    <figure className="reveal rounded-2xl border border-line bg-surface p-6 md:p-10">
      <ol className="grid gap-y-6 md:auto-cols-fr md:grid-flow-col">
        {steps.map((step, i) => (
          <li key={step.label} className="relative flex items-start gap-4 md:block">
            {/* connector */}
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className={`absolute left-[7px] top-4 h-[calc(100%+0.5rem)] border-l md:left-4 md:top-[7px] md:h-0 md:w-full md:border-l-0 md:border-t ${
                  step.built && steps[i + 1].built ? "border-fg/60" : "border-dashed border-line-strong"
                }`}
              />
            )}
            <span
              aria-hidden
              className={`relative z-10 mt-0.5 block size-[15px] shrink-0 rounded-full border-[1.5px] md:mt-0 ${
                step.built ? "border-fg bg-accent" : "border-line-strong bg-surface"
              }`}
            />
            <div className="md:mt-4 md:pr-4">
              <p className={`text-sm font-medium ${step.built ? "" : "text-muted"}`}>
                {step.label}
                <span className="sr-only">{step.built ? " (built)" : " (planned)"}</span>
              </p>
              {step.note && <p className="mt-0.5 text-xs text-muted">{step.note}</p>}
              <p aria-hidden className="label mt-1.5 text-[0.62rem]">
                {step.built ? "Built" : "Planned"}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="mt-8 border-t border-line pt-4 text-xs text-muted">{caption}</figcaption>
    </figure>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[0.78rem] text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  download,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  download?: boolean;
  external?: boolean;
}) {
  const className = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
    variant === "solid"
      ? "bg-fg text-bg hover:bg-accent hover:text-accent-fg"
      : "border border-line-strong hover:border-fg"
  }`;
  if (download || external) {
    return (
      <a
        href={href}
        className={className}
        {...(download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
