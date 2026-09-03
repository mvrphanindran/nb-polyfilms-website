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
    <section id="why-nb" className="relative bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-14">
          <div className="max-w-4xl">
            <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Why NB
            </p>
            <h2 className="font-hero text-balance text-5xl font-semibold leading-[0.98] text-navy-900 sm:text-6xl lg:text-[4.25rem]">
              Built to perform. Built to deliver.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {pillars.map((item) => (
              <article
                key={item.number}
                className="group flex min-h-72 flex-col justify-between bg-mist/55 p-8 transition-colors duration-300 hover:bg-blue-50/70 sm:p-9 lg:min-h-80 lg:p-10"
              >
                <span className="font-display text-sm font-semibold text-blue-600">
                  {item.number}
                </span>
                <div className="mt-16 flex flex-col gap-5">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-navy-900">
                    {item.title}
                  </h3>
                  <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
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
