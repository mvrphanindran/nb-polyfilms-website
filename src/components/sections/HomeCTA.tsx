import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HomeCTA() {
  return (
    <section className="relative bg-paper py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 border-t border-line pt-12 sm:flex-row sm:items-center">
          <h2 className="max-w-md font-display text-balance text-2xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl">
            Great packaging starts with a conversation.
          </h2>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 bg-navy-900 px-7 py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-600"
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </section>
  );
}
