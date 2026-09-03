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

      <Container className="mt-14 lg:mt-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {productAreas.map((product, i) => (
            <div
              key={product.slug}
              id={product.slug}
              className={`flex scroll-mt-28 flex-col gap-5 border border-line bg-white p-6 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
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
