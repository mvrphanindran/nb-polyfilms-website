import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productAreas } from "@/lib/content";

export function PackagingSolutions() {
  return (
    <section id="solutions" className="relative bg-paper py-24 lg:py-32">
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
          description="Solutions engineered for protection, performance and freshness — across five core packaging formats."
          align="split"
        />
      </Container>

      {/* Featured composition */}
      <Container className="mt-16">
        <div className="relative">
          <div className="relative aspect-[16/10] w-full overflow-hidden clip-notch sm:aspect-[16/8]">
            <Image
              src="/images/brochure/solutions-pouches-lineup.jpg"
              alt="Stand-up pouches and printed rollstock for tea, snacks, coffee and condiments"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden bg-navy-900 px-6 py-4 sm:left-10 md:flex md:items-center md:gap-4">
            <span className="font-display text-2xl font-semibold text-white">01–05</span>
            <span className="h-8 w-px bg-white/20" />
            <span className="max-w-[14rem] text-xs leading-snug text-silver-300">
              Five packaging formats, one integrated capability.
            </span>
          </div>
        </div>
      </Container>

      {/* Product areas — asymmetrical rhythm, not a uniform grid */}
      <Container className="mt-28 lg:mt-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          {productAreas.map((product, i) => (
            <div
              key={product.slug}
              id={product.slug}
              className={`flex scroll-mt-28 flex-col gap-5 ${
                i === 0 ? "md:col-span-2 md:row-span-1" : ""
              } ${i % 3 === 1 ? "md:mt-16" : ""}`}
            >
              <div
                className={`relative w-full overflow-hidden clip-notch-sm ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-end bg-navy-900 p-5">
                    <span className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-silver-400">
                      Photography to be added
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-start gap-4">
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
      </Container>
    </section>
  );
}
