import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { StructureLine } from "@/components/ui/StructureLine";
import { homeHighlights } from "@/lib/content";

export function Highlights() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-28">
      {/* Soft edges so the navy band doesn't read as a pasted rectangle */}
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,var(--color-white),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_top,var(--color-mist),transparent)]" />
      <StructureLine tone="light" />
      <Container>
        <Eyebrow tone="light">What We Do</Eyebrow>
        <h2 className="mt-5 max-w-lg font-display text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl">
          Integrated capability, from film to finished pack.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
          {homeHighlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col justify-end overflow-hidden bg-navy-900 p-6"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover opacity-45 transition-opacity duration-500 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" />
              </div>
              <div className="relative flex min-h-[11rem] flex-col justify-end gap-2">
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-silver-300">
                  {item.teaser}
                </p>
                <span className="mt-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-500 transition-colors group-hover:text-blue-400">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
