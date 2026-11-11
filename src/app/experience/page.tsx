import type { Metadata } from "next";
import { Chips, PageIntro, SectionHead } from "@/components/ui";
import { experience } from "@/content/experience";
import { education } from "@/content/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where Abraham Tikuye has worked and studied: AiGot SRL, National ID Ethiopia (Fayda), Perugia, Timișoara and Gondar.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        index="02"
        kicker="Experience"
        title={
          <>
            Two roles, described <span className="serif">exactly</span> as they were.
          </>
        }
      >
        <p>
          For each role I separate two things: what the organisation does, and what I personally did there. The first
          can be large. The second is what I am responsible for.
        </p>
      </PageIntro>

      <section className="wrap">
        {experience.map((role) => (
          <article key={role.id} id={role.id} className="reveal scroll-mt-24 border-t border-line py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
              <header>
                <p className="label">
                  {[role.startDate && `${role.startDate} – ${role.endDate ?? "present"}`, role.location]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <h2 className="display mt-4 text-3xl md:text-4xl">{role.organization}</h2>
                <p className="mt-2 text-lg text-muted">{role.title}</p>
              </header>

              <div className="space-y-9">
                <p className="text-lg leading-relaxed">{role.summary}</p>

                {role.bullets.length > 0 && (
                  <div>
                    <h3 className="label mb-4">What I did</h3>
                    <ul className="space-y-3">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 leading-relaxed">
                          <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent ring-1 ring-fg/25" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {role.technologies.length > 0 && (
                  <div>
                    <h3 className="label mb-3">Worked with</h3>
                    <Chips items={role.technologies} />
                  </div>
                )}

                {role.organizationContext && (
                  <aside className="rounded-2xl border border-line bg-surface p-6">
                    <h3 className="label mb-3">About the organisation — context, not my output</h3>
                    <p className="prose-p text-[0.95rem]">{role.organizationContext}</p>
                  </aside>
                )}

                {role.links && role.links.length > 0 && (
                  <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {role.links.map((link) => (
                      <li key={link.url}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="link">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="wrap pt-12 md:pt-20">
        <SectionHead index="—" title="Education" />
        <div>
          {education.map((item) => (
            <div key={item.id} className="row reveal px-1 py-6 md:px-3">
              <div className="grid items-baseline gap-x-8 gap-y-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto]">
                <h3 className="text-xl font-medium tracking-tight">{item.institution}</h3>
                <div>
                  <p>{item.programme}</p>
                  {item.note && <p className="mt-1 text-sm text-muted">{item.note}</p>}
                </div>
                <p className="label">{item.period ?? item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
