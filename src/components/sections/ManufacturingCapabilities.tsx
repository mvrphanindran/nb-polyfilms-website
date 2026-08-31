import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities, process } from "@/lib/content";

export function ManufacturingCapabilities() {
  return (
    <section id="capabilities" className="relative bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Manufacturing Capabilities"
          title={
            <>
              From film to
              <br />
              finished packaging.
            </>
          }
          description="End-to-end capabilities that ensure precision, performance and reliability in every roll and pouch."
          align="split"
        />
      </Container>

      {/* Process rail */}
      <Container className="mt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {process.map((step) => (
            <div key={step.step} className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={`${step.label} — NB Polyfilms manufacturing process`}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xs font-semibold text-blue-600">
                  {step.step}
                </span>
                <span className="font-display text-[11px] font-medium uppercase tracking-[0.1em] text-navy-900">
                  {step.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Factory + key capabilities */}
      <div className="relative mt-28 lg:mt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative aspect-[4/3] lg:col-span-7 lg:aspect-auto">
              <div className="clip-diagonal-r absolute inset-0">
                <Image
                  src="/images/brochure/manufacturing-factory.jpg"
                  alt="NB Polyfilms production floor with rotogravure printing and lamination lines"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8 bg-navy-900 px-8 py-14 lg:col-span-5 lg:px-14 lg:py-0">
              <p className="max-w-xs text-balance font-display text-xl font-medium leading-snug text-white">
                State-of-the-art infrastructure for flexible packaging.
              </p>
              <div className="flex flex-col divide-y divide-line-dark">
                {capabilities.map((cap) => (
                  <div
                    key={cap.name}
                    id={cap.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    className="flex scroll-mt-28 items-center gap-5 py-4 first:pt-0 last:pb-0"
                  >
                    <div className="relative h-14 w-20 shrink-0 overflow-hidden">
                      <Image
                        src={cap.image}
                        alt={cap.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-display text-[15px] font-semibold text-white">
                        {cap.name}
                      </span>
                      <span className="text-[13px] text-silver-300">{cap.tagline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
