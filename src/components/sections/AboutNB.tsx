import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { aboutNB } from "@/lib/content";

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-tight text-navy-900 sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function CapabilityItem({
  number,
  label,
  subtle = false,
}: {
  number: string;
  label: string;
  subtle?: boolean;
}) {
  return (
    <div
      className={`group border px-5 py-5 transition-transform duration-300 hover:-translate-y-0.5 ${
        subtle
          ? "border-white/12 bg-white/[0.03]"
          : "border-line bg-white/95 hover:border-blue-200 hover:bg-white"
      }`}
    >
      <span className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">
        {number}
      </span>
      <p
        className={`mt-3 text-[15px] leading-relaxed ${
          subtle ? "text-silver-300" : "text-navy-900"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export function AboutNB() {
  return (
    <article className="bg-paper">
      <section className="relative overflow-hidden bg-navy-900">
        <div className="field-fade absolute inset-0">
          <Image
            src="/images/About-hero.png"
            alt="NB Polyfilms production floor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_20%,rgba(11,31,58,0.75),rgba(6,15,31,0.55)_56%,rgba(6,15,31,0.3)_78%)]" />
        </div>
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03))] lg:block" />
        <Container className="relative">
          <div className="grid min-h-[52vh] grid-cols-1 items-center gap-10 py-20 lg:grid-cols-12 lg:py-24">
            <div className="flex flex-col gap-7 lg:col-span-9">
              <SectionEyebrow>{aboutNB.eyebrow}</SectionEyebrow>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.75rem]">
                Packaging capability,
                <span className="block text-silver-300">built around performance.</span>
              </h1>
              <p className="max-w-2xl text-[16px] leading-relaxed text-silver-300 sm:text-[17px]">
                {aboutNB.profile[0]}
              </p>
            </div>

          </div>
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <SectionTitle eyebrow="Profile" title="A converter built around capability." />
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-3xl text-[17px] leading-relaxed text-ink">
                {aboutNB.profile[0]}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="border border-line bg-paper p-7">
                  <p className="text-[15px] leading-relaxed text-ink-soft">{aboutNB.profile[1]}</p>
                </div>
                <div className="border border-line bg-paper p-7">
                  <p className="text-[15px] leading-relaxed text-ink-soft">{aboutNB.profile[2]}</p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
                <div className="border-l-2 border-blue-600 pl-6 lg:col-span-3">
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {aboutNB.intro}
                  </p>
                </div>
                <div className="relative aspect-[3/2] w-full overflow-hidden lg:col-span-2">
                  <Image
                    src="/images/Hands-On Process Detail.png"
                    alt="Hands-on process check on a converting line"
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 lg:py-28" id="why-nb">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <SectionTitle
                eyebrow="Why NB"
                title={
                  <>
                    Capability that goes beyond conversion.
                  </>
                }
              />
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aboutNB.whyPoints.map((point, index) => (
                  <CapabilityItem
                    key={point}
                    number={String(index + 1).padStart(2, "0")}
                    label={point}
                  />
                ))}
                <div className="hidden border border-dashed border-line bg-transparent sm:block" aria-hidden />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="relative flex h-full flex-col justify-between gap-10 overflow-hidden border border-white/12 bg-navy-900 p-8 md:p-10">
                <Image
                  src="/images/Multi-Layer Structure Cross-Section.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
                <div className="relative max-w-3xl">
                  <SectionEyebrow>{aboutNB.eyebrow}</SectionEyebrow>
                  <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl">
                    Packaging engineered around the requirement.
                  </h2>
                  <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-silver-300">
                    {aboutNB.requirementCopy}
                  </p>
                </div>
                <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {aboutNB.commitments.slice(0, 4).map((commitment, index) => (
                    <CapabilityItem
                      key={commitment}
                      number={String(index + 1).padStart(2, "0")}
                      label={commitment}
                      subtle
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid h-full gap-4">
                <div className="border border-white/12 bg-white/[0.04] p-6">
                  <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Product Quality
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-silver-300">
                    {aboutNB.commitments[0]}
                  </p>
                </div>
                <div className="border border-white/12 bg-white/[0.04] p-6">
                  <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Cost-effective Packaging Solutions
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-silver-300">
                    {aboutNB.commitments[1]}
                  </p>
                </div>
                <div className="border border-white/12 bg-white/[0.04] p-6">
                  <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Timely Delivery
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-silver-300">
                    {aboutNB.commitments[2]}
                  </p>
                </div>
                <div className="border border-white/12 bg-white/[0.04] p-6">
                  <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Customer-focused Service
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-silver-300">
                    {aboutNB.commitments[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="grid gap-8">
              <div className="border border-line bg-navy-900 p-8 text-white md:p-10">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                  Vision
                </p>
                <p className="mt-5 max-w-xl font-display text-3xl font-semibold leading-[1.12] text-white sm:text-[2.15rem]">
                  {aboutNB.vision}
                </p>
              </div>
            </div>
            <div className="grid gap-8">
              <div className="border border-line bg-paper p-8 md:p-10">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                  Mission
                </p>
                <p className="mt-5 max-w-xl font-display text-3xl font-semibold leading-[1.12] text-navy-900 sm:text-[2.15rem]">
                  {aboutNB.mission}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col gap-8 lg:col-span-5">
              <SectionTitle
                eyebrow="Sustainability"
                title={
                  <>
                    Packaging that performs.
                    <span className="block">Packaging that moves forward.</span>
                  </>
                }
              />
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/images/Mono-Material Film.png"
                  alt="Mono-material flexible film"
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-6 lg:col-span-7">
              {aboutNB.sustainability.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl border-t border-line pt-4 text-[16px] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 border border-white/12 bg-navy-900 px-7 py-8 md:flex-row md:items-center md:px-10">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                Get in Touch
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Let&apos;s build the right packaging solution.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-silver-300">
                Connect with the NB Polyfilms team to discuss packaging aligned to your product requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center border border-white/20 bg-white px-7 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-navy-900 transition-colors hover:bg-blue-600 hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
