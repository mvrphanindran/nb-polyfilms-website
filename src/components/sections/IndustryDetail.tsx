import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { productAreas, structures, whyNB, type industries } from "@/lib/content";

function SectionEyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={`font-display text-xs font-semibold uppercase tracking-[0.28em] ${
        tone === "dark" ? "text-navy-900" : "text-white"
      }`}
    >
      {children}
    </span>
  );
}

export function IndustryDetail({ industry }: { industry: (typeof industries)[number] }) {
  const hasBanner = industry.banner !== null;

  return (
    <article>
      {hasBanner ? (
        <>
          {/* Lead photograph — supplied as-is, no overlay or crop */}
          <div className="relative mt-14 w-full overflow-hidden lg:mt-16">
            <Image
              src={industry.banner as string}
              alt={`${industry.name} packaging`}
              width={1672}
              height={941}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
          <section className="pt-14 lg:pt-16">
            <Container>
              <div className="max-w-3xl">
                <SectionEyebrow tone="light">Industries</SectionEyebrow>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                  {industry.name}
                </h1>
                <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/85 sm:text-[17px]">
                  {industry.description}
                </p>
              </div>
            </Container>
          </section>
        </>
      ) : (
        <section className="relative overflow-hidden">
          <div className="field-fade absolute inset-0">
            <Image
              src={industry.image}
              alt={`Flexible packaging for ${industry.name}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_20%,rgba(11,31,58,0.75),rgba(6,15,31,0.55)_56%,rgba(6,15,31,0.3)_78%)]" />
          </div>
          <Container className="relative">
            <div className="grid min-h-[46vh] grid-cols-1 items-center gap-10 py-20 lg:grid-cols-12 lg:py-24">
              <div className="flex flex-col gap-7 lg:col-span-9">
                <SectionEyebrow>Industries</SectionEyebrow>
                <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
                  {industry.name}
                </h1>
                <p className="max-w-2xl text-[16px] leading-relaxed text-silver-300 sm:text-[17px]">
                  {industry.description}
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Packaging requirements */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <SectionEyebrow tone="light">Requirements</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-4xl">
              Packaging built around {industry.name.toLowerCase()}.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white">
              {industry.description} As a flexible packaging converter, NB Polyfilms works from
              film through printing, lamination and finishing to deliver packaging that protects
              the product, holds up through handling and distribution, and presents well on
              shelf.
            </p>
          </div>
        </Container>
      </section>

      {/* Suitable packaging formats */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <span
                className={`font-display text-xs font-semibold uppercase tracking-[0.28em] text-white ${hasBanner ? "xl:text-black" : ""}`}
              >
                Packaging Formats
              </span>
              <h2
                className={`mt-4 font-display text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-4xl ${hasBanner ? "sm:text-black" : ""}`}
              >
                Formats suited to {industry.name.toLowerCase()}.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div
                className={`flex flex-col divide-y divide-white/15 border-t border-white/15 ${hasBanner ? "sm:divide-black/15 sm:border-black/15" : ""}`}
              >
                {productAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/#${area.slug}`}
                    className="group flex items-center justify-between gap-6 py-5 transition-colors"
                  >
                    <span
                      className={`font-display text-lg font-semibold text-white transition-colors group-hover:text-blue-600 ${hasBanner ? "sm:text-black" : ""}`}
                    >
                      {area.name}
                    </span>
                    <span
                      className={`max-w-xs text-right text-[13.5px] leading-relaxed text-white ${hasBanner ? "sm:text-black" : ""}`}
                    >
                      {area.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Material considerations */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <span
                className={`font-display text-xs font-semibold uppercase tracking-[0.28em] ${hasBanner ? "text-black" : "text-white"}`}
              >
                Material Considerations
              </span>
              <h2
                className={`mt-4 font-display text-3xl font-semibold leading-[1.06] tracking-tight sm:text-4xl ${hasBanner ? "text-black" : "text-white"}`}
              >
                Structures selected to the requirement.
              </h2>
              <p className={`mt-5 max-w-sm text-[14.5px] leading-relaxed ${hasBanner ? "text-black" : "text-white"}`}>
                The right laminate structure is selected based on the barrier, seal and handling
                requirements of the application.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div
                className={`grid grid-cols-1 gap-x-8 gap-y-4 border-t pt-4 sm:grid-cols-2 ${hasBanner ? "border-black/15" : "border-white/20"}`}
              >
                {structures.map((structure) => (
                  <div
                    key={structure.code}
                    className={`border-t py-3 first:border-t-0 sm:border-t-0 sm:py-0 ${hasBanner ? "border-black/15" : "border-white/20"}`}
                  >
                    <span
                      className={`font-display text-[15px] font-medium ${hasBanner ? "text-black" : "text-white"}`}
                    >
                      {structure.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why NB */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-black">
              Why NB
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.06] tracking-tight text-black sm:text-4xl">
              Built on integrated capability.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {whyNB.map((point) => (
              <div key={point.number} className="border-t border-black/15 pt-4">
                <span className="font-display text-xs font-semibold text-black">
                  {point.number}
                </span>
                <h3 className="mt-3 font-display text-[16px] font-semibold text-black">
                  {point.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-black">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-[14.5px] leading-relaxed text-black">
            Printing, lamination, extrusion coating, slitting and finishing run within a single
            facility — see the full range on the{" "}
            <Link href="/capabilities" className="text-black underline underline-offset-2 hover:text-blue-600">
              Infrastructure
            </Link>{" "}
            page.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 border-t border-line pt-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-navy-900">
                Get in Touch
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
                Let&apos;s build the right packaging for {industry.name}.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                Connect with the NB Polyfilms team to discuss packaging aligned to your product requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center border border-navy-900 bg-navy-900 px-7 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-600 hover:border-blue-600"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
