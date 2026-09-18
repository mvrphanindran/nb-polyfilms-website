import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { quality, qaProcesses } from "@/lib/content";

export function Quality() {
  return (
    <article>
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Quality"
                title={
                  <>
                    Quality, checked
                    <br />
                    at every stage.
                  </>
                }
                tone="light"
              />
              <p className="max-w-md text-[15px] leading-relaxed text-white">
                Quality is at the core of everything we do. From raw material to
                finished product, every step is measured, monitored and perfected
                to deliver consistent performance you can rely on.
              </p>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden lg:justify-self-end">
              <Image
                src="/images/Quality-Testing-Detail.png"
                alt="In-house quality testing of NB Polyfilms film"
                fill
                sizes="(min-width: 1024px) 34vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-10 lg:mt-20">
            {quality.map((item) => (
              <div key={item.title} className="flex max-w-xs flex-col gap-2">
                <h3 className="font-display text-[15px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex max-w-2xl flex-col gap-5">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-black">
              How Quality Is Built In
            </span>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-4xl">
              Quality control across flexible packaging converting.
            </h2>
            <p className="text-[15px] leading-relaxed text-black">
              Consistent packaging isn&apos;t the result of one inspection at the
              end of the line — it&apos;s checked at every stage a roll passes
              through, from the material that comes in to the pack that goes
              out. Here is what that looks like, stage by stage.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-14 lg:mt-16 lg:gap-16">
            {qaProcesses.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 sm:flex-row sm:gap-10"
              >
                <div className="flex shrink-0 items-baseline gap-3 sm:w-40">
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-black/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-black/50">
                    {item.stage}
                  </span>
                </div>
                <div className="flex max-w-2xl flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold leading-snug text-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
