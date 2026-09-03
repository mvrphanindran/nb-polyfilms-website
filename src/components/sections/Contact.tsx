import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <Container>
        <div className="flex max-w-2xl flex-col gap-7">
          <Eyebrow tone="light">Contact</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Great packaging starts with a conversation.
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed text-silver-300">
            Contact information will be published once confirmed by NB Polyfilms.
          </p>
          <Link
            href="/nb-polyfilms-brochure.pdf"
            className="inline-flex w-fit bg-white px-7 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-navy-900 transition-colors hover:bg-blue-500 hover:text-white"
          >
            View Brochure
          </Link>
        </div>
      </Container>
    </section>
  );
}
