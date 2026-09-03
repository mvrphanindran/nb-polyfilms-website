import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-paper py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-7 lg:col-span-5">
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Diverse industries. One commitment."
            />
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              We understand the unique demands of every industry and deliver
              packaging that protects, preserves and performs.
            </p>
            <div className="relative mt-2 aspect-[4/5] w-full max-w-xs overflow-hidden">
              <Image
                src="/images/Pouch-Format-Range.png"
                alt="A range of flexible pouch formats"
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {industries.map((industry, i) => (
                <div key={industry.name} className="py-6 pr-6">
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
