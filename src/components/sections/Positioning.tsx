import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { StructureLine } from "@/components/ui/StructureLine";
import { companyMeta } from "@/lib/content";

export function Positioning() {
  return (
    <section className="relative bg-white pb-24 pt-16 lg:pb-28 lg:pt-20">
      <StructureLine />
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-center gap-6 lg:col-span-6">
            <Eyebrow>NB Polyfilms</Eyebrow>
            <h2 className="font-display text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              {companyMeta.positioningHeadline}
            </h2>
            <p className="max-w-lg text-[15px] leading-relaxed text-ink-soft">
              {companyMeta.description}
            </p>
            <div className="mt-2 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-navy-900">
                  {companyMeta.established}
                </span>
                <span className="text-xs uppercase tracking-[0.12em] text-ink-faint">
                  Established
                </span>
              </div>
              <span className="h-10 w-px bg-line" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-navy-900">
                  {companyMeta.coreBusiness}
                </span>
                <span className="text-xs uppercase tracking-[0.12em] text-ink-faint">
                  Core Business
                </span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden clip-notch lg:col-span-6">
            <Image
              src="/images/brochure/facility-exterior.jpg"
              alt="NB Polyfilms manufacturing facility"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
