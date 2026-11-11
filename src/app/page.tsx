import Image from "next/image";
import Link from "next/link";
import { GridField, LocalTime } from "@/components/chrome-client";
import { LensText } from "@/components/lens";
import { LensWords } from "@/components/lens-switch";
import { Arrow, ButtonLink, ProjectRow, SectionHead } from "@/components/ui";
import { cvVariants } from "@/content/cv";
import { experience, rolePeriod } from "@/content/experience";
import { headline, intro, lenses, profile, stats, verbs } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

export default function Home() {
  return (
    <>
      {/* ── Hero: three words and a face ── */}
      <section className="relative overflow-hidden border-b border-line">
        <GridField />
        <div className="wrap relative pt-10 md:pt-16">
          <h1 className="sr-only">
            {profile.name}. {headline.map((part) => part.text).join(" ")}
          </h1>

          <p className="label rise">
            {profile.name} · {profile.location}
            <LocalTime timeZone={profile.timeZone} />
          </p>

          <div className="relative mt-6 md:mt-8">
            <div className="rise relative z-10" style={{ "--i": 1 } as React.CSSProperties}>
              <LensWords />
            </div>

          </div>

          <div
            className="rise relative z-10 grid gap-8 pb-12 pt-8 md:max-w-[58%] md:pb-20 md:pt-12"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <div>
              {verbs.map((verb) => (
                <p key={verb.lens} data-lens-show={verb.lens} className="serif text-3xl md:text-4xl">
                  {verb.line}
                </p>
              ))}
              <LensText text={intro} as="p" className="prose-p mt-4 max-w-xl text-lg" />
              <p className="label mt-4">
                {lenses.map((lens) => (
                  <span key={lens.id} data-lens-show={lens.id}>
                    Reading as: {lens.label} · press a word to change
                  </span>
                ))}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
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

          {/* Desktop: the portrait stands at the right edge and overlaps the words. */}
          <div
            className="portrait rise absolute bottom-0 right-0 z-20 hidden w-[36%] max-w-[29rem] md:block"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <Image src="/abraham.webp" alt="Portrait of Abraham Tikuye" width={949} height={1280} priority sizes="(min-width: 768px) 36vw, 70vw" />
          </div>

          {/* Phone: the portrait sits under the text. */}
          <div className="portrait relative mx-auto -mb-6 w-[72%] max-w-xs md:hidden">
            <Image src="/abraham.webp" alt="Portrait of Abraham Tikuye" width={949} height={1280} sizes="70vw" />
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section aria-label="In numbers" className="border-b border-line">
        <dl className="wrap grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal flex flex-col-reverse justify-end gap-3 py-8 md:py-12 ${
                i % 2 === 1 ? "border-l border-line pl-5 md:pl-8" : ""
              } ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l md:pl-8" : ""}`}
            >
              <dt className="max-w-[14rem] text-sm leading-snug text-muted">
                {stat.label}
                <span className="label mt-1.5 block text-[0.62rem]">{stat.source}</span>
              </dt>
              <dd className="mega text-[clamp(3.5rem,9vw,6.5rem)]">
                {stat.value}
                {stat.unit && <span className="ml-1 text-[0.4em] text-accent-text">{stat.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
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
                <p className="label">{rolePeriod(role)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
