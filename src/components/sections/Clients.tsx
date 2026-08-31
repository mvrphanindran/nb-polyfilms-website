import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

const PLACEHOLDER_SLOTS = Array.from({ length: 6 });

export function Clients() {
  return (
    <section className="relative bg-mist py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-4">
          <Eyebrow>Our Clients</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Some of our valued clients
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {PLACEHOLDER_SLOTS.map((_, i) => (
            <div
              key={i}
              className="flex aspect-[3/2] items-center justify-center bg-white"
            >
              <span className="h-9 w-28 bg-[repeating-linear-gradient(135deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_9px)]" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-faint">
          Client logos to be added.
        </p>
      </Container>
    </section>
  );
}
