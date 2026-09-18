import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { companyMeta } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <Container>
        <div className="flex max-w-2xl flex-col gap-7">
          <Eyebrow tone="light">Contact</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Great packaging starts with a conversation.
          </h2>
          <p className="max-w-lg text-[15px] leading-relaxed text-navy-950 md:text-white lg:text-navy-950">
            Share your packaging requirement and the NB Polyfilms team will get
            back to you directly.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href={`mailto:${companyMeta.email}`}
              className="inline-flex w-fit bg-white px-7 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-navy-900 transition-colors hover:bg-blue-500 hover:text-white"
            >
              Get in Touch
            </a>
            <Link
              href="/nb-polyfilms-brochure.pdf"
              className="inline-flex w-fit items-center gap-2 px-2 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-navy-950 transition-colors hover:text-blue-500 md:text-white md:hover:text-blue-400 lg:text-navy-950 lg:hover:text-blue-500"
            >
              View Brochure
            </Link>
          </div>

          <p className="text-[13px] leading-relaxed text-navy-950 md:text-white lg:text-navy-950">
            Prefer email?{" "}
            <a href={`mailto:${companyMeta.email}`} className="underline underline-offset-4 hover:text-blue-400">
              {companyMeta.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
