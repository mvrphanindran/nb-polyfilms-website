import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { quality } from "@/lib/content";

export function Quality() {
  return (
    <section id="quality" className="relative overflow-hidden bg-navy-900">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center gap-8 px-6 py-24 md:px-10 lg:col-span-5 lg:px-16 lg:py-32">
          <SectionHeading
            eyebrow="Quality"
            title={
              <>
                Quality you
                <br />
                can trust.
              </>
            }
            tone="light"
          />
          <p className="max-w-sm text-[15px] leading-relaxed text-silver-300">
            Quality is at the core of everything we do. From raw material to
            finished product, every step is measured, monitored and perfected
            to deliver consistent performance you can rely on.
          </p>
        </div>

        <div className="relative min-h-[52vh] lg:col-span-7 lg:min-h-0">
          <Image
            src="/images/brochure/quality-lab.jpg"
            alt="In-house quality testing of NB Polyfilms laminate using a precision thickness gauge"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <Container className="py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-dark pt-14 sm:grid-cols-3 lg:grid-cols-5">
          {quality.map((item) => (
            <div
              key={item.title}
              id={item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="flex scroll-mt-28 flex-col gap-2"
            >
              <h3 className="font-display text-[15px] font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-silver-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
