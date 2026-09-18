import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { homeHighlights } from "@/lib/content";

export function Highlights() {
  return (
    <section className="relative py-24 lg:py-28">
      <Container>
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="mt-5 max-w-lg font-display text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl">
          Integrated capability, from film to finished pack.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeHighlights.map((item) => (
            <Link key={item.href} href={item.href} className="group flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-black">{item.teaser}</p>
              <span className="mt-1 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors group-hover:text-blue-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
