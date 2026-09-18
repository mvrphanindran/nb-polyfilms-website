import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function Positioning() {
  return (
    <section className="relative pb-24 pt-18 lg:pb-32 lg:pt-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <Eyebrow tone="light">NB Polyfilms</Eyebrow>
            <h2 className="max-w-2xl font-hero text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[4.5rem]">
              Packaging engineered around what matters.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              From printed laminates to finished flexible packaging, NB Polyfilms brings materials, converting and process expertise together to create packaging that performs consistently across demanding applications.
            </p>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-sm justify-self-center overflow-hidden lg:col-span-5 lg:max-w-none lg:justify-self-end">
            <Image
              src="/images/Printed Laminate Close-Up.png"
              alt="Close-up of printed flexible laminate film"
              fill
              sizes="(min-width: 1024px) 35vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
