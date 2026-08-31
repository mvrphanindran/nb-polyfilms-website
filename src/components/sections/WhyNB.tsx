import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyNB } from "@/lib/content";

export function WhyNB() {
  return (
    <section className="relative bg-paper py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative aspect-[5/4] w-full overflow-hidden clip-notch">
              <Image
                src="/images/brochure/whynb-products.jpg"
                alt="NB Polyfilms branded stand-up pouches for tea, spices, coffee, rice and pet food"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
            <SectionHeading
              eyebrow="Why NB"
              title={
                <>
                  Integrated capability.
                  <br />
                  Stronger solutions.
                </>
              }
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {whyNB.map((item) => (
                <div key={item.number} className="flex flex-col gap-3 border-t border-line pt-5">
                  <span className="font-display text-sm font-semibold text-blue-600">
                    {item.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
