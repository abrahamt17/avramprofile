import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LensText } from "@/components/lens";
import { Arrow, ButtonLink, Chips, Dot, FlowDiagram, StatusTag } from "@/components/ui";
import { featuredProjects, getProject } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — case study`,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.id}` },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="reveal grid gap-4 border-t border-line py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-16 md:py-14">
      <h2 className="label">{label}</h2>
      <div className="max-w-2xl">{children}</div>
    </section>
  );
}

function List({ items, kind }: { items: string[]; kind: "full" | "empty" }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-relaxed ${kind === "empty" ? "text-muted" : ""}`}>
          <span className="mt-[0.45em]">
            <Dot kind={kind} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.featured) notFound();

  const position = featuredProjects.findIndex((p) => p.id === project.id);
  const next = featuredProjects[(position + 1) % featuredProjects.length];

  return (
    <article>
      <header className="wrap pb-12 pt-14 md:pb-16 md:pt-20">
        <Link href="/projects" className="label rise inline-flex items-center gap-2 hover:text-fg">
          <span aria-hidden>←</span> All work
        </Link>
        <h1
          className="mega rise mt-8 text-[clamp(4rem,15vw,12rem)]"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {project.name}
        </h1>
        <p
          className="rise mt-6 max-w-3xl text-xl leading-snug md:text-2xl"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {project.tagline}
        </p>

        <dl
          className="rise mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 md:grid-cols-4"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <div className="bg-bg p-5">
            <dt className="label">Role</dt>
            <dd className="mt-2 text-sm">{project.role}</dd>
          </div>
          <div className="bg-bg p-5">
            <dt className="label">Status</dt>
            <dd className="mt-2">
              <StatusTag status={project.status} note={project.statusNote} />
            </dd>
          </div>
          <div className="bg-bg p-5">
            <dt className="label">For</dt>
            <dd className="mt-2 text-sm">{project.users.join("; ")}</dd>
          </div>
          <div className="bg-bg p-5">
            <dt className="label">Why it matters here</dt>
            <dd className="mt-2 text-sm">
              <LensText text={project.angle} />
            </dd>
          </div>
        </dl>
      </header>

      <div className="wrap">
        {project.flow && <FlowDiagram steps={project.flow.steps} caption={project.flow.caption} />}

        <div className="mt-12 md:mt-16">
          <Block label="Problem">
            <p className="text-lg leading-relaxed">{project.problem}</p>
          </Block>

          <Block label="Approach">
            <p className="text-lg leading-relaxed">{project.approach}</p>
          </Block>

          <Block label="My role">
            <List items={project.personalContribution} kind="full" />
          </Block>

          <Block label="Built vs planned">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-sm font-medium">Built</h3>
                <List items={project.implementedFeatures} kind="full" />
              </div>
              {project.plannedFeatures.length > 0 && (
                <div>
                  <h3 className="mb-4 text-sm font-medium text-muted">Planned, not built</h3>
                  <List items={project.plannedFeatures} kind="empty" />
                </div>
              )}
            </div>
          </Block>

          <Block label="Stack">
            <Chips items={project.technologies} />
          </Block>

          {project.decisions.length > 0 && (
            <Block label="Decisions and trade-offs">
              <div className="space-y-8">
                {project.decisions.map((decision, i) => (
                  <div key={decision.title} className="grid grid-cols-[2rem_1fr] gap-2">
                    <span className="label pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-medium">{decision.title}</h3>
                      <p className="prose-p mt-1.5">{decision.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>
          )}

          <Block label="Where it stands">
            <ul className="space-y-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="leading-relaxed">
                  {outcome}
                </li>
              ))}
            </ul>
          </Block>

          {project.boundaries && (
            <Block label="What it is not">
              <ul className="space-y-2.5 rounded-2xl border border-line bg-surface p-6 text-[0.95rem]">
                {project.boundaries.map((boundary) => (
                  <li key={boundary} className="leading-relaxed">
                    {boundary}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <Block label="Learned, and next">
            <ul className="space-y-3">
              {project.learnings.map((learning) => (
                <li key={learning} className="leading-relaxed">
                  {learning}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Sources">
            <p className="prose-p text-sm">{project.source}</p>
            {project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <ButtonLink key={link.url} href={link.url} variant="ghost" external>
                    {link.label} <Arrow />
                  </ButtonLink>
                ))}
              </div>
            )}
          </Block>
        </div>

        <Link href={`/projects/${next.id}`} className="row group mt-6 px-1 py-10 md:px-3">
          <p className="label">Next case study</p>
          <p className="row-title mega mt-3 flex items-center gap-4 text-5xl md:text-8xl">
            {next.name} <Arrow className="row-arrow size-7 text-muted" />
          </p>
        </Link>
      </div>
    </article>
  );
}
