import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DotGrid } from "@/components/ui/DotGrid";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-3 bottom-10 text-line">
        <DotGrid />
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Diverse industries. One commitment."
            />
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              We understand the unique demands of every industry and deliver
              packaging that protects, preserves and performs.
            </p>
            <div className="relative mt-2 hidden aspect-[4/5] w-full max-w-xs overflow-hidden clip-notch-sm lg:block">
              <Image
                src="/images/brochure/materials-roll.jpg"
                alt="Roll of flexible packaging film"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {industries.map((industry, i) => (
                <div
                  key={industry.name}
                  className="border-t border-line py-6 pr-6 first:border-t-0 [&:nth-child(2)]:sm:border-t-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-xs font-semibold text-blue-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display text-[17px] font-semibold text-navy-900">
                        {industry.name}
                      </h3>
                      <p className="max-w-[19rem] text-[13.5px] leading-relaxed text-ink-soft">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
