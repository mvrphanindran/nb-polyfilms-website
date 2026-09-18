import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Diverse industries. One commitment."
          description="We understand the unique demands of every industry and deliver packaging that protects, preserves and performs."
          tone="light"
        />

        <div className="mt-12 flex flex-col divide-y divide-white/15 border-t border-white/15">
          {industries.map((industry, i) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex items-center gap-5 py-5 sm:gap-7"
            >
              <span className="hidden font-display text-xs font-semibold text-white/50 sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative h-16 w-16 shrink-0 overflow-hidden sm:h-20 sm:w-20">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-blue-300 sm:text-xl">
                  {industry.name}
                </h3>
                <p className="max-w-md text-[13.5px] leading-relaxed text-white/70">
                  {industry.description}
                </p>
              </div>
              <span
                aria-hidden
                className="hidden font-display text-lg text-white/40 transition-colors group-hover:text-blue-300 sm:block"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
