import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { solutionsGallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packaging Solutions | NB Polyfilms",
  description:
    "Flexible packaging solutions from NB Polyfilms, by industry and application.",
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Intro */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
        <Container>
          <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Solutions
          </p>
          <h1 className="max-w-3xl font-hero text-5xl font-semibold leading-[0.98] text-balance text-white sm:text-6xl">
            Packaging solutions built around your product.
          </h1>
        </Container>
      </section>

      {/* Image sequence — each photograph is the content; click through to the
          relevant industry/application page. */}
      <div className="flex flex-col">
        {solutionsGallery.map((industry) => (
          <div key={industry.slug} className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 lg:px-16 lg:py-14">
            <Link href={`/industries/${industry.slug}`} className="block">
              <Image
                src={industry.banner as string}
                alt={`${industry.name} packaging`}
                width={1672}
                height={941}
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="h-auto w-full"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
