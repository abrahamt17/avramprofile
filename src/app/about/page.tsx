import type { Metadata } from "next";
import { ButtonLink, PageIntro, SectionHead } from "@/components/ui";
import { about, education, profile, story } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "From Computer Science studies to Engineering Management: how Abraham Tikuye combines technical depth with a product and delivery perspective.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="03"
        kicker="About"
        title={
          <>
            I did not leave technology for management. I <span className="serif">added</span> management to
            technology.
          </>
        }
      />

      <section className="wrap grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
        <aside className="reveal">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="label">Based in</dt>
              <dd className="mt-1.5">{profile.location}</dd>
            </div>
            <div>
              <dt className="label">Studying</dt>
              <dd className="mt-1.5">Engineering Management, Università degli Studi di Perugia</dd>
            </div>
            <div>
              <dt className="label">Interested in</dt>
              <dd className="mt-1.5">
                <ul className="space-y-1">
                  {about.interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>

        <div className="max-w-2xl space-y-6">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className={`reveal leading-relaxed ${i === 0 ? "text-xl md:text-2xl md:leading-snug" : "prose-p text-lg"}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="wrap pt-20 md:pt-28">
        <SectionHead index="—" title="The path" />
        <ol className="relative ml-2 border-l border-line-strong">
          {story.map((step, i) => (
            <li key={step.title} className="reveal relative pb-10 pl-8 last:pb-0 md:pl-12">
              <span
                aria-hidden
                className={`absolute -left-[6.5px] top-1.5 size-3 rounded-full border-[1.5px] border-fg ${
                  i === story.length - 1 ? "bg-accent" : "bg-bg"
                }`}
              />
              <p className="label">{step.year}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">{step.title}</h3>
              <p className="prose-p mt-2 max-w-xl">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap pt-20 md:pt-28">
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
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/projects">See the work</ButtonLink>
          <ButtonLink href="/cv" variant="ghost">
            Get a CV
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
