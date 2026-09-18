import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { aboutNB } from "@/lib/content";

function SectionEyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
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

function SectionTitle({
  eyebrow,
  title,
  tone = "dark",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex flex-col gap-4">
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <h2
        className={`font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-navy-900" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export function AboutNB() {
  return (
    <article>
      <section className="relative overflow-hidden">
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
        <Container className="relative">
          <div className="flex min-h-[46vh] max-w-3xl flex-col justify-center gap-6 py-20 lg:py-24">
            <SectionEyebrow tone="light">{aboutNB.eyebrow}</SectionEyebrow>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Packaging capability,
              <span className="block text-silver-300">built around performance.</span>
            </h1>
            <p className="max-w-2xl text-[16px] leading-relaxed text-silver-300 sm:text-[17px]">
              {aboutNB.profile[0]}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex max-w-3xl flex-col gap-6">
            <SectionTitle eyebrow="Profile" title="A converter built around capability." tone="light" />
            <p className="text-[17px] leading-relaxed text-white/90">{aboutNB.profile[1]}</p>
            <p className="text-[17px] leading-relaxed text-white/90">{aboutNB.profile[2]}</p>
            <p className="text-[15px] leading-relaxed text-silver-300">{aboutNB.intro}</p>
          </div>
          <div className="relative mt-10 aspect-[16/9] w-full max-w-3xl overflow-hidden">
            <Image
              src="/images/Hands-On Process Detail.png"
              alt="Hands-on process check on a converting line"
              fill
              sizes="(min-width: 1024px) 48vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20" id="why-nb">
        <Container>
          <div className="flex max-w-3xl flex-col gap-8">
            <SectionTitle eyebrow="Why NB" title="Capability that goes beyond conversion." tone="light" />
            <div className="flex flex-col gap-6">
              {aboutNB.whyPoints.map((point, index) => (
                <div key={point} className="flex items-baseline gap-4">
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex max-w-3xl flex-col gap-6">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-black">
              {aboutNB.eyebrow}
            </span>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-4xl">
              Packaging engineered around the requirement.
            </h2>
            <p className="text-[15px] leading-relaxed text-black">{aboutNB.requirementCopy}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="flex flex-col gap-6">
              {(
                [
                  "Product Quality",
                  "Cost-effective Packaging Solutions",
                  "Timely Delivery",
                  "Customer-focused Service",
                ] as const
              ).map((title, index) => (
                <div key={title}>
                  <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-black">
                    {title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-black">{aboutNB.commitments[index]}</p>
                </div>
              ))}
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/Multi-Layer Structure Cross-Section.png"
                alt="Multi-layer flexible packaging structure cross-section"
                fill
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex max-w-2xl flex-col gap-10">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-black">Vision</p>
              <p className="mt-4 font-display text-xl font-semibold leading-[1.3] text-navy-900 sm:text-2xl">
                {aboutNB.vision}
              </p>
            </div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-black">Mission</p>
              <p className="mt-4 font-display text-xl font-semibold leading-[1.3] text-navy-900 sm:text-2xl">
                {aboutNB.mission}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            eyebrow="Sustainability"
            title={
              <>
                Packaging that performs.
                <span className="block">Packaging that moves forward.</span>
              </>
            }
          />

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/Mono-Material Film.png"
                alt="Mono-material flexible film"
                fill
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              {aboutNB.sustainability.map((paragraph) => (
                <p key={paragraph} className="text-[16px] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
