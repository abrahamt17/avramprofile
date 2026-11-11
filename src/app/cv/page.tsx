import type { Metadata } from "next";
import { LensSwitch } from "@/components/lens-switch";
import { ButtonLink, PageIntro } from "@/components/ui";
import { cvVariants } from "@/content/cv";
import { profile } from "@/content/profile";
import type { CvVariant } from "@/content/types";

export const metadata: Metadata = {
  title: "CV",
  description: "A blended CV and three tailored CVs for Abraham Tikuye: AI & Technology, Product & Engineering Management, and Technical Marketing.",
  alternates: { canonical: "/cv" },
};

/** The CV as a web page. Built from the same data as the PDF. */
function CvDocument({ cv }: { cv: CvVariant }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-12">
      <header className="border-b border-line-strong pb-6">
        <h2 className="display text-3xl md:text-4xl">{profile.name}</h2>
        <p className="mt-2 text-lg">{cv.headline}</p>
        <p className="label mt-3">
          {profile.location} · linkedin.com/in/abraham-tikuye-31a485283 · github.com/abrahamt17
        </p>
      </header>

      <p className="mt-6 max-w-3xl leading-relaxed">{cv.summary}</p>

      {cv.sections.map((section) => (
        <section key={section.title} className="mt-9">
          <h3 className="label border-b border-line pb-2">{section.title}</h3>
          <div className="mt-4 space-y-6">
            {section.entries.map((entry) => (
              <div key={entry.heading}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <h4 className="font-medium">{entry.heading}</h4>
                  {entry.period && <p className="label">{entry.period}</p>}
                </div>
                {entry.sub && <p className="mt-0.5 text-sm text-muted">{entry.sub}</p>}
                {entry.bullets.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] leading-relaxed marker:text-muted">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-9">
        <h3 className="label border-b border-line pb-2">Skills</h3>
        <dl className="mt-4 space-y-2 text-[0.95rem]">
          {cv.skills.map((group) => (
            <div key={group.title} className="grid gap-x-6 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium">{group.title}</dt>
              <dd className="text-muted">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

export default function CvPage() {
  return (
    <>
      <PageIntro
        index="05"
        kicker="CV"
        title={
          <>
            One person, four CVs. Three specializations and one <span className="serif">blended</span> profile.
          </>
        }
      >
        <p>
          The three specialized versions change the order and emphasis for a particular role. The blended CV brings
          those areas together in one broader profile.
        </p>
      </PageIntro>

      <section className="wrap no-print">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cvVariants.map((cv, i) => (
            <div key={cv.id} data-lens-dim={cv.id} className="reveal flex flex-col rounded-2xl border border-line p-6 md:p-7">
              <p className="label">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight">{cv.label}</h2>
              <p className="label mt-5">Good for</p>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {cv.suits.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href={`/cv/${cv.fileName}`} download>
                  Download PDF
                </ButtonLink>
              </div>
            </div>
          ))}
          <div className="reveal flex flex-col rounded-2xl border border-accent/50 bg-surface p-6 md:p-7">
            <p className="label text-accent-text">04 · All-round profile</p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight">Blended CV</h2>
            <p className="prose-p mt-3 text-sm">
              A single CV combining software and AI, product work, engineering management, and technical communication.
            </p>
            <div className="mt-auto pt-8">
              <ButtonLink href="/cv/Abraham_Tikuye_Blended_CV.pdf" download>
                Download PDF
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap pt-16 md:pt-24">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="label">Preview</h2>
          <LensSwitch compact />
        </div>
        {cvVariants.map((cv) => (
          <div key={cv.id} data-lens-show={cv.id}>
            <CvDocument cv={cv} />
          </div>
        ))}
      </section>
    </>
  );
}
