import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

const CONTACT_FIELDS = [
  { label: "Corporate Office" },
  { label: "Manufacturing Unit" },
  { label: "Phone" },
  { label: "Email" },
  { label: "Website" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col justify-between gap-14 lg:col-span-4">
            <div className="flex flex-col gap-6">
              <Eyebrow tone="light">Let&apos;s Connect</Eyebrow>
              <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
                Great packaging starts with a conversation.
              </h2>
              <p className="text-[15px] leading-relaxed text-silver-300">
                We&apos;re ready when you are.
              </p>
            </div>
            <span className="h-px w-16 bg-blue-500" />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col">
              {CONTACT_FIELDS.map((field) => (
                <div
                  key={field.label}
                  className="flex flex-col gap-4 border-t border-line-dark py-7 first:border-t-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-500">
                    {field.label}
                  </span>
                  <span className="h-px flex-1 self-center bg-line-dark sm:mx-6" />
                  <span className="text-sm italic text-silver-400/70">
                    To be added
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
