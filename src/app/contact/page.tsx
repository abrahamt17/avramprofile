import type { Metadata } from "next";
import { Arrow, PageIntro } from "@/components/ui";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abraham Tikuye on LinkedIn or GitHub.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    ...(profile.email ? [{ label: "Email", value: profile.email, href: `mailto:${profile.email}`, note: "Best for roles and interviews" }] : []),
    { label: "LinkedIn", value: "abraham-tikuye", href: profile.links.linkedin, note: "Best for roles and introductions" },
    { label: "GitHub", value: "abrahamt17", href: profile.links.github, note: "Best for reading the code" },
  ];

  return (
    <>
      <PageIntro
        index="06"
        kicker="Contact"
        title={
          <>
            Have a role, a project or a <span className="serif">question</span>? Say hello.
          </>
        }
      >
        <p>
          I am open to software and AI roles, associate product and project roles, and technical marketing roles
          where it helps to understand the technology. A short message is enough.
        </p>
      </PageIntro>

      <section className="wrap">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            {...(channel.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="row group px-1 py-8 md:px-3 md:py-10"
          >
            <div className="grid items-baseline gap-x-8 gap-y-2 md:grid-cols-[8rem_minmax(0,1fr)_auto_auto]">
              <span className="label">{channel.label}</span>
              <span className="row-title mega text-4xl md:text-7xl">{channel.value}</span>
              <span className="text-sm text-muted">{channel.note}</span>
              <Arrow className="row-arrow hidden text-muted md:block" />
            </div>
          </a>
        ))}
      </section>
    </>
  );
}
