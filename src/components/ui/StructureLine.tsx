export function StructureLine({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute left-6 top-0 h-full w-px md:left-10 lg:left-16 ${
        tone === "light" ? "bg-white/15" : "bg-line"
      }`}
    />
  );
}
