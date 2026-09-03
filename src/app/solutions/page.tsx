import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Packaging Solutions | NB Polyfilms",
  description:
    "Flexible printed laminates, pouches, rollstock and shrink sleeves from NB Polyfilms.",
};

const pouchApplications = [
  { href: "/solutions/pouches/application-01", label: "Application 01" },
  { href: "/solutions/pouches/application-02", label: "Application 02" },
  { href: "/solutions/pouches/application-03", label: "Application 03" },
  { href: "/solutions/pouches/application-04", label: "Application 04" },
] as const;

const shrinkSleeveApplications = [
  { href: "/solutions/shrink-sleeves/application-01", label: "Application 01" },
  { href: "/solutions/shrink-sleeves/application-02", label: "Application 02" },
] as const;

export default function SolutionsPage() {
  return (
    <main className="bg-paper">
      <section
        id="flexible-laminates"
        className="relative scroll-mt-28 overflow-hidden bg-navy-900 pt-36 text-white lg:pt-44"
      >
        <div className="field-fade absolute inset-0">
          <Image
            src="/images/Printed Laminate-In-Process.png"
            alt="Printed laminate film in process on a converting line"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="field-scrim absolute inset-0" />
        </div>
        <Container className="relative">
          <div className="grid gap-12 pb-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.7fr)] lg:items-end lg:pb-28">
            <div>
              <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-silver-300">
                Solutions
              </p>
              <h1 className="max-w-4xl font-hero text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
                Flexible Printed Laminates
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-silver-300">
                Flexible printed laminates combine printed films and sealant layers into roll-fed or converted packaging structures.
                They support pouch and rollstock formats where print clarity, machinability and pack integrity need to work together.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="pouches" className="scroll-mt-28 py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Flexible Laminates
            </p>
            <h2 className="font-hero text-5xl font-semibold leading-none text-navy-900 sm:text-6xl">
              Pouches
            </h2>
          </div>
          <div className="relative mt-10 aspect-[3/2] w-full max-w-3xl overflow-hidden">
            <Image
              src="/images/Pouch-Format-Grouping.png"
              alt="A grouping of flexible pouch formats"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pouchApplications.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-line bg-white p-6 transition-colors hover:border-blue-600 hover:bg-blue-50"
              >
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">0{index + 1}</span>
                <span className="mt-8 block font-display text-lg font-semibold text-navy-900">{item.label}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="rollstock" className="scroll-mt-28 bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <div>
              <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                Flexible Laminates
              </p>
              <h2 className="font-hero text-5xl font-semibold leading-none text-navy-900 sm:text-6xl">
                Rollstock
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                Printed and unprinted rollstock supplied for form-fill-seal and converting lines where consistent web handling is essential.
              </p>
              <Link href="/solutions/rollstock" className="mt-8 inline-block border border-line bg-paper p-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:border-blue-600 hover:text-blue-600">
                Explore rollstock
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/Finished-rollstock.png"
                alt="Finished roll of printed flexible packaging film"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="shrink-sleeves" className="scroll-mt-28 py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                Solutions
              </p>
              <h2 className="font-hero text-5xl font-semibold leading-none text-navy-900 sm:text-6xl">
                Shrink Sleeves
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                PVC and PETG shrink sleeves for full-body decoration where graphics wrap closely around the finished container shape.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden">
                <Image
                  src="/images/Shrink-Sleeve on-Container.png"
                  alt="Printed shrink sleeve applied to a container"
                  fill
                  sizes="(min-width: 1024px) 25vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {shrinkSleeveApplications.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border border-line bg-white p-6 transition-colors hover:border-blue-600 hover:bg-blue-50"
                  >
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">0{index + 1}</span>
                    <span className="mt-8 block font-display text-lg font-semibold text-navy-900">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
