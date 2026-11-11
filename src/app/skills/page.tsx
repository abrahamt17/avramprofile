import type { Metadata } from "next";
import Link from "next/link";
import { Dot, EvidenceTag, PageIntro } from "@/components/ui";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Abraham Tikuye's skills, each one labelled with how it was used and linked to the project or role that backs it up.",
  alternates: { canonical: "/skills" },
};

/** Turns a project or experience id into a link to where the skill was used. */
function reference(id: string): { label: string; href: string } | null {
  const project = projects.find((p) => p.id === id);
  if (project) return { label: project.name, href: project.featured ? `/projects/${project.id}` : "/projects" };
  const role = experience.find((e) => e.id === id);
  if (role) return { label: role.organization, href: `/experience#${role.id}` };
  return null;
}

export default function SkillsPage() {
  return (
    <>
      <PageIntro
        index="04"
        kicker="Skills"
        title={
          <>
            No percentage bars. Just what I used, and <span className="serif">where</span>.
          </>
        }
      >
        <p>
          &ldquo;Python 95%&rdquo; tells you nothing. Each skill below has a label saying how I know it, and a link to
          the work that shows it.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Dot kind="full" /> Used at work or in a project
          </li>
          <li className="flex items-center gap-2">
            <Dot kind="half" /> Coursework
          </li>
          <li className="flex items-center gap-2">
            <Dot kind="empty" /> Currently developing
          </li>
        </ul>
      </PageIntro>

      <div className="wrap">
        {skillGroups.map((group, i) => (
          <section
            key={group.id}
            data-lens-dim={group.lens === "all" ? undefined : group.lens}
            className="reveal grid gap-6 border-t border-line py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-16 md:py-14"
          >
            <header>
              <p className="label">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight">{group.title}</h2>
              <p className="prose-p mt-2 text-sm">{group.intro}</p>
            </header>
            <ul>
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="grid items-baseline gap-x-6 gap-y-1 border-b border-line py-3.5 first:pt-0 sm:grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1fr)]"
                >
                  <span className="font-medium">{skill.name}</span>
                  <EvidenceTag label={skill.evidence} />
                  <span className="text-sm text-muted sm:text-right">
                    {skill.where
                      .map(reference)
                      .filter((ref) => ref !== null)
                      .map((ref, j) => (
                        <span key={ref.label}>
                          {j > 0 && ", "}
                          <Link href={ref.href} className="hover:text-fg hover:underline">
                            {ref.label}
                          </Link>
                        </span>
                      ))}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
