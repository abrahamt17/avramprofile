import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="wrap py-28 md:py-40">
      <p className="label">404</p>
      <h1 className="display mt-5 text-[clamp(2.4rem,7vw,5rem)]">
        This page is <span className="serif">planned</span>, not built.
      </h1>
      <p className="prose-p mt-6 max-w-md text-lg">Actually, it is not even planned. The page you asked for does not exist.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </section>
  );
}
