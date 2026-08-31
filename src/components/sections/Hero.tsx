import Image from "next/image";
import Link from "next/link";
import { StructureLine } from "@/components/ui/StructureLine";
import { companyMeta } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-white">
      {/* One continuous field: photography + brand scrim, masked as a single
          unit so the whole composition dissolves toward white together —
          no separate overlay boxes, no hard edges. */}
      <div className="field-fade absolute inset-0">
        <Image
          src="/images/brochure/hero-rollstock.jpg"
          alt="Printed rollstock film for flexible packaging on an NB Polyfilms production line"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_50%]"
        />
        <div className="field-scrim absolute inset-0" />
      </div>

      <StructureLine tone="light" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col justify-center gap-8 px-6 pb-28 pt-36 md:px-10 lg:px-16 lg:pt-32">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            NB Polyfilms
          </span>
        </div>

        <h1 className="font-display text-balance text-[3.1rem] font-semibold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
          Flexible
          <br />
          Packaging
        </h1>

        <div className="flex flex-col gap-1">
          <span className="font-display text-lg font-medium uppercase tracking-[0.08em] text-silver-300 sm:text-xl">
            Engineered for
          </span>
          <span className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-blue-400 sm:text-xl">
            Performance
          </span>
        </div>

        <span className="h-px w-16 bg-white/20" />

        <p className="max-w-sm font-display text-[13px] font-medium uppercase tracking-[0.12em] text-silver-400">
          {companyMeta.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 bg-white px-7 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-navy-900 transition-colors hover:bg-blue-500 hover:text-white"
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-2 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:text-blue-400"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
