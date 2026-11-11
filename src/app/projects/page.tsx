import type { Metadata } from "next";
import { ProjectBrowser } from "@/components/project-browser";
import { Chips, PageIntro, ProjectRow, SectionHead, StatusTag } from "@/components/ui";
import { additionalProjects, featuredProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects by Abraham Tikuye: AgentCover, AeroMind, CreatorPay and smaller software projects, each with an honest status.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        index="01"
        kicker="Work"
        title={
          <>
            Things I have built, and how <span className="serif">far</span> each one got.
          </>
        }
      >
        <p>
          Every project carries a status. A half-filled dot means partly built; I would rather show you a real
          prototype than a finished-looking fiction.
        </p>
      </PageIntro>

      <section className="wrap">
        <ProjectBrowser>
          <SectionHead index="A" title="Case studies" />
          <div>
            {featuredProjects.map((project, i) => (
              <div key={project.id} data-categories={project.categories.join(" ")}>
                <ProjectRow project={project} index={i} />
              </div>
            ))}
          </div>

          <div className="pt-16 md:pt-24">
            <SectionHead index="B" title="Additional projects" />
            <div className="grid gap-4 md:grid-cols-3">
              {additionalProjects.map((project) => (
                <article
                  key={project.id}
                  data-categories={project.categories.join(" ")}
                  className="reveal flex flex-col rounded-2xl border border-line p-6"
                >
                  <StatusTag status={project.status} note={project.statusNote} />
                  <h3 className="mt-4 text-xl font-medium tracking-tight">{project.name}</h3>
                  <p className="prose-p mt-2 text-sm">{project.tagline}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {project.implementedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-muted">
                        <span aria-hidden className="mt-[0.55em] size-1 shrink-0 rounded-full bg-fg/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Chips items={project.technologies} />
                  </div>
                  <ul className="mt-auto flex flex-wrap gap-x-5 pt-6 text-sm">
                    {project.links.map((link) => (
                      <li key={link.url}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="link">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </ProjectBrowser>
      </section>
    </>
  );
}
