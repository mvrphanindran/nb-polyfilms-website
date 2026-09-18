import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  process,
  rotogravurePresses,
  inlineFlexoPress,
  solventlessLamination,
  triplexLamination,
  extrusionCoatingLamination,
  uvCoating,
  hotFoilStamping,
  slitting,
  blownFilm,
} from "@/lib/content";

type Tone = "dark" | "light";

function CapabilityEyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: Tone }) {
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

function CapabilityTitle({ tone = "dark", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <h3
      className={`mt-4 font-display text-3xl font-semibold leading-[1.06] tracking-tight sm:text-4xl ${
        tone === "dark" ? "text-navy-900" : "text-white"
      }`}
    >
      {children}
    </h3>
  );
}

function SpecPair({ label, value, tone = "dark" }: { label: string; value: string; tone?: Tone }) {
  return (
    <div
      className={`flex flex-col gap-1.5 border-t py-3 ${
        tone === "dark" ? "border-navy-900/15" : "border-white/20"
      }`}
    >
      <span
        className={`text-[11px] uppercase tracking-[0.08em] ${tone === "dark" ? "text-ink-faint" : "text-white/70"}`}
      >
        {label}
      </span>
      <span className={`font-display text-xl font-bold leading-none ${tone === "dark" ? "text-black" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

function MachineColumn({
  name,
  specs,
  tone = "dark",
}: {
  name: string;
  specs: { label: string; value: string }[];
  tone?: Tone;
}) {
  return (
    <div className={`flex flex-col gap-3 border-t pt-4 ${tone === "dark" ? "border-navy-900/15" : "border-white/20"}`}>
      <span className={`font-display text-sm font-semibold ${tone === "dark" ? "text-navy-900" : "text-white"}`}>
        {name}
      </span>
      <div className="flex flex-col gap-1.5">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-baseline justify-between gap-3">
            <span className={`text-[12px] uppercase tracking-[0.06em] ${tone === "dark" ? "text-ink-faint" : "text-white/85"}`}>
              {spec.label}
            </span>
            <span className={`text-[13px] font-medium ${tone === "dark" ? "text-navy-900" : "text-white/90"}`}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapabilityImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative ${aspect} w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function ManufacturingCapabilities() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Manufacturing Capabilities"
          title={
            <>
              From film to
              <br />
              finished packaging.
            </>
          }
          description="End-to-end capabilities that ensure precision, performance and reliability in every roll and pouch."
          align="split"
          tone="light"
        />
      </Container>

      {/* Lead image — the manufacturing environment */}
      <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden lg:mt-16">
        <Image
          src="/images/capabilities-hero.png"
          alt="NB Polyfilms converting line in operation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Process rail */}
      <Container className="mt-14 lg:mt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {process.map((step) => (
            <div key={step.step} className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={step.image}
                  alt={`${step.label} — NB Polyfilms manufacturing process`}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline gap-3 border-t border-line bg-white/90 px-2 pt-3">
                <span className="font-display text-xs font-semibold text-navy-900">
                  {step.step}
                </span>
                <span className="font-display text-[11px] font-medium uppercase tracking-[0.1em] text-navy-900">
                  {step.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Rotogravure Printing */}
      <div id="rotogravure-printing" className="relative mt-24 scroll-mt-28 lg:mt-32">
        <Container>
          <div className="max-w-2xl">
            <CapabilityEyebrow tone="light">Printing — Rotogravure</CapabilityEyebrow>
            <CapabilityTitle tone="light">Rotogravure Printing</CapabilityTitle>
            <p className="mt-5 text-[15px] leading-relaxed text-white/85">
              Four rotogravure presses handle the majority of NB Polyfilms&apos; printing, covering
              web widths from 1000&nbsp;mm to 1300&nbsp;mm and speeds from 200 to 350 metres per minute.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {rotogravurePresses.map((press) => (
              <MachineColumn
                key={press.name}
                tone="light"
                name={press.name}
                specs={[
                  { label: "Speed", value: press.speed },
                  { label: "Max Width", value: press.width },
                  { label: "Colours", value: press.colours },
                ]}
              />
            ))}
          </div>

          <CapabilityImage
            src="/images/Rotogravure_Printing_press_in_operation.png"
            alt="Rotogravure printing press in operation at NB Polyfilms"
            aspect="aspect-[21/9]"
            sizes="(min-width: 1024px) 1300px, 100vw"
            className="mt-12"
          />
        </Container>
      </div>

      {/* In-line Flexo */}
      <div id="in-line-flexo" className="relative mt-20 scroll-mt-28 lg:mt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <CapabilityImage
                src="/images/In-line_Flexo Printing_press.png"
                alt="In-line flexo printing press at NB Polyfilms"
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="lg:col-span-7">
              <CapabilityEyebrow tone="light">Printing — In-line Flexo</CapabilityEyebrow>
              <CapabilityTitle tone="light">In-line Flexo</CapabilityTitle>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/85">
                A dedicated in-line flexo press runs at up to 175 metres per minute across a
                670&nbsp;mm web, printing in up to ten colours.
              </p>
              <div className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                <SpecPair tone="light" label="Speed" value={inlineFlexoPress.speed} />
                <SpecPair tone="light" label="Max Width" value={inlineFlexoPress.width} />
                <SpecPair tone="light" label="Colours" value={inlineFlexoPress.colours} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Lamination */}
      <div id="lamination" className="relative mt-20 scroll-mt-28 lg:mt-28">
        <Container>
          <CapabilityEyebrow tone="light">Lamination</CapabilityEyebrow>
        </Container>

        {/* Solventless — this block's proportional position on the page moves
            from the dark upper field (mobile/tablet, stacked layout) into the
            pale lower field (desktop, two-column layout) across breakpoints,
            so tone flips with it rather than following a fixed light/dark prop. */}
        <Container className="mt-20 lg:mt-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-black">
                Solventless Lamination
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white lg:text-black">
                Four solventless laminators, all built to the same specification, laminate at
                up to 350 metres per minute across a 1300&nbsp;mm web.
              </p>
              <div className="mt-6 grid max-w-sm grid-cols-3 gap-x-6 gap-y-6">
                {[
                  { label: "Machines", value: solventlessLamination.quantity },
                  { label: "Max Width", value: solventlessLamination.width },
                  { label: "Speed", value: solventlessLamination.speed },
                ].map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1.5 border-t border-white/20 py-3 lg:border-navy-900/15">
                    <span className="text-[11px] uppercase tracking-[0.08em] text-white/70 lg:text-ink-faint">
                      {spec.label}
                    </span>
                    <span className="font-display text-xl font-bold leading-none text-white lg:text-black">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <CapabilityImage
                src="/images/Solventless_Lamination_line.png"
                alt="Solventless lamination line at NB Polyfilms"
                aspect="aspect-[3/2]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </Container>

        {/* Triplex — Two-Pass Lamination */}
        <Container className="mt-20 lg:mt-24">
          <div className="max-w-2xl">
            <CapabilityTitle>Triplex — Two-Pass Lamination</CapabilityTitle>
            <p className="mt-5 text-[15px] leading-relaxed text-black">
              The triplex two-pass laminator runs a 14-metre drying hood at temperatures up to
              220°C, laminating at up to 200 metres per minute across a 1020&nbsp;mm web.
            </p>
          </div>
          <CapabilityImage
            src="/images/Triplex_Two-Pass Lamination—line.png"
            alt="Triplex two-pass lamination line at NB Polyfilms"
            aspect="aspect-[21/9]"
            sizes="(min-width: 1024px) 1300px, 100vw"
            className="mt-10"
          />
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            <SpecPair label="Speed" value={triplexLamination.speed} />
            <SpecPair label="Hood Length" value={triplexLamination.hoodLength} />
            <SpecPair label="Hot Air" value={triplexLamination.hotAir} />
            <SpecPair label="Max Width" value={triplexLamination.width} />
          </div>
        </Container>
      </div>

      {/* Extrusion Coating Lamination */}
      <div id="extrusion-coating-lamination" className="relative mt-20 scroll-mt-28 lg:mt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <CapabilityEyebrow>Extrusion Coating Lamination</CapabilityEyebrow>
              <CapabilityTitle>Extrusion Coating Lamination</CapabilityTitle>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-black">
                Extrusion coating lamination applies coat weights from 7 to 30 gsm across web
                widths up to 1300&nbsp;mm.
              </p>
              <div className="mt-6 grid max-w-sm grid-cols-2 gap-x-6 gap-y-6">
                <SpecPair label="Coating" value={extrusionCoatingLamination.coating} />
                <SpecPair label="Max Width" value={extrusionCoatingLamination.width} />
              </div>
            </div>
            <div className="lg:col-span-7">
              <CapabilityImage
                src="/images/Extrusion_Coating Lamination—detail.png"
                alt="Extrusion coating lamination detail at NB Polyfilms"
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* UV Coating */}
      <div id="uv-coating" className="relative mt-20 scroll-mt-28 lg:mt-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <CapabilityImage
                src="/images/UV_Coating_station.png"
                alt="UV coating station at NB Polyfilms"
                aspect="aspect-[16/9]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="lg:col-span-5">
              <CapabilityEyebrow>UV Coating</CapabilityEyebrow>
              <CapabilityTitle>UV Coating</CapabilityTitle>
              <p className="mt-5 text-[15px] leading-relaxed text-black">
                A flexo coating station applies registered UV coating at up to 200 metres per
                minute across a 1080&nbsp;mm web.
              </p>
              <div className="mt-6 grid max-w-sm grid-cols-2 gap-x-6 gap-y-6">
                <SpecPair label="Speed" value={uvCoating.speed} />
                <SpecPair label="Max Width" value={uvCoating.width} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Hot Foil Stamping & Embossing */}
      <div id="hot-foil-stamping-embossing" className="relative mt-20 scroll-mt-28 lg:mt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <CapabilityImage
                src="/images/Flat_Bed_Hot_Foil_Stamping_Embossing_machine.png"
                alt="Flat bed hot foil stamping and embossing machine at NB Polyfilms"
                aspect="aspect-[3/2]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="lg:col-span-7">
              <CapabilityEyebrow>Finishing</CapabilityEyebrow>
              <CapabilityTitle>Flat Bed Hot Foil Stamping &amp; Embossing</CapabilityTitle>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-black">
                Flat bed hot foil stamping and embossing runs at up to 125 stamps per minute
                across a 1080&nbsp;mm web.
              </p>
              <div className="mt-6 grid max-w-md grid-cols-2 gap-x-8 gap-y-6">
                <SpecPair label="Speed" value={hotFoilStamping.speed} />
                <SpecPair label="Max Width" value={hotFoilStamping.width} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Slitting */}
      <div id="slitting" className="relative mt-20 scroll-mt-28 lg:mt-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 lg:order-2">
              <CapabilityImage
                src="/images/Slitting_&_Rewinding_line.png"
                alt="Slitting and rewinding line at NB Polyfilms"
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <CapabilityEyebrow>Slitting</CapabilityEyebrow>
              <CapabilityTitle>Slitting</CapabilityTitle>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-black">
                Four slitting machines, all built to the same specification, slit and rewind at
                up to 450 metres per minute across a 1300&nbsp;mm web.
              </p>
              <div className="mt-6 grid max-w-lg grid-cols-3 gap-x-6 gap-y-6">
                <SpecPair label="Machines" value={slitting.quantity} />
                <SpecPair label="Speed" value={slitting.speed} />
                <SpecPair label="Max Width" value={slitting.width} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Blown Film */}
      <div id="blown-film" className="relative mt-20 scroll-mt-28 lg:mt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <CapabilityImage
                src="/images/ThreeLayer_Blown Film_line.png"
                alt="Three-layer blown film line at NB Polyfilms"
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="lg:col-span-7">
              <CapabilityEyebrow>Film Extrusion</CapabilityEyebrow>
              <CapabilityTitle>Blown Film</CapabilityTitle>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-black">
                A three-layer blown film line produces film at up to 200 kg per hour across a
                1600&nbsp;mm web width.
              </p>
              <div className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                <SpecPair label="Structure" value={blownFilm.layers} />
                <SpecPair label="Output" value={blownFilm.output} />
                <SpecPair label="Max Width" value={blownFilm.width} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Closing statement */}
      <div className="relative mt-24 lg:mt-32">
        <Container>
          <p className="mx-auto max-w-xl text-balance text-center font-display text-xl font-medium leading-snug text-navy-900">
            State-of-the-art infrastructure for flexible packaging.
          </p>
        </Container>
      </div>
    </section>
  );
}
