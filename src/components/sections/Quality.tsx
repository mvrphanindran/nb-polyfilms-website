import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { quality } from "@/lib/content";

export function Quality() {
  return (
    <section id="quality" className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-5">
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
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden">
            <Image
              src="/images/Quality-Testing-Detail.png"
              alt="In-house quality testing of NB Polyfilms film"
              fill
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-2">
          {quality.map((item) => (
            <div
              key={item.title}
              id={item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="flex scroll-mt-28 flex-col gap-2 border-t border-white/12 pt-4"
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
      </div>
      </Container>
    </section>
  );
}
