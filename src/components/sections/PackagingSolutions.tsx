import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productAreas } from "@/lib/content";

export function PackagingSolutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Packaging Solutions"
          title={
            <>
              Engineered for
              <br />
              every application.
            </>
          }
          description="Solutions engineered for protection, performance and freshness — across our core packaging formats."
          align="split"
        />
      </Container>

      <div className="mt-14 snap-x snap-mandatory overflow-x-auto pb-4 lg:mt-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-6 px-6 md:px-10 lg:px-16">
          {productAreas.map((product, i) => (
            <div
              key={product.slug}
              id={product.slug}
              className="w-[78vw] shrink-0 scroll-mt-28 snap-start sm:w-[46vw] lg:w-[26vw]"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={product.imageWidth}
                height={product.imageHeight}
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 46vw, 78vw"
                className="h-auto w-full"
              />
              <div className="mt-5 flex items-start gap-4">
                <span className="font-display text-sm font-semibold text-blue-600">
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {product.name}
                  </h3>
                  <p className="max-w-xs text-[14.5px] leading-relaxed text-ink-soft">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
