import { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex items-center">
      <span
        className={`font-display text-xs font-semibold uppercase tracking-[0.28em] ${
          tone === "dark" ? "text-navy-900" : "text-white"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "split";
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "split" ? "md:flex-row md:items-end md:justify-between" : ""
      }`}
    >
      <div className="flex flex-col gap-5">
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2
          className={`font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem] ${
            tone === "dark" ? "text-navy-900" : "text-white"
          }`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`max-w-sm text-balance text-[15px] leading-relaxed ${
            tone === "dark" ? "text-ink" : "text-silver-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
