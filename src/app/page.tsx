import Link from "next/link";
import { GridField, LocalTime } from "@/components/chrome-client";
import { LensText } from "@/components/lens";
import { LensSwitch } from "@/components/lens-switch";
import { Arrow, ButtonLink, ProjectRow, SectionHead } from "@/components/ui";
import { cvVariants } from "@/content/cv";
import { experience } from "@/content/experience";
import { headline, intro, lenses, profile, story } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-line">
        <GridField />
        <div className="wrap relative pb-16 pt-20 md:pb-24 md:pt-32">
          <p className="label rise">
            {profile.name} · {profile.location}
            <LocalTime timeZone={profile.timeZone} />
          </p>

          <h1
            className="display rise mt-7 max-w-5xl text-[clamp(2.5rem,7.2vw,6rem)]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {headline.map((part, i) => (
              <span key={part.lens}>
                <span className="headline-part" data-part={part.lens}>
                  {part.text}
                </span>
                {i < headline.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <div
            className="rise mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <div>
              <p className="label mb-3">Read me as</p>
              <LensSwitch />
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">
                Same person, same facts. The lens only changes what the site puts first.
              </p>
            </div>
            <div>
              <LensText text={intro} as="p" className="text-lg leading-relaxed md:text-xl" />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/projects">
                  View projects <Arrow />
                </ButtonLink>
                {cvVariants.map((cv) => (
                  <span key={cv.id} data-lens-show={cv.id}>
                    <ButtonLink href={`/cv/${cv.fileName}`} variant="ghost" download>
                      Download CV
                    </ButtonLink>
                  </span>
                ))}
                <ButtonLink href="/contact" variant="ghost">
                  Contact
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className="wrap pt-20 md:pt-28">
        <SectionHead
          index="01"
          title="Selected work"
          aside={
            <Link href="/projects" className="link">
              All projects
            </Link>
          }
        />
        <div>
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="wrap pt-20 md:pt-28">
        <SectionHead
          index="02"
          title="Experience"
          aside={
            <Link href="/experience" className="link">
              Details
            </Link>
          }
        />
        <div>
          {experience.map((role) => (
            <Link key={role.id} href={`/experience#${role.id}`} className="row reveal px-1 py-6 md:px-3">
              <div className="grid items-baseline gap-x-8 gap-y-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto]">
                <h3 className="row-title text-xl font-medium tracking-tight">{role.organization}</h3>
                <p className="text-muted">{role.title}</p>
                <p className="label">
                  {role.startDate ? `${role.startDate} – ${role.endDate ?? "present"}` : role.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Story ── */}
      <section className="wrap pt-20 md:pt-28">
        <SectionHead
          index="03"
          title="The short version"
          aside={
            <Link href="/about" className="link">
              About me
            </Link>
          }
        />
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {story.map((step, i) => (
            <li key={step.title} className="reveal bg-bg p-6 md:p-7">
              <p className="label flex items-center gap-2">
                <span
                  aria-hidden
                  className={`inline-block size-2 rounded-full ${i === story.length - 1 ? "bg-accent ring-1 ring-fg/30" : "border border-line-strong"}`}
                />
                {step.year}
              </p>
              <h3 className="mt-4 text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="prose-p mt-2 text-sm">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Three focus areas ── */}
      <section className="wrap pt-20 md:pt-28">
        <SectionHead index="04" title="One profile, three CVs" />
        <div className="grid gap-4 md:grid-cols-3">
          {cvVariants.map((cv, i) => (
            <div
              key={cv.id}
              data-lens-dim={cv.id}
              className="reveal flex flex-col justify-between rounded-2xl border border-line p-6 md:p-7"
            >
              <div>
                <p className="label">
                  {String(i + 1).padStart(2, "0")} · {lenses[i].short}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">{cv.label}</h3>
                <ul className="mt-4 space-y-1 text-sm text-muted">
                  {cv.suits.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
              <a href={`/cv/${cv.fileName}`} download className="link mt-8 self-start text-sm">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
