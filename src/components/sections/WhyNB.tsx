import { Container } from "@/components/ui/Container";

const pillars = [
  {
    number: "01",
    title: "Material Expertise",
    description: "Packaging structures developed around the requirements of the application.",
  },
  {
    number: "02",
    title: "Converting Capability",
    description: "Printing, lamination, slitting and finishing brought together within one packaging workflow.",
  },
  {
    number: "03",
    title: "Consistent Quality",
    description: "Controlled processes focused on repeatable performance from film to finished packaging.",
  },
] as const;

export function WhyNB() {
  return (
    <section id="why-nb" className="relative py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-14">
          <div className="max-w-4xl">
            <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-white xl:text-black">
              Why NB
            </p>
            <h2 className="font-hero text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[4.25rem] md:text-black">
              Built to perform. Built to deliver.
            </h2>
          </div>

          <div className="grid gap-8 border-t border-black/15 pt-8 md:grid-cols-3 lg:gap-10">
            {pillars.map((item) => (
              <article key={item.number} className="flex flex-col gap-5">
                <span className="font-display text-xl font-bold text-black">
                  {item.number}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-black">
                    {item.title}
                  </h3>
                  <p className="max-w-sm text-[15px] leading-relaxed text-black">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
