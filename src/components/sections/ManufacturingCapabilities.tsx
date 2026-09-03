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

      {/* Lead image — the manufacturing environment */}
      <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden lg:mt-16">
        <Image
          src="/images/capabilities-hero.png"
          alt="NB Polyfilms converting line in operation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Process rail */}
      <Container className="mt-14 lg:mt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
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
              <div className="flex items-baseline gap-3 border-t border-line pt-3">
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

      {/* Key capabilities */}
      <div className="relative mt-20 lg:mt-24">
        <Container>
          <div className="bg-navy-900 px-8 py-12 md:px-12 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
              <p className="max-w-xs text-balance font-display text-xl font-medium leading-snug text-white">
                State-of-the-art infrastructure for flexible packaging.
              </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2">
                {capabilities.map((cap) => (
                  <div
                    key={cap.name}
                    id={cap.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    className="flex scroll-mt-28 flex-col gap-4 border-t border-white/12 pt-4"
                  >
                    {cap.image && (
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={cap.image}
                          alt={cap.name}
                          fill
                          sizes="(min-width: 1024px) 27vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    )}
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
